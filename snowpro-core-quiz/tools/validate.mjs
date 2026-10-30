#!/usr/bin/env node
// Checks every quiz file in src/data for structural and answer-key errors.
// Usage: node tools/validate.mjs        (exit code 1 if anything is wrong)
import { readFile, readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const DATA = join(SRC, 'data');

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

const html = await readFile(join(SRC, 'index.dc.html'), 'utf8');
const files = (await readdir(DATA)).filter(f => f.endsWith('.js')).sort();

const window = {};
const context = vm.createContext({ window });
for (const f of files) {
  if (!html.includes(`<script src="data/${f}"></script>`)) {
    err(`data/${f}`, 'not loaded — add <script src="data/' + f + '"></script> to the <helmet> in src/index.dc.html');
  }
  const before = (window.QUIZZES || []).length;
  try {
    vm.runInContext(await readFile(join(DATA, f), 'utf8'), context, { filename: f });
  } catch (e) {
    err(`data/${f}`, `JavaScript error — ${e.message}`);
    continue;
  }
  (window.QUIZZES || []).slice(before).forEach(q => { q.__file = f; });
  if ((window.QUIZZES || []).length === before) warn(`data/${f}`, 'registers no quiz (or only duplicates of existing ids)');
}

const quizzes = window.QUIZZES || [];
const ids = new Map();
const orders = new Map();
const KINDS = ['single', 'multi', 'match'];

for (const quiz of quizzes) {
  const qWhere = `data/${quiz.__file} › ${quiz.id || '(no id)'}`;
  for (const key of ['id', 'group', 'kicker', 'title', 'topic']) {
    if (typeof quiz[key] !== 'string' || !quiz[key].trim()) err(qWhere, `missing "${key}"`);
  }
  if (typeof quiz.order !== 'number') err(qWhere, 'missing numeric "order"');
  if (quiz.id) {
    if (ids.has(quiz.id)) err(qWhere, `duplicate id (also in data/${ids.get(quiz.id)})`);
    ids.set(quiz.id, quiz.__file);
  }
  if (typeof quiz.order === 'number') {
    if (orders.has(quiz.order)) err(qWhere, `duplicate order ${quiz.order} (also ${orders.get(quiz.order)})`);
    orders.set(quiz.order, quiz.id);
  }
  if (!Array.isArray(quiz.questions) || quiz.questions.length === 0) { err(qWhere, 'has no questions'); continue; }

  const seenText = new Set();
  quiz.questions.forEach((q, i) => {
    const where = `${qWhere} › Q${i + 1}`;
    if (!KINDS.includes(q.kind)) { err(where, `kind must be one of ${KINDS.join('/')}`); return; }
    if (typeof q.text !== 'string' || !q.text.trim()) err(where, 'missing "text"');
    if (!q.explanation) warn(where, 'no explanation');
    const key = (q.text || '') + (q.code || '');
    if (seenText.has(key)) warn(where, 'same text as an earlier question in this quiz');
    seenText.add(key);

    if (q.kind === 'match') {
      if (!Array.isArray(q.leftItems) || q.leftItems.length < 2) err(where, 'match questions need at least 2 leftItems');
      else q.leftItems.forEach((li, j) => { if (!li.l || !li.r) err(where, `leftItems[${j}] needs "l" and "r"`); });
      return;
    }
    if (!Array.isArray(q.options) || q.options.length < 2) { err(where, 'needs at least 2 options'); return; }
    q.options.forEach((o, j) => {
      if (typeof o.t !== 'string' || !o.t.trim()) err(where, `option ${j + 1} has no text`);
      if (typeof o.c !== 'boolean') err(where, `option ${j + 1} needs c:true or c:false`);
    });
    const texts = q.options.map(o => o.t);
    if (new Set(texts).size !== texts.length) err(where, 'duplicate option text');
    const correct = q.options.filter(o => o.c === true).length;
    if (q.kind === 'single' && correct !== 1) err(where, `single choice needs exactly 1 correct option, found ${correct}`);
    if (q.kind === 'multi') {
      if (!Number.isInteger(q.choose) || q.choose < 2) err(where, 'multi choice needs "choose" ≥ 2');
      else if (correct !== q.choose) err(where, `"choose:${q.choose}" but ${correct} options are marked correct`);
      if (q.choose >= q.options.length) err(where, '"choose" must be smaller than the number of options');
    }
  });
}

const total = quizzes.reduce((s, q) => s + (q.questions ? q.questions.length : 0), 0);
console.log(`\n${quizzes.length} quizzes · ${total} questions in ${files.length} files\n`);
for (const q of [...quizzes].sort((a, b) => a.order - b.order)) {
  console.log(`  ${String(q.order).padEnd(5)} ${q.id.padEnd(20)} ${String(q.questions.length).padStart(4)}  ${q.group} › ${q.title}`);
}
if (warnings.length) console.log(`\n${warnings.length} warning(s):\n  ` + warnings.join('\n  '));
if (errors.length) {
  console.error(`\n✗ ${errors.length} error(s):\n  ` + errors.join('\n  ') + '\n');
  process.exit(1);
}
console.log('\n✓ All answer keys are consistent.\n');
