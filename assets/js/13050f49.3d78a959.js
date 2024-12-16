"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["323637"],{684706:function(r,a,e){e.r(a),e.d(a,{metadata:()=>n,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>s});var n=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-filter","title":"ARRAY_FILTER","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/array-functions/array-filter.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-filter","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-filter","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_FILTER","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_MAP","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-map"},"next":{"title":"ARRAY_AVG","permalink":"/docs/2.0/sql-manual/sql-functions/array-functions/array-avg"}}'),t=e("785893"),l=e("250065");let s={title:"ARRAY_FILTER",language:"en"},i=void 0,c={},o=[{value:"array_filter",id:"array_filter",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function y(r){let a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...r.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"array_filter",children:"array_filter"}),"\n",(0,t.jsx)(a.p,{children:"array_filter(lambda,array)"}),"\n",(0,t.jsx)(a.admonition,{title:"Tips",type:"tip",children:(0,t.jsx)(a.p,{children:"This functions is supported since the Apache Doris 2.0.2 version"})}),"\n",(0,t.jsx)(a.p,{children:"array array_filter(array arr, array_bool filter_column)"}),"\n",(0,t.jsx)(a.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(a.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"ARRAY<T> array_filter(lambda, ARRAY<T> arr)\nARRAY<T> array_filter(ARRAY<T> arr, ARRAY<Bool> filter_column)\n"})}),"\n",(0,t.jsx)(a.p,{children:"Use the lambda expression as the input parameter to calculate and filter the data of the ARRAY column of the other input parameter.\nAnd filter out the values of 0 and NULL in the result."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"array_filter(x->x>0, array1);\narray_filter(x->(x+2)=10, array1);\narray_filter(x->(abs(x)-2)>0, array1);\narray_filter(c_array,[0,1,0]);\n"})}),"\n",(0,t.jsx)(a.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-shell",children:"mysql [test]>select c_array,array_filter(c_array,[0,1,0]) from array_test;\n+-----------------+----------------------------------------------------+\n| c_array         | array_filter(`c_array`, ARRAY(FALSE, TRUE, FALSE)) |\n+-----------------+----------------------------------------------------+\n| [1, 2, 3, 4, 5] | [2]                                                |\n| [6, 7, 8]       | [7]                                                |\n| []              | []                                                 |\n| NULL            | NULL                                               |\n+-----------------+----------------------------------------------------+\n\nmysql [test]>select array_filter(x->(x > 1),[1,2,3,0,null]);\n+----------------------------------------------------------------------------------------------+\n| array_filter(ARRAY(1, 2, 3, 0, NULL), array_map([x] -> (x(0) > 1), ARRAY(1, 2, 3, 0, NULL))) |\n+----------------------------------------------------------------------------------------------+\n| [2, 3]                                                                                       |\n+----------------------------------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->x>0,c_array2) from array_test2;\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> x(0) > 0, `c_array2`)) |\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [10, 20, 80]                                                     |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [10, 12, 13]                                                     |\n|    3 | [1]             | [-100]                  | []                                                               |\n|    4 | NULL            | NULL                    | NULL                                                             |\n+------+-----------------+-------------------------+------------------------------------------------------------------+\n4 rows in set (0.01 sec)\n\nmysql [test]>select *, array_filter(x->x%2=0,c_array2) from array_test2;\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> x(0) % 2 = 0, `c_array2`)) |\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [10, 20, -40, 80, -100]                                              |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | [10, 12]                                                             |\n|    3 | [1]             | [-100]                  | [-100]                                                               |\n|    4 | NULL            | NULL                    | NULL                                                                 |\n+------+-----------------+-------------------------+----------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->(x*(-10)>0),c_array2) from array_test2;\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_filter(`c_array2`, array_map([x] -> (x(0) * (-10) > 0), `c_array2`)) |\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [-40, -100]                                                                |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | []                                                                         |\n|    3 | [1]             | [-100]                  | [-100]                                                                     |\n|    4 | NULL            | NULL                    | NULL                                                                       |\n+------+-----------------+-------------------------+----------------------------------------------------------------------------+\n\nmysql [test]>select *, array_filter(x->x>0, array_map((x,y)->(x>y), c_array1,c_array2)) as res from array_test2;\n+------+-----------------+-------------------------+--------+\n| id   | c_array1        | c_array2                | res    |\n+------+-----------------+-------------------------+--------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] | [1, 1] |\n|    2 | [6, 7, 8]       | [10, 12, 13]            | []     |\n|    3 | [1]             | [-100]                  | [1]    |\n|    4 | NULL            | NULL                    | NULL   |\n+------+-----------------+-------------------------+--------+\n"})}),"\n",(0,t.jsx)(a.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(a.p,{children:"ARRAY,FILTER,ARRAY_FILTER"})]})}function d(r={}){let{wrapper:a}={...(0,l.a)(),...r.components};return a?(0,t.jsx)(a,{...r,children:(0,t.jsx)(y,{...r})}):y(r)}},250065:function(r,a,e){e.d(a,{Z:function(){return i},a:function(){return s}});var n=e(667294);let t={},l=n.createContext(t);function s(r){let a=n.useContext(l);return n.useMemo(function(){return"function"==typeof r?r(a):{...a,...r}},[a,r])}function i(r){let a;return a=r.disableParentContext?"function"==typeof r.components?r.components(t):r.components||t:s(r.components),n.createElement(l.Provider,{value:a},r.children)}}}]);