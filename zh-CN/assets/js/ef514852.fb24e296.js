"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["619004"],{989887:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/now","title":"now","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/now.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/now","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/now","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"now","language":"zh-CN"},"sidebar":"docs","previous":{"title":"localtime,localtimestamp","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/localtime"},"next":{"title":"year","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/year"}}'),l=t("785893"),s=t("250065");let o={title:"now",language:"zh-CN"},c=void 0,r={},a=[{value:"now",id:"now",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"example",id:"example-1",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"now",children:"now"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DATETIME NOW()"})}),"\n",(0,l.jsx)(n.p,{children:"\u83B7\u5F97\u5F53\u524D\u7684\u65F6\u95F4\uFF0C\u4EE5Datetime\u7C7B\u578B\u8FD4\u56DE"}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select now();\n+---------------------+\n| now()               |\n+---------------------+\n| 2019-05-27 15:58:25 |\n+---------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DATETIMEV2 NOW(INT precision)"})}),"\n",(0,l.jsx)(n.p,{children:"\u83B7\u5F97\u5F53\u524D\u7684\u65F6\u95F4\uFF0C\u4EE5DatetimeV2\u7C7B\u578B\u8FD4\u56DE\nprecision\u4EE3\u8868\u4E86\u7528\u6237\u60F3\u8981\u7684\u79D2\u7CBE\u5EA6\uFF0C\u5F53\u524D\u7CBE\u5EA6\u6700\u591A\u652F\u6301\u5230\u5FAE\u79D2\uFF0C\u5373precision\u53D6\u503C\u8303\u56F4\u4E3A[0, 6]\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"example-1",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select now(3);\n+-------------------------+\n| now(3)                  |\n+-------------------------+\n| 2022-09-06 16:13:30.078 |\n+-------------------------+\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u5F53\u524D\u53EA\u6709DatetimeV2\u6570\u636E\u7C7B\u578B\u53EF\u652F\u6301\u79D2\u7CBE\u5EA6"}),"\n",(0,l.jsx)(n.li,{children:"\u53D7\u9650\u4E8EJDK\u5B9E\u73B0\uFF0C\u5982\u679C\u7528\u6237\u4F7F\u7528JDK8\u6784\u5EFAFE\uFF0C\u5219\u7CBE\u5EA6\u6700\u591A\u652F\u6301\u5230\u6BEB\u79D2\uFF08\u5C0F\u6570\u70B9\u540E\u4E09\u4F4D\uFF09\uFF0C\u66F4\u5927\u7684\u7CBE\u5EA6\u4F4D\u5C06\u5168\u90E8\u586B\u51450\u3002\u5982\u679C\u7528\u6237\u6709\u66F4\u9AD8\u7CBE\u5EA6\u9700\u6C42\uFF0C\u8BF7\u4F7F\u7528JDK11\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"NOW\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return o}});var i=t(667294);let l={},s=i.createContext(l);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);