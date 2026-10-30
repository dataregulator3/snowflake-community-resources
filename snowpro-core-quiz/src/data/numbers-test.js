window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "facts-key-figures",
  order: 403,
  group: "Facts",
  kicker: "Facts · Key Figures",
  title: "Key Figures Test",
  topic: "35 exam-style questions on the numbers and thresholds that matter: retentions, editions, billing, sizes and exam scoring.",
  questions: [
    { kind:"single", text:"How many architecture layers does Snowflake consist of?", options:[
      {t:"2", c:false},{t:"3", c:true},{t:"4", c:false},{t:"1", c:false} ],
      explanation:"Three: Storage, Compute (Query Processing) and Cloud Services." },
    { kind:"single", text:"What is the default Time Travel retention for permanent objects?", options:[
      {t:"0 days", c:false},{t:"1 day", c:true},{t:"7 days", c:false},{t:"90 days", c:false} ],
      explanation:"DATA_RETENTION_TIME_IN_DAYS defaults to 1 day." },
    { kind:"single", text:"What is the maximum Time Travel retention in Enterprise+ for permanent objects?", options:[
      {t:"7 days", c:false},{t:"30 days", c:false},{t:"90 days", c:true},{t:"Unlimited", c:false} ],
      explanation:"Enterprise and above allow up to 90 days." },
    { kind:"single", text:"What is the Time Travel range for transient and temporary tables?", options:[
      {t:"0–1 day", c:true},{t:"0–7 days", c:false},{t:"1–90 days", c:false},{t:"Always 1 day", c:false} ],
      explanation:"Transient and temporary tables allow a maximum of 1 day." },
    { kind:"single", text:"How long is Fail-safe for permanent tables?", options:[
      {t:"1 day", c:false},{t:"7 days", c:true},{t:"14 days", c:false},{t:"90 days", c:false} ],
      explanation:"A fixed 7 days, recoverable only by Snowflake." },
    { kind:"single", text:"What Fail-safe applies to transient and temporary tables?", options:[
      {t:"0 days (no Fail-safe)", c:true},{t:"1 day", c:false},{t:"7 days", c:false},{t:"90 days", c:false} ],
      explanation:"Neither type has Fail-safe." },
    { kind:"single", text:"What is the default validity of the result cache?", options:[
      {t:"1 hour", c:false},{t:"24 hours", c:true},{t:"7 days", c:false},{t:"Unlimited", c:false} ],
      explanation:"Results persist for 24 hours." },
    { kind:"single", text:"With continued reuse, how long can a result cache entry stay alive at most?", options:[
      {t:"24 hours", c:false},{t:"7 days", c:false},{t:"31 days", c:true},{t:"90 days", c:false} ],
      explanation:"Reuse extends retention up to a 31-day maximum." },
    { kind:"single", text:"What share of daily compute is Cloud Services free up to?", options:[
      {t:"5%", c:false},{t:"10%", c:true},{t:"20%", c:false},{t:"0%", c:false} ],
      explanation:"Cloud services are free up to 10% of daily compute consumption." },
    { kind:"single", text:"What is the minimum billing period when a warehouse starts?", options:[
      {t:"1 second", c:false},{t:"30 seconds", c:false},{t:"60 seconds", c:true},{t:"300 seconds", c:false} ],
      explanation:"60 seconds minimum, then per-second billing." },
    { kind:"single", text:"What is the typical uncompressed size of a micro-partition?", options:[
      {t:"500 KB – 1 MB", c:false},{t:"5–10 MB", c:false},{t:"50–500 MB", c:true},{t:"1–5 GB", c:false} ],
      explanation:"50–500 MB uncompressed, roughly 16 MB compressed." },
    { kind:"single", text:"What is the interval for automatic encryption key rotation?", options:[
      {t:"Daily", c:false},{t:"Every 30 days", c:true},{t:"Annually", c:false},{t:"Never automatically", c:false} ],
      explanation:"Keys rotate every 30 days; annual rekeying is 365 days." },
    { kind:"single", text:"Which encryption standard applies to data at rest?", options:[
      {t:"AES-128", c:false},{t:"AES-256", c:true},{t:"RSA-2048", c:false},{t:"DES", c:false} ],
      explanation:"AES 256-bit encryption, always on." },
    { kind:"single", text:"How long is COPY load metadata retained for file deduplication?", options:[
      {t:"24 hours", c:false},{t:"14 days", c:false},{t:"64 days", c:true},{t:"90 days", c:false} ],
      explanation:"64 days for COPY; Snowpipe keeps 14 days." },
    { kind:"single", text:"What is the recommended compressed file size for efficient bulk loading?", options:[
      {t:"1–5 KB", c:false},{t:"~100–250 MB", c:true},{t:"1–5 GB", c:false},{t:"Exactly 16 MB", c:false} ],
      explanation:"100–250 MB compressed gives good parallelism at reasonable cost." },
    { kind:"single", text:"On how many cloud platforms can Snowflake run?", options:[
      {t:"1", c:false},{t:"2", c:false},{t:"3", c:true},{t:"4", c:false} ],
      explanation:"AWS, Azure and Google Cloud." },
    { kind:"single", text:"What is the typical latency of the ACCOUNT_USAGE views?", options:[
      {t:"Real time", c:false},{t:"~45 minutes to 3 hours", c:true},{t:"Exactly 24 hours", c:false},{t:"7 days", c:false} ],
      explanation:"The SLA range is 45 minutes to 3 hours." },
    { kind:"single", text:"From which edition are multi-cluster warehouses available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise or higher." },
    { kind:"single", text:"From which edition are materialized views available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise or higher." },
    { kind:"single", text:"From which edition are Dynamic Data Masking and row access policies available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise or higher." },
    { kind:"single", text:"From which edition are Tri-Secret Secure, HIPAA/PCI compliance and PrivateLink available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:false},{t:"Business Critical", c:true},{t:"All", c:false} ],
      explanation:"Business Critical." },
    { kind:"single", text:"From which edition is extended Time Travel (>1 up to 90 days) possible?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise or higher; Standard is capped at 1 day." },
    { kind:"single", text:"What is the passing score of the COF-C03 exam on the 0–1000 scale?", options:[
      {t:"700", c:false},{t:"750", c:true},{t:"800", c:false},{t:"850", c:false} ],
      explanation:"750 out of 1000." },
    { kind:"single", text:"What is the approximate scope and time of the COF-C03 exam?", options:[
      {t:"50 questions / 60 min", c:false},
      {t:"~100 questions / 115 min", c:true},
      {t:"150 questions / 180 min", c:false},
      {t:"200 questions / 240 min", c:false} ],
      explanation:"Roughly 100 questions in 115 minutes." },
    { kind:"single", text:"Which value disables Time Travel for an object via DATA_RETENTION_TIME_IN_DAYS?", options:[
      {t:"-1", c:false},{t:"0", c:true},{t:"1", c:false},{t:"NULL", c:false} ],
      explanation:"A retention of 0 disables Time Travel." },
    { kind:"single", text:"On how many levels can DATA_RETENTION_TIME_IN_DAYS be set?", options:[
      {t:"1 (account only)", c:false},
      {t:"2 (account, table)", c:false},
      {t:"4 (account, database, schema, table)", c:true},
      {t:"It cannot be set", c:false} ],
      explanation:"It cascades across account, database, schema and table." },
    { kind:"single", text:"By roughly how much does compute scale per warehouse size step (XS→S→M…)?", options:[
      {t:"+10%", c:false},{t:"It doubles per step", c:true},{t:"It triples", c:false},{t:"No change", c:false} ],
      explanation:"Each size step roughly doubles the compute resources." },
    { kind:"single", text:"How many credits does Cloud Services cost while consumption stays under the allowance?", options:[
      {t:"0", c:true},{t:"1 per hour", c:false},{t:"10", c:false},{t:"Always chargeable", c:false} ],
      explanation:"Nothing is charged below the 10% allowance." },
    { kind:"multi", choose:2, text:"Which two values apply to permanent tables in Enterprise? Choose two.", options:[
      {t:"Time Travel up to 90 days", c:true},
      {t:"Fail-safe 7 days", c:true},
      {t:"Fail-safe 90 days", c:false},
      {t:"Time Travel max. 1 day", c:false} ],
      explanation:"Up to 90 days Time Travel plus a fixed 7 days of Fail-safe." },
    { kind:"multi", choose:2, text:"Which two statements about warehouse billing are correct? Choose two.", options:[
      {t:"At least 60 seconds on start", c:true},
      {t:"Per-second after that", c:true},
      {t:"Always rounded to the hour", c:false},
      {t:"A flat fee per query", c:false} ],
      explanation:"60-second minimum, then per-second billing." },
    { kind:"single", text:"What are the scaling policies of a multi-cluster warehouse?", options:[
      {t:"FAST and SLOW", c:false},
      {t:"STANDARD and ECONOMY", c:true},
      {t:"HIGH and LOW", c:false},
      {t:"AUTO and MANUAL", c:false} ],
      explanation:"SCALING_POLICY is either STANDARD or ECONOMY." },
    { kind:"single", text:"What is the server factor of XS relative to S, M and L?", options:[
      {t:"XS=1, S=2, M=4, L=8", c:true},
      {t:"XS=1, S=1.5, M=2, L=3", c:false},
      {t:"All the same", c:false},
      {t:"XS=8, S=4, M=2, L=1", c:false} ],
      explanation:"Each step doubles: 1, 2, 4, 8 servers." },
    { kind:"single", text:"What is the order of the data lifecycle after deletion?", options:[
      {t:"Active → Time Travel → Fail-safe → removed", c:true},
      {t:"Active → Fail-safe → Time Travel → removed", c:false},
      {t:"Fail-safe → Time Travel → Active", c:false},
      {t:"Time Travel → Active → Fail-safe", c:false} ],
      explanation:"Active, then Time Travel, then Fail-safe, then permanently removed." },
    { kind:"single", text:"What is the rough compressed size guideline for a micro-partition?", options:[
      {t:"~16 MB", c:true},{t:"~500 MB", c:false},{t:"~1 GB", c:false},{t:"~50 KB", c:false} ],
      explanation:"About 16 MB compressed, from 50–500 MB uncompressed." },
    { kind:"multi", choose:2, text:"Which two features are only available from Business Critical? Choose two.", options:[
      {t:"Tri-Secret Secure", c:true},
      {t:"HIPAA/PCI support", c:true},
      {t:"Materialized Views", c:false},
      {t:"Multi-cluster warehouses", c:false} ],
      explanation:"Tri-Secret and higher-level compliance are Business Critical; MVs and multi-cluster arrive at Enterprise." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
