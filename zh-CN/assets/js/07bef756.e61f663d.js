"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["929067"],{129675:function(n,e,l){l.r(e),l.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>r,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/conditional-functions/nvl","title":"NVL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/conditional-functions/nvl.md","sourceDirName":"sql-manual/sql-functions/conditional-functions","slug":"/sql-manual/sql-functions/conditional-functions/nvl","permalink":"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/nvl","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"NVL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IFNULL","permalink":"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/ifnull"},"next":{"title":"NULLIF","permalink":"/zh-CN/docs/sql-manual/sql-functions/conditional-functions/nullif"}}'),i=l("785893"),s=l("250065");let o={title:"NVL",language:"zh-CN"},c=void 0,r={},a=[{value:"nvl",id:"nvl",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"nvl",children:"nvl"}),"\n",(0,i.jsx)(e.p,{children:"nvl"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"nvl(expr1, expr2)"})}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C expr1 \u7684\u503C\u4E0D\u4E3A NULL \u5219\u8FD4\u56DE expr1\uFF0C\u5426\u5219\u8FD4\u56DE expr2"}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select nvl(1,0);\n+--------------+\n| nvl(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n\nmysql> select nvl(null,10);\n+------------------+\n| nvl(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"NVL"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return o}});var t=l(667294);let i={},s=t.createContext(i);function o(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);