"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["650867"],{380554:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/weeks-sub","title":"WEEKS_SUB","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/weeks-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/weeks-sub","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/weeks-sub","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"WEEKS_SUB","language":"en"},"sidebar":"docs","previous":{"title":"WEEKS_DIFF","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/weeks-diff"},"next":{"title":"MONTHS_ADD","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/months-add"}}'),i=t("785893"),a=t("250065");let l={title:"WEEKS_SUB",language:"en"},r=void 0,o={},d=[{value:"weeks_sub",id:"weeks_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"weeks_sub",children:"weeks_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME WEEKS_SUB(DATETIME date, INT weeks)"})}),"\n",(0,i.jsx)(n.p,{children:"Subtracts a specified number of weeks from a datetime or date"}),"\n",(0,i.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select weeks_sub(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| weeks_sub('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-01-26 02:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WEEKS_SUB\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);