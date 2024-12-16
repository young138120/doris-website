"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["417203"],{321913:function(n,e,t){t.r(e),t.d(e,{metadata:()=>o,contentTitle:()=>r,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>i});var o=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-polygon","title":"ST_POLYGON,ST_POLYGONFROMTEXT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/spatial-functions/st-polygon.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-polygon","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-polygon","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ST_POLYGON,ST_POLYGONFROMTEXT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_POINT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-point"},"next":{"title":"ST_ASTEXT,ST_ASWKT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/spatial-functions/st-astext"}}'),s=t("785893"),l=t("250065");let i={title:"ST_POLYGON,ST_POLYGONFROMTEXT",language:"zh-CN"},r=void 0,a={},c=[{value:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText",id:"st_polygonst_polyfromtextst_polygonfromtext",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"st_polygonst_polyfromtextst_polygonfromtext",children:"ST_Polygon,ST_PolyFromText,ST_PolygonFromText"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"GEOMETRY ST_Polygon(VARCHAR wkt)"})}),"\n",(0,s.jsx)(e.p,{children:"\u5C06\u4E00\u4E2AWKT\uFF08Well Known Text\uFF09\u8F6C\u5316\u4E3A\u5BF9\u5E94\u7684\u591A\u8FB9\u5F62\u5185\u5B58\u5F62\u5F0F"}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> SELECT ST_AsText(ST_Polygon(\"POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))\"));\n+------------------------------------------------------------------+\n| st_astext(st_polygon('POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))')) |\n+------------------------------------------------------------------+\n| POLYGON ((0 0, 10 0, 10 10, 0 10, 0 0))                          |\n+------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.p,{children:"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT,ST,POLYGON,POLYFROMTEXT,POLYGONFROMTEXT"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return i}});var o=t(667294);let s={},l=o.createContext(s);function i(n){let e=o.useContext(l);return o.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),o.createElement(l.Provider,{value:e},n.children)}}}]);