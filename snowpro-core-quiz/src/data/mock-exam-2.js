window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "mock-exam-2",
  order: 502,
  group: "Realistic mock exam",
  kicker: "Mock Exam 2",
  title: "COF-C03 Mock Exam 2",
  topic: "A second weighted run of 100 questions in shuffled order. Recommended: ~115 minutes. Target ≥ 75%.",
  questions: [
    { kind:"single", text:"Which layer optimizes queries and manages metadata/transactions?", options:[
      {t:"Storage", c:false},{t:"Compute", c:false},{t:"Cloud Services", c:true},{t:"Warehouse", c:false} ],
      explanation:"The Cloud Services layer handles optimization, metadata and transactions." },
    { kind:"single", text:"Which command loads local files into an internal stage?", options:[
      {t:"COPY INTO", c:false},{t:"PUT", c:true},{t:"GET", c:false},{t:"INSERT", c:false} ],
      explanation:"PUT uploads local files to an internal stage." },
    { kind:"single", text:"Which statement creates a writable copy without physically duplicating data?", options:[
      {t:"CREATE TABLE ... CLONE", c:true},
      {t:"CREATE MATERIALIZED VIEW", c:false},
      {t:"CREATE STREAM", c:false},
      {t:"CREATE STAGE", c:false} ],
      explanation:"Zero-copy cloning." },
    { kind:"single", text:"What does this demonstrate?", code:"SELECT v:address:city::string FROM t;", options:[
      {t:"Access to nested JSON in a VARIANT with a cast", c:true},
      {t:"A join", c:false},{t:"An aggregation", c:false},{t:"A PIVOT", c:false} ],
      explanation:"Colon path notation plus a :: cast." },
    { kind:"single", text:"Which role manages grants globally (MANAGE GRANTS)?", options:[
      {t:"SYSADMIN", c:false},{t:"SECURITYADMIN", c:true},{t:"PUBLIC", c:false},{t:"ORGADMIN", c:false} ],
      explanation:"SECURITYADMIN holds MANAGE GRANTS." },
    { kind:"single", text:"A warehouse should scale automatically with high user counts. Which configuration?", options:[
      {t:"Use a larger size", c:false},
      {t:"Multi-cluster with MIN/MAX_CLUSTER_COUNT", c:true},
      {t:"A clustering key", c:false},
      {t:"Increase auto-suspend", c:false} ],
      explanation:"Concurrency is handled by scaling out." },
    { kind:"multi", choose:2, text:"Which statements about micro-partitions are correct? Choose two.", options:[
      {t:"Immutable", c:true},
      {t:"Columnar compressed", c:true},
      {t:"Configurable by the customer", c:false},
      {t:"Row-oriented and uncompressed", c:false} ],
      explanation:"Micro-partitions are immutable and columnar compressed." },
    { kind:"single", text:"Which option deletes source files after a successful load?", options:[
      {t:"PURGE = TRUE", c:true},{t:"FORCE = TRUE", c:false},{t:"SINGLE = TRUE", c:false},{t:"OVERWRITE = TRUE", c:false} ],
      explanation:"PURGE removes staged source files after loading." },
    { kind:"single", text:"Which policy masks column values based on role?", options:[
      {t:"Row access policy", c:false},{t:"Masking policy", c:true},{t:"Network policy", c:false},{t:"Password policy", c:false} ],
      explanation:"Dynamic Data Masking via masking policies." },
    { kind:"single", text:"Within what window does this work?", code:"UNDROP SCHEMA analytics;", options:[
      {t:"The Time Travel retention window", c:true},
      {t:"Fail-safe only", c:false},{t:"Always", c:false},{t:"Never", c:false} ],
      explanation:"UNDROP works inside Time Travel retention." },
    { kind:"single", text:"Which query benefits from a cluster key on event_date?", options:[
      {t:"SELECT * FROM t", c:false},
      {t:"... WHERE event_date BETWEEN ...", c:true},
      {t:"INSERT INTO t ...", c:false},
      {t:"SELECT COUNT(*)", c:false} ],
      explanation:"Range filters on the clustering key prune best." },
    { kind:"single", text:"A task without a WAREHOUSE (serverless) is billed via:", options:[
      {t:"Serverless compute", c:true},{t:"A user warehouse", c:false},{t:"Free", c:false},{t:"Storage", c:false} ],
      explanation:"Serverless compute." },
    { kind:"single", text:"Snowsight is:", options:[
      {t:"A CLI", c:false},{t:"The web UI", c:true},{t:"A driver", c:false},{t:"A stage", c:false} ],
      explanation:"Snowsight is the web interface." },
    { kind:"single", text:"MERGE is primarily used for:", options:[
      {t:"Upsert", c:true},{t:"Compression", c:false},{t:"Role management", c:false},{t:"Cloning", c:false} ],
      explanation:"MERGE performs upserts." },
    { kind:"single", text:"Which edition is the minimum for materialized views?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise or higher." },
    { kind:"single", text:"An external stage is referenced most securely via:", options:[
      {t:"A storage integration", c:true},
      {t:"A password in the DDL", c:false},
      {t:"A network policy", c:false},
      {t:"Masking", c:false} ],
      explanation:"Storage integrations avoid plaintext credentials." },
    { kind:"single", text:"What does SHOW SHARES; display?", options:[
      {t:"Inbound and outbound shares", c:true},{t:"Roles", c:false},{t:"Warehouses", c:false},{t:"Streams", c:false} ],
      explanation:"Inbound and outbound shares." },
    { kind:"single", text:"Query Profile: \u201cPartitions scanned = Partitions total\u201d means:", options:[
      {t:"Perfect pruning", c:false},
      {t:"No/poor pruning", c:true},
      {t:"Result cache active", c:false},
      {t:"Optimal clustering", c:false} ],
      explanation:"Nothing was pruned." },
    { kind:"single", text:"Which function flattens an array into rows?", options:[
      {t:"FLATTEN", c:true},{t:"PIVOT", c:false},{t:"ARRAY_AGG", c:false},{t:"PARSE_JSON", c:false} ],
      explanation:"FLATTEN." },
    { kind:"single", text:"Which role should be held by only a few trusted users (plus MFA)?", options:[
      {t:"PUBLIC", c:false},{t:"ACCOUNTADMIN", c:true},{t:"USERADMIN", c:false},{t:"SYSADMIN", c:false} ],
      explanation:"ACCOUNTADMIN should be tightly limited." },
    { kind:"single", text:"What does ON_ERROR = 'CONTINUE' do?", options:[
      {t:"Skips bad rows and loads valid ones", c:true},
      {t:"Aborts", c:false},{t:"Discards the whole file", c:false},{t:"Loads nothing", c:false} ],
      explanation:"Erroneous rows are skipped." },
    { kind:"single", text:"Data sharing across regions requires:", options:[
      {t:"Database replication into the target region", c:true},
      {t:"Nothing further", c:false},
      {t:"An external table", c:false},
      {t:"A reader account, mandatorily", c:false} ],
      explanation:"Replication is required for cross-region sharing." },
    { kind:"single", text:"The Search Optimization Service is ideal for:", options:[
      {t:"Selective point lookups", c:true},{t:"Large aggregations", c:false},{t:"Full scans", c:false},{t:"Sharing", c:false} ],
      explanation:"Selective point lookups." },
    { kind:"single", text:"A standard stream tracks:", options:[
      {t:"Inserts, updates and deletes (CDC)", c:true},
      {t:"Logins only", c:false},{t:"Storage only", c:false},{t:"Queries only", c:false} ],
      explanation:"DML changes for CDC." },
    { kind:"multi", choose:2, text:"Which are serverless features? Choose two.", options:[
      {t:"Snowpipe", c:true},
      {t:"Automatic Clustering", c:true},
      {t:"A standard query on a user warehouse", c:false},
      {t:"SnowSQL", c:false} ],
      explanation:"Snowpipe and Automatic Clustering are serverless." },
    { kind:"single", text:"Which view provides historical query performance?", options:[
      {t:"QUERY_HISTORY", c:true},{t:"LOGIN_HISTORY", c:false},{t:"STORAGE_USAGE", c:false},{t:"GRANTS_TO_ROLES", c:false} ],
      explanation:"QUERY_HISTORY." },
    { kind:"single", text:"What does SKIP_HEADER = 1 do?", options:[
      {t:"Skips the first header row on load", c:true},
      {t:"Skips a file", c:false},{t:"Loads only the header", c:false},{t:"Writes a header on unload", c:false} ],
      explanation:"It skips the header row." },
    { kind:"single", text:"Fail-safe data can be recovered by the user:", options:[
      {t:"No — only by Snowflake", c:true},
      {t:"Via Time Travel", c:false},{t:"Via UNDROP", c:false},{t:"By configuring it", c:false} ],
      explanation:"Fail-safe recovery is Snowflake-only." },
    { kind:"single", text:"Snowpark enables:", options:[
      {t:"DataFrame development in Python/Java/Scala", c:true},
      {t:"SQL only", c:false},{t:"JavaScript only", c:false},{t:"FTP", c:false} ],
      explanation:"Python, Java and Scala DataFrame APIs." },
    { kind:"single", text:"The result cache is invalidated by:", options:[
      {t:"A change to the underlying data", c:true},
      {t:"A different user", c:false},{t:"Switching warehouse", c:false},{t:"A new day", c:false} ],
      explanation:"Only data changes invalidate it." },
    { kind:"single", text:"Which hierarchy path is correct?", options:[
      {t:"Account → Database → Schema → Table", c:true},
      {t:"Account → Schema → Database", c:false},
      {t:"Database → Account", c:false},
      {t:"Schema → Account", c:false} ],
      explanation:"Account → Database → Schema → Table." },
    { kind:"single", text:"OVERWRITE = TRUE when unloading:", options:[
      {t:"Overwrites existing files", c:true},
      {t:"Prevents overwriting", c:false},{t:"Drops the table", c:false},{t:"Enables compression", c:false} ],
      explanation:"It overwrites existing files." },
    { kind:"single", text:"A row access policy filters:", options:[
      {t:"Rows by context/role", c:true},{t:"Columns", c:false},{t:"Files", c:false},{t:"Roles", c:false} ],
      explanation:"Row-level security." },
    { kind:"multi", choose:2, text:"Zero-copy cloning: choose two.", options:[
      {t:"Initially shares micro-partitions", c:true},
      {t:"Copy-on-write", c:true},
      {t:"Read-only", c:false},
      {t:"Immediate full physical copy", c:false} ],
      explanation:"Shared partitions with copy-on-write." },
    { kind:"single", text:"VALIDATION_MODE = RETURN_ALL_ERRORS:", options:[
      {t:"Validates without loading", c:true},
      {t:"Loads and shows errors", c:false},{t:"Skips silently", c:false},{t:"Aborts", c:false} ],
      explanation:"Validation without loading." },
    { kind:"single", text:"A larger warehouse size helps with:", options:[
      {t:"A single complex query", c:true},
      {t:"Many small concurrent queries", c:false},
      {t:"Storage", c:false},{t:"Sharing", c:false} ],
      explanation:"Scale up for heavy single queries." },
    { kind:"single", text:"SYSTEM$STREAM_HAS_DATA returns:", options:[
      {t:"TRUE/FALSE whether new changes exist", c:true},
      {t:"A row count", c:false},{t:"Roles", c:false},{t:"Storage", c:false} ],
      explanation:"A boolean." },
    { kind:"single", text:"Tri-Secret Secure is available from which edition?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:false},{t:"Business Critical", c:true},{t:"All", c:false} ],
      explanation:"Business Critical." },
    { kind:"single", text:"An external table:", options:[
      {t:"Holds metadata over external data, queryable", c:true},
      {t:"Stores data physically in Snowflake", c:false},
      {t:"Exists only in a reader account", c:false},
      {t:"Is temporary", c:false} ],
      explanation:"Metadata over external files." },
    { kind:"single", text:"A UDTF returns:", options:[
      {t:"A table", c:true},{t:"A scalar", c:false},{t:"Nothing", c:false},{t:"A role", c:false} ],
      explanation:"Tabular results." },
    { kind:"single", text:"Best first action for remote spilling on a query:", options:[
      {t:"Increase the warehouse size", c:true},
      {t:"Multi-cluster", c:false},{t:"Auto-suspend", c:false},{t:"Clustering", c:false} ],
      explanation:"Spilling means insufficient memory — scale up." },
    { kind:"single", text:"Which role is automatically granted to everyone?", options:[
      {t:"PUBLIC", c:true},{t:"SYSADMIN", c:false},{t:"ORGADMIN", c:false},{t:"USERADMIN", c:false} ],
      explanation:"PUBLIC." },
    { kind:"single", text:"Snowpipe is suited for:", options:[
      {t:"Continuous, event-driven loading", c:true},
      {t:"One-off bulk loads", c:false},{t:"Unloading", c:false},{t:"Cloning", c:false} ],
      explanation:"Continuous micro-batch ingestion." },
    { kind:"single", text:"What does this do?", code:"CREATE TABLE t2 CLONE t BEFORE(STATEMENT => '<id>');", options:[
      {t:"Clones the state before a statement", c:true},
      {t:"Is invalid", c:false},{t:"Drops the source", c:false},{t:"Clones roles", c:false} ],
      explanation:"Time Travel clone before the statement." },
    { kind:"single", text:"TRY_CAST compared to CAST:", options:[
      {t:"Returns NULL instead of an error on invalid conversion", c:true},
      {t:"Faster", c:false},{t:"Identical", c:false},{t:"Always throws", c:false} ],
      explanation:"TRY_* returns NULL." },
    { kind:"single", text:"Cloud Services are free up to:", options:[
      {t:"10% of daily compute", c:true},{t:"5%", c:false},{t:"20%", c:false},{t:"0%", c:false} ],
      explanation:"10%." },
    { kind:"single", text:"Which auth method uses an external IdP (SAML 2.0)?", options:[
      {t:"Federated / SSO", c:true},{t:"Key-pair", c:false},{t:"Password", c:false},{t:"OAuth, mandatorily", c:false} ],
      explanation:"Federated authentication via SAML." },
    { kind:"single", text:"A child task in a DAG starts:", options:[
      {t:"After the parent completes successfully", c:true},
      {t:"Before the parent", c:false},{t:"In parallel", c:false},{t:"Never", c:false} ],
      explanation:"After successful parent completion." },
    { kind:"multi", choose:2, text:"Snowpipe auto-ingest requires: choose two.", options:[
      {t:"A cloud event notification", c:true},
      {t:"The notification_channel", c:true},
      {t:"A user warehouse", c:false},
      {t:"Guaranteed load ordering", c:false} ],
      explanation:"Event notification plus notification channel; Snowpipe is serverless and unordered." },
    { kind:"single", text:"ACCOUNT_USAGE views have a latency of:", options:[
      {t:"~45 min – 3 h", c:true},{t:"Real time", c:false},{t:"24 h fixed", c:false},{t:"7 days", c:false} ],
      explanation:"45 minutes to 3 hours." },
    { kind:"single", text:"A temporary table lives:", options:[
      {t:"Only in the current session", c:true},
      {t:"Across sessions", c:false},{t:"90 days", c:false},{t:"Permanently", c:false} ],
      explanation:"Session-scoped." },
    { kind:"single", text:"The Marketplace is based on:", options:[
      {t:"Secure Data Sharing", c:true},{t:"FTP", c:false},{t:"External tables", c:false},{t:"Email", c:false} ],
      explanation:"Secure Data Sharing." },
    { kind:"single", text:"Automatic Clustering is billed:", options:[
      {t:"Serverless", c:true},{t:"Via the user warehouse", c:false},{t:"Free", c:false},{t:"Per query", c:false} ],
      explanation:"Serverless compute." },
    { kind:"single", text:"What does OBJECT_CONSTRUCT('k',1) produce?", options:[
      {t:"An OBJECT/JSON", c:true},{t:"An array", c:false},{t:"A string", c:false},{t:"A table", c:false} ],
      explanation:"An OBJECT." },
    { kind:"single", text:"SECURITYADMIN inherits:", options:[
      {t:"USERADMIN", c:true},{t:"SYSADMIN", c:false},{t:"ORGADMIN", c:false},{t:"PUBLIC only", c:false} ],
      explanation:"SECURITYADMIN inherits USERADMIN." },
    { kind:"single", text:"Snowpipe latency:", options:[
      {t:"Seconds to minutes", c:true},{t:"Guaranteed milliseconds", c:false},{t:"Hours", c:false},{t:"Exactly 60 s", c:false} ],
      explanation:"Near real time." },
    { kind:"single", text:"An append-only stream returns:", options:[
      {t:"Inserts only", c:true},{t:"All DML", c:false},{t:"Deletes only", c:false},{t:"Nothing", c:false} ],
      explanation:"Inserts only." },
    { kind:"single", text:"A full result-cache hit with a suspended warehouse:", options:[
      {t:"Is served without starting the warehouse", c:true},
      {t:"Requires the warehouse to start", c:false},{t:"Errors", c:false},{t:"Creates a new warehouse", c:false} ],
      explanation:"No compute required." },
    { kind:"single", text:"HEADER = TRUE when unloading applies to:", options:[
      {t:"CSV", c:true},{t:"Parquet", c:false},{t:"Avro", c:false},{t:"ORC", c:false} ],
      explanation:"CSV only." },
    { kind:"single", text:"Data Classification detects:", options:[
      {t:"Potentially sensitive data (PII)", c:true},
      {t:"Query errors", c:false},{t:"Roles", c:false},{t:"Storage", c:false} ],
      explanation:"It identifies potentially sensitive columns." },
    { kind:"single", text:"ARRAY_AGG(col):", options:[
      {t:"Aggregates into an array", c:true},{t:"Flattens", c:false},{t:"Counts", c:false},{t:"Deletes", c:false} ],
      explanation:"It builds an ARRAY." },
    { kind:"single", text:"Deduplication against double file loads works via:", options:[
      {t:"Load metadata (~64 days)", c:true},
      {t:"A primary key", c:false},{t:"FORCE=TRUE", c:false},{t:"Not at all", c:false} ],
      explanation:"Load metadata." },
    { kind:"single", text:"The SSD cache on suspend:", options:[
      {t:"Is cleared", c:true},{t:"Persists", c:false},{t:"Is written to storage", c:false},{t:"Is moved", c:false} ],
      explanation:"It is dropped on suspend." },
    { kind:"multi", choose:2, text:"Which are policy-based governance objects? Choose two.", options:[
      {t:"Masking policy", c:true},
      {t:"Session policy", c:true},
      {t:"Sequence", c:false},
      {t:"Stream", c:false} ],
      explanation:"Masking and session policies are policy objects." },
    { kind:"single", text:"QAS accelerates:", options:[
      {t:"Scan-intensive outlier queries", c:true},{t:"Logins", c:false},{t:"Compression", c:false},{t:"Roles", c:false} ],
      explanation:"Scan-heavy outlier workloads." },
    { kind:"single", text:"Which edition for multi-cluster warehouses?", options:[
      {t:"Enterprise", c:true},{t:"Standard", c:false},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise or higher." },
    { kind:"single", text:"STRIP_OUTER_ARRAY = TRUE:", options:[
      {t:"Removes the outer array, elements become rows", c:true},
      {t:"Adds an array", c:false},{t:"Removes NULLs", c:false},{t:"Compresses", c:false} ],
      explanation:"Elements become rows." },
    { kind:"single", text:"A consumer can treat shared data as:", options:[
      {t:"Read-only", c:true},{t:"Fully modifiable", c:false},{t:"Delete-only", c:false},{t:"Insert-only", c:false} ],
      explanation:"Read-only access." },
    { kind:"single", text:"SCALING_POLICY = STANDARD vs. ECONOMY:", options:[
      {t:"STANDARD starts clusters more aggressively", c:true},
      {t:"ECONOMY is more aggressive", c:false},
      {t:"Identical", c:false},
      {t:"Disables multi-cluster", c:false} ],
      explanation:"STANDARD scales out on queuing; ECONOMY is conservative." },
    { kind:"single", text:"A secure view when sharing:", options:[
      {t:"Hides the definition/data", c:true},{t:"Is faster", c:false},{t:"Is cheaper", c:false},{t:"Manages roles", c:false} ],
      explanation:"It protects the definition." },
    { kind:"single", text:"What does PARSE_JSON('{\"a\":1}') return?", options:[
      {t:"A VARIANT", c:true},{t:"A string", c:false},{t:"An array", c:false},{t:"A table", c:false} ],
      explanation:"A VARIANT." },
    { kind:"single", text:"PATTERN in a COPY statement is:", options:[
      {t:"A regex file filter", c:true},{t:"A date format", c:false},{t:"Compression", c:false},{t:"A role", c:false} ],
      explanation:"A regex filter on file names." },
    { kind:"single", text:"SYSTEM$CLUSTERING_INFORMATION shows:", options:[
      {t:"Clustering quality", c:true},{t:"Roles", c:false},{t:"Costs", c:false},{t:"Logins", c:false} ],
      explanation:"Clustering depth/quality." },
    { kind:"single", text:"Which MFA solution is integrated?", options:[
      {t:"Duo Security", c:true},{t:"SMS only", c:false},{t:"YubiKey only", c:false},{t:"None", c:false} ],
      explanation:"Duo Security." },
    { kind:"single", text:"\u201cMost Expensive Nodes\u201d shows:", options:[
      {t:"The costliest operators", c:true},{t:"Storage", c:false},{t:"Roles", c:false},{t:"Logins", c:false} ],
      explanation:"The most resource-intensive operators." },
    { kind:"single", text:"COPY_HISTORY (table function) shows:", options:[
      {t:"Load history including Snowpipe", c:true},
      {t:"Bulk only", c:false},{t:"Roles", c:false},{t:"Storage", c:false} ],
      explanation:"It includes Snowpipe loads." },
    { kind:"single", text:"DATA_RETENTION_TIME_IN_DAYS can be set on:", options:[
      {t:"Account/DB/Schema/Table", c:true},
      {t:"Account only", c:false},{t:"Table only", c:false},{t:"Nowhere", c:false} ],
      explanation:"It cascades across all four levels." },
    { kind:"single", text:"Stored procedure vs. UDF:", options:[
      {t:"A stored procedure can run procedural logic plus DML/DDL", c:true},
      {t:"A stored procedure only returns values", c:false},
      {t:"No difference", c:false},
      {t:"A stored procedure is a stage", c:false} ],
      explanation:"Procedural logic plus DML/DDL." },
    { kind:"single", text:"Snowflake regions are:", options:[
      {t:"Geographic cloud locations", c:true},{t:"Roles", c:false},{t:"Database groups", c:false},{t:"Warehouses", c:false} ],
      explanation:"Geographic cloud locations." },
    { kind:"single", text:"WHERE UPPER(col)=... can affect pruning how?", options:[
      {t:"Hinder it (function on the column)", c:true},
      {t:"Improve it", c:false},{t:"No effect", c:false},{t:"Replace it", c:false} ],
      explanation:"A function on the column blocks min/max pruning." },
    { kind:"single", text:"What does LIST @stg; show?", options:[
      {t:"Files in the stage", c:true},{t:"Tables", c:false},{t:"Roles", c:false},{t:"Warehouses", c:false} ],
      explanation:"Staged files." },
    { kind:"single", text:"Failover groups enable:", options:[
      {t:"Coordinated failover of multiple objects", c:true},
      {t:"Compression", c:false},{t:"Masking", c:false},{t:"Cloning", c:false} ],
      explanation:"Coordinated failover." },
    { kind:"multi", choose:3, text:"Which are stored-procedure languages? Choose three.", options:[
      {t:"JavaScript", c:true},
      {t:"Snowflake Scripting", c:true},
      {t:"Snowpark (Python/Java/Scala)", c:true},
      {t:"C++", c:false} ],
      explanation:"JavaScript, Snowflake Scripting and Snowpark languages." },
    { kind:"single", text:"A transient table:", options:[
      {t:"Has no Fail-safe, Time Travel 0–1 day", c:true},
      {t:"Has 7 days Fail-safe", c:false},
      {t:"Is session-local", c:false},
      {t:"Has 90 days Fail-safe", c:false} ],
      explanation:"No Fail-safe, max 1 day Time Travel." },
    { kind:"single", text:"A provider adds an object to a share. The consumer:", options:[
      {t:"Sees the new data immediately", c:true},
      {t:"Must re-import", c:false},{t:"Sees nothing", c:false},{t:"Pays the provider", c:false} ],
      explanation:"Immediately visible." },
    { kind:"single", text:"Why load many medium-sized files?", options:[
      {t:"Better parallelization", c:true},{t:"Less storage", c:false},{t:"Security", c:false},{t:"Caching", c:false} ],
      explanation:"Parallelism across warehouse threads." },
    { kind:"single", text:"What does this achieve?", code:"GRANT ROLE r_child TO ROLE r_parent;", options:[
      {t:"r_parent inherits r_child", c:true},
      {t:"r_child inherits r_parent", c:false},{t:"They merge", c:false},{t:"Error", c:false} ],
      explanation:"The parent inherits the granted child role." },
    { kind:"single", text:"Recovery after a faulty UPDATE 30 minutes ago (retention 1 day):", options:[
      {t:"Time Travel (AT/BEFORE)", c:true},
      {t:"Support only", c:false},{t:"Impossible", c:false},{t:"UNDROP", c:false} ],
      explanation:"Within retention, use Time Travel." },
    { kind:"single", text:"Queueing caused by many users — the measure is:", options:[
      {t:"Multi-cluster", c:true},{t:"Increase size", c:false},{t:"Auto-suspend", c:false},{t:"Clustering", c:false} ],
      explanation:"Scale out for concurrency." },
    { kind:"single", text:"What does a VARIANT column store?", options:[
      {t:"Semi-structured data natively", c:true},
      {t:"Numbers only", c:false},{t:"Text only", c:false},{t:"Booleans only", c:false} ],
      explanation:"Semi-structured data such as JSON." },
    { kind:"single", text:"SYSTEM$STREAM_HAS_DATA in a task WHEN clause:", options:[
      {t:"Runs only when the stream has data", c:true},
      {t:"Always runs", c:false},{t:"Empties the stream", c:false},{t:"Errors", c:false} ],
      explanation:"It skips runs on an empty stream." },
    { kind:"single", text:"ACCESS_HISTORY is used for:", options:[
      {t:"Auditing data access", c:true},{t:"Storage", c:false},{t:"Compression", c:false},{t:"Caching", c:false} ],
      explanation:"Data access auditing." },
    { kind:"single", text:"ERROR_ON_COLUMN_COUNT_MISMATCH=FALSE:", options:[
      {t:"Processes the row despite a wrong column count", c:true},
      {t:"Aborts", c:false},{t:"Auto-corrects", c:false},{t:"Skips the file", c:false} ],
      explanation:"Such rows are still processed." },
    { kind:"single", text:"A reader account is managed and paid for by:", options:[
      {t:"The provider", c:true},{t:"The consumer", c:false},{t:"Snowflake, free", c:false},{t:"ORGADMIN", c:false} ],
      explanation:"The provider." },
    { kind:"single", text:"Which of these is serverless?", options:[
      {t:"Snowpipe", c:true},{t:"A user query", c:false},{t:"SnowSQL", c:false},{t:"Snowsight", c:false} ],
      explanation:"Snowpipe." },
    { kind:"single", text:"UNPIVOT:", options:[
      {t:"Columns → rows", c:true},{t:"Rows → columns", c:false},{t:"Aggregates", c:false},{t:"Merges", c:false} ],
      explanation:"Columns become rows." },
    { kind:"single", text:"A managed access schema means:", options:[
      {t:"Only the schema owner grants", c:true},
      {t:"Object owners grant", c:false},
      {t:"Roles with USAGE grant", c:false},
      {t:"Only ACCOUNTADMIN can see it", c:false} ],
      explanation:"Grant authority is centralized on the schema owner." },
    { kind:"single", text:"An object was dropped 10 days ago (retention 7, Fail-safe 7):", options:[
      {t:"Support only (Fail-safe) — Time Travel has expired", c:true},
      {t:"UNDROP", c:false},{t:"Time Travel", c:false},{t:"CLONE AT", c:false} ],
      explanation:"Time Travel expired; only Fail-safe via support." },
    { kind:"single", text:"AT vs. BEFORE:", options:[
      {t:"AT includes the query, BEFORE is just prior", c:true},
      {t:"Identical", c:false},{t:"BEFORE does not exist", c:false},{t:"AT deletes", c:false} ],
      explanation:"AT includes the statement; BEFORE excludes it." },
    { kind:"multi", choose:2, text:"Separation of storage and compute: choose two.", options:[
      {t:"Independent scaling", c:true},
      {t:"Multiple warehouses on the same data without blocking", c:true},
      {t:"Each warehouse needs a copy", c:false},
      {t:"Storage grows with compute", c:false} ],
      explanation:"Independent scaling and concurrent non-blocking access." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
