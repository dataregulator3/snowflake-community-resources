window.QUIZZES = window.QUIZZES || [];
(function () {
var quiz = {
  id: "scenario-d2",
  order: 302,
  group: "More challenging scenario-based questions (with code snippets)",
  kicker: "Scenario · Domain 2",
  title: "Account Access & Security",
  topic: "RBAC, system roles, grants, authentication, network policies, encryption, masking and audit views. 50 questions.",
  questions: [
    { kind:"single", text:"Which access model does Snowflake combine for granting permissions?", options:[
      {t:"DAC only", c:false},{t:"RBAC only", c:false},{t:"RBAC combined with DAC (discretionary access control)", c:true},{t:"Per-row ACL based", c:false} ],
      explanation:"Snowflake combines RBAC with DAC." },
    { kind:"single", text:"In Snowflake, privileges are granted to what, and then assigned to users?", options:[
      {t:"Directly to users", c:false},{t:"To roles", c:true},{t:"To warehouses", c:false},{t:"To sessions", c:false} ],
      explanation:"Privileges → roles → users." },
    { kind:"single", text:"Per best practice, which system role should own most database objects (instead of ACCOUNTADMIN)?", options:[
      {t:"PUBLIC", c:false},{t:"SYSADMIN", c:true},{t:"SECURITYADMIN", c:false},{t:"ORGADMIN", c:false} ],
      explanation:"SYSADMIN should own objects." },
    { kind:"multi", choose:2, text:"Which tasks does SECURITYADMIN typically cover?", options:[
      {t:"Managing grants globally (MANAGE GRANTS)", c:true},
      {t:"Creating/managing warehouses for workloads", c:false},
      {t:"Creating and managing roles and users (inherits USERADMIN)", c:true},
      {t:"Acquiring Marketplace data", c:false} ],
      explanation:"SECURITYADMIN: MANAGE GRANTS plus inherits USERADMIN." },
    { kind:"single", text:"Which role is the parent role that all custom roles should ultimately be attached to (best practice)?", options:[
      {t:"PUBLIC", c:false},{t:"SYSADMIN", c:true},{t:"ACCOUNTADMIN", c:false},{t:"USERADMIN", c:false} ],
      explanation:"Custom roles should roll up to SYSADMIN." },
    { kind:"single", text:"What does this statement accomplish?", code:"GRANT ROLE analyst TO ROLE sysadmin;", options:[
      {t:"sysadmin inherits the privileges of analyst", c:true},
      {t:"analyst inherits the privileges of sysadmin", c:false},
      {t:"Both roles are merged", c:false},
      {t:"Error \u2013 roles cannot be granted to roles", c:false} ],
      explanation:"analyst is granted to sysadmin, so sysadmin inherits analyst's privileges." },
    { kind:"single", text:"Which statement sets the active role of a session?", options:[
      {t:"SET ROLE analyst;", c:false},
      {t:"USE ROLE analyst;", c:true},
      {t:"ALTER SESSION SET ROLE = analyst;", c:false},
      {t:"GRANT ROLE analyst;", c:false} ],
      explanation:"USE ROLE switches the active role." },
    { kind:"single", text:"A user has several roles. Which role is used if none is set explicitly?", options:[
      {t:"PUBLIC", c:false},
      {t:"The role defined as DEFAULT_ROLE on the user", c:true},
      {t:"ACCOUNTADMIN", c:false},
      {t:"Always SYSADMIN", c:false} ],
      explanation:"DEFAULT_ROLE applies." },
    { kind:"single", text:"Which concept lets a role automatically receive privileges on objects of a type created in the future?", code:"GRANT SELECT ON FUTURE TABLES IN SCHEMA sales.public TO ROLE analyst;", options:[
      {t:"Managed access schema", c:false},
      {t:"Future grants", c:true},
      {t:"Secure view", c:false},
      {t:"Masking policy", c:false} ],
      explanation:"Future grants apply to objects created later." },
    { kind:"single", text:"In a \u201cmanaged access schema\u201d, who may grant privileges on objects in the schema?", options:[
      {t:"Every object owner", c:false},
      {t:"Only the schema owner (or roles with MANAGE GRANTS)", c:true},
      {t:"Any role with USAGE", c:false},
      {t:"Exclusively ACCOUNTADMIN", c:false} ],
      explanation:"In managed access schemas only the schema owner grants access." },
    { kind:"multi", choose:3, text:"Which authentication methods does Snowflake support?", options:[
      {t:"Username/password with MFA", c:true},
      {t:"Federated authentication / SSO (SAML 2.0)", c:true},
      {t:"IP-based authentication only", c:false},
      {t:"Key-pair authentication", c:true} ],
      explanation:"Password+MFA, SSO/SAML and key-pair are all supported; IP ranges are a network policy, not authentication." },
    { kind:"single", text:"Which MFA solution is integrated into Snowflake?", options:[
      {t:"Google Authenticator (mandatory)", c:false},{t:"Duo Security", c:true},{t:"SMS codes from Snowflake", c:false},{t:"YubiKey exclusively", c:false} ],
      explanation:"Duo Security is built in." },
    { kind:"single", text:"Which feature restricts access to Snowflake based on IP address ranges?", options:[
      {t:"Masking policy", c:false},{t:"Network policy", c:true},{t:"Row access policy", c:false},{t:"Session policy", c:false} ],
      explanation:"Network policies control IP access." },
    { kind:"single", text:"Which feature enables private connectivity without traffic over the public internet (AWS)?", options:[
      {t:"AWS PrivateLink", c:true},{t:"Network policy", c:false},{t:"External stage", c:false},{t:"OAuth", c:false} ],
      explanation:"AWS PrivateLink provides private connectivity." },
    { kind:"single", text:"What is Tri-Secret Secure?", options:[
      {t:"Three passwords per user", c:false},
      {t:"A combination of a Snowflake-managed key and a customer-managed key (CMK) for encryption", c:true},
      {t:"Three MFA factors", c:false},
      {t:"Three network rules", c:false} ],
      explanation:"Tri-Secret = Snowflake key + customer key." },
    { kind:"single", text:"From which edition is Tri-Secret Secure available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:false},{t:"Business Critical", c:true},{t:"All", c:false} ],
      explanation:"Business Critical." },
    { kind:"single", text:"How does Snowflake encrypt data at rest by default?", options:[
      {t:"Optional, only on request", c:false},
      {t:"End-to-end AES-256, always on, with automatic key rotation", c:true},
      {t:"AES-128, must be enabled manually", c:false},
      {t:"No encryption by default", c:false} ],
      explanation:"AES-256, always on, with automatic rotation." },
    { kind:"single", text:"How often does Snowflake rotate encryption keys by default (key hierarchy rotation)?", options:[
      {t:"Daily", c:false},{t:"Every 30 days", c:true},{t:"Annually", c:false},{t:"Never automatically", c:false} ],
      explanation:"Rotation every 30 days in the key-encryption hierarchy." },
    { kind:"single", text:"Which feature masks column values contextually depending on the querying role?", options:[
      {t:"Row access policy", c:false},{t:"Dynamic Data Masking (masking policy)", c:true},{t:"Network policy", c:false},{t:"Secure UDF", c:false} ],
      explanation:"Dynamic Data Masking." },
    { kind:"single", text:"Which feature filters ROWS based on role/context?", options:[
      {t:"Masking policy", c:false},{t:"Row access policy", c:true},{t:"External tokenization", c:false},{t:"Session policy", c:false} ],
      explanation:"Row access policies filter rows." },
    { kind:"multi", choose:2, text:"Which statements about masking policies are correct?", options:[
      {t:"One policy can be assigned to multiple columns.", c:true},
      {t:"They are a schema-level object bound to columns.", c:true},
      {t:"They change the physically stored data.", c:false},
      {t:"They only work on VARCHAR.", c:false} ],
      explanation:"Reusable, schema-level, bound to columns; the stored data is unchanged." },
    { kind:"single", text:"From which edition are Dynamic Data Masking and row access policies available?", options:[
      {t:"Standard", c:false},{t:"Enterprise", c:true},{t:"Business Critical", c:false},{t:"All", c:false} ],
      explanation:"Enterprise." },
    { kind:"single", text:"Which object allows classification/tagging of objects for governance?", options:[
      {t:"Object tag", c:true},{t:"Sequence", c:false},{t:"Stage", c:false},{t:"Stream", c:false} ],
      explanation:"Object tags." },
    { kind:"single", text:"Which Snowflake feature automatically detects potentially sensitive data (e.g. PII) in columns?", options:[
      {t:"Data Classification", c:true},{t:"Search Optimization", c:false},{t:"Query Profile", c:false},{t:"Result cache", c:false} ],
      explanation:"Data Classification." },
    { kind:"single", text:"Which kind of view hides its definition and prevents non-owners from accessing underlying details?", options:[
      {t:"Standard view", c:false},{t:"Secure view", c:true},{t:"Materialized view", c:false},{t:"External table", c:false} ],
      explanation:"Secure views hide the definition." },
    { kind:"single", text:"Why should you use secure views when data sharing?", options:[
      {t:"They are faster.", c:false},
      {t:"They prevent consumers from seeing the definition/unauthorized data.", c:true},
      {t:"They are cheaper in storage.", c:false},
      {t:"They allow DML for consumers.", c:false} ],
      explanation:"They prevent insight into definitions and unauthorized detail." },
    { kind:"single", text:"Which statement removes a privilege from a role?", options:[
      {t:"DROP PRIVILEGE", c:false},{t:"REVOKE ... FROM ROLE", c:true},{t:"DENY ... TO ROLE", c:false},{t:"ALTER ROLE REMOVE", c:false} ],
      explanation:"REVOKE." },
    { kind:"single", text:"What does this show?", code:"SHOW GRANTS TO ROLE analyst;", options:[
      {t:"The users holding this role", c:false},
      {t:"The privileges/roles granted to the role", c:true},
      {t:"All roles in the account", c:false},
      {t:"The query history of the role", c:false} ],
      explanation:"It lists what has been granted TO the role." },
    { kind:"single", text:"What does this show?", code:"SHOW GRANTS ON TABLE sales;", options:[
      {t:"Which privileges were granted to whom on the table", c:true},
      {t:"The data rows of the table", c:false},
      {t:"The micro-partitions", c:false},
      {t:"All masking policies globally", c:false} ],
      explanation:"Grants on the object." },
    { kind:"multi", choose:2, text:"Which statements about OAuth in Snowflake are correct?", options:[
      {t:"Snowflake supports OAuth for authorized access by clients/partner apps.", c:true},
      {t:"OAuth necessarily replaces RBAC.", c:false},
      {t:"There is Snowflake OAuth and External OAuth.", c:true},
      {t:"OAuth is only available in VPS.", c:false} ],
      explanation:"OAuth for client access; both Snowflake OAuth and External OAuth exist." },
    { kind:"single", text:"Which object centrally limits session idle timeouts?", options:[
      {t:"Session policy", c:true},{t:"Network policy", c:false},{t:"Password policy", c:false},{t:"Masking policy", c:false} ],
      explanation:"Session policy." },
    { kind:"single", text:"Which object enforces password complexity and length?", options:[
      {t:"Password policy", c:true},{t:"Network policy", c:false},{t:"Row access policy", c:false},{t:"Object tag", c:false} ],
      explanation:"Password policy." },
    { kind:"single", text:"An analyst's role has SELECT on a table but no USAGE on the parent schema. What happens?", options:[
      {t:"Access works anyway.", c:false},
      {t:"Access fails \u2013 USAGE on the database and schema is a prerequisite.", c:true},
      {t:"Snowflake grants USAGE automatically.", c:false},
      {t:"Only SELECT is blocked, SHOW works.", c:false} ],
      explanation:"USAGE on database and schema is required." },
    { kind:"single", text:"Which role is the dedicated role for creating new users per best practice?", options:[
      {t:"SYSADMIN", c:false},{t:"USERADMIN", c:true},{t:"PUBLIC", c:false},{t:"ORGADMIN", c:false} ],
      explanation:"USERADMIN." },
    { kind:"single", text:"What does WITH GRANT OPTION (where supported) achieve?", options:[
      {t:"The recipient may pass the privilege on.", c:true},
      {t:"The privilege becomes temporary.", c:false},
      {t:"It disables RBAC.", c:false},
      {t:"It masks the data.", c:false} ],
      explanation:"It confers the right to re-grant." },
    { kind:"single", text:"Which statement about the OWNERSHIP privilege is correct?", code:"GRANT OWNERSHIP ON TABLE sales TO ROLE data_eng;", options:[
      {t:"Ownership cannot be transferred.", c:false},
      {t:"Only one role owns an object at a time; ownership can be transferred via GRANT OWNERSHIP.", c:true},
      {t:"Several roles own an object simultaneously.", c:false},
      {t:"PUBLIC owns all objects.", c:false} ],
      explanation:"Exactly one owner role; transferable." },
    { kind:"single", text:"Which Account Usage view provides login attempts for security analysis?", options:[
      {t:"SNOWFLAKE.ACCOUNT_USAGE.LOGIN_HISTORY", c:true},
      {t:"INFORMATION_SCHEMA.TABLES", c:false},
      {t:"ACCOUNT_USAGE.QUERY_HISTORY", c:false},
      {t:"ACCOUNT_USAGE.STORAGE_USAGE", c:false} ],
      explanation:"LOGIN_HISTORY." },
    { kind:"single", text:"What is the typical latency of the SNOWFLAKE.ACCOUNT_USAGE views?", options:[
      {t:"Real time", c:false},
      {t:"Up to ~45 minutes to 3 hours depending on the view", c:true},
      {t:"Exactly 24 hours", c:false},
      {t:"7 days", c:false} ],
      explanation:"Roughly 45 min – 3 h latency." },
    { kind:"single", text:"Which schema provides near real-time metadata per account/database (no historical latency) but with retention limits?", options:[
      {t:"SNOWFLAKE.ACCOUNT_USAGE", c:false},{t:"INFORMATION_SCHEMA", c:true},{t:"SNOWFLAKE.ORGANIZATION_USAGE", c:false},{t:"PUBLIC", c:false} ],
      explanation:"INFORMATION_SCHEMA is near real-time with limited retention." },
    { kind:"single", text:"Which feature enables external tokenization of sensitive data before storage?", options:[
      {t:"External tokenization (masking policy + external function)", c:true},
      {t:"Time Travel", c:false},
      {t:"Result cache", c:false},
      {t:"Clustering", c:false} ],
      explanation:"External tokenization." },
    { kind:"multi", choose:2, text:"Which best practices for role hierarchies make sense?", options:[
      {t:"Attach custom roles beneath SYSADMIN", c:true},
      {t:"Use ACCOUNTADMIN for day-to-day object creation", c:false},
      {t:"Apply least privilege", c:true},
      {t:"Grant all privileges directly to users", c:false} ],
      explanation:"Custom roles under SYSADMIN; least privilege." },
    { kind:"single", text:"What does a user see on a table protected by a row access policy when no rows are permitted?", options:[
      {t:"All rows", c:false},
      {t:"The table, but 0 (or only permitted) rows", c:true},
      {t:"The table is hidden entirely", c:false},
      {t:"An \u201caccess denied\u201d error", c:false} ],
      explanation:"The table is visible; only permitted rows (possibly none) are returned." },
    { kind:"single", text:"Which statement assigns a default role to a user?", options:[
      {t:"ALTER USER x SET DEFAULT_ROLE = analyst;", c:true},
      {t:"GRANT DEFAULT analyst TO x;", c:false},
      {t:"SET ROLE analyst FOR x;", c:false},
      {t:"USE ROLE analyst;", c:false} ],
      explanation:"ALTER USER ... SET DEFAULT_ROLE." },
    { kind:"single", text:"Which statement about federated authentication (SSO) is correct?", options:[
      {t:"Snowflake is the identity provider.", c:false},
      {t:"An external IdP (e.g. Okta, ADFS) authenticates; Snowflake is the service provider (SAML 2.0).", c:true},
      {t:"SSO replaces encryption.", c:false},
      {t:"SSO only works with SnowSQL.", c:false} ],
      explanation:"External IdP authenticates; Snowflake is the SP." },
    { kind:"single", text:"How should the number of users with ACCOUNTADMIN be handled per best practice?", options:[
      {t:"As many as possible for flexibility", c:false},
      {t:"Limited to a few trusted users, plus MFA", c:true},
      {t:"Assigned to every analyst", c:false},
      {t:"Granted to PUBLIC", c:false} ],
      explanation:"Few ACCOUNTADMINs, protected with MFA." },
    { kind:"single", text:"A masking policy is attached to a column and an authorized role queries it. What happens?", options:[
      {t:"Always masked", c:false},
      {t:"Values are returned unmasked per the policy logic when the role is authorized", c:true},
      {t:"The query fails", c:false},
      {t:"Only NULL is returned", c:false} ],
      explanation:"An authorized role sees unmasked values." },
    { kind:"multi", choose:3, text:"Which objects are policy-based governance features?", options:[
      {t:"Masking policy", c:true},
      {t:"Row access policy", c:true},
      {t:"Sequence", c:false},
      {t:"Session policy", c:true} ],
      explanation:"Masking, row access and session policies are policy objects; a sequence is not." },
    { kind:"single", text:"Which statement binds a masking policy to a column?", options:[
      {t:"ALTER TABLE t MODIFY COLUMN c SET MASKING POLICY p;", c:true},
      {t:"GRANT MASKING p ON c;", c:false},
      {t:"CREATE MASK ON t.c;", c:false},
      {t:"USE MASKING POLICY p;", c:false} ],
      explanation:"ALTER TABLE ... MODIFY COLUMN ... SET MASKING POLICY." },
    { kind:"single", text:"Which statement about role inheritance is correct?", options:[
      {t:"Parent roles inherit the privileges of the child roles granted to them.", c:true},
      {t:"Child roles inherit from parent roles.", c:false},
      {t:"Roles inherit nothing.", c:false},
      {t:"Only PUBLIC inherits.", c:false} ],
      explanation:"Parents inherit from the roles granted to them." },
    { kind:"single", text:"Which feature logs data access for audit purposes and is queryable via the SNOWFLAKE database?", options:[
      {t:"ACCESS_HISTORY (Account Usage)", c:true},{t:"Result cache", c:false},{t:"Query Acceleration", c:false},{t:"Stream", c:false} ],
      explanation:"ACCESS_HISTORY records data access." }
  ]
};
if (!window.QUIZZES.some(function (q) { return q.id === quiz.id; })) {
  window.QUIZZES.push(quiz);
}
})();
