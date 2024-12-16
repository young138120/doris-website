"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["949298"],{12472:function(n,e,i){i.r(e),i.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>o,assets:()=>s,toc:()=>c,frontMatter:()=>u});var r=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/running-difference","title":"RUNNING_DIFFERENCE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/numeric-functions/running-difference.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/running-difference","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/running-difference","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"RUNNING_DIFFERENCE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MOD","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/mod"},"next":{"title":"uuid_numeric","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/numeric-functions/uuid-numeric"}}'),t=i("785893"),d=i("250065");let u={title:"RUNNING_DIFFERENCE",language:"zh-CN"},l=void 0,s={},c=[{value:"running_difference",id:"running_difference",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"running_difference",children:"running_difference"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"T running_difference(T x)"}),"\n\u8BA1\u7B97\u6570\u636E\u5757\u4E2D\u8FDE\u7EED\u884C\u503C\u7684\u5DEE\u503C\u3002\u8BE5\u51FD\u6570\u7684\u7ED3\u679C\u53D6\u51B3\u4E8E\u53D7\u5F71\u54CD\u7684\u6570\u636E\u5757\u548C\u5757\u4E2D\u6570\u636E\u7684\u987A\u5E8F\u3002"]}),"\n",(0,t.jsxs)(e.p,{children:["\u8BA1\u7B97 running_difference \u671F\u95F4\u4F7F\u7528\u7684\u884C\u987A\u5E8F\u53EF\u80FD\u4E0E\u8FD4\u56DE\u7ED9\u7528\u6237\u7684\u884C\u987A\u5E8F\u4E0D\u540C\u3002\u6240\u4EE5\u7ED3\u679C\u662F\u4E0D\u7A33\u5B9A\u7684\u3002",(0,t.jsx)(e.strong,{children:"\u6B64\u51FD\u6570\u4F1A\u5728\u540E\u7EED\u7248\u672C\u4E2D\u5E9F\u5F03"}),"\u3002\n\u63A8\u8350\u4F7F\u7528\u7A97\u53E3\u51FD\u6570\u5B8C\u6210\u9884\u671F\u529F\u80FD\u3002\u4E3E\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"-- running difference(x)\nSELECT running_difference(x) FROM t ORDER BY k;\n\n-- \u7A97\u53E3\u51FD\u6570\nSELECT x - lag(x, 1, 0) OVER (ORDER BY k) FROM t;\n"})}),"\n",(0,t.jsx)(e.h4,{id:"arguments",children:"Arguments"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"x"})," - \u4E00\u5217\u6570\u636E.\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u662FTINYINT,SMALLINT,INT,BIGINT,LARGEINT,FLOAT,DOUBLE,DATE,DATETIME,DECIMAL"]}),"\n",(0,t.jsx)(e.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,t.jsx)(e.p,{children:"\u7B2C\u4E00\u884C\u8FD4\u56DE 0\uFF0C\u968F\u540E\u7684\u6BCF\u4E00\u884C\u8FD4\u56DE\u4E0E\u524D\u4E00\u884C\u7684\u5DEE\u503C\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"DROP TABLE IF EXISTS running_difference_test;\n\nCREATE TABLE running_difference_test (\n    `id` int NOT NULL COMMENT 'id',\n    `day` date COMMENT 'day', \n    `time_val` datetime COMMENT 'time_val',\n    `doublenum` double NULL COMMENT 'doublenum'\n)\nDUPLICATE KEY(id) \nDISTRIBUTED BY HASH(id) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n                                                  \nINSERT into running_difference_test (id, day, time_val,doublenum) values ('1', '2022-10-28', '2022-03-12 10:41:00', null),\n                                                   ('2','2022-10-27', '2022-03-12 10:41:02', 2.6),\n                                                   ('3','2022-10-28', '2022-03-12 10:41:03', 2.5),\n                                                   ('4','2022-9-29', '2022-03-12 10:41:03', null),\n                                                   ('5','2022-10-31', '2022-03-12 10:42:01', 3.3),\n                                                   ('6', '2022-11-08', '2022-03-12 11:05:04', 4.7); \n\nSELECT * from running_difference_test ORDER BY id ASC;\n\n+------+------------+---------------------+-----------+\n| id   | day        | time_val            | doublenum |\n+------+------------+---------------------+-----------+\n|    1 | 2022-10-28 | 2022-03-12 10:41:00 |      NULL |\n|    2 | 2022-10-27 | 2022-03-12 10:41:02 |       2.6 |\n|    3 | 2022-10-28 | 2022-03-12 10:41:03 |       2.5 |\n|    4 | 2022-09-29 | 2022-03-12 10:41:03 |      NULL |\n|    5 | 2022-10-31 | 2022-03-12 10:42:01 |       3.3 |\n|    6 | 2022-11-08 | 2022-03-12 11:05:04 |       4.7 |\n+------+------------+---------------------+-----------+\n\nSELECT\n    id,\n    running_difference(id) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------+-------+\n| id   | delta |\n+------+-------+\n|    1 |     0 |\n|    2 |     1 |\n|    3 |     1 |\n|    4 |     1 |\n|    5 |     1 |\n|    6 |     1 |\n+------+-------+\n\nSELECT\n    day,\n    running_difference(day) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+------------+-------+\n| day        | delta |\n+------------+-------+\n| 2022-10-28 |     0 |\n| 2022-10-27 |    -1 |\n| 2022-10-28 |     1 |\n| 2022-09-29 |   -29 |\n| 2022-10-31 |    32 |\n| 2022-11-08 |     8 |\n+------------+-------+\n\nSELECT\n    time_val,\n    running_difference(time_val) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+---------------------+-------+\n| time_val            | delta |\n+---------------------+-------+\n| 2022-03-12 10:41:00 |     0 |\n| 2022-03-12 10:41:02 |     2 |\n| 2022-03-12 10:41:03 |     1 |\n| 2022-03-12 10:41:03 |     0 |\n| 2022-03-12 10:42:01 |    58 |\n| 2022-03-12 11:05:04 |  1383 |\n+---------------------+-------+\n\nSELECT\n    doublenum,\n    running_difference(doublenum) AS delta\nFROM\n(\n    SELECT\n        id,\n        day,\n        time_val,\n        doublenum\n    FROM running_difference_test\n)as runningDifference ORDER BY id ASC;\n\n+-----------+----------------------+\n| doublenum | delta                |\n+-----------+----------------------+\n|      NULL |                 NULL |\n|       2.6 |                 NULL |\n|       2.5 | -0.10000000000000009 |\n|      NULL |                 NULL |\n|       3.3 |                 NULL |\n|       4.7 |   1.4000000000000004 |\n+-----------+----------------------+\n\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"running_difference"})]})}function o(n={}){let{wrapper:e}={...(0,d.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return u}});var r=i(667294);let t={},d=r.createContext(t);function u(n){let e=r.useContext(d);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:u(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);