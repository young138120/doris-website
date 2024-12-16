"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["667765"],{842514:function(e,n,r){r.r(n),r.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>t});var l=JSON.parse('{"id":"query-acceleration/tuning/overview","title":"\u67E5\u8BE2\u8C03\u4F18\u6982\u8FF0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/tuning/overview.md","sourceDirName":"query-acceleration/tuning","slug":"/query-acceleration/tuning/overview","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/overview","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u67E5\u8BE2\u8C03\u4F18\u6982\u8FF0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u7EDF\u8BA1\u4FE1\u606F","permalink":"/zh-CN/docs/dev/query-acceleration/statistics"},"next":{"title":"\u67E5\u8BE2\u6027\u80FD\u5206\u6790","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/query-profile"}}'),i=r("785893"),s=r("250065");let t={title:"\u67E5\u8BE2\u8C03\u4F18\u6982\u8FF0",language:"zh-CN"},a=void 0,o={},d=[{value:"\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177",id:"\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177",level:2},{value:"Doris Manager \u76D1\u63A7\u4E0E\u65E5\u5FD7",id:"doris-manager-\u76D1\u63A7\u4E0E\u65E5\u5FD7",level:3},{value:"\u76F4\u67E5 fe.audit.log",id:"\u76F4\u67E5-feauditlog",level:3},{value:"\u6027\u80FD\u8C03\u4F18\u5DE5\u5177",id:"\u6027\u80FD\u8C03\u4F18\u5DE5\u5177",level:2},{value:"Doris Explain",id:"doris-explain",level:3},{value:"Doris Profile",id:"doris-profile",level:3},{value:"\u6027\u80FD\u8C03\u4F18\u6D41\u7A0B",id:"\u6027\u80FD\u8C03\u4F18\u6D41\u7A0B",level:2},{value:"\u7B2C\u4E00\u6B65\uFF1A\u4F7F\u7528\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u8FDB\u884C\u6162\u67E5\u8BE2\u5B9A\u4F4D",id:"\u7B2C\u4E00\u6B65\u4F7F\u7528\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u8FDB\u884C\u6162\u67E5\u8BE2\u5B9A\u4F4D",level:3},{value:"\u7B2C\u4E8C\u6B65\uFF1ASchema \u8BBE\u8BA1\u4E0E\u8C03\u4F18",id:"\u7B2C\u4E8C\u6B65schema-\u8BBE\u8BA1\u4E0E\u8C03\u4F18",level:3},{value:"\u7B2C\u4E09\u6B65\uFF1A\u8BA1\u5212\u8C03\u4F18",id:"\u7B2C\u4E09\u6B65\u8BA1\u5212\u8C03\u4F18",level:3},{value:"\u7B2C\u56DB\u6B65\uFF1A\u6267\u884C\u8C03\u4F18",id:"\u7B2C\u56DB\u6B65\u6267\u884C\u8C03\u4F18",level:3},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function c(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u67E5\u8BE2\u6027\u80FD\u8C03\u4F18\u662F\u4E00\u4E2A\u7CFB\u7EDF\u5DE5\u7A0B\uFF0C\u9700\u8981\u4ECE\u591A\u5C42\u6B21\u3001\u591A\u7EF4\u5EA6\u5BF9\u6570\u636E\u5E93\u7CFB\u7EDF\u8FDB\u884C\u8C03\u4F18\u3002\u4EE5\u4E0B\u662F\u8C03\u4F18\u6D41\u7A0B\u548C\u65B9\u6CD5\u8BBA\u6982\u8FF0\uFF1A"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\uFF0C\u4E1A\u52A1\u4EBA\u5458\u548C\u6570\u636E\u5E93\u8FD0\u7EF4\u7BA1\u7406\u4EBA\u5458\uFF08DBA\uFF09\u9700\u8981\u5BF9\u6240\u4F7F\u7528\u7684\u7CFB\u7EDF\u6709\u5168\u9762\u7684\u4E86\u89E3\uFF0C\u8FD9\u5305\u62EC\u4E1A\u52A1\u7CFB\u7EDF\u4F7F\u7528\u7684\u786C\u4EF6\u3001\u96C6\u7FA4\u7684\u89C4\u6A21\u3001\u4F7F\u7528\u7684\u6570\u636E\u5E93\u8F6F\u4EF6\u7248\u672C\uFF0C\u4EE5\u53CA\u5177\u4F53\u8F6F\u4EF6\u7248\u672C\u6240\u63D0\u4F9B\u7684\u7279\u6027\u7B49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5176\u6B21\uFF0C\u4E00\u4E2A\u597D\u7528\u7684\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u662F\u5B9A\u4F4D\u6027\u80FD\u95EE\u9898\u7684\u5FC5\u8981\u524D\u63D0\u3002\u53EA\u6709\u9AD8\u6548\u5FEB\u901F\u5730\u5B9A\u4F4D\u5230\u6162 SQL\uFF0C\u624D\u80FD\u8FDB\u884C\u540E\u7EED\u7684\u5177\u4F53 SQL \u6027\u80FD\u8C03\u4F18\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u8FDB\u5165\u6027\u80FD\u8C03\u4F18\u73AF\u8282\u4E4B\u540E\uFF0C\u4E00\u4E9B\u5E38\u7528\u7684\u8C03\u4F18\u5DE5\u5177\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002\u8FD9\u4E9B\u5DE5\u5177\u9700\u8981\u63D0\u4F9B SQL \u5177\u4F53\u6267\u884C\u65F6\u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4EE5\u4FBF\u5B9A\u4F4D\u76F8\u5E94\u7684\u6027\u80FD\u74F6\u9888\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u6027\u80FD\u8C03\u4F18\u9700\u8981\u4ECE\u5168\u5C40\u89C6\u89D2\u6765\u89C2\u5BDF\u548C\u5BA1\u89C6\u5F53\u524D\u7CFB\u7EDF\u7684\u6027\u80FD\u72B6\u51B5\uFF0C\u80FD\u591F\u5B9A\u4F4D\u5230\u5177\u4F53\u7684\u5B58\u5728\u6027\u80FD\u95EE\u9898\u7684\u4E1A\u52A1 SQL\uFF0C\u7136\u540E\u8FD0\u7528\u8C03\u4F18\u5DE5\u5177\u53D1\u73B0\u5177\u4F53\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u518D\u8FDB\u884C\u5177\u4F53\u7684\u6027\u80FD\u8C03\u4F18\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u57FA\u4E8E\u4E0A\u8FF0\u8C03\u4F18\u6D41\u7A0B\u548C\u65B9\u6CD5\u8BBA\uFF0CApache Doris \u5728\u4E0A\u8FF0\u5404\u4E2A\u5C42\u9762\u90FD\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684\u5DE5\u5177\u3002\u4E0B\u6587\u5C06\u5206\u522B\u5BF9",(0,i.jsx)(n.strong,{children:"\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u3001\u8C03\u4F18\u5DE5\u5177\u3001\u8C03\u4F18\u6D41\u7A0B"}),"\u4E09\u4E2A\u65B9\u9762\u8FDB\u884C\u4ECB\u7ECD\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177",children:"\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177"}),"\n",(0,i.jsx)(n.p,{children:"\u9AD8\u6548\u597D\u7528\u7684\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u5BF9\u4E8E\u6570\u636E\u5E93\u7CFB\u7EDF\u7684\u8C03\u4F18\u81F3\u5173\u91CD\u8981\uFF0C\u56E0\u4E3A\u8FD9\u5173\u7CFB\u5230\u662F\u5426\u80FD\u5FEB\u901F\u5B9A\u4F4D\u5230\u5B58\u5728\u6027\u80FD\u95EE\u9898\u7684\u4E1A\u52A1 SQL\uFF0C\u7EE7\u800C\u5FEB\u901F\u5B9A\u4F4D\u548C\u89E3\u51B3\u5177\u4F53\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u4FDD\u8BC1\u6570\u636E\u5E93\u7CFB\u7EDF\u670D\u52A1\u7684 SLA\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u524D\uFF0CDoris \u7CFB\u7EDF\u9ED8\u8BA4\u5C06\u6267\u884C\u65F6\u95F4\u8D85\u8FC7 5s \u7684 SQL \u8BA4\u5B9A\u4E3A\u6162 SQL\uFF08\u8FD9\u4E00\u9608\u503C\u53EF\u901A\u8FC7",(0,i.jsx)(n.code,{children:"config.qe_slow_log_ms"})," \u8FDB\u884C\u914D\u7F6E\uFF09\u3002Doris \u63D0\u4F9B\u4E86\u4E24\u79CD\u8BCA\u65AD\u6E20\u9053\uFF0C\u80FD\u591F\u5E2E\u52A9\u5FEB\u901F\u5B9A\u4F4D\u5B58\u5728\u6027\u80FD\u95EE\u9898\u7684\u6162 SQL\uFF0C\u5206\u522B\u5982\u4E0B\uFF1A"]}),"\n",(0,i.jsx)(n.h3,{id:"doris-manager-\u76D1\u63A7\u4E0E\u65E5\u5FD7",children:"Doris Manager \u76D1\u63A7\u4E0E\u65E5\u5FD7"}),"\n",(0,i.jsx)(n.p,{children:"Doris Manager \u76D1\u63A7\u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684\u529F\u80FD\u754C\u9762\uFF0C\u7528\u6237\u53EF\u4EE5\u65B9\u4FBF\u5730\u83B7\u53D6\u5305\u62EC\u96C6\u7FA4\u4FE1\u606F\u3001\u786C\u4EF6\u4FE1\u606F\u3001Doris \u7248\u672C\u4FE1\u606F\u7B49\u57FA\u7840\u4FE1\u606F\uFF0C\u4EE5\u53CA FE / BE \u8282\u70B9\u4FE1\u606F\u548C CPU / MEM / IO / NETWORK \u7B49\u7EF4\u5EA6\u7684\u5B9E\u65F6\u76D1\u63A7\u4FE1\u606F\u3002\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Doris Manager \u76D1\u63A7\u4E0E\u65E5\u5FD7",src:r(178016).Z+"",width:"2560",height:"1384"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6027\u80FD\u76D1\u63A7\u65B9\u9762\uFF0C\u5F53\u524D Manager \u63D0\u4F9B\u4E86\u57FA\u4E8E\u65E5\u5FD7\u7684\u6162 SQL \u5B9A\u4F4D\u65B9\u5F0F\u3002\u7528\u6237\u53EF\u4EE5\u901A\u8FC7\u9009\u62E9\u7279\u5B9A FE \u8282\u70B9\u4E0A\u7684",(0,i.jsx)(n.code,{children:"fe.audit.log"}),"\u6765\u67E5\u770B\u6162 SQL\u3002\u53EA\u9700\u5728\u641C\u7D22\u6846\u4E2D\u8F93\u5165\u201Cslow_query\u201D\uFF0C\u5373\u53EF\u5728\u9875\u9762\u4E0A\u5C55\u793A\u51FA\u5F53\u524D\u7CFB\u7EDF\u7684\u5386\u53F2\u6162 SQL \u4FE1\u606F\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Doris Manager \u76D1\u63A7\u4E0E\u65E5\u5FD7",src:r(193753).Z+"",width:"2560",height:"1384"})}),"\n",(0,i.jsx)(n.h3,{id:"\u76F4\u67E5-feauditlog",children:"\u76F4\u67E5 fe.audit.log"}),"\n",(0,i.jsxs)(n.p,{children:["\u5F53\u524D Doris FE \u63D0\u4F9B\u4E86\u56DB\u79CD\u7C7B\u578B\u7684 Audit Log\uFF0C\u5305\u62EC ",(0,i.jsx)(n.code,{children:"slow_query"}),"\u3001",(0,i.jsx)(n.code,{children:"query"}),"\u3001",(0,i.jsx)(n.code,{children:"load"})," \u548C ",(0,i.jsx)(n.code,{children:"stream_load"}),"\u3002Audit Log  \u9664\u4E86\u5728\u5B89\u88C5\u90E8\u7F72 Manager \u670D\u52A1\u7684\u96C6\u7FA4\u4E0A\u901A\u8FC7\u65E5\u5FD7\u9875\u9762\u8BBF\u95EE\u83B7\u53D6\u4E4B\u5916\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE FE \u6240\u5728\u8282\u70B9\u7684 ",(0,i.jsx)(n.code,{children:"fe/log/fe.audit.log"})," \u6587\u4EF6\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7\u76F4\u67E5 ",(0,i.jsx)(n.code,{children:"fe.audit.log"})," \u4E2D\u7684 ",(0,i.jsx)(n.code,{children:"slow_query"})," \u6807\u7B7E\uFF0C\u53EF\u4EE5\u5FEB\u901F\u7B5B\u9009\u51FA\u6267\u884C\u7F13\u6162\u7684\u67E5\u8BE2 SQL\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"2024-07-18 11:23:13,042 [slow_query] |Client=127.0.0.1:63510|User=root|Ctl=internal|Db=tpch_sf1000|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=11603|ScanBytes=236667379712|ScanRows=13649979418|ReturnRows=100|StmtId=1689|QueryId=91ff336304f14182-9ca537eee75b3856|IsQuery=true|isNereids=true|feIp=172.21.0.10|Stmt=select     c_name,     c_custkey,     o_orderkey,     o_orderdate,     o_totalprice,     sum(l_quantity) from     customer,     orders,     lineitem where     o_orderkey  in  (         select             l_orderkey         from             lineitem         group  by             l_orderkey  having                 sum(l_quantity)  >  300     )     and  c_custkey  =  o_custkey     and  o_orderkey  =  l_orderkey group  by     c_name,     c_custkey,     o_orderkey,     o_orderdate,     o_totalprice order  by     o_totalprice  desc,     o_orderdate limit  100|CpuTimeMS=918556|ShuffleSendBytes=3267419|ShuffleSendRows=89668|SqlHash=b4e1de9f251214a30188180f37907f7d|peakMemoryBytes=38720935552|SqlDigest=d41d8cd98f00b204e9800998ecf8427e|cloudClusterName=UNKNOWN|TraceId=|WorkloadGroup=normal|FuzzyVariables=|scanBytesFromLocalStorage=0|scanBytesFromRemoteStorage=0\n2024-07-18 11:23:33,043 [slow_query] |Client=127.0.0.1:26672|User=root|Ctl=internal|Db=tpch_sf1000|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=8978|ScanBytes=334985555968|ScanRows=10717654374|ReturnRows=100|StmtId=1815|QueryId=6e1fae453cb04d9a-b1e5f94d9cea1885|IsQuery=true|isNereids=true|feIp=172.21.0.10|Stmt=select     s_name,     count(*) as numwait from     supplier,     lineitem l1,     orders,     nation where     s_suppkey = l1.l_suppkey     and o_orderkey = l1.l_orderkey     and o_orderstatus = 'F'     and l1.l_receiptdate > l1.l_commitdate     and exists (         select             *         from             lineitem l2         where                 l2.l_orderkey = l1.l_orderkey           and l2.l_suppkey <> l1.l_suppkey     )     and not exists (         select             *         from             lineitem l3         where                 l3.l_orderkey = l1.l_orderkey           and l3.l_suppkey <> l1.l_suppkey           and l3.l_receiptdate > l3.l_commitdate     )     and s_nationkey = n_nationkey     and n_name = 'SAUDI ARABIA' group by     s_name order by     numwait desc,     s_name limit 100|CpuTimeMS=990127|ShuffleSendBytes=59208164|ShuffleSendRows=3651504|SqlHash=f8a30e4182d72cce3eff6cb385005b1f|peakMemoryBytes=10495660672|SqlDigest=d41d8cd98f00b204e9800998ecf8427e|cloudClusterName=UNKNOWN|TraceId=|WorkloadGroup=normal|FuzzyVariables=|scanBytesFromLocalStorage=0|scanBytesFromRemoteStorage=0\n2024-07-18 11:23:41,044 [slow_query] |Client=127.0.0.1:26684|User=root|Ctl=internal|Db=tpch_sf1000|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=8514|ScanBytes=334986551296|ScanRows=10717654374|ReturnRows=100|StmtId=1833|QueryId=4f91483464ce4aa8-beeed7dcb8675bc8|IsQuery=true|isNereids=true|feIp=172.21.0.10|Stmt=select     s_name,     count(*) as numwait from     supplier,     lineitem l1,     orders,     nation where     s_suppkey = l1.l_suppkey     and o_orderkey = l1.l_orderkey     and o_orderstatus = 'F'     and l1.l_receiptdate > l1.l_commitdate     and exists (         select             *         from             lineitem l2         where                 l2.l_orderkey = l1.l_orderkey           and l2.l_suppkey <> l1.l_suppkey     )     and not exists (         select             *         from             lineitem l3         where                 l3.l_orderkey = l1.l_orderkey           and l3.l_suppkey <> l1.l_suppkey           and l3.l_receiptdate > l3.l_commitdate     )     and s_nationkey = n_nationkey     and n_name = 'SAUDI ARABIA' group by     s_name order by     numwait desc,     s_name limit 100|CpuTimeMS=925841|ShuffleSendBytes=59223190|ShuffleSendRows=3651602|SqlHash=f8a30e4182d72cce3eff6cb385005b1f|peakMemoryBytes=10505123104|SqlDigest=d41d8cd98f00b204e9800998ecf8427e|cloudClusterName=UNKNOWN|TraceId=|WorkloadGroup=normal|FuzzyVariables=|scanBytesFromLocalStorage=0|scanBytesFromRemoteStorage=0\n2024-07-18 11:23:49,044 [slow_query] |Client=127.0.0.1:10748|User=root|Ctl=internal|Db=tpch_sf1000|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=8660|ScanBytes=334987673600|ScanRows=10717654374|ReturnRows=100|StmtId=1851|QueryId=4599cb1bab204f80-ac430dd78b45e3da|IsQuery=true|isNereids=true|feIp=172.21.0.10|Stmt=select     s_name,     count(*) as numwait from     supplier,     lineitem l1,     orders,     nation where     s_suppkey = l1.l_suppkey     and o_orderkey = l1.l_orderkey     and o_orderstatus = 'F'     and l1.l_receiptdate > l1.l_commitdate     and exists (         select             *         from             lineitem l2         where                 l2.l_orderkey = l1.l_orderkey           and l2.l_suppkey <> l1.l_suppkey     )     and not exists (         select             *         from             lineitem l3         where                 l3.l_orderkey = l1.l_orderkey           and l3.l_suppkey <> l1.l_suppkey           and l3.l_receiptdate > l3.l_commitdate     )     and s_nationkey = n_nationkey     and n_name = 'SAUDI ARABIA' group by     s_name order by     numwait desc,     s_name limit 100|CpuTimeMS=932664|ShuffleSendBytes=59223178|ShuffleSendRows=3651991|SqlHash=f8a30e4182d72cce3eff6cb385005b1f|peakMemoryBytes=10532849344|SqlDigest=d41d8cd98f00b204e9800998ecf8427e|cloudClusterName=UNKNOWN|TraceId=|WorkloadGroup=normal|FuzzyVariables=|scanBytesFromLocalStorage=0|scanBytesFromRemoteStorage=0\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"fe.audit.log"})," \u83B7\u53D6\u7684\u6162 SQL\uFF0C\u4F7F\u7528\u8005\u53EF\u4EE5\u65B9\u4FBF\u5730\u83B7\u53D6\u6267\u884C\u65F6\u95F4\u3001\u626B\u63CF\u884C\u6570\u3001\u8FD4\u56DE\u884C\u6570\u3001SQL \u8BED\u53E5\u7B49\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u4E3A\u8FDB\u4E00\u6B65\u91CD\u73B0\u548C\u5B9A\u4F4D\u6027\u80FD\u95EE\u9898\u5960\u5B9A\u4E86\u57FA\u7840\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6027\u80FD\u8C03\u4F18\u5DE5\u5177",children:"\u6027\u80FD\u8C03\u4F18\u5DE5\u5177"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0A\u8FF0\u8BCA\u65AD\u5DE5\u5177\u5DF2\u7ECF\u5E2E\u52A9\u4F7F\u7528\u548C\u8FD0\u7EF4\u4EBA\u5458\u5B9A\u4F4D\u5230\u5177\u4F53\u7684\u6162 SQL\u3002\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5F00\u59CB\u5BF9\u5177\u4F53\u7684\u6162 SQL \u8FDB\u884C\u5206\u6790\u548C\u8C03\u4F18\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E\u4E00\u6761\u5177\u4F53\u7684\u6162 SQL \u6765\u8BF4\uFF0C\u9996\u5148\u9700\u8981\u8FDB\u884C\u6027\u80FD\u74F6\u9888\u7684\u5206\u6790\uFF0C\u4EE5\u786E\u5B9A\u5177\u4F53\u6162\u5728\u54EA\u4E2A\u73AF\u8282\u3002"}),"\n",(0,i.jsx)(n.p,{children:"SQL \u7684\u6267\u884C\u8FC7\u7A0B\u5927\u81F4\u53EF\u4EE5\u5206\u4E3A\u8BA1\u5212\u751F\u6210\u548C\u8BA1\u5212\u6267\u884C\u4E24\u4E2A\u9636\u6BB5\uFF0C\u8FD9\u4E24\u4E2A\u90E8\u5206\u51FA\u73B0\u95EE\u9898\u90FD\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u74F6\u9888\u7684\u53D1\u751F\u3002\u57FA\u4E8E\u6B64\uFF0CDoris \u63D0\u4F9B\u4E86\u4E24\u4E2A\u4E3B\u8981\u5DE5\u5177\uFF0C\u6765\u5206\u522B\u5206\u6790\u8BA1\u5212\u4EE5\u53CA\u8BA1\u5212\u7684\u6267\u884C\u6027\u80FD\u3002\u4E0B\u9762\u5206\u522B\u5C31\u8FD9\u4E24\u4E2A\u4E3B\u8981\u7684\u5206\u6790\u8C03\u4F18\u5DE5\u5177\u8FDB\u884C\u4ECB\u7ECD\uFF1A"}),"\n",(0,i.jsx)(n.h3,{id:"doris-explain",children:"Doris Explain"}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C\u8BA1\u5212\u662F\u5BF9\u4E00\u6761 SQL \u5177\u4F53\u7684\u6267\u884C\u65B9\u5F0F\u548C\u6267\u884C\u8FC7\u7A0B\u7684\u63CF\u8FF0\u3002\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u6D89\u53CA\u4E24\u8868\u8FDE\u63A5\u7684 SQL\uFF0C\u6267\u884C\u8BA1\u5212\u4F1A\u5C55\u793A\u8FD9\u4E24\u5F20\u8868\u7684\u8BBF\u95EE\u65B9\u5F0F\u4FE1\u606F\u3001\u8FDE\u63A5\u65B9\u5F0F\u4FE1\u606F\uFF0C\u4EE5\u53CA\u5404\u4E2A\u64CD\u4F5C\u4E4B\u95F4\u7684\u987A\u5E8F\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Doris \u7CFB\u7EDF\u4E2D\u63D0\u4F9B\u4E86 Explain \u5DE5\u5177\uFF0C\u5B83\u53EF\u4EE5\u5C55\u793A\u4E00\u4E2A SQL \u7684\u5177\u4F53\u6267\u884C\u8BA1\u5212\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u901A\u8FC7\u5BF9 Explain \u8F93\u51FA\u7684\u8BA1\u5212\u8FDB\u884C\u5206\u6790\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u4F7F\u7528\u8005\u5B9A\u4F4D\u8BA1\u5212\u5C42\u9762\u7684\u74F6\u9888\uFF0C\u4ECE\u800C\u9488\u5BF9\u4E0D\u540C\u7684\u60C5\u51B5\u8FDB\u884C\u6267\u884C\u8BA1\u5212\u5C42\u9762\u7684\u8C03\u4F18\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u63D0\u4F9B\u4E86\u591A\u79CD\u4E0D\u540C\u7C92\u5EA6\u7684 Explain \u5DE5\u5177\uFF0C\u5982 Explain Verbose\u3001Explain All Plan\u3001Explain Memo Plan\u3001Explain Shape Plan\uFF0C\u5206\u522B\u7528\u4E8E\u5C55\u793A\u6700\u7EC8\u7269\u7406\u8BA1\u5212\u3001\u5404\u9636\u6BB5\u903B\u8F91\u8BA1\u5212\u3001\u57FA\u4E8E\u6210\u672C\u4F18\u5316\u8FC7\u7A0B\u7684\u8BA1\u5212\u3001\u8BA1\u5212\u5F62\u6001\u7B49\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u83B7\u53D6 Explain \u8F93\u51FA\u540E\uFF0C\u4E1A\u52A1\u4EBA\u5458\u6216\u8005 DBA \u5C31\u53EF\u4EE5\u5206\u6790\u5F53\u524D\u8BA1\u5212\u7684\u6027\u80FD\u74F6\u9888\u3002\u4F8B\u5982\uFF0C\u901A\u8FC7\u5206\u6790\u6267\u884C\u8BA1\u5212\u53D1\u73B0 Filter \u6CA1\u6709\u4E0B\u63A8\u5230\u57FA\u8868\uFF0C\u5BFC\u81F4\u6CA1\u6709\u63D0\u524D\u8FC7\u6EE4\u6570\u636E\uFF0C\u4F7F\u5F97\u53C2\u4E0E\u8BA1\u7B97\u7684\u6570\u636E\u91CF\u8FC7\u591A\uFF0C\u4ECE\u800C\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u53C8\u5982\uFF0C\u4E24\u8868\u7684 Inner \u7B49\u503C\u8FDE\u63A5\u4E2D\uFF0C\u8FDE\u63A5\u6761\u4EF6\u4E00\u4FA7\u7684\u8FC7\u6EE4\u6761\u4EF6\u6CA1\u6709\u63A8\u5BFC\u5230\u53E6\u5916\u4E00\u4FA7\uFF0C\u5BFC\u81F4\u6CA1\u6709\u5BF9\u63A8\u5BFC\u4E00\u4FA7\u7684\u8868\u8FDB\u884C\u63D0\u524D\u8FC7\u6EE4\uFF0C\u4E5F\u53EF\u80FD\u5BFC\u81F4\u6027\u80FD\u95EE\u9898\u7B49\u3002\u6B64\u7C7B\u6027\u80FD\u74F6\u9888\u90FD\u53EF\u4EE5\u901A\u8FC7\u5206\u6790 Explain \u7684\u8F93\u51FA\u6765\u5B9A\u4F4D\u548C\u89E3\u51B3\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u8003",(0,i.jsx)(n.a,{href:"../../query-acceleration/tuning/tuning-plan/optimizing-table-schema",children:"\u8BA1\u5212\u8C03\u4F18"})]}),"\n",(0,i.jsx)(n.h3,{id:"doris-profile",children:"Doris Profile"}),"\n",(0,i.jsx)(n.p,{children:"\u6B64\u5916\uFF0C\u8FD8\u6709\u5F88\u591A\u5E38\u7528\u7684\u7CFB\u7EDF\u7EA7\u522B\u7684\u8C03\u4F18\u5DE5\u5177\uFF0C\u53EF\u4EE5\u7528\u6765\u8F85\u52A9\u5B9A\u4F4D\u6267\u884C\u671F\u7684\u6027\u80FD\u74F6\u9888\uFF0C\u6BD4\u5982\u5E38\u7528\u7684 Linux \u4E0B top / free/ perf/ sar/ iostats \u7B49\uFF0C\u90FD\u53EF\u4EE5\u7528\u6765\u89C2\u5BDF SQL \u8FD0\u884C\u65F6\u7CFB\u7EDF CPU/ MEM / IO / NETWORK \u72B6\u6001\uFF0C\u4EE5\u8F85\u52A9\u5B9A\u4F4D\u6027\u80FD\u74F6\u9888\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u53C2\u8003 ",(0,i.jsx)(n.a,{href:"../../query-acceleration/tuning/query-profile",children:"Profile"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u6027\u80FD\u8C03\u4F18\u6D41\u7A0B",children:"\u6027\u80FD\u8C03\u4F18\u6D41\u7A0B"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u4E0A\u6240\u8FF0\uFF0C\u6027\u80FD\u8C03\u4F18\u4F5C\u4E3A\u7CFB\u7EDF\u5DE5\u7A0B\uFF0C\u9700\u8981\u4E00\u4E2A\u6D41\u7A0B\u5316\u3001\u5206\u9636\u6BB5\u7684\u65B9\u6CD5\u4F53\u7CFB\uFF0C\u6765\u8FDB\u884C\u7CFB\u7EDF\u5316\u7684\u6027\u80FD\u8BCA\u65AD\u548C\u8C03\u4F18\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u6027\u80FD\u8C03\u4F18\u63A8\u8350\u4F7F\u7528\u5982\u4E0B\u6D41\u7A0B\uFF0C\u5E76\u8F85\u52A9\u4F7F\u7528\u4E0A\u8FF0\u6027\u80FD\u8BCA\u65AD\u548C\u8C03\u4F18\u5DE5\u5177\uFF0C\u6765\u8FDB\u884C\u7CFB\u7EDF\u5316\u7684\u5B9A\u4F4D\u548C\u89E3\u51B3\u3002\u5B8C\u6574\u7684\u8C03\u4F18\u56DB\u6B65\u6D41\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"\u6027\u80FD\u8C03\u4F18\u6D41\u7A0B",src:r(39248).Z+"",width:"2560",height:"600"})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C\u4E00\u6B65\u4F7F\u7528\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u8FDB\u884C\u6162\u67E5\u8BE2\u5B9A\u4F4D",children:"\u7B2C\u4E00\u6B65\uFF1A\u4F7F\u7528\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u8FDB\u884C\u6162\u67E5\u8BE2\u5B9A\u4F4D"}),"\n",(0,i.jsx)(n.p,{children:"\u9488\u5BF9\u8FD0\u884C\u5728 Doris \u4E0A\u7684\u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u4F7F\u7528\u4E0A\u8FF0\u6027\u80FD\u8BCA\u65AD\u5DE5\u5177\u8FDB\u884C \u6162 SQL \u7684\u5B9A\u4F4D\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u5DF2\u7ECF\u5B89\u88C5\u4E86 Doris Manager\uFF0C\u63A8\u8350\u4F7F\u7528 Manager \u7684\u76D1\u63A7\u548C\u65E5\u5FD7\u9875\u9762\uFF0C\u8FDB\u884C\u53EF\u89C6\u5316\u7684\u6162\u67E5\u8BE2\u5B9A\u4F4D\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C\u6CA1\u6709\u5B89\u88C5 Manager\uFF0C\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B FE \u8282\u70B9\u4E0A\u7684 ",(0,i.jsx)(n.code,{children:"fe.audit.log"}),"\u6765\u83B7\u53D6\u3002\u9488\u5BF9\u7B5B\u9009\u51FA\u7684\u6162 SQL \u5217\u8868\uFF0C\u9010\u4E00\u6309\u7167\u4F18\u5148\u7EA7\u548C\u4E25\u91CD\u7A0B\u5EA6\u8FDB\u884C SQL \u7EA7\u522B\u7684\u8C03\u4F18\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C\u4E8C\u6B65schema-\u8BBE\u8BA1\u4E0E\u8C03\u4F18",children:"\u7B2C\u4E8C\u6B65\uFF1ASchema \u8BBE\u8BA1\u4E0E\u8C03\u4F18"}),"\n",(0,i.jsx)(n.p,{children:"\u5B9A\u4F4D\u5230\u5177\u4F53\u7684\u6162 SQL \u4E4B\u540E\uFF0C\u4F18\u5148\u9700\u8981\u5BF9\u4E1A\u52A1 Schema \u8BBE\u8BA1\u8FDB\u884C\u68C0\u67E5\u4E0E\u8C03\u4F18\uFF0C\u6392\u9664\u56E0\u4E3A Schema \u8BBE\u8BA1\u4E0D\u5408\u7406\u5BFC\u81F4\u7684\u6027\u80FD\u95EE\u9898\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Schema \u8BBE\u8BA1\u8C03\u4F18\u57FA\u672C\u53EF\u5206\u4E3A\u4E09\u4E2A\u65B9\u9762\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u8868\u7EA7\u522B Schema \u8BBE\u8BA1\u8C03\u4F18\uFF0C\u5982\u5206\u533A\u5206\u6876\u4E2A\u6570\u548C\u5B57\u6BB5\u8C03\u4F18\uFF1B"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7D22\u5F15\u7684\u8BBE\u8BA1\u548C\u8C03\u4F18\uFF1B"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u7279\u5B9A\u4F18\u5316\u624B\u6BB5\u7684\u4F7F\u7528\uFF0C\u5982\u5EFA\u7ACB Colocate Group \u7B49\u3002\u4E3B\u8981\u76EE\u7684\u662F\u6392\u9664\u56E0\u4E3A Schema \u8BBE\u8BA1\u4E0D\u5408\u7406\u6216\u8005\u6CA1\u6709\u5145\u5206\u5229\u7528 Doris \u73B0\u6709\u4F18\u5316\u80FD\u529B\u5BFC\u81F4\u7684\u6027\u80FD\u95EE\u9898"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u7EC6\u8C03\u4F18\u6848\u4F8B\u8BF7\u53C2\u8003\u6587\u6863",(0,i.jsx)(n.a,{href:"../../query-acceleration/tuning/tuning-plan/optimizing-table-schema",children:"\u8BA1\u5212\u8C03\u4F18"})]}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C\u4E09\u6B65\u8BA1\u5212\u8C03\u4F18",children:"\u7B2C\u4E09\u6B65\uFF1A\u8BA1\u5212\u8C03\u4F18"}),"\n",(0,i.jsx)(n.p,{children:"\u68C0\u67E5\u548C\u4F18\u5316\u5B8C\u4E1A\u52A1 Schema \u540E\uFF0C\u5C06\u8FDB\u5165\u8C03\u4F18\u7684\u4E3B\u4F53\u5DE5\u4F5C\uFF0C\u5373\u8BA1\u5212\u8C03\u4F18\u4E0E\u6267\u884C\u8C03\u4F18\u3002\u5982\u4E0A\u6240\u8FF0\uFF0C\u5728\u6027\u80FD\u8C03\u4F18\u5DE5\u5177\u4E2D\uFF0C\u8FD9\u4E2A\u9636\u6BB5\u7684\u4E3B\u8981\u5DE5\u4F5C\u662F\u5145\u5206\u5229\u7528 Doris \u6240\u63D0\u4F9B\u7684\u5404\u79CD\u5C42\u7EA7\u7684 Explain \u5DE5\u5177\uFF0C\u5BF9\u6162 SQL \u7684\u6267\u884C\u8BA1\u5212\u8FDB\u884C\u7CFB\u7EDF\u5206\u6790\uFF0C\u4EE5\u627E\u5230\u5173\u952E\u4F18\u5316\u70B9\u8FDB\u884C\u9488\u5BF9\u6027\u4F18\u5316\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9488\u5BF9\u5355\u8868\u67E5\u8BE2\u548C\u5206\u6790\u573A\u666F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5206\u6790\u6267\u884C\u8BA1\u5212\u3001\u67E5\u770B\u5206\u533A\u88C1\u526A\u662F\u5426\u6B63\u5E38\u3001\u662F\u5426\u53EF\u4EE5\u6784\u5EFA\u5355\u8868\u7269\u5316\u89C6\u56FE\u8FDB\u884C\u67E5\u8BE2\u52A0\u901F\u7B49\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9488\u5BF9\u590D\u6742\u591A\u8868\u5206\u6790\u573A\u666F\uFF0C\u53EF\u4EE5\u5206\u6790\u7EDF\u8BA1\u4FE1\u606F\u662F\u5426\u6B63\u5E38\u3001\u5206\u6790 Join Order \u662F\u5426\u5408\u7406\u3001\u5206\u6790 Runtime Filter \u662F\u5426\u6B63\u5E38\u89C4\u5212\u7B49\uFF0C\u5B9A\u4F4D\u5177\u4F53\u7684\u6027\u80FD\u74F6\u9888\u3002\u5982\u679C\u51FA\u73B0\u975E\u9884\u671F\u7684\u60C5\u51B5\uFF0C\u6BD4\u5982 Join Order \u4E0D\u5408\u7406\uFF0C\u901A\u8FC7\u89C2\u5BDF Explain \u7684\u7ED3\u679C\u3001\u624B\u5DE5\u6307\u5B9A Join Jint \u8FDB\u884C\u6267\u884C\u8BA1\u5212\u7684\u7ED1\u5B9A\u3001\u63A7\u5236 Join \u987A\u5E8F\u548C Shuffle \u65B9\u5F0F\u3001\u63A7\u5236\u4EE3\u4EF7\u6539\u5199\u884C\u4E3A\u7B49\u64CD\u4F5C\u65B9\u6CD5\uFF0C\u4ECE\u800C\u8FBE\u5230\u8C03\u4F18\u6267\u884C\u8BA1\u5212\u7684\u76EE\u7684\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u9488\u5BF9\u90E8\u5206\u7279\u5B9A\u573A\u666F\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 Doris \u63D0\u4F9B\u7684\u9AD8\u7EA7\u529F\u80FD\uFF0C\u6BD4\u5982\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u6539\u5199\u3001SQL Cache \u7B49\u6765\u52A0\u901F\u67E5\u8BE2\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE6\u7EC6\u8C03\u4F18\u6848\u4F8B\u8BF7\u53C2\u8003\u6587\u6863",(0,i.jsx)(n.a,{href:"../../query-acceleration/tuning/tuning-plan/optimizing-table-schema",children:"\u8BA1\u5212\u8C03\u4F18"}),"\u3002"]}),"\n",(0,i.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,i.jsx)(n.p,{children:"\u5728\u5206\u6790\u5177\u4F53\u6027\u80FD\u95EE\u9898\u7684\u65F6\u5019\uFF0C\u63A8\u8350\u4F18\u5148\u4F7F\u7528 Explain \u5DE5\u5177\u8FDB\u884C\u6267\u884C\u8BA1\u5212\u7684\u5206\u6790\u548C\u8C03\u4F18\u3002\u8BA1\u5212\u95EE\u9898\u89E3\u51B3\u4E4B\u540E\uFF0C\u518D\u5229\u7528 Doris \u63D0\u4F9B\u7684\u6267\u884C\u8C03\u4F18\u5DE5\u5177\uFF0C\u5373 Profile \u8FDB\u884C\u540E\u7EED\u6267\u884C\u6027\u80FD\u7684\u5B9A\u4F4D\u548C\u8C03\u4F18\u3002\u5982\u679C\u4F7F\u7528\u5DE5\u5177\u7684\u987A\u5E8F\u98A0\u5012\uFF0C\u6709\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5206\u6790\u6548\u7387\u4F4E\u4E0B\uFF0C\u4E0D\u5229\u4E8E\u5FEB\u901F\u8FDB\u884C\u6027\u80FD\u95EE\u9898\u7684\u5B9A\u4F4D\u3002"})}),"\n",(0,i.jsx)(n.h3,{id:"\u7B2C\u56DB\u6B65\u6267\u884C\u8C03\u4F18",children:"\u7B2C\u56DB\u6B65\uFF1A\u6267\u884C\u8C03\u4F18"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u8FD9\u4E2A\u9636\u6BB5\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E SQL \u7684\u5B9E\u9645\u8FD0\u884C\u60C5\u51B5\uFF0C\u6765\u9A8C\u8BC1\u524D\u51E0\u6B65\u7684\u8C03\u4F18\u6548\u679C\u662F\u5426\u663E\u8457\uFF0C\u6216\u8005\u53D1\u73B0\u6162 SQL \u7684\u65B0\u74F6\u9888\u70B9\u3002\u63A5\u7740\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6309\u56FE\u7D22\u9AA5\uFF0C\u627E\u5230\u5BF9\u5E94\u7684\u6027\u80FD\u4F18\u5316\u65B9\u6848\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4EE5\u591A\u8868\u5206\u6790\u7684\u67E5\u8BE2\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5206\u6790 Query Profile\uFF0C\u6765\u68C0\u67E5 Join \u7684\u987A\u5E8F\u662F\u5426\u5408\u7406\uFF0CRuntime Filter \u662F\u5426\u751F\u6548\uFF0C\u4EE5\u53CA\u7B49\u5F85\u65F6\u95F4\u662F\u5426\u5408\u9002\u3002\u5F88\u591A\u65F6\u5019\uFF0C\u6267\u884C\u65F6\u7684\u8C03\u4F18\u66F4\u591A\u662F\u4E3A\u4E86\u4F50\u8BC1\u4E4B\u524D\u7684 Schema \u548C\u8BA1\u5212\u8C03\u4F18\u662F\u5426\u7B26\u5408\u9884\u671F\u3002\u8BE6\u7EC6\u7684\u8C03\u4F18\u6848\u4F8B\uFF0C\u8BF7\u53C2\u8003",(0,i.jsx)(n.a,{href:"../../query-acceleration/tuning/query-profile",children:"\u67E5\u8BE2 Profile \u5206\u6790"}),"\u7AE0\u8282\u3002\u6B64\u5916\uFF0CQuery Profile \u8FD8\u80FD\u53CD\u9988\u51FA\u4E00\u4E9B BE \u6216\u673A\u5668\u8D1F\u8F7D\u7684\u60C5\u51B5\uFF0C\u4F8B\u5982 CPU \u5360\u7528\u9AD8\u3001\u7F51\u7EDC\u5361\u987F\u7B49\u8FD0\u884C\u72B6\u6001\u95EE\u9898\u3002\u5728\u9488\u5BF9\u8FD9\u4E9B\u95EE\u9898\u8FDB\u884C\u8C03\u4F18\u65F6\uFF0C\u6211\u4EEC\u9700\u8981\u8DF3\u51FA Doris \u672C\u8EAB\uFF0C\u8FDB\u884C\u64CD\u4F5C\u7CFB\u7EDF\u7EA7\u522B\u7684\u8C03\u4F18\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,i.jsx)(n.p,{children:"\u67E5\u8BE2\u8C03\u4F18\u662F\u4E00\u4E2A\u7CFB\u7EDF\u5DE5\u7A0B\uFF0CDoris \u4E3A\u7528\u6237\u63D0\u4F9B\u4E86\u5404\u4E2A\u7EF4\u5EA6\u7684\u5DE5\u5177\uFF0C\u65B9\u4FBF\u4ECE\u4E0D\u540C\u5C42\u9762\u8FDB\u884C\u6027\u80FD\u95EE\u9898\u7684\u8BCA\u65AD\u3001\u5B9A\u4F4D\u3001\u5206\u6790\u4E0E\u89E3\u51B3\u3002\u4E1A\u52A1\u4EBA\u5458\u548C DBA \u53EA\u9700\u8981\u719F\u7EC3\u638C\u63E1\u5DE5\u5177\u4F7F\u7528\uFF0C\u5C31\u80FD\u66F4\u597D\u7684\u53D1\u6325 Doris \u5F3A\u5927\u6027\u80FD\u4F18\u52BF\uFF0C\u66F4\u597D\u7684\u9002\u914D\u4E1A\u52A1\u573A\u666F\u8FDB\u884C\u4E1A\u52A1\u8D4B\u80FD\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},178016:function(e,n,r){r.d(n,{Z:function(){return l}});let l=r.p+"assets/images/doris-manage-trace-log-1-ba4bd1f72784bc57c4e604e3653f018e.png"},193753:function(e,n,r){r.d(n,{Z:function(){return l}});let l=r.p+"assets/images/doris-manage-trace-log-2-4fea8cd5ea110510eca737115b1a2d77.png"},39248:function(e,n,r){r.d(n,{Z:function(){return l}});let l=r.p+"assets/images/query-tuning-steps-78b9a475a9dfec9ea7d20834161b3727.jpg"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return t}});var l=r(667294);let i={},s=l.createContext(i);function t(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);