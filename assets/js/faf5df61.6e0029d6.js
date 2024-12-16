"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["424400"],{248:function(e,a,s){s.r(a),s.d(a,{metadata:()=>t,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>d,frontMatter:()=>r});var t=JSON.parse('{"id":"admin-manual/system-tables/overview","title":"Overview","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/system-tables/overview.md","sourceDirName":"admin-manual/system-tables","slug":"/admin-manual/system-tables/overview","permalink":"/docs/admin-manual/system-tables/overview","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Overview","language":"zh-CN"},"sidebar":"docs","previous":{"title":"User Property","permalink":"/docs/admin-manual/config/user-property"},"next":{"title":"active_queries","permalink":"/docs/admin-manual/system-tables/information_schema/active_queries"}}'),n=s("785893"),i=s("250065");let r={title:"Overview",language:"zh-CN"},l=void 0,o={},d=[{value:"information_schema",id:"information_schema",level:3},{value:"mysql",id:"mysql",level:3},{value:"__internal_schema",id:"__internal_schema",level:3}];function c(e){let a={code:"code",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Apache Doris cluster has multiple built-in system databases to store metadata information about the Doris system itself."}),"\n",(0,n.jsx)(a.h3,{id:"information_schema",children:"information_schema"}),"\n",(0,n.jsxs)(a.p,{children:["All tables under the ",(0,n.jsx)(a.code,{children:"information_schema"})," database are virtual tables and do not have physical entities. These system tables contain metadata about the Doris cluster and all its database objects, including databases, tables, columns, permissions, etc. They also include functional status information like Workload Group, Task, etc."]}),"\n",(0,n.jsxs)(a.p,{children:["There is an ",(0,n.jsx)(a.code,{children:"information_schema"})," database under each Catalog, containing metadata only for the corresponding Catalog's databases and tables."]}),"\n",(0,n.jsxs)(a.p,{children:["All tables in the ",(0,n.jsx)(a.code,{children:"information_schema"})," database are read-only, and users cannot modify, drop, or create tables in this database."]}),"\n",(0,n.jsxs)(a.p,{children:["By default, all users have read permissions for all tables in this database, but the query results will vary based on the user's actual permission. For example, if User A only has permissions for ",(0,n.jsx)(a.code,{children:"db1.table1"}),", querying the ",(0,n.jsx)(a.code,{children:"information_schema.tables"})," table will only return information related to ",(0,n.jsx)(a.code,{children:"db1.table1"}),"."]}),"\n",(0,n.jsx)(a.h3,{id:"mysql",children:"mysql"}),"\n",(0,n.jsxs)(a.p,{children:["All tables under the ",(0,n.jsx)(a.code,{children:"mysql"})," database are virtual tables and do not have physical entities. These system tables contain information such as permissions and are mainly used for MySQL ecosystem compatibility."]}),"\n",(0,n.jsxs)(a.p,{children:["There is a ",(0,n.jsx)(a.code,{children:"mysql"})," database under each Catalog, but the content of tables is identical."]}),"\n",(0,n.jsxs)(a.p,{children:["All tables in the ",(0,n.jsx)(a.code,{children:"mysql"})," database are read-only, and users cannot modify, delete, or create tables in this database."]}),"\n",(0,n.jsx)(a.h3,{id:"__internal_schema",children:"__internal_schema"}),"\n",(0,n.jsxs)(a.p,{children:["All tables under the ",(0,n.jsx)(a.code,{children:"__internal_schema"})," database are actual tables in Doris, stored similarly to user-created data tables. When a Doris cluster is created, all system tables under this database are automatically created."]}),"\n",(0,n.jsx)(a.p,{children:"By default, common users have read-only permissions for tables in this database. However, once granted, they can modify, delete, or create tables under this database."})]})}function m(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return l},a:function(){return r}});var t=s(667294);let n={},i=t.createContext(n);function r(e){let a=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);