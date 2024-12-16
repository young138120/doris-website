"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["313088"],{855160:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>c,default:()=>p,assets:()=>o,toc:()=>r,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/map-functions/map-values","title":"MAP_VALUES","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/map-functions/map-values.md","sourceDirName":"sql-manual/sql-functions/map-functions","slug":"/sql-manual/sql-functions/map-functions/map-values","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/map-functions/map-values","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"MAP_VALUES","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MAP_KEYS","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/map-functions/map-keys"},"next":{"title":"MAP_CONTAINS_KEY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/map-functions/map-contains-key"}}'),a=s("785893"),l=s("250065");let i={title:"MAP_VALUES",language:"zh-CN"},c=void 0,o={},r=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"ARRAY<K> map_values(Map<K, V> map)"})}),"\n",(0,a.jsxs)(e.p,{children:["\u5C06\u7ED9\u5B9A ",(0,a.jsx)(e.code,{children:"map"})," \u7684\u503C\u63D0\u53D6\u6210\u4E00\u4E2A\u5BF9\u5E94\u7C7B\u578B\u7684 ",(0,a.jsx)(e.code,{children:"ARRAY"})]}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-sql",children:'mysql> select map_values(map(1, "100", 0.1, 2));\n+---------------------------------------------------------------------------------------------------+\n| map_values(map(cast(1 as DECIMALV3(2, 1)), \'100\', cast(0.1 as DECIMALV3(2, 1)), cast(2 as TEXT))) |\n+---------------------------------------------------------------------------------------------------+\n| ["100", "2"]                                                                                      |\n+---------------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select map_values(map());\n+-------------------+\n| map_values(map()) |\n+-------------------+\n| []                |\n+-------------------+\n1 row in set (0.11 sec)\n'})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(e.p,{children:"MAP, VALUES, MAP_VALUES"})]})}function p(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return c},a:function(){return i}});var t=s(667294);let a={},l=t.createContext(a);function i(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:i(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);