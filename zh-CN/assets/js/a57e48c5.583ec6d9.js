"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["734080"],{120689:function(n,e,s){s.r(e),s.d(e,{metadata:()=>i,contentTitle:()=>t,default:()=>h,assets:()=>c,toc:()=>x,frontMatter:()=>l});var i=JSON.parse('{"id":"query-data/mysql-compatibility","title":"MySQL \u517C\u5BB9\u6027","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-data/mysql-compatibility.md","sourceDirName":"query-data","slug":"/query-data/mysql-compatibility","permalink":"/zh-CN/docs/query-data/mysql-compatibility","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"MySQL \u517C\u5BB9\u6027","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4E8B\u52A1","permalink":"/zh-CN/docs/data-operate/transaction"},"next":{"title":"\u8FDE\u63A5\uFF08JOIN\uFF09","permalink":"/zh-CN/docs/query-data/join"}}'),r=s("785893"),d=s("250065");let l={title:"MySQL \u517C\u5BB9\u6027",language:"zh-CN"},t=void 0,c={},x=[{value:"\u6570\u636E\u7C7B\u578B",id:"\u6570\u636E\u7C7B\u578B",level:2},{value:"\u6570\u5B57\u7C7B\u578B",id:"\u6570\u5B57\u7C7B\u578B",level:3},{value:"\u65E5\u671F\u7C7B\u578B",id:"\u65E5\u671F\u7C7B\u578B",level:3},{value:"\u5B57\u7B26\u4E32\u7C7B\u578B",id:"\u5B57\u7B26\u4E32\u7C7B\u578B",level:3},{value:"JSON \u6570\u636E\u7C7B\u578B",id:"json-\u6570\u636E\u7C7B\u578B",level:3},{value:"Doris \u7279\u6709\u7684\u6570\u636E\u7C7B\u578B",id:"doris-\u7279\u6709\u7684\u6570\u636E\u7C7B\u578B",level:3},{value:"\u8BED\u6CD5\u533A\u522B",id:"\u8BED\u6CD5\u533A\u522B",level:2},{value:"DDL",id:"ddl",level:3},{value:"DROP TABLE / DROP INDEX",id:"drop-table--drop-index",level:3},{value:"DML",id:"dml",level:3},{value:"SQL Function",id:"sql-function",level:2}];function j(n){let e={a:"a",br:"br",code:"code",div:"div",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"Doris \u662F\u9AD8\u5EA6\u517C\u5BB9 MySQL \u8BED\u6CD5\uFF0C\u652F\u6301\u6807\u51C6 SQL\u3002\u4F46\u662F Doris \u4E0E MySQL \u8FD8\u662F\u6709\u5F88\u591A\u4E0D\u540C\u7684\u5730\u65B9\uFF0C\u4E0B\u9762\u7ED9\u51FA\u4E86\u4ED6\u4EEC\u7684\u5DEE\u5F02\u70B9\u4ECB\u7ECD\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6570\u636E\u7C7B\u578B",children:"\u6570\u636E\u7C7B\u578B"}),"\n",(0,r.jsx)(e.h3,{id:"\u6570\u5B57\u7C7B\u578B",children:"\u6570\u5B57\u7C7B\u578B"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(e.th,{children:"MySQL"}),(0,r.jsx)(e.th,{children:"Doris"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Boolean"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A0 \u4EE3\u8868 false\uFF0C1 \u4EE3\u8868 true"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301",(0,r.jsx)(e.br,{}),"- \u5173\u952E\u5B57\uFF1ABoolean ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A0 \u4EE3\u8868 false\uFF0C1 \u4EE3\u8868 true"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bit"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A1 ~ 64"]}),(0,r.jsx)(e.td,{children:"\u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Tinyint"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u652F\u6301 signed,unsigned ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1Asigned \u7684\u8303\u56F4\u662F -128 ~ 127\uFF0Cunsigned \u7684\u8303\u56F4\u662F 0 ~ 255"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u53EA\u652F\u6301 signed ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A-128 ~ 127"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Smallint"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u652F\u6301 signed,unsigned ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1Asigned \u7684\u8303\u56F4\u662F -2^15 ~ 2^15-1\uFF0Cunsigned \u7684\u8303\u56F4\u662F 0 ~ 2^16-1"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u53EA\u652F\u6301 signed ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A-32768 ~ 32767"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Mediumint"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u652F\u6301 signed,unsigned ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1Asigned \u7684\u8303\u56F4\u662F -2^23 ~ 2^23-1\uFF0Cunsigned \u7684\u8303\u56F4\u662F 0 ~ -2^24-1"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"int"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u652F\u6301 signed,unsigned ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1Asigned \u7684\u8303\u56F4\u662F -2^31 ~ 2^31-1\uFF0Cunsigned \u7684\u8303\u56F4\u662F 0 ~ -2^32-1"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u53EA\u652F\u6301 signed ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A -2147483648~ 2147483647"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Bigint"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u652F\u6301 signed,unsigned ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1Asigned \u7684\u8303\u56F4\u662F -2^63 ~ 2^63-1\uFF0Cunsigned \u7684\u8303\u56F4\u662F 0 ~ 2^64-1"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u53EA\u652F\u6301 signed ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A -2^63 ~ 2^63-1"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Largeint"}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u53EA\u652F\u6301 signed ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A-2^127 ~ 2^127-1"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Decimal"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u652F\u6301 signed,unsigned\uFF088.0.17 \u4EE5\u524D\u652F\u6301\uFF0C\u8BE5\u7248\u672C\u4EE5\u4E0A\u6807\u8BB0\u4E3A deprecated\uFF09",(0,r.jsx)(e.br,{}),"- \u9ED8\u8BA4\u503C\uFF1ADecimal(10, 0)"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u53EA\u652F\u6301 signed ",(0,r.jsx)(e.br,{}),"- \u9ED8\u8BA4\u503C\uFF1ADecimal(9, 0)"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Float/Double"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u652F\u6301 signed,unsigned\uFF088.0.17 \u4EE5\u524D\u652F\u6301\uFF0C\u8BE5\u7248\u672C\u4EE5\u4E0A\u6807\u8BB0\u4E3A deprecated\uFF09"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u53EA\u652F\u6301 signed"]})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u65E5\u671F\u7C7B\u578B",children:"\u65E5\u671F\u7C7B\u578B"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(e.th,{children:"MySQL"}),(0,r.jsx)(e.th,{children:"Doris"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Date"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A['1000-01-01','9999-12-31'] ",(0,r.jsx)(e.br,{}),"- \u683C\u5F0F\uFF1AYYYY-MM-DD"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A['0000-01-01', '9999-12-31'] ",(0,r.jsx)(e.br,{}),"- \u683C\u5F0F\uFF1AYYYY-MM-DD"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"DateTime"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- DATETIME([P])\uFF0C\u53EF\u9009\u53C2\u6570 P \u8868\u793A\u7CBE\u5EA6 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A'1000-01-01 00:00:00.000000' ,'9999-12-31 23:59:59.999999' ",(0,r.jsx)(e.br,{}),"- \u683C\u5F0F\uFF1AYYYY-MM-DD hh:mm",(0,r.jsx)(e.div,{children:".fraction"})]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- DATETIME([P])\uFF0C\u53EF\u9009\u53C2\u6570 P \u8868\u793A\u7CBE\u5EA6 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A['0000-01-01 00:00:00[.000000]', '9999-12-31 23:59:59[.999999]'] ",(0,r.jsx)(e.br,{}),"- \u683C\u5F0F\uFF1AYYYY-MM-DD hh:mm",(0,r.jsx)(e.div,{children:".fraction"})]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Timestamp"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- Timestamp[(p)]\uFF0C\u53EF\u9009\u53C2\u6570 P \u8868\u793A\u7CBE\u5EA6 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A['1970-01-01 00:00:01.000000' UTC , '2038-01-19 03:14:07.999999' UTC] ",(0,r.jsx)(e.br,{}),"- \u683C\u5F0F\uFF1AYYYY-MM-DD hh:mm",(0,r.jsx)(e.div,{children:".fraction"})]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Time"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- Time[(p)] ",(0,r.jsx)(e.br,{})," - \u8303\u56F4\uFF1A['-838:59:59.000000' to '838:59:59.000000'] ",(0,r.jsx)(e.br,{}),"- \u683C\u5F0F\uFF1Ahh:mm",(0,r.jsx)(e.div,{children:".fraction"})]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Year"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A1901 to 2155, or 0000 ",(0,r.jsx)(e.br,{}),"- \u683C\u5F0F\uFF1Ayyyy"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"\u5B57\u7B26\u4E32\u7C7B\u578B",children:"\u5B57\u7B26\u4E32\u7C7B\u578B"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(e.th,{children:"MySQL"}),(0,r.jsx)(e.th,{children:"Doris"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Char"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- CHAR(M)\uFF0CM \u4E3A\u5B57\u7B26\u957F\u5EA6\uFF0C\u7F3A\u7701\u8868\u793A\u957F\u5EA6\u4E3A 1 ",(0,r.jsx)(e.br,{}),"- \u5B9A\u957F ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A[0,255]\uFF0C\u5B57\u8282\u5927\u5C0F"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- CHAR(M)\uFF0CM \u4E3A\u5B57\u8282\u957F\u5EA6 ",(0,r.jsx)(e.br,{}),"- \u53EF\u53D8 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A[1,255]"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Varchar"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- VARCHAR(M)\uFF0CM \u4E3A\u5B57\u7B26\u957F\u5EA6 ",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A[0,65535]\uFF0C\u5B57\u8282\u5927\u5C0F"]}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- VARCHAR(M)\uFF0CM \u4E3A\u5B57\u8282\u957F\u5EA6\u3002",(0,r.jsx)(e.br,{}),"- \u8303\u56F4\uFF1A[1, 65533]"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"String"}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- 1048576 \u5B57\u8282\uFF081MB\uFF09\uFF0C\u53EF\u8C03\u5927\u5230 2147483643 \u5B57\u8282\uFF082G\uFF09"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Binary"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u7C7B\u4F3C\u4E8E Char"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Varbinary"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u7C7B\u4F3C\u4E8E Varchar"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Blob"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- TinyBlob\u3001Blob\u3001MediumBlob\u3001LongBlob"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Text"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- TinyText\u3001Text\u3001MediumText\u3001LongText"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Enum"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u6700\u591A\u652F\u6301 65535 \u4E2A elements"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"Set"}),(0,r.jsxs)(e.td,{children:["- \u652F\u6301 ",(0,r.jsx)(e.br,{}),"- \u6700\u591A\u652F\u6301 64 \u4E2A elements"]}),(0,r.jsx)(e.td,{children:"- \u4E0D\u652F\u6301"})]})]})]}),"\n",(0,r.jsx)(e.h3,{id:"json-\u6570\u636E\u7C7B\u578B",children:"JSON \u6570\u636E\u7C7B\u578B"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u7C7B\u578B"}),(0,r.jsx)(e.th,{children:"MySQL"}),(0,r.jsx)(e.th,{children:"Doris"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"JSON"}),(0,r.jsx)(e.td,{children:"\u652F\u6301"}),(0,r.jsx)(e.td,{children:"\u652F\u6301"})]})})]}),"\n",(0,r.jsx)(e.h3,{id:"doris-\u7279\u6709\u7684\u6570\u636E\u7C7B\u578B",children:"Doris \u7279\u6709\u7684\u6570\u636E\u7C7B\u578B"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"HyperLogLog"})}),"\n",(0,r.jsx)(e.p,{children:"HLL \u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\uFF0C\u652F\u6301\u5728 Aggregate \u6A21\u578B\u3001Duplicate \u6A21\u578B\u548C Unique \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002\u5728 Aggregate \u6A21\u578B\u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5EFA\u8868\u65F6\u914D\u5408\u7684\u805A\u5408\u7C7B\u578B\u4E3A HLL_UNION\u3002\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u957F\u5EA6\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236\u3002\u5E76\u4E14 HLL \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 HLL_UNION_AGG\u3001HLL_RAW_AGG\u3001HLL_CARDINALITY\u3001HLL_HASH \u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"HLL \u662F\u6A21\u7CCA\u53BB\u91CD\uFF0C\u5728\u5904\u7406\u5927\u6570\u636E\u91CF\u65F6\uFF0C\u5176\u6027\u80FD\u4F18\u4E8E Count Distinct\u3002HLL \u7684\u8BEF\u5DEE\u7387\u901A\u5E38\u5728 1% \u5DE6\u53F3\uFF0C\u6709\u65F6\u53EF\u80FD\u4F1A\u8FBE\u5230 2%\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"BITMAP"})}),"\n",(0,r.jsx)(e.p,{children:"BITMAP \u7C7B\u578B\u7684\u5217\u53EF\u4EE5\u5728 Aggregate \u8868\u3001Unique \u8868\u6216 Duplicate \u8868\u4E2D\u4F7F\u7528\uFF0C\u4F46\u5FC5\u987B\u4F5C\u4E3A\u975E Key \u5217\u3002\u5728 Unique \u8868\u6216 Duplicate \u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u540C\u6837\u9700\u9075\u5FAA\u6B64\u89C4\u5219\u3002\u5728 Aggregate \u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u8FD8\u9700\u914D\u5408 BITMAP_UNION \u805A\u5408\u7C7B\u578B\u3002\u7528\u6237\u65E0\u9700\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\uFF0C\u957F\u5EA6\u4F1A\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7531\u7CFB\u7EDF\u5185\u90E8\u63A7\u5236\u3002\u5E76\u4E14\uFF0CBITMAP \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 BITMAP_UNION_COUNT\u3001BITMAP_UNION\u3001BITMAP_HASH\u3001BITMAP_HASH64 \u7B49\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u79BB\u7EBF\u573A\u666F\u4E0B\u4F7F\u7528 BITMAP \u53EF\u80FD\u4F1A\u5F71\u54CD\u5BFC\u5165\u901F\u5EA6\uFF0C\u5728\u6570\u636E\u91CF\u5927\u7684\u60C5\u51B5\u4E0B\uFF0C\u5176\u67E5\u8BE2\u901F\u5EA6\u4F1A\u6162\u4E8E HLL\uFF0C\u4F46\u4F18\u4E8E Count Distinct\u3002\u6CE8\u610F\uFF1A\u5728\u5B9E\u65F6\u573A\u666F\u4E0B\uFF0C\u5982\u679C BITMAP \u4E0D\u4F7F\u7528\u5168\u5C40\u5B57\u5178\uFF0C\u800C\u4F7F\u7528\u4E86 BITMAP_HASH()\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7EA6\u5343\u5206\u4E4B\u4E00\u7684\u8BEF\u5DEE\u3002\u5982\u679C\u6B64\u8BEF\u5DEE\u4E0D\u53EF\u63A5\u53D7\uFF0C\u53EF\u4EE5\u4F7F\u7528 BITMAP_HASH64\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"QUANTILE_PERCENT\uFF08QUANTILE_STATE\uFF09"})}),"\n",(0,r.jsx)(e.p,{children:"QUANTILE_STATE \u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\uFF0C\u652F\u6301\u5728 Aggregate \u6A21\u578B\u3001Duplicate \u6A21\u578B\u548C Unique \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002\u5728 Aggregate \u6A21\u578B\u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5EFA\u8868\u65F6\u914D\u5408\u7684\u805A\u5408\u7C7B\u578B\u4E3A QUANTILE_UNION\u3002\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u957F\u5EA6\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236\u3002\u5E76\u4E14 QUANTILE_STATE \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE \u7B49\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["QUANTILE_STATE \u662F\u4E00\u79CD\u8BA1\u7B97\u5206\u4F4D\u6570\u8FD1\u4F3C\u503C\u7684\u7C7B\u578B\uFF0C\u5728\u5BFC\u5165\u65F6\u4F1A\u5BF9\u76F8\u540C\u7684 Key\uFF0C\u4E0D\u540C Value \u8FDB\u884C\u9884\u805A\u5408\uFF0C\u5F53 Value \u6570\u91CF\u4E0D\u8D85\u8FC7 2048 \u65F6\uFF0C\u4F1A\u91C7\u7528\u660E\u7EC6\u8BB0\u5F55\u6240\u6709\u6570\u636E\uFF0C\u5F53 Value \u6570\u91CF\u5927\u4E8E 2048 \u65F6\u91C7\u7528 ",(0,r.jsx)(e.a,{href:"https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf",children:"TDigest"})," \u7B97\u6CD5\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u805A\u5408\uFF08\u805A\u7C7B\uFF09\uFF0C\u5E76\u4FDD\u5B58\u805A\u7C7B\u540E\u7684\u8D28\u5FC3\u70B9\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Array<T>"})}),"\n",(0,r.jsx)(e.p,{children:"Array \u7531 T \u7C7B\u578B\u5143\u7D20\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\u3002\u76EE\u524D\u652F\u6301\u5728 Duplicate \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\uFF0C\u4E5F\u652F\u6301\u5728 Unique \u6A21\u578B\u7684\u8868\u4E2D\u975E Key \u5217\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"T \u7C7B\u578B\u5305\u62EC\uFF1ABOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE, DATETIME,CHAR, VARCHAR, STRING"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"MAP<K, V>"})}),"\n",(0,r.jsx)(e.p,{children:"Map \u662F\u7531 K, V \u7C7B\u578B\u5143\u7D20\u7EC4\u6210\u7684\u6620\u5C04\u8868\uFF0C\u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\u3002\u76EE\u524D\u652F\u6301\u5728 Duplicate\uFF0CUnique \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"K,V \u652F\u6301\u7684\u7C7B\u578B\u5305\u62EC\uFF1ABOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE, DATETIME,  CHAR, VARCHAR, STRING"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"STRUCT<field_name:field_type, ... >"})}),"\n",(0,r.jsx)(e.p,{children:"Struct \u7531\u591A\u4E2A Field \u7EC4\u6210\u7684\u7ED3\u6784\u4F53\uFF0C\u4E5F\u53EF\u88AB\u7406\u89E3\u4E3A\u591A\u4E2A\u5217\u7684\u96C6\u5408\u3002\u4E0D\u80FD\u4F5C\u4E3A Key \u4F7F\u7528\uFF0C\u76EE\u524D Struct \u4EC5\u652F\u6301\u5728 Duplicate \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4E00\u4E2A Struct \u4E2D\u7684 Field \u7684\u540D\u5B57\u548C\u6570\u91CF\u56FA\u5B9A\uFF0C\u4E14\u603B\u662F\u4E3A Nullable\uFF0C\u4E00\u4E2A Field \u901A\u5E38\u7531\u4E0B\u9762\u90E8\u5206\u7EC4\u6210\uFF1A"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"field_name: Field \u7684\u6807\u8BC6\u7B26\uFF0C\u4E0D\u53EF\u91CD\u590D"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"field_type: Field \u7684\u7C7B\u578B"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5F53\u524D\u53EF\u652F\u6301\u7684\u7C7B\u578B\u5305\u62EC\uFF1ABOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DATE, DATETIME, CHAR, VARCHAR, STRING"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"Agg_State"})}),"\n",(0,r.jsx)(e.p,{children:"AGG_STATE \u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528\uFF0C\u5EFA\u8868\u65F6\u9700\u8981\u540C\u65F6\u58F0\u660E\u805A\u5408\u51FD\u6570\u7684\u7B7E\u540D\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u5B9E\u9645\u5B58\u50A8\u7684\u6570\u636E\u5927\u5C0F\u4E0E\u51FD\u6570\u5B9E\u73B0\u6709\u5173\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["AGG_STATE \u53EA\u80FD\u914D\u5408",(0,r.jsx)(e.a,{href:"../sql-manual/sql-functions/combinators/state",children:"STATE"})," / ",(0,r.jsx)(e.a,{href:"../sql-manual/sql-functions/combinators/merge",children:"MERGE"})," / ",(0,r.jsx)(e.a,{href:"../sql-manual/sql-functions/combinators/union",children:"UNION"}),"\u51FD\u6570\u7EC4\u5408\u5668\u4F7F\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u8BED\u6CD5\u533A\u522B",children:"\u8BED\u6CD5\u533A\u522B"}),"\n",(0,r.jsx)(e.h3,{id:"ddl",children:"DDL"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1 CREATE TABLE"})}),"\n",(0,r.jsx)(e.p,{children:"Doris \u5EFA\u8868\u8BED\u6CD5\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE [IF NOT EXISTS] [database.]table\n(\n    column_definition_list\n    [, index_definition_list]\n)\n[engine_type]\n[keys_type]\n[table_comment]\n[partition_info]\ndistribution_desc\n[rollup_list]\n[properties]\n[extra_properties]\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4E0E MySQL \u7684\u4E0D\u540C\u4E4B\u5904\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u53C2\u6570"}),(0,r.jsx)(e.th,{children:"\u4E0E MySQL \u4E0D\u540C\u4E4B\u5904"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"column_definition_list"}),(0,r.jsxs)(e.td,{children:["- \u5B57\u6BB5\u5217\u8868\u5B9A\u4E49\uFF0C\u5176\u57FA\u672C\u8BED\u6CD5\u4E0E MySQL \u7C7B\u4F3C\uFF0C\u4F46\u4F1A\u989D\u5916\u5305\u542B\u4E00\u4E2A\u805A\u5408\u7C7B\u578B\u7684\u64CD\u4F5C\u3002",(0,r.jsx)(e.br,{}),"- \u8BE5\u805A\u5408\u7C7B\u578B\u7684\u64CD\u4F5C\uFF0C\u4E3B\u8981\u652F\u6301\u7684\u6570\u636E\u6A21\u578B\u4E3A Aggregate Key\u3002",(0,r.jsx)(e.br,{}),"- \u5728\u521B\u5EFA\u8868\u65F6\uFF0CMySQL \u5141\u8BB8\u5728\u5B57\u6BB5\u5217\u8868\u5B9A\u4E49\u540E\u6DFB\u52A0 Index \u7B49\u7EA6\u675F\uFF0C\u5982 Primary Key\u3001Unique Key \u7B49\uFF1B\u800C Doris \u5219\u662F\u901A\u8FC7\u5B9A\u4E49\u6570\u636E\u6A21\u578B\u6765\u5B9E\u73B0\u5BF9\u8FD9\u4E9B\u7EA6\u675F\u548C\u8BA1\u7B97\u7684\u652F\u6301\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"index_definition_list"}),(0,r.jsxs)(e.td,{children:["- \u7D22\u5F15\u5217\u8868\u5B9A\u4E49\uFF0C\u57FA\u672C\u8BED\u6CD5\u4E0E MySQL \u7C7B\u4F3C\uFF0C\u652F\u6301\u4F4D\u56FE\u7D22\u5F15\u3001\u5012\u6392\u7D22\u5F15\u548C N-Gram \u7D22\u5F15\uFF0C\u4F46\u662F\u5E03\u9686\u8FC7\u6EE4\u5668\u7D22\u5F15\u662F\u901A\u8FC7\u5C5E\u6027\u8BBE\u7F6E\u3002",(0,r.jsx)(e.br,{}),"- \u800C MySQL \u652F\u6301\u7684 index \u6709 B+Tree\uFF0CHash\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"engine_type"}),(0,r.jsxs)(e.td,{children:["- \u8868\u5F15\u64CE\u7C7B\u578B\uFF0C\u53EF\u9009\u3002",(0,r.jsx)(e.br,{}),"- \u76EE\u524D\u652F\u6301\u7684\u8868\u5F15\u64CE\u4E3B\u8981\u662F OLAP \u539F\u751F\u5F15\u64CE\u3002",(0,r.jsx)(e.br,{}),"- MySQL \u652F\u6301\u7684\u5B58\u50A8\u5F15\u64CE\u6709\uFF1AInnodb\uFF0CMyISAM \u7B49"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"keys_type"}),(0,r.jsxs)(e.td,{children:["- \u6570\u636E\u6A21\u578B\uFF0C\u53EF\u9009\u3002",(0,r.jsx)(e.br,{}),"- \u652F\u6301\u7684\u7C7B\u578B\u5305\u62EC\uFF1A1\uFF09DUPLICATE KEY\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u5176\u540E\u6307\u5B9A\u7684\u5217\u4E3A\u6392\u5E8F\u5217\u30022\uFF09AGGREGATE KEY\uFF1A\u5176\u540E\u6307\u5B9A\u7684\u5217\u4E3A\u7EF4\u5EA6\u5217\u30023\uFF09UNIQUE KEY\uFF1A\u5176\u540E\u6307\u5B9A\u7684\u5217\u4E3A\u4E3B\u952E\u5217\u3002",(0,r.jsx)(e.br,{}),"- MySQL \u5219\u6CA1\u6709\u6570\u636E\u6A21\u578B\u7684\u6982\u5FF5\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"table_comment"}),(0,r.jsx)(e.td,{children:"\u8868\u6CE8\u91CA"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"partition_info"}),(0,r.jsxs)(e.td,{children:["- \u5206\u533A\u7B97\u6CD5\uFF0C\u53EF\u9009\u3002\u652F\u6301\u7684\u5206\u533A\u7B97\u6CD5\uFF0C\u5305\u62EC\uFF1A",(0,r.jsx)(e.br,{})," LESS THAN\uFF1A\u4EC5\u5B9A\u4E49\u5206\u533A\u4E0A\u754C\u3002\u4E0B\u754C\u7531\u4E0A\u4E00\u4E2A\u5206\u533A\u7684\u4E0A\u754C\u51B3\u5B9A\u3002FIXED RANGE\uFF1A\u5B9A\u4E49\u5206\u533A\u7684\u5DE6\u95ED\u53F3\u5F00\u533A\u95F4\u3002",(0,r.jsx)(e.br,{}),"- MULTI RANGE\uFF1A\u6279\u91CF\u521B\u5EFA RANGE \u5206\u533A\uFF0C\u5B9A\u4E49\u5206\u533A\u7684\u5DE6\u95ED\u53F3\u5F00\u533A\u95F4\uFF0C\u8BBE\u5B9A\u65F6\u95F4\u5355\u4F4D\u548C\u6B65\u957F\uFF0C\u65F6\u95F4\u5355\u4F4D\u652F\u6301\u5E74\u3001\u6708\u3001\u65E5\u3001\u5468\u548C\u5C0F\u65F6\u3002",(0,r.jsx)(e.br,{})," MULTI RANGE\uFF1A\u6279\u91CF\u521B\u5EFA\u6570\u5B57\u7C7B\u578B\u7684 RANGE \u5206\u533A\uFF0C\u5B9A\u4E49\u5206\u533A\u7684\u5DE6\u95ED\u53F3\u5F00\u533A\u95F4\uFF0C\u8BBE\u5B9A\u6B65\u957F\u3002",(0,r.jsx)(e.br,{}),"- MySQL \u652F\u6301\u7684\u7B97\u6CD5\uFF1AHash\uFF0CRange\uFF0CList\uFF0C\u5E76\u4E14\u8FD8\u652F\u6301\u5B50\u5206\u533A\uFF0C\u5B50\u5206\u533A\u652F\u6301\u7684\u7B97\u6CD5\u53EA\u6709 Hash\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"distribution_desc"}),(0,r.jsxs)(e.td,{children:["- \u5206\u6876\u7B97\u6CD5\uFF0C\u5FC5\u9009\uFF0C\u5305\u62EC\uFF1A1\uFF09Hash \u5206\u6876\u8BED\u6CD5\uFF1ADISTRIBUTED BY HASH (k1[,k2 ...]) [BUCKETS num|auto] \u8BF4\u660E\uFF1A\u4F7F\u7528\u6307\u5B9A\u7684 key \u5217\u8FDB\u884C\u54C8\u5E0C\u5206\u6876\u30022\uFF09Random \u5206\u6876\u8BED\u6CD5\uFF1ADISTRIBUTED BY RANDOM [BUCKETS num|auto] \u8BF4\u660E\uFF1A\u4F7F\u7528\u968F\u673A\u6570\u8FDB\u884C\u5206\u6876\u3002",(0,r.jsx)(e.br,{}),"- MySQL \u6CA1\u6709\u5206\u6876\u7B97\u6CD5\u3002"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"rollup_list"}),(0,r.jsxs)(e.td,{children:["- \u5EFA\u8868\u7684\u540C\u65F6\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u7269\u5316\u89C6\u56FE\u3002 ",(0,r.jsx)(e.br,{}),"- \u8BED\u6CD5\uFF1A",(0,r.jsx)(e.code,{children:'rollup_name (col1[, col2, ...]) [DUPLICATE KEY(col1[, col2, ...])][PROPERTIES("key" = "value")]'})," ",(0,r.jsx)(e.br,{}),"- MySQL \u4E0D\u652F\u6301"]})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"properties"}),(0,r.jsx)(e.td,{children:"\u8868\u5C5E\u6027\uFF0C\u4E0E MySQL \u7684\u8868\u5C5E\u6027\u4E0D\u4E00\u81F4\uFF0C\u5B9A\u4E49\u8868\u5C5E\u6027\u7684\u8BED\u6CD5\u4E5F\u4E0E MySQL \u4E0D\u4E00\u81F4"})]})]})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2 CREATE INDEX"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"CREATE INDEX [IF NOT EXISTS] index_name ON table_name (column [, ...],) [USING BITMAP];\n"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u76EE\u524D\u652F\u6301\uFF1A\u4F4D\u56FE\u7D22\u5F15\u3001\u5012\u6392\u7D22\u5F15\u548C N-Gram \u7D22\u5F15\uFF0C\u5E03\u9686\u8FC7\u6EE4\u5668\u7D22\u5F15\uFF08\u5355\u72EC\u7684\u8BED\u6CD5\u8BBE\u7F6E\uFF09"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"MySQL \u652F\u6301\u7684\u7D22\u5F15\u7B97\u6CD5\u6709\uFF1AB+Tree\uFF0CHash"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"3 CREATE VIEW"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n\nCREATE MATERIALIZED VIEW (IF NOT EXISTS)? mvName=multipartIdentifier\n        (LEFT_PAREN cols=simpleColumnDefs RIGHT_PAREN)? buildMode?\n        (REFRESH refreshMethod? refreshTrigger?)?\n        (KEY keys=identifierList)?\n        (COMMENT STRING_LITERAL)?\n        (PARTITION BY LEFT_PAREN partitionKey = identifier RIGHT_PAREN)?\n        (DISTRIBUTED BY (HASH hashKeys=identifierList | RANDOM) (BUCKETS (INTEGER_VALUE | AUTO))?)?\n        propertyClause?\n        AS query\n'})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u57FA\u672C\u8BED\u6CD5\u4E0E MySQL \u4E00\u81F4"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Doris \u652F\u6301\u4E24\u79CD\u7269\u5316\u89C6\u56FE\uFF0C\u540C\u6B65\u7269\u5316\u89C6\u56FE\u548C\u5F02\u6B65\u7269\u5316\u89C6\u56FE\uFF08\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u4ECE v2.1 \u5F00\u59CB\u652F\u6301\uFF09\u3002Doris \u7684\u5F02\u6B65\u7269\u5316\u89C6\u56FE\u66F4\u52A0\u5F3A\u5927\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"MySQL \u4EC5\u652F\u6301\u5F02\u6B65\u7269\u5316\u89C6\u56FE"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"4 ALTER TABLE / ALTER INDEX"})}),"\n",(0,r.jsx)(e.p,{children:"Doris Alter \u7684\u8BED\u6CD5\u4E0E MySQL \u7684\u57FA\u672C\u4E00\u81F4\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"drop-table--drop-index",children:"DROP TABLE / DROP INDEX"}),"\n",(0,r.jsx)(e.p,{children:"Doris Drop \u7684\u8BED\u6CD5\u4E0E MySQL \u7684\u57FA\u672C\u4E00\u81F4"}),"\n",(0,r.jsx)(e.h3,{id:"dml",children:"DML"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"1 INSERT"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"INSERT INTO table_name\n    [ PARTITION (p1, ...) ]\n    [ WITH LABEL label]\n    [ (column [, ...]) ]\n    [ [ hint [, ...] ] ]\n    { VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }\n"})}),"\n",(0,r.jsx)(e.p,{children:"Doris Insert \u8BED\u6CD5\u4E0E MySQL \u7684\u57FA\u672C\u4E00\u81F4\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"2 UPDATE"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"UPDATE target_table [table_alias]\n    SET assignment_list\n    WHERE condition\n\nassignment_list:\n    assignment [, assignment] ...\n\nassignment:\n    col_name = value\n\nvalue:\n    {expr | DEFAULT}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Doris Update \u8BED\u6CD5\u4E0E MySQL \u57FA\u672C\u4E00\u81F4\uFF0C\u4F46\u9700\u8981\u6CE8\u610F\u7684\u662F",(0,r.jsx)(e.strong,{children:"\u5FC5\u987B\u52A0\u4E0A WHERE \u6761\u4EF6\u3002"})]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"3 DELETE"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias] \n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    WHERE column_name op { value | value_list } [ AND column_name op { value | value_list } ...];\n"})}),"\n",(0,r.jsx)(e.p,{children:"Doris \u8BE5\u8BED\u6CD5\u53EA\u80FD\u6307\u5B9A\u8FC7\u6EE4\u8C13\u8BCD"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"DELETE FROM table_name [table_alias]\n    [PARTITION partition_name | PARTITIONS (partition_name [, partition_name])]\n    [USING additional_tables]\n    WHERE condition\n"})}),"\n",(0,r.jsx)(e.p,{children:"Doris \u8BE5\u8BED\u6CD5\u53EA\u80FD\u5728 UNique Key \u6A21\u578B\u8868\u4E0A\u4F7F\u7528\u3002"}),"\n",(0,r.jsx)(e.p,{children:"Doris Delete \u8BED\u6CD5\u4E0E MySQL \u57FA\u672C\u4E00\u81F4\u3002\u4F46\u662F\u7531\u4E8E Doris \u662F\u4E00\u4E2A\u5206\u6790\u6570\u636E\u5E93\uFF0C\u6240\u4EE5\u5220\u9664\u4E0D\u80FD\u8FC7\u4E8E\u9891\u7E41\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"4 SELECT"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"SELECT\n    [hint_statement, ...]\n    [ALL | DISTINCT]\n    select_expr [, select_expr ...]\n    [EXCEPT ( col_name1 [, col_name2, col_name3, ...] )]\n    [FROM table_references\n      [PARTITION partition_list]\n      [TABLET tabletid_list]\n      [TABLESAMPLE sample_value [ROWS | PERCENT]\n        [REPEATABLE pos_seek]]\n    [WHERE where_condition]\n    [GROUP BY [GROUPING SETS | ROLLUP | CUBE] {col_name | expr | position}]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position} [ASC | DESC], ...]\n    [LIMIT {[offset_count,] row_count | row_count OFFSET offset_count}]\n    [INTO OUTFILE 'file_name']\n"})}),"\n",(0,r.jsx)(e.p,{children:"Doris Select \u8BED\u6CD5\u4E0E MySQL \u57FA\u672C\u4E00\u81F4"}),"\n",(0,r.jsx)(e.h2,{id:"sql-function",children:"SQL Function"}),"\n",(0,r.jsx)(e.p,{children:"Doris Function \u57FA\u672C\u8986\u76D6\u7EDD\u5927\u90E8\u5206 MySQL Function\u3002"})]})}function h(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return t},a:function(){return l}});var i=s(667294);let r={},d=i.createContext(r);function l(n){let e=i.useContext(d);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),i.createElement(d.Provider,{value:e},n.children)}}}]);