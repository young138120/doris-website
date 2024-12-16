"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["54387"],{704088:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>r,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/count","title":"COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/count.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/count","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/count","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TOPN_WEIGHTED","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/topn-weighted"},"next":{"title":"COUNT_BY_ENUM","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/aggregate-functions/count-by-enum"}}'),i=t("785893"),o=t("250065");let l={title:"COUNT",language:"zh-CN"},a=void 0,c={},r=[{value:"COUNT",id:"count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"count",children:"COUNT"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"COUNT([DISTINCT] expr)"})}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u8FD4\u56DE\u6EE1\u8DB3\u8981\u6C42\u7684\u884C\u7684\u6570\u76EE"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MySQL > select count(*) from log_statis group by datetime;\n+----------+\n| count(*) |\n+----------+\n| 28515903 |\n+----------+\n\nMySQL > select count(datetime) from log_statis group by datetime;\n+-------------------+\n| count(`datetime`) |\n+-------------------+\n|         28521682  |\n+-------------------+\n\nMySQL > select count(distinct datetime) from log_statis group by datetime;\n+-------------------------------+\n| count(DISTINCT `datetime`)    |\n+-------------------------------+\n|                       71045   |\n+-------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"COUNT"})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},o=s.createContext(i);function l(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);