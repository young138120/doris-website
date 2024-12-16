"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["220165"],{371137:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY","title":"CREATE WORKLOAD POLICY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE WORKLOAD POLICY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW WORKLOAD GROUPS","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS"},"next":{"title":"ALTER WORKLOAD POLICY","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/compute-management/ALTER-WORKLOAD-POLICY"}}'),i=l("785893"),t=l("250065");let c={title:"CREATE WORKLOAD POLICY",language:"zh-CN"},r=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u5FC5\u9009\u53C2\u6570",id:"\u5FC5\u9009\u53C2\u6570",level:2},{value:"\u53EF\u9009\u53C2\u6570",id:"\u53EF\u9009\u53C2\u6570",level:2},{value:"\u6743\u9650\u63A7\u5236",id:"\u6743\u9650\u63A7\u5236",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A Workload Policy\uFF0C\u7528\u4E8E\u5F53\u4E00\u4E2A\u67E5\u8BE2\u6EE1\u8DB3\u4E00\u4E9B\u6761\u4EF6\u65F6\uFF0C\u5C31\u5BF9\u8BE5\u67E5\u8BE2\u6267\u884C\u76F8\u5E94\u7684\u52A8\u4F5C\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE WORKLOAD POLICY [ IF NOT EXISTS ] <workload_policy_name>\nCONDITIONS(<conditions>) ACTIONS(<actions>)\n[ PROPERTIES (<properties>) ]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5FC5\u9009\u53C2\u6570",children:"\u5FC5\u9009\u53C2\u6570"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<workload_policy_name>"}),": Workload Policy \u7684\u540D\u5B57"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<conditions>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"be_scan_rows\uFF0C\u4E00\u4E2A SQL \u5728\u5355\u4E2A BE \u8FDB\u7A0B\u5185 Scan \u7684\u884C\u6570\uFF0C\u5982\u679C\u8FD9\u4E2A SQL \u5728 BE \u4E0A\u662F\u591A\u5E76\u53D1\u6267\u884C\uFF0C\u90A3\u4E48\u5C31\u662F\u591A\u4E2A\u5E76\u53D1\u7684\u7D2F\u52A0\u503C\u3002"}),"\n",(0,i.jsx)(n.li,{children:"be_scan_bytes\uFF0C\u4E00\u4E2A SQL \u5728\u5355\u4E2A BE \u8FDB\u7A0B\u5185 Scan \u7684\u5B57\u8282\u6570\uFF0C\u5982\u679C\u8FD9\u4E2A SQL \u5728 BE \u4E0A\u662F\u591A\u5E76\u53D1\u6267\u884C\uFF0C\u90A3\u4E48\u5C31\u662F\u591A\u4E2A\u5E76\u53D1\u7684\u7D2F\u52A0\u503C\uFF0C\u5355\u4F4D\u662F\u5B57\u8282\u3002"}),"\n",(0,i.jsx)(n.li,{children:"query_time\uFF0C\u4E00\u4E2A SQL \u5728\u5355\u4E2A BE \u8FDB\u7A0B\u4E0A\u7684\u8FD0\u884C\u65F6\u95F4\uFF0C\u65F6\u95F4\u5355\u4F4D\u662F\u6BEB\u79D2\u3002"}),"\n",(0,i.jsx)(n.li,{children:"query_be_memory_bytes\uFF0C\u4ECE 2.1.5 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002\u4E00\u4E2A SQL \u5728\u5355\u4E2A BE \u8FDB\u7A0B\u5185\u4F7F\u7528\u7684\u5185\u5B58\u7528\u91CF\uFF0C\u5982\u679C\u8FD9\u4E2A SQL \u5728 BE \u4E0A\u662F\u591A\u5E76\u53D1\u6267\u884C\uFF0C\u90A3\u4E48\u5C31\u662F\u591A\u4E2A\u5E76\u53D1\u7684\u7D2F\u52A0\u503C\uFF0C\u5355\u4F4D\u662F\u5B57\u8282\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"<actions>"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["set_session_variable\uFF0C\u8FD9\u4E2A Action \u53EF\u4EE5\u6267\u884C\u4E00\u6761 ",(0,i.jsx)(n.code,{children:"set_session_variable"})," \u7684\u8BED\u53E5\u3002\u540C\u4E00\u4E2A Policy \u53EF\u4EE5\u6709\u591A\u4E2A ",(0,i.jsx)(n.code,{children:"set_session_variable"}),"\uFF0C\u4E5F\u5C31\u662F\u8BF4\u4E00\u4E2A Policy \u53EF\u4EE5\u6267\u884C\u591A\u4E2A\u4FEE\u6539 session \u53D8\u91CF\u7684\u8BED\u53E5\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"cancel_query\uFF0C\u53D6\u6D88\u67E5\u8BE2\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u53EF\u9009\u53C2\u6570",children:"\u53EF\u9009\u53C2\u6570"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"<properties>"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"enabled\uFF0C\u53D6\u503C\u4E3A true \u6216 false\uFF0C\u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u8868\u793A\u5F53\u524D Policy \u5904\u4E8E\u542F\u7528\u72B6\u6001\uFF0Cfalse \u8868\u793A\u5F53\u524D Policy \u5904\u4E8E\u7981\u7528\u72B6\u6001\u3002"}),"\n",(0,i.jsx)(n.li,{children:"priority\uFF0C\u53D6\u503C\u8303\u56F4\u4E3A 0 \u5230 100 \u7684\u6B63\u6574\u6570\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0\uFF0C\u4EE3\u8868 Policy \u7684\u4F18\u5148\u7EA7\uFF0C\u8BE5\u503C\u8D8A\u5927\uFF0C\u4F18\u5148\u7EA7\u8D8A\u9AD8\u3002\u8FD9\u4E2A\u5C5E\u6027\u7684\u4E3B\u8981\u4F5C\u7528\u662F\uFF0C\u5F53\u5339\u914D\u5230\u591A\u4E2A Policy \u65F6\uFF0C\u9009\u62E9\u4F18\u5148\u7EA7\u6700\u9AD8\u7684 Policy\u3002"}),"\n",(0,i.jsx)(n.li,{children:"workload_group\uFF0C\u76EE\u524D\u4E00\u4E2A Policy \u53EF\u4EE5\u7ED1\u5B9A\u4E00\u4E2A Workload Group\uFF0C\u4EE3\u8868\u8FD9\u4E2A Policy \u53EA\u5BF9\u67D0\u4E2A Workload Group \u751F\u6548\u3002\u9ED8\u8BA4\u4E3A\u7A7A\uFF0C\u4EE3\u8868\u5BF9\u6240\u6709\u67E5\u8BE2\u751F\u6548\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6743\u9650\u63A7\u5236",children:"\u6743\u9650\u63A7\u5236"}),"\n",(0,i.jsxs)(n.p,{children:["\u81F3\u5C11\u5177\u5907",(0,i.jsx)(n.code,{children:"ADMIN_PRIV"}),"\u6743\u9650"]}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u65B0\u5EFA\u4E00\u4E2A Workload Policy\uFF0C\u4F5C\u7528\u662F\u6740\u6B7B\u6240\u6709\u67E5\u8BE2\u65F6\u95F4\u8D85\u8FC7 3s \u7684\u67E5\u8BE2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"create workload policy kill_big_query conditions(query_time > 3000) actions(cancel_query)\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u65B0\u5EFA\u4E00\u4E2A Workload Policy\uFF0C\u9ED8\u8BA4\u4E0D\u5F00\u542F"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Java",children:"create workload policy kill_big_query conditions(query_time > 3000) actions(cancel_query) properties('enabled'='false')\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return c}});var s=l(667294);let i={},t=s.createContext(i);function c(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);