"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["800747"],{326372:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>r,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/seconds-diff","title":"SECONDS_DIFF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/seconds-diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/seconds-diff","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/seconds-diff","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SECONDS_DIFF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SECONDS_ADD","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/seconds-add"},"next":{"title":"SECONDS_SUB","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/seconds-sub"}}'),i=s("785893"),d=s("250065");let o={title:"SECONDS_DIFF",language:"zh-CN"},c=void 0,l={},r=[{value:"seconds_diff",id:"seconds_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"seconds_diff",children:"seconds_diff"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"INT seconds_diff(DATETIME enddate, DATETIME startdate)"})}),"\n",(0,i.jsx)(n.p,{children:"\u5F00\u59CB\u65F6\u95F4\u5230\u7ED3\u675F\u65F6\u95F4\u76F8\u5DEE\u51E0\u79D2"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select seconds_diff('2020-12-25 22:00:00','2020-12-25 21:00:00');\n+------------------------------------------------------------+\n| seconds_diff('2020-12-25 22:00:00', '2020-12-25 21:00:00') |\n+------------------------------------------------------------+\n|                                                       3600 |\n+------------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"seconds_diff\n"})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var t=s(667294);let i={},d=t.createContext(i);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);