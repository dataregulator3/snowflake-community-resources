# SnowPro Core (COF-C03) Practice Test

A free, offline practice test app for the **Snowflake SnowPro Core (COF-C03)** certification: **21 tests with 812 questions**, instant feedback and a pass/fail score. Everything is in one HTML file. It needs no install, no account and no server.

> **Unofficial study aid.** This project is not affiliated with or endorsed by Snowflake Inc.

---

## Quick start

1. Download **`Snowflake Practice Test.html`**.
2. Open it in any modern browser (Chrome, Edge, Firefox or Safari).
3. Pick a test and start.

It works offline and on mobile. To keep it on your phone's home screen, open it in the browser and choose *Add to Home Screen*.

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

---

## Features

- **Instant feedback.** Click *Check answer* to see right away whether you were correct. The correct option is highlighted, and if you were wrong, the right answer and a short explanation appear before you move on.
- **Score and pass mark.** Each test ends with your percentage, your number of correct answers and a **Passed / Failed** result against a **75% pass mark** (the real exam's 750/1000).
- **Full review.** Every question is listed with your answer, the correct answer and the explanation.
- **Shuffling.** Questions and answer options are shuffled on every run, so retakes test recall, not answer positions.
- **Saved progress.** Results are stored locally in your browser (`localStorage`). Click a result badge on a card to reopen that review. Nothing leaves your device.
- **Responsive.** It works on desktop, tablet and phone.

---

## How it was built

1. **Question generation.** An AI agent that works on the official Snowflake documentation wrote the scenario-based questions, the fact and key-figure tests and both mock exams, including answers and explanations.
2. **App build.** The question sets, together with study notes, course material and a revision sheet, were given to **Claude (Claude Design)**. Claude:
   - converted everything into a structured question bank
   - checked every answer key and fixed mismatches, for example a question marked "choose 2" whose key had 3 correct answers
   - wrote an additional 150 domain questions based on the course content and exam domains
   - translated the content into English and built the interactive app
3. **Iteration.** The app was refined through repeated testing: instant feedback, a mobile layout, the 75% pass mark and additional test blocks.

---

## A note on difficulty

These questions are **not as hard as the real exam**. The real COF-C03 is much more **use-case oriented**: most questions describe a scenario and ask what you would do, rather than testing a single fact. Use this app to build a solid foundation in the core concepts, numbers and syntax, then practise applying them to real-world scenarios with the official practice exams and the [Snowflake documentation](https://docs.snowflake.com).

---

## Contributing

Found a wrong answer or an unclear question? Please [open an issue](../../issues) with:

- the test name and the question text
- the answer you believe is correct
- a link to the Snowflake documentation that supports it

Pull requests with corrections are welcome too.

---

## Disclaimer

This is an unofficial, community-made study aid. The questions are AI-generated from public documentation, and the answer keys were checked automatically, but errors are possible. Always check against the official Snowflake documentation. *Snowflake* and *SnowPro* are trademarks of Snowflake Inc.

Good luck on your exam! ❄️
