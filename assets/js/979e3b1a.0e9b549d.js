"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["281630"],{565785:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-TABLETS","title":"SHOW-TABLETS","description":"---","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{},"sidebar":"docs","previous":{"title":"SHOW-OPEN-TABLES","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-OPEN-TABLES"},"next":{"title":"SHOW-LOAD","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-LOAD"}}'),s=t("785893"),r=t("250065");let i={},a=void 0,o={},c=[{value:"{\n&quot;title&quot;: &quot;SHOW-TABLETS&quot;,\n&quot;language&quot;: &quot;en&quot;\n}",id:"title-show-tabletslanguage-en",level:2},{value:"SHOW-TABLETS",id:"show-tablets",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"title-show-tabletslanguage-en",children:'{\n"title": "SHOW-TABLETS",\n"language": "en"\n}'}),"\n",(0,s.jsx)(n.h2,{id:"show-tablets",children:"SHOW-TABLETS"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"SHOW TABLETS"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to list tablets of the specified table (only for administrators)"}),"\n",(0,s.jsx)(n.p,{children:"grammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLETS FROM [database.]table [PARTITIONS(p1,p2)]\n[WHERE where_condition]\n[ORDER BY col_name]\n[LIMIT [offset,] row_count]\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Syntax Description:"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"where_condition could be one of:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'Version = version\nstate = "NORMAL|ROLLUP|CLONE|DECOMMISSION"\nBackendId = backend_id\nIndexName = rollup_name\n'})}),"\n",(0,s.jsxs)(n.p,{children:["or compound them with operator ",(0,s.jsx)(n.code,{children:"AND"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"list all tablets of the specified table"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLETS FROM example_db.table_name;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"list all tablets of the specified partitions"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TABLETS FROM example_db.table_name PARTITIONS(p1, p2);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"list all DECOMMISSION tablets on the specified backend"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'SHOW TABLETS FROM example_db.table_name WHERE state="DECOMMISSION" AND BackendId=11003;\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, TABLETS\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);