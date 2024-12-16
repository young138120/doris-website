"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["537878"],{518092:function(r,a,n){n.r(a),n.d(a,{metadata:()=>e,contentTitle:()=>c,default:()=>x,assets:()=>l,toc:()=>y,frontMatter:()=>i});var e=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array_exists","title":"array_exists","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_exists.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array_exists","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_exists","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"array_exists","language":"zh-CN"},"sidebar":"docs","previous":{"title":"array_cum_sum","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_cum_sum"},"next":{"title":"array_first_index","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_first_index"}}'),s=n("785893"),t=n("250065");let i={title:"array_exists",language:"zh-CN"},c=void 0,l={},y=[{value:"array_exists",id:"array_exists",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(r){let a={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...r.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"array_exists",children:"array_exists"}),"\n",(0,s.jsx)(a.p,{children:"array_exists(lambda,array1,array2....)\narray_exists(array1)"}),"\n",(0,s.jsx)(a.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(a.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"BOOLEAN array_exists(lambda, ARRAY<T> arr1, ARRAY<T> arr2, ... )\nBOOLEAN array_exists(ARRAY<T> arr)\n"})}),"\n",(0,s.jsx)(a.p,{children:"\u4F7F\u7528\u4E00\u4E2A\u53EF\u9009 lambda \u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0C\u5BF9\u5176\u4ED6\u7684\u8F93\u5165 ARRAY \u53C2\u6570\u7684\u5185\u90E8\u6570\u636E\u505A\u5BF9\u5E94\u8868\u8FBE\u5F0F\u8BA1\u7B97\u3002\u5F53\u8BA1\u7B97\u8FD4\u56DE\u975E 0 \u65F6\uFF0C\u8FD4\u56DE 1\uFF1B\u5426\u5219\u8FD4\u56DE 0\u3002\n\u5728 lambda \u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u7684\u8F93\u5165 array \u5217\u6570\u91CF\u4E00\u81F4\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002\n\u5728\u6CA1\u6709\u4F7F\u7528 lambda \u4F5C\u4E3A\u53C2\u6570\u65F6\uFF0Carray1 \u4F5C\u4E3A\u8BA1\u7B97\u7ED3\u679C\u3002"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{children:"array_exists(x->x, array1);\narray_exists(x->(x%2 = 0), array1);\narray_exists(x->(abs(x)-1), array1);\narray_exists((x,y)->(x = y), array1, array2);\narray_exists(array1);\n"})}),"\n",(0,s.jsx)(a.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sql",children:"\nmysql [test]>select *, array_exists(x->x>1,[1,2,3]) from array_test2 order by id;\n+------+-----------------+-------------------------+-----------------------------------------------+\n| id   | c_array1        | c_array2                | array_exists([x] -> x(0) > 1, ARRAY(1, 2, 3)) |\n+------+-----------------+-------------------------+-----------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1]                                     |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [0, 1, 1]                                     |\n|    3 | [1]             | [-100]                  | [0, 1, 1]                                     |\n|    4 | NULL            | NULL                    | [0, 1, 1]                                     |\n+------+-----------------+-------------------------+-----------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->x%2=0,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+---------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> x(0) % 2 = 0, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+---------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 0]                                         |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 1, 0]                                         |\n| [1]             | [-100]                  | [0, 1, 0]                                         |\n| NULL            | NULL                    | [0, 1, 0]                                         |\n+-----------------+-------------------------+---------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists(x->abs(x)-1,[1,2,3]) from array_test2 order by id;\n+-----------------+-------------------------+----------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x] -> abs(x(0)) - 1, ARRAY(1, 2, 3)) |\n+-----------------+-------------------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 1, 1, 1, 1]                                    |\n| [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                                          |\n| [1, NULL]       | [-100]                  | [0, NULL]                                          |\n| NULL            | NULL                    | NULL                                               |\n+-----------------+-------------------------+----------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select c_array1, c_array2, array_exists((x,y)->x>y,c_array1,c_array2) from array_test2 order by id;\n+-----------------+-------------------------+-------------------------------------------------------------+\n| c_array1        | c_array2                | array_exists([x, y] -> x(0) > y(1), `c_array1`, `c_array2`) |\n+-----------------+-------------------------+-------------------------------------------------------------+\n| [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [0, 0, 1, 0, 1]                                             |\n| [6, 7, 8]       | [10, 12, 13]            | [0, 0, 0]                                                   |\n| [1]             | [-100]                  | [1]                                                         |\n| NULL            | NULL                    | NULL                                                        |\n+-----------------+-------------------------+-------------------------------------------------------------+\n4 rows in set (0.02 sec)\n\nmysql [test]>select *, array_exists(c_array1) from array_test2 order by id;\n+------+-----------------+-------------------------+--------------------------+\n| id   | c_array1        | c_array2                | array_exists(`c_array1`) |\n+------+-----------------+-------------------------+--------------------------+\n|    1 | [1, 2, 3, 0, 5] | [10, 20, -40, 80, -100] | [1, 1, 1, 0, 1]          |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [1, 1, 1]                |\n|    3 | [0, NULL]       | [-100]                  | [0, NULL]                |\n|    4 | NULL            | NULL                    | NULL                     |\n+------+-----------------+-------------------------+--------------------------+\n4 rows in set (0.02 sec)\n\n"})}),"\n",(0,s.jsx)(a.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(a.p,{children:"ARRAY,ARRAY_EXISTS"})]})}function x(r={}){let{wrapper:a}={...(0,t.a)(),...r.components};return a?(0,s.jsx)(a,{...r,children:(0,s.jsx)(o,{...r})}):o(r)}},250065:function(r,a,n){n.d(a,{Z:function(){return c},a:function(){return i}});var e=n(667294);let s={},t=e.createContext(s);function i(r){let a=e.useContext(t);return e.useMemo(function(){return"function"==typeof r?r(a):{...a,...r}},[a,r])}function c(r){let a;return a=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:i(r.components),e.createElement(t.Provider,{value:a},r.children)}}}]);