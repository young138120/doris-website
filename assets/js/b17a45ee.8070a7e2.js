"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["630742"],{866758:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/jobs","title":"JOBS","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/table-valued-functions/jobs.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/jobs","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/jobs","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JOBS","language":"en"},"sidebar":"docs","previous":{"title":"CATALOGS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/catalogs"},"next":{"title":"MV_INFOS","permalink":"/docs/dev/sql-manual/sql-functions/table-valued-functions/mv_infos"}}'),t=s("785893"),i=s("250065");let r={title:"JOBS",language:"en"},a=void 0,o={},c=[{value:"<code>jobs</code>",id:"jobs",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"insert job",id:"insert-job",level:5},{value:"matterialized view job",id:"matterialized-view-job",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"jobs",children:(0,t.jsx)(n.code,{children:"jobs"})}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"jobs"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.p,{children:"Table function, generating a temporary task table, which can view job information in a certain task type."}),"\n",(0,t.jsx)(n.p,{children:"This function is used in the from clause."}),"\n",(0,t.jsx)(n.p,{children:"This function is supported since 2.1.0."}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'jobs("type"="")'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"parameter description"})}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"parameter"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"description"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"type"}),(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"required"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"type"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"job type"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"yes"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["the ",(0,t.jsx)(n.strong,{children:"type"})," supported types"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"insert: insert into type job"}),"\n",(0,t.jsx)(n.li,{children:"mv: materialized view job"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"insert-job",children:"insert job"}),"\n",(0,t.jsx)(n.p,{children:'jobs("type"="insert")Table structure:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'mysql> desc  function jobs("type"="insert");\n+-------------------+------+------+-------+---------+-------+\n| Field             | Type | Null | Key   | Default | Extra |\n+-------------------+------+------+-------+---------+-------+\n| Id                | TEXT | No   | false | NULL    | NONE  |\n| Name              | TEXT | No   | false | NULL    | NONE  |\n| Definer           | TEXT | No   | false | NULL    | NONE  |\n| ExecuteType       | TEXT | No   | false | NULL    | NONE  |\n| RecurringStrategy | TEXT | No   | false | NULL    | NONE  |\n| Status            | TEXT | No   | false | NULL    | NONE  |\n| ExecuteSql        | TEXT | No   | false | NULL    | NONE  |\n| CreateTime        | TEXT | No   | false | NULL    | NONE  |\n| SucceedTaskCount  | TEXT | No   | false | NULL    | NONE  |\n| FailedTaskCount   | TEXT | No   | false | NULL    | NONE  |\n| CanceledTaskCount | TEXT | No   | false | NULL    | NONE  |\n| Comment           | TEXT | No   | false | NULL    | NONE  |\n+-------------------+------+------+-------+---------+-------+\n12 rows in set (0.01 sec)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Id: job ID."}),"\n",(0,t.jsx)(n.li,{children:"Name: job name."}),"\n",(0,t.jsx)(n.li,{children:"Definer: job definer."}),"\n",(0,t.jsx)(n.li,{children:"ExecuteType: Execution type"}),"\n",(0,t.jsx)(n.li,{children:"RecurringStrategy: recurring strategy"}),"\n",(0,t.jsx)(n.li,{children:"Status: Job status"}),"\n",(0,t.jsx)(n.li,{children:"ExecuteSql: Execution SQL"}),"\n",(0,t.jsx)(n.li,{children:"CreateTime: Job creation time"}),"\n",(0,t.jsx)(n.li,{children:"SucceedTaskCount: Number of successful tasks"}),"\n",(0,t.jsx)(n.li,{children:"FailedTaskCount: Number of failed tasks"}),"\n",(0,t.jsx)(n.li,{children:"CanceledTaskCount: Number of canceled tasks"}),"\n",(0,t.jsx)(n.li,{children:"Comment: job comment"}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"matterialized-view-job",children:"matterialized view job"}),"\n",(0,t.jsx)(n.p,{children:'jobs("type"="mv")Table structure:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> desc function jobs("type"="mv");\n+-------------------+------+------+-------+---------+-------+\n| Field             | Type | Null | Key   | Default | Extra |\n+-------------------+------+------+-------+---------+-------+\n| Id                | TEXT | No   | false | NULL    | NONE  |\n| Name              | TEXT | No   | false | NULL    | NONE  |\n| MvId              | TEXT | No   | false | NULL    | NONE  |\n| MvName            | TEXT | No   | false | NULL    | NONE  |\n| MvDatabaseId      | TEXT | No   | false | NULL    | NONE  |\n| MvDatabaseName    | TEXT | No   | false | NULL    | NONE  |\n| ExecuteType       | TEXT | No   | false | NULL    | NONE  |\n| RecurringStrategy | TEXT | No   | false | NULL    | NONE  |\n| Status            | TEXT | No   | false | NULL    | NONE  |\n| CreateTime        | TEXT | No   | false | NULL    | NONE  |\n+-------------------+------+------+-------+---------+-------+\n10 rows in set (0.00 sec)\n'})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Id: job ID."}),"\n",(0,t.jsx)(n.li,{children:"Name: job name."}),"\n",(0,t.jsx)(n.li,{children:"MvId: Materialized View ID"}),"\n",(0,t.jsx)(n.li,{children:"MvName: Materialized View Name"}),"\n",(0,t.jsx)(n.li,{children:"MvDatabaseId: DB ID of the materialized view"}),"\n",(0,t.jsx)(n.li,{children:"MvDatabaseName: Name of the database to which the materialized view belongs"}),"\n",(0,t.jsx)(n.li,{children:"ExecuteType: Execution type"}),"\n",(0,t.jsx)(n.li,{children:"RecurringStrategy: Loop strategy"}),"\n",(0,t.jsx)(n.li,{children:"Status: Job status"}),"\n",(0,t.jsx)(n.li,{children:"CreateTime: Task creation time"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"View jobs in all materialized views"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> select * from jobs("type"="mv");\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["View job with name ",(0,t.jsx)(n.code,{children:"inner_mtmv_75043"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> select * from jobs("type"="mv") where Name="inner_mtmv_75043";\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"View all insert jobs"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> select * from jobs("type"="insert");\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["View job with name ",(0,t.jsx)(n.code,{children:"one_insert_job"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> select * from jobs("type"="insert") where Name=\'one_insert_job\';\n'})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"jobs, job, insert, mv, materialized view, schedule\n"})})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);