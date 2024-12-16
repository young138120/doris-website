"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["801545"],{256492:function(n,e,a){a.r(e),a.d(e,{metadata:()=>s,contentTitle:()=>m,default:()=>p,assets:()=>d,toc:()=>r,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-data-types/semi-structured/MAP","title":"MAP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/semi-structured/MAP.md","sourceDirName":"sql-manual/sql-data-types/semi-structured","slug":"/sql-manual/sql-data-types/semi-structured/MAP","permalink":"/docs/3.0/sql-manual/sql-data-types/semi-structured/MAP","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"MAP","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY","permalink":"/docs/3.0/sql-manual/sql-data-types/semi-structured/ARRAY"},"next":{"title":"STRUCT","permalink":"/docs/3.0/sql-manual/sql-data-types/semi-structured/STRUCT"}}'),l=a("785893"),t=a("250065");let i={title:"MAP",language:"en"},m=void 0,d={},r=[{value:"MAP",id:"map",level:2},{value:"name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"map",children:"MAP"}),"\n",(0,l.jsx)(e.h3,{id:"name",children:"name"}),"\n",(0,l.jsx)(e.p,{children:"MAP"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"MAP<K, V>"})}),"\n",(0,l.jsx)(e.p,{children:"A Map of K, V items, it cannot be used as a key column. Now MAP can only used in Duplicate and Unique Model Tables."}),"\n",(0,l.jsx)(e.p,{children:"Need to manually enable the support, it is disabled by default."}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'admin set frontend config("enable_map_type" = "true");\n'})}),"\n",(0,l.jsx)(e.p,{children:"K,V could be any of:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"BOOLEAN, TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE, DECIMAL, DECIMALV3, DATE,\nDATEV2, DATETIME, DATETIMEV2, CHAR, VARCHAR, STRING\n"})}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.p,{children:"Create table example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS test.simple_map (\n  `id` INT(11) NULL COMMENT "",\n  `m` Map<STRING, INT> NULL COMMENT ""\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"storage_format" = "V2"\n);\n'})}),"\n",(0,l.jsx)(e.p,{children:"Insert data example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"mysql> INSERT INTO simple_map VALUES(1, {'a': 100, 'b': 200});\n"})}),"\n",(0,l.jsxs)(e.p,{children:["stream_load examples:\nSee ",(0,l.jsx)(e.a,{href:"../../../data-operate/import/import-way/stream-load-manual",children:"STREAM LOAD"}),"  for syntax details."]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'# load the map data from json file\ncurl --location-trusted -uroot: -T events.json -H "format: json" -H "read_json_by_line: true" http://fe_host:8030/api/test/simple_map/_stream_load\n# \u8FD4\u56DE\u7ED3\u679C\n{\n    "TxnId": 106134,\n    "Label": "5666e573-9a97-4dfc-ae61-2d6b61fdffd2",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 10293125,\n    "NumberLoadedRows": 10293125,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 2297411459,\n    "LoadTimeMs": 66870,\n    "BeginTxnTimeMs": 1,\n    "StreamLoadPutTimeMs": 80,\n    "ReadDataTimeMs": 6415,\n    "WriteDataTimeMs": 10550,\n    "CommitAndPublishTimeMs": 38\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"Select all data example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT * FROM simple_map;\n+------+-----------------------------+\n| id   | m                           |\n+------+-----------------------------+\n|    1 | {'a':100, 'b':200}          |\n|    2 | {'b':100, 'c':200, 'd':300} |\n|    3 | {'a':10, 'd':200}           |\n+------+-----------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"Select map column example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT m FROM simple_map;\n+-----------------------------+\n| m                           |\n+-----------------------------+\n| {'a':100, 'b':200}          |\n| {'b':100, 'c':200, 'd':300} |\n| {'a':10, 'd':200}           |\n+-----------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"Select map value according given key example:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT m['a'] FROM simple_map;\n+-----------------------------+\n| %element_extract%(`m`, 'a') |\n+-----------------------------+\n|                         100 |\n|                        NULL |\n|                          10 |\n+-----------------------------+\n"})}),"\n",(0,l.jsx)(e.p,{children:"map functions examples:"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"# map construct\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['k11'];\n+---------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'k11') |\n+---------------------------------------------------------+\n|                                                    1000 |\n+---------------------------------------------------------+\n\nmysql> SELECT map('k11', 1000, 'k22', 2000)['nokey'];\n+-----------------------------------------------------------+\n| %element_extract%(map('k11', 1000, 'k22', 2000), 'nokey') |\n+-----------------------------------------------------------+\n|                                                      NULL |\n+-----------------------------------------------------------+\n1 row in set (0.06 sec)\n\n# map size\n\nmysql> SELECT map_size(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_size(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n|                                       2 |\n+-----------------------------------------+\n\nmysql> SELECT id, m, map_size(m) FROM simple_map ORDER BY id;\n+------+-----------------------------+---------------+\n| id   | m                           | map_size(`m`) |\n+------+-----------------------------+---------------+\n|    1 | {\"a\":100, \"b\":200}          |             2 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |             3 |\n|    2 | {\"a\":10, \"d\":200}           |             2 |\n+------+-----------------------------+---------------+\n3 rows in set (0.04 sec)\n\n# map_contains_key\n\nmysql> SELECT map_contains_key(map('k11', 1000, 'k22', 2000), 'k11');\n+--------------------------------------------------------+\n| map_contains_key(map('k11', 1000, 'k22', 2000), 'k11') |\n+--------------------------------------------------------+\n|                                                      1 |\n+--------------------------------------------------------+\n1 row in set (0.08 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'k1') FROM simple_map ORDER BY id;\n+------+-----------------------------+-----------------------------+\n| id   | m                           | map_contains_key(`m`, 'k1') |\n+------+-----------------------------+-----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                           0 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                           0 |\n|    2 | {\"a\":10, \"d\":200}           |                           0 |\n+------+-----------------------------+-----------------------------+\n3 rows in set (0.10 sec)\n\nmysql> SELECT id, m, map_contains_key(m, 'a') FROM simple_map ORDER BY id;\n+------+-----------------------------+----------------------------+\n| id   | m                           | map_contains_key(`m`, 'a') |\n+------+-----------------------------+----------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                          1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                          0 |\n|    2 | {\"a\":10, \"d\":200}           |                          1 |\n+------+-----------------------------+----------------------------+\n3 rows in set (0.17 sec)\n\n# map_contains_value\n\nmysql> SELECT map_contains_value(map('k11', 1000, 'k22', 2000), NULL);\n+---------------------------------------------------------+\n| map_contains_value(map('k11', 1000, 'k22', 2000), NULL) |\n+---------------------------------------------------------+\n|                                                       0 |\n+---------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, m, map_contains_value(m, '100') FROM simple_map ORDER BY id;\n+------+-----------------------------+------------------------------+\n| id   | m                           | map_contains_value(`m`, 100) |\n+------+-----------------------------+------------------------------+\n|    1 | {\"a\":100, \"b\":200}          |                            1 |\n|    2 | {\"b\":100, \"c\":200, \"d\":300} |                            1 |\n|    2 | {\"a\":10, \"d\":200}           |                            0 |\n+------+-----------------------------+------------------------------+\n3 rows in set (0.11 sec)\n\n# map_keys\n\nmysql> SELECT map_keys(map('k11', 1000, 'k22', 2000));\n+-----------------------------------------+\n| map_keys(map('k11', 1000, 'k22', 2000)) |\n+-----------------------------------------+\n| [\"k11\", \"k22\"]                          |\n+-----------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT id, map_keys(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_keys(`m`)   |\n+------+-----------------+\n|    1 | [\"a\", \"b\"]      |\n|    2 | [\"b\", \"c\", \"d\"] |\n|    2 | [\"a\", \"d\"]      |\n+------+-----------------+\n3 rows in set (0.19 sec)\n\n# map_values\n\nmysql> SELECT map_values(map('k11', 1000, 'k22', 2000));\n+-------------------------------------------+\n| map_values(map('k11', 1000, 'k22', 2000)) |\n+-------------------------------------------+\n| [1000, 2000]                              |\n+-------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT id, map_values(m) FROM simple_map ORDER BY id;\n+------+-----------------+\n| id   | map_values(`m`) |\n+------+-----------------+\n|    1 | [100, 200]      |\n|    2 | [100, 200, 300] |\n|    2 | [10, 200]       |\n+------+-----------------+\n3 rows in set (0.18 sec)\n\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"MAP\n"})})]})}function p(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(c,{...n})}):c(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return m},a:function(){return i}});var s=a(667294);let l={},t=s.createContext(l);function i(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function m(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);