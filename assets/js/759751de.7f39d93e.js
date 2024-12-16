"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["779909"],{989202:function(n,e,s){s.r(e),s.d(e,{metadata:()=>r,contentTitle:()=>i,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-array","title":"JSON_ARRAY","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/json-array.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-array","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-array","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"JSON_ARRAY","language":"en"},"sidebar":"docs","previous":{"title":"JSON_TYPE","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-type"},"next":{"title":"JSON_OBJECT","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-object"}}'),a=s("785893"),t=s("250065");let o={title:"JSON_ARRAY",language:"en"},i=void 0,l={},c=[{value:"json_array",id:"json_array",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"json_array",children:"json_array"}),"\n",(0,a.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"VARCHAR json_array(VARCHAR,...)"})}),"\n",(0,a.jsx)(e.p,{children:"Generate a json array containing the specified values, return empty if no values"}),"\n",(0,a.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'MySQL> select json_array();\n+--------------+\n| json_array() |\n+--------------+\n| []           |\n+--------------+\n\nMySQL> select json_array(null);\n+--------------------+\n| json_array(\'NULL\') |\n+--------------------+\n| [NULL]             |\n+--------------------+\n\n\nMySQL> SELECT json_array(1, "abc", NULL, TRUE, CURTIME());\n+-----------------------------------------------+\n| json_array(1, \'abc\', \'NULL\', TRUE, curtime()) |\n+-----------------------------------------------+\n| [1, "abc", NULL, TRUE, "10:41:15"]            |\n+-----------------------------------------------+\n\n\nMySQL> select json_array("a", null, "c");\n+------------------------------+\n| json_array(\'a\', \'NULL\', \'c\') |\n+------------------------------+\n| ["a", NULL, "c"]             |\n+------------------------------+\n'})}),"\n",(0,a.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(e.p,{children:"json,array,json_array"})]})}function d(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return i},a:function(){return o}});var r=s(667294);let a={},t=r.createContext(a);function o(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:o(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);