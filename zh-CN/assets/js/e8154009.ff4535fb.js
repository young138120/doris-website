"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["545264"],{153218:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>u,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/hours-sub","title":"HOURS_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/hours-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/hours-sub","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/hours-sub","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HOURS_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HOURS_DIFF","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/hours-diff"},"next":{"title":"DAYS_ADD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/days-add"}}'),i=s("785893"),o=s("250065");let l={title:"HOURS_SUB",language:"zh-CN"},r=void 0,u={},a=[{value:"hours_sub",id:"hours_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"hours_sub",children:"hours_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME HOURS_SUB(DATETIME date, INT hours)"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u6216\u65E5\u671F\u51CF\u53BB\u6307\u5B9A\u5C0F\u65F6\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570 date \u53EF\u4EE5\u662F DATETIME \u6216\u8005 DATE \u7C7B\u578B\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E3A DATETIME\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select hours_sub(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| hours_sub('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-02-02 01:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"HOURS_SUB\n"})})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let i={},o=t.createContext(i);function l(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);