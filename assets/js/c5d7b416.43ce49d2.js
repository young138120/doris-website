"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["63958"],{283541:function(n,e,t){t.r(e),t.d(e,{metadata:()=>l,contentTitle:()=>o,default:()=>d,assets:()=>u,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/null-or-empty","title":"NULL_OR_EMPTY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/null-or-empty.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/null-or-empty","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/null-or-empty","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"NULL_OR_EMPTY","language":"en"},"sidebar":"docs","previous":{"title":"RTRIM","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/rtrim"},"next":{"title":"NOT_NULL_OR_EMPTY","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/not-null-or-empty"}}'),s=t("785893"),r=t("250065");let i={title:"NULL_OR_EMPTY",language:"en"},o=void 0,u={},c=[{value:"null_or_empty",id:"null_or_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"null_or_empty",children:"null_or_empty"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BOOLEAN NULL_OR_EMPTY (VARCHAR str)"})}),"\n",(0,s.jsx)(e.p,{children:"It returns true if the string is an empty string or NULL. Otherwise it returns false."}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"MySQL [(none)]> select null_or_empty(null);\n+---------------------+\n| null_or_empty(NULL) |\n+---------------------+\n|                   1 |\n+---------------------+\n\nMySQL [(none)]> select null_or_empty(\"\");\n+-------------------+\n| null_or_empty('') |\n+-------------------+\n|                 1 |\n+-------------------+\n\nMySQL [(none)]> select null_or_empty(\"a\");\n+--------------------+\n| null_or_empty('a') |\n+--------------------+\n|                  0 |\n+--------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"NULL_OR_EMPTY\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(n){let e=l.useContext(r);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);