"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["567255"],{7220:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>i,default:()=>a,assets:()=>c,toc:()=>u,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json_unquote","title":"json_unquote","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/json-functions/json_unquote.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json_unquote","permalink":"/docs/1.2/sql-manual/sql-functions/json-functions/json_unquote","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"json_unquote","language":"en"},"sidebar":"docs","previous":{"title":"json_quote","permalink":"/docs/1.2/sql-manual/sql-functions/json-functions/json_quote"},"next":{"title":"json_valid","permalink":"/docs/1.2/sql-manual/sql-functions/json-functions/json_valid"}}'),o=s("785893"),r=s("250065");let l={title:"json_unquote",language:"en"},i=void 0,c={},u=[{value:"json_unquote",id:"json_unquote",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"json_unquote",children:"json_unquote"}),"\n",(0,o.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,o.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.code,{children:"VARCHAR json_ununquote(VARCHAR)"})}),"\n",(0,o.jsx)(e.p,{children:"This function unquotes a JSON value and returns the result as a utf8mb4 string. If the argument is NULL, it will return NULL."}),"\n",(0,o.jsx)(e.p,{children:"Escape sequences within a string as shown in the following table will be recognized. Backslashes will be ignored for all other escape sequences."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(e.table,{children:[(0,o.jsx)(e.thead,{children:(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.th,{children:"Escape Sequence"}),(0,o.jsx)(e.th,{children:"Character Represented by Sequence"})]})}),(0,o.jsxs)(e.tbody,{children:[(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:'"'}),(0,o.jsx)(e.td,{children:'A double quote (") character'})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"\\b"}),(0,o.jsx)(e.td,{children:"A backspace character"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"\\f"}),(0,o.jsx)(e.td,{children:"A formfeed character"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"\\n"}),(0,o.jsx)(e.td,{children:"A newline (linefeed) character"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"\\r"}),(0,o.jsx)(e.td,{children:"A carriage return character"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"\\t"}),(0,o.jsx)(e.td,{children:"A tab character"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"\\"}),(0,o.jsx)(e.td,{children:"A backslash () character"})]}),(0,o.jsxs)(e.tr,{children:[(0,o.jsx)(e.td,{children:"\\uxxxx"}),(0,o.jsx)(e.td,{children:"UTF-8 bytes for Unicode value XXXX"})]})]})]}),"\n",(0,o.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"mysql> SELECT json_unquote('\"doris\"');\n+-------------------------+\n| json_unquote('\"doris\"') |\n+-------------------------+\n| doris                   |\n+-------------------------+\n\nmysql> SELECT json_unquote('[1, 2, 3]');\n+---------------------------+\n| json_unquote('[1, 2, 3]') |\n+---------------------------+\n| [1, 2, 3]                 |\n+---------------------------+\n\n\nmysql> SELECT json_unquote(null);\n+--------------------+\n| json_unquote(NULL) |\n+--------------------+\n| NULL               |\n+--------------------+\n\nmysql> SELECT json_unquote('\"\\\\ttest\"');\n+--------------------------+\n| json_unquote('\"\\ttest\"') |\n+--------------------------+\n|       test                    |\n+--------------------------+\n"})}),"\n",(0,o.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(e.p,{children:"json,unquote,json_unquote"})]})}function a(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return l}});var t=s(667294);let o={},r=t.createContext(o);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);