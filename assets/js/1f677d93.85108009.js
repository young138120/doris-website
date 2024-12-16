"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["372656"],{403965:function(n,e,l){l.r(e),l.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/conditional-functions/nvl","title":"nvl","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/conditional-functions/nvl.md","sourceDirName":"sql-manual/sql-functions/conditional-functions","slug":"/sql-manual/sql-functions/conditional-functions/nvl","permalink":"/docs/1.2/sql-manual/sql-functions/conditional-functions/nvl","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"nvl","language":"en"},"sidebar":"docs","previous":{"title":"ifnull","permalink":"/docs/1.2/sql-manual/sql-functions/conditional-functions/ifnull"},"next":{"title":"nullif","permalink":"/docs/1.2/sql-manual/sql-functions/conditional-functions/nullif"}}'),i=l("785893"),s=l("250065");let o={title:"nvl",language:"en"},r=void 0,c={},a=[{value:"nvl",id:"nvl",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"nvl",children:"nvl"}),"\n",(0,i.jsx)(e.p,{children:"nvl"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"nvl(expr1, expr2)"})}),"\n",(0,i.jsx)(e.p,{children:"If the value of expr1 is not null, expr1 is returned, otherwise expr2 is returned"}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select nvl(1,0);\n+--------------+\n| nvl(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n\nmysql> select nvl(null,10);\n+------------------+\n| nvl(NULL, 10) |\n+------------------+\n|               10 |\n+------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"NVL"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return o}});var t=l(667294);let i={},s=t.createContext(i);function o(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);