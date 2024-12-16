"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["746865"],{705979:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/weeks-add","title":"WEEKS_ADD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/weeks-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/weeks-add","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/weeks-add","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"WEEKS_ADD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DAYS_SUB","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/days-sub"},"next":{"title":"WEEKS_DIFF","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/weeks-diff"}}'),i=t("785893"),d=t("250065");let l={title:"WEEKS_ADD",language:"zh-CN"},a=void 0,o={},c=[{value:"weeks_add",id:"weeks_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"weeks_add",children:"weeks_add"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME WEEKS_ADD(DATETIME date, INT weeks)"})}),"\n",(0,i.jsx)(n.p,{children:"\u4ECE\u65E5\u671F\u52A0\u4E0A\u6307\u5B9A\u661F\u671F\u6570"}),"\n",(0,i.jsx)(n.p,{children:"\u53C2\u6570 date \u53EF\u4EE5\u662F DATETIME \u6216\u8005 DATE \u7C7B\u578B\uFF0C\u8FD4\u56DE\u7C7B\u578B\u4E0E\u53C2\u6570 date \u7684\u7C7B\u578B\u4E00\u81F4\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select weeks_add(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| weeks_add('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-02-09 02:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WEEKS_ADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(r,{...e})}):r(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},d=s.createContext(i);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);