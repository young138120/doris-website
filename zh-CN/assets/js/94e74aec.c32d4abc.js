"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["168314"],{806704:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>t,default:()=>m,assets:()=>L,toc:()=>d,frontMatter:()=>o});var r=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/explode-json-array","title":"EXPLODE_JSON_ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/table-functions/explode-json-array.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/explode-json-array","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/explode-json-array","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"EXPLODE_JSON_ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHA2","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/encrypt-digest-functions/sha2"},"next":{"title":"EXPLODE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/table-functions/explode"}}'),l=a("785893"),s=a("250065");let o={title:"EXPLODE_JSON_ARRAY",language:"zh-CN"},t=void 0,L={},d=[{value:"explode_json_array",id:"explode_json_array",level:2},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function i(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"explode_json_array",children:"explode_json_array"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.p,{children:"\u8868\u51FD\u6570\uFF0C\u9700\u914D\u5408 Lateral View \u4F7F\u7528\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5C55\u5F00\u4E00\u4E2A json \u6570\u7EC4\u3002\u6839\u636E\u6570\u7EC4\u5143\u7D20\u7C7B\u578B\uFF0C\u6709\u4E09\u79CD\u51FD\u6570\u540D\u79F0\u3002\u5206\u522B\u5BF9\u5E94\u6574\u578B\u3001\u6D6E\u70B9\u548C\u5B57\u7B26\u4E32\u6570\u7EC4\u3002"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"syntax"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-sql",children:"explode_json_array_int(json_str)\nexplode_json_array_double(json_str)\nexplode_json_array_string(json_str)\nexplode_json_array_json(json_str)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.p,{children:"\u539F\u8868\u6570\u636E\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'mysql> select k1, e1 from example1 lateral view explode_json_array_int(\'[]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'[1,2,3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 |    1 |\n|    1 |    3 |\n|    2 | NULL |\n|    2 |    1 |\n|    2 |    3 |\n|    3 | NULL |\n|    3 |    1 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'["a","b","c"]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_int(\'{"a": 3}\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1,2,3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1.0,2.0,3.0]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 |    1 |\n|    1 |    2 |\n|    1 |    3 |\n|    2 |    1 |\n|    2 |    2 |\n|    2 |    3 |\n|    3 |    1 |\n|    3 |    2 |\n|    3 |    3 |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'["a","b","c"]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    1 | NULL |\n|    1 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_double(\'{"a": 3}\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'[]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'[1.0,2.0,3.0]\') tmp1 as e1 order by k1, e1;\n+------+----------+\n| k1   | e1       |\n+------+----------+\n|    1 | 1.000000 |\n|    1 | 2.000000 |\n|    1 | 3.000000 |\n|    2 | 1.000000 |\n|    2 | 2.000000 |\n|    2 | 3.000000 |\n|    3 | 1.000000 |\n|    3 | 2.000000 |\n|    3 | 3.000000 |\n+------+----------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'[1,"b",3]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | 1    |\n|    1 | 3    |\n|    1 | b    |\n|    2 | 1    |\n|    2 | 3    |\n|    2 | b    |\n|    3 | 1    |\n|    3 | 3    |\n|    3 | b    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'["a","b","c"]\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | a    |\n|    1 | b    |\n|    1 | c    |\n|    2 | a    |\n|    2 | b    |\n|    2 | c    |\n|    3 | a    |\n|    3 | b    |\n|    3 | c    |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_string(\'{"a": 3}\') tmp1 as e1 order by k1, e1;\n+------+------+\n| k1   | e1   |\n+------+------+\n|    1 | NULL |\n|    2 | NULL |\n|    3 | NULL |\n+------+------+\n\nmysql> select k1, e1 from example1 lateral view explode_json_array_json(\'[{"id":1,"name":"John"},{"id":2,"name":"Mary"},{"id":3,"name":"Bob"}]\') tmp1 as e1 order by k1, e1;\n+------+------------------------+\n| k1   | e1                     |\n+------+------------------------+\n|    1 | {"id":1,"name":"John"} |\n|    1 | {"id":2,"name":"Mary"} |\n|    1 | {"id":3,"name":"Bob"}  |\n|    2 | {"id":1,"name":"John"} |\n|    2 | {"id":2,"name":"Mary"} |\n|    2 | {"id":3,"name":"Bob"}  |\n|    3 | {"id":1,"name":"John"} |\n|    3 | {"id":2,"name":"Mary"} |\n|    3 | {"id":3,"name":"Bob"}  |\n+------+------------------------+\n'})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"explode,json,array,json_array,explode_json,explode_json_array"})]})}function m(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(i,{...n})}):i(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return t},a:function(){return o}});var r=a(667294);let l={},s=r.createContext(l);function o(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);