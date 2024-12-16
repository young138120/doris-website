"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["449733"],{945898:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-geometryfromtext","title":"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/spatial-functions/st-geometryfromtext.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-geometryfromtext","permalink":"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-geometryfromtext","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_CONTAINS","permalink":"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-contains"},"next":{"title":"ST_LINEFROMTEXT,ST_LINESTRINGFROMTEXT","permalink":"/zh-CN/docs/sql-manual/sql-functions/spatial-functions/st-linefromtext"}}'),o=n("785893"),r=n("250065");let i={title:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT",language:"zh-CN"},l=void 0,a={},c=[{value:"ST_GeometryFromText,ST_GeomFromText",id:"st_geometryfromtextst_geomfromtext",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function T(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"st_geometryfromtextst_geomfromtext",children:"ST_GeometryFromText,ST_GeomFromText"}),"\n",(0,o.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"GEOMETRY ST_GeometryFromText(VARCHAR wkt)"})}),"\n",(0,o.jsx)(t.p,{children:"\u5C06\u4E00\u4E2AWKT\uFF08Well Known Text\uFF09\u8F6C\u5316\u4E3A\u5BF9\u5E94\u7684\u5185\u5B58\u7684\u51E0\u4F55\u5F62\u5F0F"}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"mysql> SELECT ST_AsText(ST_GeometryFromText(\"LINESTRING (1 1, 2 2)\"));\n+---------------------------------------------------------+\n| st_astext(st_geometryfromtext('LINESTRING (1 1, 2 2)')) |\n+---------------------------------------------------------+\n| LINESTRING (1 1, 2 2)                                   |\n+---------------------------------------------------------+\n"})}),"\n",(0,o.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(t.p,{children:"ST_GEOMETRYFROMTEXT,ST_GEOMFROMTEXT,ST,GEOMETRYFROMTEXT,GEOMFROMTEXT"})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(T,{...e})}):T(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return i}});var s=n(667294);let o={},r=s.createContext(o);function i(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);