"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["361900"],{485159:function(t,n,i){i.r(n),i.d(n,{metadata:()=>e,contentTitle:()=>r,default:()=>l,assets:()=>o,toc:()=>p,frontMatter:()=>m});var e=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-and","title":"BITMAP_AND","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-and.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-and","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-and","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_AND","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_OR","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-or"},"next":{"title":"BITMAP_UNION","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-union"}}'),a=i("785893"),s=i("250065");let m={title:"BITMAP_AND",language:"en"},r=void 0,o={},p=[{value:"bitmap_and",id:"bitmap_and",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function _(t){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"bitmap_and",children:"bitmap_and"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"BITMAP BITMAP_AND(BITMAP lhs, BITMAP rhs, ...)"})}),"\n",(0,a.jsx)(n.p,{children:"Compute intersection of two or more input bitmaps, return the new bitmap."}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"mysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(2))) cnt;\n+------+\n| cnt  |\n+------+\n|    0 |\n+------+\n\nmysql> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(2)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(2))) |\n+----------------------------------------------------------+\n|                                                          |\n+----------------------------------------------------------+\n\nmysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nMySQL> select bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1)));\n+----------------------------------------------------------+\n| bitmap_to_string(bitmap_and(to_bitmap(1), to_bitmap(1))) |\n+----------------------------------------------------------+\n| 1                                                        |\n+----------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5')));\n+-----------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-----------------------------------------------------------------------------------------------------------------------+\n| 1,2                                                                                                                   |\n+-----------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty()));\n+---------------------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                                       |\n+---------------------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),NULL));\n+-----------------------------------------------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_and(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n| NULL                                                                                                                        |\n+-----------------------------------------------------------------------------------------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"BITMAP_AND,BITMAP\n"})})]})}function l(t={}){let{wrapper:n}={...(0,s.a)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(_,{...t})}):_(t)}},250065:function(t,n,i){i.d(n,{Z:function(){return r},a:function(){return m}});var e=i(667294);let a={},s=e.createContext(a);function m(t){let n=e.useContext(s);return e.useMemo(function(){return"function"==typeof t?t(n):{...n,...t}},[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:m(t.components),e.createElement(s.Provider,{value:n},t.children)}}}]);