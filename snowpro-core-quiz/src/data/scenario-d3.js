window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "scenario-d3",
  order: 303,
  group: "More challenging scenario-based questions (with code snippets)",
  kicker: "Scenario · Domain 3",
  title: "Performance Concepts",
  topic: "Pruning, Query Profile, spilling, scale up vs. out, caching, clustering, SOS/QAS and cost tuning. 50 questions.",
  questions: [
    { kind:"single", text:"What is the primary purpose of micro-partition pruning?", options:[
      {t:"Compressing storage", c:false},
      {t:"Scanning only relevant micro-partitions, reducing I/O", c:true},
      {t:"Caching results", c:false},
      {t:"Managing roles", c:false} ],
      explanation:"Pruning reduces the partitions scanned and therefore I/O." },
    { kind:"single", text:"Which metric in the Query Profile indicates poor pruning?", options:[
      {t:"\u201cPartitions scanned\u201d \u2248 \u201cPartitions total\u201d", c:true},
      {t:"A high result-cache share", c:false},
      {t:"Low bytes spilled", c:false},
      {t:"Short compilation time", c:false} ],
      explanation:"scanned ≈ total means almost no pruning." },
    { kind:"single", text:"\u201cSpilling to local/remote storage\u201d in the Query Profile usually means:", options:[
      {t:"Optimal behavior", c:false},
      {t:"The warehouse's memory is insufficient → warehouse too small", c:true},
      {t:"The result cache is active", c:false},
      {t:"Clustering is needed for sharing", c:false} ],
      explanation:"Spilling means the warehouse ran out of memory." },
    { kind:"single", text:"First sensible measure for heavy remote spilling on a single complex query?", options:[
      {t:"Shrink the warehouse", c:false},
      {t:"Enlarge the warehouse (more RAM/compute)", c:true},
      {t:"Increase multi-cluster count", c:false},
      {t:"Shorten auto-suspend", c:false} ],
      explanation:"Scale up." },
    { kind:"single", text:"When does a multi-cluster warehouse (scale-out) help?", options:[
      {t:"With a single very large query", c:false},
      {t:"With high concurrency (many simultaneous queries/users)", c:true},
      {t:"With storage bottlenecks", c:false},
      {t:"To reduce compile time", c:false} ],
      explanation:"Concurrency → scale out." },
    { kind:"single", text:"When does a larger warehouse size (scale-up) help?", options:[
      {t:"With many small, concurrent queries", c:false},
      {t:"With individual complex, compute/scan-intensive queries", c:true},
      {t:"Only for storage", c:false},
      {t:"Only for data sharing", c:false} ],
      explanation:"Complex single queries → scale up." },
    { kind:"multi", choose:2, text:"Which caches positively influence performance?", options:[
      {t:"Result cache (24 h)", c:true},
      {t:"Warehouse local disk (SSD) cache", c:true},
      {t:"External stage cache", c:false},
      {t:"UI cache", c:false} ],
      explanation:"Result cache and SSD cache." },
    { kind:"single", text:"What is the effect of a well-chosen clustering key on a very large table?", options:[
      {t:"Better pruning efficiency for filter/range queries on the key", c:true},
      {t:"Less storage", c:false},
      {t:"Faster logins", c:false},
      {t:"More concurrency", c:false} ],
      explanation:"Better pruning when filtering on the key." },
    { kind:"single", text:"When is an explicit clustering key typically NOT necessary?", options:[
      {t:"Multi-TB tables with selective filters", c:false},
      {t:"Small to medium tables with naturally well-sorted loads", c:true},
      {t:"Tables with poor natural ordering", c:false},
      {t:"Tables with frequent point lookups", c:false} ],
      explanation:"Small or naturally sorted tables don't need it." },
    { kind:"single", text:"Which function shows the clustering quality of a table?", code:"SELECT SYSTEM$CLUSTERING_INFORMATION('sales', '(event_date)');", options:[
      {t:"SYSTEM$CLUSTERING_INFORMATION", c:true},{t:"SHOW TABLES", c:false},{t:"QUERY_HISTORY", c:false},{t:"SYSTEM$WAIT", c:false} ],
      explanation:"SYSTEM$CLUSTERING_INFORMATION reports clustering depth/quality." },
    { kind:"single", text:"The Search Optimization Service is especially effective for:", options:[
      {t:"Full table scans", c:false},
      {t:"Highly selective point/equality lookups on large tables", c:true},
      {t:"Large aggregations", c:false},
      {t:"Data sharing", c:false} ],
      explanation:"Selective point lookups." },
    { kind:"single", text:"The Query Acceleration Service (QAS) mainly addresses:", options:[
      {t:"Queries with large, unevenly distributed scans / outlier workloads", c:true},
      {t:"Login performance", c:false},
      {t:"Storage compression", c:false},
      {t:"Role inheritance", c:false} ],
      explanation:"Outlier, scan-heavy workloads." },
    { kind:"single", text:"What does \u201cCompilation Time\u201d in the Query Profile measure?", options:[
      {t:"Network latency", c:false},
      {t:"Time to plan/optimize the query in the cloud services layer", c:true},
      {t:"Pure execution time", c:false},
      {t:"Cache build-up", c:false} ],
      explanation:"Planning/optimization time in cloud services." },
    { kind:"single", text:"A dashboard runs the same query every 5 minutes; data changes hourly. What optimizes cost?", options:[
      {t:"Using the result cache (identical query → hit until data changes)", c:true},
      {t:"A larger warehouse", c:false},
      {t:"More clusters", c:false},
      {t:"A clustering key", c:false} ],
      explanation:"The result cache saves compute between data changes." },
    { kind:"single", text:"Which statement about the local SSD cache is true?", options:[
      {t:"It survives suspend", c:false},
      {t:"It is cleared on suspend; a \u201cwarm\u201d cache speeds up repeated scans", c:true},
      {t:"It persists in storage", c:false},
      {t:"It is role-dependent", c:false} ],
      explanation:"The SSD cache is cleared on suspend." },
    { kind:"multi", choose:2, text:"Which measures sensibly reduce compute cost?", options:[
      {t:"Aggressive AUTO_SUSPEND", c:true},
      {t:"Disabling AUTO_RESUME and keeping the warehouse running permanently", c:false},
      {t:"Right-sizing the warehouse", c:true},
      {t:"Never using the result cache", c:false} ],
      explanation:"Auto-suspend plus right-sizing." },
    { kind:"single", text:"A warehouse shows queue times because of too many parallel users. Best measure?", options:[
      {t:"Increase the size", c:false},
      {t:"Enable/increase multi-cluster (scale-out)", c:true},
      {t:"Extend auto-suspend", c:false},
      {t:"Set a clustering key", c:false} ],
      explanation:"Multi-cluster for concurrency." },
    { kind:"single", text:"Which of the following does NOT directly increase query performance?", options:[
      {t:"Better pruning", c:false},{t:"A larger warehouse", c:false},{t:"Buying more storage", c:true},{t:"Result/SSD cache", c:false} ],
      explanation:"More storage does not directly help performance." },
    { kind:"single", text:"What does this statement do?", code:"ALTER TABLE t CLUSTER BY (region, order_date);", options:[
      {t:"Defines a clustering key; Automatic Clustering reorganizes in the background", c:true},
      {t:"Creates an index", c:false},
      {t:"Physically partitions permanently", c:false},
      {t:"Deletes micro-partitions", c:false} ],
      explanation:"It defines the clustering key." },
    { kind:"single", text:"How is Automatic Clustering billed?", options:[
      {t:"Free", c:false},{t:"Serverless compute (consumption-based)", c:true},{t:"Via the user warehouse", c:false},{t:"Per query", c:false} ],
      explanation:"Serverless compute." },
    { kind:"single", text:"Which query benefits most from a clustering key on event_date?", options:[
      {t:"SELECT * FROM t", c:false},
      {t:"SELECT ... WHERE event_date BETWEEN ... AND ...", c:true},
      {t:"SELECT COUNT(*) FROM t", c:false},
      {t:"INSERT INTO t ...", c:false} ],
      explanation:"Range filters on the clustering key." },
    { kind:"single", text:"What does the \u201cMost Expensive Nodes\u201d section in the Query Profile show?", options:[
      {t:"Storage costs", c:false},
      {t:"The most resource-intensive operators of the query", c:true},
      {t:"Role privileges", c:false},
      {t:"Login history", c:false} ],
      explanation:"The most expensive operators." },
    { kind:"single", text:"What typically causes an \u201cexploding join\u201d / Cartesian product?", options:[
      {t:"A missing or too broad join condition", c:true},
      {t:"Too small a warehouse", c:false},
      {t:"The result cache", c:false},
      {t:"Clustering", c:false} ],
      explanation:"A missing join condition." },
    { kind:"multi", choose:2, text:"Which are signs in the Query Profile that optimization is needed?", options:[
      {t:"A high share of \u201cbytes spilled to remote storage\u201d", c:true},
      {t:"Partitions scanned \u2248 total (poor pruning)", c:true},
      {t:"A high result-cache hit rate", c:false},
      {t:"Low execution time", c:false} ],
      explanation:"Spilling and poor pruning." },
    { kind:"single", text:"Which warehouse parameter defines the scaling policy of a multi-cluster warehouse?", options:[
      {t:"SCALING_POLICY (STANDARD/ECONOMY)", c:true},{t:"AUTO_SUSPEND", c:false},{t:"MAX_FILE_SIZE", c:false},{t:"STATEMENT_TIMEOUT", c:false} ],
      explanation:"SCALING_POLICY." },
    { kind:"single", text:"Compared to STANDARD, what does SCALING_POLICY = ECONOMY do?", options:[
      {t:"Scales up faster", c:false},
      {t:"Starts new clusters more conservatively → saves credits, possibly more queuing", c:true},
      {t:"Disables multi-cluster", c:false},
      {t:"Increases storage", c:false} ],
      explanation:"ECONOMY is conservative, saving credits at the cost of queuing." },
    { kind:"single", text:"A report accidentally scans SELECT * across 200 columns. Best optimization?", options:[
      {t:"Select only the needed columns (exploit columnar pruning)", c:true},
      {t:"Enlarge the warehouse", c:false},
      {t:"Multi-cluster", c:false},
      {t:"Auto-suspend", c:false} ],
      explanation:"Select only needed columns." },
    { kind:"single", text:"Why is Snowflake's columnar storage relevant to performance?", options:[
      {t:"Only required columns are read → less I/O", c:true},
      {t:"It increases concurrency", c:false},
      {t:"It replaces roles", c:false},
      {t:"It disables caching", c:false} ],
      explanation:"Columnar storage reduces I/O." },
    { kind:"single", text:"Which statement about the result cache and warehouses is correct?", options:[
      {t:"The result cache requires an active warehouse", c:false},
      {t:"A full result-cache hit requires no active warehouse", c:true},
      {t:"The result cache lives in the SSD cache", c:false},
      {t:"The result cache is per user", c:false} ],
      explanation:"A full hit needs no warehouse." },
    { kind:"single", text:"How long does a multi-cluster cluster typically persist after load drops, before scaling down?", options:[
      {t:"Immediately", c:false},
      {t:"After a short trailing period according to the scaling policy", c:true},
      {t:"24 h", c:false},
      {t:"Never", c:false} ],
      explanation:"A short trailing period per the scaling policy." },
    { kind:"single", text:"Which figure in the profile points to network/remote-I/O heavy steps?", options:[
      {t:"\u201cRemote Disk I/O\u201d / remote scan", c:true},{t:"Compilation time", c:false},{t:"Number of roles", c:false},{t:"Credits", c:false} ],
      explanation:"Remote I/O." },
    { kind:"single", text:"A cluster key with very high cardinality (e.g. a UUID) is usually:", options:[
      {t:"Ideal", c:false},
      {t:"Unfavorable \u2013 expensive reclustering, little pruning benefit", c:true},
      {t:"Free", c:false},
      {t:"Necessary", c:false} ],
      explanation:"High cardinality is a poor clustering key." },
    { kind:"single", text:"Which action invalidates a query's result cache?", options:[
      {t:"Execution by a different user", c:false},
      {t:"A change to the underlying table data", c:true},
      {t:"Switching warehouse", c:false},
      {t:"A new tag", c:false} ],
      explanation:"Data changes invalidate it." },
    { kind:"single", text:"Materialized views improve performance by:", options:[
      {t:"Persisting precomputed results and maintaining them automatically", c:true},
      {t:"Caching roles", c:false},
      {t:"Reducing storage", c:false},
      {t:"Speeding up logins", c:false} ],
      explanation:"Persisted, auto-maintained results." },
    { kind:"multi", choose:2, text:"When is a materialized view sensible?", options:[
      {t:"An expensive, frequently recurring aggregation on slowly changing data", c:true},
      {t:"Frequently changed tables with rare reads", c:false},
      {t:"Accelerating expensive sub-queries/projections", c:true},
      {t:"To accelerate DML", c:false} ],
      explanation:"Expensive recurring aggregations and sub-queries." },
    { kind:"single", text:"What does STATEMENT_TIMEOUT_IN_SECONDS do?", options:[
      {t:"Limits the maximum runtime of a query", c:true},
      {t:"Controls auto-suspend", c:false},
      {t:"Sets cache duration", c:false},
      {t:"Limits storage", c:false} ],
      explanation:"It caps query runtime." },
    { kind:"single", text:"Which statement about warehouse billing is true?", options:[
      {t:"Per query", c:false},
      {t:"Per second, with a 60-second minimum charge on start", c:true},
      {t:"Flat per day", c:false},
      {t:"Per user", c:false} ],
      explanation:"Per second with a 60 s minimum." },
    { kind:"single", text:"A warehouse starts, runs 20 s, then suspends. Billing?", options:[
      {t:"20 s", c:false},{t:"At least 60 s", c:true},{t:"0", c:false},{t:"1 hour", c:false} ],
      explanation:"Minimum 60 s." },
    { kind:"single", text:"Which approach reduces unnecessary compute for sporadic ad-hoc queries?", options:[
      {t:"Short AUTO_SUSPEND plus AUTO_RESUME on", c:true},
      {t:"Continuous operation", c:false},
      {t:"Max multi-cluster", c:false},
      {t:"The largest warehouse", c:false} ],
      explanation:"Short auto-suspend with auto-resume." },
    { kind:"single", text:"The Query Profile shows high \u201cCompilation Time\u201d for a very complex query with many joins. Likely cause?", options:[
      {t:"Too small a warehouse", c:false},
      {t:"Expensive plan optimization in cloud services (many objects/joins)", c:true},
      {t:"Storage full", c:false},
      {t:"The result cache", c:false} ],
      explanation:"Expensive optimization for complex plans." },
    { kind:"single", text:"Which option scales concurrency automatically with load?", options:[
      {t:"Multi-cluster warehouse (auto-scale)", c:true},
      {t:"A larger single-cluster warehouse", c:false},
      {t:"A clustering key", c:false},
      {t:"Search Optimization", c:false} ],
      explanation:"Multi-cluster auto-scale." },
    { kind:"single", text:"Why can an oversized warehouse be wasteful?", options:[
      {t:"It increases storage", c:false},
      {t:"It consumes more credits/time without small queries benefiting", c:true},
      {t:"It disables the cache", c:false},
      {t:"It blocks sharing", c:false} ],
      explanation:"It wastes credits." },
    { kind:"single", text:"How is Search Optimization billed?", options:[
      {t:"Serverless compute plus additional storage for the search access structure", c:true},
      {t:"Free", c:false},
      {t:"Via the user warehouse", c:false},
      {t:"Per login", c:false} ],
      explanation:"Serverless compute plus storage." },
    { kind:"single", text:"Why can this filter hinder pruning?", code:"SELECT * FROM t WHERE UPPER(col) = 'X';", options:[
      {t:"Functions on the column make min/max metadata harder to use", c:true},
      {t:"UPPER does not exist", c:false},
      {t:"It increases storage", c:false},
      {t:"It affects roles", c:false} ],
      explanation:"A function on the column hinders min/max pruning." },
    { kind:"single", text:"Best order of operations for diagnosing a slow query?", options:[
      {t:"Immediately enlarge the warehouse", c:false},
      {t:"Analyze the Query Profile (pruning, spilling, expensive operators) → optimize deliberately", c:true},
      {t:"Raise multi-cluster", c:false},
      {t:"Create a new warehouse", c:false} ],
      explanation:"Query Profile first." },
    { kind:"single", text:"Is \u201cdata spilling to remote storage\u201d worse than \u201cto local storage\u201d?", options:[
      {t:"No, the same", c:false},
      {t:"Yes \u2013 remote spilling is slower (network) and a clearer sign of an undersized warehouse", c:true},
      {t:"Remote is faster", c:false},
      {t:"Both are irrelevant", c:false} ],
      explanation:"Remote spilling is worse." },
    { kind:"single", text:"Which view provides historical query performance for analysis?", options:[
      {t:"ACCOUNT_USAGE.QUERY_HISTORY / INFORMATION_SCHEMA.QUERY_HISTORY", c:true},
      {t:"LOGIN_HISTORY", c:false},
      {t:"STORAGE_USAGE", c:false},
      {t:"GRANTS_TO_ROLES", c:false} ],
      explanation:"QUERY_HISTORY." },
    { kind:"single", text:"A cluster key should ideally contain columns that:", options:[
      {t:"Are frequently used in filters/joins and have moderate cardinality", c:true},
      {t:"Never appear in queries", c:false},
      {t:"Are UUIDs", c:false},
      {t:"Only appear in SELECT *", c:false} ],
      explanation:"Frequently filtered, moderate cardinality." },
    { kind:"multi", choose:2, text:"Which two are serverless and affect performance/cost separately from the user warehouse?", options:[
      {t:"Automatic Clustering", c:true},
      {t:"A standard query on a user warehouse", c:false},
      {t:"Search Optimization maintenance", c:true},
      {t:"SnowSQL", c:false} ],
      explanation:"Automatic Clustering and Search Optimization maintenance." },
    { kind:"single", text:"A query runs fast on the second call with no data change, same warehouse. Most likely cause?", options:[
      {t:"Clustering", c:false},{t:"Result cache / warm SSD cache", c:true},{t:"A larger warehouse", c:false},{t:"A new role", c:false} ],
      explanation:"Result cache or a warm SSD cache." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
