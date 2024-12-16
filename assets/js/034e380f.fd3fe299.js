"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["919528"],{697093:function(n,e,i){i.r(e),i.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>a,assets:()=>d,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/substring-index","title":"SUBSTRING_INDEX","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/substring-index.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/substring-index","permalink":"/docs/sql-manual/sql-functions/string-functions/substring-index","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SUBSTRING_INDEX","language":"en"},"sidebar":"docs","previous":{"title":"SPLIT_BY_STRING","permalink":"/docs/sql-manual/sql-functions/string-functions/split-by-string"},"next":{"title":"MONEY_FORMAT","permalink":"/docs/sql-manual/sql-functions/string-functions/money-format"}}'),l=i("785893"),t=i("250065");let r={title:"SUBSTRING_INDEX",language:"en"},o=void 0,d={},c=[{value:"substring_index",id:"substring_index",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"substring_index",children:"substring_index"}),"\n",(0,l.jsx)(e.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(e.admonition,{title:"Tips",type:"tip",children:(0,l.jsx)(e.p,{children:"This feature is supported since the Apache Doris 1.2 version"})}),"\n",(0,l.jsx)(e.p,{children:"SUBSTRING_INDEX"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"VARCHAR substring_index(VARCHAR content, VARCHAR delimiter, INT field)"})}),"\n",(0,l.jsxs)(e.p,{children:["Split ",(0,l.jsx)(e.code,{children:"content"})," to two parts at position where the ",(0,l.jsx)(e.code,{children:"field"}),"s of ",(0,l.jsx)(e.code,{children:"delimiter"})," stays, return one of them according to below rules:\nif ",(0,l.jsx)(e.code,{children:"field"})," is positive, return the left part;\nelse if ",(0,l.jsx)(e.code,{children:"field"})," is negative, return the right part;\nif ",(0,l.jsx)(e.code,{children:"field"})," is zero, return an empty string when ",(0,l.jsx)(e.code,{children:"content"})," is not null, else will return null."]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"delimiter"})," is case sensitive and multi-byte safe."]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"delimiter"})," and ",(0,l.jsx)(e.code,{children:"field"})," parameter should be constant."]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'mysql> select substring_index("hello world", " ", 1);\n+----------------------------------------+\n| substring_index("hello world", " ", 1) |\n+----------------------------------------+\n| hello                                  |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", 2);\n+----------------------------------------+\n| substring_index("hello world", " ", 2) |\n+----------------------------------------+\n| hello world                            |\n+----------------------------------------+\nmysql> select substring_index("hello world", " ", -1);\n+-----------------------------------------+\n| substring_index("hello world", " ", -1) |\n+-----------------------------------------+\n| world                                   |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -2);\n+-----------------------------------------+\n| substring_index("hello world", " ", -2) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", -3);\n+-----------------------------------------+\n| substring_index("hello world", " ", -3) |\n+-----------------------------------------+\n| hello world                             |\n+-----------------------------------------+\nmysql> select substring_index("hello world", " ", 0);\n+----------------------------------------+\n| substring_index("hello world", " ", 0) |\n+----------------------------------------+\n|                                        |\n+----------------------------------------+\n'})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"SUBSTRING_INDEX, SUBSTRING\n"})})]})}function a(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return o},a:function(){return r}});var s=i(667294);let l={},t=s.createContext(l);function r(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);