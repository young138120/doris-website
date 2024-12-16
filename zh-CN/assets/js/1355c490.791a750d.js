"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["808297"],{605918:function(n,d,e){e.r(d),e.d(d,{metadata:()=>s,contentTitle:()=>r,default:()=>j,assets:()=>h,toc:()=>c,frontMatter:()=>t});var s=JSON.parse('{"id":"table-design/data-model/aggregate","title":"\u805A\u5408\u6A21\u578B","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/table-design/data-model/aggregate.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/aggregate","permalink":"/zh-CN/docs/2.0/table-design/data-model/aggregate","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"\u805A\u5408\u6A21\u578B","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4E3B\u952E\u6A21\u578B","permalink":"/zh-CN/docs/2.0/table-design/data-model/unique"},"next":{"title":"\u4F7F\u7528\u6CE8\u610F","permalink":"/zh-CN/docs/2.0/table-design/data-model/tips"}}'),i=e("785893"),l=e("250065");let t={title:"\u805A\u5408\u6A21\u578B",language:"zh-CN"},r=void 0,h={},c=[{value:"\u5BFC\u5165\u6570\u636E\u805A\u5408",id:"\u5BFC\u5165\u6570\u636E\u805A\u5408",level:2},{value:"\u5BFC\u5165\u6570\u636E\u4E0E\u5DF2\u6709\u6570\u636E\u805A\u5408",id:"\u5BFC\u5165\u6570\u636E\u4E0E\u5DF2\u6709\u6570\u636E\u805A\u5408",level:2}];function x(n){let d={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.p,{children:"\u805A\u5408\u6570\u636E\u6A21\u578B\uFF0C\u4E5F\u79F0\u4E3A Aggregate \u6570\u636E\u6A21\u578B\u3002\u53EF\u6839\u636E Key \u5217\u805A\u5408\u6570\u636E\uFF0CDoris \u5B58\u50A8\u5C42\u4FDD\u7559\u805A\u5408\u540E\u7684\u6570\u636E\uFF0C\u4ECE\u800C\u53EF\u4EE5\u51CF\u5C11\u5B58\u50A8\u7A7A\u95F4\u548C\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\uFF1B\u901A\u5E38\u7528\u4E8E\u9700\u8981\u6C47\u603B\u6216\u805A\u5408\u4FE1\u606F\uFF08\u5982\u603B\u6570\u6216\u5E73\u5747\u503C\uFF09\u7684\u60C5\u51B5\u3002"}),"\n",(0,i.jsx)(d.p,{children:"\u4E0B\u9762\u4EE5\u5B9E\u9645\u7684\u4F8B\u5B50\u6765\u8BF4\u660E\u4EC0\u4E48\u662F\u805A\u5408\u6A21\u578B\uFF0C\u4EE5\u53CA\u5982\u4F55\u6B63\u786E\u7684\u4F7F\u7528\u805A\u5408\u6A21\u578B\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"\u5BFC\u5165\u6570\u636E\u805A\u5408",children:"\u5BFC\u5165\u6570\u636E\u805A\u5408"}),"\n",(0,i.jsx)(d.p,{children:"\u5047\u8BBE\u4E1A\u52A1\u6709\u5982\u4E0B\u6570\u636E\u8868\u6A21\u5F0F\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"ColumnName"}),(0,i.jsx)(d.th,{children:"Type"}),(0,i.jsx)(d.th,{children:"AggregationType"}),(0,i.jsx)(d.th,{children:"Comment"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"user_id"}),(0,i.jsx)(d.td,{children:"LARGEINT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u7528\u6237 id"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"date"}),(0,i.jsx)(d.td,{children:"DATE"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u6570\u636E\u704C\u5165\u65E5\u671F"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"city"}),(0,i.jsx)(d.td,{children:"VARCHAR(20)"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u6240\u5728\u57CE\u5E02"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"age"}),(0,i.jsx)(d.td,{children:"SMALLINT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u5E74\u9F84"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"sex"}),(0,i.jsx)(d.td,{children:"TINYINT"}),(0,i.jsx)(d.td,{}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u6027\u522B"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"last_visit_date"}),(0,i.jsx)(d.td,{children:"DATETIME"}),(0,i.jsx)(d.td,{children:"REPLACE"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u6700\u540E\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"cost"}),(0,i.jsx)(d.td,{children:"BIGINT"}),(0,i.jsx)(d.td,{children:"SUM"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u603B\u6D88\u8D39"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"max_dwell_time"}),(0,i.jsx)(d.td,{children:"INT"}),(0,i.jsx)(d.td,{children:"MAX"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u6700\u5927\u505C\u7559\u65F6\u95F4"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"min_dwell_time"}),(0,i.jsx)(d.td,{children:"INT"}),(0,i.jsx)(d.td,{children:"MIN"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u6700\u5C0F\u505C\u7559\u65F6\u95F4"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u5982\u679C\u8F6C\u6362\u6210\u5EFA\u8868\u8BED\u53E5\u5219\u5982\u4E0B\uFF08\u7701\u7565\u5EFA\u8868\u8BED\u53E5\u4E2D\u7684 Partition \u548C Distribution \u4FE1\u606F\uFF09"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_tbl_agg1\n(\n    `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237id",\n    `date` DATE NOT NULL COMMENT "\u6570\u636E\u704C\u5165\u65E5\u671F\u65F6\u95F4",\n    `city` VARCHAR(20) COMMENT "\u7528\u6237\u6240\u5728\u57CE\u5E02",\n    `age` SMALLINT COMMENT "\u7528\u6237\u5E74\u9F84",\n    `sex` TINYINT COMMENT "\u7528\u6237\u6027\u522B",\n    `last_visit_date` DATETIME REPLACE DEFAULT "1970-01-01 00:00:00" COMMENT "\u7528\u6237\u6700\u540E\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4",\n    `cost` BIGINT SUM DEFAULT "0" COMMENT "\u7528\u6237\u603B\u6D88\u8D39",\n    `max_dwell_time` INT MAX DEFAULT "0" COMMENT "\u7528\u6237\u6700\u5927\u505C\u7559\u65F6\u95F4",\n    `min_dwell_time` INT MIN DEFAULT "99999" COMMENT "\u7528\u6237\u6700\u5C0F\u505C\u7559\u65F6\u95F4"\n)\nAGGREGATE KEY(`user_id`, `date`, `city`, `age`, `sex`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(d.p,{children:"\u8FD9\u662F\u4E00\u4E2A\u5178\u578B\u7684\u7528\u6237\u4FE1\u606F\u548C\u8BBF\u95EE\u884C\u4E3A\u7684\u4E8B\u5B9E\u8868\u3002\u5728\u4E00\u822C\u661F\u578B\u6A21\u578B\u4E2D\uFF0C\u7528\u6237\u4FE1\u606F\u548C\u8BBF\u95EE\u884C\u4E3A\u4E00\u822C\u5206\u522B\u5B58\u653E\u5728\u7EF4\u5EA6\u8868\u548C\u4E8B\u5B9E\u8868\u4E2D\u3002\u8FD9\u91CC\u4E3A\u4E86\u66F4\u52A0\u65B9\u4FBF\u7684\u89E3\u91CA Doris \u7684\u6570\u636E\u6A21\u578B\uFF0C\u5C06\u4E24\u90E8\u5206\u4FE1\u606F\u7EDF\u4E00\u5B58\u653E\u5728\u4E00\u5F20\u8868\u4E2D\u3002"}),"\n",(0,i.jsx)(d.p,{children:"\u8868\u4E2D\u7684\u5217\u6309\u7167\u662F\u5426\u8BBE\u7F6E\u4E86 AggregationType\uFF0C\u5206\u4E3A Key (\u7EF4\u5EA6\u5217) \u548C Value\uFF08\u6307\u6807\u5217\uFF09\u3002\u6CA1\u6709\u8BBE\u7F6E AggregationType \u7684 user_id\u3001date\u3001age\u3001sex \u79F0\u4E3A Key\uFF0C\u800C\u8BBE\u7F6E\u4E86 AggregationType \u7684\u79F0\u4E3A Value\u3002"}),"\n",(0,i.jsx)(d.p,{children:"\u5F53\u5BFC\u5165\u6570\u636E\u65F6\uFF0C\u5BF9\u4E8E Key \u5217\u76F8\u540C\u7684\u884C\u4F1A\u805A\u5408\u6210\u4E00\u884C\uFF0C\u800C Value \u5217\u4F1A\u6309\u7167\u8BBE\u7F6E\u7684 AggregationType \u8FDB\u884C\u805A\u5408\u3002AggregationType \u76EE\u524D\u6709\u4EE5\u4E0B\u51E0\u79CD\u805A\u5408\u65B9\u5F0F\u548C agg_state\uFF1A"}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"SUM\uFF1A\u6C42\u548C\uFF0C\u591A\u884C\u7684 Value \u8FDB\u884C\u7D2F\u52A0\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"REPLACE\uFF1A\u66FF\u4EE3\uFF0C\u4E0B\u4E00\u6279\u6570\u636E\u4E2D\u7684 Value \u4F1A\u66FF\u6362\u4E4B\u524D\u5BFC\u5165\u8FC7\u7684\u884C\u4E2D\u7684 Value\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"MAX\uFF1A\u4FDD\u7559\u6700\u5927\u503C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"MIN\uFF1A\u4FDD\u7559\u6700\u5C0F\u503C\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"REPLACE_IF_NOT_NULL\uFF1A\u975E\u7A7A\u503C\u66FF\u6362\u3002\u548C REPLACE \u7684\u533A\u522B\u5728\u4E8E\u5BF9\u4E8E null \u503C\uFF0C\u4E0D\u505A\u66FF\u6362\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"HLL_UNION\uFF1AHLL \u7C7B\u578B\u7684\u5217\u7684\u805A\u5408\u65B9\u5F0F\uFF0C\u901A\u8FC7 HyperLogLog \u7B97\u6CD5\u805A\u5408\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"BITMAP_UNION\uFF1ABIMTAP \u7C7B\u578B\u7684\u5217\u7684\u805A\u5408\u65B9\u5F0F\uFF0C\u8FDB\u884C\u4F4D\u56FE\u7684\u5E76\u96C6\u805A\u5408\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(d.admonition,{type:"caution",children:(0,i.jsx)(d.p,{children:"\u5982\u679C\u8FD9\u51E0\u79CD\u805A\u5408\u65B9\u5F0F\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u5219\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528 agg_state \u7C7B\u578B\u3002"})}),"\n",(0,i.jsx)(d.p,{children:"\u5047\u8BBE\u6709\u4EE5\u4E0B\u5BFC\u5165\u6570\u636E\uFF08\u539F\u59CB\u6570\u636E\uFF09\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"user_id"}),(0,i.jsx)(d.th,{children:"date"}),(0,i.jsx)(d.th,{children:"city"}),(0,i.jsx)(d.th,{children:"age"}),(0,i.jsx)(d.th,{children:"sex"}),(0,i.jsx)(d.th,{children:"last_visit_date"}),(0,i.jsx)(d.th,{children:"cost"}),(0,i.jsx)(d.th,{children:"max_dwell_time"}),(0,i.jsx)(d.th,{children:"min_dwell_time"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10000"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 6:00"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"10"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10000"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 7:00"}),(0,i.jsx)(d.td,{children:"15"}),(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"2"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10001"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/1 17:05"}),(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"22"}),(0,i.jsx)(d.td,{children:"22"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10002"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u4E0A\u6D77"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/2 12:59"}),(0,i.jsx)(d.td,{children:"200"}),(0,i.jsx)(d.td,{children:"5"}),(0,i.jsx)(d.td,{children:"5"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10003"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u5E7F\u5DDE"}),(0,i.jsx)(d.td,{children:"32"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/2 11:20"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"11"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 10:00"}),(0,i.jsx)(d.td,{children:"100"}),(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"3"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/3"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/3 10:20"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"6"}),(0,i.jsx)(d.td,{children:"6"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u901A\u8FC7 SQL \u5BFC\u5165\u6570\u636E\uFF1A"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:'insert into example_tbl_agg1 values\n(10000,"2017-10-01","\u5317\u4EAC",20,0,"2017-10-01 06:00:00",20,10,10),\n(10000,"2017-10-01","\u5317\u4EAC",20,0,"2017-10-01 07:00:00",15,2,2),\n(10001,"2017-10-01","\u5317\u4EAC",30,1,"2017-10-01 17:05:45",2,22,22),\n(10002,"2017-10-02","\u4E0A\u6D77",20,1,"2017-10-02 12:59:12",200,5,5),\n(10003,"2017-10-02","\u5E7F\u5DDE",32,0,"2017-10-02 11:20:00",30,11,11),\n(10004,"2017-10-01","\u6DF1\u5733",35,0,"2017-10-01 10:00:15",100,3,3),\n(10004,"2017-10-03","\u6DF1\u5733",35,0,"2017-10-03 10:20:22",11,6,6);\n'})}),"\n",(0,i.jsx)(d.p,{children:"\u8FD9\u662F\u4E00\u5F20\u8BB0\u5F55\u7528\u6237\u8BBF\u95EE\u67D0\u5546\u54C1\u9875\u9762\u884C\u4E3A\u7684\u8868\u3002\u4EE5\u7B2C\u4E00\u884C\u6570\u636E\u4E3A\u4F8B\uFF0C\u89E3\u91CA\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"\u6570\u636E"}),(0,i.jsx)(d.th,{children:"\u8BF4\u660E"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10000"}),(0,i.jsx)(d.td,{children:"\u7528\u6237 id\uFF0C\u6BCF\u4E2A\u7528\u6237\u552F\u4E00\u8BC6\u522B id"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u6570\u636E\u5165\u5E93\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u65E5\u671F"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u6240\u5728\u57CE\u5E02"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u5E74\u9F84"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"\u6027\u522B\u7537\uFF081 \u4EE3\u8868\u5973\u6027\uFF09"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"2017/10/1 6:00"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u672C\u6B21\u8BBF\u95EE\u8BE5\u9875\u9762\u7684\u65F6\u95F4\uFF0C\u7CBE\u786E\u5230\u79D2"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u672C\u6B21\u8BBF\u95EE\u4EA7\u751F\u7684\u6D88\u8D39"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u672C\u6B21\u8BBF\u95EE\uFF0C\u9A7B\u7559\u8BE5\u9875\u9762\u7684\u65F6\u95F4"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"\u7528\u6237\u672C\u6B21\u8BBF\u95EE\uFF0C\u9A7B\u7559\u8BE5\u9875\u9762\u7684\u65F6\u95F4\uFF08\u5197\u4F59\uFF09"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u90A3\u4E48\u5F53\u8FD9\u6279\u6570\u636E\u6B63\u786E\u5BFC\u5165\u5230 Doris \u4E2D\u540E\uFF0CDoris \u4E2D\u6700\u7EC8\u5B58\u50A8\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"user_id"}),(0,i.jsx)(d.th,{children:"date"}),(0,i.jsx)(d.th,{children:"city"}),(0,i.jsx)(d.th,{children:"age"}),(0,i.jsx)(d.th,{children:"sex"}),(0,i.jsx)(d.th,{children:"last_visit_date"}),(0,i.jsx)(d.th,{children:"cost"}),(0,i.jsx)(d.th,{children:"max_dwell_time"}),(0,i.jsx)(d.th,{children:"min_dwell_time"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10000"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 7:00"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"2"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10001"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/1 17:05"}),(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"22"}),(0,i.jsx)(d.td,{children:"22"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10002"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u4E0A\u6D77"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/2 12:59"}),(0,i.jsx)(d.td,{children:"200"}),(0,i.jsx)(d.td,{children:"5"}),(0,i.jsx)(d.td,{children:"5"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10003"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u5E7F\u5DDE"}),(0,i.jsx)(d.td,{children:"32"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/2 11:20"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"11"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 10:00"}),(0,i.jsx)(d.td,{children:"100"}),(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"3"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/3"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/3 10:20"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"6"}),(0,i.jsx)(d.td,{children:"6"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u7528\u6237 10000 \u53EA\u5269\u4E0B\u4E86\u4E00\u884C\u805A\u5408\u540E\u7684\u6570\u636E\u3002\u800C\u5176\u4F59\u7528\u6237\u7684\u6570\u636E\u548C\u539F\u59CB\u6570\u636E\u4FDD\u6301\u4E00\u81F4\u3002\u5BF9\u4E8E\u7528\u6237 10000 \u805A\u5408\u540E\u7684\u6570\u636E\uFF0C\u524D 5 \u5217\u6CA1\u6709\u53D8\u5316\uFF1A"}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"\u7B2C 6 \u5217\u503C\u4E3A 2017-10-01 07:00:00\u3002\u56E0\u4E3A last_visit_date \u5217\u7684\u805A\u5408\u65B9\u5F0F\u4E3A REPLACE\uFF0C\u6240\u4EE5 2017-10-01 07:00:00 \u66FF\u6362\u4E86 2017-10-01 06:00:00 \u4FDD\u5B58\u4E86\u4E0B\u6765\u3002\u6CE8\u610F\uFF1A\u5728\u540C\u4E00\u4E2A\u5BFC\u5165\u6279\u6B21\u4E2D\u7684\u6570\u636E\uFF0C\u5BF9\u4E8E REPLACE \u8FD9\u79CD\u805A\u5408\u65B9\u5F0F\uFF0C\u66FF\u6362\u987A\u5E8F\u4E0D\u505A\u4FDD\u8BC1\uFF0C\u5982\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6700\u7EC8\u4FDD\u5B58\u4E0B\u6765\u7684\uFF0C\u4E5F\u6709\u53EF\u80FD\u662F 2017-10-01 06:00:00\uFF1B\u800C\u5BF9\u4E8E\u4E0D\u540C\u5BFC\u5165\u6279\u6B21\u4E2D\u7684\u6570\u636E\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\uFF0C\u540E\u4E00\u6279\u6B21\u7684\u6570\u636E\u4F1A\u66FF\u6362\u524D\u4E00\u6279\u6B21\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"\u7B2C 7 \u5217\u503C\u4E3A 35\uFF1A\u56E0\u4E3A cost \u5217\u7684\u805A\u5408\u7C7B\u578B\u4E3A SUM\uFF0C\u6240\u4EE5\u7531 20 + 15 \u7D2F\u52A0\u83B7\u5F97 35\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"\u7B2C 8 \u5217\u503C\u4E3A 10\uFF1A\u56E0\u4E3A max_dwell_time \u5217\u7684\u805A\u5408\u7C7B\u578B\u4E3A MAX\uFF0C\u6240\u4EE5 10 \u548C 2 \u53D6\u6700\u5927\u503C\uFF0C\u83B7\u5F97 10\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"\u7B2C 9 \u5217\u503C\u4E3A 2\uFF1A\u56E0\u4E3A min_dwell_time \u5217\u7684\u805A\u5408\u7C7B\u578B\u4E3A MIN\uFF0C\u6240\u4EE5 10 \u548C 2 \u53D6\u6700\u5C0F\u503C\uFF0C\u83B7\u5F97 2\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(d.p,{children:"\u7ECF\u8FC7\u805A\u5408\uFF0CDoris \u4E2D\u6700\u7EC8\u53EA\u4F1A\u5B58\u50A8\u805A\u5408\u540E\u7684\u6570\u636E\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5373\u660E\u7EC6\u6570\u636E\u4F1A\u4E22\u5931\uFF0C\u7528\u6237\u4E0D\u80FD\u591F\u518D\u67E5\u8BE2\u5230\u805A\u5408\u524D\u7684\u660E\u7EC6\u6570\u636E\u4E86\u3002"}),"\n",(0,i.jsx)(d.h2,{id:"\u5BFC\u5165\u6570\u636E\u4E0E\u5DF2\u6709\u6570\u636E\u805A\u5408",children:"\u5BFC\u5165\u6570\u636E\u4E0E\u5DF2\u6709\u6570\u636E\u805A\u5408"}),"\n",(0,i.jsx)(d.p,{children:"\u5047\u8BBE\u73B0\u5728\u8868\u4E2D\u5DF2\u7ECF\u62E5\u6709\u4E86\u524D\u9762\u5BFC\u5165\u7684\u6570\u636E\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"user_id"}),(0,i.jsx)(d.th,{children:"date"}),(0,i.jsx)(d.th,{children:"city"}),(0,i.jsx)(d.th,{children:"age"}),(0,i.jsx)(d.th,{children:"sex"}),(0,i.jsx)(d.th,{children:"last_visit_date"}),(0,i.jsx)(d.th,{children:"cost"}),(0,i.jsx)(d.th,{children:"max_dwell_time"}),(0,i.jsx)(d.th,{children:"min_dwell_time"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10000"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 7:00"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"2"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10001"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/1 17:05"}),(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"22"}),(0,i.jsx)(d.td,{children:"22"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10002"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u4E0A\u6D77"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/2 12:59"}),(0,i.jsx)(d.td,{children:"200"}),(0,i.jsx)(d.td,{children:"5"}),(0,i.jsx)(d.td,{children:"5"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10003"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u5E7F\u5DDE"}),(0,i.jsx)(d.td,{children:"32"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/2 11:20"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"11"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 10:00"}),(0,i.jsx)(d.td,{children:"100"}),(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"3"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/3"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/3 10:20"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"6"}),(0,i.jsx)(d.td,{children:"6"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u518D\u5BFC\u5165\u4E00\u6279\u65B0\u7684\u6570\u636E\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"user_id"}),(0,i.jsx)(d.th,{children:"date"}),(0,i.jsx)(d.th,{children:"city"}),(0,i.jsx)(d.th,{children:"age"}),(0,i.jsx)(d.th,{children:"sex"}),(0,i.jsx)(d.th,{children:"last_visit_date"}),(0,i.jsx)(d.th,{children:"cost"}),(0,i.jsx)(d.th,{children:"max_dwell_time"}),(0,i.jsx)(d.th,{children:"min_dwell_time"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/3"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/3 11:22"}),(0,i.jsx)(d.td,{children:"44"}),(0,i.jsx)(d.td,{children:"19"}),(0,i.jsx)(d.td,{children:"19"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10005"}),(0,i.jsx)(d.td,{children:"2017/10/3"}),(0,i.jsx)(d.td,{children:"\u957F\u6C99"}),(0,i.jsx)(d.td,{children:"29"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/3 18:11"}),(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"1"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u901A\u8FC7 SQL \u5BFC\u5165\u6570\u636E\uFF1A"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:'insert into example_tbl_agg1 values\n(10004,"2017-10-03","\u6DF1\u5733",35,0,"2017-10-03 11:22:00",44,19,19),\n(10005,"2017-10-03","\u957F\u6C99",29,1,"2017-10-03 18:11:02",3,1,1);\n'})}),"\n",(0,i.jsx)(d.p,{children:"\u90A3\u4E48\u5F53\u8FD9\u6279\u6570\u636E\u6B63\u786E\u5BFC\u5165\u5230 Doris \u4E2D\u540E\uFF0CDoris \u4E2D\u6700\u7EC8\u5B58\u50A8\u5982\u4E0B\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(d.table,{children:[(0,i.jsx)(d.thead,{children:(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.th,{children:"user_id"}),(0,i.jsx)(d.th,{children:"date"}),(0,i.jsx)(d.th,{children:"city"}),(0,i.jsx)(d.th,{children:"age"}),(0,i.jsx)(d.th,{children:"sex"}),(0,i.jsx)(d.th,{children:"last_visit_date"}),(0,i.jsx)(d.th,{children:"cost"}),(0,i.jsx)(d.th,{children:"max_dwell_time"}),(0,i.jsx)(d.th,{children:"min_dwell_time"})]})}),(0,i.jsxs)(d.tbody,{children:[(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10000"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 7:00"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"10"}),(0,i.jsx)(d.td,{children:"2"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10001"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u5317\u4EAC"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/1 17:05"}),(0,i.jsx)(d.td,{children:"2"}),(0,i.jsx)(d.td,{children:"22"}),(0,i.jsx)(d.td,{children:"22"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10002"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u4E0A\u6D77"}),(0,i.jsx)(d.td,{children:"20"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/2 12:59"}),(0,i.jsx)(d.td,{children:"200"}),(0,i.jsx)(d.td,{children:"5"}),(0,i.jsx)(d.td,{children:"5"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10003"}),(0,i.jsx)(d.td,{children:"2017/10/2"}),(0,i.jsx)(d.td,{children:"\u5E7F\u5DDE"}),(0,i.jsx)(d.td,{children:"32"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/2 11:20"}),(0,i.jsx)(d.td,{children:"30"}),(0,i.jsx)(d.td,{children:"11"}),(0,i.jsx)(d.td,{children:"11"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/1"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/1 10:00"}),(0,i.jsx)(d.td,{children:"100"}),(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"3"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10004"}),(0,i.jsx)(d.td,{children:"2017/10/3"}),(0,i.jsx)(d.td,{children:"\u6DF1\u5733"}),(0,i.jsx)(d.td,{children:"35"}),(0,i.jsx)(d.td,{children:"0"}),(0,i.jsx)(d.td,{children:"2017/10/3 11:22"}),(0,i.jsx)(d.td,{children:"55"}),(0,i.jsx)(d.td,{children:"19"}),(0,i.jsx)(d.td,{children:"6"})]}),(0,i.jsxs)(d.tr,{children:[(0,i.jsx)(d.td,{children:"10005"}),(0,i.jsx)(d.td,{children:"2017/10/3"}),(0,i.jsx)(d.td,{children:"\u957F\u6C99"}),(0,i.jsx)(d.td,{children:"29"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"2017/10/3 18:11"}),(0,i.jsx)(d.td,{children:"3"}),(0,i.jsx)(d.td,{children:"1"}),(0,i.jsx)(d.td,{children:"1"})]})]})]}),"\n",(0,i.jsx)(d.p,{children:"\u53EF\u4EE5\u770B\u5230\uFF0C\u7528\u6237 10004 \u7684\u5DF2\u6709\u6570\u636E\u548C\u65B0\u5BFC\u5165\u7684\u6570\u636E\u53D1\u751F\u4E86\u805A\u5408\u3002\u540C\u65F6\u65B0\u589E\u4E86 10005 \u7528\u6237\u7684\u6570\u636E\u3002"}),"\n",(0,i.jsx)(d.p,{children:"\u6570\u636E\u7684\u805A\u5408\uFF0C\u5728 Doris \u4E2D\u6709\u5982\u4E0B\u4E09\u4E2A\u9636\u6BB5\u53D1\u751F\uFF1A"}),"\n",(0,i.jsxs)(d.ol,{children:["\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"\u6BCF\u4E00\u6279\u6B21\u6570\u636E\u5BFC\u5165\u7684 ETL \u9636\u6BB5\u3002\u8BE5\u9636\u6BB5\u4F1A\u5728\u6BCF\u4E00\u6279\u6B21\u5BFC\u5165\u7684\u6570\u636E\u5185\u90E8\u8FDB\u884C\u805A\u5408\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"\u5E95\u5C42 BE \u8FDB\u884C\u6570\u636E Compaction \u7684\u9636\u6BB5\u3002\u8BE5\u9636\u6BB5\uFF0CBE \u4F1A\u5BF9\u5DF2\u5BFC\u5165\u7684\u4E0D\u540C\u6279\u6B21\u7684\u6570\u636E\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u805A\u5408\u3002"}),"\n"]}),"\n",(0,i.jsxs)(d.li,{children:["\n",(0,i.jsx)(d.p,{children:"\u6570\u636E\u67E5\u8BE2\u9636\u6BB5\u3002\u5728\u6570\u636E\u67E5\u8BE2\u65F6\uFF0C\u5BF9\u4E8E\u67E5\u8BE2\u6D89\u53CA\u5230\u7684\u6570\u636E\uFF0C\u4F1A\u8FDB\u884C\u5BF9\u5E94\u7684\u805A\u5408\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(d.p,{children:"\u6570\u636E\u5728\u4E0D\u540C\u65F6\u95F4\uFF0C\u53EF\u80FD\u805A\u5408\u7684\u7A0B\u5EA6\u4E0D\u4E00\u81F4\u3002\u6BD4\u5982\u4E00\u6279\u6570\u636E\u521A\u5BFC\u5165\u65F6\uFF0C\u53EF\u80FD\u8FD8\u672A\u4E0E\u4E4B\u524D\u5DF2\u5B58\u5728\u7684\u6570\u636E\u8FDB\u884C\u805A\u5408\u3002\u4F46\u662F\u5BF9\u4E8E\u7528\u6237\u800C\u8A00\uFF0C\u7528\u6237\u53EA\u80FD\u67E5\u8BE2\u5230\u805A\u5408\u540E\u7684\u6570\u636E\u3002\u5373\u4E0D\u540C\u7684\u805A\u5408\u7A0B\u5EA6\u5BF9\u4E8E\u7528\u6237\u67E5\u8BE2\u800C\u8A00\u662F\u900F\u660E\u7684\u3002\u7528\u6237\u9700\u59CB\u7EC8\u8BA4\u4E3A\u6570\u636E\u4EE5\u6700\u7EC8\u7684\u5B8C\u6210\u7684\u805A\u5408\u7A0B\u5EA6\u5B58\u5728\uFF0C\u800C\u4E0D\u5E94\u5047\u8BBE\u67D0\u4E9B\u805A\u5408\u8FD8\u672A\u53D1\u751F\u3002\uFF08\u53EF\u53C2\u9605\u805A\u5408\u6A21\u578B\u7684\u5C40\u9650\u6027\u4E00\u8282\u83B7\u5F97\u66F4\u591A\u8BE6\u60C5\u3002\uFF09"})]})}function j(n={}){let{wrapper:d}={...(0,l.a)(),...n.components};return d?(0,i.jsx)(d,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},250065:function(n,d,e){e.d(d,{Z:function(){return r},a:function(){return t}});var s=e(667294);let i={},l=s.createContext(i);function t(n){let d=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(d):{...d,...n}},[d,n])}function r(n){let d;return d=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(l.Provider,{value:d},n.children)}}}]);