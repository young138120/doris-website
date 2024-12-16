"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["706503"],{91837:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/avg","title":"AVG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/avg.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/avg","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"AVG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAX_BY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/max-by"},"next":{"title":"AVG_WEIGHTED","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/avg-weighted"}}'),i=t("785893"),a=t("250065");let l={title:"AVG",language:"zh-CN"},o=void 0,r={},c=[{value:"AVG",id:"avg",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"avg",children:"AVG"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"AVG([DISTINCT] expr)"})}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u8FD4\u56DE\u9009\u4E2D\u5B57\u6BB5\u7684\u5E73\u5747\u503C"}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u9009\u5B57\u6BB5DISTINCT\u53C2\u6570\u53EF\u4EE5\u7528\u6765\u8FD4\u56DE\u53BB\u91CD\u5E73\u5747\u503C"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> SELECT datetime, AVG(cost_time) FROM log_statis group by datetime;\n+---------------------+--------------------+\n| datetime            | avg(`cost_time`)   |\n+---------------------+--------------------+\n| 2019-07-03 21:01:20 | 25.827794561933533 |\n+---------------------+--------------------+\n\nmysql> SELECT datetime, AVG(distinct cost_time) FROM log_statis group by datetime;\n+---------------------+---------------------------+\n| datetime            | avg(DISTINCT `cost_time`) |\n+---------------------+---------------------------+\n| 2019-07-04 02:23:24 |        20.666666666666668 |\n+---------------------+---------------------------+\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"AVG"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},a=s.createContext(i);function l(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);