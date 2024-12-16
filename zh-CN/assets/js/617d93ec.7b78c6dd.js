"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["241818"],{221455:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>m,assets:()=>d,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/materialized-view/DROP-MATERIALIZED-VIEW","title":"DROP MATERIALIZED VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/materialized-view/DROP-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/materialized-view","slug":"/sql-manual/sql-statements/table-and-view/materialized-view/DROP-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/DROP-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DROP MATERIALIZED VIEW","language":"en"},"sidebar":"docs","previous":{"title":"ALTER ASYNC MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/ALTER-ASYNC-MATERIALIZED-VIEW"},"next":{"title":"DROP ASYNC MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/DROP-ASYNC-MATERIALIZED-VIEW"}}'),s=l("785893"),a=l("250065");let i={title:"DROP MATERIALIZED VIEW",language:"en"},r=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to drop a materialized view. Synchronous syntax"}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP MATERIALIZED VIEW [IF EXISTS] mv_name ON table_name;\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"IF EXISTS:\nDo not throw an error if the materialized view does not exist. If this keyword is not declared, an error will be reported if the materialized view does not exist."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"mv_name:\nThe name of the materialized view to delete. Required."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"table_name:\nThe name of the table to which the materialized view to be deleted belongs. Required."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"The table structure is"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> desc all_type_table all;\n+----------------+-------+----------+------+------ -+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+----------+------+------ -+---------+-------+\n| all_type_table | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | NONE |\n| | k3 | INT | Yes | false | N/A | NONE |\n| | k4 | BIGINT | Yes | false | N/A | NONE |\n| | k5 | LARGEINT | Yes | false | N/A | NONE |\n| | k6 | FLOAT | Yes | false | N/A | NONE |\n| | k7 | DOUBLE | Yes | false | N/A | NONE |\n| | | | | | | | |\n| k1_sumk2 | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | SUM |\n+----------------+-------+----------+------+------ -+---------+-------+\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drop the materialized view named k1_sumk2 of the table all_type_table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"drop materialized view k1_sumk2 on all_type_table;\n"})}),"\n",(0,s.jsx)(n.p,{children:"The table structure after the materialized view is deleted"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"+----------------+-------+----------+------+------ -+---------+-------+\n| IndexName | Field | Type | Null | Key | Default | Extra |\n+----------------+-------+----------+------+------ -+---------+-------+\n| all_type_table | k1 | TINYINT | Yes | true | N/A | |\n| | k2 | SMALLINT | Yes | false | N/A | NONE |\n| | k3 | INT | Yes | false | N/A | NONE |\n| | k4 | BIGINT | Yes | false | N/A | NONE |\n| | k5 | LARGEINT | Yes | false | N/A | NONE |\n| | k6 | FLOAT | Yes | false | N/A | NONE |\n| | k7 | DOUBLE | Yes | false | N/A | NONE |\n+----------------+-------+----------+------+------ -+---------+-------+\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Drop a non-existent materialized view in the table all_type_table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"drop materialized view k1_k2 on all_type_table;\nERROR 1064 (HY000): errCode = 2, detailMessage = Materialized view [k1_k2] does not exist in table [all_type_table]\n"})}),"\n",(0,s.jsx)(n.p,{children:"The delete request reports an error directly"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Delete the materialized view k1_k2 in the table all_type_table, if it does not exist, no error will be reported."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"drop materialized view if exists k1_k2 on all_type_table;\nQuery OK, 0 rows affected (0.00 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"If it exists, delete it, if it does not exist, no error is reported."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"DROP, MATERIALIZED, VIEW\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var t=l(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);