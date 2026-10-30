#!/usr/bin/env node
// Builds one self-contained HTML file from src/ → dist/snowflake-practice-test.html
// Usage: node tools/build.mjs            (fully offline file: React + fonts embedded)
//        node tools/build.mjs --online   (smaller file, loads React + fonts from the internet)
// Needs Node 18+ (built-in fetch). No npm packages.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const OUT = join(ROOT, 'dist');
const ONLINE = process.argv.includes('--online');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const KEEP_FONT_SUBSETS = ['latin', 'latin-ext'];

const toDataUrl = (mime, content) =>
  `data:${mime};base64,${Buffer.from(content).toString('base64')}`;
const inlineScript = (code) => code.replace(/<\/script/gi, '<\\/script');

async function fetchBuffer(url, headers = {}) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`Download failed (${res.status}): ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function embedGoogleFonts(css) {
  const m = css.match(/@import url\(['"]?(https:\/\/fonts\.googleapis\.com[^'")]+)['"]?\);?/);
  if (!m) return css;
  const fontCss = (await fetchBuffer(m[1], { 'User-Agent': UA })).toString('utf8');
  const blocks = fontCss.split(/(?=\/\* [a-z-]+ \*\/)/)
    .filter(b => KEEP_FONT_SUBSETS.some(s => b.startsWith(`/* ${s} */`)));
  let out = blocks.join('');
  for (const url of new Set([...out.matchAll(/url\((https:[^)]+)\)/g)].map(x => x[1]))) {
    out = out.split(`url(${url})`).join(`url(${toDataUrl('font/woff2', await fetchBuffer(url))})`);
  }
  return css.replace(m[0], out);
}

let html = await readFile(join(SRC, 'index.dc.html'), 'utf8');
const runtime = await readFile(join(SRC, 'support.js'), 'utf8');

// The runtime loads React from a CDN unless window.__resources maps the URL to an embedded copy.
const resources = {};
if (!ONLINE) {
  for (const name of ['REACT_URL', 'REACT_DOM_URL']) {
    const url = runtime.match(new RegExp(`var ${name} = "([^"]+)"`))?.[1];
    if (!url) throw new Error(`Could not find ${name} in support.js`);
    resources[url] = toDataUrl('text/javascript', await fetchBuffer(url));
  }
}

const runtimeTag = '<script src="./support.js"></script>';
if (!html.includes(runtimeTag)) throw new Error('index.dc.html must load ./support.js');
html = html.replace(runtimeTag, () =>
  `<script>window.__resources = ${JSON.stringify(resources)};</script>\n<script>${inlineScript(runtime)}</script>`);

// Local <script src> and stylesheets inside <helmet> become data: URLs, so load order stays identical.
const scriptTags = [...html.matchAll(/<script src="(?!https?:|data:)([^"]+)"><\/script>/g)];
for (const [tag, path] of scriptTags) {
  const code = await readFile(join(SRC, path), 'utf8');
  html = html.replace(tag, () => `<script src="${toDataUrl('text/javascript', code)}"></script>`);
}
const styleTags = [...html.matchAll(/<link rel="stylesheet" href="(?!https?:|data:)([^"]+)">/g)];
for (const [tag, path] of styleTags) {
  let css = await readFile(join(SRC, path), 'utf8');
  if (!ONLINE) css = await embedGoogleFonts(css);
  html = html.replace(tag, () => `<link rel="stylesheet" href="${toDataUrl('text/css', css)}">`);
}

await mkdir(OUT, { recursive: true });
await writeFile(join(OUT, 'snowflake-practice-test.html'), html);
await writeFile(join(OUT, 'index.html'), html);
console.log(`✓ dist/snowflake-practice-test.html (${(html.length / 1024).toFixed(0)} KB, ${ONLINE ? 'needs internet' : 'works offline'})`);
console.log(`  inlined ${scriptTags.length} scripts and ${styleTags.length} stylesheet(s)`);
