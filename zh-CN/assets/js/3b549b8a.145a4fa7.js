"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["906411"],{498888:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>c,default:()=>N,assets:()=>i,toc:()=>d,frontMatter:()=>o});var a=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/backends","title":"BACKENDS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-valued-functions/backends.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/backends","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/backends","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BACKENDS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ICEBERG_META","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/iceberg-meta"},"next":{"title":"FRONTENDS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-valued-functions/frontends"}}'),t=s("785893"),l=s("250065");let o={title:"BACKENDS",language:"zh-CN"},c=void 0,i={},d=[{value:"<code>backends</code>",id:"backends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"backends",children:(0,t.jsx)(n.code,{children:"backends"})}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"backends"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.p,{children:"\u8868\u51FD\u6570\uFF0C\u751F\u6210 backends \u4E34\u65F6\u8868\uFF0C\u53EF\u4EE5\u67E5\u770B\u5F53\u524D doris \u96C6\u7FA4\u4E2D\u7684 BE \u8282\u70B9\u4FE1\u606F\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u7528\u4E8E from \u5B50\u53E5\u4E2D\u3002"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"backends()"})}),"\n",(0,t.jsx)(n.p,{children:"backends() \u8868\u7ED3\u6784\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> desc function backends();\n+-------------------------+---------+------+-------+---------+-------+\n| Field                   | Type    | Null | Key   | Default | Extra |\n+-------------------------+---------+------+-------+---------+-------+\n| BackendId               | BIGINT  | No   | false | NULL    | NONE  |\n| Host                    | TEXT    | No   | false | NULL    | NONE  |\n| HeartbeatPort           | INT     | No   | false | NULL    | NONE  |\n| BePort                  | INT     | No   | false | NULL    | NONE  |\n| HttpPort                | INT     | No   | false | NULL    | NONE  |\n| BrpcPort                | INT     | No   | false | NULL    | NONE  |\n| LastStartTime           | TEXT    | No   | false | NULL    | NONE  |\n| LastHeartbeat           | TEXT    | No   | false | NULL    | NONE  |\n| Alive                   | BOOLEAN | No   | false | NULL    | NONE  |\n| SystemDecommissioned    | BOOLEAN | No   | false | NULL    | NONE  |\n| TabletNum               | BIGINT  | No   | false | NULL    | NONE  |\n| DataUsedCapacity        | BIGINT  | No   | false | NULL    | NONE  |\n| AvailCapacity           | BIGINT  | No   | false | NULL    | NONE  |\n| TotalCapacity           | BIGINT  | No   | false | NULL    | NONE  |\n| UsedPct                 | DOUBLE  | No   | false | NULL    | NONE  |\n| MaxDiskUsedPct          | DOUBLE  | No   | false | NULL    | NONE  |\n| RemoteUsedCapacity      | BIGINT  | No   | false | NULL    | NONE  |\n| Tag                     | TEXT    | No   | false | NULL    | NONE  |\n| ErrMsg                  | TEXT    | No   | false | NULL    | NONE  |\n| Version                 | TEXT    | No   | false | NULL    | NONE  |\n| Status                  | TEXT    | No   | false | NULL    | NONE  |\n| HeartbeatFailureCounter | INT     | No   | false | NULL    | NONE  |\n| NodeRole                | TEXT    | No   | false | NULL    | NONE  |\n+-------------------------+---------+------+-------+---------+-------+\n23 rows in set (0.002 sec)\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"backends()"})," tvf \u5C55\u793A\u51FA\u6765\u7684\u4FE1\u606F\u57FA\u672C\u4E0E ",(0,t.jsx)(n.code,{children:"show backends"})," \u8BED\u53E5\u5C55\u793A\u51FA\u7684\u4FE1\u606F\u4E00\u81F4\uFF0C\u4F46\u662F ",(0,t.jsx)(n.code,{children:"backends()"})," tvf \u7684\u5404\u4E2A\u5B57\u6BB5\u7C7B\u578B\u66F4\u52A0\u660E\u786E\uFF0C\u4E14\u53EF\u4EE5\u5229\u7528 tvf \u751F\u6210\u7684\u8868\u53BB\u505A\u8FC7\u6EE4\u3001join \u7B49\u64CD\u4F5C\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5BF9 ",(0,t.jsx)(n.code,{children:"backends()"})," tvf \u4FE1\u606F\u5C55\u793A\u8FDB\u884C\u4E86\u9274\u6743\uFF0C\u4E0E ",(0,t.jsx)(n.code,{children:"show backends"})," \u884C\u4E3A\u4FDD\u6301\u4E00\u81F4\uFF0C\u8981\u6C42\u7528\u6237\u5177\u6709 ADMIN/OPERATOR \u6743\u9650\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'mysql> select * from backends()\\G\n*************************** 1. row ***************************\n              BackendId: 10002\n                   Host: 10.xx.xx.90\n          HeartbeatPort: 9053\n                 BePort: 9063\n               HttpPort: 8043\n               BrpcPort: 8069\n          LastStartTime: 2023-06-15 16:51:02\n          LastHeartbeat: 2023-06-15 17:09:58\n                  Alive: 1\n   SystemDecommissioned: 0\n              TabletNum: 21\n       DataUsedCapacity: 0\n          AvailCapacity: 5187141550081\n          TotalCapacity: 7750977622016\n                UsedPct: 33.077583202570978\n         MaxDiskUsedPct: 33.077583202583881\n     RemoteUsedCapacity: 0\n                    Tag: {"location" : "default"}\n                 ErrMsg: \n                Version: doris-0.0.0-trunk-4b18cde0c7\n                 Status: {"lastSuccessReportTabletsTime":"2023-06-15 17:09:02","lastStreamLoadTime":-1,"isQueryDisabled":false,"isLoadDisabled":false}\nHeartbeatFailureCounter: 0\n               NodeRole: mix\n1 row in set (0.038 sec)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"backends\n"})})]})}function N(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return o}});var a=s(667294);let t={},l=a.createContext(t);function o(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);