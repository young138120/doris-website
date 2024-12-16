"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["816870"],{588901:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-COLLATION","title":"SHOW-COLLATION","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLLATION","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-COLLATION","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-COLUMN-STATS","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-COLUMN-STATS"},"next":{"title":"SHOW-DATABASES","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-DATABASES"}}'),s=n("785893"),i=n("250065");let r={title:"SHOW-COLLATION",language:"en"},a=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Result Fields",id:"result-fields",level:2},{value:"Example",id:"example",level:3},{value:"Notice",id:"notice",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["In Doris, the ",(0,s.jsx)(t.code,{children:"SHOW COLLATION"})," command is used to display the character set collations available in the database. A collation is a set of rules that determine how data is sorted and compared. These rules affect the storage and retrieval of character data. The content returned by this command is only for compatibility with MySQL's behavior. It does not represent the list of character set collations that Doris actually supports. Doris currently mainly supports the proofreading method utf8mb4_0900_bin."]}),"\n",(0,s.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"SHOW COLLATION\n"})}),"\n",(0,s.jsx)(t.h2,{id:"result-fields",children:"Result Fields"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"SHOW COLLATION"})," command returns the following fields:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Collation: The collation name"}),"\n",(0,s.jsx)(t.li,{children:"Charset: The character set"}),"\n",(0,s.jsx)(t.li,{children:"Id: The collation's ID"}),"\n",(0,s.jsx)(t.li,{children:"Default: Whether this is the default collation for the character set"}),"\n",(0,s.jsx)(t.li,{children:"Compiled: Whether the collation is compiled"}),"\n",(0,s.jsx)(t.li,{children:"Sortlen: Sort length"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"show collation;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"+-----------------+---------+------+---------+----------+---------+\n| Collation       | Charset | Id   | Default | Compiled | Sortlen |\n+-----------------+---------+------+---------+----------+---------+\n| utf8_general_ci | utf8    |   33 | Yes     | Yes      |       1 |\n+-----------------+---------+------+---------+----------+---------+\n"})}),"\n",(0,s.jsx)(t.h3,{id:"notice",children:"Notice"}),"\n",(0,s.jsx)(t.p,{children:"In Doris, although it is compatible with MySQL's commands for setting the collation, the setting actually does not take effect. When executed, Doris will always use utf8mb4_0900_bin as the comparison rule."})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var l=n(667294);let s={},i=l.createContext(s);function r(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);