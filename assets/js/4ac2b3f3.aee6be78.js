"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["404164"],{709238:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>a});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/rtrim_in","title":"RTRIM_IN","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/rtrim_in.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/rtrim_in","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/rtrim_in","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RTRIM_IN","language":"en"}}'),s=t("785893"),i=t("250065");let a={title:"RTRIM_IN",language:"en"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2}];function d(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VARCHAR rtrim_in(VARCHAR str[, VARCHAR rhs])"})}),"\n",(0,s.jsx)(n.p,{children:"When there is no rhs parameter, remove the spaces that appear consecutively in the parameter str starting from the right part; when there is an rhs parameter, search and remove any characters in the rhs character set at the right end of the string (regardless of order)"}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT rtrim_in('ab d   ') str;\n+------+\n| str  |\n+------+\n| ab d |\n+------+\n\nmysql> SELECT rtrim_in('ababccaab','ab') str;\n+--------+\n| str    |\n+--------+\n| ababcc |\n+--------+\n"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.p,{children:"RTRIM_IN"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var r=t(667294);let s={},i=r.createContext(s);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);