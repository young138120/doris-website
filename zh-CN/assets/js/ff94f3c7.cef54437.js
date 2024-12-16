"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["92167"],{890595:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>r,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN","title":"DROP CATALOG RECYCLE BIN","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN.md","sourceDirName":"sql-manual/sql-statements/recycle","slug":"/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/recycle/DROP-CATALOG-RECYCLE-BIN","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DROP CATALOG RECYCLE BIN","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW CATALOG RECYCLE BIN","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/recycle/SHOW-CATALOG-RECYCLE-BIN"},"next":{"title":"RECOVER","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/recycle/RECOVER"}}'),i=l("785893"),t=l("250065");let d={title:"DROP CATALOG RECYCLE BIN",language:"zh-CN"},c=void 0,r={},a=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u7ACB\u5373\u5220\u9664\u56DE\u6536\u7AD9\u4E2D\u7684\u6570\u636E\u5E93\u3001\u8868 \u6216\u8005 \u5206\u533A\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"SHOW CATALOG RECYCLE BIN"})," \u6765\u67E5\u8BE2\u5F53\u524D\u53EF\u5220\u9664\u7684\u5143\u4FE1\u606F\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u6839\u636E DbId \u5220\u9664\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'DbId' = db_id;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u6839\u636E TableId \u5220\u9664\u8868"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'TableId' = table_id;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u6839\u636E PartitionId \u5220\u9664\u5206\u533A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'PartitionId' = partition_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5F53\u5220\u9664\u6570\u636E\u5E93\u3001\u8868\u6216\u8005\u5206\u533A\u65F6\uFF0C\u56DE\u6536\u7AD9\u4F1A\u5728 ",(0,i.jsx)(n.code,{children:"catalog_trash_expire_second"}),"\u79D2\u540E\u5C06\u5176\u5220\u9664\uFF08\u5728 ",(0,i.jsx)(n.code,{children:"fe.conf"})," \u4E2D\u8BBE\u7F6E\uFF09\u3002\u6B64\u8BED\u53E5\u5C06\u7ACB\u5373\u5220\u9664\u5B83\u4EEC\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"'DbId'"}),"\u3001 ",(0,i.jsx)(n.code,{children:"'TableId'"})," \u548C ",(0,i.jsx)(n.code,{children:"'PartitionId'"})," \u5927\u5C0F\u5199\u4E0D\u654F\u611F\u4E14\u4E0D\u533A\u5206\u5355\u5F15\u53F7\u548C\u53CC\u5F15\u53F7\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5F53\u5220\u9664\u4E0D\u5728\u56DE\u6536\u7AD9\u4E2D\u7684\u6570\u636E\u5E93\u65F6\uFF0C\u4E5F\u4F1A\u5220\u9664\u56DE\u6536\u7AD9\u4E2D\u5177\u6709\u76F8\u540C ",(0,i.jsx)(n.code,{children:"DbId"})," \u7684\u6240\u6709\u8868\u548C\u5206\u533A\u3002\u53EA\u6709\u5728\u6CA1\u6709\u5220\u9664\u4EFB\u4F55\u5185\u5BB9\uFF08\u6570\u636E\u5E93\u3001\u8868\u6216\u5206\u533A\uFF09\u7684\u60C5\u51B5\u4E0B\uFF0C\u5B83\u624D\u4F1A\u62A5\u9519\u3002\u5F53\u5220\u9664\u4E0D\u5728\u56DE\u6536\u7AD9\u4E2D\u7684\u8868\u65F6\uFF0C\u5904\u7406\u65B9\u6CD5\u7C7B\u4F3C\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u5220\u9664 DbId \u4E3A example_db_id \u7684\u6570\u636E\u5E93\u3001\u8868\u548C\u5206\u533A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'DbId' = example_db_id;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u5220\u9664 TableId \u4E3A example_tbl_id \u7684\u8868\u548C\u5206\u533A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'TableId' = example_tbl_id;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"\u5220\u9664 id \u4E3A p1_id \u7684\u5206\u533A"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"DROP CATALOG RECYCLE BIN WHERE 'PartitionId' = p1_id;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,i.jsx)(n.p,{children:"DROP, CATALOG, RECYCLE, BIN"}),"\n",(0,i.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return c},a:function(){return d}});var s=l(667294);let i={},t=s.createContext(i);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);