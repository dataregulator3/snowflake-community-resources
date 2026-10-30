window.QUIZZES = window.QUIZZES || [];
(function () {
var quizzes = [
    { id:"domain-1", order:201, group:"SnowPro Core — Domain Quizzes", kicker:"Domain 1", title: "AI Data Cloud Features & Architecture", topic: "Architecture layers, editions, object hierarchy, interfaces, Snowpark and Cortex. (Exam weight 31%)", questions: [
      { kind:"single", text:"Which three layers make up Snowflake's architecture?", options:[
        {t:"Database Storage, Compute (Query Processing), and Cloud Services", c:true},
        {t:"Storage, Networking, and Compute", c:false},
        {t:"Compute, Metadata, and Snowgrid", c:false},
        {t:"Storage, Cortex, and Snowgrid", c:false} ],
        explanation:"Snowflake's architecture has three layers: centralized database storage, multi-cluster compute (virtual warehouses), and cloud services." },
      { kind:"single", text:"Which layer is responsible for authentication, metadata management, query optimization, and access control?", options:[
        {t:"Cloud Services", c:true},{t:"Compute", c:false},{t:"Database Storage", c:false},{t:"Snowgrid", c:false} ],
        explanation:"The cloud services layer coordinates the platform: authentication, metadata, query optimization and access control." },
      { kind:"multi", choose:2, text:"Which statements about Snowflake's storage layer are true? Choose two.", options:[
        {t:"Data is stored in compressed, columnar micro-partitions", c:true},
        {t:"Storage is decoupled from compute", c:true},
        {t:"Users manage row-based storage blocks manually", c:false},
        {t:"Storage is included at no cost with any warehouse", c:false} ],
        explanation:"Snowflake stores data as compressed, columnar micro-partitions, and storage scales independently of compute." },
      { kind:"single", text:"Which Snowflake edition is the minimum required for Dynamic Data Masking and other column-level security features?", options:[
        {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"Virtual Private Snowflake", c:false} ],
        explanation:"Dynamic Data Masking requires Enterprise Edition or higher." },
      { kind:"single", text:"Which edition adds enhanced compliance support such as HIPAA/PCI DSS and Tri-Secret Secure?", options:[
        {t:"Standard", c:false},{t:"Enterprise", c:false},{t:"Business Critical", c:true},{t:"Standard with add-on", c:false} ],
        explanation:"Business Critical Edition adds features for highly sensitive data, including HIPAA/PCI support and Tri-Secret Secure." },
      { kind:"single", text:"What is the correct object containment order in Snowflake?", options:[
        {t:"Account → Database → Schema → Table", c:true},
        {t:"Account → Schema → Database → Table", c:false},
        {t:"Organization → Schema → Database → Warehouse", c:false},
        {t:"Database → Account → Schema → Table", c:false} ],
        explanation:"Securable objects are contained Account → Database → Schema → schema-level objects such as tables and views." },
      { kind:"multi", choose:2, text:"Which of the following are schema-level objects? Choose two.", options:[
        {t:"Tables", c:true},
        {t:"Stages", c:true},
        {t:"Warehouses", c:false},
        {t:"Users", c:false} ],
        explanation:"Tables and stages live inside schemas; warehouses, users and roles are account-level objects." },
      { kind:"single", text:"Which Snowflake tool is the web-based interface for querying, dashboards, and administration?", options:[
        {t:"Snowsight", c:true},{t:"SnowSQL", c:false},{t:"Snowpark", c:false},{t:"Snowpipe", c:false} ],
        explanation:"Snowsight is Snowflake's web user interface." },
      { kind:"single", text:"What is the primary purpose of Snowpark?", options:[
        {t:"A developer framework to run Python, Java, and Scala code inside Snowflake", c:true},
        {t:"A continuous data ingestion service", c:false},
        {t:"A query result caching layer", c:false},
        {t:"A BI dashboarding tool", c:false} ],
        explanation:"Snowpark is a developer framework for building Python/Java/Scala data pipelines that execute in Snowflake." },
      { kind:"single", text:"Which Snowflake feature provides LLM-powered AI functions over your data?", options:[
        {t:"Snowflake Cortex", c:true},{t:"Snowgrid", c:false},{t:"Snowpipe", c:false},{t:"Streamlit in Snowflake", c:false} ],
        explanation:"Snowflake Cortex is the suite of AI features built on large language models." },
      { kind:"single", text:"Which capability lets you securely connect to data and apps across regions and clouds through a single experience?", options:[
        {t:"Snowgrid", c:true},{t:"Snowpark", c:false},{t:"Snowpipe", c:false},{t:"Snowsight", c:false} ],
        explanation:"Snowgrid provides cross-region, cross-cloud connectivity for data and apps." },
      { kind:"single", text:"On which cloud platforms can Snowflake run?", options:[
        {t:"AWS, Microsoft Azure, and Google Cloud", c:true},
        {t:"AWS and Azure only", c:false},
        {t:"Only Snowflake's private cloud", c:false},
        {t:"Any on-premises data center", c:false} ],
        explanation:"Snowflake accounts can be hosted on AWS, Azure, or Google Cloud." },
      { kind:"single", text:"Which statement about virtual warehouses is TRUE?", options:[
        {t:"Multiple warehouses can operate on the same data at the same time", c:true},
        {t:"Only one warehouse can access a table at a time", c:false},
        {t:"Warehouses permanently store table data", c:false},
        {t:"Resizing a warehouse deletes its cache permanently even while running", c:false} ],
        explanation:"Because compute is separated from storage, many warehouses can query the same data concurrently." },
      { kind:"single", text:"Scaling a warehouse UP (e.g., from Small to Large) is primarily intended to:", options:[
        {t:"Improve performance of large, complex individual queries", c:true},
        {t:"Increase concurrency for many simultaneous users", c:false},
        {t:"Reduce storage costs", c:false},
        {t:"Enable data sharing", c:false} ],
        explanation:"Scaling up adds compute power per cluster for heavy queries; scaling out (multi-cluster) handles concurrency." },
      { kind:"single", text:"A multi-cluster warehouse is primarily used to:", options:[
        {t:"Handle high concurrency by adding/removing clusters automatically", c:true},
        {t:"Speed up a single very large query", c:false},
        {t:"Store more data", c:false},
        {t:"Replace the need for a result cache", c:false} ],
        explanation:"Multi-cluster warehouses scale out to serve many concurrent queries and reduce queuing." },
      { kind:"single", text:"By default, what happens to a running virtual warehouse after a period of inactivity (auto-suspend)?", options:[
        {t:"It suspends to stop consuming credits", c:true},
        {t:"It is dropped", c:false},
        {t:"It keeps running indefinitely", c:false},
        {t:"Its data is deleted", c:false} ],
        explanation:"Auto-suspend pauses an idle warehouse so it stops consuming credits; auto-resume restarts it on demand." },
      { kind:"multi", choose:2, text:"Which are considered account-level (not schema-level) objects? Choose two.", options:[
        {t:"Roles", c:true},
        {t:"Warehouses", c:true},
        {t:"File formats", c:false},
        {t:"Sequences", c:false} ],
        explanation:"Roles, users, warehouses, and databases are account-level; file formats and sequences are schema-level." },
      { kind:"single", text:"What is a User-Defined Table Function (UDTF)?", options:[
        {t:"A function that returns a set of rows (a table)", c:true},
        {t:"A function that returns a single scalar value", c:false},
        {t:"A stored procedure that performs DDL", c:false},
        {t:"A view with parameters", c:false} ],
        explanation:"A UDTF returns tabular results, unlike a scalar UDF that returns a single value." },
      { kind:"single", text:"Which object type is used to define how staged files are parsed (delimiters, compression, etc.)?", options:[
        {t:"File format", c:true},{t:"Stage", c:false},{t:"Pipe", c:false},{t:"Sequence", c:false} ],
        explanation:"A file format object specifies parsing options for loading/unloading files." },
      { kind:"single", text:"Which Snowflake table type persists data but has NO Fail-safe and only up to 1 day of Time Travel?", options:[
        {t:"Transient table", c:true},{t:"Permanent table", c:false},{t:"Temporary table", c:false},{t:"External table", c:false} ],
        explanation:"Transient tables persist across sessions but have no Fail-safe and max 1 day Time Travel, reducing storage cost." },
      { kind:"single", text:"A temporary table exists for how long?", options:[
        {t:"Only for the duration of the session that created it", c:true},
        {t:"Until the account is dropped", c:false},
        {t:"7 days", c:false},
        {t:"Until Fail-safe expires", c:false} ],
        explanation:"Temporary tables are session-scoped and are dropped when the session ends." },
      { kind:"single", text:"Which table type references data stored in an external cloud location rather than in Snowflake?", options:[
        {t:"External table", c:true},{t:"Transient table", c:false},{t:"Dynamic table", c:false},{t:"Temporary table", c:false} ],
        explanation:"External tables expose data files in external stages as read-only tables." },
      { kind:"single", text:"What best describes a micro-partition?", options:[
        {t:"A small, immutable, compressed columnar storage unit created automatically", c:true},
        {t:"A user-defined partition of rows", c:false},
        {t:"A cache of query results", c:false},
        {t:"A type of virtual warehouse", c:false} ],
        explanation:"Snowflake automatically stores data in immutable, compressed, columnar micro-partitions (~50–500 MB uncompressed)." },
      { kind:"single", text:"What is a clustering key used for?", options:[
        {t:"To co-locate related data in micro-partitions to improve pruning on large tables", c:true},
        {t:"To encrypt columns", c:false},
        {t:"To define primary key constraints that are enforced", c:false},
        {t:"To compress data further", c:false} ],
        explanation:"A clustering key reorganizes data so queries can prune more micro-partitions on very large tables." },
      { kind:"single", text:"Which Snowsight-adjacent tool is a command-line interface for executing SQL and managing Snowflake objects?", options:[
        {t:"Snowflake CLI", c:true},{t:"Snowpark", c:false},{t:"Snowpipe", c:false},{t:"Cortex", c:false} ],
        explanation:"The Snowflake CLI runs SQL and manages objects from the command line." },
      { kind:"single", text:"Which feature offers an interactive, cell-based environment for Python, SQL, and Markdown inside Snowflake?", options:[
        {t:"Snowflake Notebooks", c:true},{t:"Streamlit in Snowflake", c:false},{t:"Snowsight dashboards", c:false},{t:"Snowpark", c:false} ],
        explanation:"Snowflake Notebooks provide a cell-based development environment for Python, SQL, and Markdown." },
      { kind:"single", text:"Streamlit in Snowflake is used to:", options:[
        {t:"Build and deploy data applications natively in Snowflake", c:true},
        {t:"Load streaming data", c:false},
        {t:"Manage virtual warehouses", c:false},
        {t:"Define masking policies", c:false} ],
        explanation:"Streamlit in Snowflake lets you build interactive data apps that run inside Snowflake." },
      { kind:"multi", choose:2, text:"Which are features of Snowflake Cortex? Choose two.", options:[
        {t:"Cortex Analyst", c:true},
        {t:"Cortex Search", c:true},
        {t:"Cortex Warehouse", c:false},
        {t:"Cortex Pipe", c:false} ],
        explanation:"Cortex includes LLM-powered features such as Cortex Analyst and Cortex Search; 'Cortex Warehouse' and 'Cortex Pipe' are not real features." },
      { kind:"single", text:"Which edition provides a completely separate, isolated Snowflake environment for organizations with the strictest requirements?", options:[
        {t:"Virtual Private Snowflake (VPS)", c:true},
        {t:"Enterprise", c:false},
        {t:"Business Critical", c:false},
        {t:"Standard", c:false} ],
        explanation:"VPS offers the highest level of isolation for the most security-sensitive organizations." },
      { kind:"single", text:"Which statement about storage vs. compute billing is correct?", options:[
        {t:"Storage and compute are billed separately", c:true},
        {t:"Compute is free; you only pay for storage", c:false},
        {t:"Storage is free; you only pay for compute", c:false},
        {t:"They are billed as a single combined fee", c:false} ],
        explanation:"Snowflake bills storage and compute independently, reflecting their separation in the architecture." }
    ]},

    { id:"domain-2", order:202, group:"SnowPro Core — Domain Quizzes", kicker:"Domain 2", title: "Account Management & Data Governance", topic: "RBAC, system roles, masking and row access policies, network policies, resource monitors and ACCOUNT_USAGE. (Exam weight 20%)", questions: [
      { kind:"single", text:"Which access control model does Snowflake primarily use?", options:[
        {t:"Role-Based Access Control (RBAC) combined with discretionary access control", c:true},
        {t:"Mandatory Access Control only", c:false},
        {t:"Per-user access control lists", c:false},
        {t:"No access control by default", c:false} ],
        explanation:"Snowflake grants privileges to roles and roles to users (RBAC), combined with DAC where object owners can grant access." },
      { kind:"multi", choose:2, text:"Which of the following are system-defined roles? Choose two.", options:[
        {t:"ACCOUNTADMIN", c:true},
        {t:"SYSADMIN", c:true},
        {t:"SUPERUSER", c:false},
        {t:"DATABASE_OWNER", c:false} ],
        explanation:"System-defined roles include ORGADMIN, ACCOUNTADMIN, SECURITYADMIN, USERADMIN, SYSADMIN and PUBLIC." },
      { kind:"single", text:"Which system-defined role is dedicated to creating and managing users and roles?", options:[
        {t:"USERADMIN", c:true},{t:"SYSADMIN", c:false},{t:"PUBLIC", c:false},{t:"ACCOUNTADMIN", c:false} ],
        explanation:"USERADMIN is purpose-built for user and role management." },
      { kind:"single", text:"Besides SELECT on a table, what does a role need at minimum to read from it?", options:[
        {t:"USAGE on the parent database and schema", c:true},
        {t:"OWNERSHIP of the table", c:false},
        {t:"MODIFY on the schema", c:false},
        {t:"The ACCOUNTADMIN role", c:false} ],
        explanation:"The role needs USAGE on the containing database and schema plus SELECT on the table." },
      { kind:"single", text:"Which governance feature dynamically hides or transforms column values based on the querying role?", options:[
        {t:"Dynamic Data Masking", c:true},{t:"Row access policies", c:false},{t:"Object tagging", c:false},{t:"Time Travel", c:false} ],
        explanation:"Dynamic data masking applies masking policies at query time based on the executing role." },
      { kind:"single", text:"Which feature restricts which rows a user can see in a table?", options:[
        {t:"Row access policies", c:true},{t:"Column masking policies", c:false},{t:"Network policies", c:false},{t:"Object tags", c:false} ],
        explanation:"Row access policies enforce row-level security." },
      { kind:"single", text:"Which mechanism allows or blocks connections based on IP address ranges?", options:[
        {t:"Network policies", c:true},{t:"Authentication policies", c:false},{t:"Masking policies", c:false},{t:"Resource monitors", c:false} ],
        explanation:"Network policies use network rules to define allowed/blocked IP ranges." },
      { kind:"single", text:"At which levels can a resource monitor be assigned?", options:[
        {t:"Account and virtual warehouse", c:true},
        {t:"Database and schema", c:false},
        {t:"User and role", c:false},
        {t:"Table and column", c:false} ],
        explanation:"Resource monitors track credit usage at the account level and/or per warehouse." },
      { kind:"single", text:"What is the maximum data retention for most views in the ACCOUNT_USAGE schema?", options:[
        {t:"1 year (365 days)", c:true},{t:"90 days", c:false},{t:"45 days", c:false},{t:"7 days", c:false} ],
        explanation:"ACCOUNT_USAGE views retain up to 365 days of history." },
      { kind:"multi", choose:2, text:"Which actions can a resource monitor take when a threshold is reached? Choose two.", options:[
        {t:"Send a notification", c:true},
        {t:"Suspend the warehouse", c:true},
        {t:"Drop the database", c:false},
        {t:"Delete query history", c:false} ],
        explanation:"Resource monitors can notify, suspend after running queries complete, or suspend immediately." },
      { kind:"single", text:"In RBAC, privileges are granted to ____, which are then granted to ____.", options:[
        {t:"roles; users (or other roles)", c:true},
        {t:"users; roles", c:false},
        {t:"objects; users", c:false},
        {t:"warehouses; databases", c:false} ],
        explanation:"Privileges are granted to roles; roles are granted to users or other roles (role hierarchy)." },
      { kind:"single", text:"Which system-defined role sits at the top and has all privileges in the account?", options:[
        {t:"ACCOUNTADMIN", c:true},{t:"SYSADMIN", c:false},{t:"SECURITYADMIN", c:false},{t:"PUBLIC", c:false} ],
        explanation:"ACCOUNTADMIN is the most powerful role, encapsulating SYSADMIN and SECURITYADMIN." },
      { kind:"single", text:"Which role is granted to every user and every role automatically?", options:[
        {t:"PUBLIC", c:true},{t:"SYSADMIN", c:false},{t:"USERADMIN", c:false},{t:"ORGADMIN", c:false} ],
        explanation:"PUBLIC is automatically granted to all users and roles and cannot be revoked." },
      { kind:"single", text:"Which role is responsible for managing grants globally (granting/revoking privileges) and object access?", options:[
        {t:"SECURITYADMIN", c:true},{t:"SYSADMIN", c:false},{t:"USERADMIN", c:false},{t:"PUBLIC", c:false} ],
        explanation:"SECURITYADMIN can manage object grants globally and inherits USERADMIN." },
      { kind:"single", text:"Which role is recommended for creating warehouses, databases, and other objects (best practice)?", options:[
        {t:"SYSADMIN", c:true},{t:"ACCOUNTADMIN", c:false},{t:"PUBLIC", c:false},{t:"ORGADMIN", c:false} ],
        explanation:"Best practice is to create objects with SYSADMIN (or custom roles beneath it), not ACCOUNTADMIN." },
      { kind:"single", text:"Which role operates at the organization level to manage accounts?", options:[
        {t:"ORGADMIN", c:true},{t:"ACCOUNTADMIN", c:false},{t:"SYSADMIN", c:false},{t:"SECURITYADMIN", c:false} ],
        explanation:"ORGADMIN manages organization-level operations such as creating accounts." },
      { kind:"single", text:"What does OWNERSHIP privilege on an object allow?", options:[
        {t:"Full control including granting access and dropping the object", c:true},
        {t:"Only SELECT on the object", c:false},
        {t:"Only the ability to clone it", c:false},
        {t:"Nothing without ACCOUNTADMIN", c:false} ],
        explanation:"The role with OWNERSHIP has full control of the object, including managing grants and dropping it." },
      { kind:"single", text:"Which authentication method uses a public/private key pair instead of a password?", options:[
        {t:"Key-pair authentication", c:true},{t:"MFA", c:false},{t:"OAuth device flow", c:false},{t:"Network policy", c:false} ],
        explanation:"Key-pair authentication uses an RSA key pair, commonly for service/programmatic access." },
      { kind:"single", text:"Which feature adds a second verification step (e.g., Duo) at login?", options:[
        {t:"Multi-factor authentication (MFA)", c:true},{t:"SSO", c:false},{t:"Key-pair auth", c:false},{t:"Row access policy", c:false} ],
        explanation:"MFA requires an additional authentication factor beyond the password." },
      { kind:"single", text:"Which standard lets users log in to Snowflake via a corporate identity provider (single sign-on)?", options:[
        {t:"Federated authentication / SSO (e.g., SAML)", c:true},
        {t:"ON_ERROR", c:false},
        {t:"Directory tables", c:false},
        {t:"Tri-Secret Secure", c:false} ],
        explanation:"Federated authentication/SSO integrates an external IdP so users authenticate once." },
      { kind:"single", text:"Which governance feature lets you attach metadata labels to objects (e.g., 'PII') for classification and policy?", options:[
        {t:"Object tagging", c:true},{t:"Time Travel", c:false},{t:"Resource monitors", c:false},{t:"Cloning", c:false} ],
        explanation:"Object tags attach key-value metadata to objects and can drive tag-based masking policies." },
      { kind:"single", text:"A masking policy that is applied automatically to all columns carrying a specific tag is called:", options:[
        {t:"Tag-based masking policy", c:true},
        {t:"Row access policy", c:false},
        {t:"External tokenization", c:false},
        {t:"Differential privacy", c:false} ],
        explanation:"Tag-based masking assigns a masking policy to a tag so all tagged columns inherit it." },
      { kind:"single", text:"Which feature replaces sensitive values with tokens using external services?", options:[
        {t:"External tokenization", c:true},
        {t:"Dynamic data masking", c:false},
        {t:"Object tagging", c:false},
        {t:"Time Travel", c:false} ],
        explanation:"External tokenization tokenizes data on load and detokenizes at query time via external functions." },
      { kind:"single", text:"Which Snowflake feature helps you monitor security posture and account-level risks from one place?", options:[
        {t:"Trust Center", c:true},{t:"Query Profile", c:false},{t:"Snowpark", c:false},{t:"Directory tables", c:false} ],
        explanation:"The Trust Center evaluates your account against security best-practice scanners." },
      { kind:"single", text:"By default, how does Snowflake encrypt data at rest?", options:[
        {t:"All data is automatically encrypted using AES-256", c:true},
        {t:"Only if the customer enables it", c:false},
        {t:"Only Business Critical data is encrypted", c:false},
        {t:"Data at rest is not encrypted", c:false} ],
        explanation:"Snowflake automatically encrypts all data at rest with strong encryption (AES-256) and manages key rotation." },
      { kind:"single", text:"Tri-Secret Secure allows a customer to:", options:[
        {t:"Combine a customer-managed key with Snowflake's key for a composite master key", c:true},
        {t:"Disable all encryption", c:false},
        {t:"Share keys with consumers", c:false},
        {t:"Bypass MFA", c:false} ],
        explanation:"Tri-Secret Secure (Business Critical) combines a customer-managed key and a Snowflake-managed key." },
      { kind:"single", text:"Which view/feature lets you trace how data flows and transforms between objects over time?", options:[
        {t:"Data lineage", c:true},{t:"Result cache", c:false},{t:"Resource monitor", c:false},{t:"Sequence", c:false} ],
        explanation:"Data lineage shows how data moves and transforms across objects." },
      { kind:"single", text:"Where would you query historical login attempts across the account?", options:[
        {t:"SNOWFLAKE.ACCOUNT_USAGE.LOGIN_HISTORY", c:true},
        {t:"INFORMATION_SCHEMA.SESSIONS", c:false},
        {t:"SNOWFLAKE.LOGGING.LOGINS", c:false},
        {t:"V$LOG", c:false} ],
        explanation:"The LOGIN_HISTORY view in the ACCOUNT_USAGE schema records authentication attempts." },
      { kind:"single", text:"Which is a benefit of using custom roles instead of granting everything to ACCOUNTADMIN?", options:[
        {t:"Enforces least-privilege access", c:true},
        {t:"Removes the need for warehouses", c:false},
        {t:"Automatically encrypts data", c:false},
        {t:"Disables Time Travel", c:false} ],
        explanation:"Custom roles let you grant only the privileges each function needs (least privilege)." },
      { kind:"single", text:"A budget in Snowflake is used to:", options:[
        {t:"Monitor and send notifications when a spending limit is approached for a group of resources", c:true},
        {t:"Hard-stop all compute at a fixed dollar amount", c:false},
        {t:"Encrypt cost data", c:false},
        {t:"Replace resource monitors entirely", c:false} ],
        explanation:"Budgets track spending across a defined set of resources and notify when limits are near." }
    ]},

    { id:"domain-3", order:203, group:"SnowPro Core — Domain Quizzes", kicker:"Domain 3", title: "Data Loading, Unloading & Connectivity", topic: "COPY INTO, PUT/GET, Snowpipe, streams and tasks, integrations and directory tables. (Exam weight 18%)", questions: [
      { kind:"single", text:"Which command loads staged files into a table?", options:[
        {t:"COPY INTO <table>", c:true},{t:"PUT", c:false},{t:"GET", c:false},{t:"INSERT STAGE", c:false} ],
        explanation:"COPY INTO <table> loads data from a stage into a table." },
      { kind:"single", text:"Which command uploads local files to an internal stage?", options:[
        {t:"PUT", c:true},{t:"GET", c:false},{t:"COPY INTO", c:false},{t:"LIST", c:false} ],
        explanation:"PUT uploads local files to an internal stage; GET downloads from a stage." },
      { kind:"single", text:"By default, what does COPY INTO do when it encounters an error in the data?", options:[
        {t:"Aborts the load and rolls back the statement (ON_ERROR = ABORT_STATEMENT)", c:true},
        {t:"Skips the offending file and continues", c:false},
        {t:"Replaces bad values with NULL", c:false},
        {t:"Continues silently with no log", c:false} ],
        explanation:"The default ON_ERROR value is ABORT_STATEMENT, which rolls back the load on error." },
      { kind:"single", text:"Which best describes Snowpipe?", options:[
        {t:"Serverless, continuous micro-batch loading of new files", c:true},
        {t:"Bulk loading that requires a user-managed warehouse", c:false},
        {t:"A streaming query engine", c:false},
        {t:"A data unloading tool", c:false} ],
        explanation:"Snowpipe continuously loads new files using Snowflake-managed serverless compute." },
      { kind:"multi", choose:2, text:"Which file formats are supported for UNLOADING data with COPY INTO <location>? Choose two.", options:[
        {t:"CSV (delimited)", c:true},
        {t:"JSON", c:true},
        {t:"ORC", c:false},
        {t:"Avro", c:false} ],
        explanation:"Unloading supports CSV (delimited), JSON and Parquet." },
      { kind:"single", text:"What does a Stream object track?", options:[
        {t:"DML changes to a table (change data capture)", c:true},
        {t:"Query execution history", c:false},
        {t:"User login events", c:false},
        {t:"Files added to a stage", c:false} ],
        explanation:"Streams record DML changes (inserts/updates/deletes) for CDC." },
      { kind:"single", text:"Which object runs SQL on a schedule or trigger and is commonly paired with streams?", options:[
        {t:"Task", c:true},{t:"Pipe", c:false},{t:"Sequence", c:false},{t:"View", c:false} ],
        explanation:"Tasks execute SQL on a schedule or after another task, often consuming stream data." },
      { kind:"single", text:"Which object provides secure, credential-free access to external cloud storage?", options:[
        {t:"Storage integration", c:true},{t:"API integration", c:false},{t:"External function", c:false},{t:"Directory table", c:false} ],
        explanation:"Storage integrations delegate access to a cloud IAM role, avoiding stored credentials." },
      { kind:"single", text:"Which feature lets you query the list of files in a stage as a table?", options:[
        {t:"Directory table", c:true},{t:"External table", c:false},{t:"Stream", c:false},{t:"Materialized view", c:false} ],
        explanation:"Directory tables expose stage file metadata as a queryable table." },
      { kind:"single", text:"What compressed file size range does Snowflake recommend for efficient bulk loading?", options:[
        {t:"About 100–250 MB", c:true},{t:"1–5 MB", c:false},{t:"1–2 GB", c:false},{t:"500 MB–1 GB", c:false} ],
        explanation:"Roughly 100–250 MB compressed per file enables good load parallelism." },
      { kind:"single", text:"Which command downloads files from an internal stage to a local system?", options:[
        {t:"GET", c:true},{t:"PUT", c:false},{t:"COPY INTO <location>", c:false},{t:"LIST", c:false} ],
        explanation:"GET downloads files from an internal stage; PUT uploads to it." },
      { kind:"single", text:"Which command unloads query results or table data into files in a stage?", options:[
        {t:"COPY INTO <location>", c:true},
        {t:"COPY INTO <table>", c:false},
        {t:"PUT", c:false},
        {t:"UNLOAD", c:false} ],
        explanation:"COPY INTO <location> writes data out to files in a stage." },
      { kind:"single", text:"Which command lists the files currently staged in a stage?", options:[
        {t:"LIST", c:true},{t:"SHOW FILES", c:false},{t:"GET", c:false},{t:"DESCRIBE STAGE", c:false} ],
        explanation:"LIST (or LS) shows files in a stage." },
      { kind:"single", text:"An internal named stage stores files where?", options:[
        {t:"Within Snowflake-managed storage", c:true},
        {t:"In your own S3/Azure/GCS bucket", c:false},
        {t:"On the local client only", c:false},
        {t:"In the result cache", c:false} ],
        explanation:"Internal stages use Snowflake-managed storage; external stages point to your cloud bucket." },
      { kind:"single", text:"Which COPY option controls behavior when an error is encountered?", options:[
        {t:"ON_ERROR", c:true},{t:"VALIDATION_MODE", c:false},{t:"FORCE", c:false},{t:"PURGE", c:false} ],
        explanation:"ON_ERROR (e.g., ABORT_STATEMENT, CONTINUE, SKIP_FILE) governs error handling." },
      { kind:"single", text:"Which COPY option lets you dry-run a load to inspect errors without loading data?", options:[
        {t:"VALIDATION_MODE", c:true},{t:"ON_ERROR", c:false},{t:"SIZE_LIMIT", c:false},{t:"MATCH_BY_COLUMN_NAME", c:false} ],
        explanation:"VALIDATION_MODE validates files and returns errors without loading rows." },
      { kind:"single", text:"By default, will COPY INTO reload a file it has already loaded?", options:[
        {t:"No — load metadata prevents reloading the same file", c:true},
        {t:"Yes — every run reloads all files", c:false},
        {t:"Only if ON_ERROR=CONTINUE", c:false},
        {t:"Only for CSV files", c:false} ],
        explanation:"COPY tracks load history metadata and skips files already loaded (unless FORCE=TRUE)." },
      { kind:"single", text:"How long is COPY (bulk) load history metadata retained?", options:[
        {t:"64 days", c:true},{t:"14 days", c:false},{t:"1 year", c:false},{t:"7 days", c:false} ],
        explanation:"Bulk COPY load metadata is kept for 64 days; Snowpipe keeps 14 days." },
      { kind:"single", text:"Snowpipe uses which compute to load data?", options:[
        {t:"Snowflake-managed serverless compute", c:true},
        {t:"A user-specified virtual warehouse", c:false},
        {t:"The cloud services layer only", c:false},
        {t:"The client machine", c:false} ],
        explanation:"Snowpipe is serverless — no user-managed warehouse is required." },
      { kind:"single", text:"Snowpipe can be triggered by:", options:[
        {t:"Cloud storage event notifications or REST API calls", c:true},
        {t:"Only a manual COPY command", c:false},
        {t:"A resource monitor", c:false},
        {t:"A masking policy", c:false} ],
        explanation:"Snowpipe auto-ingest uses cloud event notifications, or you can call the REST API." },
      { kind:"single", text:"Which object records DML changes so downstream processes can consume only new/changed rows?", options:[
        {t:"Stream", c:true},{t:"Task", c:false},{t:"Pipe", c:false},{t:"Sequence", c:false} ],
        explanation:"Streams provide change data capture over a table." },
      { kind:"single", text:"When a stream's changes are consumed in a DML statement, the stream offset:", options:[
        {t:"Advances so the same changes aren't returned again", c:true},
        {t:"Resets to the beginning", c:false},
        {t:"Never changes", c:false},
        {t:"Deletes the source rows", c:false} ],
        explanation:"Consuming a stream in a successful DML transaction advances its offset." },
      { kind:"single", text:"Tasks can be scheduled using:", options:[
        {t:"A CRON expression or a fixed interval", c:true},
        {t:"Only manual execution", c:false},
        {t:"Only cloud event triggers", c:false},
        {t:"Resource monitors", c:false} ],
        explanation:"Tasks run on a schedule (interval or CRON) and can chain into a DAG." },
      { kind:"single", text:"A Dynamic Table is best described as:", options:[
        {t:"A table whose content is automatically refreshed from a query based on a target lag", c:true},
        {t:"A temporary table that disappears after a session", c:false},
        {t:"A stream over an external stage", c:false},
        {t:"A view with no storage", c:false} ],
        explanation:"Dynamic tables declaratively materialize a query result and refresh to meet a target lag." },
      { kind:"single", text:"Which integration object provides secure connectivity to external HTTPS endpoints (e.g., for external functions)?", options:[
        {t:"API integration", c:true},{t:"Storage integration", c:false},{t:"Git integration", c:false},{t:"File format", c:false} ],
        explanation:"API integrations manage secure access to external services/endpoints." },
      { kind:"single", text:"Which integration lets you use a Git repository's files directly within Snowflake?", options:[
        {t:"Git integration", c:true},{t:"API integration", c:false},{t:"Storage integration", c:false},{t:"Notification integration", c:false} ],
        explanation:"Git integration connects a repository so its files can be referenced in Snowflake." },
      { kind:"multi", choose:2, text:"Which are valid Snowflake client drivers/connectors? Choose two.", options:[
        {t:"JDBC driver", c:true},
        {t:"Python connector", c:true},
        {t:"COBOL driver", c:false},
        {t:"FTP connector", c:false} ],
        explanation:"Snowflake provides JDBC, ODBC, Python, Node.js, Go, .NET and other drivers/connectors." },
      { kind:"single", text:"Which file formats can Snowflake LOAD (ingest)?", options:[
        {t:"CSV, JSON, Avro, ORC, Parquet, and XML", c:true},
        {t:"Only CSV and JSON", c:false},
        {t:"Only Parquet", c:false},
        {t:"Only proprietary Snowflake files", c:false} ],
        explanation:"Snowflake can load structured (CSV) and semi-structured (JSON, Avro, ORC, Parquet, XML) formats." },
      { kind:"single", text:"To load data continuously with the lowest latency at the row level, you would use:", options:[
        {t:"Snowpipe Streaming", c:true},
        {t:"Bulk COPY INTO on a schedule", c:false},
        {t:"GET", c:false},
        {t:"A materialized view", c:false} ],
        explanation:"Snowpipe Streaming ingests rows directly with low latency, without staging files first." },
      { kind:"single", text:"Organizing staged files under logical paths (prefixes) primarily helps you:", options:[
        {t:"Load subsets of data efficiently and manage files at scale", c:true},
        {t:"Encrypt the files", c:false},
        {t:"Avoid needing a file format", c:false},
        {t:"Bypass the COPY command", c:false} ],
        explanation:"Path/prefix organization lets COPY target subsets of files and scales file management." }
    ]},

    { id:"domain-4", order:204, group:"SnowPro Core — Domain Quizzes", kicker:"Domain 4", title: "Performance, Optimization & Transformation", topic: "Query Profile, pruning, caching, Query Acceleration, Search Optimization, materialized views and semi-structured data. (Exam weight 21%)", questions: [
      { kind:"single", text:"Which tool visualizes the execution steps of a query to help diagnose performance?", options:[
        {t:"Query Profile", c:true},{t:"Query Result Cache", c:false},{t:"Resource Monitor", c:false},{t:"ACCOUNT_USAGE", c:false} ],
        explanation:"The Query Profile shows operator-level execution details for a query." },
      { kind:"single", text:"In the Query Profile, which sign most strongly indicates a performance problem?", options:[
        {t:"Spilling to local or remote disk", c:true},
        {t:"Partitions scanned less than partitions total", c:false},
        {t:"A high percentage scanned from cache", c:false},
        {t:"Use of the result cache", c:false} ],
        explanation:"Disk spilling means the query exceeded available memory, which usually degrades performance significantly." },
      { kind:"single", text:"What does effective partition pruning accomplish?", options:[
        {t:"Scans fewer micro-partitions by using their metadata", c:true},
        {t:"Compresses data further", c:false},
        {t:"Adds more compute clusters", c:false},
        {t:"Caches results for longer", c:false} ],
        explanation:"Pruning uses micro-partition min/max metadata to skip partitions that cannot match the filter." },
      { kind:"multi", choose:2, text:"Which statements about the Query Result Cache are true? Choose two.", options:[
        {t:"Results are reused when the query and underlying data are unchanged", c:true},
        {t:"Cached results are available without a running warehouse", c:true},
        {t:"It only caches aggregate queries", c:false},
        {t:"It requires clustering keys to work", c:false} ],
        explanation:"The result cache serves identical queries (unchanged data) without compute, and does not need a running warehouse." },
      { kind:"single", text:"Which service offloads portions of eligible large scans to shared serverless compute?", options:[
        {t:"Query Acceleration Service", c:true},{t:"Search Optimization Service", c:false},{t:"Materialized Views", c:false},{t:"Automatic Clustering", c:false} ],
        explanation:"The Query Acceleration Service offloads parts of eligible queries to additional serverless resources." },
      { kind:"single", text:"Which feature is best for selective point lookups and equality/IN predicates on large tables?", options:[
        {t:"Search Optimization Service", c:true},{t:"Query Acceleration Service", c:false},{t:"Materialized Views", c:false},{t:"Result cache", c:false} ],
        explanation:"Search Optimization Service builds access paths for selective point lookups and equality searches." },
      { kind:"multi", choose:2, text:"Which are limitations of materialized views? Choose two.", options:[
        {t:"They cannot use a JOIN", c:true},
        {t:"They cannot use window functions or ORDER BY", c:true},
        {t:"They cannot be created on a single base table", c:false},
        {t:"They cannot have a clustering key", c:false} ],
        explanation:"Materialized views cannot use joins, window functions or ORDER BY; they can have cluster keys and multiple MVs per base table." },
      { kind:"single", text:"Which caching layer stores raw table data on a warehouse's local SSD for reuse?", options:[
        {t:"Warehouse (local/data) cache", c:true},
        {t:"Query result cache", c:false},
        {t:"Metadata cache", c:false},
        {t:"Cloud services cache", c:false} ],
        explanation:"The warehouse cache holds table data on the cluster's local storage and is lost when the warehouse suspends." },
      { kind:"single", text:"Which data type stores semi-structured data such as JSON?", options:[
        {t:"VARIANT", c:true},{t:"STRING", c:false},{t:"BINARY", c:false},{t:"NUMBER", c:false} ],
        explanation:"VARIANT stores semi-structured values such as JSON and Avro." },
      { kind:"single", text:"Which function expands nested arrays or objects into rows?", options:[
        {t:"FLATTEN (often LATERAL FLATTEN)", c:true},{t:"PARSE_JSON", c:false},{t:"OBJECT_CONSTRUCT", c:false},{t:"ARRAY_AGG", c:false} ],
        explanation:"FLATTEN turns nested structures into a set of rows; LATERAL FLATTEN joins them back to the base row." },
      { kind:"single", text:"In the Query Profile, 'Partitions scanned' much smaller than 'Partitions total' indicates:", options:[
        {t:"Effective pruning — a good sign", c:true},
        {t:"A performance problem", c:false},
        {t:"Data corruption", c:false},
        {t:"That clustering failed", c:false} ],
        explanation:"Scanning far fewer partitions than total means pruning is working well." },
      { kind:"single", text:"Which caching layer is served by the cloud services layer and requires no warehouse to return results?", options:[
        {t:"Query result cache", c:true},
        {t:"Warehouse (local) cache", c:false},
        {t:"Operating-system cache", c:false},
        {t:"Clustering cache", c:false} ],
        explanation:"The result cache is managed by cloud services and returns results without compute." },
      { kind:"single", text:"How long are query results retained in the result cache (with reuse extending it)?", options:[
        {t:"24 hours, extendable up to 31 days", c:true},
        {t:"1 hour, no extension", c:false},
        {t:"7 days fixed", c:false},
        {t:"Forever", c:false} ],
        explanation:"Result cache entries persist 24 hours, extended on reuse up to a maximum of 31 days." },
      { kind:"single", text:"The warehouse (data) cache is lost when:", options:[
        {t:"The warehouse is suspended", c:true},
        {t:"A new query runs", c:false},
        {t:"The result cache is used", c:false},
        {t:"Clustering runs", c:false} ],
        explanation:"Local warehouse cache lives on the running cluster and is cleared on suspend." },
      { kind:"single", text:"Which cache allows queries like COUNT(*) or MIN/MAX to return without scanning data?", options:[
        {t:"Metadata cache", c:true},
        {t:"Warehouse cache", c:false},
        {t:"Result cache", c:false},
        {t:"Directory cache", c:false} ],
        explanation:"Micro-partition metadata lets some queries (e.g., COUNT, MIN/MAX for certain types) resolve from metadata." },
      { kind:"single", text:"'Row explosion' in a query usually results from:", options:[
        {t:"A join that produces many more output rows than inputs (e.g., many-to-many)", c:true},
        {t:"Too much pruning", c:false},
        {t:"A suspended warehouse", c:false},
        {t:"Using the result cache", c:false} ],
        explanation:"Row explosion happens when joins multiply rows; the Query Profile can help spot it." },
      { kind:"single", text:"Which statement about the Query Acceleration Service (QAS) is TRUE?", options:[
        {t:"It helps queries with large scans and unpredictable/one-off heavy work by borrowing serverless compute", c:true},
        {t:"It caches results for 31 days", c:false},
        {t:"It replaces clustering", c:false},
        {t:"It only helps point lookups", c:false} ],
        explanation:"QAS offloads eligible scan-heavy portions to serverless compute; point lookups suit Search Optimization instead." },
      { kind:"single", text:"Automatic Clustering in Snowflake:", options:[
        {t:"Is a serverless background service that reclusters tables with a clustering key", c:true},
        {t:"Requires manual re-sorting by the user", c:false},
        {t:"Only works on temporary tables", c:false},
        {t:"Deletes old micro-partitions", c:false} ],
        explanation:"Automatic Clustering maintains clustering in the background without manual effort." },
      { kind:"single", text:"When is defining a clustering key most beneficial?", options:[
        {t:"On very large tables where queries filter on specific columns", c:true},
        {t:"On small tables", c:false},
        {t:"On every table by default", c:false},
        {t:"Only on temporary tables", c:false} ],
        explanation:"Clustering keys pay off on large tables with selective, frequent filter/range queries." },
      { kind:"single", text:"A materialized view in Snowflake:", options:[
        {t:"Stores precomputed results and is transparently maintained as base data changes", c:true},
        {t:"Is just a saved query with no storage", c:false},
        {t:"Must be refreshed manually", c:false},
        {t:"Can contain joins and window functions", c:false} ],
        explanation:"Materialized views persist results and are auto-maintained; they cannot use joins/window functions." },
      { kind:"single", text:"Which is a good candidate for the Search Optimization Service?", options:[
        {t:"Selective equality lookups on large tables (e.g., WHERE id = 'X')", c:true},
        {t:"Full-table aggregations", c:false},
        {t:"Small dimension tables", c:false},
        {t:"Bulk data loading", c:false} ],
        explanation:"SOS accelerates highly selective point lookups and equality/IN searches." },
      { kind:"single", text:"To access a nested JSON attribute stored in a VARIANT column 'v', you might write:", options:[
        {t:"v:address.city", c:true},
        {t:"v->address->city", c:false},
        {t:"v[address][city]", c:false},
        {t:"GET_JSON(v,'address.city') only", c:false} ],
        explanation:"Snowflake uses colon path notation (v:address.city) to traverse VARIANT data." },
      { kind:"single", text:"Which function parses a JSON string into a VARIANT?", options:[
        {t:"PARSE_JSON", c:true},{t:"TO_JSON", c:false},{t:"FLATTEN", c:false},{t:"OBJECT_KEYS", c:false} ],
        explanation:"PARSE_JSON interprets a string as JSON, returning a VARIANT." },
      { kind:"single", text:"Which category of function computes a value across a set of rows related to the current row (e.g., running totals, rank)?", options:[
        {t:"Window functions", c:true},{t:"Scalar functions", c:false},{t:"Table functions", c:false},{t:"System functions", c:false} ],
        explanation:"Window functions operate over a window of rows (OVER/PARTITION BY)." },
      { kind:"single", text:"Which function returns one row per group (e.g., SUM, AVG, COUNT)?", options:[
        {t:"Aggregate functions", c:true},{t:"Window functions", c:false},{t:"External functions", c:false},{t:"File functions", c:false} ],
        explanation:"Aggregate functions collapse groups of rows into single values." },
      { kind:"single", text:"An external function in Snowflake:", options:[
        {t:"Calls code hosted outside Snowflake via an API integration", c:true},
        {t:"Runs Python inside Snowflake", c:false},
        {t:"Is another name for a UDTF", c:false},
        {t:"Loads files from a stage", c:false} ],
        explanation:"External functions invoke remotely hosted logic through an API integration/proxy." },
      { kind:"single", text:"Directory tables are commonly used with unstructured data to:", options:[
        {t:"Track file metadata and generate URLs to access files in a stage", c:true},
        {t:"Cache query results", c:false},
        {t:"Mask columns", c:false},
        {t:"Replicate accounts", c:false} ],
        explanation:"Directory tables catalog staged files and support scoped/pre-signed/file URLs." },
      { kind:"single", text:"Persisted query results (result cache) are reused only if:", options:[
        {t:"The query text matches and the underlying data hasn't changed", c:true},
        {t:"The same warehouse is used", c:false},
        {t:"The query ran within the last hour only", c:false},
        {t:"Clustering is enabled", c:false} ],
        explanation:"Result reuse requires identical query semantics and unchanged source data (plus a few conditions)." },
      { kind:"single", text:"Which approach best reduces queuing when many users run queries concurrently?", options:[
        {t:"Use a multi-cluster warehouse (scale out)", c:true},
        {t:"Increase Time Travel retention", c:false},
        {t:"Add a clustering key", c:false},
        {t:"Enable Fail-safe", c:false} ],
        explanation:"Scaling out with multi-cluster warehouses adds clusters to absorb concurrency and reduce queuing." },
      { kind:"single", text:"EXPLAIN in Snowflake is used to:", options:[
        {t:"Show the logical/estimated execution plan of a query without running it", c:true},
        {t:"Run the query twice for benchmarking", c:false},
        {t:"Clear the result cache", c:false},
        {t:"Cluster a table", c:false} ],
        explanation:"EXPLAIN returns the query plan without executing the query, useful for pre-run analysis." }
    ]},

    { id:"domain-5", order:205, group:"SnowPro Core — Domain Quizzes", kicker:"Domain 5", title: "Data Collaboration", topic: "Secure Data Sharing, reader accounts, Time Travel & Fail-safe, cloning, Marketplace, listings and clean rooms. (Exam weight 10%)", questions: [
      { kind:"single", text:"How does Snowflake Secure Data Sharing work?", options:[
        {t:"It shares live data without copying or moving it", c:true},
        {t:"It copies the data into the consumer's account", c:false},
        {t:"It exports the data to a file share", c:false},
        {t:"It replicates the data nightly", c:false} ],
        explanation:"Consumers query the provider's data in place; no copy is made." },
      { kind:"single", text:"Who pays for the compute used to query shared data?", options:[
        {t:"The consumer, using their own virtual warehouse", c:true},
        {t:"The provider", c:false},
        {t:"Snowflake", c:false},
        {t:"Costs are split evenly", c:false} ],
        explanation:"Consumers run queries on their own warehouses and pay that compute; the provider pays for storage." },
      { kind:"single", text:"Which account type lets a non-Snowflake customer consume shared data, funded by the provider?", options:[
        {t:"Reader account", c:true},{t:"Managed account", c:false},{t:"Organization account", c:false},{t:"Standard account", c:false} ],
        explanation:"Reader accounts are created and paid for by the provider so non-customers can consume a share." },
      { kind:"multi", choose:2, text:"Which objects can be included in a Share? Choose two.", options:[
        {t:"Tables", c:true},
        {t:"Secure views", c:true},
        {t:"Virtual warehouses", c:false},
        {t:"Users", c:false} ],
        explanation:"Shares can include databases, schemas, tables, secure views and secure UDFs — not compute or users." },
      { kind:"single", text:"What is the default Time Travel retention period for a standard permanent table (defaults left unchanged)?", options:[
        {t:"1 day", c:true},{t:"0 days", c:false},{t:"7 days", c:false},{t:"90 days", c:false} ],
        explanation:"DATA_RETENTION_TIME_IN_DAYS defaults to 1; Enterprise allows up to 90 for permanent tables." },
      { kind:"single", text:"After Time Travel expires, how long does Fail-safe retain permanent table data?", options:[
        {t:"7 days", c:true},{t:"1 day", c:false},{t:"14 days", c:false},{t:"45 days", c:false} ],
        explanation:"Fail-safe provides an additional 7 days, recoverable only by Snowflake." },
      { kind:"single", text:"How much additional storage does cloning a 50 GB table consume immediately?", options:[
        {t:"Effectively none — clones share micro-partitions (zero-copy)", c:true},
        {t:"50 GB", c:false},
        {t:"100 GB", c:false},
        {t:"25 GB", c:false} ],
        explanation:"Zero-copy cloning references existing micro-partitions; storage grows only as the clone diverges." },
      { kind:"single", text:"Where do consumers discover publicly available third-party datasets?", options:[
        {t:"Snowflake Marketplace", c:true},{t:"A private Data Exchange", c:false},{t:"Trust Center", c:false},{t:"Snowsight Worksheets", c:false} ],
        explanation:"The Snowflake Marketplace publishes public data products through listings." },
      { kind:"single", text:"What is a 'listing' in Snowflake?", options:[
        {t:"A structured way to publish and share a data product", c:true},
        {t:"A log of executed queries", c:false},
        {t:"A resource monitor report", c:false},
        {t:"A type of role", c:false} ],
        explanation:"Listings package data products for sharing via the Marketplace or organizationally." },
      { kind:"single", text:"What enables governed joint analysis on combined datasets without exposing raw data to either party?", options:[
        {t:"Data Clean Room", c:true},{t:"Reader account", c:false},{t:"Materialized view", c:false},{t:"Directory table", c:false} ],
        explanation:"Data clean rooms allow collaborative analysis without revealing the underlying rows." },
      { kind:"single", text:"In data sharing, the account that publishes data is the ____ and the account that accesses it is the ____.", options:[
        {t:"provider; consumer", c:true},
        {t:"consumer; provider", c:false},
        {t:"owner; reader", c:false},
        {t:"admin; guest", c:false} ],
        explanation:"Providers share data; consumers access shared data." },
      { kind:"single", text:"What is a Share object?", options:[
        {t:"A named object that encapsulates the grants needed to share database objects with other accounts", c:true},
        {t:"A copy of a database sent to another account", c:false},
        {t:"A type of virtual warehouse", c:false},
        {t:"A scheduled export job", c:false} ],
        explanation:"A share bundles the database, schema and object grants that define what a consumer can access." },
      { kind:"single", text:"To protect underlying table structure/logic when sharing, providers typically share:", options:[
        {t:"Secure views (and secure UDFs)", c:true},
        {t:"Raw base tables only", c:false},
        {t:"Temporary tables", c:false},
        {t:"Materialized views only", c:false} ],
        explanation:"Secure views/UDFs hide definitions and restrict what consumers can infer." },
      { kind:"single", text:"Time Travel allows you to:", options:[
        {t:"Query, clone, or restore data as it existed at a point in the past", c:true},
        {t:"Predict future data", c:false},
        {t:"Speed up queries", c:false},
        {t:"Share data across regions", c:false} ],
        explanation:"Time Travel accesses historical data within the retention window (AT/BEFORE, UNDROP)." },
      { kind:"single", text:"The maximum Time Travel retention for permanent tables in Enterprise Edition is:", options:[
        {t:"90 days", c:true},{t:"1 day", c:false},{t:"7 days", c:false},{t:"365 days", c:false} ],
        explanation:"Enterprise allows up to 90 days of Time Travel; Standard is limited to 1 day." },
      { kind:"single", text:"Which command restores a dropped table (within Time Travel)?", options:[
        {t:"UNDROP TABLE", c:true},{t:"RESTORE TABLE", c:false},{t:"RECOVER TABLE", c:false},{t:"COPY INTO", c:false} ],
        explanation:"UNDROP TABLE recovers a dropped table while it is still within retention." },
      { kind:"single", text:"Fail-safe data can be recovered by:", options:[
        {t:"Snowflake support only (not self-service)", c:true},
        {t:"Any user with SELECT", c:false},
        {t:"ACCOUNTADMIN via SQL", c:false},
        {t:"Cloning", c:false} ],
        explanation:"Fail-safe is a last-resort recovery performed by Snowflake, not by users." },
      { kind:"single", text:"Which objects can be cloned with zero-copy cloning?", options:[
        {t:"Databases, schemas, and tables", c:true},
        {t:"Only tables", c:false},
        {t:"Only warehouses", c:false},
        {t:"Users and roles", c:false} ],
        explanation:"You can clone databases, schemas, tables (and some other objects); clones share micro-partitions initially." },
      { kind:"single", text:"After cloning a table, if you update rows in the clone:", options:[
        {t:"New micro-partitions are created only for the changed data", c:true},
        {t:"The original table is also modified", c:false},
        {t:"The whole table is physically copied", c:false},
        {t:"The clone is dropped", c:false} ],
        explanation:"Clones diverge via copy-on-write; only changed data consumes new storage." },
      { kind:"single", text:"Which feature copies account objects to another region/cloud for disaster recovery?", options:[
        {t:"Replication and failover", c:true},
        {t:"Time Travel", c:false},
        {t:"Cloning", c:false},
        {t:"Result cache", c:false} ],
        explanation:"Account/database replication with failover supports business continuity across regions/clouds." },
      { kind:"single", text:"Client Redirect is used to:", options:[
        {t:"Redirect client connections to a failover account during an outage", c:true},
        {t:"Route queries to the fastest warehouse", c:false},
        {t:"Cache results", c:false},
        {t:"Mask columns", c:false} ],
        explanation:"Client Redirect uses a connection URL that can be pointed to the secondary account on failover." },
      { kind:"single", text:"A direct share is best suited for:", options:[
        {t:"Sharing with a known, specific Snowflake account in the same region", c:true},
        {t:"Publishing publicly to anyone", c:false},
        {t:"Sharing across regions automatically", c:false},
        {t:"Sharing with non-Snowflake users without a reader account", c:false} ],
        explanation:"Direct shares target specific accounts (same region); cross-region needs replication or listings." },
      { kind:"single", text:"Reader accounts are useful when:", options:[
        {t:"A consumer is not an existing Snowflake customer", c:true},
        {t:"You want the consumer to pay for compute", c:false},
        {t:"You need to copy data to the consumer", c:false},
        {t:"You are sharing within your own account", c:false} ],
        explanation:"Reader accounts let non-Snowflake parties consume shares, funded and managed by the provider." },
      { kind:"single", text:"The Snowflake Marketplace is used to:", options:[
        {t:"Discover and access third-party data products and services via listings", c:true},
        {t:"Buy virtual warehouses", c:false},
        {t:"Store backups", c:false},
        {t:"Manage roles", c:false} ],
        explanation:"The Marketplace publishes data products (listings) that consumers can discover and access." },
      { kind:"single", text:"A private, controlled way to share listings with a select set of accounts is a:", options:[
        {t:"Data Exchange", c:true},
        {t:"Public Marketplace listing", c:false},
        {t:"Reader account", c:false},
        {t:"Resource monitor", c:false} ],
        explanation:"A Data Exchange is a private hub for sharing among a chosen group of accounts." },
      { kind:"single", text:"The Snowflake Native App Framework lets providers:", options:[
        {t:"Package and distribute applications (logic + data) to consumers via listings", c:true},
        {t:"Only share raw tables", c:false},
        {t:"Replace virtual warehouses", c:false},
        {t:"Run external functions", c:false} ],
        explanation:"Native Apps let providers ship application logic and data that runs in the consumer's account." },
      { kind:"single", text:"When a consumer queries shared data, whose storage holds the data?", options:[
        {t:"The provider's — data is not copied to the consumer", c:true},
        {t:"The consumer's, after a nightly copy", c:false},
        {t:"Snowflake's shared pool", c:false},
        {t:"Both accounts equally", c:false} ],
        explanation:"Secure Data Sharing keeps a single copy in the provider's account; consumers read it live." },
      { kind:"single", text:"Setting DATA_RETENTION_TIME_IN_DAYS = 0 on a table means:", options:[
        {t:"No Time Travel is available for that table", c:true},
        {t:"Unlimited Time Travel", c:false},
        {t:"Fail-safe is disabled account-wide", c:false},
        {t:"The table is transient", c:false} ],
        explanation:"A retention of 0 disables Time Travel for that object." },
      { kind:"single", text:"Which continuous data protection features work together to recover data over time?", options:[
        {t:"Time Travel then Fail-safe", c:true},
        {t:"Fail-safe then Time Travel", c:false},
        {t:"Cloning then result cache", c:false},
        {t:"Replication then masking", c:false} ],
        explanation:"Data first stays in Time Travel (self-service), then moves to Fail-safe (Snowflake-only) for permanent tables." },
      { kind:"single", text:"Which best describes what a consumer receives from a standard direct share?", options:[
        {t:"Read-only access to the shared objects (they cannot modify the provider's data)", c:true},
        {t:"A full editable copy of the data", c:false},
        {t:"Ownership of the shared database", c:false},
        {t:"The provider's virtual warehouse", c:false} ],
        explanation:"Consumers get read-only access to shared objects; they cannot change the provider's data." }
    ]}
];
quizzes.forEach(function (quiz) {
  if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) window.QUIZZES.push(quiz);
});
})();
