"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["873886"],{313464:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/hour-ceil","title":"hour_ceil","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/hour-ceil.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/hour-ceil","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/hour-ceil","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"hour_ceil","language":"en"},"sidebar":"docs","previous":{"title":"minute_ceil","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/minute-ceil"},"next":{"title":"day_ceil","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/day-ceil"}}'),s=i("785893"),l=i("250065");let r={title:"hour_ceil",language:"en"},c=void 0,o={},a=[{value:"hour_ceil",id:"hour_ceil",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"hour_ceil",children:"hour_ceil"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DATETIME HOUR_CEIL(DATETIME datetime)\nDATETIME HOUR_CEIL(DATETIME datetime, DATETIME origin)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period)\nDATETIME HOUR_CEIL(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Convert the date to the nearest rounding up time of the specified time interval period."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"datetime: a valid date expression."}),"\n",(0,s.jsx)(n.li,{children:"period: specifies how many hours each cycle consists of."}),"\n",(0,s.jsx)(n.li,{children:"origin: starting from 0001-01-01T00:00:00."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> select hour_ceil(\"2023-07-13 22:28:18\", 5);\n+------------------------------------------------------------+\n| hour_ceil(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+------------------------------------------------------------+\n| 2023-07-14 02:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"HOUR_CEIL, HOUR, CEIL\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(n.p,{children:["See also ",(0,s.jsx)(n.a,{href:"./date_ceil",children:"date_ceil"})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return r}});var t=i(667294);let s={},l=t.createContext(s);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);