window.QUIZZES = window.QUIZZES || [];
(function () {
var quizzes = [
    { id:"practice-1", order:101, group:"Practice Quizzes", kicker:"Quiz 1", title: "Architecture & Warehouses", topic: "Micro-partitions, architecture layers, virtual warehouses and editions.", questions: [
      { kind:"multi", choose:2, text:"Select two (2) characteristics of micro-partitions.", options:[
        {t:"Column data is stored together.", c:true},
        {t:"There is one micro-partition per table.", c:false},
        {t:"Micro-partition data is uncompressed.", c:false},
        {t:"The size of a micro-partition cannot be changed.", c:true},
        {t:"Micro-partitions are updated when data changes.", c:false} ],
        explanation:"Column data is stored together within a micro-partition, and once created a micro-partition's size cannot be changed." },
      { kind:"single", text:"Which layer of Snowflake's architecture is responsible for query optimization and metadata management?", options:[
        {t:"Snowgrid", c:false},{t:"Storage", c:false},{t:"Cloud Services", c:true},{t:"Compute", c:false} ],
        explanation:"The Cloud Services layer handles query optimization, metadata management, authentication and access control." },
      { kind:"single", text:"If there was a requirement to provide an additional seven days of disaster recovery of historical data by Snowflake beyond the Time Travel period, which types of table(s) would provide this ability?", options:[
        {t:"External and permanent", c:false},{t:"Just permanent", c:true},{t:"Permanent and transient tables", c:false},{t:"Transient and temporary", c:false},{t:"Permanent, transient, and temporary", c:false} ],
        explanation:"Fail-safe protects only permanent tables, giving an extra 7 days of historical data recovery beyond Time Travel." },
      { kind:"match", text:"Match the Snowflake capability with the minimum Snowflake edition that supports the capability.", leftItems:[
        {l:"Dynamic Data Masking", r:"Enterprise"},
        {l:"Data Sharing", r:"Standard"},
        {l:"HIPAA support", r:"Business Critical"},
        {l:"Single-tenant solution", r:"Virtual Private Snowflake"} ],
        explanation:"Dynamic Data Masking → Enterprise, Data Sharing → Standard, HIPAA support → Business Critical, Single-tenant solution → Virtual Private Snowflake." },
      { kind:"single", text:"You have a large query that is running more slowly than you would like, so you decide to manually resize the virtual warehouse while it is running. What is the impact of this action?", options:[
        {t:"All queries running on that virtual warehouse that are less than 50% complete will be restarted to take advantage of the larger size.", c:false},
        {t:"No impact; you cannot resize a virtual warehouse while it is running.", c:false},
        {t:"All queries running on that virtual warehouse will be restarted to take advantage of the larger size.", c:false},
        {t:"Currently running queries will continue to run on the old size, but new queries that come in will run at the new size.", c:true} ],
        explanation:"Currently running queries finish at the original size; only new queries use the new size." },
      { kind:"multi", choose:2, text:"Which are true of multi-cluster virtual warehouses? Choose two.", options:[
        {t:"They are useful for improving concurrency for users and queries that may be queuing.", c:true},
        {t:"They are useful for improving the performance of slow-running queries and data loading.", c:false},
        {t:"Can be auto-scaled to automatically start and stop clusters within the virtual warehouse as needed without manual intervention.", c:true},
        {t:"If your query load increases to the point where resources are overloaded, you must manually increase the virtual warehouse size and then manually downsize or suspend the virtual warehouse when the resources are no longer needed.", c:false} ],
        explanation:"Multi-cluster warehouses improve concurrency and can auto-scale clusters without manual intervention." },
      { kind:"multi", choose:2, text:"Which groups of SQL statements will run successfully in Snowsight? Choose two.", options:[
        {t:"CREATE LOGFILE GROUP, ALTER LOGFILE GROUP and DROP LOGFILE GROUP", c:false},
        {t:"CREATE SERVER, ALTER SERVER, and DROP SERVER", c:false},
        {t:"CREATE TABLESPACE, ALTER TABLESPACE and DROP TABLESPACE", c:false},
        {t:"CREATE WAREHOUSE, ALTER WAREHOUSE and DROP WAREHOUSE", c:true},
        {t:"CREATE USER, ALTER USER and DROP USER", c:true} ],
        explanation:"Warehouses and Users are Snowflake objects; the other statements reference objects Snowflake doesn't have." },
      { kind:"multi", choose:3, text:"Virtual warehouses provide which capabilities in a Snowflake session? Choose three.", options:[
        {t:"User authentication", c:false},
        {t:"Retrieving rows from tables and views", c:true},
        {t:"Managing metadata", c:false},
        {t:"Parsing and optimizing queries", c:false},
        {t:"Performing DML operations such as DELETE, INSERT, and UPDATE", c:true},
        {t:"Loading and unloading data to and from tables (COPY INTO)", c:true} ],
        explanation:"Warehouses retrieve rows, perform DML, and load/unload data; authentication, metadata and query parsing belong to Cloud Services." },
      { kind:"multi", choose:3, text:"Snowflake CLI can be installed on which operating systems? Choose three.", options:[
        {t:"Linux", c:true},{t:"Microsoft Windows", c:true},{t:"macOS", c:true},{t:"Android OS", c:false},{t:"Solaris", c:false} ],
        explanation:"The Snowflake CLI is supported on Linux, macOS and Microsoft Windows." },
      { kind:"single", text:"Which use case would be appropriate for a multi-cluster virtual warehouse?", options:[
        {t:"There are many concurrent queries running on that virtual warehouse.", c:true},
        {t:"Users are running very large, complex queries on that virtual warehouse.", c:false},
        {t:"There is a single, very large, query that will process an unpredictable amount of data.", c:false},
        {t:"There are users from different roles accessing the same virtual warehouse.", c:false} ],
        explanation:"Multi-cluster warehouses are designed for high-concurrency workloads." }
    ]},

    { id:"practice-2", order:102, group:"Practice Quizzes", kicker:"Quiz 2", title: "Security & Access Control", topic: "ACCOUNT_USAGE, roles & grants, resource monitors and network policies.", questions: [
      { kind:"single", text:"What is the maximum data retention period for the ACCOUNT_USAGE schema?", options:[
        {t:"90 days", c:false},{t:"14 days", c:false},{t:"1 year", c:true},{t:"7 days", c:false} ],
        explanation:"The ACCOUNT_USAGE schema retains data for up to 1 year." },
      { kind:"single", text:"USER_A claims their account is locked out. You want to review recent authentication attempts using USER_A. Where would you look?", options:[
        {t:"SELECT * FROM INFORMATION_SCHEMA.LOGIN_HISTORY", c:false},
        {t:"SELECT * FROM SNOWFLAKE.LOGGING.LOGIN_HISTORY", c:false},
        {t:"Download the logs using the SnowSQL CLI command GET /var/log/messages", c:false},
        {t:"SELECT * FROM V$LOG", c:false},
        {t:"SELECT * FROM SNOWFLAKE.ACCOUNT_USAGE.LOGIN_HISTORY", c:true} ],
        explanation:"LOGIN_HISTORY is available as a view in SNOWFLAKE.ACCOUNT_USAGE." },
      { kind:"multi", choose:3, text:"You create a new role, ACCT. You want ACCT to be able to read from a table, TABLE_A, found in SCHEMA_B in DATABASE_C. Which steps do you need to perform at a minimum, following best practices? Choose three.", options:[
        {t:"GRANT SELECT ON TABLE DATABASE_C.SCHEMA_B.TABLE_A TO PUBLIC;", c:false},
        {t:"GRANT USAGE ON DATABASE_C TO ROLE ACCT;", c:true},
        {t:"GRANT USAGE ON SCHEMA_B TO ROLE ACCT;", c:true},
        {t:"GRANT SELECT ON TABLE DATABASE_C.SCHEMA_B.TABLE_A TO ROLE ACCT;", c:true},
        {t:"GRANT SELECT, USAGE ON TABLE DATABASE_C.SCHEMA_B.TABLE_A TO ROLE ACCT;", c:false} ],
        explanation:"The role needs USAGE on the database and the schema, plus SELECT on the table. You cannot grant USAGE on a table." },
      { kind:"single", text:"You have a resource monitor at the account level, set to 2500 credits per month. You also have warehouse-level group monitors for engineering, finance, and research - each set to 1500 credits. All of these monitors are set to suspend immediately at 100% of quota. Some virtual warehouses are not covered by a warehouse-level monitor.\n\nWhen the account level hits 2500 credits, the group monitors have consumed: Engineering 200, Finance 800, Research 1500 credits. What occurs at this point?", options:[
        {t:"All virtual warehouses in the account that are not covered by a warehouse-level monitor will suspend immediately.", c:false},
        {t:"Any virtual warehouse in the account that has a warehouse-level monitor also set will suspend immediately.", c:false},
        {t:"All virtual warehouses in the account will suspend immediately, whether or not they are covered by a warehouse-level monitor.", c:true},
        {t:"The virtual warehouses in the Research group will suspend immediately; the other virtual warehouses will continue to run until they meet their quotas.", c:false} ],
        explanation:"When an account-level monitor reaches its quota, all warehouses in the account suspend immediately." },
      { kind:"single", text:"You want to block certain IP addresses from establishing a connection to your Snowflake account. Which mechanism would you use?", options:[
        {t:"Create a network policy and attach to the account", c:true},
        {t:"Snowflake does not support blocking by IP addresses", c:false},
        {t:"Create a firewall policy and attach to every user in the account", c:false},
        {t:"Create a network policy and attach to every user in the account", c:false},
        {t:"Create a firewall policy and attach to the account", c:false} ],
        explanation:"Network policies define allowed/denied IP ranges; attach to the account to limit connections for the whole account." },
      { kind:"multi", choose:3, text:"You perform the following commands (see below). After all the commands have run, which statements are true? Choose three.", code:"CREATE USER USER_Z;\nCREATE ROLE ROLE_A;\nCREATE ROLE ROLE_B;\nGRANT ROLE ROLE_B TO ROLE ROLE_A;\nGRANT ROLE ROLE_A TO USER USER_Z;", options:[
        {t:"USER_Z can use ROLE_B", c:true},
        {t:"When USER_Z uses ROLE_B, the session will have all the privileges granted to ROLE_B and ROLE_A", c:false},
        {t:"USER_Z can use ROLE_A", c:true},
        {t:"USER_Z cannot use the PUBLIC role", c:false},
        {t:"When USER_Z uses ROLE_A, the session will have all the privileges granted to ROLE_A and ROLE_B", c:true} ],
        explanation:"USER_Z is granted ROLE_A and inherits ROLE_B (a child of ROLE_A). All users implicitly have PUBLIC." }
    ]},

    { id:"practice-3", order:103, group:"Practice Quizzes", kicker:"Quiz 3", title: "Data Loading & Stages", topic: "COPY INTO, Snowpipe, streams, file formats, stages and storage integrations.", questions: [
      { kind:"multi", choose:2, text:"Which are differences between using COPY INTO for batch loading and using a COPY INTO statement when creating a PIPE? Choose two.", options:[
        {t:"COPY INTO uses multiple transactions for a single load, whereas Snowpipe will always be a single transaction.", c:false},
        {t:"The load history metadata retention period for COPY INTO is the same for both batch loading and Snowpipe.", c:false},
        {t:"CREATE PIPE does not support all of the options that are available for COPY INTO.", c:true},
        {t:"When Snowpipe is invoked with REST, it requires key-pair authentication. COPY INTO relies on security options supported by the client.", c:true} ],
        explanation:"CREATE PIPE doesn't support all COPY INTO options; Snowpipe invoked via REST requires key-pair auth. Load-history retention differs (14 vs 64 days)." },
      { kind:"multi", choose:2, text:"Which are recommendations for loading data using COPY INTO? Choose two.", options:[
        {t:"When loading VARIANT data, each record (row) is limited to 32 MB (compressed).", c:false},
        {t:"The recommended file size is 100-250 MB of compressed data.", c:true},
        {t:"Data should be uncompressed prior to loading.", c:false},
        {t:"A Medium virtual warehouse is the best size to use for batch data loading.", c:false},
        {t:"If loading a single, very large file, Snowflake recommends breaking it up into several smaller files.", c:true} ],
        explanation:"Recommended file size is 100–250 MB compressed; split very large single files into smaller ones for parallelism." },
      { kind:"single", text:"You execute a COPY INTO but there are some corrupted records in the input data. What will happen by default?", options:[
        {t:"Erroneous data is replaced with NULLs and the COPY INTO command completes successfully.", c:false},
        {t:"Erroneous records are ignored, the COPY INTO completes, and the errors can be reviewed and handled after.", c:false},
        {t:"The COPY INTO command tolerates a default of 10 errors before giving up.", c:false},
        {t:"The COPY INTO command stops immediately and performs a rollback of all changes, as if the command was never executed.", c:true} ],
        explanation:"By default COPY INTO stops and rolls back all changes on error." },
      { kind:"multi", choose:3, text:"When unloading data, which are valid file formats to use? Choose three.", options:[
        {t:"Avro", c:false},{t:"ORC", c:false},{t:"CSV", c:true},{t:"JSON", c:true},{t:"Parquet", c:true} ],
        explanation:"Only CSV (delimited), JSON and Parquet are supported for unloading data." },
      { kind:"single", text:"What does a Stream in Snowflake track?", options:[
        {t:"File uploads to stages", c:false},{t:"User login events", c:false},{t:"Query execution history", c:false},{t:"DML changes to a table", c:true} ],
        explanation:"Streams provide Change Data Capture by tracking DML changes (INSERT/UPDATE/DELETE)." },
      { kind:"single", text:"You are unloading data out of a table, and walk away while the unload job is processing. When you come back, which of these Snowflake tools can you use to determine whether the job succeeded or failed?", options:[
        {t:"The table function VALIDATE", c:false},
        {t:"The COPY INTO option VALIDATION_MODE", c:false},
        {t:"The Snowflake web interface page Monitoring > Query History", c:true},
        {t:"The view SNOWFLAKE.ACCOUNT_USAGE.COPY_HISTORY", c:false} ],
        explanation:"Query History works for unload jobs; the other options only apply to load operations." },
      { kind:"single", text:"For Snowpipe continuous loading, a virtual warehouse is required.", options:[
        {t:"False", c:true},{t:"True", c:false} ],
        explanation:"Snowpipe is serverless and uses Snowflake-managed compute, not a user-managed virtual warehouse." },
      { kind:"multi", choose:2, text:"Which statements are true of external stages? Choose two.", options:[
        {t:"External stages are created with the CREATE STAGE command.", c:true},
        {t:"External stages store data files.", c:false},
        {t:"You can use the PUT command to put files onto an external stage.", c:false},
        {t:"An external stage is available only to the role that created it.", c:false},
        {t:"A Snowflake account hosted on AWS can access an external stage created on Microsoft Azure.", c:true} ],
        explanation:"External stages are created with CREATE STAGE and just store a URL/metadata; they can point to any supported cloud regardless of the account's cloud. PUT targets internal stages only." },
      { kind:"single", text:"What is the purpose of a Storage Integration in Snowflake?", options:[
        {t:"To compress files before loading", c:false},
        {t:"To encrypt data in transit", c:false},
        {t:"To schedule data loading jobs", c:false},
        {t:"To provide secure, credential-free access to cloud storage", c:true} ],
        explanation:"Storage integrations use cloud IAM roles instead of storing credentials in stage definitions." },
      { kind:"single", text:"When performing a COPY INTO, what is the default file format?", options:[
        {t:"The format configured globally for the account", c:false},{t:"JSON", c:false},{t:"AVRO", c:false},{t:"CSV", c:true},{t:"Parquet", c:false} ],
        explanation:"The default file format type when using COPY INTO is CSV." }
    ]},

    { id:"practice-4", order:104, group:"Practice Quizzes", kicker:"Quiz 4", title: "Performance & Semi-structured Data", topic: "Materialized views, Query Profile, VARIANT & FLATTEN, Query Acceleration and Search Optimization.", questions: [
      { kind:"multi", choose:2, text:"Which of these can be done with a materialized view? Choose two.", options:[
        {t:"Create a materialized view with an ORDER BY clause", c:false},
        {t:"Create a materialized view with a JOIN", c:false},
        {t:"Create two materialized views against a single base table", c:true},
        {t:"Create a materialized view that uses a window function", c:false},
        {t:"Create a materialized view with a cluster key", c:true} ],
        explanation:"You can create multiple materialized views on one base table and add a cluster key; JOINs, window functions and ORDER BY are not allowed." },
      { kind:"single", text:"What does the line above indicate?", code:"Percentage scanned from cache. 100%", options:[
        {t:"100% of the data needed for the query was already in the data cache.", c:true},
        {t:"The query returned almost immediately because 100% of the result came from the Query Result Cache.", c:false},
        {t:"The system scanned 100% of the data cache, but you need to look at the next line to determine how much of the data cache was used.", c:false},
        {t:"100% of the data needed for the query was found in the metadata cache.", c:false} ],
        explanation:"'Percentage scanned from cache' always refers to the data cache: how much of the needed data was served from it." },
      { kind:"single", text:"What would best describe the structure of what the function \"myfunction\" returns?", code:"CREATE FUNCTION myfunction()\nRETURNS TABLE(c VARCHAR, d INT)\nAS\n$$\n...\n$$;", options:[
        {t:"A table of rows, each row comprising two columns: VARCHAR and INT", c:true},
        {t:"It depends on what is found in the code represented by ...", c:false},
        {t:"An INT", c:false},
        {t:"A VARCHAR", c:false},
        {t:"A row of VARCHAR and INT", c:false} ],
        explanation:"RETURNS TABLE(c VARCHAR, d INT) means a table of rows, each with a VARCHAR column and an INT column." },
      { kind:"single", text:"What does the Query Acceleration Service help with?", options:[
        {t:"Compressing data faster", c:false},
        {t:"Caching query results longer than twenty four hours", c:false},
        {t:"Accelerating data loading", c:false},
        {t:"Offloading some query processing to shared compute", c:true} ],
        explanation:"Query Acceleration Service offloads portions of eligible queries (especially large scans) to shared compute." },
      { kind:"single", text:"What would require you to use a VARIANT column?", options:[
        {t:"To hold JSON", c:true},{t:"To hold a string", c:false},{t:"To hold a variable", c:false},{t:"To hold a timestamp", c:false} ],
        explanation:"JSON can be stored directly in a VARIANT column; strings and timestamps have dedicated data types." },
      { kind:"single", text:"You attempt to use the FLATTEN function to handle some JSON data in a table. You notice it only returns the top-level keys, but you need to \u201cdrill down\u201d through all the nested structures. How might you accomplish this?", options:[
        {t:"Use the NESTED feature of FLATTEN", c:false},
        {t:"Set the FLATTEN_NESTED parameter to TRUE", c:false},
        {t:"Use the RECURSIVE feature of FLATTEN", c:true},
        {t:"Set the FLATTEN_RECURSIVE parameter to TRUE", c:false} ],
        explanation:"FLATTEN supports RECURSIVE => TRUE to drill through nested structures; the other options don't exist." },
      { kind:"multi", choose:3, text:"You want to import semi-structured data from an external stage. A colleague asks what semi-structured file formats are supported by Snowflake. Which of the following would you include in your reply? Choose three.", options:[
        {t:"Parquet", c:true},{t:"ORC", c:true},{t:"Oracle Datapump Files", c:false},{t:"JSON", c:true},{t:"COBOL copybook", c:false} ],
        explanation:"Supported semi-structured file types are JSON, Avro, ORC, Parquet and XML." },
      { kind:"single", text:"Which Snowflake feature is best for queries with equality predicates and point lookups?", options:[
        {t:"Query Acceleration Service", c:false},{t:"Clustering Keys", c:false},{t:"Materialized Views", c:false},{t:"Search Optimization Service", c:true} ],
        explanation:"Search Optimization Service creates access paths optimized for equality predicates, IN lists, LIKE patterns and point lookups." },
      { kind:"single", text:"Which of the following, if found in the Query Profile, is most likely the primary cause of negative performance?", options:[
        {t:"Partitions Scanned is less than Partitions Total", c:false},
        {t:"Partitions Scanned is greater than Partitions Total", c:false},
        {t:"Spilling to local or remote disk", c:true},
        {t:"Percentage Scanned from Cache is 2.7%", c:false} ],
        explanation:"Spilling to local or remote disk indicates the query ran out of memory, which almost always hurts performance." },
      { kind:"single", text:"You want to access the list of files in an external stage as a table. What feature would allow this?", options:[
        {t:"Directory Views", c:false},{t:"External stage views", c:false},{t:"Directory Tables", c:true},{t:"Materialized stage views", c:false} ],
        explanation:"Directory tables represent stage metadata (including the file list) and are queryable like a table." }
    ]},

    { id:"practice-5", order:105, group:"Practice Quizzes", kicker:"Quiz 5", title: "Data Sharing & Collaboration", topic: "Data clean rooms, secure data sharing, cloning, Marketplace, reader accounts and Time Travel.", questions: [
      { kind:"single", text:"What is the purpose of a Data Clean Room?", options:[
        {t:"To clean and transform data before loading", c:false},
        {t:"To compress data for storage", c:false},
        {t:"To replicate data across regions", c:false},
        {t:"To allow collaborative analysis without exposing raw data", c:true} ],
        explanation:"Data Clean Rooms enable secure collaborative analysis where providers control what analyses consumers can perform." },
      { kind:"multi", choose:2, text:"You are providing a data share directly to the Snowflake account of another business cooperating in a joint venture. This joint venture is wrapping up in a few days and you need to ensure the other business no longer has access to the shared data. What possible steps can you take? Choose two.", options:[
        {t:"Ask the other account to unmount the share, then drop the share", c:false},
        {t:"Alter the share to remove the other account", c:true},
        {t:"Revoke privileges to the share", c:true},
        {t:"Alter the shared tables to remove the other account", c:false},
        {t:"You can\u2019t. Once the other account access the share, the data is fully copied to the other account", c:false} ],
        explanation:"Either remove the account from the share or revoke all privileges granted to the share; data is not copied to the consumer." },
      { kind:"single", text:"You clone a table with 50GB of data. After the cloning operation completes, how much space is used in total by both tables together?", options:[
        {t:"50 GB", c:true},{t:"150 GB", c:false},{t:"100 GB", c:false},{t:"0 GB", c:false} ],
        explanation:"Cloning shares the underlying micro-partitions, so a clone adds no meaningful storage \u2014 total stays about 50 GB." },
      { kind:"single", text:"Your analysts have asked for access to public map data to enrich their analyses. Where might you search for this data to see if it\u2019s readily available without needing to explicitly copy and load the data?", options:[
        {t:"Snowflake Geospatial Datasets", c:false},
        {t:"Snowflake Public Exchange", c:false},
        {t:"Snowflake Data Exchange", c:false},
        {t:"Snowflake Marketplace", c:true} ],
        explanation:"The Snowflake Marketplace is where public datasets published by other parties are found." },
      { kind:"single", text:"What is the primary benefit of Snowflake's Secure Data Sharing?", options:[
        {t:"Data is compressed for faster sharing", c:false},
        {t:"Data is replicated to consumer's account", c:false},
        {t:"Data is shared in real-time without copying or moving data", c:true},
        {t:"Data is automatically encrypted during transfer", c:false} ],
        explanation:"Secure Data Sharing shares data in real time without copying or moving it; data stays in the provider's account." },
      { kind:"single", text:"Three days ago, you accidentally performed some erroneous DML on a table in your Enterprise Edition Snowflake account. Assuming the table was created with the CREATE TABLE statement with everything else left on defaults, can you recover this data?", options:[
        {t:"No, because Time Travel is only one day by default. The data is lost.", c:false},
        {t:"Yes, because Tablespace retention is seven days by default.", c:false},
        {t:"Yes, but you will need to file a support request with Snowflake for recovery.", c:true},
        {t:"Yes, because Time Travel is 90 days by default in Enterprise.", c:false} ],
        explanation:"Time Travel defaults to 1 day; after that, micro-partitions move to Fail-safe (7 days), where recovery requires a Snowflake support request." },
      { kind:"single", text:"Who pays for the compute resources used by a Reader Account?", options:[
        {t:"The provider who created the reader account", c:true},
        {t:"Snowflake covers the cost", c:false},
        {t:"Costs are split between provider and consumer", c:false},
        {t:"The consumer using the reader account", c:false} ],
        explanation:"Reader accounts are created and funded by the provider, who pays for all compute used." },
      { kind:"multi", choose:2, text:"You want to provide data sets to other Snowflake accounts by way of Data Sharing, but you are concerned about the costs. Which statements are true about Data Sharing? Choose two.", options:[
        {t:"The consumer of the Data Share will pay for a copy of the data that is shared", c:false},
        {t:"The provider of the Data Share will pay for the storage of the data being shared", c:true},
        {t:"The provider of the Data Share will pay for the compute resulting from consumer queries", c:false},
        {t:"There is no way for the provider to know how much the consumers are using the data", c:false},
        {t:"The consumer will pay for the compute resulting from consumer queries", c:true} ],
        explanation:"The provider pays for storage of the shared data; consumers run queries on their own warehouses, so they pay for that compute." }
    ]}
];
quizzes.forEach(function (quiz) {
  if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) window.QUIZZES.push(quiz);
});
})();
