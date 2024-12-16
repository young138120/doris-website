"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["685321"],{107918:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>t});var l=JSON.parse('{"id":"data-operate/transaction","title":"\u4E8B\u52A1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/transaction.md","sourceDirName":"data-operate","slug":"/data-operate/transaction","permalink":"/zh-CN/docs/3.0/data-operate/transaction","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u4E8B\u52A1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F5C\u4E1A\u8C03\u5EA6","permalink":"/zh-CN/docs/3.0/data-operate/scheduler/job-scheduler"},"next":{"title":"MySQL \u517C\u5BB9\u6027","permalink":"/zh-CN/docs/3.0/query-data/mysql-compatibility"}}'),d=s("785893"),a=s("250065");let t={title:"\u4E8B\u52A1",language:"zh-CN"},i=void 0,r={},c=[{value:"\u6982\u89C8",id:"\u6982\u89C8",level:2},{value:"\u663E\u5F0F\u4E8B\u52A1",id:"\u663E\u5F0F\u4E8B\u52A1",level:3},{value:"\u9690\u5F0F\u4E8B\u52A1",id:"\u9690\u5F0F\u4E8B\u52A1",level:3},{value:"\u9694\u79BB\u7EA7\u522B",id:"\u9694\u79BB\u7EA7\u522B",level:3},{value:"\u4E0D\u91CD\u4E0D\u4E22",id:"\u4E0D\u91CD\u4E0D\u4E22",level:3},{value:"Label \u673A\u5236",id:"label-\u673A\u5236",level:4},{value:"StreamLoad 2PC",id:"streamload-2pc",level:4},{value:"\u663E\u5F0F\u4E8B\u52A1\u64CD\u4F5C",id:"\u663E\u5F0F\u4E8B\u52A1\u64CD\u4F5C",level:2},{value:"\u5F00\u542F\u4E8B\u52A1",id:"\u5F00\u542F\u4E8B\u52A1",level:3},{value:"\u63D0\u4EA4\u4E8B\u52A1",id:"\u63D0\u4EA4\u4E8B\u52A1",level:3},{value:"\u56DE\u6EDA\u4E8B\u52A1",id:"\u56DE\u6EDA\u4E8B\u52A1",level:3},{value:"\u591A\u6761 SQL \u8BED\u53E5\u5199\u5165",id:"\u591A\u6761-sql-\u8BED\u53E5\u5199\u5165",level:2},{value:"\u5355\u8868\u591A\u6B21<code>INSERT INTO VALUES</code>\u5199\u5165",id:"\u5355\u8868\u591A\u6B21insert-into-values\u5199\u5165",level:3},{value:"\u591A\u8868\u591A\u6B21<code>INSERT INTO SELECT</code>, <code>UPDATE</code>, <code>DELETE</code>\u5199\u5165",id:"\u591A\u8868\u591A\u6B21insert-into-select-update-delete\u5199\u5165",level:3},{value:"\u9694\u79BB\u7EA7\u522B",id:"\u9694\u79BB\u7EA7\u522B-1",level:4},{value:"\u4E8B\u52A1\u4E2D\u6267\u884C\u5931\u8D25\u7684\u8BED\u53E5",id:"\u4E8B\u52A1\u4E2D\u6267\u884C\u5931\u8D25\u7684\u8BED\u53E5",level:4},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:4},{value:"Stream Load 2PC",id:"stream-load-2pc",level:2},{value:"Broker Load \u591A\u8868\u4E8B\u52A1",id:"broker-load-\u591A\u8868\u4E8B\u52A1",level:2}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.p,{children:"\u4E8B\u52A1\u662F\u6307\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u5305\u542B\u4E00\u4E2A\u6216\u591A\u4E2ASQL\u8BED\u53E5\uFF0C\u8FD9\u4E9B\u8BED\u53E5\u7684\u6267\u884C\u8981\u4E48\u5B8C\u5168\u6210\u529F\uFF0C\u8981\u4E48\u5B8C\u5168\u5931\u8D25\uFF0C\u662F\u4E00\u4E2A\u4E0D\u53EF\u5206\u5272\u7684\u5DE5\u4F5C\u5355\u4F4D\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u6982\u89C8",children:"\u6982\u89C8"}),"\n",(0,d.jsx)(n.p,{children:"\u67E5\u8BE2\u548C DDL \u5355\u4E2A\u8BED\u53E5\u662F\u4E00\u4E2A\u9690\u5F0F\u4E8B\u52A1\uFF0C\u4E0D\u652F\u6301\u591A\u8BED\u53E5\u4E8B\u52A1\u4E2D\u5305\u542B\u67E5\u8BE2\u548C DDL\u3002\u6BCF\u4E2A\u5355\u72EC\u7684\u5199\u5165\u9ED8\u8BA4\u662F\u4E00\u4E2A\u9690\u5F0F\u7684\u4E8B\u52A1\uFF0C\u591A\u4E2A\u5199\u5165\u53EF\u4EE5\u7EC4\u6210\u4E00\u4E2A\u663E\u5F0F\u4E8B\u52A1\u3002\u76EE\u524D Doris \u4E0D\u652F\u6301\u5D4C\u5957\u4E8B\u52A1\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u663E\u5F0F\u4E8B\u52A1",children:"\u663E\u5F0F\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.p,{children:"\u663E\u5F0F\u4E8B\u52A1\u9700\u8981\u7528\u6237\u4E3B\u52A8\u5F00\u542F\u3001\u63D0\u4EA4\u6216\u56DE\u6EDA\u4E8B\u52A1\uFF0C\u76EE\u524D\u4E0D\u652F\u6301 DDL \u548C\u67E5\u8BE2\u8BED\u53E5\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"BEGIN; \n[INSERT, UPDATE, DELETE statement]\nCOMMIT; / ROLLBACK;\n"})}),"\n",(0,d.jsx)(n.h3,{id:"\u9690\u5F0F\u4E8B\u52A1",children:"\u9690\u5F0F\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.p,{children:"\u9690\u5F0F\u4E8B\u52A1\u662F\u6307\u7528\u6237\u5728\u6240\u6267\u884C\u7684\u4E00\u6761\u6216\u591A\u6761SQL\u8BED\u53E5\u7684\u524D\u540E\uFF0C\u6CA1\u6709\u663E\u5F0F\u6DFB\u52A0\u5F00\u542F\u4E8B\u52A1\u548C\u63D0\u4EA4\u4E8B\u52A1\u7684\u8BED\u53E5\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["\u5728 Doris \u4E2D\uFF0C\u9664",(0,d.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/group-commit-manual",children:"Group Commit"}),"\u5916\uFF0C\u6BCF\u4E2A\u5BFC\u5165\u8BED\u53E5\u5728\u5F00\u59CB\u6267\u884C\u65F6\u90FD\u4F1A\u5F00\u542F\u4E00\u4E2A\u4E8B\u52A1\uFF0C\u5E76\u4E14\u5728\u8BE5\u8BED\u53E5\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u81EA\u52A8\u63D0\u4EA4\u8BE5\u4E8B\u52A1\uFF1B\u6216\u6267\u884C\u5931\u8D25\u540E\uFF0C\u81EA\u52A8\u56DE\u6EDA\u8BE5\u4E8B\u52A1\u3002\u6BCF\u4E2A\u67E5\u8BE2\u6216\u8005 DDL \u4E5F\u662F\u4E00\u4E2A\u9690\u85CF\u4E8B\u52A1\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"\u9694\u79BB\u7EA7\u522B",children:"\u9694\u79BB\u7EA7\u522B"}),"\n",(0,d.jsx)(n.p,{children:"Doris \u5F53\u524D\u652F\u6301\u7684\u552F\u4E00\u9694\u79BB\u7EA7\u522B\u662F READ COMMITTED\u3002\u5728 READ COMMITTED \u9694\u79BB\u7EA7\u522B\u4E0B\uFF0C\u8BED\u53E5\u53EA\u80FD\u770B\u5230\u5728\u8BE5\u8BED\u53E5\u5F00\u59CB\u6267\u884C\u4E4B\u524D\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u5B83\u4E0D\u4F1A\u770B\u5230\u672A\u63D0\u4EA4\u7684\u6570\u636E\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5355\u4E2A\u8BED\u53E5\u6267\u884C\u65F6\uFF0C\u4F1A\u5728\u8BED\u53E5\u7684\u5F00\u59CB\u6355\u83B7\u6D89\u53CA\u5230\u8868\u7684\u5FEB\u7167\uFF0C\u5373\u5355\u4E2A\u8BED\u53E5\u53EA\u80FD\u770B\u89C1\u5F00\u59CB\u6267\u884C\u524D\u5176\u5B83\u4E8B\u52A1\u7684\u63D0\u4EA4\uFF0C\u5355\u4E2A\u8BED\u53E5\u6267\u884C\u671F\u95F4\u4E0D\u53EF\u89C1\u5176\u5B83\u4E8B\u52A1\u7684\u63D0\u4EA4\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u5F53\u4E00\u4E2A\u8BED\u53E5\u5728\u591A\u8BED\u53E5\u4E8B\u52A1\u4E2D\u6267\u884C\u65F6\uFF1A"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"\u53EA\u80FD\u770B\u5230\u5728\u8BE5\u8BED\u53E5\u5F00\u59CB\u6267\u884C\u4E4B\u524D\u5DF2\u7ECF\u63D0\u4EA4\u7684\u6570\u636E\u3002\u5982\u679C\u5728\u6267\u884C\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E8C\u4E2A\u8BED\u53E5\u4E4B\u95F4\u6709\u53E6\u4E00\u4E2A\u4E8B\u52A1\u63D0\u4EA4\uFF0C\u90A3\u4E48\u540C\u4E00\u4E8B\u52A1\u4E2D\u7684\u4E24\u4E2A\u8FDE\u7EED\u8BED\u53E5\u53EF\u80FD\u4F1A\u770B\u5230\u4E0D\u540C\u7684\u6570\u636E\u3002"}),"\n",(0,d.jsx)(n.li,{children:"\u76EE\u524D\u770B\u4E0D\u5230\u5728\u540C\u4E00\u4E8B\u52A1\u4E2D\u4E4B\u524D\u8BED\u53E5\u6240\u505A\u7684\u66F4\u6539\u3002"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"\u4E0D\u91CD\u4E0D\u4E22",children:"\u4E0D\u91CD\u4E0D\u4E22"}),"\n",(0,d.jsx)(n.p,{children:"Doris \u6709\u4E24\u4E2A\u673A\u5236\u652F\u6301\u5199\u5165\u7684\u4E0D\u91CD\u4E0D\u4E22\uFF0C\u4F7F\u7528 Label \u673A\u5236\u63D0\u4F9B\u4E86\u5355\u4E2A\u4E8B\u52A1\u7684\u4E0D\u91CD\uFF0C\u4F7F\u7528\u4E24\u9636\u6BB5\u63D0\u4EA4\u63D0\u4F9B\u4E86\u534F\u8C03\u591A\u4E8B\u52A1\u4E0D\u91CD\u7684\u80FD\u529B\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"label-\u673A\u5236",children:"Label \u673A\u5236"}),"\n",(0,d.jsx)(n.p,{children:"Doris \u7684\u4E8B\u52A1\u6216\u8005\u5199\u5165\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A Label\u3002\u8FD9\u4E2A Label \u901A\u5E38\u662F\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u3001\u5177\u6709\u4E00\u5B9A\u4E1A\u52A1\u903B\u8F91\u5C5E\u6027\u7684\u5B57\u7B26\u4E32\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u5185\u90E8\u4F1A\u751F\u6210\u4E00\u4E2A UUID \u5B57\u7B26\u4E32\u3002Label \u7684\u4E3B\u8981\u4F5C\u7528\u662F\u552F\u4E00\u6807\u8BC6\u4E00\u4E2A\u4E8B\u52A1\u6216\u8005\u5BFC\u5165\u4EFB\u52A1\uFF0C\u5E76\u4E14\u80FD\u591F\u4FDD\u8BC1\u76F8\u540C Label \u7684\u4E8B\u52A1\u6216\u8005\u5BFC\u5165\u4EC5\u4F1A\u6210\u529F\u6267\u884C\u4E00\u6B21\u3002Label \u673A\u5236\u53EF\u4EE5\u4FDD\u8BC1\u5BFC\u5165\u6570\u636E\u7684\u4E0D\u4E22\u4E0D\u91CD\uFF0C\u5982\u679C\u4E0A\u6E38\u6570\u636E\u6E90\u80FD\u591F\u4FDD\u8BC1 At-Least-Once \u8BED\u4E49\uFF0C\u5219\u914D\u5408 Doris \u7684 Label \u673A\u5236\uFF0C\u80FD\u591F\u4FDD\u8BC1 Exactly-Once \u8BED\u4E49\u3002Label \u5728\u4E00\u4E2A\u6570\u636E\u5E93\u4E0B\u5177\u6709\u552F\u4E00\u6027\u3002"}),"\n",(0,d.jsx)(n.p,{children:"Doris \u4F1A\u6839\u636E\u65F6\u95F4\u548C\u6570\u76EE\u6E05\u7406 Label\uFF0C\u9ED8\u8BA4 Label \u6570\u76EE\u8D85\u8FC7 2000 \u4E2A\u5C31\u4F1A\u89E6\u53D1\u6DD8\u6C70\uFF0C\u9ED8\u8BA4\u8D85\u8FC7 3 \u5929\u7684 Label \u4E5F\u4F1A\u88AB\u6DD8\u6C70\u3002Label \u88AB\u6DD8\u6C70\u540E\u76F8\u540C\u540D\u79F0\u7684 Label \u53EF\u4EE5\u518D\u6B21\u6267\u884C\u6210\u529F\uFF0C\u5373\u4E0D\u518D\u5177\u6709\u53BB\u91CD\u8BED\u4E49\u3002"}),"\n",(0,d.jsxs)(n.p,{children:["Label \u901A\u5E38\u88AB\u8BBE\u7F6E\u4E3A ",(0,d.jsx)(n.code,{children:"\u4E1A\u52A1\u903B\u8F91+\u65F6\u95F4"})," \u7684\u683C\u5F0F\u3002\u5982 ",(0,d.jsx)(n.code,{children:"my_business1_20220330_125000"}),"\u3002\u8FD9\u4E2A Label \u901A\u5E38\u7528\u4E8E\u8868\u793A\uFF1A\u4E1A\u52A1 ",(0,d.jsx)(n.code,{children:"my_business1"})," \u8FD9\u4E2A\u4E1A\u52A1\u5728 ",(0,d.jsx)(n.code,{children:"2022-03-30 12:50:00"})," \u4EA7\u751F\u7684\u4E00\u6279\u6570\u636E\u3002\u901A\u8FC7\u8FD9\u79CD Label \u8BBE\u5B9A\uFF0C\u4E1A\u52A1\u4E0A\u53EF\u4EE5\u901A\u8FC7 Label \u67E5\u8BE2\u5BFC\u5165\u4EFB\u52A1\u72B6\u6001\uFF0C\u6765\u660E\u786E\u7684\u83B7\u77E5\u8BE5\u65F6\u95F4\u70B9\u6279\u6B21\u7684\u6570\u636E\u662F\u5426\u5DF2\u7ECF\u5BFC\u5165\u6210\u529F\u3002\u5982\u679C\u6CA1\u6709\u6210\u529F\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A Label \u7EE7\u7EED\u91CD\u8BD5\u5BFC\u5165\u3002"]}),"\n",(0,d.jsx)(n.h4,{id:"streamload-2pc",children:"StreamLoad 2PC"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"#stream-load",children:"StreamLoad 2PC"}),"\uFF0C\u4E3B\u8981\u7528\u4E8E\u652F\u6301 Flink \u5199\u5165 Doris \u65F6\u7684 EOS \u8BED\u4E49\u3002"]}),"\n",(0,d.jsx)(n.h2,{id:"\u663E\u5F0F\u4E8B\u52A1\u64CD\u4F5C",children:"\u663E\u5F0F\u4E8B\u52A1\u64CD\u4F5C"}),"\n",(0,d.jsx)(n.h3,{id:"\u5F00\u542F\u4E8B\u52A1",children:"\u5F00\u542F\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"BEGIN;\n\nBEGIN WITH LABEL {user_label}; \n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5982\u679C\u6267\u884C\u8BE5\u8BED\u53E5\u65F6\uFF0C\u5F53\u524D Session \u6B63\u5904\u4E8E\u4E00\u4E2A\u4E8B\u52A1\u7684\u4E2D\u95F4\u8FC7\u7A0B\uFF0C\u90A3\u4E48 Doris \u4F1A\u5FFD\u7565\u8BE5\u8BED\u53E5\uFF0C\u4E5F\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E8B\u52A1\u662F\u4E0D\u80FD\u5D4C\u5957\u7684\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u63D0\u4EA4\u4E8B\u52A1",children:"\u63D0\u4EA4\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"COMMIT;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u7528\u4E8E\u63D0\u4EA4\u5728\u5F53\u524D\u4E8B\u52A1\u4E2D\u8FDB\u884C\u7684\u6240\u6709\u4FEE\u6539\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u56DE\u6EDA\u4E8B\u52A1",children:"\u56DE\u6EDA\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"ROLLBACK;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u7528\u4E8E\u64A4\u9500\u5F53\u524D\u4E8B\u52A1\u7684\u6240\u6709\u4FEE\u6539\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4E8B\u52A1\u662F Session \u7EA7\u522B\u7684\uFF0C\u5982\u679C Session \u4E2D\u6B62\u6216\u5173\u95ED\uFF0C\u4E5F\u4F1A\u81EA\u52A8\u56DE\u6EDA\u8BE5\u4E8B\u52A1\u3002"}),"\n",(0,d.jsx)(n.h2,{id:"\u591A\u6761-sql-\u8BED\u53E5\u5199\u5165",children:"\u591A\u6761 SQL \u8BED\u53E5\u5199\u5165"}),"\n",(0,d.jsx)(n.p,{children:"\u76EE\u524D Doris \u4E2D\u652F\u6301 2 \u79CD\u65B9\u5F0F\u7684\u4E8B\u52A1\u5199\u5165\u3002"}),"\n",(0,d.jsxs)(n.h3,{id:"\u5355\u8868\u591A\u6B21insert-into-values\u5199\u5165",children:["\u5355\u8868\u591A\u6B21",(0,d.jsx)(n.code,{children:"INSERT INTO VALUES"}),"\u5199\u5165"]}),"\n",(0,d.jsx)(n.p,{children:"\u5047\u5982\u8868\u7684\u7ED3\u6784\u4E3A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `dt` (\n    `id` INT(11) NOT NULL,\n    `name` VARCHAR(50) NULL,\n    `score` INT(11) NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1"\n);\n'})}),"\n",(0,d.jsx)(n.p,{children:"\u5199\u5165\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"mysql> BEGIN;\nQuery OK, 0 rows affected (0.01 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':''}\n\nmysql> INSERT INTO dt (id, name, score) VALUES (1, \"Emily\", 25), (2, \"Benjamin\", 35), (3, \"Olivia\", 28), (4, \"Alexander\", 60), (5, \"Ava\", 17);\nQuery OK, 5 rows affected (0.08 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':'10013'}\n\nmysql> INSERT INTO dt VALUES (6, \"William\", 69), (7, \"Sophia\", 32), (8, \"James\", 64), (9, \"Emma\", 37), (10, \"Liam\", 64);\nQuery OK, 5 rows affected (0.00 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'PREPARE', 'txnId':'10013'}\n\nmysql> COMMIT;\nQuery OK, 0 rows affected (1.02 sec)\n{'label':'txn_insert_b55db21aad7451b-b5b6c339704920c5', 'status':'VISIBLE', 'txnId':'10013'}\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u8FD9\u79CD\u5199\u5165\u65B9\u5F0F\u4E0D\u4EC5\u53EF\u4EE5\u5B9E\u73B0\u5199\u5165\u7684\u539F\u5B50\u6027\uFF0C\u800C\u4E14\u5728 Doris \u4E2D\uFF0C\u80FD\u63D0\u5347 ",(0,d.jsx)(n.code,{children:"INSERT INTO VALUES"})," \u7684\u5199\u5165\u6027\u80FD\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5982\u679C\u7528\u6237\u540C\u65F6\u5F00\u542F\u4E86 ",(0,d.jsx)(n.code,{children:"Group Commit"})," \u548C\u4E8B\u52A1\u5199\uFF0C\u4E8B\u52A1\u5199\u751F\u6548\u3002"]}),"\n",(0,d.jsxs)(n.h3,{id:"\u591A\u8868\u591A\u6B21insert-into-select-update-delete\u5199\u5165",children:["\u591A\u8868\u591A\u6B21",(0,d.jsx)(n.code,{children:"INSERT INTO SELECT"}),", ",(0,d.jsx)(n.code,{children:"UPDATE"}),", ",(0,d.jsx)(n.code,{children:"DELETE"}),"\u5199\u5165"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5047\u8BBE\u6709",(0,d.jsx)(n.code,{children:"dt1"}),", ",(0,d.jsx)(n.code,{children:"dt2"}),", ",(0,d.jsx)(n.code,{children:"dt3"})," 3 \u5F20\u8868\uFF0C\u8868\u7ED3\u6784\u540C\u4E0A\uFF0C\u8868\u4E2D\u6570\u636E\u4E3A\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT * FROM dt1;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    60 |\n|    5 | Ava       |    17 |\n+------+-----------+-------+\n5 rows in set (0.04 sec)\n\nmysql> SELECT * FROM dt2;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    6 | William |    69 |\n|    7 | Sophia  |    32 |\n|    8 | James   |    64 |\n|    9 | Emma    |    37 |\n|   10 | Liam    |    64 |\n+------+---------+-------+\n5 rows in set (0.03 sec)\n\nmysql> SELECT * FROM dt3;\nEmpty set (0.03 sec)\n"})}),"\n",(0,d.jsxs)(n.p,{children:["\u505A\u4E8B\u52A1\u5199\u5165\uFF0C\u628A",(0,d.jsx)(n.code,{children:"dt1"}),"\u548C",(0,d.jsx)(n.code,{children:"dt2"}),"\u7684\u6570\u636E\u5199\u5165\u5230",(0,d.jsx)(n.code,{children:"dt3"}),"\u4E2D\uFF0C\u540C\u65F6\uFF0C\u5BF9",(0,d.jsx)(n.code,{children:"dt1"}),"\u8868\u4E2D\u7684\u5206\u6570\u8FDB\u884C\u66F4\u65B0\uFF0C",(0,d.jsx)(n.code,{children:"dt2"}),"\u8868\u4E2D\u7684\u6570\u636E\u8FDB\u884C\u5220\u9664\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"mysql> BEGIN;\nQuery OK, 0 rows affected (0.00 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':''}\n\n# \u5BFC\u5165\u4EFB\u52A1\u7684\u72B6\u6001\u662F PREPARE\nmysql> INSERT INTO dt3 SELECT * FROM dt1;\nQuery OK, 5 rows affected (0.07 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11024'}\n\nmysql> INSERT INTO dt3 SELECT * FROM dt2;\nQuery OK, 5 rows affected (0.08 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11025'}\n\nmysql> UPDATE dt1 SET score = score + 10 WHERE id >= 4;\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11026'}\n\nmysql> DELETE FROM dt2 WHERE id >= 9;\nQuery OK, 0 rows affected (0.01 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'PREPARE', 'txnId':'11027'}\n\nmysql> COMMIT;\nQuery OK, 0 rows affected (0.03 sec)\n{'label':'txn_insert_442a6311f6c541ae-b57d7f00fa5db028', 'status':'VISIBLE', 'txnId':'11024'}\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u67E5\u8BE2\u6570\u636E\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"# id >= 4 \u7684\u5206\u6570\u52A0 10\nmysql> SELECT * FROM dt1;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    70 |\n|    5 | Ava       |    27 |\n+------+-----------+-------+\n5 rows in set (0.01 sec)\n\n# id >= 9 \u7684\u6570\u636E\u88AB\u5220\u9664\nmysql> SELECT * FROM dt2;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    6 | William |    69 |\n|    7 | Sophia  |    32 |\n|    8 | James   |    64 |\n+------+---------+-------+\n3 rows in set (0.02 sec)\n\n# dt1 \u548C dt2 \u4E2D\u5DF2\u63D0\u4EA4\u7684\u6570\u636E\u88AB\u5199\u5165\u5230 dt3 \u4E2D\nmysql> SELECT * FROM dt3;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    60 |\n|    5 | Ava       |    17 |\n|    6 | William   |    69 |\n|    7 | Sophia    |    32 |\n|    8 | James     |    64 |\n|    9 | Emma      |    37 |\n|   10 | Liam      |    64 |\n+------+-----------+-------+\n10 rows in set (0.01 sec)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u9694\u79BB\u7EA7\u522B-1",children:"\u9694\u79BB\u7EA7\u522B"}),"\n",(0,d.jsxs)(n.p,{children:["\u76EE\u524D Doris \u4E8B\u52A1\u5199\u63D0\u4F9B\u7684\u9694\u79BB\u7EA7\u522B\u4E3A ",(0,d.jsx)(n.code,{children:"READ COMMITTED"}),"\u3002\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u4E24\u70B9:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4E8B\u52A1\u4E2D\u7684\u591A\u4E2A\u8BED\u53E5\uFF0C\u6BCF\u4E2A\u8BED\u53E5\u4F1A\u8BFB\u53D6\u5230\u672C\u8BED\u53E5\u5F00\u59CB\u6267\u884C\u65F6\u5DF2\u63D0\u4EA4\u7684\u6570\u636E\uFF0C\u5982:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:" timestamp | ------------ Session 1 ------------  |  ------------ Session 2 ------------\n   t1      | BEGIN;                               | \n   t2      | # read n rows from dt1 table         |\n           | INSERT INTO dt3 SELECT * FROM dt1;   |\n   t3      |                                      | # write 2 rows to dt1 table\n           |                                      | INSERT INTO dt1 VALUES(...), (...);\n   t4      | # read n + 2 rows from dt1 table     |\n           | INSERT INTO dt3 SELECT * FROM dt1;   |\n   t5      | COMMIT;                              |\n"})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4E8B\u52A1\u4E2D\u7684\u591A\u4E2A\u8BED\u53E5\uFF0C\u6BCF\u4E2A\u8BED\u53E5\u4E0D\u80FD\u8BFB\u5230\u672C\u4E8B\u52A1\u5185\u5176\u5B83\u8BED\u53E5\u505A\u51FA\u7684\u4FEE\u6539\uFF0C\u5982\uFF1A"}),"\n",(0,d.jsxs)(n.p,{children:["\u5047\u5982\u4E8B\u52A1\u5F00\u542F\u524D\uFF0C\u8868 ",(0,d.jsx)(n.code,{children:"dt1"})," \u6709 5 \u884C\uFF0C\u8868 ",(0,d.jsx)(n.code,{children:"dt2"})," \u6709 5 \u884C\uFF0C\u8868 ",(0,d.jsx)(n.code,{children:"dt3"})," \u4E3A\u7A7A\uFF0C\u6267\u884C\u4EE5\u4E0B\u8BED\u53E5\uFF1A"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"BEGIN;\n# dt2 \u4E2D\u5199\u5165 5 \u884C\uFF0C\u4E8B\u52A1\u63D0\u4EA4\u540E\u5171 10 \u884C\nINSERT INTO dt2 SELECT * FROM dt1;\n# dt3 \u4E2D\u5199\u5165 5 \u884C\uFF0C\u4E0D\u80FD\u8BFB\u51FA\u4E0A\u4E00\u6B65\u4E2D dt2 \u4E2D\u65B0\u5199\u5165\u7684\u6570\u636E\nINSERT INTO dt3 SELECT * FROM dt2;\nCOMMIT;\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u5177\u4F53\u7684\u4F8B\u5B50\u4E3A\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'# \u5EFA\u8868\u5E76\u5199\u5165\u6570\u636E\nCREATE TABLE `dt1` (\n    `id` INT(11) NOT NULL,\n    `name` VARCHAR(50) NULL,\n    `score` INT(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n    "replication_num" = "1"\n);\nCREATE TABLE dt2 LIKE dt1;\nCREATE TABLE dt3 LIKE dt1;\nINSERT INTO dt1 VALUES (1, "Emily", 25), (2, "Benjamin", 35), (3, "Olivia", 28), (4, "Alexander", 60), (5, "Ava", 17);\nINSERT INTO dt2 VALUES (6, "William", 69), (7, "Sophia", 32), (8, "James", 64), (9, "Emma", 37), (10, "Liam", 64);\n\n# \u4E8B\u52A1\u5199\nBEGIN;\nINSERT INTO dt2 SELECT * FROM dt1;\nINSERT INTO dt3 SELECT * FROM dt2;\nCOMMIT;\n\n# \u67E5\u8BE2\nmysql> SELECT * FROM dt2;\n+------+-----------+-------+\n| id   | name      | score |\n+------+-----------+-------+\n|    6 | William   |    69 |\n|    7 | Sophia    |    32 |\n|    8 | James     |    64 |\n|    9 | Emma      |    37 |\n|   10 | Liam      |    64 |\n|    1 | Emily     |    25 |\n|    2 | Benjamin  |    35 |\n|    3 | Olivia    |    28 |\n|    4 | Alexander |    60 |\n|    5 | Ava       |    17 |\n+------+-----------+-------+\n10 rows in set (0.01 sec)\n\nmysql> SELECT * FROM dt3;\n+------+---------+-------+\n| id   | name    | score |\n+------+---------+-------+\n|    6 | William |    69 |\n|    7 | Sophia  |    32 |\n|    8 | James   |    64 |\n|    9 | Emma    |    37 |\n|   10 | Liam    |    64 |\n+------+---------+-------+\n5 rows in set (0.01 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h4,{id:"\u4E8B\u52A1\u4E2D\u6267\u884C\u5931\u8D25\u7684\u8BED\u53E5",children:"\u4E8B\u52A1\u4E2D\u6267\u884C\u5931\u8D25\u7684\u8BED\u53E5"}),"\n",(0,d.jsx)(n.p,{children:"\u5F53\u4E8B\u52A1\u4E2D\u7684\u67D0\u4E2A\u8BED\u53E5\u6267\u884C\u5931\u8D25\u65F6\uFF0C\u8FD9\u4E2A\u64CD\u4F5C\u5DF2\u7ECF\u81EA\u52A8\u56DE\u6EDA\u3002\u7136\u800C\uFF0C\u4E8B\u52A1\u4E2D\u5176\u5B83\u6267\u884C\u6210\u529F\u7684\u8BED\u53E5\uFF0C\u4ECD\u7136\u662F\u53EF\u63D0\u4EA4\u6216\u56DE\u6EDA\u7684\u3002\u5F53\u4E8B\u52A1\u88AB\u6210\u529F\u63D0\u4EA4\u540E\uFF0C\u4E8B\u52A1\u4E2D\u6267\u884C\u6210\u529F\u7684\u8BED\u53E5\u7684\u4FEE\u6539\u88AB\u5E94\u7528\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6BD4\u5982\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"mysql> BEGIN;\nQuery OK, 0 rows affected (0.00 sec)\n{'label':'txn_insert_c5940d31bf364f57-a48b628886415442', 'status':'PREPARE', 'txnId':''}\n\nmysql> INSERT INTO dt3 SELECT * FROM dt1;\nQuery OK, 5 rows affected (0.07 sec)\n{'label':'txn_insert_c5940d31bf364f57-a48b628886415442', 'status':'PREPARE', 'txnId':'11058'}\n\n# \u5931\u8D25\u7684\u5199\u5165\u81EA\u52A8\u56DE\u6EDA\nmysql> INSERT INTO dt3 SELECT * FROM dt2;\nERROR 5025 (HY000): Insert has filtered data in strict mode, tracking_url=http://172.21.16.12:9082/api/_load_error_log?file=__shard_3/error_log_insert_stmt_3d1fed266ce443f2-b54d2609c2ea6b11_3d1fed266ce443f2_b54d2609c2ea6b11\n\nmysql> INSERT INTO dt3 SELECT * FROM dt2 WHERE id = 7;\nQuery OK, 0 rows affected (0.07 sec)\n\nmysql> COMMIT;\nQuery OK, 0 rows affected (0.02 sec)\n{'label':'txn_insert_c5940d31bf364f57-a48b628886415442', 'status':'VISIBLE', 'txnId':'11058'}\n"})}),"\n",(0,d.jsx)(n.p,{children:"\u67E5\u8BE2\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:"# dt1 \u7684\u6570\u636E\u88AB\u5199\u5165\u5230 dt3 \u4E2D\uFF0Cdt2 \u4E2D id = 7\u7684\u6570\u636E\u5199\u5165\u6210\u529F\uFF0C\u5176\u5B83\u5199\u5165\u5931\u8D25\nmysql> SELECT * FROM dt3;\n+------+----------+-------+\n| id   | name     | score |\n+------+----------+-------+\n|    1 | Emily    |    25 |\n|    2 | Benjamin |    35 |\n|    3 | Olivia   |    28 |\n|    4 | Alexande |    60 |\n|    5 | Ava      |    17 |\n|    7 | Sophia   |    32 |\n+------+----------+-------+\n6 rows in set (0.01 sec)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5199\u5165\u7684\u591A\u8868\u5FC5\u987B\u5C5E\u4E8E\u540C\u4E00\u4E2A Database\uFF0C\u5426\u5219\u4F1A\u9047\u5230\u9519\u8BEF ",(0,d.jsx)(n.code,{children:"Transaction insert must be in the same database"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u4E24\u79CD\u4E8B\u52A1\u5199\u5165",(0,d.jsx)(n.code,{children:"INSERT INTO SELECT"}),", ",(0,d.jsx)(n.code,{children:"UPDATE"}),", ",(0,d.jsx)(n.code,{children:"DELETE"})," \u548C ",(0,d.jsx)(n.code,{children:"INSET INTO VALUES"})," \u4E0D\u80FD\u6DF7\u7528\uFF0C\u5426\u5219\u4F1A\u9047\u5230\u9519\u8BEF ",(0,d.jsx)(n.code,{children:"Transaction insert can not insert into values and insert into select at the same time"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/delete/delete-manual",children:"Delete \u64CD\u4F5C"}),"\u63D0\u4F9B\u4E86\u901A\u8FC7\u8C13\u8BCD\u548C Using \u5B50\u53E5\u4E24\u79CD\u65B9\u5F0F\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u9694\u79BB\u7EA7\u522B\uFF0C\u5728\u4E00\u4E2A\u4E8B\u52A1\u4E2D\uFF0C\u5BF9\u76F8\u540C\u8868\u7684\u5220\u9664\u5FC5\u987B\u5728\u5199\u5165\u524D\uFF0C\u5426\u5219\u4F1A\u9047\u5230\u62A5\u9519 ",(0,d.jsx)(n.code,{children:"Can not delete because there is a insert operation for the same table"})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5F53\u4ECE ",(0,d.jsx)(n.code,{children:"BEGIN"})," \u5F00\u59CB\u7684\u5BFC\u5165\u8017\u65F6\u8D85\u51FA Doris \u914D\u7F6E\u7684 timeout \u65F6\uFF0C\u4F1A\u5BFC\u81F4\u4E8B\u52A1\u56DE\u6EDA\uFF0C\u5BFC\u5165\u5931\u8D25\u3002\u76EE\u524D timeout \u4F7F\u7528\u7684\u662F Session \u53D8\u91CF ",(0,d.jsx)(n.code,{children:"insert_timeout"})," \u548C ",(0,d.jsx)(n.code,{children:"query_timeout"})," \u7684\u6700\u5927\u503C"]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5F53\u4F7F\u7528 JDBC \u8FDE\u63A5 Doris \u8FDB\u884C\u4E8B\u52A1\u64CD\u4F5C\u65F6\uFF0C\u8BF7\u5728 JDBC URL \u4E2D\u6DFB\u52A0 ",(0,d.jsx)(n.code,{children:"useLocalSessionState=true"}),"\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u9047\u5230\u9519\u8BEF ",(0,d.jsx)(n.code,{children:"This is in a transaction, only insert, update, delete, commit, rollback is acceptable."})]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:["\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u4E0B\uFF0C\u4E8B\u52A1\u5199\u4E0D\u652F\u6301 Merge-on-Write \u8868\uFF0C\u5426\u5219\u4F1A\u9047\u5230\u62A5\u9519 ",(0,d.jsx)(n.code,{children:"Transaction load is not supported for merge on write unique keys table in cloud mode"})]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"stream-load-2pc",children:"Stream Load 2PC"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsxs)(n.strong,{children:["1. \u5728 HTTP Header \u4E2D\u8BBE\u7F6E ",(0,d.jsx)(n.code,{children:"two_phase_commit:true"})," \u542F\u7528\u4E24\u9636\u6BB5\u63D0\u4EA4\u3002"]})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'curl  --location-trusted -u user:passwd -H "two_phase_commit:true" -T test.txt http://fe_host:http_port/api/{db}/{table}/_stream_load\n{\n    "TxnId": 18036,\n    "Label": "55c8ffc9-1c40-4d51-b75e-f2265b3602ef",\n    "TwoPhaseCommit": "true",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 100,\n    "NumberLoadedRows": 100,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 1031,\n    "LoadTimeMs": 77,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 58,\n    "CommitAndPublishTimeMs": 0\n}\n'})}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"2. \u5BF9\u4E8B\u52A1\u89E6\u53D1 commit \u64CD\u4F5C\uFF08\u8BF7\u6C42\u53D1\u5F80 FE \u6216 BE \u5747\u53EF\uFF09"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u53EF\u4EE5\u4F7F\u7528\u4E8B\u52A1 id \u6307\u5B9A\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'curl -X PUT --location-trusted -u user:passwd -H "txn_id:18036" -H "txn_operation:commit" http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "transaction [18036] commit successfully."\n}\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u4F7F\u7528 label \u6307\u5B9A\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'curl -X PUT --location-trusted -u user:passwd  -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:commit"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] commit successfully."\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"3. \u5BF9\u4E8B\u52A1\u89E6\u53D1 abort \u64CD\u4F5C\uFF08\u8BF7\u6C42\u53D1\u5F80 FE \u6216 BE \u5747\u53EF\uFF09"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u53EF\u4EE5\u4F7F\u7528\u4E8B\u52A1 id \u6307\u5B9A\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'curl -X PUT --location-trusted -u user:passwd  -H "txn_id:18037" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "transaction [18037] abort successfully."\n}\n'})}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4E5F\u53EF\u4EE5\u4F7F\u7528 label \u6307\u5B9A\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-shell",children:'curl -X PUT --location-trusted -u user:passwd  -H "label:55c8ffc9-1c40-4d51-b75e-f2265b3602ef" -H "txn_operation:abort"  http://fe_host:http_port/api/{db}/{table}/_stream_load_2pc\n{\n    "status": "Success",\n    "msg": "label [55c8ffc9-1c40-4d51-b75e-f2265b3602ef] abort successfully."\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"broker-load-\u591A\u8868\u4E8B\u52A1",children:"Broker Load \u591A\u8868\u4E8B\u52A1"}),"\n",(0,d.jsx)(n.p,{children:"\u6240\u6709 Broker Load \u5BFC\u5165\u4EFB\u52A1\u90FD\u662F\u539F\u5B50\u751F\u6548\u7684\u3002\u5E76\u4E14\u5728\u540C\u4E00\u4E2A\u5BFC\u5165\u4EFB\u52A1\u4E2D\u5BF9\u591A\u5F20\u8868\u7684\u5BFC\u5165\u4E5F\u80FD\u591F\u4FDD\u8BC1\u539F\u5B50\u6027\u3002\u8FD8\u53EF\u4EE5\u901A\u8FC7 Label \u7684\u673A\u5236\u6765\u4FDD\u8BC1\u6570\u636E\u5BFC\u5165\u7684\u4E0D\u4E22\u4E0D\u91CD\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u4E0B\u9762\u4F8B\u5B50\u662F\u4ECE HDFS \u5BFC\u5165\u6570\u636E\uFF0C\u4F7F\u7528\u901A\u914D\u7B26\u5339\u914D\u4E24\u6279\u6587\u4EF6\uFF0C\u5206\u522B\u5BFC\u5165\u5230\u4E24\u4E2A\u8868\u4E2D\u3002"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-10*")\n    INTO TABLE `my_table1`\n    PARTITION (p1)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n        k2 = tmp_k2 + 1,\n        k3 = tmp_k3 + 1\n    )\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-20*")\n    INTO TABLE `my_table2`\n    COLUMNS TERMINATED BY ","\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n'})}),"\n",(0,d.jsxs)(n.p,{children:["\u4F7F\u7528\u901A\u914D\u7B26\u5339\u914D\u5BFC\u5165\u4E24\u6279\u6587\u4EF6 ",(0,d.jsx)(n.code,{children:"file-10*"})," \u548C ",(0,d.jsx)(n.code,{children:"file-20*"}),"\u3002\u5206\u522B\u5BFC\u5165\u5230 ",(0,d.jsx)(n.code,{children:"my_table1"})," \u548C ",(0,d.jsx)(n.code,{children:"my_table2"})," \u4E24\u5F20\u8868\u4E2D\u3002\u5176\u4E2D ",(0,d.jsx)(n.code,{children:"my_table1"})," \u6307\u5B9A\u5BFC\u5165\u5230\u5206\u533A ",(0,d.jsx)(n.code,{children:"p1"})," \u4E2D\uFF0C\u5E76\u4E14\u5C06\u5BFC\u5165\u6E90\u6587\u4EF6\u4E2D\u7B2C\u4E8C\u5217\u548C\u7B2C\u4E09\u5217\u7684\u503C +1 \u540E\u5BFC\u5165\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return t}});var l=s(667294);let d={},a=l.createContext(d);function t(e){let n=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);