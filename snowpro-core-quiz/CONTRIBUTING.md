# Contributing

Thanks for helping improve the practice test. Most contributions are question fixes, and you can make those without touching any app code.

## Report a mistake

[Open an issue](https://github.com/dataregulator3/snowflake-community-resources/issues/new/choose) with the **SnowPro Core quiz: wrong or unclear answer** template. Include a link to the Snowflake documentation that supports the correct answer.

## Fix or add questions

### 1. Find the right file

All questions live in `src/data/`. Each file registers one or more tests:

| File | Tests |
| --- | --- |
| `practice.js` | Practice Quizzes 1–5 |
| `domain.js` | SnowPro Core Domain Quizzes 1–5 |
| `scenario-d1.js` … `scenario-d6.js` | Scenario-based questions, one file per domain |
| `facts.js` | Facts · Numbers, Facts · Reference |
| `numbers-test.js` | Facts · Key Figures |
| `mock-exam.js`, `mock-exam-2.js` | Mock Exams 1 and 2 |

Tip: search the repo for a few words of the question text to find it quickly.

### 2. Question format

```js
{ kind:"single", text:"Which layer manages metadata?", options:[
    {t:"Storage", c:false},
    {t:"Cloud Services", c:true},          // c:true marks the correct answer
    {t:"Compute", c:false} ],
  explanation:"The Cloud Services layer handles metadata and optimization." }
```

| Field | Required | Notes |
| --- | --- | --- |
| `kind` | yes | `"single"`, `"multi"` or `"match"` |
| `text` | yes | The question. `\n` starts a new line |
| `code` | no | A SQL snippet, shown as a code block |
| `options` | single/multi | At least 2. `t` = text, `c` = correct (`true`/`false`) |
| `choose` | multi | How many answers to pick. Must equal the number of `c:true` options |
| `leftItems` | match | `[{l:"Left item", r:"Matching right item"}, …]` |
| `explanation` | recommended | Shown after answering and in the review |

Answer options are shuffled in the app, so their order in the file doesn't matter.

### 3. Add a new test

Create a new file in `src/data/` (copy an existing one as a starting point) with a unique `id` and `order`:

```js
window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "snowpark-basics",        // unique, never change it later (saved results use it)
  order: 601,                   // position on the overview, sorted ascending
  group: "Extra",               // block heading; tests with the same group sit together
  kicker: "Extra · Snowpark",   // small label on the card
  title: "Snowpark Basics",
  topic: "One sentence about what the test covers.",
  questions: [ /* … */ ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) window.QUIZZES.push(quiz);
})();
```

Then load it in the `<helmet>` at the top of `src/index.dc.html`:

```html
<script src="data/snowpark-basics.js"></script>
```

Order ranges in use: 100s Practice, 200s Domain, 300s Scenario, 400s Facts, 500s Mock Exams.

### 4. Check your change

Run these inside `snowpro-core-quiz/`:

```bash
node tools/validate.mjs   # checks answer keys, ids and that every file is loaded
npm run dev               # opens the app at http://localhost:8000
```

`validate` fails if, for example, a `choose:2` question has three correct answers. The same check runs automatically on every pull request.

### 5. Open a pull request

Fork the repo, commit your change and open a pull request. Mention the documentation link in the description.

## Change the app itself

The app is in `src/index.dc.html`: the layout at the top, the logic in the `class Component` block at the bottom. `src/support.js` is the runtime that renders it, and `src/_ds/` holds the stylesheet. Please don't edit `support.js`.

Build the single-file version with `node tools/build.mjs`. It writes `dist/snowflake-practice-test.html`.
