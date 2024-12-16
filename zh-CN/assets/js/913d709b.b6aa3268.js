"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["450036"],{833267:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>_,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default","title":"IPV4_STRING_TO_NUM_OR_DEFAULT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-default","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"IPV4_STRING_TO_NUM_OR_DEFAULT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_STRING_TO_NUM","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num"},"next":{"title":"IPV4_STRING_TO_NUM_OR_NULL","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null"}}'),i=t("785893"),r=t("250065");let l={title:"IPV4_STRING_TO_NUM_OR_DEFAULT",language:"zh-CN"},o=void 0,_={},c=[{value:"IPV4_STRING_TO_NUM_OR_DEFAULT",id:"ipv4_string_to_num_or_default",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"ipv4_string_to_num_or_default",children:"IPV4_STRING_TO_NUM_OR_DEFAULT"}),"\n",(0,i.jsx)(e.p,{children:"IPV4_STRING_TO_NUM_OR_DEFAULT"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"BIGINT IPV4_STRING_TO_NUM_OR_DEFAULT(VARCHAR ipv4_string)"})}),"\n",(0,i.jsx)(e.p,{children:"\u83B7\u53D6\u5305\u542B IPv4 \u5730\u5740\u7684\u5B57\u7B26\u4E32\uFF0C\u683C\u5F0F\u4E3A A.B.C.D\uFF08\u70B9\u5206\u9694\u7684\u5341\u8FDB\u5236\u6570\u5B57\uFF09\u3002\u8FD4\u56DE\u4E00\u4E2A BIGINT \u6570\u5B57\uFF0C\u8868\u793A\u76F8\u5E94\u7684\u5927\u7AEF IPv4 \u5730\u5740\u3002"}),"\n",(0,i.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u4E0D\u662F\u6709\u6548\u7684 IPv4 \u5730\u5740\u6216\u8005 ",(0,i.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5C06\u8FD4\u56DE ",(0,i.jsx)(e.code,{children:"0"})]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> select ipv4_string_to_num_or_default('192.168.0.1'); \n+----------------------------------------------+ \n| ipv4_string_to_num_or_default('192.168.0.1') | \n+----------------------------------------------+ \n| 3232235521                                   | \n+----------------------------------------------+ \n1 row in set (0.01 sec)\n\nmysql> select str, ipv4_string_to_num_or_default(str) from ipv4_str; \n+-----------------+------------------------------------+ \n|str              | ipv4_string_to_num_or_default(str) | \n+-----------------+------------------------------------+ \n| 0.0.0.0         | 0                                  | \n| 127.0.0.1       | 2130706433                         | \n| 255.255.255.255 | 4294967295                         | \n| invalid         | 0                                  | \n+-----------------+------------------------------------+ \n4 rows in set (0.01 sec)\n\nmysql> select addr_src, ipv4_string_to_num_or_default(addr_src) from ipv4_string_test where addr_src is null;\n+----------+-----------------------------------------+\n| addr_src | ipv4_string_to_num_or_default(addr_src) |\n+----------+-----------------------------------------+\n| NULL     |                                       0 |\n+----------+-----------------------------------------+\n1 row in set (0.09 sec)\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(e.p,{children:"IPV4_STRING_TO_NUM_OR_DEFAULT, IP"})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);