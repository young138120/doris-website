"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["749701"],{293642:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/years-sub","title":"YEARS_SUB","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/date-time-functions/years-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/years-sub","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/years-sub","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"YEARS_SUB","language":"en"},"sidebar":"docs","previous":{"title":"YEARS_DIFF","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/years-diff"},"next":{"title":"ST_X","permalink":"/docs/dev/sql-manual/sql-functions/spatial-functions/st-x"}}'),i=t("785893"),a=t("250065");let r={title:"YEARS_SUB",language:"en"},l=void 0,o={},c=[{value:"years_sub",id:"years_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"years_sub",children:"years_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME YEARS_SUB(DATETIME date, INT years)"})}),"\n",(0,i.jsx)(n.p,{children:"Subtracts a specified number of years from a datetime or date"}),"\n",(0,i.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is consistent with that of the parameter date."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select years_sub(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| years_sub('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2019-02-02 02:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"YEARS_SUB\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);