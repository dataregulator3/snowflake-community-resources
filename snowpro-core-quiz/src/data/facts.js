window.QUIZZES = window.QUIZZES || [];
(function () {
var numbers = {
  id: "facts-numbers",
  order: 401,
  group: "Facts",
  kicker: "Facts · Numbers",
  title: "Number-Based Facts",
  topic: "Limits, retentions, defaults and maximums worth memorising: sizes, timeouts, caches, file limits and DAG limits.",
  questions: [
    { kind:"single", text:"What is the maximum size of a single micro-partition?", options:[
      {t:"16 MB compressed (50–500 MB uncompressed)", c:true},
      {t:"500 MB compressed", c:false},
      {t:"16 MB uncompressed", c:false},
      {t:"1 GB compressed", c:false} ],
      explanation:"A micro-partition holds a maximum of 16 MB compressed, which corresponds to roughly 50–500 MB of uncompressed data." },
    { kind:"single", text:"How often does Snowflake issue behavior change bundles?", options:[
      {t:"Roughly monthly", c:true},{t:"Weekly", c:false},{t:"Quarterly", c:false},{t:"Annually", c:false} ],
      explanation:"Behavior change bundles are released roughly monthly." },
    { kind:"multi", choose:2, text:"How far can an account shift a behavior change bundle? Choose two.", options:[
      {t:"Opt in 4 weeks early", c:true},
      {t:"Opt out 4 weeks late", c:true},
      {t:"Opt in 8 weeks early", c:false},
      {t:"Opt out indefinitely", c:false} ],
      explanation:"Accounts can opt in 4 weeks early or defer (opt out) 4 weeks late." },
    { kind:"single", text:"What is the default interval for Snowflake's storage key rotation?", options:[
      {t:"30 days", c:true},{t:"7 days", c:false},{t:"90 days", c:false},{t:"365 days", c:false} ],
      explanation:"Account and table keys are rotated every 30 days; annual re-encryption (365 days) can be requested at Enterprise and above." },
    { kind:"single", text:"How often can re-encryption (rekeying) be requested at Enterprise Edition and above?", options:[
      {t:"365 days", c:true},{t:"30 days", c:false},{t:"90 days", c:false},{t:"It cannot be requested", c:false} ],
      explanation:"Annual rekeying operates on a 365-day cycle; the routine key rotation is every 30 days." },
    { kind:"single", text:"Which encryption strength does Snowflake apply to data at rest?", options:[
      {t:"AES 256-bit", c:true},{t:"AES 128-bit", c:false},{t:"RSA 2048-bit", c:false},{t:"3DES", c:false} ],
      explanation:"Snowflake encrypts with AES 256-bit encryption." },
    { kind:"multi", choose:2, text:"What are the minimum and default values for session timeout policies? Choose two.", options:[
      {t:"Minimum 5 minutes", c:true},
      {t:"Default 240 minutes", c:true},
      {t:"Minimum 1 minute", c:false},
      {t:"Default 60 minutes", c:false} ],
      explanation:"Session policies allow a minimum of 5 minutes, with a default of 240 minutes." },
    { kind:"single", text:"Apart from the Complete Task Graphs exception, what is the historical data retention range for Information Schema table functions?", options:[
      {t:"7 days to 6 months, depending on the dataset", c:true},
      {t:"Always 365 days", c:false},
      {t:"24 hours to 7 days", c:false},
      {t:"Always 14 days", c:false} ],
      explanation:"Information Schema table functions retain 7 days to 6 months depending on the dataset." },
    { kind:"single", text:"What is the retention for Complete Task Graphs in the Information Schema?", options:[
      {t:"60 minutes", c:true},{t:"7 days", c:false},{t:"24 hours", c:false},{t:"6 months", c:false} ],
      explanation:"Complete Task Graphs is the exception at just 60 minutes." },
    { kind:"single", text:"What is the stated SLA latency range for the ACCOUNT_USAGE views?", options:[
      {t:"45 minutes to 3 hours", c:true},
      {t:"Zero latency (live)", c:false},
      {t:"3 to 12 hours", c:false},
      {t:"Exactly 24 hours", c:false} ],
      explanation:"Use the SLA figures of 45 minutes to 3 hours, even though actual latency keeps improving." },
    { kind:"multi", choose:2, text:"Which ACCOUNT_USAGE latencies are correct? Choose two.", options:[
      {t:"Query History — 45 minutes", c:true},
      {t:"Login History — 2 hours", c:true},
      {t:"Query History — 3 hours", c:false},
      {t:"Login History — 45 minutes", c:false} ],
      explanation:"Query History has a 45-minute latency; Login History is 2 hours." },
    { kind:"single", text:"How long do the History-type tables in ACCOUNT_USAGE retain data?", options:[
      {t:"365 days", c:true},{t:"90 days", c:false},{t:"14 days", c:false},{t:"Permanently", c:false} ],
      explanation:"History-type tables retain 365 days; object data is essentially permanent." },
    { kind:"multi", choose:2, text:"What are the retention figures for the query result cache? Choose two.", options:[
      {t:"24 hours retention", c:true},
      {t:"31 days maximum", c:true},
      {t:"1 hour retention", c:false},
      {t:"90 days maximum", c:false} ],
      explanation:"Results persist 24 hours, extended by reuse up to a 31-day maximum." },
    { kind:"multi", choose:2, text:"What are the default and maximum values for STATEMENT_TIMEOUT_IN_SECONDS? Choose two.", options:[
      {t:"2 days default", c:true},
      {t:"7 days maximum", c:true},
      {t:"1 hour default", c:false},
      {t:"30 days maximum", c:false} ],
      explanation:"The default maximum query run time is 2 days, with a hard maximum of 7 days." },
    { kind:"single", text:"At which levels can STATEMENT_TIMEOUT_IN_SECONDS be set?", options:[
      {t:"Account, user, session and warehouse", c:true},
      {t:"Account only", c:false},
      {t:"Warehouse only", c:false},
      {t:"Database, schema and table", c:false} ],
      explanation:"The parameter can be set at account > user > session, and on the warehouse." },
    { kind:"single", text:"How long does Snowsight retain Query History in the UI?", options:[
      {t:"14 days", c:true},{t:"24 hours", c:false},{t:"365 days", c:false},{t:"45 minutes", c:false} ],
      explanation:"The Snowsight Query History UI shows 14 days of retention." },
    { kind:"single", text:"What is the default warehouse auto-suspend time?", options:[
      {t:"10 minutes (though the UI sets 5)", c:true},
      {t:"60 seconds", c:false},
      {t:"5 minutes in all cases", c:false},
      {t:"1 hour", c:false} ],
      explanation:"The default is 10 minutes, although creating a warehouse in the UI sets 5." },
    { kind:"single", text:"What is the minimum billing period when a warehouse starts?", options:[
      {t:"60 seconds", c:true},{t:"1 second", c:false},{t:"5 minutes", c:false},{t:"10 minutes", c:false} ],
      explanation:"Warehouses bill per second with a 60-second minimum." },
    { kind:"multi", choose:2, text:"What are the cluster count figures for multi-cluster warehouses? Choose two.", options:[
      {t:"Default 1", c:true},
      {t:"Maximum 10", c:true},
      {t:"Default 2", c:false},
      {t:"Maximum 100", c:false} ],
      explanation:"MIN/MAX_CLUSTER_COUNT default to 1 (not multi-cluster) with a maximum of 10." },
    { kind:"single", text:"Under the Economy scaling policy, when does a multi-cluster warehouse scale out?", options:[
      {t:"When there is at least 6 minutes' worth of work", c:true},
      {t:"Immediately on any queuing", c:false},
      {t:"After 2–3 checks", c:false},
      {t:"Only manually", c:false} ],
      explanation:"Economy scales out if there is 6 minutes' work; Standard scales out on queuing." },
    { kind:"multi", choose:2, text:"How many checks occur before a multi-cluster warehouse scales in? Choose two.", options:[
      {t:"Standard — after 2–3 checks", c:true},
      {t:"Economy — after 5–6 checks", c:true},
      {t:"Standard — after 5–6 checks", c:false},
      {t:"Economy — immediately", c:false} ],
      explanation:"Standard scales in after 2–3 checks; Economy waits for 5–6." },
    { kind:"multi", choose:2, text:"What are the figures for QUERY_ACCELERATION_MAX_SCALE_FACTOR? Choose two.", code:"ALTER WAREHOUSE wh SET\n  ENABLE_QUERY_ACCELERATION = TRUE\n  QUERY_ACCELERATION_MAX_SCALE_FACTOR = 8;", options:[
      {t:"Default is 8", c:true},
      {t:"Range from 0 (no max) to 100", c:true},
      {t:"Default is 1", c:false},
      {t:"Range from 1 to 10", c:false} ],
      explanation:"The default max scale factor is 8, and the range runs from 0 (no maximum) to 100." },
    { kind:"single", text:"What is the recommended file size for COPY and file-based Snowpipe loading?", options:[
      {t:"100–250 MB compressed", c:true},
      {t:"16 MB compressed", c:false},
      {t:"1–5 GB compressed", c:false},
      {t:"10 MB uncompressed", c:false} ],
      explanation:"100–250 MB compressed keeps load parallelism and costs reasonable." },
    { kind:"single", text:"What is the maximum number of files you can list explicitly in a load?", options:[
      {t:"1000", c:true},{t:"100", c:false},{t:"64", c:false},{t:"Unlimited", c:false} ],
      explanation:"An explicit file list is capped at 1000 files; paths and patterns are the usual approach." },
    { kind:"multi", choose:2, text:"What are the load metadata retention periods that prevent duplicate loading? Choose two.", options:[
      {t:"64 days for COPY", c:true},
      {t:"14 days for Snowpipe", c:true},
      {t:"14 days for COPY", c:false},
      {t:"64 days for Snowpipe", c:false} ],
      explanation:"COPY retains load metadata for 64 days; Snowpipe for 14 days." },
    { kind:"single", text:"What is the maximum size of a VARIANT value?", options:[
      {t:"16 MB", c:true},{t:"128 MB", c:false},{t:"5 GB", c:false},{t:"250 MB", c:false} ],
      explanation:"VARIANT is capped at 16 MB; consider STRIP_OUTER_ARRAY during load where appropriate." },
    { kind:"multi", choose:2, text:"What are the default and maximum values for MAX_FILE_SIZE when unloading? Choose two.", options:[
      {t:"Default 16 MB", c:true},
      {t:"Maximum 5 GB", c:true},
      {t:"Default 100 MB", c:false},
      {t:"Maximum 16 MB", c:false} ],
      explanation:"MAX_FILE_SIZE defaults to 16 MB with a 5 GB maximum; actual files can vary due to parallelism and rowset completion." },
    { kind:"multi", choose:2, text:"What are the default and maximum values for MAX_DATA_EXTENSION_TIME_IN_DAYS? Choose two.", options:[
      {t:"Default 14 days", c:true},
      {t:"Maximum 90 days", c:true},
      {t:"Default 1 day", c:false},
      {t:"Maximum 365 days", c:false} ],
      explanation:"The parameter defaults to 14 days with a 90-day maximum, and is available to all Editions." },
    { kind:"multi", choose:3, text:"What are the size limits on task DAGs? Choose three.", options:[
      {t:"1000 tasks in a DAG", c:true},
      {t:"100 child tasks", c:true},
      {t:"100 predecessors per task", c:true},
      {t:"10 tasks in a DAG", c:false} ],
      explanation:"A DAG holds up to 1000 tasks, with 100 children and 100 predecessors per task." },
    { kind:"multi", choose:2, text:"What are the Time Travel and Fail-safe figures for permanent tables? Choose two.", options:[
      {t:"0–90 days Time Travel", c:true},
      {t:"7 days Fail-safe", c:true},
      {t:"0–1 days Time Travel", c:false},
      {t:"No Fail-safe", c:false} ],
      explanation:"Permanent tables allow 0–90 days of Time Travel plus 7 days of Fail-safe." },
    { kind:"multi", choose:2, text:"What applies to temporary and transient tables? Choose two.", options:[
      {t:"0–1 days Time Travel", c:true},
      {t:"No Fail-safe", c:true},
      {t:"0–90 days Time Travel", c:false},
      {t:"7 days Fail-safe", c:false} ],
      explanation:"Temporary and transient tables get a maximum of 1 day Time Travel and no Fail-safe." },
    { kind:"single", text:"What Time Travel do external tables have?", options:[
      {t:"None", c:true},{t:"1 day", c:false},{t:"7 days", c:false},{t:"90 days", c:false} ],
      explanation:"External tables have no Time Travel." },
    { kind:"single", text:"What is the maximum Time Travel available on Standard Edition?", options:[
      {t:"1 day", c:true},{t:"7 days", c:false},{t:"90 days", c:false},{t:"0 days", c:false} ],
      explanation:"All table types default to 1 day, and Standard Edition caps Time Travel at 1 day." },
    { kind:"single", text:"For how long does a Scoped URL permit access to a staged file?", options:[
      {t:"24 hours — until the persisted query result period ends", c:true},
      {t:"7 days", c:false},
      {t:"Configurable to any length", c:false},
      {t:"Until the stage is dropped", c:false} ],
      explanation:"A scoped URL expires when the persisted query result period ends, currently 24 hours." }
  ]
};

var reference = {
  id: "facts-reference",
  order: 402,
  group: "Facts",
  kicker: "Facts · Reference",
  title: "Reference & Syntax Facts",
  topic: "Edition features, system roles, Query Profile values, clustering and search strategies, stage syntax, URLs and sharing limits.",
  questions: [
    { kind:"multi", choose:2, text:"Which capabilities does Enterprise Edition add over Standard? Choose two.", options:[
      {t:"Multi-cluster warehouses and Materialized Views", c:true},
      {t:"Column-level and Row-level Security", c:true},
      {t:"Tri-Secret Secure", c:false},
      {t:"Failover and Failback", c:false} ],
      explanation:"Enterprise adds multi-cluster, Search Optimization, Query Acceleration, Materialized Views, extended Time Travel and the column/row security features. Tri-Secret and failover are Business Critical." },
    { kind:"multi", choose:2, text:"Which governance features arrive with Enterprise Edition? Choose two.", options:[
      {t:"Object Tagging and Classification", c:true},
      {t:"ACCESS_HISTORY", c:true},
      {t:"PrivateLink", c:false},
      {t:"Account Object Replication", c:false} ],
      explanation:"Enterprise adds Object Tagging, Classification, Aggregation/Projection Policies and ACCESS_HISTORY." },
    { kind:"single", text:"Which sharing feature is introduced at Enterprise Edition?", options:[
      {t:"Data Clean Rooms", c:true},
      {t:"Secure Data Sharing", c:false},
      {t:"Reader Accounts", c:false},
      {t:"Marketplace listings", c:false} ],
      explanation:"Data Clean Rooms are the Enterprise sharing addition; basic Secure Data Sharing is available at Standard." },
    { kind:"multi", choose:2, text:"Which security features does Business Critical add over Enterprise? Choose two.", options:[
      {t:"Tri-Secret Secure", c:true},
      {t:"PrivateLink (inbound and outbound)", c:true},
      {t:"Materialized Views", c:false},
      {t:"Search Optimization", c:false} ],
      explanation:"Business Critical adds Tri-Secret, PrivateLink both ways, private function endpoints and higher-level compliance." },
    { kind:"multi", choose:3, text:"Which replication capabilities does Business Critical add? Choose three.", options:[
      {t:"Account Object Replication (non-data)", c:true},
      {t:"Failover and Failback", c:true},
      {t:"Client Redirect", c:true},
      {t:"Database Replication", c:false} ],
      explanation:"Business Critical adds account object replication, failover/failback and Client Redirect; database replication is available to non-BC accounts too." },
    { kind:"multi", choose:3, text:"On which platforms is SnowSQL supported? Choose three.", options:[
      {t:"Linux (CentOS, RHEL, Ubuntu)", c:true},
      {t:"macOS", c:true},
      {t:"Microsoft Windows", c:true},
      {t:"Android", c:false} ],
      explanation:"SnowSQL runs on Linux, macOS and Microsoft Windows." },
    { kind:"single", text:"Which statement about the PUBLIC role is correct?", options:[
      {t:"It is granted to every user and has no default permissions on PUBLIC schemas", c:true},
      {t:"It can create warehouses", c:false},
      {t:"It inherits SYSADMIN", c:false},
      {t:"It must be granted manually", c:false} ],
      explanation:"PUBLIC is granted to every user; despite the confusing name it has no default permissions on the PUBLIC schemas in databases." },
    { kind:"single", text:"What can SYSADMIN do?", options:[
      {t:"Create warehouses and database objects, but not users or roles", c:true},
      {t:"Create users and roles but not warehouses", c:false},
      {t:"Manage any grant in the account", c:false},
      {t:"Nothing without ACCOUNTADMIN", c:false} ],
      explanation:"SYSADMIN creates warehouses and database objects; good practice grants the top of any custom role hierarchy to SYSADMIN." },
    { kind:"single", text:"What is the scope of USERADMIN's user and role management?", options:[
      {t:"It can create and manage users and roles, but only those created by that role", c:true},
      {t:"It can manage every user and role in the account", c:false},
      {t:"It can only create roles, not users", c:false},
      {t:"It can manage any grant", c:false} ],
      explanation:"USERADMIN manages users and roles it created itself." },
    { kind:"single", text:"Which role inherits USERADMIN and can also manage any grant?", options:[
      {t:"SECURITYADMIN", c:true},{t:"SYSADMIN", c:false},{t:"ORGADMIN", c:false},{t:"PUBLIC", c:false} ],
      explanation:"SECURITYADMIN inherits USERADMIN and adds the ability to manage any grant." },
    { kind:"single", text:"Which roles does ACCOUNTADMIN inherit?", options:[
      {t:"SYSADMIN and SECURITYADMIN", c:true},
      {t:"SYSADMIN only", c:false},
      {t:"USERADMIN only", c:false},
      {t:"PUBLIC and SYSADMIN", c:false} ],
      explanation:"ACCOUNTADMIN inherits SYSADMIN and SECURITYADMIN, plus several account-level permissions." },
    { kind:"multi", choose:3, text:"Which of these are Query Profile overview values? Choose three.", options:[
      {t:"Processing — data processing by the CPU", c:true},
      {t:"Local Disk IO — blocked by local disk access", c:true},
      {t:"Synchronization — synchronization between participating processes", c:true},
      {t:"Compression — time spent compressing results", c:false} ],
      explanation:"The overview values are Processing, Local Disk IO, Remote Disk IO, Network Communication, Synchronization and Initialization." },
    { kind:"single", text:"What does the Query Profile value 'Initialization' represent?", options:[
      {t:"Time spent setting up the query processing", c:true},
      {t:"Time waiting for network data transfer", c:false},
      {t:"CPU data processing", c:false},
      {t:"Time blocked by remote disk access", c:false} ],
      explanation:"Initialization is the time spent setting up query processing." },
    { kind:"multi", choose:2, text:"Which pruning statistics appear in the Query Profile? Choose two.", options:[
      {t:"Partitions scanned", c:true},
      {t:"Partitions total", c:true},
      {t:"Partitions cached", c:false},
      {t:"Partitions clustered", c:false} ],
      explanation:"Pruning is reported as partitions scanned so far against partitions total." },
    { kind:"multi", choose:2, text:"Which spilling statistics appear in the Query Profile? Choose two.", options:[
      {t:"Bytes spilled to local storage", c:true},
      {t:"Bytes spilled to remote storage", c:true},
      {t:"Bytes spilled to cache", c:false},
      {t:"Bytes spilled to stage", c:false} ],
      explanation:"Spilling is reported for local disk and remote disk, when intermediate results do not fit in memory." },
    { kind:"single", text:"How many columns does Snowflake recommend at most in a clustering key?", options:[
      {t:"3 or 4", c:true},{t:"1 only", c:false},{t:"8", c:false},{t:"No limit", c:false} ],
      explanation:"For most tables a maximum of 3–4 columns is recommended; more tends to increase costs more than benefits." },
    { kind:"single", text:"How should clustering key columns be prioritised?", options:[
      {t:"Columns most actively used in selective filters, then columns used in join predicates", c:true},
      {t:"Columns with the highest cardinality first", c:false},
      {t:"Columns that appear in SELECT lists", c:false},
      {t:"Alphabetically", c:false} ],
      explanation:"Prioritise selective filter columns first, then frequent join predicate columns." },
    { kind:"single", text:"When using more than one column in a clustering key, how should they be ordered?", options:[
      {t:"From lowest cardinality to highest cardinality", c:true},
      {t:"From highest cardinality to lowest", c:false},
      {t:"Alphabetically", c:false},
      {t:"By data type size", c:false} ],
      explanation:"As a general rule, order the columns from lowest to highest cardinality." },
    { kind:"single", text:"What cardinality makes a good clustering key?", options:[
      {t:"Large enough for effective pruning, small enough to group rows into the same micro-partitions", c:true},
      {t:"As high as possible, e.g. a UUID", c:false},
      {t:"As low as possible, e.g. a boolean", c:false},
      {t:"Cardinality is irrelevant", c:false} ],
      explanation:"The key needs enough distinct values to prune, but few enough that rows still group together." },
    { kind:"multi", choose:2, text:"Which queries are good targets for Search Optimization? Choose two.", options:[
      {t:"Queries that typically run for a few seconds or longer", c:true},
      {t:"Queries where a filter column has around 100,000 distinct values or more", c:true},
      {t:"Queries with sub-second execution times", c:false},
      {t:"Queries that only use the primary cluster key", c:false} ],
      explanation:"Search Optimization targets queries of a few seconds or more on columns other than the primary cluster key, with high distinct-value counts." },
    { kind:"multi", choose:3, text:"Which predicate types does Search Optimization support? Choose three.", options:[
      {t:"Point lookups using equality and IN", c:true},
      {t:"Substring queries using wildcards and regular expressions", c:true},
      {t:"Geospatial queries", c:true},
      {t:"Window function ordering", c:false} ],
      explanation:"Supported predicates include equality/IN point lookups, substring/regex, semi-structured searches, geospatial, and AND/OR conjunctions." },
    { kind:"multi", choose:3, text:"Which query types can the Query Acceleration Service be applied to? Choose three.", options:[
      {t:"SELECT", c:true},{t:"INSERT", c:true},{t:"CTAS", c:true},{t:"MERGE", c:false} ],
      explanation:"QAS applies to SELECT, INSERT and CTAS queries." },
    { kind:"multi", choose:2, text:"How can you identify candidate queries for Query Acceleration? Choose two.", options:[
      {t:"The QUERY_ACCELERATION_ELIGIBLE view", c:true},
      {t:"The SYSTEM$ESTIMATE_QUERY_ACCELERATION function", c:true},
      {t:"The VALIDATE table function", c:false},
      {t:"SYSTEM$CLUSTERING_INFORMATION", c:false} ],
      explanation:"Use the QUERY_ACCELERATION_ELIGIBLE view or SYSTEM$ESTIMATE_QUERY_ACCELERATION." },
    { kind:"single", text:"Which reference lists the files on a user stage?", code:"LIST ???;", options:[
      {t:"@~", c:true},{t:"@%mytable", c:false},{t:"@my_stage", c:false},{t:"@@user", c:false} ],
      explanation:"@~ is the user stage, @%mytable the table stage and @my_stage a named stage." },
    { kind:"single", text:"What does this command do?", code:"PUT 'file://data/myfile.csv' '@my_stage' auto_compress = True;", options:[
      {t:"Copies a local file into an internal stage, compressing it", c:true},
      {t:"Copies a file from a stage to local storage", c:false},
      {t:"Loads the file into a table", c:false},
      {t:"Copies files between two stages", c:false} ],
      explanation:"PUT copies files from local storage into an internal stage; GET goes the other way." },
    { kind:"single", text:"Which transformations work during COPY INTO a table?", options:[
      {t:"Simple, within-row transformations — not aggregates, windows or flatten", c:true},
      {t:"Any transformation including aggregates", c:false},
      {t:"Window functions only", c:false},
      {t:"No transformations at all", c:false} ],
      explanation:"Simple within-row transformations work; anything involving multiple rows (aggregate, window, flatten) does not." },
    { kind:"single", text:"Which stage type does NOT support transformations during COPY?", options:[
      {t:"Table stages", c:true},{t:"User stages", c:false},{t:"Named internal stages", c:false},{t:"External stages", c:false} ],
      explanation:"Table stages do not support transformations, but user stages do." },
    { kind:"multi", choose:3, text:"Which are the COPY INTO table defaults? Choose three.", options:[
      {t:"Format CSV with a comma delimiter", c:true},
      {t:"Encoding UTF8", c:true},
      {t:"On Error — Abort Statement", c:true},
      {t:"Compression — None", c:false} ],
      explanation:"Defaults are CSV, comma delimiter, UTF8, Auto compression and ON_ERROR = ABORT_STATEMENT." },
    { kind:"multi", choose:2, text:"Which formats can be LOADED but NOT unloaded? Choose two.", options:[
      {t:"AVRO", c:true},{t:"ORC", c:true},{t:"CSV", c:false},{t:"JSON", c:false} ],
      explanation:"Loading supports CSV, JSON, AVRO, ORC, PARQUET and XML; unloading is limited to CSV, JSON and PARQUET." },
    { kind:"single", text:"Which compression option is NOT supported by Snowflake?", options:[
      {t:"ZIP", c:true},{t:"GZIP", c:false},{t:"BROTLI", c:false},{t:"ZSTD", c:false} ],
      explanation:"Options include AUTO, GZIP, BZ2, BROTLI, ZSTD, DEFLATE, RAW_DEFLATE, NONE (plus SNAPPY/LZO for Parquet) — but not ZIP." },
    { kind:"single", text:"What does compression AUTO mean?", options:[
      {t:"Auto-detection when reading, and a default choice (GZIP or SNAPPY) when writing", c:true},
      {t:"No compression at all", c:false},
      {t:"Always GZIP", c:false},
      {t:"The user is prompted to choose", c:false} ],
      explanation:"AUTO detects compression on read and picks GZIP or SNAPPY on write." },
    { kind:"multi", choose:3, text:"Which metadata columns are available for staged files? Choose three.", options:[
      {t:"METADATA$FILENAME", c:true},
      {t:"METADATA$FILE_ROW_NUMBER", c:true},
      {t:"METADATA$FILE_LAST_MODIFIED", c:true},
      {t:"METADATA$FILE_SIZE", c:false} ],
      explanation:"Staged file metadata includes FILENAME (with full path), FILE_ROW_NUMBER and FILE_LAST_MODIFIED (TIMESTAMP_NTZ)." },
    { kind:"single", text:"Which URL type is a simple HTTPS URL for browser access with a configurable expiry?", options:[
      {t:"Pre-signed URL", c:true},{t:"Scoped URL", c:false},{t:"File URL", c:false},{t:"Stage URL", c:false} ],
      explanation:"A pre-signed URL uses a pre-signed access token with a configurable expiration time." },
    { kind:"single", text:"Which URL type requires the role to have sufficient privileges on the stage?", options:[
      {t:"File URL", c:true},{t:"Pre-signed URL", c:false},{t:"Scoped URL", c:false},{t:"Public URL", c:false} ],
      explanation:"A file URL identifies database, schema, stage and path; a role with sufficient stage privileges can access it." },
    { kind:"single", text:"How are source UPDATEs represented in a stream?", options:[
      {t:"As a pair of DELETE and INSERT records with METADATA$ISUPDATE = TRUE", c:true},
      {t:"As a single UPDATE record", c:false},
      {t:"They are not captured", c:false},
      {t:"As an INSERT only", c:false} ],
      explanation:"METADATA$ACTION is INSERT or DELETE; updates appear as a DELETE/INSERT pair flagged by METADATA$ISUPDATE." },
    { kind:"single", text:"What does METADATA$ROW_ID specify in a stream?", options:[
      {t:"The unique immutable ID for the row", c:true},
      {t:"The row number in the staged file", c:false},
      {t:"The micro-partition ID", c:false},
      {t:"The transaction ID", c:false} ],
      explanation:"METADATA$ROW_ID is the unique immutable ID for the row." },
    { kind:"single", text:"What does this SAMPLE clause do?", code:"SELECT * FROM testtable SAMPLE (10);", options:[
      {t:"Every row has a 10% probability of being selected (fraction-based)", c:true},
      {t:"Returns exactly 10 rows", c:false},
      {t:"Returns the first 10 rows", c:false},
      {t:"Returns 10 micro-partitions", c:false} ],
      explanation:"Fraction-based sampling gives each row a 10% probability of selection." },
    { kind:"single", text:"What does adding SEED (123) to a SAMPLE clause achieve?", code:"SELECT * FROM testtable SAMPLE (10) SEED (123);", options:[
      {t:"The results become deterministic and repeatable", c:true},
      {t:"It selects 123 rows", c:false},
      {t:"It sets the sample percentage to 123", c:false},
      {t:"It makes sampling faster", c:false} ],
      explanation:"SEED makes the sample deterministic; note that fixed-size sampling does not support SEED." },
    { kind:"single", text:"What is true of fixed-size sampling?", code:"SELECT * FROM testtable SAMPLE (100 ROWS);", options:[
      {t:"Each row has a MIN(1, 100/n) probability and SEED is not supported", c:true},
      {t:"It always returns exactly 100 rows and supports SEED", c:false},
      {t:"It samples 100% of rows", c:false},
      {t:"It is identical to fraction-based sampling", c:false} ],
      explanation:"Fixed-size sampling gives each row a MIN(1, 100/n) probability and does not support SEED." },
    { kind:"multi", choose:2, text:"Which statements describe a stored procedure rather than a UDF? Choose two.", options:[
      {t:"Can be called independently", c:true},
      {t:"Can perform DDL and DML", c:true},
      {t:"Is called within a SELECT statement", c:false},
      {t:"Always returns a value", c:false} ],
      explanation:"Stored procedures are called independently, run multiple statements and can do DDL/DML, with an optional return value." },
    { kind:"multi", choose:2, text:"Which statements describe a UDF rather than a stored procedure? Choose two.", options:[
      {t:"Called within a SELECT statement", c:true},
      {t:"Always returns a value", c:true},
      {t:"Can run multiple statements", c:false},
      {t:"Can perform DDL and DML", c:false} ],
      explanation:"A UDF is called inside a SELECT, runs one calculation, accesses data only via simple queries and always returns a value." },
    { kind:"single", text:"Which syntax correctly extracts a nested JSON value and casts it?", code:"SELECT ??? AS city FROM json_table;", options:[
      {t:"json_data:address.city::varchar", c:true},
      {t:"json_data.address:city::varchar", c:false},
      {t:"json_data->address->city", c:false},
      {t:"json_data['address']['city']", c:false} ],
      explanation:"Use : between the variant name and the key, . to separate hierarchical values, and :: to cast." },
    { kind:"single", text:"In this query, what does ins.value refer to?", code:"SELECT ins.value:fname::varchar AS firstname\nFROM json_table jt,\n     LATERAL FLATTEN(input => jt.json_data:insured) ins;", options:[
      {t:"The value of each element in the insured array, one row per element", c:true},
      {t:"The whole json_data column", c:false},
      {t:"The array index", c:false},
      {t:"The key name", c:false} ],
      explanation:"LATERAL FLATTEN extracts the value for each array instance, giving one row per element." },
    { kind:"multi", choose:2, text:"What is NOT cloned when cloning a schema or database? Choose two.", options:[
      {t:"Internal named stages and pipes on internal stages", c:true},
      {t:"Time Travel history — it starts fresh at cloning time", c:true},
      {t:"Tables and their data references", c:false},
      {t:"Views", c:false} ],
      explanation:"Internal named stages and pipes on internal stages are not cloned, and Time Travel history starts at the clone point." },
    { kind:"single", text:"Which objects are excluded from Database Replication?", options:[
      {t:"Temporary, external and hybrid tables", c:true},
      {t:"Views and materialized views", c:false},
      {t:"Permanent tables", c:false},
      {t:"Stored procedures", c:false} ],
      explanation:"Database replication includes almost all database-resident objects except temporary, external and hybrid tables." },
    { kind:"single", text:"What does Share Replication include?", options:[
      {t:"Outbound shares, including permissions", c:true},
      {t:"Inbound shares only", c:false},
      {t:"Only the share name", c:false},
      {t:"Consumer accounts", c:false} ],
      explanation:"Share replication covers outbound shares including their permissions." },
    { kind:"multi", choose:3, text:"Which actions are NOT possible for a consumer on a shared database? Choose three.", options:[
      {t:"Updating data", c:true},
      {t:"Cloning", c:true},
      {t:"Sharing onwards", c:true},
      {t:"Running SELECT queries", c:false} ],
      explanation:"Consumers cannot update data, create objects, clone, share onwards, use Time Travel or replicate — but they can query." },
    { kind:"single", text:"Can a consumer use Time Travel on a shared database?", options:[
      {t:"No — Time Travel is a general limitation for shared databases", c:true},
      {t:"Yes, up to 1 day", c:false},
      {t:"Yes, up to 90 days on Enterprise", c:false},
      {t:"Only with a reader account", c:false} ],
      explanation:"Time Travel is one of the general limitations for shared databases." },
    { kind:"single", text:"Which replication features do non-Business-Critical accounts support?", options:[
      {t:"Database Replication, Share Replication and Replication Groups", c:true},
      {t:"Failover and failback", c:false},
      {t:"Client Redirect", c:false},
      {t:"Account object replication", c:false} ],
      explanation:"Non-BC accounts support database replication, share replication and replication groups only." }
  ]
};

[numbers, reference].forEach(function (quiz) {
  if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
    window.QUIZZES.push(quiz);
  }
});
})();
