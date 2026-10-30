window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "mock-exam-1",
  order: 501,
  group: "Realistic mock exam",
  kicker: "Mock Exam",
  title: "COF-C03 Full Mock Exam",
  topic: "100 questions weighted by exam domain, shuffled order. Recommended: ~115 minutes. Target ≥ 75%.",
  questions: [
    { kind:"single", text:"Which three layers make up the Snowflake architecture?", options:[
      {t:"Storage, Compute, Cloud Services", c:true},
      {t:"Storage, Metadata, UI", c:false},
      {t:"Compute, Network, Storage", c:false},
      {t:"Database, Warehouse, Role", c:false} ],
      explanation:"Storage, Compute (Query Processing) and Cloud Services." },
    { kind:"single", text:"Which statement sets the active role of a session?", code:"??? transform_role;", options:[
      {t:"SET ROLE", c:false},{t:"USE ROLE", c:true},{t:"ALTER SESSION SET ROLE =", c:false},{t:"GRANT ROLE", c:false} ],
      explanation:"USE ROLE switches the active role." },
    { kind:"single", text:"A COPY INTO run must reload files that were already loaded:", code:"COPY INTO sales FROM @stg FILE_FORMAT=(TYPE=CSV) ???;", options:[
      {t:"FORCE = TRUE", c:true},
      {t:"PURGE = TRUE", c:false},
      {t:"ON_ERROR = 'CONTINUE'", c:false},
      {t:"VALIDATION_MODE = RETURN_ALL_ERRORS", c:false} ],
      explanation:"FORCE = TRUE bypasses load metadata and reloads files." },
    { kind:"single", text:"What does LATERAL FLATTEN(input => v:items) return?", options:[
      {t:"One row per array element of items", c:true},{t:"An aggregated row", c:false},{t:"A new table", c:false},{t:"A scalar", c:false} ],
      explanation:"FLATTEN emits one row per element." },
    { kind:"single", text:"What is the maximum Time Travel retention configurable in Enterprise Edition?", options:[
      {t:"1 day", c:false},{t:"7 days", c:false},{t:"90 days", c:true},{t:"Unlimited", c:false} ],
      explanation:"Enterprise allows up to 90 days." },
    { kind:"single", text:"Which Query Profile metric indicates poor pruning?", options:[
      {t:"Partitions scanned ≈ Partitions total", c:true},
      {t:"High result-cache share", c:false},
      {t:"Short compilation time", c:false},
      {t:"Low spilling", c:false} ],
      explanation:"scanned ≈ total means almost nothing was pruned." },
    { kind:"multi", choose:2, text:"Which objects are account-level (not schema-scoped)?", options:[
      {t:"Warehouse", c:true},{t:"Database", c:true},{t:"Table", c:false},{t:"View", c:false} ],
      explanation:"Warehouses and databases are account-level." },
    { kind:"single", text:"Which edition is required for Multi-Cluster Warehouses?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"VPS", c:false} ],
      explanation:"Enterprise or higher." },
    { kind:"single", text:"Default ON_ERROR for bulk COPY INTO <table>:", options:[
      {t:"CONTINUE", c:false},{t:"SKIP_FILE", c:false},{t:"ABORT_STATEMENT", c:true},{t:"SKIP_FILE_10%", c:false} ],
      explanation:"Bulk loading defaults to ABORT_STATEMENT." },
    { kind:"single", text:"Which feature filters rows based on the querying role/context?", options:[
      {t:"Masking Policy", c:false},{t:"Row Access Policy", c:true},{t:"Network Policy", c:false},{t:"Session Policy", c:false} ],
      explanation:"Row access policies filter rows." },
    { kind:"single", text:"What does this command create?", code:"CREATE TABLE dev_orders CLONE prod_orders;", options:[
      {t:"A zero-copy clone with no immediate storage duplication", c:true},
      {t:"A full physical copy", c:false},{t:"A view", c:false},{t:"A stream", c:false} ],
      explanation:"Zero-copy clone." },
    { kind:"single", text:"A Multi-Cluster Warehouse in auto-scale mode primarily responds to:", options:[
      {t:"Query complexity", c:false},{t:"Concurrency (simultaneous queries)", c:true},{t:"Storage volume", c:false},{t:"Number of databases", c:false} ],
      explanation:"Auto-scale responds to concurrency." },
    { kind:"single", text:"Which function parses a JSON string into a VARIANT?", code:"SELECT ???('{\"a\":1}') AS v;", options:[
      {t:"PARSE_JSON", c:true},{t:"TO_JSON", c:false},{t:"FLATTEN", c:false},{t:"OBJECT_KEYS", c:false} ],
      explanation:"PARSE_JSON." },
    { kind:"single", text:"Which role should own objects per best practice?", options:[
      {t:"ACCOUNTADMIN", c:false},{t:"SYSADMIN", c:true},{t:"PUBLIC", c:false},{t:"ORGADMIN", c:false} ],
      explanation:"SYSADMIN should own objects." },
    { kind:"single", text:"PUT transfers:", options:[
      {t:"Local file → internal stage", c:true},{t:"Stage → local", c:false},{t:"Table → stage", c:false},{t:"Stage → table", c:false} ],
      explanation:"PUT uploads to an internal stage." },
    { kind:"single", text:"Fail-safe for permanent tables lasts:", options:[
      {t:"1 day", c:false},{t:"7 days (recoverable only by Snowflake)", c:true},{t:"90 days", c:false},{t:"0", c:false} ],
      explanation:"A fixed 7 days, Snowflake-only." },
    { kind:"single", text:"Query Profile shows \u201cBytes spilled to remote storage\u201d. Best first action?", options:[
      {t:"Increase warehouse size", c:true},
      {t:"Increase multi-cluster count", c:false},
      {t:"Shorten auto-suspend", c:false},
      {t:"Set a clustering key", c:false} ],
      explanation:"Spilling means insufficient memory → scale up." },
    { kind:"multi", choose:2, text:"Which caches speed up queries?", options:[
      {t:"Result Cache (Cloud Services)", c:true},
      {t:"Local Disk (SSD) Cache", c:true},
      {t:"Browser cache", c:false},
      {t:"Storage row cache", c:false} ],
      explanation:"Result cache and SSD cache." },
    { kind:"single", text:"A task is time-scheduled via:", code:"CREATE TASK t WAREHOUSE=wh ??? = 'USING CRON 0 * * * * UTC' AS ...;", options:[
      {t:"SCHEDULE", c:true},{t:"PATTERN", c:false},{t:"AFTER", c:false},{t:"WHEN", c:false} ],
      explanation:"SCHEDULE takes a CRON expression or interval." },
    { kind:"single", text:"Which role manages organizations / multiple accounts?", options:[
      {t:"ACCOUNTADMIN", c:false},{t:"ORGADMIN", c:true},{t:"SYSADMIN", c:false},{t:"SECURITYADMIN", c:false} ],
      explanation:"ORGADMIN." },
    { kind:"single", text:"Default file format when FILE_FORMAT is omitted:", options:[
      {t:"JSON", c:false},{t:"CSV", c:true},{t:"Parquet", c:false},{t:"Avro", c:false} ],
      explanation:"CSV." },
    { kind:"single", text:"Which statement about Secure Data Sharing is correct?", options:[
      {t:"Physical copies are transferred.", c:false},
      {t:"The consumer accesses live data without a copy and pays for its own compute.", c:true},
      {t:"It only works within the same account.", c:false},
      {t:"Standard Edition only.", c:false} ],
      explanation:"Live access, consumer pays compute." },
    { kind:"single", text:"What does this show?", code:"SELECT SYSTEM$CLUSTERING_INFORMATION('sales', '(region)');", options:[
      {t:"Clustering quality of the table for the key", c:true},
      {t:"Role grants", c:false},{t:"Storage costs", c:false},{t:"Query history", c:false} ],
      explanation:"It reports clustering depth/quality." },
    { kind:"single", text:"Which stream type returns inserts only?", options:[
      {t:"Standard Stream", c:false},{t:"Append-only Stream", c:true},{t:"Delete Stream", c:false},{t:"Update Stream", c:false} ],
      explanation:"Append-only." },
    { kind:"single", text:"Micro-partitions are:", options:[
      {t:"Immutable and compressed, ~50–500 MB uncompressed", c:true},
      {t:"Customer-configurable in format", c:false},
      {t:"Row-oriented and uncompressed", c:false},
      {t:"Fixed at 1 GB", c:false} ],
      explanation:"Immutable, compressed, columnar, 50–500 MB uncompressed." },
    { kind:"single", text:"Which feature avoids public internet traffic (AWS)?", options:[
      {t:"PrivateLink", c:true},{t:"Masking Policy", c:false},{t:"External Stage", c:false},{t:"OAuth", c:false} ],
      explanation:"AWS PrivateLink." },
    { kind:"single", text:"MATCH_BY_COLUMN_NAME = CASE_INSENSITIVE on a JSON load requires:", code:"COPY INTO customers FROM @stg/c.json\nFILE_FORMAT=(TYPE=JSON) MATCH_BY_COLUMN_NAME=CASE_INSENSITIVE;", options:[
      {t:"A single VARIANT column", c:false},
      {t:"Target columns whose names match the JSON keys", c:true},
      {t:"An uncompressed file", c:false},
      {t:"CSV", c:false} ],
      explanation:"Target column names must match the JSON keys." },
    { kind:"single", text:"The Result Cache stays valid by default for:", options:[
      {t:"1 h", c:false},{t:"24 h (extendable up to 31 days)", c:true},{t:"7 days", c:false},{t:"Unlimited", c:false} ],
      explanation:"24 h, up to 31 days with reuse." },
    { kind:"single", text:"UNDROP TABLE sales; works as long as:", options:[
      {t:"Within the Time Travel retention window", c:true},
      {t:"Only with ACCOUNTADMIN", c:false},{t:"Always", c:false},{t:"Only with Fail-safe", c:false} ],
      explanation:"Only inside the retention window." },
    { kind:"single", text:"Which language(s) does Snowpark support for transformations?", options:[
      {t:"SQL only", c:false},{t:"Python, Java, Scala", c:true},{t:"JavaScript only", c:false},{t:"C++", c:false} ],
      explanation:"Python, Java and Scala." },
    { kind:"single", text:"Which service accelerates highly selective point lookups on large tables?", options:[
      {t:"Search Optimization Service", c:true},{t:"Automatic Clustering", c:false},{t:"Result Cache", c:false},{t:"QAS", c:false} ],
      explanation:"Search Optimization Service." },
    { kind:"single", text:"GET transfers:", options:[
      {t:"Internal stage → local", c:true},{t:"Local → stage", c:false},{t:"Table → stage", c:false},{t:"External → internal", c:false} ],
      explanation:"GET downloads from a stage." },
    { kind:"multi", choose:2, text:"Which statements about Zero-Copy Cloning are true?", options:[
      {t:"The clone initially shares the source's micro-partitions", c:true},
      {t:"Copy-on-write on changes", c:true},
      {t:"The clone is read-only", c:false},
      {t:"Immediate full physical copy", c:false} ],
      explanation:"Shared micro-partitions with copy-on-write." },
    { kind:"single", text:"Which system role has the highest account privileges?", options:[
      {t:"SYSADMIN", c:false},{t:"SECURITYADMIN", c:false},{t:"ACCOUNTADMIN", c:true},{t:"PUBLIC", c:false} ],
      explanation:"ACCOUNTADMIN." },
    { kind:"single", text:"What does SINGLE = TRUE do when unloading?", code:"COPY INTO @ext/report/ FROM big_table SINGLE=TRUE;", options:[
      {t:"Ideally produces a single output file", c:true},
      {t:"Produces many files", c:false},{t:"Is invalid", c:false},{t:"Disables compression", c:false} ],
      explanation:"One output file." },
    { kind:"single", text:"From which edition are Materialized Views available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise or higher." },
    { kind:"single", text:"What does this MERGE do?", code:"MERGE INTO tgt t USING src s ON t.id=s.id\nWHEN MATCHED THEN UPDATE SET t.val=s.val\nWHEN NOT MATCHED THEN INSERT (id,val) VALUES (s.id,s.val);", options:[
      {t:"Upsert (update + insert)", c:true},{t:"Insert only", c:false},{t:"Delete only", c:false},{t:"Clones the table", c:false} ],
      explanation:"An upsert." },
    { kind:"single", text:"Cloud Services are free up to what share of daily compute?", options:[
      {t:"5%", c:false},{t:"10%", c:true},{t:"20%", c:false},{t:"0%", c:false} ],
      explanation:"10% of daily compute." },
    { kind:"single", text:"Which statement binds a masking policy to a column?", options:[
      {t:"ALTER TABLE t MODIFY COLUMN c SET MASKING POLICY p;", c:true},
      {t:"GRANT MASKING p ON c;", c:false},
      {t:"CREATE MASK ON t.c;", c:false},
      {t:"USE MASKING POLICY p;", c:false} ],
      explanation:"ALTER TABLE ... MODIFY COLUMN ... SET MASKING POLICY." },
    { kind:"single", text:"When does scaling up (larger WH) help instead of scaling out?", options:[
      {t:"Many concurrent small queries", c:false},
      {t:"A single complex, scan/compute-intensive query", c:true},
      {t:"Storage bottleneck", c:false},{t:"Data sharing", c:false} ],
      explanation:"Scale up for heavy single queries." },
    { kind:"single", text:"A root task right after CREATE TASK is initially:", options:[
      {t:"Suspended \u2013 requires ALTER TASK ... RESUME", c:true},
      {t:"Immediately active", c:false},{t:"Deleted", c:false},{t:"Read-only", c:false} ],
      explanation:"Tasks are created suspended." },
    { kind:"single", text:"How does Snowflake encrypt data at rest by default?", options:[
      {t:"Optional", c:false},
      {t:"AES-256, always on, with automatic rotation", c:true},
      {t:"AES-128, manual", c:false},{t:"None", c:false} ],
      explanation:"AES-256, always on." },
    { kind:"single", text:"VALIDATION_MODE = RETURN_ALL_ERRORS:", options:[
      {t:"Loads and shows errors", c:false},
      {t:"Validates without loading and shows all errors", c:true},
      {t:"Skips silently", c:false},{t:"Aborts", c:false} ],
      explanation:"Validation without loading." },
    { kind:"single", text:"For a consumer without their own Snowflake account, the provider uses:", options:[
      {t:"Reader Account", c:true},{t:"Materialized View", c:false},{t:"External Table", c:false},{t:"Task", c:false} ],
      explanation:"A reader account." },
    { kind:"single", text:"What does TRY_TO_NUMBER('abc') return?", options:[
      {t:"NULL (instead of an error)", c:true},{t:"0", c:false},{t:"An error", c:false},{t:"'abc'", c:false} ],
      explanation:"TRY_* returns NULL on failure." },
    { kind:"single", text:"A warehouse runs for 20 s and is suspended. Billing:", options:[
      {t:"20 s", c:false},{t:"At least 60 s", c:true},{t:"0", c:false},{t:"1 h", c:false} ],
      explanation:"60-second minimum." },
    { kind:"single", text:"Which cloud platforms does Snowflake support?", options:[
      {t:"AWS only", c:false},{t:"AWS, Azure", c:false},{t:"AWS, Azure, GCP", c:true},{t:"AWS, Azure, GCP, OCI", c:false} ],
      explanation:"AWS, Azure and GCP." },
    { kind:"single", text:"WHEN SYSTEM$STREAM_HAS_DATA('s') in a task:", options:[
      {t:"Task runs only if the stream has new data", c:true},
      {t:"Always runs", c:false},{t:"Empties the stream", c:false},{t:"Raises an error", c:false} ],
      explanation:"It skips runs when the stream is empty." },
    { kind:"multi", choose:2, text:"Snowpipe auto-ingest requires:", options:[
      {t:"A cloud event notification (e.g., SQS)", c:true},
      {t:"A user warehouse for billing", c:false},
      {t:"The notification_channel from SHOW PIPES", c:true},
      {t:"Guaranteed load ordering", c:false} ],
      explanation:"Event notification plus the notification channel; Snowpipe is serverless." },
    { kind:"single", text:"Which view provides login attempts for security analysis?", options:[
      {t:"ACCOUNT_USAGE.LOGIN_HISTORY", c:true},
      {t:"ACCOUNT_USAGE.STORAGE_USAGE", c:false},
      {t:"INFORMATION_SCHEMA.TABLES", c:false},
      {t:"ACCOUNT_USAGE.QUERY_HISTORY", c:false} ],
      explanation:"LOGIN_HISTORY." },
    { kind:"single", text:"A Temporary Table exists:", options:[
      {t:"Only in the current session", c:true},{t:"Across sessions", c:false},{t:"90 days", c:false},{t:"Permanently", c:false} ],
      explanation:"Session-scoped." },
    { kind:"single", text:"What does this do?", code:"CREATE TABLE t_clone CLONE t AT(OFFSET => -3600);", options:[
      {t:"Clones the state from 1 hour ago (Time Travel)", c:true},
      {t:"Is invalid", c:false},{t:"Deletes the source", c:false},{t:"Clones roles", c:false} ],
      explanation:"A clone of the state one hour ago." },
    { kind:"single", text:"Search Optimization is billed as:", options:[
      {t:"Serverless compute + additional storage", c:true},{t:"Free", c:false},{t:"User warehouse", c:false},{t:"Per login", c:false} ],
      explanation:"Serverless compute plus storage." },
    { kind:"single", text:"Access a JSON field in VARIANT v and cast to string:", options:[
      {t:"v:name::string", c:true},{t:"v.name AS string", c:false},{t:"STRING(v->name)", c:false},{t:"v#name", c:false} ],
      explanation:"Colon path plus :: cast." },
    { kind:"single", text:"Which role is automatically granted to every user/role?", options:[
      {t:"PUBLIC", c:true},{t:"SYSADMIN", c:false},{t:"USERADMIN", c:false},{t:"ORGADMIN", c:false} ],
      explanation:"PUBLIC." },
    { kind:"single", text:"Snowpipe latency is typically:", options:[
      {t:"Guaranteed milliseconds", c:false},{t:"Seconds to a few minutes", c:true},{t:"Hours", c:false},{t:"Exactly 60 s", c:false} ],
      explanation:"Near real time: seconds to minutes." },
    { kind:"single", text:"Which object tracks DML changes to a table (CDC)?", options:[
      {t:"Stream", c:true},{t:"Task", c:false},{t:"Stage", c:false},{t:"Sequence", c:false} ],
      explanation:"A stream." },
    { kind:"single", text:"With a full result-cache hit while the WH is suspended:", options:[
      {t:"The result comes from the cache without starting the WH", c:true},
      {t:"The WH must start", c:false},{t:"Error", c:false},{t:"A new WH is created", c:false} ],
      explanation:"No compute needed." },
    { kind:"single", text:"HEADER = TRUE is supported when unloading:", options:[
      {t:"CSV", c:true},{t:"Parquet", c:false},{t:"Avro", c:false},{t:"ORC", c:false} ],
      explanation:"CSV only." },
    { kind:"single", text:"Tri-Secret Secure is available from:", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:false},{t:"Business Critical", c:true},{t:"All", c:false} ],
      explanation:"Business Critical." },
    { kind:"single", text:"Which function aggregates values into an array?", options:[
      {t:"ARRAY_AGG", c:true},{t:"FLATTEN", c:false},{t:"PARSE_JSON", c:false},{t:"PIVOT", c:false} ],
      explanation:"ARRAY_AGG." },
    { kind:"single", text:"How does Snowflake prevent reloading the same file by default?", options:[
      {t:"Primary key", c:false},
      {t:"Load metadata (file name + checksum), ~64 days", c:true},
      {t:"FORCE=TRUE", c:false},{t:"It doesn't", c:false} ],
      explanation:"Load metadata retained ~64 days." },
    { kind:"single", text:"A warehouse's SSD cache upon suspend:", options:[
      {t:"Is cleared", c:true},{t:"Is retained", c:false},{t:"Is persisted to storage", c:false},{t:"Moves to Cloud Services", c:false} ],
      explanation:"It is dropped on suspend." },
    { kind:"multi", choose:3, text:"Which governance features are \u201cpolicy\u201d-based?", options:[
      {t:"Masking Policy", c:true},{t:"Row Access Policy", c:true},{t:"Sequence", c:false},{t:"Session Policy", c:true} ],
      explanation:"Masking, row access and session policies; a sequence is not a policy." },
    { kind:"single", text:"Which service can accelerate scan-heavy \u201coutlier\u201d queries in a serverless way?", options:[
      {t:"Query Acceleration Service", c:true},{t:"Search Optimization", c:false},{t:"Automatic Clustering", c:false},{t:"Result Cache", c:false} ],
      explanation:"QAS." },
    { kind:"single", text:"The object hierarchy path is:", options:[
      {t:"Account → Database → Schema → Table", c:true},
      {t:"Account → Schema → Database → Table", c:false},
      {t:"Database → Account → Schema → Table", c:false},
      {t:"Schema → Database → Table → Account", c:false} ],
      explanation:"Account → Database → Schema → Table." },
    { kind:"single", text:"STRIP_OUTER_ARRAY = TRUE on JSON load:", options:[
      {t:"Removes the outer array, loads elements as rows", c:true},
      {t:"Adds an array", c:false},{t:"Removes NULLs", c:false},{t:"Compresses", c:false} ],
      explanation:"Elements become rows." },
    { kind:"single", text:"A consumer wants to join shared data with their own:", options:[
      {t:"Possible (read-only)", c:true},{t:"Not possible", c:false},{t:"Only via copy", c:false},{t:"Only via Reader Account", c:false} ],
      explanation:"Shared data joins with own tables read-only." },
    { kind:"single", text:"SCALING_POLICY = ECONOMY results in:", options:[
      {t:"More conservative cluster starts (saves credits, possibly more queueing)", c:true},
      {t:"Faster scale-out", c:false},{t:"Disables multi-cluster", c:false},{t:"More storage", c:false} ],
      explanation:"Conservative scaling to save credits." },
    { kind:"single", text:"A Secure View is used when sharing to:", options:[
      {t:"Hide the definition / non-authorized data", c:true},
      {t:"Be faster", c:false},{t:"Save storage", c:false},{t:"Create roles", c:false} ],
      explanation:"It protects the definition and detail." },
    { kind:"single", text:"Which statement builds an OBJECT?", code:"SELECT ???('a',1,'b',2);", options:[
      {t:"OBJECT_CONSTRUCT", c:true},{t:"ARRAY_CONSTRUCT", c:false},{t:"PARSE_JSON", c:false},{t:"FLATTEN", c:false} ],
      explanation:"OBJECT_CONSTRUCT." },
    { kind:"single", text:"What is PATTERN='.*2026.*[.]csv' in COPY?", options:[
      {t:"Regex filter for file names", c:true},{t:"A date format", c:false},{t:"Compression", c:false},{t:"Role filter", c:false} ],
      explanation:"A regex file filter." },
    { kind:"single", text:"Automatic Clustering is billed as:", options:[
      {t:"Serverless compute", c:true},{t:"User warehouse", c:false},{t:"Free", c:false},{t:"Per query", c:false} ],
      explanation:"Serverless." },
    { kind:"single", text:"Federated Authentication (SSO) means:", options:[
      {t:"Snowflake is the IdP", c:false},
      {t:"An external IdP authenticates; Snowflake = Service Provider (SAML 2.0)", c:true},
      {t:"Replaces encryption", c:false},{t:"SnowSQL only", c:false} ],
      explanation:"Snowflake is the service provider." },
    { kind:"single", text:"What does the Query Profile \u201cMost Expensive Nodes\u201d section show?", options:[
      {t:"Storage costs", c:false},{t:"The most resource-intensive operators", c:true},{t:"Roles", c:false},{t:"Logins", c:false} ],
      explanation:"The costliest operators." },
    { kind:"single", text:"Which table function shows the load history including Snowpipe?", options:[
      {t:"INFORMATION_SCHEMA.COPY_HISTORY", c:true},
      {t:"LOAD_HISTORY (view)", c:false},
      {t:"QUERY_HISTORY", c:false},{t:"LOGIN_HISTORY", c:false} ],
      explanation:"COPY_HISTORY covers Snowpipe; LOAD_HISTORY does not." },
    { kind:"single", text:"DATA_RETENTION_TIME_IN_DAYS can be set at the level of:", options:[
      {t:"Account/DB/Schema/Table (inherited)", c:true},
      {t:"Account only", c:false},{t:"Table only", c:false},{t:"Not at all", c:false} ],
      explanation:"It cascades and can be overridden." },
    { kind:"single", text:"A UDTF (table function) returns:", options:[
      {t:"A tabular result", c:true},{t:"A scalar", c:false},{t:"Nothing", c:false},{t:"A role", c:false} ],
      explanation:"Tabular results." },
    { kind:"single", text:"What is Snowsight?", options:[
      {t:"A CLI", c:false},{t:"The modern web UI", c:true},{t:"An ETL tool", c:false},{t:"A storage tier", c:false} ],
      explanation:"The web interface." },
    { kind:"single", text:"Which filter hinders micro-partition pruning?", options:[
      {t:"WHERE order_date > '2026-01-01'", c:false},
      {t:"WHERE UPPER(country) = 'DE'", c:true},
      {t:"WHERE id = 42", c:false},
      {t:"WHERE region = 'EU'", c:false} ],
      explanation:"A function on the column prevents min/max pruning." },
    { kind:"single", text:"What does REMOVE @mystage/file.csv; do?", options:[
      {t:"Removes a file from the stage", c:true},{t:"Drops the table", c:false},{t:"Clears the cache", c:false},{t:"Removes a role", c:false} ],
      explanation:"It deletes the staged file." },
    { kind:"single", text:"Database Replication primarily serves:", options:[
      {t:"Availability/DR & cross-region/cloud sharing", c:true},
      {t:"Compression", c:false},{t:"Roles", c:false},{t:"Caching", c:false} ],
      explanation:"DR and cross-region sharing." },
    { kind:"multi", choose:3, text:"Which stored-procedure languages exist?", options:[
      {t:"JavaScript", c:true},
      {t:"Snowflake Scripting (SQL)", c:true},
      {t:"Python/Java/Scala (Snowpark)", c:true},
      {t:"C#", c:false} ],
      explanation:"JavaScript, Snowflake Scripting and Snowpark languages — not C#." },
    { kind:"single", text:"Which statement about Transient Tables is correct?", options:[
      {t:"No Fail-safe, Time Travel 0–1 day", c:true},
      {t:"7 days Fail-safe", c:false},{t:"90 days Fail-safe", c:false},{t:"Session-local", c:false} ],
      explanation:"No Fail-safe, max 1 day Time Travel." },
    { kind:"single", text:"A provider adds a table to an existing share. The consumer:", options:[
      {t:"Sees the new data immediately (grants extended)", c:true},
      {t:"Must re-import", c:false},{t:"Sees nothing", c:false},{t:"Pays the provider's compute", c:false} ],
      explanation:"Immediately visible." },
    { kind:"single", text:"Optimal compressed file size for efficient bulk loading (recommendation):", options:[
      {t:"1–5 KB", c:false},{t:"~100–250 MB", c:true},{t:">5 GB", c:false},{t:"Exactly 16 MB", c:false} ],
      explanation:"~100–250 MB compressed." },
    { kind:"single", text:"Role inheritance: if analyst is granted to sysadmin:", code:"GRANT ROLE analyst TO ROLE sysadmin;", options:[
      {t:"sysadmin inherits analyst's privileges", c:true},
      {t:"analyst inherits from sysadmin", c:false},{t:"Both merge", c:false},{t:"Error", c:false} ],
      explanation:"The parent inherits from the granted child role." },
    { kind:"single", text:"Which clause restores an accidentally deleted record via Time Travel?", code:"INSERT INTO t SELECT * FROM t ???('<delete_query_id>')\nWHERE id=42;", options:[
      {t:"BEFORE(STATEMENT =>", c:true},
      {t:"PATTERN =>", c:false},{t:"CLUSTER BY", c:false},{t:"MATCH_BY_COLUMN_NAME", c:false} ],
      explanation:"BEFORE(STATEMENT => ...) gives the state just before the delete." },
    { kind:"single", text:"A warehouse has queueing due to too many concurrent users. Action:", options:[
      {t:"Increase size", c:false},{t:"Enable multi-cluster (scale-out)", c:true},{t:"Extend auto-suspend", c:false},{t:"Set a clustering key", c:false} ],
      explanation:"Scale out for concurrency." },
    { kind:"single", text:"External Table:", options:[
      {t:"Stores metadata about external stage data and makes it queryable", c:true},
      {t:"Stores data physically in Snowflake", c:false},
      {t:"Exists only in the Reader Account", c:false},{t:"Is temporary", c:false} ],
      explanation:"Metadata over external files." },
    { kind:"single", text:"Which function checks whether a stream has new changes?", options:[
      {t:"SYSTEM$STREAM_HAS_DATA('s')", c:true},
      {t:"SYSTEM$WAIT", c:false},{t:"LAST_QUERY_ID", c:false},{t:"SYSTEM$CLUSTERING_INFORMATION", c:false} ],
      explanation:"SYSTEM$STREAM_HAS_DATA." },
    { kind:"single", text:"Recommended number of users with ACCOUNTADMIN:", options:[
      {t:"As many as possible", c:false},{t:"Limit to a few + MFA", c:true},{t:"Every analyst", c:false},{t:"Grant to PUBLIC", c:false} ],
      explanation:"Few, protected with MFA." },
    { kind:"single", text:"ERROR_ON_COLUMN_COUNT_MISMATCH = FALSE for CSV:", options:[
      {t:"Rows with a differing column count are still processed", c:true},
      {t:"Aborts", c:false},{t:"Auto-corrects", c:false},{t:"Skips the file", c:false} ],
      explanation:"Such rows are still processed." },
    { kind:"single", text:"What is the Snowflake Marketplace technically?", options:[
      {t:"Built on Secure Data Sharing", c:true},{t:"FTP copies", c:false},{t:"External tables only", c:false},{t:"Email delivery", c:false} ],
      explanation:"It is built on Secure Data Sharing." },
    { kind:"single", text:"Which of the following is a serverless feature?", options:[
      {t:"Snowpipe", c:true},{t:"A standard query on a user WH", c:false},{t:"SnowSQL", c:false},{t:"Snowsight", c:false} ],
      explanation:"Snowpipe is serverless." },
    { kind:"single", text:"PIVOT converts:", options:[
      {t:"Row values into columns (cross-tab)", c:true},{t:"Columns into rows", c:false},{t:"Arrays into flat rows", c:false},{t:"JSON into CSV", c:false} ],
      explanation:"Rows → columns." },
    { kind:"single", text:"A \u201cManaged Access Schema\u201d means:", options:[
      {t:"Only the schema owner (or MANAGE GRANTS) may grant privileges", c:true},
      {t:"Any object owner grants", c:false},
      {t:"Any role with USAGE grants", c:false},
      {t:"Only ACCOUNTADMIN can see the schema", c:false} ],
      explanation:"Grant authority is centralized on the schema owner." },
    { kind:"single", text:"An object was dropped 10 days ago (retention 7, Fail-safe 7). Recovery by the user?", options:[
      {t:"Not via UNDROP; TT expired, possibly only via Snowflake Support (Fail-safe)", c:true},
      {t:"Simply UNDROP", c:false},{t:"Time Travel works", c:false},{t:"CLONE AT", c:false} ],
      explanation:"Time Travel expired; only Fail-safe via support." },
    { kind:"single", text:"AT(STATEMENT => '<id>') vs. BEFORE(STATEMENT => '<id>'):", options:[
      {t:"AT = state including the query; BEFORE = immediately prior", c:true},
      {t:"Identical", c:false},{t:"BEFORE doesn't exist", c:false},{t:"AT deletes data", c:false} ],
      explanation:"AT includes the statement, BEFORE excludes it." },
    { kind:"multi", choose:2, text:"Which statements about the separation of storage and compute are true?", options:[
      {t:"Compute scales independently of storage", c:true},
      {t:"Multiple warehouses access the same data without blocking", c:true},
      {t:"Each WH needs its own data copy", c:false},
      {t:"Storage must grow with compute", c:false} ],
      explanation:"Independent scaling and concurrent access without contention." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
