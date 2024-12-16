"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["738036"],{895611:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var r=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE","title":"SHOW-QUERY-PROFILE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-QUERY-PROFILE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-REPOSITORIES","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"},"next":{"title":"SHOW-OPEN-TABLES","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-OPEN-TABLES"}}'),t=s("785893"),l=s("250065");let a={title:"SHOW-QUERY-PROFILE",language:"zh-CN"},i=void 0,o={},c=[{value:"SHOW-QUERY-PROFILE",id:"show-query-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"show-query-profile",children:"SHOW-QUERY-PROFILE"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"SHOW QUERY PROFILE"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u662F\u7528\u6765\u67E5\u770BQUERY\u64CD\u4F5C\u7684\u6811\u72B6Profile\u4FE1\u606F\uFF0C\u8BE5\u529F\u80FD\u9700\u8981\u7528\u6237\u6253\u5F00 Profile \u8BBE\u7F6E\uFF0C0.15 \u4E4B\u524D\u7248\u672C\u6267\u884C\u4E0B\u9762\u7684\u8BBE\u7F6E\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET is_report_success=true;\n"})}),"\n",(0,t.jsx)(n.p,{children:"0.15 \u53CA\u4E4B\u540E\u7684\u7248\u672C\u6267\u884C\u4E0B\u9762\u7684\u8BBE\u7F6E\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET [GLOBAL] enable_profile=true;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'show query profile "/";\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5217\u51FA\u5F53\u524D\u4FDD\u5B58\u7684\u6240\u6709query\u64CD\u4F5C\u7684 Profile \u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'show query profile "/queryId"\\G;\nshow query profile "/queryId/fragment_id/instance_id";\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9Aquery id\u6811\u72B6profile\u4FE1\u606F,\u8FD4\u56DEprofile \u7B80\u6613\u6811\u5F62\u56FE\u3002\u6307\u5B9Afragment_id\u548Cinstance_id\u5219\u8FD4\u56DE\u5BF9\u5E94\u7684\u8BE6\u7EC6profile\u6811\u5F62\u56FE\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5217\u51FA\u6240\u6709\u7684 query Profile"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/";\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| QueryId                           | User | DefaultDb               | SQL                | QueryType | StartTime           | EndTime             | TotalTime | QueryState |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| 327167e0db4749a9-adce3b3d770b2bb1 | root | default_cluster:test_db | select * from test | Query     | 2022-08-09 10:50:09 | 2022-08-09 10:50:09 | 19ms      | EOF        |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n1 row in set (0.00 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5217\u51FA\u6307\u5B9AQueryId\u7684 query Profile"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1"\\G\n*************************** 1. row ***************************\nFragments: \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[-1: VDataBufferSender] \u2502\n\u2502Fragment: 0             \u2502\n\u2502MaxActiveTime: 783.263us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250C\u2518\n            \u2502\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[1: VEXCHANGE_NODE]\u2502\n  \u2502Fragment: 0        \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2514\u2510\n             \u2502\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]  \u2502\n\u2502Fragment: 1             \u2502\n\u2502MaxActiveTime: 847.612us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n             \u2502\n             \u2502\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[0: VOLAP_SCAN_NODE]\u2502\n  \u2502Fragment: 1         \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250C\u2518\n            \u2502\n     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n     \u2502[OlapScanner]\u2502\n     \u2502Fragment: 1  \u2502\n     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502\n            \u2502\n   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[SegmentIterator]\u2502\n   \u2502Fragment: 1      \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 row in set (0.00 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5217\u51FA\u6307\u5B9A Fragment \u7684 Instance \u6982\u51B5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/"\\G\n*************************** 1. row ***************************\n Instances: 327167e0db4749a9-adce3b3d770b2bb2\n      Host: 172.26.0.1:9111\nActiveTime: 847.612us\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u7EE7\u7EED\u67E5\u770B\u67D0\u4E00\u4E2A\u5177\u4F53\u7684 Instance \u4E0A\u5404\u4E2A\u7B97\u5B50\u7684\u8BE6\u7EC6 Profile"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/327167e0db4749a9-adce3b3d770b2bb2"\\G\n*************************** 1. row ***************************\nInstance: \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]                 \u2502\n\u2502(Active: 36.944us, non-child: 0.20)    \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BytesSent: 0.00                \u2502\n\u2502      - IgnoreRows: 0                  \u2502\n\u2502      - LocalBytesSent: 20.00 B        \u2502\n\u2502      - OverallThroughput: 0.0 /sec    \u2502\n\u2502      - PeakMemoryUsage: 0.00          \u2502\n\u2502      - SerializeBatchTime: 0ns        \u2502\n\u2502      - UncompressedRowBatchSize: 0.00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[0: VOLAP_SCAN_NODE]                   \u2502\n\u2502(Active: 563.241us, non-child: 3.00)   \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BatchQueueWaitTime: 444.714us  \u2502\n\u2502      - BytesRead: 37.00 B             \u2502\n\u2502      - NumDiskAccess: 1               \u2502\n\u2502      - NumScanners: 2                 \u2502\n\u2502      - PeakMemoryUsage: 320.00 KB     \u2502\n\u2502      - RowsRead: 4                    \u2502\n\u2502      - RowsReturned: 4                \u2502\n\u2502      - RowsReturnedRate: 7.101K /sec  \u2502\n\u2502      - ScannerBatchWaitTime: 206.40us \u2502\n\u2502      - ScannerSchedCount : 2          \u2502\n\u2502      - ScannerWorkerWaitTime: 34.640us\u2502\n\u2502      - TabletCount : 2                \u2502\n\u2502      - TotalReadThroughput: 0.0 /sec  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[OlapScanner]                    \u2502\n   \u2502(Active: 0ns, non-child: 0.00)   \u2502\n   \u2502  - Counters:                    \u2502\n   \u2502      - BlockConvertTime: 0ns    \u2502\n   \u2502      - BlockFetchTime: 183.741us\u2502\n   \u2502      - ReaderInitTime: 180.741us\u2502\n   \u2502      - RowsDelFiltered: 0       \u2502\n   \u2502      - RowsPushedCondFiltered: 0\u2502\n   \u2502      - ScanCpuTime: 388.576us   \u2502\n   \u2502      - ScanTime: 0ns            \u2502\n   \u2502      - ShowHintsTime_V1: 0ns    \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502[SegmentIterator]                    \u2502\n \u2502(Active: 0ns, non-child: 0.00)       \u2502\n \u2502  - Counters:                        \u2502\n \u2502      - BitmapIndexFilterTimer: 124ns\u2502\n \u2502      - BlockLoadTime: 179.202us     \u2502\n \u2502      - BlockSeekCount: 5            \u2502\n \u2502      - BlockSeekTime: 18.792us      \u2502\n \u2502      - BlocksLoad: 4                \u2502\n \u2502      - CachedPagesNum: 2            \u2502\n \u2502      - CompressedBytesRead: 0.00    \u2502\n \u2502      - DecompressorTimer: 0ns       \u2502\n \u2502      - IOTimer: 0ns                 \u2502\n \u2502      - IndexLoadTime_V1: 0ns        \u2502\n \u2502      - NumSegmentFiltered: 0        \u2502\n \u2502      - NumSegmentTotal: 2           \u2502\n \u2502      - RawRowsRead: 4               \u2502\n \u2502      - RowsBitmapIndexFiltered: 0   \u2502\n \u2502      - RowsBloomFilterFiltered: 0   \u2502\n \u2502      - RowsConditionsFiltered: 0    \u2502\n \u2502      - RowsKeyRangeFiltered: 0      \u2502\n \u2502      - RowsStatsFiltered: 0         \u2502\n \u2502      - RowsVectorPredFiltered: 0    \u2502\n \u2502      - TotalPagesNum: 2             \u2502\n \u2502      - UncompressedBytesRead: 0.00  \u2502\n \u2502      - VectorPredEvalTime: 0ns      \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SHOW, QUERY, PROFILE\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let t={},l=r.createContext(t);function a(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);