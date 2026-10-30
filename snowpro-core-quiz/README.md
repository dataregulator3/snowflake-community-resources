# SnowPro Core (COF-C03) Practice Test

A free practice test app for the **Snowflake SnowPro Core (COF-C03)** certification: **21 tests with 812 questions**, instant feedback and a pass/fail score. It runs in the browser, works offline and on mobile, and needs no account.

> **Unofficial study aid.** This project is not affiliated with or endorsed by Snowflake Inc.

**▶ [Open the practice test](https://dataregulator3.github.io/snowflake-community-resources/snowpro-core-quiz/)** · **[Download the offline file](https://dataregulator3.github.io/snowflake-community-resources/snowpro-core-quiz/snowflake-practice-test.html)** (right-click → *Save link as*)

Part of [snowflake-community-resources](https://github.com/dataregulator3/snowflake-community-resources).

---

## What's inside

| Block | Tests | Questions | Focus |
| --- | --- | --- | --- |
| Practice Quizzes | 5 | 44 | Short warm-ups |
| SnowPro Core — Domain Quizzes | 5 × 30 | 150 | One quiz per exam domain |
| Scenario-based questions (with code snippets) | 6 × 50 | 300 | Harder questions, SQL syntax |
| Facts | 3 | 118 | Numbers, limits, editions, roles |
| Realistic mock exam | 2 × 100 | 200 | Weighted by domain, like the real exam |
| **Total** | **21** | **812** | |

Question types: single choice, multiple choice ("choose 2/3") and matching.

## Features

- **Instant feedback.** *Check answer* shows right away whether you were correct, highlights the correct option, and shows the right answer and an explanation if you were wrong.
- **Score and pass mark.** Each test ends with your percentage and a **Passed / Failed** result against a **75% pass mark** (the real exam's 750/1000).
- **Full review** of every question, with your answer, the correct answer and the explanation.
- **Shuffling.** Questions and options are shuffled on every run.
- **Saved progress.** Results stay in your browser (`localStorage`). Click a result badge on a card to reopen the review. Nothing leaves your device.
- **Responsive.** It works on desktop, tablet and phone.

## A note on difficulty

These questions are **not as hard as the real exam**. The real COF-C03 is much more **use-case oriented**: most questions describe a scenario and ask what you would do. Use this app to build a foundation in the core concepts, numbers and syntax, then practise applying them with the official practice exams and the [Snowflake documentation](https://docs.snowflake.com).

---

## Folder layout

```
snowpro-core-quiz/
  src/
    index.dc.html     the app: layout + logic
    data/             all questions, one or more tests per file
    support.js        the runtime that renders the app (don't edit)
    _ds/              stylesheet and design tokens
  tools/
    validate.mjs      checks every answer key
    build.mjs         bundles src/ into one HTML file
```

The workflow and the issue template live in the repo root under `.github/`.

## Run and edit locally

You need [Node.js 18+](https://nodejs.org). No `npm install` is required. Run the commands inside `snowpro-core-quiz/`.

```bash
cd snowpro-core-quiz
npm run dev        # serves src/ at http://localhost:8000
npm run validate   # checks all questions
npm run build      # writes dist/snowflake-practice-test.html (works offline)
```

Without Node, `python3 -m http.server -d src 8000` also works. Opening `src/index.dc.html` by double-click usually doesn't, because browsers block local scripts.

To fix a question, edit the matching file in `src/data/`. [CONTRIBUTING.md](CONTRIBUTING.md) explains the question format and how to add a new test.

## How publishing works

Every push to `main` that touches this folder runs [the workflow](../.github/workflows/snowpro-core-quiz.yml). It validates all questions, builds the single HTML file and publishes it to **GitHub Pages**. Pull requests are validated too, and the built file is attached to each run as a downloadable artifact.

**One-time setup:** in the repo, go to *Settings → Pages* and set *Source* to **GitHub Actions**.

## How it was built

1. **Question generation.** An AI agent that works on the official Snowflake documentation wrote the scenario-based questions, the fact and key-figure tests and both mock exams, including answers and explanations.
2. **App build.** The question sets, together with study notes, course material and a revision sheet, were given to **Claude (Claude Design)**. Claude converted them into a structured question bank, checked and fixed every answer key, wrote an additional 150 domain questions, translated the content into English and built the app.
3. **Iteration.** The app was refined through repeated testing: instant feedback, a mobile layout, the 75% pass mark and additional test blocks.

## Contributing

Found a wrong answer? [Open an issue](https://github.com/dataregulator3/snowflake-community-resources/issues/new/choose) or send a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md).

## Disclaimer

This is an unofficial, community-made study aid. The questions are AI-generated from public documentation, and the answer keys are checked automatically, but errors are possible. Always check against the official Snowflake documentation. *Snowflake* and *SnowPro* are trademarks of Snowflake Inc.

Good luck on your exam! ❄️
