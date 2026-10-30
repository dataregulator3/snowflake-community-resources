window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "scenario-d6",
  order: 306,
  group: "More challenging scenario-based questions (with code snippets)",
  kicker: "Scenario · Domain 6",
  title: "Data Protection & Data Sharing",
  topic: "Time Travel, Fail-safe, cloning, shares, reader accounts, replication and Marketplace listings. 50 questions.",
  questions: [
    { kind:"single", text:"Time Travel enables:", options:[
      {t:"Access to historical data/object states within a retention window", c:true},
      {t:"Encryption", c:false},{t:"Roles", c:false},{t:"Compression", c:false} ],
      explanation:"Access to historical states." },
    { kind:"single", text:"Default Time Travel retention for permanent objects (Standard Edition):", options:[
      {t:"0 days", c:false},{t:"1 day", c:true},{t:"7 days", c:false},{t:"90 days", c:false} ],
      explanation:"1 day by default." },
    { kind:"single", text:"Maximum Time Travel retention in Enterprise+ (permanent objects):", options:[
      {t:"1 day", c:false},{t:"7 days", c:false},{t:"90 days", c:true},{t:"Unlimited", c:false} ],
      explanation:"Up to 90 days." },
    { kind:"single", text:"What does this query return?", code:"SELECT * FROM t AT(OFFSET => -3600);", options:[
      {t:"The table as it was one hour ago", c:true},
      {t:"It deletes rows", c:false},
      {t:"It clones", c:false},
      {t:"It encrypts", c:false} ],
      explanation:"OFFSET is in seconds, so -3600 is one hour ago." },
    { kind:"multi", choose:2, text:"Which are Time Travel clauses?", options:[
      {t:"AT(TIMESTAMP => ...)", c:true},
      {t:"BEFORE(STATEMENT => '<query_id>')", c:true},
      {t:"CLUSTER BY", c:false},
      {t:"PATTERN", c:false} ],
      explanation:"AT and BEFORE." },
    { kind:"single", text:"What does UNDROP TABLE t; do?", options:[
      {t:"Restores a dropped table within the retention period", c:true},
      {t:"Deletes permanently", c:false},
      {t:"Clones", c:false},
      {t:"Purges", c:false} ],
      explanation:"UNDROP restores within retention." },
    { kind:"single", text:"Fail-safe is:", options:[
      {t:"A 7-day period after Time Travel for recovery by Snowflake only", c:true},
      {t:"Freely queryable by the user", c:false},
      {t:"90 days", c:false},
      {t:"Optional to enable", c:false} ],
      explanation:"7 days, Snowflake-only recovery." },
    { kind:"single", text:"Correct order of the data lifecycle:", options:[
      {t:"Active → Time Travel → Fail-safe → permanently removed", c:true},
      {t:"Fail-safe → Time Travel → Active", c:false},
      {t:"Time Travel → Active → Fail-safe", c:false},
      {t:"Active → Fail-safe → Time Travel", c:false} ],
      explanation:"Active → Time Travel → Fail-safe → gone." },
    { kind:"single", text:"Do transient/temporary tables have Fail-safe?", options:[
      {t:"No", c:true},{t:"Yes, 7 days", c:false},{t:"Yes, 90 days", c:false},{t:"Yes, 1 day", c:false} ],
      explanation:"No Fail-safe for transient/temporary tables." },
    { kind:"single", text:"Can a user query/restore Fail-safe data themselves?", options:[
      {t:"No, only Snowflake support", c:true},
      {t:"Yes, via Time Travel", c:false},
      {t:"Yes, via UNDROP", c:false},
      {t:"Yes, via CLONE", c:false} ],
      explanation:"Support only." },
    { kind:"single", text:"What does this create?", code:"CREATE TABLE t_clone CLONE t;", options:[
      {t:"A zero-copy copy (metadata reference to the micro-partitions)", c:true},
      {t:"A full physical copy", c:false},
      {t:"A view", c:false},
      {t:"A stream", c:false} ],
      explanation:"Zero-copy clone." },
    { kind:"single", text:"After cloning a table and modifying the clone:", options:[
      {t:"Only changed micro-partitions create new storage cost", c:true},
      {t:"Storage doubles immediately", c:false},
      {t:"The original changes too", c:false},
      {t:"The clone is read-only", c:false} ],
      explanation:"Copy-on-write cost." },
    { kind:"single", text:"Can you clone using a Time Travel clause?", code:"CREATE TABLE t_clone CLONE t AT(TIMESTAMP => '2026-07-01 08:00:00'::timestamp_tz);", options:[
      {t:"Yes \u2013 cloning a historical state via Time Travel", c:true},
      {t:"No", c:false},
      {t:"Only with Fail-safe", c:false},
      {t:"Only views", c:false} ],
      explanation:"Clones can be taken at a historical point." },
    { kind:"single", text:"What is cloned along with a database?", options:[
      {t:"Contained schemas/tables/views etc. (structure plus data references)", c:true},
      {t:"Only the name", c:false},
      {t:"Only roles", c:false},
      {t:"Only warehouses", c:false} ],
      explanation:"The contained objects come along." },
    { kind:"multi", choose:3, text:"Which objects are NOT automatically cloned or behave specially during CLONE?", options:[
      {t:"External named stages (reference, no data copy)", c:true},
      {t:"Internal stages are generally not cloned", c:true},
      {t:"All micro-partitions are physically copied", c:false},
      {t:"Pipe behavior can differ", c:true} ],
      explanation:"Stages and pipes are special cases; micro-partitions are never physically copied." },
    { kind:"single", text:"Does Secure Data Sharing transfer physical data?", options:[
      {t:"No \u2013 access without a copy (live data)", c:true},
      {t:"Yes, a full copy", c:false},
      {t:"Only incrementally", c:false},
      {t:"Only via FTP", c:false} ],
      explanation:"No copying." },
    { kind:"single", text:"Who pays compute when querying shared data?", options:[
      {t:"The consumer (their own warehouse)", c:true},{t:"The provider", c:false},{t:"Snowflake", c:false},{t:"Both 50/50", c:false} ],
      explanation:"The consumer." },
    { kind:"single", text:"A share contains:", options:[
      {t:"Database/schema/object grants for consumers", c:true},
      {t:"Warehouses", c:false},
      {t:"The consumer's roles", c:false},
      {t:"Network rules", c:false} ],
      explanation:"Grants for consumers." },
    { kind:"single", text:"For consumers without their own Snowflake account, the provider uses:", options:[
      {t:"A reader account", c:true},{t:"A materialized view", c:false},{t:"An external table", c:false},{t:"A task", c:false} ],
      explanation:"Reader account." },
    { kind:"single", text:"Reader accounts are managed/paid for by:", options:[
      {t:"The provider", c:true},{t:"The consumer", c:false},{t:"Snowflake, free of charge", c:false},{t:"The consumer's ORGADMIN", c:false} ],
      explanation:"The provider." },
    { kind:"single", text:"Can consumers modify shared objects with DML?", options:[
      {t:"No \u2013 read-only", c:true},{t:"Yes, fully", c:false},{t:"DELETE only", c:false},{t:"INSERT only", c:false} ],
      explanation:"Read-only." },
    { kind:"single", text:"Why use secure views/secure UDFs when sharing?", options:[
      {t:"They prevent insight into the definition/unauthorized data", c:true},
      {t:"They are faster", c:false},
      {t:"They are cheaper", c:false},
      {t:"Roles", c:false} ],
      explanation:"They protect definitions and detail." },
    { kind:"single", text:"Data sharing across different regions/clouds requires:", options:[
      {t:"Database replication of the share database into the target region", c:true},
      {t:"Nothing, it works directly", c:false},
      {t:"A reader account", c:false},
      {t:"An external table", c:false} ],
      explanation:"Replication is needed." },
    { kind:"single", text:"The Snowflake Marketplace is technically based on:", options:[
      {t:"Secure Data Sharing", c:true},{t:"FTP copies", c:false},{t:"External tables only", c:false},{t:"Email", c:false} ],
      explanation:"Secure Data Sharing." },
    { kind:"multi", choose:3, text:"Which sharing approaches exist?", options:[
      {t:"Direct share (account to account)", c:true},
      {t:"Reader account", c:true},
      {t:"Marketplace / Data Exchange (listings)", c:true},
      {t:"SMTP share", c:false} ],
      explanation:"Direct shares, reader accounts and listings." },
    { kind:"single", text:"Database replication serves:", options:[
      {t:"Availability/DR and sharing across regions/clouds", c:true},
      {t:"Compression", c:false},{t:"Roles", c:false},{t:"Caching", c:false} ],
      explanation:"DR and cross-region sharing." },
    { kind:"single", text:"Failover/failback groups (replication groups) enable:", options:[
      {t:"Coordinated failover of several objects to a secondary account", c:true},
      {t:"Time Travel", c:false},{t:"Masking", c:false},{t:"Cloning", c:false} ],
      explanation:"Coordinated failover." },
    { kind:"single", text:"If you set a table's retention to 0 days:", options:[
      {t:"No Time Travel for that table", c:true},
      {t:"Fail-safe is dropped too", c:false},
      {t:"An error", c:false},
      {t:"90 days", c:false} ],
      explanation:"Time Travel is disabled for it." },
    { kind:"single", text:"DATA_RETENTION_TIME_IN_DAYS can be set at which level?", options:[
      {t:"Account/database/schema/table (inherited, overridable)", c:true},
      {t:"Account only", c:false},
      {t:"Table only", c:false},
      {t:"Not at all", c:false} ],
      explanation:"It cascades from account down to table." },
    { kind:"single", text:"A record was deleted 2 hours ago by a wrong WHERE clause (retention 1 day). How do you recover it?", code:"INSERT INTO t\nSELECT * FROM t BEFORE(STATEMENT => '<delete_query_id>')\nWHERE id = 42;", options:[
      {t:"Re-insert from BEFORE(STATEMENT => ...) or AT(OFFSET => ...)", c:true},
      {t:"Only Snowflake support", c:false},
      {t:"Impossible", c:false},
      {t:"UNDROP DATABASE", c:false} ],
      explanation:"Time Travel with BEFORE(STATEMENT) or AT(OFFSET)." },
    { kind:"single", text:"Fail-safe for permanent tables lasts:", options:[
      {t:"7 days (not configurable)", c:true},{t:"1 day", c:false},{t:"90 days", c:false},{t:"0", c:false} ],
      explanation:"A fixed 7 days." },
    { kind:"single", text:"Do Time Travel and Fail-safe incur storage costs?", options:[
      {t:"Yes \u2013 historical micro-partitions occupy additional storage", c:true},
      {t:"No, free", c:false},
      {t:"Compute only", c:false},
      {t:"Only in VPS", c:false} ],
      explanation:"Yes, historical data occupies storage." },
    { kind:"single", text:"Does a clone inherit the source object's current data on creation?", options:[
      {t:"Yes, as of the moment of the CLONE", c:true},
      {t:"No, it is empty", c:false},
      {t:"Structure only", c:false},
      {t:"Roles only", c:false} ],
      explanation:"It reflects the data at clone time." },
    { kind:"single", text:"Can you clone an entire database?", options:[
      {t:"Yes", c:true},{t:"No, tables only", c:false},{t:"Schemas only", c:false},{t:"Views only", c:false} ],
      explanation:"Databases can be cloned." },
    { kind:"single", text:"What does SHOW SHARES; display?", options:[
      {t:"Inbound and outbound shares", c:true},{t:"Roles", c:false},{t:"Warehouses", c:false},{t:"Streams", c:false} ],
      explanation:"Inbound/outbound shares." },
    { kind:"single", text:"A provider adds a new table to an existing share. The consumer:", options:[
      {t:"Sees the new data (the share's grants were extended)", c:true},
      {t:"Must re-import (a copy)", c:false},
      {t:"Sees nothing", c:false},
      {t:"Pays the provider's compute", c:false} ],
      explanation:"The consumer immediately sees it." },
    { kind:"single", text:"Cross-cloud auto-fulfillment in the Marketplace:", options:[
      {t:"Enables provisioning of listings across clouds/regions", c:true},
      {t:"Is FTP", c:false},{t:"Is AWS only", c:false},{t:"Is internal only", c:false} ],
      explanation:"It fulfills listings across clouds/regions." },
    { kind:"multi", choose:2, text:"Which statements about zero-copy cloning are true?", options:[
      {t:"Clones initially share the same micro-partitions as the source", c:true},
      {t:"Changes to the clone are independent (copy-on-write)", c:true},
      {t:"The clone is read-only", c:false},
      {t:"Cloning immediately copies all data physically", c:false} ],
      explanation:"Shared micro-partitions with copy-on-write." },
    { kind:"single", text:"What does this statement do?", code:"CREATE DATABASE d_clone CLONE d BEFORE(STATEMENT => '<id>');", options:[
      {t:"Clones the state before a specific statement (Time Travel)", c:true},
      {t:"Is invalid", c:false},
      {t:"Drops d", c:false},
      {t:"Clones roles", c:false} ],
      explanation:"A clone of the pre-statement state." },
    { kind:"single", text:"Why is cloning ideal for test/dev environments?", options:[
      {t:"Instant, cheap copies of large production data without storage duplication", c:true},
      {t:"It is encrypted", c:false},
      {t:"It speeds up logins", c:false},
      {t:"It creates roles", c:false} ],
      explanation:"Cheap, instant dev copies." },
    { kind:"single", text:"A consumer wants to join shared data with their own data:", options:[
      {t:"Possible \u2013 shared objects can be combined read-only with their own tables", c:true},
      {t:"Not possible", c:false},
      {t:"Only via a copy", c:false},
      {t:"Only via a reader account", c:false} ],
      explanation:"Joins with own data are supported." },
    { kind:"single", text:"What happens when a share grant is revoked?", options:[
      {t:"The consumer loses access to that object", c:true},
      {t:"Nothing", c:false},
      {t:"The consumer keeps a copy", c:false},
      {t:"The provider pays", c:false} ],
      explanation:"Access is lost immediately." },
    { kind:"single", text:"Maximum Time Travel on a transient table:", options:[
      {t:"0–1 day", c:true},{t:"90 days", c:false},{t:"7 days", c:false},{t:"Unlimited", c:false} ],
      explanation:"0 or 1 day." },
    { kind:"single", text:"AT(STATEMENT => '<query_id>') vs. BEFORE(STATEMENT => ...):", options:[
      {t:"AT = state including the statement; BEFORE = state immediately prior", c:true},
      {t:"Identical", c:false},
      {t:"BEFORE does not exist", c:false},
      {t:"AT deletes data", c:false} ],
      explanation:"AT includes the statement, BEFORE excludes it." },
    { kind:"single", text:"Which edition is required for longer Time Travel (>1 day, up to 90)?", options:[
      {t:"Enterprise or higher", c:true},{t:"Standard", c:false},{t:"All", c:false},{t:"VPS only", c:false} ],
      explanation:"Enterprise+." },
    { kind:"single", text:"A shared object always gives the consumer:", options:[
      {t:"Live, current data from the provider (no ETL/refresh)", c:true},
      {t:"Yesterday's snapshot", c:false},
      {t:"Metadata only", c:false},
      {t:"A daily copy", c:false} ],
      explanation:"Live data." },
    { kind:"multi", choose:3, text:"Which objects can a provider include in a share?", options:[
      {t:"Tables", c:true},
      {t:"Secure views", c:true},
      {t:"Secure UDFs", c:true},
      {t:"Warehouses", c:false} ],
      explanation:"Tables, secure views and secure UDFs — never compute." },
    { kind:"single", text:"Data retention of a clone:", options:[
      {t:"It inherits the parameter and can have its own Time Travel from the clone point onward", c:true},
      {t:"It never has Time Travel", c:false},
      {t:"It shares Fail-safe with the original", c:false},
      {t:"Always 90 days", c:false} ],
      explanation:"Its own Time Travel starts at the clone point." },
    { kind:"single", text:"A provider wants to offer a partner curated, private data (not public). Best Marketplace option?", options:[
      {t:"A private listing / Data Exchange", c:true},
      {t:"A public listing for everyone", c:false},
      {t:"Reader account only", c:false},
      {t:"An external table", c:false} ],
      explanation:"Private listing or Data Exchange." },
    { kind:"single", text:"An object was dropped 10 days ago (retention 7 days, Fail-safe 7). Can the user restore it?", options:[
      {t:"Not via UNDROP; possibly only through Snowflake support (Fail-safe) \u2013 Time Travel has expired", c:true},
      {t:"Simply UNDROP", c:false},
      {t:"Time Travel works", c:false},
      {t:"CLONE AT", c:false} ],
      explanation:"Time Travel expired; only Fail-safe via support remains." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
