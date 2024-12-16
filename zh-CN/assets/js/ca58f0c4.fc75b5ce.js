"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["821389"],{581216:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>c,assets:()=>l,toc:()=>u,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group_bitmap_xor","title":"group_bitmap_xor","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bitmap_xor","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"group_bitmap_xor","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_UNION","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/bitmap_union"},"next":{"title":"group_bit_and","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/aggregate-functions/group_bit_and"}}'),i=t("785893"),o=t("250065");let s={title:"group_bitmap_xor",language:"zh-CN"},a=void 0,l={},u=[{value:"group_bitmap_xor",id:"group_bitmap_xor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"group_bitmap_xor",children:"group_bitmap_xor"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BITMAP GROUP_BITMAP_XOR(expr)"})}),"\n",(0,i.jsx)(n.p,{children:"\u5BF9expr\u8FDB\u884C xor \u8BA1\u7B97, \u8FD4\u56DE\u65B0\u7684bitmap\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql>  select page, bitmap_to_string(user_id) from pv_bitmap;\n+------+-----------------------------+\n| page | bitmap_to_string(`user_id`) |\n+------+-----------------------------+\n| m    | 4,7,8                       |\n| m    | 1,3,6,15                    |\n| m    | 4,7                         |\n+------+-----------------------------+\n\nmysql> select page, bitmap_to_string(group_bitmap_xor(user_id)) from pv_bitmap group by page;\n+------+-----------------------------------------------+\n| page | bitmap_to_string(group_bitmap_xor(`user_id`)) |\n+------+-----------------------------------------------+\n| m    | 1,3,6,8,15                                    |\n+------+-----------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GROUP_BITMAP_XOR,BITMAP\n"})})]})}function c(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var r=t(667294);let i={},o=r.createContext(i);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);