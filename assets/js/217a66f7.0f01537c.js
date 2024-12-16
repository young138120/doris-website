"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["932177"],{644873:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap_intersect","title":"bitmap_intersect","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_intersect.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap_intersect","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_intersect","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"bitmap_intersect","language":"en"},"sidebar":"docs","previous":{"title":"intersect_count","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/intersect_count"},"next":{"title":"orthogonal_bitmap_intersect","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/orthogonal_bitmap_intersect"}}'),s=n("785893"),a=n("250065");let r={title:"bitmap_intersect",language:"en"},o=void 0,c={},l=[{value:"bitmap_intersect",id:"bitmap_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"bitmap_intersect",children:"bitmap_intersect"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.p,{children:"Aggregation function, used to calculate the bitmap intersection after grouping. Common usage scenarios such as: calculating user retention rate."}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"BITMAP BITMAP_INTERSECT(BITMAP value)"})}),"\n",(0,s.jsx)(t.p,{children:"Enter a set of bitmap values, find the intersection of the set of bitmap values, and return."}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.p,{children:"Table schema"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"KeysType: AGG_KEY\nColumns: tag varchar, date datetime, user_id bitmap bitmap_union\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Find the retention of users between 2020-05-18 and 2020-05-19 under different tags.\nmysql> select tag, bitmap_intersect(user_id) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})}),"\n",(0,s.jsx)(t.p,{children:"Used in combination with the bitmap_to_string function to obtain the specific data of the intersection"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"Who are the users retained under different tags between 2020-05-18 and 2020-05-19?\nmysql> select tag, bitmap_to_string(bitmap_intersect(user_id)) from (select tag, date, bitmap_union(user_id) user_id from table where date in ('2020-05-18', '2020-05-19') group by tag, date) a group by tag;\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"BITMAP_INTERSECT, BITMAP\n"})})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return r}});var i=n(667294);let s={},a=i.createContext(s);function r(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);