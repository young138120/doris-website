"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["996929"],{891173:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/hash-functions/xxhash-64","title":"XXHASH_64","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/hash-functions/xxhash-64.md","sourceDirName":"sql-manual/sql-functions/hash-functions","slug":"/sql-manual/sql-functions/hash-functions/xxhash-64","permalink":"/docs/dev/sql-manual/sql-functions/hash-functions/xxhash-64","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"XXHASH_64","language":"en"},"sidebar":"docs","previous":{"title":"XXHASH_32","permalink":"/docs/dev/sql-manual/sql-functions/hash-functions/xxhash-32"},"next":{"title":"HLL_CARDINALITY","permalink":"/docs/dev/sql-manual/sql-functions/hll-functions/hll-cardinality"}}'),l=s("785893"),h=s("250065");let i={title:"XXHASH_64",language:"en"},a=void 0,r={},c=[{value:"xxhash_64",id:"xxhash_64",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"benchmark",id:"benchmark",level:3},{value:"keywords",id:"keywords",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,h.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"xxhash_64",children:"xxhash_64"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"BIGINT XXHASH_64(VARCHAR input, ...)"})}),"\n",(0,l.jsx)(n.p,{children:"Return the 64 bits xxhash of input string."}),"\n",(0,l.jsxs)(n.p,{children:["Note: When calculating hash values, it is more recommended to use ",(0,l.jsx)(n.code,{children:"xxhash_64"})," instead of ",(0,l.jsx)(n.code,{children:"murmur_hash3_64"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select xxhash_64(NULL);\n+-----------------+\n| xxhash_64(NULL) |\n+-----------------+\n|            NULL |\n+-----------------+\n\nmysql> select xxhash_64(\"hello\");\n+----------------------+\n| xxhash_64('hello')   |\n+----------------------+\n| -7685981735718036227 |\n+----------------------+\n\nmysql> select xxhash_64(\"hello\", \"world\");\n+-----------------------------+\n| xxhash_64('hello', 'world') |\n+-----------------------------+\n|         7001965798170371843 |\n+-----------------------------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"benchmark",children:"benchmark"}),"\n",(0,l.jsxs)(n.p,{children:["Through TPCH Benchmark testing, it was found that ",(0,l.jsx)(n.code,{children:"xxhash_64"})," has significantly improved performance compared to ",(0,l.jsx)(n.code,{children:"murmur_hash3_64"}),". Therefore, in scenarios where hash values need to be calculated, it is more recommended to use ",(0,l.jsx)(n.code,{children:"xxhash_64"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select count(murmur_hash3_64(l_comment)) from lineitem;\n+-----------------------------------+\n| count(murmur_hash3_64(l_comment)) |\n+-----------------------------------+\n|                         600037902 |\n+-----------------------------------+\n1 row in set (17.18 sec)\n\nmysql> select count(xxhash_64(l_comment)) from lineitem;\n+-----------------------------+\n| count(xxhash_64(l_comment)) |\n+-----------------------------+\n|                   600037902 |\n+-----------------------------+\n1 row in set (8.41 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.p,{children:"XXHASH_64,HASH"})]})}function d(e={}){let{wrapper:n}={...(0,h.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let l={},h=t.createContext(l);function i(e){let n=t.useContext(h);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(h.Provider,{value:n},e.children)}}}]);