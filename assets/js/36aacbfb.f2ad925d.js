"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["461765"],{391454:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/unhex","title":"UNHEX","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/unhex.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/unhex","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/unhex","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"UNHEX","language":"en"},"sidebar":"docs","previous":{"title":"HEX","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/hex"},"next":{"title":"ELT","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/elt"}}'),i=t("785893"),r=t("250065");let l={title:"UNHEX",language:"en"},o=void 0,c={},a=[{value:"unhex",id:"unhex",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"unhex",children:"unhex"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"VARCHAR unhex(VARCHAR str)"})}),"\n",(0,i.jsxs)(e.p,{children:["Enter a string, if the length of the string is 0 or an odd number, an empty string is returned;\nIf the string contains characters other than ",(0,i.jsx)(e.code,{children:"[0-9], [a-f], [A-F]"}),", an empty string is returned;\nIn other cases, every two characters are a group of characters converted into hexadecimal, and then spliced into a string for output."]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select unhex('@');\n+------------+\n| unhex('@') |\n+------------+\n|            |\n+------------+\n\nmysql> select unhex('41');\n+-------------+\n| unhex('41') |\n+-------------+\n| A           |\n+-------------+\n\nmysql> select unhex('4142');\n+---------------+\n| unhex('4142') |\n+---------------+\n| AB            |\n+---------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"UNHEX\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);