"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["664970"],{613828:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-contains","title":"ARRAY_CONTAINS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-contains.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-contains","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-contains","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_CONTAINS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_POSITION","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-position"},"next":{"title":"ARRAY_EXCEPT","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-except"}}'),t=a("785893"),s=a("250065");let i={title:"ARRAY_CONTAINS",language:"zh-CN"},l=void 0,c={},o=[{value:"array_contains",id:"array_contains",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array_contains",children:"array_contains"}),"\n",(0,t.jsx)(e.p,{children:"array_contains"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"BOOLEAN array_contains(ARRAY<T> arr, T value)"})}),"\n",(0,t.jsx)(e.p,{children:"\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u5305\u542Bvalue\u3002\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"1    - value\u5728\u6570\u7EC4arr\u4E2D\u5B58\u5728\uFF1B\n0    - value\u4E0D\u5B58\u5728\u6570\u7EC4arr\u4E2D\uFF1B\nNULL - arr\u4E3ANULL\u65F6\u3002\n"})}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> SELECT id,c_array,array_contains(c_array, 5) FROM `array_test`;\n+------+-----------------+------------------------------+\n| id   | c_array         | array_contains(`c_array`, 5) |\n+------+-----------------+------------------------------+\n|    1 | [1, 2, 3, 4, 5] |                            1 |\n|    2 | [6, 7, 8]       |                            0 |\n|    3 | []              |                            0 |\n|    4 | NULL            |                         NULL |\n+------+-----------------+------------------------------+\n\nmysql> select array_contains([null, 1], null);\n+--------------------------------------+\n| array_contains(ARRAY(NULL, 1), NULL) |\n+--------------------------------------+\n|                                    1 |\n+--------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,CONTAIN,CONTAINS,ARRAY_CONTAINS"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return l},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);