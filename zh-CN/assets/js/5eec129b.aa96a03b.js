"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["828679"],{301180:function(n,e,l){l.r(e),l.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>t,toc:()=>o,frontMatter:()=>d});var r=JSON.parse('{"id":"data-operate/update/update-of-unique-model","title":"\u4E3B\u952E\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-operate/update/update-of-unique-model.md","sourceDirName":"data-operate/update","slug":"/data-operate/update/update-of-unique-model","permalink":"/zh-CN/docs/dev/data-operate/update/update-of-unique-model","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4E3B\u952E\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4E3B\u952E\u6A21\u578B\u7684 Update \u66F4\u65B0","permalink":"/zh-CN/docs/dev/data-operate/update/unique-update"},"next":{"title":"\u805A\u5408\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0","permalink":"/zh-CN/docs/dev/data-operate/update/update-of-aggregate-model"}}'),s=l("785893"),i=l("250065");let d={title:"\u4E3B\u952E\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0",language:"zh-CN"},c=void 0,t={},o=[{value:"\u6574\u884C\u66F4\u65B0",id:"\u6574\u884C\u66F4\u65B0",level:2},{value:"\u90E8\u5206\u5217\u66F4\u65B0",id:"\u90E8\u5206\u5217\u66F4\u65B0",level:2},{value:"\u9002\u7528\u573A\u666F",id:"\u9002\u7528\u573A\u666F",level:3},{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F",level:3},{value:"\u5EFA\u8868",id:"\u5EFA\u8868",level:4},{value:"\u5BFC\u5165",id:"\u5BFC\u5165",level:4},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:3},{value:"\u4F7F\u7528\u6CE8\u610F",id:"\u4F7F\u7528\u6CE8\u610F",level:3},{value:"\u7075\u6D3B\u90E8\u5206\u5217\u66F4\u65B0",id:"\u7075\u6D3B\u90E8\u5206\u5217\u66F4\u65B0",level:2},{value:"\u9002\u7528\u573A\u666F",id:"\u9002\u7528\u573A\u666F-1",level:3},{value:"\u4F7F\u7528\u65B9\u5F0F",id:"\u4F7F\u7528\u65B9\u5F0F-1",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B-1",level:3},{value:"\u9650\u5236\u4E0E\u6CE8\u610F\u4E8B\u9879",id:"\u9650\u5236\u4E0E\u6CE8\u610F\u4E8B\u9879",level:3}];function a(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"\u8FD9\u7BC7\u6587\u6863\u4E3B\u8981\u4ECB\u7ECD Doris \u4E3B\u952E\u6A21\u578B\u4E0A\u57FA\u4E8E\u5BFC\u5165\u7684\u66F4\u65B0\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6574\u884C\u66F4\u65B0",children:"\u6574\u884C\u66F4\u65B0"}),"\n",(0,s.jsx)(e.p,{children:"\u4F7F\u7528 Doris \u652F\u6301\u7684 Stream Load\uFF0CBroker Load\uFF0CRoutine Load\uFF0CInsert Into \u7B49\u5BFC\u5165\u65B9\u5F0F\uFF0C\u5F80\u4E3B\u952E\u6A21\u578B\uFF08Unique \u6A21\u578B\uFF09\u4E2D\u8FDB\u884C\u6570\u636E\u5BFC\u5165\u65F6\uFF0C\u5982\u679C\u6CA1\u6709\u76F8\u5E94\u4E3B\u952E\u7684\u6570\u636E\u884C\uFF0C\u5C31\u6267\u884C\u63D2\u5165\u65B0\u7684\u6570\u636E\uFF0C\u5982\u679C\u6709\u76F8\u5E94\u4E3B\u952E\u7684\u6570\u636E\u884C\uFF0C\u5C31\u8FDB\u884C\u66F4\u65B0\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CDoris \u4E3B\u952E\u6A21\u578B\u7684\u5BFC\u5165\u662F\u4E00\u79CD\u201Cupsert\u201D\u6A21\u5F0F\u3002\u57FA\u4E8E\u5BFC\u5165\uFF0C\u5BF9\u5DF2\u6709\u8BB0\u5F55\u7684\u66F4\u65B0\uFF0C\u9ED8\u8BA4\u548C\u5BFC\u5165\u4E00\u4E2A\u65B0\u8BB0\u5F55\u662F\u5B8C\u5168\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u53C2\u8003\u6570\u636E\u5BFC\u5165\u7684\u6587\u6863\u90E8\u5206\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u90E8\u5206\u5217\u66F4\u65B0",children:"\u90E8\u5206\u5217\u66F4\u65B0"}),"\n",(0,s.jsx)(e.p,{children:"\u90E8\u5206\u5217\u66F4\u65B0\uFF0C\u4E3B\u8981\u662F\u6307\u76F4\u63A5\u66F4\u65B0\u8868\u4E2D\u67D0\u4E9B\u5B57\u6BB5\u503C\uFF0C\u800C\u4E0D\u662F\u5168\u90E8\u7684\u5B57\u6BB5\u503C\u3002\u53EF\u4EE5\u91C7\u7528 Update \u8BED\u53E5\u6765\u8FDB\u884C\u66F4\u65B0\uFF0C\u8FD9\u79CD Update \u8BED\u53E5\u4E00\u822C\u91C7\u7528\u5148\u5C06\u6574\u884C\u6570\u636E\u8BFB\u51FA\uFF0C\u7136\u540E\u518D\u66F4\u65B0\u90E8\u5206\u5B57\u6BB5\u503C\uFF0C\u518D\u5199\u56DE\u3002\u8FD9\u79CD\u8BFB\u5199\u4E8B\u52A1\u975E\u5E38\u8017\u65F6\uFF0C\u5E76\u4E14\u4E0D\u9002\u5408\u5927\u6279\u91CF\u6570\u636E\u5199\u5165\u3002Doris \u5728\u4E3B\u952E\u6A21\u578B\u7684\u5BFC\u5165\u66F4\u65B0\u4E2D\uFF0C\u63D0\u4F9B\u4E86\u53EF\u4EE5\u76F4\u63A5\u63D2\u5165\u6216\u8005\u66F4\u65B0\u90E8\u5206\u5217\u6570\u636E\u7684\u529F\u80FD\uFF0C\u4E0D\u9700\u8981\u5148\u8BFB\u53D6\u6574\u884C\u6570\u636E\uFF0C\u8FD9\u6837\u66F4\u65B0\u6548\u7387\u5C31\u5927\u5E45\u63D0\u5347\u4E86\u3002"}),"\n",(0,s.jsx)(e.admonition,{title:"\u6CE8\u610F",type:"caution",children:(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"2.0 \u7248\u672C\u4EC5\u5728 Unique Key \u7684 Merge-on-Write \u5B9E\u73B0\u4E2D\u652F\u6301\u4E86\u90E8\u5206\u5217\u66F4\u65B0\u80FD\u529B"}),"\n",(0,s.jsx)(e.li,{children:"\u4ECE 2.0.2 \u7248\u672C\u5F00\u59CB\uFF0C\u652F\u6301\u4F7F\u7528 INSERT INTO \u8FDB\u884C\u90E8\u5206\u5217\u66F4\u65B0"}),"\n",(0,s.jsx)(e.li,{children:"\u4E0D\u652F\u6301\u5728\u6709\u540C\u6B65\u7269\u5316\u89C6\u56FE\u7684\u8868\u4E0A\u8FDB\u884C\u90E8\u5206\u5217\u66F4\u65B0"}),"\n"]})}),"\n",(0,s.jsx)(e.h3,{id:"\u9002\u7528\u573A\u666F",children:"\u9002\u7528\u573A\u666F"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5B9E\u65F6\u7684\u52A8\u6001\u5217\u66F4\u65B0\uFF0C\u9700\u8981\u5728\u8868\u4E2D\u5B9E\u65F6\u7684\u9AD8\u9891\u66F4\u65B0\u67D0\u4E9B\u5B57\u6BB5\u503C\u3002\u4F8B\u5982\u7528\u6237\u6807\u7B7E\u8868\u4E2D\u6709\u4E00\u4E9B\u5173\u4E8E\u7528\u6237\u6700\u65B0\u884C\u4E3A\u4FE1\u606F\u7684\u5B57\u6BB5\u9700\u8981\u5B9E\u65F6\u7684\u66F4\u65B0\uFF0C\u4EE5\u5B9E\u73B0\u5E7F\u544A/\u63A8\u8350\u7B49\u7CFB\u7EDF\u80FD\u591F\u636E\u5176\u8FDB\u884C\u5B9E\u65F6\u7684\u5206\u6790\u548C\u51B3\u7B56\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5C06\u591A\u5F20\u6E90\u8868\u62FC\u63A5\u6210\u4E00\u5F20\u5927\u5BBD\u8868"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6570\u636E\u4FEE\u6B63"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u65B9\u5F0F",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,s.jsx)(e.h4,{id:"\u5EFA\u8868",children:"\u5EFA\u8868"}),"\n",(0,s.jsx)(e.p,{children:"\u5EFA\u8868\u65F6\u9700\u8981\u6307\u5B9A\u5982\u4E0B property\uFF0C\u4EE5\u5F00\u542F Merge-on-Write \u5B9E\u73B0"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"enable_unique_key_merge_on_write = true\n"})}),"\n",(0,s.jsx)(e.h4,{id:"\u5BFC\u5165",children:"\u5BFC\u5165"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"StreamLoad/BrokerLoad/RoutineLoad"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528\u7684\u662F Stream Load/Broker Load/Routine Load\uFF0C\u5728\u5BFC\u5165\u65F6\u6DFB\u52A0\u5982\u4E0B header"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"partial_columns:true\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u540C\u65F6\u5728",(0,s.jsx)(e.code,{children:"columns"}),"\u4E2D\u6307\u5B9A\u8981\u5BFC\u5165\u7684\u5217\uFF08\u5FC5\u987B\u5305\u542B\u6240\u6709 key \u5217\uFF0C\u4E0D\u7136\u65E0\u6CD5\u66F4\u65B0\uFF09\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A Stream Load \u7684\u4F8B\u5B50\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'curl  --location-trusted -u root: -H "partial_columns:true" -H "column_separator:," -H "columns:order_id,order_status" -T /tmp/update.csv http://127.0.0.1:8030/api/db1/order_tbl/_stream_load\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"INSERT INTO"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5728\u6240\u6709\u7684\u6570\u636E\u6A21\u578B\u4E2D\uFF0C",(0,s.jsx)(e.code,{children:"INSERT INTO"})," \u7ED9\u5B9A\u4E00\u90E8\u5206\u5217\u65F6\u9ED8\u8BA4\u884C\u4E3A\u90FD\u662F\u6574\u884C\u5199\u5165\uFF0C\u4E3A\u4E86\u9632\u6B62\u8BEF\u7528\uFF0C\u5728 Merge-on-Write \u5B9E\u73B0\u4E2D\uFF0C",(0,s.jsx)(e.code,{children:"INSERT INTO"}),"\u9ED8\u8BA4\u4ECD\u7136\u4FDD\u6301\u6574\u884C UPSERT \u7684\u8BED\u4E49\uFF0C\u5982\u679C\u9700\u8981\u5F00\u542F\u90E8\u5206\u5217\u66F4\u65B0\u7684\u8BED\u4E49\uFF0C\u9700\u8981\u8BBE\u7F6E\u5982\u4E0B session variable"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true\nINSERT INTO order_tbl (order_id, order_status) VALUES (1,'\u5F85\u53D1\u8D27');\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u63A7\u5236 insert \u8BED\u53E5\u662F\u5426\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\u7684\u4F1A\u8BDD\u53D8\u91CF",(0,s.jsx)(e.code,{children:"enable_insert_strict"}),"\u7684\u9ED8\u8BA4\u503C\u4E3A true\uFF0C\u5373 insert \u8BED\u53E5\u9ED8\u8BA4\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u800C\u5728\u4E25\u683C\u6A21\u5F0F\u4E0B\u8FDB\u884C\u90E8\u5206\u5217\u66F4\u65B0\u4E0D\u5141\u8BB8\u66F4\u65B0\u4E0D\u5B58\u5728\u7684 key\u3002\u6240\u4EE5\uFF0C\u5728\u4F7F\u7528 insert \u8BED\u53E5\u8FDB\u884C\u90E8\u5206\u5217\u66F4\u65B0\u7684\u65F6\u5019\u5982\u679C\u5E0C\u671B\u80FD\u63D2\u5165\u4E0D\u5B58\u5728\u7684 key\uFF0C\u9700\u8981\u5728",(0,s.jsx)(e.code,{children:"enable_unique_key_partial_update"}),"\u8BBE\u7F6E\u4E3A true \u7684\u57FA\u7840\u4E0A\u540C\u65F6\u5C06",(0,s.jsx)(e.code,{children:"enable_insert_strict"}),"\u8BBE\u7F6E\u4E3A false\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Flink Connector"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528 Flink Connector, \u9700\u8981\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"'sink.properties.partial_columns' = 'true',\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u540C\u65F6\u5728",(0,s.jsx)(e.code,{children:"sink.properties.column"}),"\u4E2D\u6307\u5B9A\u8981\u5BFC\u5165\u7684\u5217\uFF08\u5FC5\u987B\u5305\u542B\u6240\u6709 key \u5217\uFF0C\u4E0D\u7136\u65E0\u6CD5\u66F4\u65B0\uFF09"]}),"\n",(0,s.jsx)(e.h3,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(e.p,{children:"\u5047\u8BBE Doris \u4E2D\u5B58\u5728\u4E00\u5F20\u8BA2\u5355\u8868 order_tbl\uFF0C\u5176\u4E2D\u8BA2\u5355 id \u662F Key \u5217\uFF0C\u8BA2\u5355\u72B6\u6001\uFF0C\u8BA2\u5355\u91D1\u989D\u662F Value \u5217\u3002\u6570\u636E\u72B6\u6001\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u8BA2\u5355 id"}),(0,s.jsx)(e.th,{children:"\u8BA2\u5355\u91D1\u989D"}),(0,s.jsx)(e.th,{children:"\u8BA2\u5355\u72B6\u6001"})]})}),(0,s.jsx)(e.tbody,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"1"}),(0,s.jsx)(e.td,{children:"100"}),(0,s.jsx)(e.td,{children:"\u5F85\u4ED8\u6B3E"})]})})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | \u5F85\u4ED8\u6B3E        |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u8FD9\u65F6\u5019\uFF0C\u7528\u6237\u70B9\u51FB\u4ED8\u6B3E\u540E\uFF0CDoris \u7CFB\u7EDF\u9700\u8981\u5C06\u8BA2\u5355 id \u4E3A '1' \u7684\u8BA2\u5355\u72B6\u6001\u53D8\u66F4\u4E3A '\u5F85\u53D1\u8D27'\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528",(0,s.jsx)(e.code,{children:"INSERT INTO"}),"\u8FDB\u884C\u66F4\u65B0\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SET enable_unique_key_partial_update=true;\nINSERT INTO order_tbl (order_id, order_status) VALUES (1,'\u5F85\u53D1\u8D27');\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u66F4\u65B0\u540E\u7ED3\u679C\u5982\u4E0B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+----------+--------------+--------------+\n| order_id | order_amount | order_status |\n+----------+--------------+--------------+\n| 1        |          100 | \u5F85\u53D1\u8D27        |\n+----------+--------------+--------------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u6CE8\u610F",children:"\u4F7F\u7528\u6CE8\u610F"}),"\n",(0,s.jsx)(e.p,{children:"\u7531\u4E8E Merge-on-Write \u5B9E\u73B0\u9700\u8981\u5728\u6570\u636E\u5199\u5165\u7684\u65F6\u5019\uFF0C\u8FDB\u884C\u6574\u884C\u6570\u636E\u7684\u8865\u9F50\uFF0C\u4EE5\u4FDD\u8BC1\u6700\u4F18\u7684\u67E5\u8BE2\u6027\u80FD\uFF0C\u56E0\u6B64\u4F7F\u7528 Merge-on-Write \u5B9E\u73B0\u8FDB\u884C\u90E8\u5206\u5217\u66F4\u65B0\u4F1A\u6709\u90E8\u5206\u5BFC\u5165\u6027\u80FD\u4E0B\u964D\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5199\u5165\u6027\u80FD\u4F18\u5316\u5EFA\u8BAE\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4F7F\u7528\u914D\u5907\u4E86 NVMe \u7684 SSD\uFF0C\u6216\u8005\u6781\u901F SSD \u4E91\u76D8\u3002\u56E0\u4E3A\u8865\u9F50\u6570\u636E\u65F6\u4F1A\u5927\u91CF\u7684\u8BFB\u53D6\u5386\u53F2\u6570\u636E\uFF0C\u4EA7\u751F\u8F83\u9AD8\u7684\u8BFB IOPS\uFF0C\u4EE5\u53CA\u8BFB\u541E\u5410"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5F00\u542F\u884C\u5B58\u5C06\u80FD\u591F\u5927\u5927\u51CF\u5C11\u8865\u9F50\u6570\u636E\u65F6\u4EA7\u751F\u7684 IOPS\uFF0C\u5BFC\u5165\u6027\u80FD\u63D0\u5347\u660E\u663E\uFF0C\u7528\u6237\u53EF\u4EE5\u5728\u5EFA\u8868\u65F6\u901A\u8FC7\u5982\u4E0B property \u6765\u5F00\u542F\u884C\u5B58\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:'"store_row_column" = "true"\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u76EE\u524D\uFF0C\u540C\u4E00\u6279\u6B21\u6570\u636E\u5199\u5165\u4EFB\u52A1\uFF08\u65E0\u8BBA\u662F\u5BFC\u5165\u4EFB\u52A1\u8FD8\u662F",(0,s.jsx)(e.code,{children:"INSERT INTO"}),"\uFF09\u7684\u6240\u6709\u884C\u53EA\u80FD\u66F4\u65B0\u76F8\u540C\u7684\u5217\uFF0C\u5982\u679C\u9700\u8981\u66F4\u65B0\u4E0D\u540C\u5217\u7684\u6570\u636E\uFF0C\u5219\u9700\u8981\u5206\u4E0D\u540C\u7684\u6279\u6B21\u8FDB\u884C\u5199\u5165\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u7075\u6D3B\u90E8\u5206\u5217\u66F4\u65B0",children:"\u7075\u6D3B\u90E8\u5206\u5217\u66F4\u65B0"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 x.x.x \u7248\u672C\u4E4B\u524D\uFF0Cdoris \u652F\u6301\u7684\u90E8\u5206\u5217\u66F4\u65B0\u529F\u80FD\u9650\u5236\u4E86\u4E00\u6B21\u5BFC\u5165\u4E2D\u6BCF\u4E00\u884C\u5FC5\u987B\u66F4\u65B0\u76F8\u540C\u7684\u5217\uFF0C\u4ECE x.x.x \u7248\u672C\u5F00\u59CB\uFF0Cdoris \u652F\u6301\u4E00\u79CD\u66F4\u52A0\u7075\u6D3B\u7684\u66F4\u65B0\u65B9\u5F0F\uFF0C\u5B83\u4F7F\u5F97\u4E00\u6B21\u5BFC\u5165\u4E2D\u7684\u6BCF\u4E00\u884C\u53EF\u4EE5\u66F4\u65B0\u4E0D\u540C\u7684\u5217\u3002"}),"\n",(0,s.jsx)(e.admonition,{title:"\u6CE8\u610F:",type:"caution",children:(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"\u7075\u6D3B\u5217\u66F4\u65B0\u8FD9\u4E00\u529F\u80FD\u4ECE x.x.x \u7248\u672C\u5F00\u59CB\u652F\u6301"}),"\n",(0,s.jsx)(e.li,{children:"\u76EE\u524D\u53EA\u6709 stream load \u8FD9\u4E00\u79CD\u5BFC\u5165\u65B9\u5F0F\u4EE5\u53CA\u4F7F\u7528 stream load \u4F5C\u4E3A\u5176\u5BFC\u5165\u65B9\u5F0F\u7684\u5DE5\u5177(\u5982 doris-flink-connector)\u652F\u6301\u7075\u6D3B\u5217\u66F4\u65B0\u529F\u80FD"}),"\n",(0,s.jsx)(e.li,{children:"\u5728\u4F7F\u7528\u7075\u6D3B\u5217\u66F4\u65B0\u65F6\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u4E3A json \u683C\u5F0F\u7684\u6570\u636E"}),"\n"]})}),"\n",(0,s.jsx)(e.h3,{id:"\u9002\u7528\u573A\u666F-1",children:"\u9002\u7528\u573A\u666F"}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4F7F\u7528 CDC \u7684\u65B9\u5F0F\u5C06\u67D0\u4E2A\u6570\u636E\u7CFB\u7EDF\u7684\u6570\u636E\u5B9E\u65F6\u540C\u6B65\u5230 Doris \u4E2D\u65F6\uFF0C\u6E90\u7AEF\u7CFB\u7EDF\u8F93\u51FA\u7684\u8BB0\u5F55\u53EF\u80FD\u5E76\u4E0D\u662F\u5B8C\u6574\u7684\u884C\u6570\u636E\uFF0C\u800C\u662F\u53EA\u6709\u4E3B\u952E\u548C\u88AB\u66F4\u65B0\u7684\u5217\u7684\u6570\u636E\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u67D0\u4E2A\u65F6\u95F4\u7A97\u53E3\u5185\u7684\u4E00\u6279\u6570\u636E\u4E2D\u6BCF\u4E00\u884C\u66F4\u65B0\u7684\u5217\u53EF\u80FD\u90FD\u662F\u4E0D\u540C\u7684\u3002\u6B64\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7075\u6D3B\u5217\u66F4\u65B0\u7684\u65B9\u5F0F\u6765\u5C06\u6570\u636E\u5BFC\u5165\u5230 Doris \u4E2D\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4F7F\u7528\u65B9\u5F0F-1",children:"\u4F7F\u7528\u65B9\u5F0F"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5B58\u91CF\u8868\u5F00\u542F\u7075\u6D3B\u5217\u66F4\u65B0\u529F\u80FD"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5BF9\u4E8E\u5728\u65E7\u7248\u672C Doris \u4E2D\u5DF2\u7ECF\u5EFA\u597D\u7684\u5B58\u91CF Merge-On-Write \u8868\uFF0C\u5728\u5347\u7EA7 Doris \u4E4B\u540E\u5982\u679C\u60F3\u8981\u4F7F\u7528\u7075\u6D3B\u5217\u66F4\u65B0\u7684\u529F\u80FD\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:'ALTER TALBE db1.tbl1 ENABLE FEATURE "UPDATE_FLEXIBLE_COLUMNS";'})," \u6765\u5F00\u542F\u8FD9\u4E00\u529F\u80FD\u3002\u6267\u884C\u5B8C\u4E0A\u8FF0\u8BED\u53E5\u540E\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"show create table db1.tbl1"})," \u7684\u7ED3\u679C\u4E2D\u5982\u679C\u5305\u542B ",(0,s.jsx)(e.code,{children:'"enable_unique_key_skip_bitmap_column" = "true"'})," \u5219\u8868\u793A\u529F\u80FD\u5F00\u542F\u6210\u529F\u3002\u6CE8\u610F\uFF0C\u4F7F\u7528\u8FD9\u4E00\u65B9\u5F0F\u4E4B\u524D\u9700\u8981\u786E\u4FDD\u76EE\u6807\u8868\u5DF2\u7ECF\u5F00\u542F\u4E86 light-schema-change \u7684\u529F\u80FD\u3002"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u65B0\u5EFA\u8868\u4F7F\u7528\u7075\u6D3B\u5217\u66F4\u65B0\u529F\u80FD"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5BF9\u4E8E\u65B0\u5EFA\u7684\u8868\uFF0C\u5982\u679C\u9700\u8981\u4F7F\u7528\u7075\u6D3B\u5217\u66F4\u65B0\u529F\u80FD\uFF0C\u5EFA\u8868\u65F6\u9700\u8981\u6307\u5B9A\u5982\u4E0B\u8868\u5C5E\u6027\uFF0C\u4EE5\u5F00\u542F Merge-on-Write \u5B9E\u73B0\uFF0C\u5F00\u542F light-schema-change\uFF0C\u540C\u65F6\u4F7F\u5F97\u8868\u5177\u6709\u7075\u6D3B\u5217\u66F4\u65B0\u6240\u9700\u8981\u7684 ",(0,s.jsx)(e.code,{children:"bitmap"})," \u9690\u85CF\u5217\u3002"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:'"enable_light_schema_change" = "true"\n"enable_unique_key_merge_on_write" = "true"\n"enable_unique_key_skip_bitmap_column" = "true"\n'})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"StreamLoad"})}),"\n",(0,s.jsx)(e.p,{children:"\u5728\u4F7F\u7528 Stream Load \u5BFC\u5165\u65F6\u6DFB\u52A0\u5982\u4E0B header"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"unique_key_update_mode:UPDATE_FLEXIBLE_COLUMNS\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"Flink Doris Connector"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u679C\u4F7F\u7528 Flink Doris Connector, \u9700\u8981\u6DFB\u52A0\u5982\u4E0B\u914D\u7F6E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-Plain",children:"'sink.properties.unique_key_update_mode' = 'UPDATE_FLEXIBLE_COLUMNS'\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u793A\u4F8B-1",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(e.p,{children:"\u5047\u8BBE\u6709\u5982\u4E0B\u8868"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE t1 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true");\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u4E2D\u6709\u5982\u4E0B\u539F\u59CB\u6570\u636E"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"MySQL root@127.1:d1> select * from t1;\n+---+----+----+----+----+----+\n| k | v1 | v2 | v3 | v4 | v5 |\n+---+----+----+----+----+----+\n| 0 | 0  | 0  | 0  | 0  | 0  |\n| 1 | 1  | 1  | 1  | 1  | 1  |\n| 2 | 2  | 2  | 2  | 2  | 2  |\n| 3 | 3  | 3  | 3  | 3  | 3  |\n| 4 | 4  | 4  | 4  | 4  | 4  |\n| 5 | 5  | 5  | 5  | 5  | 5  |\n+---+----+----+----+----+----+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u73B0\u5728\u901A\u8FC7\u7075\u6D3B\u5217\u66F4\u65B0\u5BFC\u5165\u6765\u66F4\u65B0\u5176\u4E2D\u7684\u4E00\u4E9B\u884C\u7684\u5B57\u6BB5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:"$ cat test1.json\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"k": 0, "__DORIS_DELETE_SIGN__": 1}\n{"k": 1, "v1": 10}\n{"k": 2, "v2": 20, "v5": 25}\n{"k": 3, "v3": 30}\n{"k": 4, "v4": 20, "v1": 43, "v3": 99}\n{"k": 5, "v5": null}\n{"k": 6, "v1": 999, "v3": 777}\n{"k": 2, "v4": 222}\n{"k": 1, "v2": 111, "v3": 111}\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-shell",children:'curl --location-trusted -u root: \\\n-H "strict_mode:false" \\\n-H "format:json" \\\n-H "read_json_by_line:true" \\\n-H "unique_key_update_mode:UPDATE_FLEXIBLE_COLUMNS" \\\n-T test1.json \\\n-XPUT http://<host>:<http_port>/api/d1/t1/_stream_load\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u66F4\u65B0\u540E\u8868\u4E2D\u7684\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"MySQL root@127.1:d1> select * from t1;\n+---+-----+------+-----+------+--------+\n| k | v1  | v2   | v3  | v4   | v5     |\n+---+-----+------+-----+------+--------+\n| 1 | 10  | 111  | 111 | 1    | 1      |\n| 2 | 2   | 20   | 2   | 222  | 25     |\n| 3 | 3   | 3    | 30  | 3    | 3      |\n| 4 | 43  | 4    | 99  | 20   | 4      |\n| 5 | 5   | 5    | 5   | 5    | <null> |\n| 6 | 999 | 9876 | 777 | 1234 | <null> |\n+---+-----+------+-----+------+--------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"\u9650\u5236\u4E0E\u6CE8\u610F\u4E8B\u9879",children:"\u9650\u5236\u4E0E\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u548C\u4E4B\u524D\u7684\u90E8\u5206\u5217\u66F4\u65B0\u76F8\u540C\uFF0C\u7075\u6D3B\u5217\u66F4\u65B0\u8981\u6C42\u5BFC\u5165\u7684\u6BCF\u4E00\u884C\u6570\u636E\u9700\u8981\u5305\u62EC\u6240\u6709\u7684 Key \u5217\uFF0C\u4E0D\u6EE1\u8DB3\u8FD9\u4E00\u8981\u6C42\u7684\u884C\u6570\u636E\u5C06\u88AB\u8FC7\u6EE4\u6389\uFF0C\u540C\u65F6\u8BA1\u5165 ",(0,s.jsx)(e.code,{children:"filter rows"})," \u7684\u8BA1\u6570\u4E2D\uFF0C\u5982\u679C ",(0,s.jsx)(e.code,{children:"filtered rows"})," \u7684\u6570\u91CF\u8D85\u8FC7\u4E86\u672C\u6B21\u5BFC\u5165 ",(0,s.jsx)(e.code,{children:"max_filter_ratio"})," \u6240\u80FD\u5BB9\u5FCD\u7684\u4E0A\u9650\uFF0C\u5219\u6574\u4E2A\u5BFC\u5165\u5C06\u4F1A\u5931\u8D25\u3002\u540C\u65F6\uFF0C\u88AB\u8FC7\u6EE4\u7684\u6570\u636E\u4F1A\u5728 error log \u7559\u4E0B\u4E00\u6761\u65E5\u5FD7\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u7075\u6D3B\u5217\u66F4\u65B0\u5BFC\u5165\u4E2D\u6BCF\u4E00\u4E2A json \u5BF9\u8C61\u4E2D\u7684\u952E\u503C\u5BF9\u53EA\u6709\u5F53\u5B83\u7684 Key \u548C\u76EE\u6807\u8868\u4E2D\u67D0\u4E00\u5217\u7684\u5217\u540D\u4E00\u81F4\u65F6\u624D\u662F\u6709\u6548\u7684\uFF0C\u4E0D\u6EE1\u8DB3\u8FD9\u4E00\u8981\u6C42\u7684\u952E\u503C\u5BF9\u5C06\u88AB\u5FFD\u7565 \u3002\u540C\u65F6\uFF0CKey \u4E3A ",(0,s.jsx)(e.code,{children:"__DORIS_VERSION_COL__"}),"/",(0,s.jsx)(e.code,{children:"__DORIS_ROW_STORE_COL__"}),"/",(0,s.jsx)(e.code,{children:"__DORIS_SKIP_BITMAP_COL__"})," \u7684\u952E\u503C\u5BF9\u4E5F\u5C06\u88AB\u5FFD\u7565\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5F53\u76EE\u6807\u8868\u7684\u8868\u5C5E\u6027\u4E2D\u8BBE\u7F6E\u4E86 ",(0,s.jsx)(e.code,{children:"function_column.sequence_type"})," \u8FD9\u4E00\u5C5E\u6027\u65F6\uFF0C\u7075\u6D3B\u5217\u66F4\u65B0\u7684\u5BFC\u5165\u53EF\u4EE5\u901A\u8FC7\u5728 json \u5BF9\u8C61\u4E2D\u5305\u62EC Key \u4E3A ",(0,s.jsx)(e.code,{children:"__DORIS_SEQUENCE_COL__"})," \u7684\u952E\u503C\u5BF9\u6765\u6307\u5B9A\u76EE\u6807\u8868\u4E2D ",(0,s.jsx)(e.code,{children:"__DORIS_SEQUENCE_COL__"})," \u5217\u7684\u503C\u3002\u5BF9\u4E8E\u4E0D\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"__DORIS_SEQUENCE_COL__"})," \u5217\u7684\u503C\u7684\u884C\uFF0C\u5982\u679C\u8FD9\u4E00\u884C\u7684 Key \u5728\u539F\u8868\u4E2D\u5B58\u5728\uFF0C\u5219\u8FD9\u4E00\u884C ",(0,s.jsx)(e.code,{children:"__DORIS_SEQUENCE_COL__"})," \u5217\u7684\u503C\u5C06\u88AB\u586B\u5145\u4E3A\u65E7\u884C\u4E2D\u5BF9\u5E94\u7684\u503C\uFF0C\u5426\u5219\u8BE5\u5217\u7684\u503C\u5C06\u88AB\u586B\u5145\u4E3A ",(0,s.jsx)(e.code,{children:"null"})," \u503C"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4E0B\u8868\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE t2 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true",\n"function_column.sequence_type" = "int");\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u4E2D\u6709\u5982\u4E0B\u539F\u59CB\u6570\u636E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+---+----+----+----+----+----+----------------------+\n| k | v1 | v2 | v3 | v4 | v5 |__DORIS_SEQUENCE_COL__|\n+---+----+----+----+----+----+----------------------+\n| 0 | 0  | 0  | 0  | 0  | 0  | 0                    |\n| 1 | 1  | 1  | 1  | 1  | 10 | 10                   |\n| 2 | 2  | 2  | 2  | 2  | 20 | 20                   |\n| 3 | 3  | 3  | 3  | 3  | 30 | 30                   |\n| 4 | 4  | 4  | 4  | 4  | 40 | 40                   |\n| 5 | 5  | 5  | 5  | 5  | 50 | 50                   |\n+---+----+----+----+----+----+----------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u7075\u6D3B\u5217\u66F4\u65B0\u5BFC\u5165\u5982\u4E0B\u6570\u636E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"k": 1, "v1": 111, "v5": 9, "__DORIS_SEQUENCE_COL__": 9}\n{"k": 2, "v2": 222, "v5": 25, "__DORIS_SEQUENCE_COL__": 25}\n{"k": 3, "v3": 333}\n{"k": 4, "v4": 444, "v5": 50, "v1": 411, "v3": 433, "v2": null, "__DORIS_SEQUENCE_COL__": 50}\n{"k": 5, "v5": null, "__DORIS_SEQUENCE_COL__": null}\n{"k": 6, "v1": 611, "v3": 633}\n{"k": 7, "v3": 733, "v5": 300, "__DORIS_SEQUENCE_COL__": 300}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u7EC8\u8868\u4E2D\u7684\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+---+--------+--------+-----+------+--------+\n| k | v1     | v2     | v3  | v4   | v5     |\n+---+--------+--------+-----+------+--------+\n| 0 | 0      | 0      | 0   | 0    | 0      |\n| 1 | 1      | 1      | 1   | 1    | 1      |\n| 5 | 5      | 5      | 5   | 5    | 5      |\n| 2 | 2      | 222    | 2   | 2    | 25     |\n| 3 | 3      | 3      | 333 | 3    | 3      |\n| 4 | 411    | <null> | 433 | 444  | 50     |\n| 6 | 611    | 9876   | 633 | 1234 | <null> |\n| 7 | <null> | 9876   | 733 | 1234 | 300    |\n+---+--------+--------+-----+------+--------+\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"4",children:["\n",(0,s.jsxs)(e.li,{children:["\u5F53\u76EE\u6807\u8868\u7684\u8868\u5C5E\u6027\u4E2D\u8BBE\u7F6E\u4E86 ",(0,s.jsx)(e.code,{children:"function_column.sequence_col"})," \u8FD9\u4E00\u5C5E\u6027\u65F6\uFF0C\u7075\u6D3B\u5217\u66F4\u65B0\u5BFC\u5165\u6570\u636E\u7684 json \u5BF9\u8C61\u4E2D Key \u4E3A ",(0,s.jsx)(e.code,{children:"__DORIS_SEQUENCE_COL__"})," \u7684\u952E\u503C\u5BF9\u5C06\u88AB\u5FFD\u7565\uFF0C\u5BFC\u5165\u4E2D\u67D0\u4E00\u884C ",(0,s.jsx)(e.code,{children:"__DORIS_SEQUENCE_COL__"})," \u5217\u7684\u503C\u5C06\u4E0E\u8FD9\u4E00\u884C\u4E2D\u8868\u5C5E\u6027 ",(0,s.jsx)(e.code,{children:"function_column.sequence_col"})," \u6240\u6307\u5B9A\u7684\u5217\u6700\u7EC8\u7684\u503C\u5B8C\u5168\u4E00\u81F4\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u4F8B\u5982\uFF0C\u5BF9\u4E8E\u4E0B\u8868\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE t3 (\n  `k` int(11) NULL, \n  `v1` BIGINT NULL,\n  `v2` BIGINT NULL DEFAULT "9876",\n  `v3` BIGINT NOT NULL,\n  `v4` BIGINT NOT NULL DEFAULT "1234",\n  `v5` BIGINT NULL DEFAULT "31"\n) UNIQUE KEY(`k`) DISTRIBUTED BY HASH(`k`) BUCKETS 1\nPROPERTIES(\n"replication_num" = "3",\n"enable_unique_key_merge_on_write" = "true",\n"enable_light_schema_change" = "true",\n"enable_unique_key_skip_bitmap_column" = "true",\n"function_column.sequence_col" = "v5");\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u8868\u4E2D\u6709\u5982\u4E0B\u539F\u59CB\u6570\u636E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+---+----+----+----+----+----+----------------------+\n| k | v1 | v2 | v3 | v4 | v5 |__DORIS_SEQUENCE_COL__|\n+---+----+----+----+----+----+----------------------+\n| 0 | 0  | 0  | 0  | 0  | 0  | 0                    |\n| 1 | 1  | 1  | 1  | 1  | 10 | 10                   |\n| 2 | 2  | 2  | 2  | 2  | 20 | 20                   |\n| 3 | 3  | 3  | 3  | 3  | 30 | 30                   |\n| 4 | 4  | 4  | 4  | 4  | 40 | 40                   |\n| 5 | 5  | 5  | 5  | 5  | 50 | 50                   |\n+---+----+----+----+----+----+----------------------+\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u901A\u8FC7\u7075\u6D3B\u5217\u66F4\u65B0\u5BFC\u5165\u5982\u4E0B\u6570\u636E\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'{"k": 1, "v1": 111, "v5": 9}\n{"k": 2, "v2": 222, "v5": 25}\n{"k": 3, "v3": 333}\n{"k": 4, "v4": 444, "v5": 50, "v1": 411, "v3": 433, "v2": null}\n{"k": 5, "v5": null}\n{"k": 6, "v1": 611, "v3": 633}\n{"k": 7, "v3": 733, "v5": 300}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u6700\u7EC8\u8868\u4E2D\u7684\u6570\u636E\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"+---+--------+--------+-----+------+-----+\n| k | v1     | v2     | v3  | v4   | v5  |\n+---+--------+--------+-----+------+-----+\n| 0 | 0      | 0      | 0   | 0    | 0   |\n| 1 | 1      | 1      | 1   | 1    | 10  |\n| 5 | 5      | 5      | 5   | 5    | 50  |\n| 2 | 2      | 222    | 2   | 2    | 25  |\n| 3 | 3      | 3      | 333 | 3    | 30  |\n| 4 | 411    | <null> | 433 | 444  | 50  |\n| 6 | 611    | 9876   | 633 | 1234 | 31  |\n| 7 | <null> | 9876   | 733 | 1234 | 300 |\n+---+--------+--------+-----+------+-----+\n"})}),"\n",(0,s.jsxs)(e.ol,{start:"5",children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4F7F\u7528\u7075\u6D3B\u5217\u66F4\u65B0\u65F6\u4E0D\u80FD\u6307\u5B9A\u6216\u5F00\u542F\u5982\u4E0B\u4E00\u4E9B\u5BFC\u5165\u5C5E\u53C2\u6570\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"merge_type"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"delete"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u5F00\u542F ",(0,s.jsx)(e.code,{children:"fuzzy_parse"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"columns"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"jsonpaths"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"hidden_columns"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"function_column.sequence_col"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"sql"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u5F00\u542F ",(0,s.jsx)(e.code,{children:"memtable_on_sink_node"})," \u524D\u79FB"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"group_commit"})," \u53C2\u6570"]}),"\n",(0,s.jsxs)(e.li,{children:["\u4E0D\u80FD\u6307\u5B9A ",(0,s.jsx)(e.code,{children:"where"})," \u53C2\u6570"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4E0D\u652F\u6301\u5728\u6709 Variant \u5217\u7684\u8868\u4E0A\u8FDB\u884C\u7075\u6D3B\u5217\u66F4\u65B0\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4E0D\u652F\u6301\u5728\u6709\u540C\u6B65\u7269\u5316\u89C6\u56FE\u7684\u8868\u4E0A\u8FDB\u884C\u7075\u6D3B\u5217\u66F4\u65B0\u3002"}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return d}});var r=l(667294);let s={},i=r.createContext(s);function d(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:d(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);