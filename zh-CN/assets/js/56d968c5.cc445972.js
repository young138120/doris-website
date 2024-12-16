"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["517136"],{763705:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/years-sub","title":"YEARS_SUB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/years-sub.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/years-sub","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/years-sub","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"YEARS_SUB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"YEARS_DIFF","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/years-diff"},"next":{"title":"ST_X","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-x"}}'),i=s("785893"),l=s("250065");let a={title:"YEARS_SUB",language:"zh-CN"},r=void 0,o={},c=[{value:"years_sub",id:"years_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"years_sub",children:"years_sub"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME YEARS_SUB(DATETIME date, INT years)"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u65E5\u671F\u65F6\u95F4\u6216\u65E5\u671F\u51CF\u53BB\u6307\u5B9A\u5E74\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570 date \u53EF\u4EE5\u662F DATETIME \u6216\u8005 DATE \u7C7B\u578B\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E0E\u53C2\u6570 date \u7684\u7C7B\u578B\u4E00\u81F4\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select years_sub(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| years_sub('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2019-02-02 02:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"YEARS_SUB\n"})})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(667294);let i={},l=t.createContext(i);function a(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);