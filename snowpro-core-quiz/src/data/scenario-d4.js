window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "scenario-d4",
  order: 304,
  group: "More challenging scenario-based questions (with code snippets)",
  kicker: "Scenario · Domain 4",
  title: "Data Loading & Unloading",
  topic: "COPY INTO options, PUT/GET, stages, file formats, Snowpipe, load metadata and unload targets. 50 questions.",
  questions: [
    { kind:"single", text:"COPY INTO <table> is used for:", options:[
      {t:"Unloading data", c:false},
      {t:"Bulk loading from a stage into a table", c:true},
      {t:"Creating a role", c:false},
      {t:"Cloning", c:false} ],
      explanation:"It bulk-loads staged files into a table." },
    { kind:"single", text:"PUT transfers:", options:[
      {t:"Stage → local file", c:false},{t:"Local file → internal stage", c:true},{t:"Table → stage", c:false},{t:"Stage → table", c:false} ],
      explanation:"PUT uploads local files to an internal stage." },
    { kind:"single", text:"GET transfers:", options:[
      {t:"Internal stage → local file", c:true},{t:"Local → stage", c:false},{t:"Table → stage", c:false},{t:"External → internal stage", c:false} ],
      explanation:"GET downloads from a stage to local." },
    { kind:"multi", choose:2, text:"Which are internal stage types?", code:"-- user stage\nLIST @~;\n-- table stage\nLIST @%my_table;", options:[
      {t:"User stage (@~)", c:true},
      {t:"Table stage (@%tab)", c:true},
      {t:"External stage", c:false},
      {t:"Region stage", c:false} ],
      explanation:"User and table stages are internal; external stages point at cloud storage." },
    { kind:"single", text:"What is the default file format if FILE_FORMAT is omitted?", options:[
      {t:"JSON", c:false},{t:"CSV", c:true},{t:"Parquet", c:false},{t:"Avro", c:false} ],
      explanation:"CSV is the default." },
    { kind:"single", text:"What does this option mean?", code:"COPY INTO t FROM @stage ON_ERROR = 'SKIP_FILE_5%';", options:[
      {t:"Skip 5 files", c:false},
      {t:"Skip the file if more than 5% of rows are erroneous", c:true},
      {t:"Load 5%", c:false},
      {t:"Abort at 5%", c:false} ],
      explanation:"The file is skipped once the error rate exceeds 5%." },
    { kind:"single", text:"What is the ON_ERROR default for COPY INTO <table> (bulk)?", options:[
      {t:"CONTINUE", c:false},{t:"SKIP_FILE", c:false},{t:"ABORT_STATEMENT", c:true},{t:"SKIP_FILE_10%", c:false} ],
      explanation:"Bulk loading defaults to ABORT_STATEMENT." },
    { kind:"single", text:"What does MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE require?", code:"COPY INTO t FROM @stage\n  FILE_FORMAT = (TYPE = JSON)\n  MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE;", options:[
      {t:"A VARIANT column", c:false},
      {t:"Target columns whose names match the JSON keys", c:true},
      {t:"Uncompressed files", c:false},
      {t:"CSV format", c:false} ],
      explanation:"Target column names must match the source keys." },
    { kind:"single", text:"For continuous auto-loading of new files from S3, you use:", options:[
      {t:"Snowpipe (AUTO_INGEST)", c:true},{t:"A task alone", c:false},{t:"A stream alone", c:false},{t:"A materialized view", c:false} ],
      explanation:"Snowpipe with AUTO_INGEST." },
    { kind:"multi", choose:2, text:"Snowpipe auto-ingest requires/has:", code:"CREATE PIPE p AUTO_INGEST = TRUE AS\n  COPY INTO t FROM @stage;\nSHOW PIPES;", options:[
      {t:"A cloud event notification (SQS/SNS/Event Grid)", c:true},
      {t:"A user-paid warehouse", c:false},
      {t:"A notification_channel from SHOW PIPES", c:true},
      {t:"Guaranteed load ordering", c:false} ],
      explanation:"Event notifications plus the notification_channel; Snowpipe is serverless and does not guarantee ordering." },
    { kind:"single", text:"Snowpipe is billed as:", options:[
      {t:"A user warehouse", c:false},
      {t:"Serverless (per file loaded plus compute)", c:true},
      {t:"Free", c:false},
      {t:"Per user", c:false} ],
      explanation:"Serverless billing." },
    { kind:"single", text:"What does VALIDATION_MODE = RETURN_ALL_ERRORS do?", options:[
      {t:"Loads data and shows errors", c:false},
      {t:"Validates without loading and returns all errors", c:true},
      {t:"Skips errors silently", c:false},
      {t:"Aborts", c:false} ],
      explanation:"It validates without loading." },
    { kind:"single", text:"How does Snowflake prevent loading the same file twice by default?", options:[
      {t:"A primary key", c:false},
      {t:"Load metadata (file name + ETag), ~64 days", c:true},
      {t:"FORCE=TRUE", c:false},
      {t:"It does not", c:false} ],
      explanation:"Load metadata retained ~64 days." },
    { kind:"single", text:"What does FORCE = TRUE on COPY do?", options:[
      {t:"Forces a reload of already loaded files", c:true},
      {t:"Forces an abort", c:false},
      {t:"Enables validation", c:false},
      {t:"Compresses", c:false} ],
      explanation:"It bypasses load metadata and reloads." },
    { kind:"single", text:"What does PURGE = TRUE do on COPY INTO <table>?", options:[
      {t:"Deletes the source files in the stage after a successful load", c:true},
      {t:"Deletes the table", c:false},
      {t:"Clears the cache", c:false},
      {t:"Purges Time Travel", c:false} ],
      explanation:"Source files are removed after loading." },
    { kind:"single", text:"When unloading (COPY INTO @stage), the output is by default:", options:[
      {t:"Uncompressed", c:false},{t:"gzip-compressed", c:true},{t:"Encrypted and uncompressed", c:false},{t:"Parquet", c:false} ],
      explanation:"gzip by default." },
    { kind:"single", text:"What does SINGLE = TRUE do when unloading?", options:[
      {t:"Produces (ideally) a single output file", c:true},
      {t:"Produces many files", c:false},
      {t:"Forbids compression", c:false},
      {t:"Is invalid", c:false} ],
      explanation:"One output file." },
    { kind:"single", text:"HEADER = TRUE when unloading is supported for:", options:[
      {t:"CSV", c:true},{t:"Parquet", c:false},{t:"Avro", c:false},{t:"ORC", c:false} ],
      explanation:"CSV only." },
    { kind:"single", text:"When does this return meaningful results?", code:"SELECT * FROM TABLE(VALIDATE(t, JOB_ID => '_last'));", options:[
      {t:"When the COPY ran in VALIDATION_MODE", c:false},
      {t:"When the COPY actually loaded (e.g. ON_ERROR=CONTINUE) and errors occurred", c:true},
      {t:"Always", c:false},
      {t:"Only for Snowpipe", c:false} ],
      explanation:"VALIDATE inspects errors from a load that actually ran." },
    { kind:"single", text:"What does INFORMATION_SCHEMA.COPY_HISTORY(...) show?", options:[
      {t:"Load history per table including status/files", c:true},
      {t:"Roles", c:false},
      {t:"Storage costs", c:false},
      {t:"Network rules", c:false} ],
      explanation:"Load history." },
    { kind:"single", text:"An external stage references:", options:[
      {t:"A cloud storage location (S3/Azure/GCS) via URL plus credentials/storage integration", c:true},
      {t:"Only local files", c:false},
      {t:"A table", c:false},
      {t:"A role", c:false} ],
      explanation:"A cloud storage location." },
    { kind:"single", text:"Recommended way to securely connect an external stage without plaintext keys?", options:[
      {t:"Storage integration", c:true},{t:"A password in the stage", c:false},{t:"Network policy", c:false},{t:"Masking policy", c:false} ],
      explanation:"Storage integration." },
    { kind:"multi", choose:2, text:"Advantages of a storage integration:", options:[
      {t:"No plaintext credentials in the stage/DDL", c:true},
      {t:"Central, delegated cloud identity (IAM role)", c:true},
      {t:"Automatic compression", c:false},
      {t:"Free compute", c:false} ],
      explanation:"No plaintext keys plus delegated IAM." },
    { kind:"single", text:"What does STRIP_OUTER_ARRAY = TRUE do for JSON?", options:[
      {t:"Removes the outer array and loads elements as separate rows", c:true},
      {t:"Adds an array", c:false},
      {t:"Deletes NULLs", c:false},
      {t:"Compresses", c:false} ],
      explanation:"It strips the outer array so elements become rows." },
    { kind:"single", text:"Recommended file size range for efficient bulk loading (compressed)?", options:[
      {t:"1–5 KB", c:false},{t:"~100–250 MB compressed", c:true},{t:">5 GB per file", c:false},{t:"Exactly 16 MB", c:false} ],
      explanation:"~100–250 MB compressed." },
    { kind:"single", text:"Why load many medium files instead of one huge file?", options:[
      {t:"Better parallelization across warehouse threads", c:true},
      {t:"Less storage", c:false},
      {t:"Better security", c:false},
      {t:"The result cache", c:false} ],
      explanation:"Parallelism." },
    { kind:"single", text:"What does ERROR_ON_COLUMN_COUNT_MISMATCH = FALSE do for CSV?", options:[
      {t:"Rows with a differing column count are still processed", c:true},
      {t:"Aborts", c:false},
      {t:"Corrects automatically", c:false},
      {t:"Skips the file", c:false} ],
      explanation:"Such rows are processed anyway." },
    { kind:"single", text:"What is FIELD_OPTIONALLY_ENCLOSED_BY = '\"' for?", options:[
      {t:"Fields containing quotes/delimiters inside the value", c:true},
      {t:"JSON parsing", c:false},
      {t:"Compression", c:false},
      {t:"Headers", c:false} ],
      explanation:"For values containing special characters." },
    { kind:"single", text:"To load into a VARIANT column, which is suitable?", code:"COPY INTO t(v) FROM @stage FILE_FORMAT = (TYPE = JSON);", options:[
      {t:"COPY INTO t(v) with FILE_FORMAT=(TYPE=JSON)", c:true},
      {t:"CSV only", c:false},
      {t:"PUT only", c:false},
      {t:"Direct loading is not possible", c:false} ],
      explanation:"JSON loads directly into VARIANT." },
    { kind:"single", text:"Which reference denotes a table stage?", options:[
      {t:"@%mytable", c:true},{t:"@~", c:false},{t:"@mystage", c:false},{t:"@@table", c:false} ],
      explanation:"@%table is the table stage." },
    { kind:"single", text:"Which stage is created automatically with every table?", options:[
      {t:"Table stage", c:true},{t:"User stage", c:false},{t:"Named stage", c:false},{t:"External stage", c:false} ],
      explanation:"Each table has an implicit table stage." },
    { kind:"single", text:"What does LIST @mystage; show?", options:[
      {t:"Files in the stage", c:true},{t:"Tables", c:false},{t:"Roles", c:false},{t:"Warehouses", c:false} ],
      explanation:"It lists staged files." },
    { kind:"single", text:"What does REMOVE @mystage/file.csv; do?", options:[
      {t:"Removes a file from the stage", c:true},{t:"Drops the table", c:false},{t:"Clears the cache", c:false},{t:"Removes a role", c:false} ],
      explanation:"It deletes the staged file." },
    { kind:"single", text:"A pipe is created with AUTO_INGEST=FALSE. How is data loaded?", options:[
      {t:"Automatically on file arrival", c:false},
      {t:"Via the REST API insertFiles / manual triggering", c:true},
      {t:"Not at all", c:false},
      {t:"Task-only", c:false} ],
      explanation:"Via the REST insertFiles endpoint." },
    { kind:"single", text:"COPY_HISTORY vs. LOAD_HISTORY:", options:[
      {t:"COPY_HISTORY (table function, includes Snowpipe) vs. LOAD_HISTORY (view, no Snowpipe)", c:true},
      {t:"Identical", c:false},
      {t:"LOAD_HISTORY shows Snowpipe, COPY_HISTORY does not", c:false},
      {t:"Both only Snowpipe", c:false} ],
      explanation:"COPY_HISTORY covers Snowpipe; LOAD_HISTORY does not." },
    { kind:"single", text:"What does SKIP_HEADER = 1 do for CSV?", options:[
      {t:"Skips the first header row when loading", c:true},
      {t:"Loads only the header", c:false},
      {t:"Skips a file", c:false},
      {t:"Enables a header on unload", c:false} ],
      explanation:"It skips the header row." },
    { kind:"single", text:"When loading with ON_ERROR='CONTINUE':", options:[
      {t:"Erroneous rows are skipped, valid rows are loaded", c:true},
      {t:"The whole file is discarded", c:false},
      {t:"It aborts", c:false},
      {t:"Nothing is loaded", c:false} ],
      explanation:"Bad rows are skipped, the rest loads." },
    { kind:"multi", choose:2, text:"Which formats does Snowflake support for LOADING?", options:[
      {t:"CSV, JSON", c:true},
      {t:"Parquet, Avro, ORC, XML", c:true},
      {t:"DOCX", c:false},
      {t:"MP4", c:false} ],
      explanation:"CSV, JSON, Parquet, Avro, ORC and XML." },
    { kind:"single", text:"What does this show about unloading?", code:"COPY INTO @stage FROM (SELECT id, amount * 1.2 FROM sales);", options:[
      {t:"Transformations/sub-queries are allowed", c:true},
      {t:"Only SELECT * is possible", c:false},
      {t:"No SELECT is possible", c:false},
      {t:"Only tables are allowed", c:false} ],
      explanation:"Unloading accepts a query, so transformations are possible." },
    { kind:"single", text:"What does OVERWRITE = TRUE do when unloading?", options:[
      {t:"Overwrites existing files in the target", c:true},
      {t:"Prevents overwriting", c:false},
      {t:"Deletes the table", c:false},
      {t:"Enables compression", c:false} ],
      explanation:"It overwrites existing files." },
    { kind:"single", text:"Snowpipe latency is typically:", options:[
      {t:"Guaranteed milliseconds", c:false},
      {t:"Seconds to a few minutes (near real time)", c:true},
      {t:"Hours", c:false},
      {t:"Exactly 60 s", c:false} ],
      explanation:"Seconds to minutes." },
    { kind:"single", text:"A CSV using tab as the separator requires:", options:[
      {t:"FIELD_DELIMITER = '\\t'", c:true},{t:"RECORD_DELIMITER", c:false},{t:"TYPE=JSON", c:false},{t:"SKIP_HEADER", c:false} ],
      explanation:"FIELD_DELIMITER = '\\t'." },
    { kind:"single", text:"Which transformations are possible (limited) during COPY INTO <table>?", options:[
      {t:"Arbitrary complex joins", c:false},
      {t:"Simple transformations: column selection/order, casts, some functions", c:true},
      {t:"None at all", c:false},
      {t:"Only aggregations", c:false} ],
      explanation:"Only simple transformations." },
    { kind:"single", text:"A storage integration is created with which role/privilege?", options:[
      {t:"Typically ACCOUNTADMIN (or a role with CREATE INTEGRATION)", c:true},
      {t:"PUBLIC", c:false},
      {t:"Any user", c:false},
      {t:"ORGADMIN only", c:false} ],
      explanation:"ACCOUNTADMIN or CREATE INTEGRATION." },
    { kind:"single", text:"Advantage of a named file format object?", options:[
      {t:"A reusable, central format definition", c:true},
      {t:"Faster logins", c:false},
      {t:"More storage", c:false},
      {t:"Roles", c:false} ],
      explanation:"Reusable central definition." },
    { kind:"single", text:"What does this do?", code:"COPY INTO t FROM @stage FILES = ('a.csv','b.csv');", options:[
      {t:"Loads exactly the named files", c:true},
      {t:"Loads all files", c:false},
      {t:"Is invalid", c:false},
      {t:"Unloads files", c:false} ],
      explanation:"FILES targets specific files." },
    { kind:"single", text:"What is this in a COPY statement?", code:"COPY INTO t FROM @stage PATTERN = '.*2026.*[.]csv';", options:[
      {t:"A regex filter for the file names to load", c:true},
      {t:"A date format", c:false},
      {t:"Compression", c:false},
      {t:"A role filter", c:false} ],
      explanation:"PATTERN is a regex file filter." },
    { kind:"single", text:"A load should stop the entire statement on ANY error. Which option?", options:[
      {t:"ON_ERROR = 'ABORT_STATEMENT'", c:true},{t:"ON_ERROR = 'CONTINUE'", c:false},{t:"PURGE=TRUE", c:false},{t:"FORCE=TRUE", c:false} ],
      explanation:"ABORT_STATEMENT." },
    { kind:"multi", choose:2, text:"Which target types can be chosen when unloading?", options:[
      {t:"Internal stage", c:true},
      {t:"External stage / external location", c:true},
      {t:"Directly to a local disk without a stage", c:false},
      {t:"An email", c:false} ],
      explanation:"Internal or external stages." },
    { kind:"single", text:"A repeated Snowpipe load of the same file (same name/checksum) results in:", options:[
      {t:"Duplicate loading", c:false},
      {t:"Deduplication via load metadata (no reload)", c:true},
      {t:"An error", c:false},
      {t:"A purge", c:false} ],
      explanation:"Load metadata deduplicates." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
