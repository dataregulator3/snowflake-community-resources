window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "scenario-d1",
  order: 301,
  group: "More challenging scenario-based questions (with code snippets)",
  kicker: "Scenario · Domain 1",
  title: "Features & Architecture",
  topic: "Layers, editions, warehouses, micro-partitions, caching, cloning, sharing, pricing and serverless. 50 questions.",
  questions: [
    { kind:"single", text:"How many independently scalable architecture layers does Snowflake consist of?", options:[
      {t:"2 (Storage + Compute)", c:false},
      {t:"3 (Storage, Compute/Query Processing, Cloud Services)", c:true},
      {t:"4 (Storage, Compute, Metadata, UI)", c:false},
      {t:"1 (shared-everything)", c:false} ],
      explanation:"Snowflake has three layers: Storage, Query Processing (Compute) and Cloud Services." },
    { kind:"single", text:"Which layer manages authentication, metadata, query optimization and transactions?", options:[
      {t:"Storage Layer", c:false},{t:"Query Processing Layer", c:false},{t:"Cloud Services Layer", c:true},{t:"Virtual Warehouse Layer", c:false} ],
      explanation:"The Cloud Services layer coordinates authentication, metadata, optimization and transactions." },
    { kind:"multi", choose:2, text:"Which statements about Snowflake's storage layer are correct?", options:[
      {t:"Data is stored in compressed, immutable micro-partitions.", c:true},
      {t:"The customer chooses the physical storage format of the micro-partitions.", c:false},
      {t:"Storage is billed separately from compute.", c:true},
      {t:"Data is stored in raw (uncompressed) form.", c:false} ],
      explanation:"Micro-partitions are compressed and immutable; storage is billed separately. Customers do not control the format." },
    { kind:"single", text:"Which Snowflake edition is the minimum requirement for multi-cluster warehouses?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"Virtual Private Snowflake (VPS)", c:false} ],
      explanation:"Multi-cluster warehouses require at least Enterprise Edition." },
    { kind:"single", text:"A customer needs HIPAA and PCI compliance plus Tri-Secret Secure. Which minimum edition is required?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:false},{t:"Business Critical", c:true},{t:"On-Demand", c:false} ],
      explanation:"Tri-Secret Secure, HIPAA and PCI require Business Critical." },
    { kind:"single", text:"What best describes a virtual warehouse in Snowflake?", options:[
      {t:"A database for storing data", c:false},
      {t:"A cluster of compute resources for query execution and DML", c:true},
      {t:"A storage area for metadata", c:false},
      {t:"A cache for query results", c:false} ],
      explanation:"A virtual warehouse is a compute cluster that executes queries and DML." },
    { kind:"multi", choose:2, text:"Which two effects does resizing a warehouse from SMALL to LARGE have?", code:"ALTER WAREHOUSE my_wh SET WAREHOUSE_SIZE = 'LARGE';", options:[
      {t:"The number of servers per cluster increases.", c:true},
      {t:"More concurrent queries can be queued without adding compute.", c:false},
      {t:"Individual complex queries usually run faster.", c:true},
      {t:"The storage price per TB decreases.", c:false} ],
      explanation:"Bigger = more servers per cluster → faster single queries. Concurrency scaling is handled by multi-cluster, not by size." },
    { kind:"single", text:"A multi-cluster warehouse in AUTO-SCALE mode with MIN_CLUSTER_COUNT=1 and MAX_CLUSTER_COUNT=5 primarily reacts to what?", code:"CREATE WAREHOUSE wh\n  WAREHOUSE_SIZE = 'MEDIUM'\n  MIN_CLUSTER_COUNT = 1\n  MAX_CLUSTER_COUNT = 5\n  SCALING_POLICY = 'STANDARD';", options:[
      {t:"The complexity of individual queries", c:false},
      {t:"Increasing concurrency (simultaneous users/queries)", c:true},
      {t:"The volume of data in storage", c:false},
      {t:"The number of databases", c:false} ],
      explanation:"Auto-scale (multi-cluster) responds to concurrency, not query complexity." },
    { kind:"single", text:"What is the typical default value for AUTO_SUSPEND on a warehouse created through the UI?", options:[
      {t:"60 seconds", c:false},{t:"300 seconds", c:false},{t:"600 seconds", c:true},{t:"Never (auto-suspend disabled)", c:false} ],
      explanation:"The UI default is commonly 600 s (10 min); creating via SQL may differ." },
    { kind:"single", text:"What happens to a warehouse's local SSD cache on suspend/resume?", options:[
      {t:"It is fully preserved.", c:false},
      {t:"It is dropped on suspend and must be rebuilt on resume.", c:true},
      {t:"It is persisted into the storage layer.", c:false},
      {t:"It is moved into the cloud services cache.", c:false} ],
      explanation:"The SSD cache is discarded when the warehouse suspends." },
    { kind:"multi", choose:2, text:"Which of the following objects are account-level in Snowflake (not schema-bound)?", options:[
      {t:"Warehouse", c:true},{t:"Table", c:false},{t:"Database", c:true},{t:"View", c:false} ],
      explanation:"Warehouses and databases are account-level; tables and views live inside schemas." },
    { kind:"single", text:"Which object hierarchy path is correct?", options:[
      {t:"Account → Schema → Database → Table", c:false},
      {t:"Account → Database → Schema → Table", c:true},
      {t:"Database → Account → Schema → Table", c:false},
      {t:"Schema → Database → Account → Table", c:false} ],
      explanation:"Account → Database → Schema → Table." },
    { kind:"single", text:"A micro-partition typically holds how much data?", options:[
      {t:"500 KB – 1 MB", c:false},
      {t:"50 MB – 500 MB compressed", c:false},
      {t:"50 MB – 500 MB uncompressed (≈16 MB compressed as a rule of thumb)", c:true},
      {t:"Exactly 100 MB", c:false} ],
      explanation:"50–500 MB uncompressed (roughly 16 MB compressed)." },
    { kind:"single", text:"Which metadata does Snowflake keep per micro-partition to enable pruning?", options:[
      {t:"Only the row count", c:false},
      {t:"Min/max values per column, number of distinct values, NULL counts and more", c:true},
      {t:"Only the file name", c:false},
      {t:"A full copy of the column content", c:false} ],
      explanation:"Per micro-partition: min/max, distinct counts, NULL counts etc. — the basis for pruning." },
    { kind:"single", text:"Which Snowflake feature instantly creates a writable copy of a table without physically copying data?", options:[
      {t:"Time Travel", c:false},{t:"Zero-copy cloning", c:true},{t:"Secure Data Sharing", c:false},{t:"Materialized view", c:false} ],
      explanation:"Zero-copy cloning creates an immediately writable copy with no data copy." },
    { kind:"single", text:"A user clones a database. What applies to storage immediately after cloning?", code:"CREATE DATABASE sales_dev CLONE sales_prod;", options:[
      {t:"Storage doubles immediately.", c:false},
      {t:"No additional storage cost at first; only changed/new micro-partitions incur cost.", c:true},
      {t:"Cloning requires Enterprise and doubles storage.", c:false},
      {t:"The clone shares compute with the original.", c:false} ],
      explanation:"No extra cost initially; only changes create new micro-partitions." },
    { kind:"multi", choose:2, text:"Which statements about Secure Data Sharing are correct?", options:[
      {t:"The consumer pays for the compute resources they use to query.", c:true},
      {t:"Physical copies of the data are transferred to the consumer.", c:false},
      {t:"Providers share access to readable objects via shares, with no data copy.", c:true},
      {t:"Data sharing only works within the same account.", c:false} ],
      explanation:"The consumer pays their own compute; a share grants access without copying." },
    { kind:"single", text:"A provider wants to share data with a consumer who does NOT have a Snowflake account. Which option is suitable?", options:[
      {t:"Direct share", c:false},{t:"Reader account", c:true},{t:"Database replication", c:false},{t:"External table", c:false} ],
      explanation:"Reader accounts serve consumers without their own Snowflake account." },
    { kind:"single", text:"What is the Snowflake Marketplace?", options:[
      {t:"A place to buy compute credits", c:false},
      {t:"A platform for discovering and obtaining third-party data/app products", c:true},
      {t:"A tool for managing warehouses", c:false},
      {t:"A storage pricing model", c:false} ],
      explanation:"The Marketplace is for discovering and accessing data and app products." },
    { kind:"single", text:"Which cloud platforms does Snowflake support as deployment options?", options:[
      {t:"AWS only", c:false},{t:"AWS and Azure", c:false},{t:"AWS, Azure and Google Cloud", c:true},{t:"AWS, Azure, GCP and Oracle Cloud", c:false} ],
      explanation:"AWS, Azure and GCP." },
    { kind:"single", text:"What is a \u201cregion\u201d in the Snowflake context?", options:[
      {t:"A logical group of databases", c:false},
      {t:"A geographic location of the underlying cloud platform where the account is hosted", c:true},
      {t:"A warehouse cluster", c:false},
      {t:"A role container", c:false} ],
      explanation:"A region is the geographic cloud location hosting the account." },
    { kind:"multi", choose:2, text:"Which caches does Snowflake use for acceleration?", options:[
      {t:"Result cache (cloud services)", c:true},
      {t:"Local disk cache (warehouse SSD)", c:true},
      {t:"The user's browser cache as a query accelerator", c:false},
      {t:"A per-table storage-layer query cache", c:false} ],
      explanation:"Result cache (cloud services) and local disk (SSD) cache." },
    { kind:"single", text:"How long does a result cache entry stay valid by default (unchanged data and same query)?", options:[
      {t:"1 hour", c:false},
      {t:"24 hours (extendable up to a maximum of 31 days on reuse)", c:true},
      {t:"7 days", c:false},
      {t:"Unlimited", c:false} ],
      explanation:"24 h, extended up to 31 days with continued reuse." },
    { kind:"single", text:"Which condition prevents use of the result cache?", options:[
      {t:"The identical query is run by a different user.", c:false},
      {t:"The underlying data has changed.", c:true},
      {t:"A different (active) warehouse is used.", c:false},
      {t:"The result has more than 10 rows.", c:false} ],
      explanation:"A data change invalidates the result cache; user and warehouse don't matter." },
    { kind:"single", text:"Which object type exists only for the duration of a session and is invisible to other sessions?", options:[
      {t:"Transient table", c:false},{t:"Temporary table", c:true},{t:"Permanent table", c:false},{t:"External table", c:false} ],
      explanation:"A temporary table exists only in the current session." },
    { kind:"multi", choose:2, text:"Which statements about transient tables are correct?", options:[
      {t:"They have NO Fail-safe.", c:true},
      {t:"They support up to 90 days of Time Travel like permanent tables on Enterprise.", c:false},
      {t:"Time Travel is limited to a maximum of 1 day.", c:true},
      {t:"They are unsuitable for short-lived data.", c:false} ],
      explanation:"Transient = no Fail-safe and max 1 day Time Travel, which lowers storage cost." },
    { kind:"single", text:"What is the main difference between a transient and a temporary table?", options:[
      {t:"Transient tables are session-bound, temporary are not.", c:false},
      {t:"Temporary tables exist only in the current session; transient tables persist across sessions.", c:true},
      {t:"There is no difference.", c:false},
      {t:"Transient tables have Fail-safe, temporary do not.", c:false} ],
      explanation:"Temporary = session-local; transient = persistent across sessions but without Fail-safe." },
    { kind:"single", text:"Which view is recomputed on every query and stores no results persistently?", options:[
      {t:"Materialized view", c:false},{t:"Standard (non-materialized) view", c:true},{t:"Secure view", c:false},{t:"External table", c:false} ],
      explanation:"A standard view is recomputed on each query." },
    { kind:"single", text:"From which edition are materialized views available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All editions", c:false} ],
      explanation:"Materialized views require Enterprise or higher." },
    { kind:"multi", choose:2, text:"Which statements about materialized views apply?", options:[
      {t:"Snowflake refreshes them automatically in the background when data changes.", c:true},
      {t:"They incur additional storage and serverless compute costs.", c:true},
      {t:"They can contain arbitrary JOINs across many tables.", c:false},
      {t:"They are only refreshed manually via REFRESH.", c:false} ],
      explanation:"Auto-refresh in the background plus extra storage/compute cost; restrictions include no multi-table JOINs." },
    { kind:"single", text:"Which role has the highest system privileges for account administration by default?", options:[
      {t:"SYSADMIN", c:false},{t:"SECURITYADMIN", c:false},{t:"ACCOUNTADMIN", c:true},{t:"PUBLIC", c:false} ],
      explanation:"ACCOUNTADMIN holds the highest account privileges." },
    { kind:"single", text:"Which role is automatically assigned to every user and role and acts as the \u201clowest\u201d role?", options:[
      {t:"PUBLIC", c:true},{t:"USERADMIN", c:false},{t:"SYSADMIN", c:false},{t:"ORGADMIN", c:false} ],
      explanation:"PUBLIC is granted to everyone automatically." },
    { kind:"single", text:"Which role is used to manage organizations and multiple accounts?", options:[
      {t:"ACCOUNTADMIN", c:false},{t:"ORGADMIN", c:true},{t:"SYSADMIN", c:false},{t:"SECURITYADMIN", c:false} ],
      explanation:"ORGADMIN manages the organization and its accounts." },
    { kind:"single", text:"What is Snowsight?", options:[
      {t:"A command-line client", c:false},
      {t:"Snowflake's modern web interface for queries, dashboards and administration", c:true},
      {t:"A third-party ETL tool", c:false},
      {t:"A storage tier", c:false} ],
      explanation:"Snowsight is the modern web UI." },
    { kind:"single", text:"Which client is used for script/command-line based access?", options:[
      {t:"SnowSQL", c:true},{t:"Snowsight", c:false},{t:"Snowpipe", c:false},{t:"SnowCD", c:false} ],
      explanation:"SnowSQL is the CLI client." },
    { kind:"single", text:"What is SnowCD?", options:[
      {t:"A connectivity diagnostic tool", c:true},
      {t:"A change data capture feature", c:false},
      {t:"A clustering service", c:false},
      {t:"A cloud deployment model", c:false} ],
      explanation:"SnowCD is the Connectivity Diagnostic tool." },
    { kind:"multi", choose:2, text:"Which statements about Snowpark are correct?", options:[
      {t:"It allows development in Python, Java and Scala against Snowflake data.", c:true},
      {t:"It can only be used for SQL.", c:false},
      {t:"DataFrame operations are pushed down to Snowflake as SQL for execution.", c:true},
      {t:"It strictly requires an external Spark installation.", c:false} ],
      explanation:"Snowpark: Python/Java/Scala; DataFrame ops are pushed down as SQL." },
    { kind:"single", text:"Which pricing model generally applies to Snowflake compute?", options:[
      {t:"A fixed monthly price per warehouse", c:false},
      {t:"Consumption-based via credits, depending on warehouse size and runtime (per second, 60 s minimum)", c:true},
      {t:"A flat fee per query", c:false},
      {t:"Per user per month", c:false} ],
      explanation:"Consumption-based via credits, per second with a 60-second minimum." },
    { kind:"single", text:"Which resource is NOT billed via credits but by the space it occupies?", options:[
      {t:"Virtual warehouse compute", c:false},
      {t:"Storage (compressed, per TB/month)", c:true},
      {t:"Serverless features", c:false},
      {t:"Cloud services above the 10% allowance", c:false} ],
      explanation:"Storage is billed per TB/month on the compressed size." },
    { kind:"single", text:"Cloud services compute is free up to what share of daily compute consumption?", options:[
      {t:"5%", c:false},{t:"10%", c:true},{t:"20%", c:false},{t:"0% (always billed)", c:false} ],
      explanation:"Cloud services are free up to 10% of daily compute." },
    { kind:"single", text:"Which feature automatically redistributes data according to a defined cluster key for large tables?", options:[
      {t:"Automatic Clustering", c:true},{t:"Search Optimization Service", c:false},{t:"Query Acceleration Service", c:false},{t:"Materialized views", c:false} ],
      explanation:"Automatic Clustering reorganizes data by the cluster key." },
    { kind:"single", text:"Which service specifically accelerates selective point lookups on large tables?", options:[
      {t:"Search Optimization Service", c:true},{t:"Automatic Clustering", c:false},{t:"Result cache", c:false},{t:"Multi-cluster warehouse", c:false} ],
      explanation:"Search Optimization Service targets selective point lookups." },
    { kind:"single", text:"Which service can accelerate individual outlier, scan-heavy queries by adding serverless resources?", options:[
      {t:"Query Acceleration Service (QAS)", c:true},{t:"Search Optimization Service", c:false},{t:"Automatic Clustering", c:false},{t:"Snowpipe", c:false} ],
      explanation:"QAS handles scan-intensive outlier queries." },
    { kind:"single", text:"What is an essential characteristic of \u201cserverless\u201d features in Snowflake?", options:[
      {t:"They run on a user-managed warehouse.", c:false},
      {t:"Snowflake provides and manages the compute automatically; you are billed for actual consumption.", c:true},
      {t:"They are free.", c:false},
      {t:"They only work with VPS.", c:false} ],
      explanation:"Serverless: Snowflake manages compute, billing follows consumption." },
    { kind:"multi", choose:2, text:"Which of the following count as Snowflake serverless features?", options:[
      {t:"Snowpipe", c:true},
      {t:"Standard query execution on a user warehouse", c:false},
      {t:"Automatic Clustering / materialized view maintenance", c:true},
      {t:"SnowSQL", c:false} ],
      explanation:"Snowpipe and Automatic Clustering/MV maintenance are serverless." },
    { kind:"single", text:"What describes an external table?", options:[
      {t:"A table whose data physically resides in Snowflake", c:false},
      {t:"A table that stores metadata about data in an external stage (e.g. S3) and makes it queryable", c:true},
      {t:"A table that only exists in a reader account", c:false},
      {t:"A temporary table", c:false} ],
      explanation:"An external table exposes external data via metadata, queryable in place." },
    { kind:"single", text:"A customer in an AWS region wants disaster recovery in a second region/cloud. Which feature primarily addresses this?", options:[
      {t:"Zero-copy cloning", c:false},
      {t:"Database replication & failover/failback", c:true},
      {t:"Time Travel", c:false},
      {t:"Result cache", c:false} ],
      explanation:"Database replication with failover/failback is the DR feature." },
    { kind:"single", text:"Which statement about Snowflake's handling of semi-structured data is correct?", options:[
      {t:"JSON/Avro/Parquet cannot be stored.", c:false},
      {t:"The VARIANT data type can natively hold and query semi-structured data.", c:true},
      {t:"Semi-structured data must be converted to CSV before loading.", c:false},
      {t:"Only XML is supported.", c:false} ],
      explanation:"VARIANT natively holds semi-structured data." },
    { kind:"single", text:"A warehouse is suspended. A new query is issued and fully hits the result cache. What happens?", options:[
      {t:"The warehouse must be started.", c:false},
      {t:"The result can be served from the result cache (cloud services) without starting the warehouse.", c:true},
      {t:"The query fails because no compute is active.", c:false},
      {t:"A new warehouse is created automatically.", c:false} ],
      explanation:"A full result-cache hit needs no active warehouse." },
    { kind:"multi", choose:2, text:"Which statements about the separation of storage and compute are correct?", options:[
      {t:"Multiple warehouses can access the same data simultaneously without blocking each other.", c:true},
      {t:"Compute scales independently of storage.", c:true},
      {t:"Each warehouse needs its own copy of the data.", c:false},
      {t:"Storage must grow when compute is scaled.", c:false} ],
      explanation:"Independent scaling; many warehouses on the same data with no contention." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
