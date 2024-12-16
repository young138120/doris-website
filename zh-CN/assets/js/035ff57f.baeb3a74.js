"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["431154"],{28436:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>a,assets:()=>c,toc:()=>d,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-insert","title":"JSON_INSERT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/json-insert.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-insert","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-insert","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"JSON_INSERT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"GET_JSON_STRING","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-string"},"next":{"title":"JSON_REPLACE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-replace"}}'),i=s("785893"),l=s("250065");let o={title:"JSON_INSERT",language:"zh-CN"},r=void 0,c={},d=[{value:"json_insert",id:"json_insert",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"json_insert",children:"json_insert"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"VARCHAR json_insert(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"json_insert"})," \u51FD\u6570\u5728 JSON \u4E2D\u63D2\u5165\u6570\u636E\u5E76\u8FD4\u56DE\u7ED3\u679C\u3002\u5982\u679C ",(0,i.jsx)(e.code,{children:"json_str"})," \u6216 ",(0,i.jsx)(e.code,{children:"path"})," \u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002\u5426\u5219\uFF0C\u5982\u679C ",(0,i.jsx)(e.code,{children:"json_str"})," \u4E0D\u662F\u6709\u6548\u7684 JSON \u6216\u4EFB\u4F55 ",(0,i.jsx)(e.code,{children:"path"})," \u53C2\u6570\u4E0D\u662F\u6709\u6548\u7684\u8DEF\u5F84\u8868\u8FBE\u5F0F\u6216\u5305\u542B\u4E86 * \u901A\u914D\u7B26\uFF0C\u5219\u4F1A\u8FD4\u56DE\u9519\u8BEF\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u8DEF\u5F84\u503C\u5BF9\u6309\u4ECE\u5DE6\u5230\u53F3\u7684\u987A\u5E8F\u8FDB\u884C\u8BC4\u4F30\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679C JSON \u4E2D\u4E0D\u5B58\u5728\u8BE5\u8DEF\u5F84\uFF0C\u5219\u8DEF\u5F84\u503C\u5BF9\u4F1A\u6DFB\u52A0\u8BE5\u503C\u5230 JSON \u4E2D\uFF0C\u5982\u679C\u8DEF\u5F84\u6807\u8BC6\u67D0\u4E2A\u7C7B\u578B\u7684\u503C\uFF0C\u5219\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5BF9\u4E8E\u73B0\u6709\u5BF9\u8C61\u4E2D\u4E0D\u5B58\u5728\u7684\u6210\u5458\uFF0C\u4F1A\u5C06\u65B0\u6210\u5458\u6DFB\u52A0\u5230\u8BE5\u5BF9\u8C61\u4E2D\u5E76\u4E0E\u65B0\u503C\u76F8\u5173\u8054\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5BF9\u4E8E\u73B0\u6709\u6570\u7EC4\u7ED3\u675F\u540E\u7684\u4F4D\u7F6E\uFF0C\u8BE5\u6570\u7EC4\u5C06\u6269\u5C55\u4E3A\u5305\u542B\u65B0\u503C\u3002\u5982\u679C\u73B0\u6709\u503C\u4E0D\u662F\u6570\u7EC4\uFF0C\u5219\u81EA\u52A8\u8F6C\u6362\u4E3A\u6570\u7EC4\uFF0C\u7136\u540E\u518D\u6269\u5C55\u4E3A\u5305\u542B\u65B0\u503C\u7684\u6570\u7EC4\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5426\u5219\uFF0C\u5BF9\u4E8E JSON \u4E2D\u4E0D\u5B58\u5728\u7684\u67D0\u4E2A\u8DEF\u5F84\u7684\u8DEF\u5F84\u503C\u5BF9\u5C06\u88AB\u5FFD\u7565\u4E14\u4E0D\u4F1A\u4EA7\u751F\u4EFB\u4F55\u5F71\u54CD\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"MySQL> select json_insert(null, null, null);\n+---------------------------------+\n| json_insert(NULL, NULL, 'NULL') |\n+---------------------------------+\n| NULL                            |\n+---------------------------------+\n\nMySQL> select json_insert('{\"k\": 1}', \"$.k\", 2);\n+---------------------------------------+\n| json_insert('{\\\"k\\\": 1}', '$.k', '2') |\n+---------------------------------------+\n| {\"k\":1}                               |\n+---------------------------------------+\n\nMySQL> select json_insert('{\"k\": 1}', \"$.j\", 2);\n+---------------------------------------+\n| json_insert('{\\\"k\\\": 1}', '$.j', '2') |\n+---------------------------------------+\n| {\"k\":1,\"j\":2}                         |\n+---------------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"JSON, json_insert"})]})}function a(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return o}});var t=s(667294);let i={},l=t.createContext(i);function o(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);