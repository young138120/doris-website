"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["977691"],{723149:function(n,t,e){e.r(t),e.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>s});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count","title":"bitmap_and_not_count","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and_not_count","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"bitmap_and_not_count","language":"zh-CN"},"sidebar":"docs","previous":{"title":"bitmap_and_count","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and_count"},"next":{"title":"orthogonal_bitmap_union_count","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_union_count"}}'),o=e("785893"),a=e("250065");let s={title:"bitmap_and_not_count",language:"zh-CN"},c=void 0,l={},u=[{value:"bitmap_and_not_count",id:"bitmap_and_not_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(n){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"bitmap_and_not_count",children:"bitmap_and_not_count"}),"\n",(0,o.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"BITMAP BITMAP_AND_NOT_COUNT(BITMAP lhs, BITMAP rhs)"})}),"\n",(0,o.jsx)(t.p,{children:"\u5C06\u4E24\u4E2Abitmap\u8FDB\u884C\u4E0E\u975E\u64CD\u4F5C\u5E76\u8FD4\u56DE\u8BA1\u7B97\u8FD4\u56DE\u7684\u5927\u5C0F."}),"\n",(0,o.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"mysql> select bitmap_and_not_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5')) cnt;\n+------+\n| cnt  |\n+------+\n|    2 |\n+------+\n"})}),"\n",(0,o.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"BITMAP_AND_NOT_COUNT,BITMAP\n"})})]})}function d(n={}){let{wrapper:t}={...(0,a.a)(),...n.components};return t?(0,o.jsx)(t,{...n,children:(0,o.jsx)(r,{...n})}):r(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return c},a:function(){return s}});var i=e(667294);let o={},a=i.createContext(o);function s(n){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:s(n.components),i.createElement(a.Provider,{value:t},n.children)}}}]);