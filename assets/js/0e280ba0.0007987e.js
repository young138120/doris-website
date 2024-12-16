"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["416909"],{672129:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array_contains","title":"array_contains","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/array-functions/array_contains.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array_contains","permalink":"/docs/1.2/sql-manual/sql-functions/array-functions/array_contains","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"array_contains","language":"en"},"sidebar":"docs","previous":{"title":"array_position","permalink":"/docs/1.2/sql-manual/sql-functions/array-functions/array_position"},"next":{"title":"array_except","permalink":"/docs/1.2/sql-manual/sql-functions/array-functions/array_except"}}'),t=a("785893"),s=a("250065");let i={title:"array_contains",language:"en"},o=void 0,c={},l=[{value:"array_contains",id:"array_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_contains",children:"array_contains"}),"\n",(0,t.jsx)(e.p,{children:"array_contains"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"BOOLEAN array_contains(ARRAY<T> arr, T value)"})}),"\n",(0,t.jsx)(e.p,{children:"Check if a value presents in an array column. Return below values:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"1    - if value presents in an array;\n0    - if value does not present in an array;\nNULL - when array is NULL;\n"})}),"\n",(0,t.jsx)(e.h3,{id:"notice",children:"notice"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"Only supported in vectorized engine"})}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> SELECT id,c_array,array_contains(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_contains(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            1 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_contains([null, 1], null);\n+--------------------------------------+\n| array_contains(ARRAY(NULL, 1), NULL) |\n+--------------------------------------+\n|                                    1 |\n+--------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,CONTAIN,CONTAINS,ARRAY_CONTAINS"})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return o},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);