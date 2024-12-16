"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["825461"],{303820:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>a,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/numbers","title":"NUMBERS","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/table-functions/numbers.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/numbers","permalink":"/docs/sql-manual/sql-functions/table-functions/numbers","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NUMBERS","language":"en"},"sidebar":"docs","previous":{"title":"EXPLODE_BITMAP","permalink":"/docs/sql-manual/sql-functions/table-functions/explode-bitmap"},"next":{"title":"EXPLODE_NUMBERS","permalink":"/docs/sql-manual/sql-functions/table-functions/explode-numbers"}}'),l=s("785893"),r=s("250065");let i={title:"NUMBERS",language:"en"},c=void 0,o={},a=[{value:"<code>numbers</code>",id:"numbers",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"numbers",children:(0,l.jsx)(n.code,{children:"numbers"})}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsxs)(n.p,{children:["Table function that generates a temporary table containing only one column with the column name ",(0,l.jsx)(n.code,{children:"number"})," and all element values are ",(0,l.jsx)(n.code,{children:"const_value"})," if ",(0,l.jsx)(n.code,{children:"const_value"})," is specified, otherwise they are [0,",(0,l.jsx)(n.code,{children:"number"}),") incremented."]}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'numbers(\n  "number" = "n"\n  <, "const_value" = "x">\n  );\n'})}),"\n",(0,l.jsx)(n.p,{children:"parameter\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"number"}),": Line number."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"const_value"}),": the constant value."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'mysql> select * from numbers("number" = "5");\n+--------+\n| number |\n+--------+\n|      0 |\n|      1 |\n|      2 |\n|      3 |\n|      4 |\n+--------+\n5 rows in set (0.11 sec)\n\nmysql> select * from numbers("number" = "5", "const_value" = "-123");\n+--------+\n| number |\n+--------+\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n|   -123 |\n+--------+\n5 rows in set (0.12 sec)\n'})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"numbers, const_value\n"})})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);