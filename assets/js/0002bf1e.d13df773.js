"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["960401"],{195957:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-distinct","title":"ARRAY_DISTINCT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-distinct.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-distinct","permalink":"/docs/sql-manual/sql-functions/array-functions/array-distinct","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_DISTINCT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_RANGE","permalink":"/docs/sql-manual/sql-functions/array-functions/array-range"},"next":{"title":"ARRAY_DIFFERENCE","permalink":"/docs/sql-manual/sql-functions/array-functions/array-difference"}}'),a=t("785893"),i=t("250065");let s={title:"ARRAY_DISTINCT",language:"en"},c=void 0,l={},d=[{value:"array_distinct",id:"array_distinct",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"array_distinct",children:"array_distinct"}),"\n",(0,a.jsx)(e.p,{children:"array_distinct"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"ARRAY<T> array_distinct(ARRAY<T> arr)"})}),"\n",(0,a.jsx)(e.p,{children:"Return the array which has been removed duplicate values.\nReturn NULL for NULL input."}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:"mysql> select k1, k2, array_distinct(k2) from array_test;\n+------+-----------------------------+---------------------------+\n| k1   | k2                          | array_distinct(k2)        |\n+------+-----------------------------+---------------------------+\n| 1    | [1, 2, 3, 4, 5]             | [1, 2, 3, 4, 5]           |\n| 2    | [6, 7, 8]                   | [6, 7, 8]                 |\n| 3    | []                          | []                        |\n| 4    | NULL                        | NULL                      |\n| 5    | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [1, 2, 3, 4, 5]           |\n| 6    | [1, 2, 3, NULL]             | [1, 2, 3, NULL]           |\n| 7    | [1, 2, 3, NULL, NULL]       | [1, 2, 3, NULL]     |\n+------+-----------------------------+---------------------------+\n\nmysql> select k1, k2, array_distinct(k2) from array_test01;\n+------+------------------------------------------+---------------------------+\n| k1   | k2                                       | array_distinct(`k2`)      |\n+------+------------------------------------------+---------------------------+\n| 1    | ['a', 'b', 'c', 'd', 'e']                | ['a', 'b', 'c', 'd', 'e'] |\n| 2    | ['f', 'g', 'h']                          | ['f', 'g', 'h']           |\n| 3    | ['']                                     | ['']                      |\n| 3    | [NULL]                                   | [NULL]                    |\n| 5    | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['a', 'b', 'c', 'd', 'e'] |\n| 6    | NULL                                     | NULL                      |\n| 7    | ['a', 'b', NULL]                         | ['a', 'b', NULL]          |\n| 8    | ['a', 'b', NULL, NULL]                   | ['a', 'b', NULL]    |\n+------+------------------------------------------+---------------------------+\n"})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.p,{children:"ARRAY, DISTINCT, ARRAY_DISTINCT"})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(o,{...n})}):o(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return s}});var r=t(667294);let a={},i=r.createContext(a);function s(n){let e=r.useContext(i);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);