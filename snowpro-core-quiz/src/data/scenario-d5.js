window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "scenario-d5",
  order: 305,
  group: "More challenging scenario-based questions (with code snippets)",
  kicker: "Scenario · Domain 5",
  title: "Data Transformations",
  topic: "VARIANT & FLATTEN, streams and tasks, UDFs and procedures, MERGE, PIVOT and Snowpark. 50 questions.",
  questions: [
    { kind:"single", text:"Which data type stores semi-structured data natively?", options:[
      {t:"VARCHAR", c:false},{t:"VARIANT", c:true},{t:"NUMBER", c:false},{t:"BOOLEAN", c:false} ],
      explanation:"VARIANT." },
    { kind:"multi", choose:2, text:"Which further semi-structured types exist besides VARIANT?", options:[
      {t:"OBJECT", c:true},{t:"ARRAY", c:true},{t:"TEXT", c:false},{t:"FLOAT", c:false} ],
      explanation:"OBJECT and ARRAY." },
    { kind:"single", text:"How do you access a JSON field in the VARIANT column v?", options:[
      {t:"v.name", c:false},{t:"v:name", c:true},{t:"v->name", c:false},{t:"v#name", c:false} ],
      explanation:"Colon notation: v:name." },
    { kind:"single", text:"To flatten a nested array you use:", options:[
      {t:"FLATTEN (LATERAL FLATTEN)", c:true},{t:"PIVOT", c:false},{t:"UNION", c:false},{t:"MERGE", c:false} ],
      explanation:"FLATTEN." },
    { kind:"single", text:"What does this produce?", code:"SELECT t.id, f.value\nFROM orders t,\n     LATERAL FLATTEN(input => t.v:items) f;", options:[
      {t:"One row per array element", c:true},
      {t:"One column", c:false},
      {t:"A view", c:false},
      {t:"A stage", c:false} ],
      explanation:"FLATTEN emits one row per element." },
    { kind:"single", text:"How do you cast a VARIANT value to a string?", options:[
      {t:"v:name::string", c:true},{t:"CAST v TO string", c:false},{t:"v.name AS string", c:false},{t:"STRING(v)", c:false} ],
      explanation:"Use the :: cast operator." },
    { kind:"single", text:"What is a stream?", options:[
      {t:"A change data capture object that tracks DML changes of a table", c:true},
      {t:"A warehouse", c:false},
      {t:"A cache", c:false},
      {t:"A stage", c:false} ],
      explanation:"A CDC object." },
    { kind:"multi", choose:3, text:"Which metadata columns does a standard stream provide?", options:[
      {t:"METADATA$ACTION", c:true},
      {t:"METADATA$ISUPDATE", c:true},
      {t:"METADATA$ROW_ID", c:true},
      {t:"METADATA$WAREHOUSE", c:false} ],
      explanation:"ACTION, ISUPDATE and ROW_ID; there is no METADATA$WAREHOUSE." },
    { kind:"single", text:"What happens to the stream offset when stream data is consumed in a DML transaction?", options:[
      {t:"The offset advances (changes count as consumed)", c:true},
      {t:"It stays unchanged", c:false},
      {t:"The stream is dropped", c:false},
      {t:"The table is emptied", c:false} ],
      explanation:"The offset advances." },
    { kind:"single", text:"Which stream type only returns inserts (no updates/deletes)?", options:[
      {t:"Standard stream", c:false},{t:"Append-only stream", c:true},{t:"Delete stream", c:false},{t:"Merge stream", c:false} ],
      explanation:"Append-only (insert-only for external tables)." },
    { kind:"single", text:"What is a task?", options:[
      {t:"An object for time- or dependency-driven execution of SQL", c:true},
      {t:"A stage", c:false},
      {t:"A role", c:false},
      {t:"A cache", c:false} ],
      explanation:"Scheduled SQL execution." },
    { kind:"single", text:"A task is scheduled via:", code:"CREATE TASK t\n  WAREHOUSE = wh\n  SCHEDULE = 'USING CRON 0 2 * * * UTC'\nAS INSERT INTO log VALUES (CURRENT_TIMESTAMP());", options:[
      {t:"SCHEDULE (CRON or interval)", c:true},{t:"PATTERN", c:false},{t:"ON_ERROR", c:false},{t:"CLUSTER BY", c:false} ],
      explanation:"SCHEDULE with CRON or an interval." },
    { kind:"single", text:"Task dependencies (a DAG) are defined with:", options:[
      {t:"AFTER <parent_task>", c:true},{t:"AS SELECT", c:false},{t:"WHEN STREAM", c:false},{t:"MERGE", c:false} ],
      explanation:"AFTER." },
    { kind:"single", text:"What does this clause achieve in a task?", code:"CREATE TASK t\n  WAREHOUSE = wh\n  SCHEDULE = '5 MINUTE'\n  WHEN SYSTEM$STREAM_HAS_DATA('s')\nAS MERGE INTO tgt USING s ...;", options:[
      {t:"The task only runs when the stream has new data", c:true},
      {t:"The task always runs", c:false},
      {t:"The stream is emptied", c:false},
      {t:"An error", c:false} ],
      explanation:"It skips runs when the stream is empty." },
    { kind:"single", text:"After creation, a root task must:", options:[
      {t:"Be resumed with ALTER TASK ... RESUME (tasks are suspended after CREATE)", c:true},
      {t:"Nothing, it runs immediately", c:false},
      {t:"Be dropped", c:false},
      {t:"Be cloned", c:false} ],
      explanation:"Tasks start suspended and must be resumed." },
    { kind:"single", text:"Serverless tasks (without WAREHOUSE) are billed as:", options:[
      {t:"Serverless compute", c:true},{t:"A user warehouse", c:false},{t:"Free", c:false},{t:"Per login", c:false} ],
      explanation:"Serverless compute." },
    { kind:"single", text:"The classic ELT pattern \u201cstream + task\u201d means:", options:[
      {t:"The stream captures changes, the task processes them periodically", c:true},
      {t:"The task captures, the stream processes", c:false},
      {t:"Both cache", c:false},
      {t:"Both are stages", c:false} ],
      explanation:"Stream captures, task processes." },
    { kind:"single", text:"A UDF is:", options:[
      {t:"A user-defined function (SQL/JavaScript/Python/Java)", c:true},
      {t:"A role", c:false},
      {t:"A stage", c:false},
      {t:"A cache", c:false} ],
      explanation:"A user-defined function." },
    { kind:"single", text:"A scalar UDF returns:", options:[
      {t:"A single value per call", c:true},{t:"A table", c:false},{t:"Nothing", c:false},{t:"Multiple rows necessarily", c:false} ],
      explanation:"One scalar value." },
    { kind:"single", text:"A UDTF (table function) returns:", options:[
      {t:"A table result (multiple rows/columns)", c:true},{t:"A scalar", c:false},{t:"A role", c:false},{t:"A stage", c:false} ],
      explanation:"Tabular results." },
    { kind:"single", text:"A stored procedure mainly differs from a UDF in that it:", options:[
      {t:"Can run procedural logic/control flow and perform DML/DDL", c:true},
      {t:"Only returns values", c:false},
      {t:"Has no logic", c:false},
      {t:"Is a stage", c:false} ],
      explanation:"Procedural logic plus DML/DDL." },
    { kind:"multi", choose:3, text:"In which languages can stored procedures be written?", options:[
      {t:"JavaScript", c:true},
      {t:"Snowflake Scripting (SQL)", c:true},
      {t:"Python/Java/Scala (Snowpark)", c:true},
      {t:"C++", c:false} ],
      explanation:"JavaScript, Snowflake Scripting and Snowpark languages — not C++." },
    { kind:"single", text:"What does this statement perform?", code:"MERGE INTO target t\nUSING source s ON t.id = s.id\nWHEN MATCHED THEN UPDATE SET t.val = s.val\nWHEN NOT MATCHED THEN INSERT (id, val) VALUES (s.id, s.val);", options:[
      {t:"An upsert (insert/update/delete in one statement)", c:true},
      {t:"Insert only", c:false},
      {t:"Delete only", c:false},
      {t:"A clone", c:false} ],
      explanation:"MERGE is an upsert." },
    { kind:"single", text:"Which function parses a JSON string into a VARIANT?", options:[
      {t:"PARSE_JSON", c:true},{t:"TO_CHAR", c:false},{t:"FLATTEN", c:false},{t:"OBJECT_KEYS", c:false} ],
      explanation:"PARSE_JSON." },
    { kind:"single", text:"What does OBJECT_CONSTRUCT('a',1,'b',2) produce?", options:[
      {t:"An OBJECT/JSON {\"a\":1,\"b\":2}", c:true},{t:"An array", c:false},{t:"A string", c:false},{t:"A table", c:false} ],
      explanation:"An OBJECT." },
    { kind:"single", text:"What does ARRAY_AGG(col) do?", options:[
      {t:"Aggregates values into an ARRAY", c:true},{t:"Counts rows", c:false},{t:"Flattens", c:false},{t:"Deletes", c:false} ],
      explanation:"It builds an ARRAY." },
    { kind:"single", text:"To query Parquet file content directly without loading, you use:", options:[
      {t:"An external table / SELECT on the staged file", c:true},{t:"MERGE", c:false},{t:"A stream", c:false},{t:"A task", c:false} ],
      explanation:"External tables or querying the stage directly." },
    { kind:"single", text:"What does $1 refer to here?", code:"SELECT $1, $2 FROM @stage/file.csv;", options:[
      {t:"The first column of the staged file", c:true},
      {t:"A variable", c:false},
      {t:"A role", c:false},
      {t:"A task", c:false} ],
      explanation:"Positional column references for staged files." },
    { kind:"single", text:"Which function checks whether a VARIANT holds a specific type?", options:[
      {t:"IS_<type> / TYPEOF", c:true},{t:"CAST", c:false},{t:"MERGE", c:false},{t:"FLATTEN", c:false} ],
      explanation:"IS_* functions and TYPEOF." },
    { kind:"single", text:"What does GET_PATH(v, 'a.b.c') do?", options:[
      {t:"Extracts a nested path from a VARIANT", c:true},{t:"Loads a file", c:false},{t:"Creates a role", c:false},{t:"Clones", c:false} ],
      explanation:"It extracts a nested path." },
    { kind:"single", text:"A standard stream on a table, after an INSERT and then an UPDATE of the same row, shows net:", options:[
      {t:"Only the final effect (an INSERT of the current version)", c:true},
      {t:"All intermediate steps raw", c:false},
      {t:"Nothing", c:false},
      {t:"An error", c:false} ],
      explanation:"Standard streams show the net effect." },
    { kind:"single", text:"What does \u201cstale\u201d mean for a stream?", options:[
      {t:"The stream was not consumed within the data retention period and is outdated", c:true},
      {t:"The stream is new", c:false},
      {t:"The stream is fast", c:false},
      {t:"The stream is encrypted", c:false} ],
      explanation:"Not consumed within retention → stale." },
    { kind:"single", text:"To avoid a stream going stale:", options:[
      {t:"Consume it regularly / ensure sufficient retention on the source table", c:true},
      {t:"Enlarge the warehouse", c:false},
      {t:"Change the role", c:false},
      {t:"Purge", c:false} ],
      explanation:"Consume regularly and keep retention adequate." },
    { kind:"single", text:"What does PIVOT do?", options:[
      {t:"Turns row values into columns (cross tab)", c:true},{t:"Flattens arrays", c:false},{t:"Loads data", c:false},{t:"Clones", c:false} ],
      explanation:"Rows → columns." },
    { kind:"single", text:"What does UNPIVOT do?", options:[
      {t:"Turns columns into rows", c:true},{t:"Turns rows into columns", c:false},{t:"Aggregates", c:false},{t:"Merges", c:false} ],
      explanation:"Columns → rows." },
    { kind:"single", text:"A \u201csecure UDF\u201d is used to:", options:[
      {t:"Hide the function definition (e.g. when sharing)", c:true},
      {t:"Be faster", c:false},
      {t:"Save storage", c:false},
      {t:"Create roles", c:false} ],
      explanation:"It hides the definition." },
    { kind:"multi", choose:2, text:"Advantages of Snowpark for transformations:", options:[
      {t:"A DataFrame API in Python/Java/Scala", c:true},
      {t:"Push-down of processing into Snowflake compute", c:true},
      {t:"It replaces RBAC", c:false},
      {t:"It is free", c:false} ],
      explanation:"DataFrame API plus push-down." },
    { kind:"single", text:"INSERT INTO ... SELECT is used for:", options:[
      {t:"Set-based inserting", c:true},{t:"Deleting only", c:false},{t:"Cloning", c:false},{t:"Stage loading", c:false} ],
      explanation:"Set-based insert." },
    { kind:"single", text:"Which function converts a string to a date with a format?", options:[
      {t:"TO_DATE(str, 'YYYY-MM-DD')", c:true},{t:"PARSE_JSON", c:false},{t:"FLATTEN", c:false},{t:"ARRAY_AGG", c:false} ],
      explanation:"TO_DATE with a format model." },
    { kind:"single", text:"In a task DAG, a child task starts:", options:[
      {t:"After the parent completes successfully", c:true},
      {t:"Before the parent", c:false},
      {t:"In parallel, independently", c:false},
      {t:"Never", c:false} ],
      explanation:"After successful completion of the parent." },
    { kind:"single", text:"Which statement about streams on views/external tables is correct?", options:[
      {t:"Streams can be created on tables, certain views and external tables (insert-only)", c:true},
      {t:"Only on warehouses", c:false},
      {t:"Only on roles", c:false},
      {t:"Not at all", c:false} ],
      explanation:"Tables, some views and external tables." },
    { kind:"single", text:"What does SYSTEM$STREAM_HAS_DATA('s') return?", options:[
      {t:"TRUE/FALSE whether new changes exist", c:true},
      {t:"The table's row count", c:false},
      {t:"Roles", c:false},
      {t:"Storage", c:false} ],
      explanation:"A boolean." },
    { kind:"single", text:"Idempotent CDC processing with stream + MERGE means:", options:[
      {t:"Changes are upserted/deleted deterministically based on stream metadata", c:true},
      {t:"Everything is duplicated", c:false},
      {t:"Nothing happens", c:false},
      {t:"Insert only", c:false} ],
      explanation:"A deterministic MERGE driven by stream metadata." },
    { kind:"single", text:"What does this do?", code:"SELECT * FROM TABLE(FLATTEN(input => v, RECURSIVE => TRUE));", options:[
      {t:"Flattens nested structures recursively as well", c:true},
      {t:"Only the top level", c:false},
      {t:"Loads files", c:false},
      {t:"Creates a role", c:false} ],
      explanation:"RECURSIVE => TRUE drills through nesting." },
    { kind:"single", text:"Which FLATTEN output column provides the index of an array element?", options:[
      {t:"INDEX", c:true},{t:"SEQ", c:false},{t:"VALUE", c:false},{t:"KEY", c:false} ],
      explanation:"INDEX is the element's position; SEQ is a per-input sequence number." },
    { kind:"single", text:"A UDF with LANGUAGE PYTHON requires, among others:", code:"CREATE FUNCTION add_one(x INT)\nRETURNS INT\nLANGUAGE PYTHON\nRUNTIME_VERSION = '3.10'\nHANDLER = 'run'\nAS $$\ndef run(x):\n    return x + 1\n$$;", options:[
      {t:"RUNTIME_VERSION and HANDLER", c:true},
      {t:"Only AS $$...$$", c:false},
      {t:"A warehouse object in the definition", c:false},
      {t:"A role", c:false} ],
      explanation:"RUNTIME_VERSION and HANDLER are required." },
    { kind:"multi", choose:2, text:"Which objects are suited to automated transform pipelines?", options:[
      {t:"Streams (CDC)", c:true},
      {t:"Tasks (scheduling/DAG)", c:true},
      {t:"Network policies", c:false},
      {t:"Password policies", c:false} ],
      explanation:"Streams plus tasks." },
    { kind:"single", text:"TRY_CAST / TRY_TO_NUMBER compared to CAST:", options:[
      {t:"Returns NULL instead of an error on an invalid conversion", c:true},
      {t:"Is faster", c:false},
      {t:"Is identical", c:false},
      {t:"Always throws an error", c:false} ],
      explanation:"TRY_* returns NULL instead of failing." },
    { kind:"single", text:"An external function calls:", options:[
      {t:"An externally hosted service (e.g. via API Gateway) from SQL", c:true},
      {t:"A warehouse", c:false},
      {t:"A stage", c:false},
      {t:"A role", c:false} ],
      explanation:"It invokes a remote service." },
    { kind:"single", text:"A CDC process should efficiently handle only new inserts. Best stream type?", options:[
      {t:"Append-only stream", c:true},
      {t:"Standard stream with updates/deletes", c:false},
      {t:"No stream", c:false},
      {t:"Delete-only", c:false} ],
      explanation:"Append-only." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
