"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["45884"],{188054:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>u,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv6-num-to-string","title":"IPV6_NUM_TO_STRING","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/ip-functions/ipv6-num-to-string.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv6-num-to-string","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-num-to-string","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IPV6_NUM_TO_STRING","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_STRING_TO_NUM_OR_NULL","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv4-string-to-num-or-null"},"next":{"title":"IPV6_STRING_TO_NUM","permalink":"/zh-CN/docs/sql-manual/sql-functions/ip-functions/ipv6-string-to-num"}}'),s=i("785893"),l=i("250065");let o={title:"IPV6_NUM_TO_STRING",language:"zh-CN"},r=void 0,c={},u=[{value:"IPV6_NUM_TO_STRING",id:"ipv6_num_to_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ipv6_num_to_string",children:"IPV6_NUM_TO_STRING"}),"\n",(0,s.jsx)(e.p,{children:"IPV6_NUM_TO_STRING"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"VARCHAR IPV6_NUM_TO_STRING(VARCHAR ipv6_num)"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"VARCHAR INET6_NTOA(VARCHAR ipv6_num)"})}),"\n",(0,s.jsx)(e.p,{children:"\u63A5\u53D7\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u4E8C\u8FDB\u5236\u683C\u5F0F\u7684IPv6\u5730\u5740\u3002\u4EE5\u6587\u672C\u683C\u5F0F\u8FD4\u56DE\u6B64\u5730\u5740\u7684\u5B57\u7B26\u4E32\u3002\nIPv6\u6620\u5C04\u7684IPv4\u5730\u5740\u4EE5::ffff:111.222.33\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679C\u8F93\u5165\u5B57\u7B26\u4E32\u4E0D\u662F\u6709\u6548\u7684 IPv6 \u5730\u5740\u7684\u4E8C\u8FDB\u5236\u7F16\u7801\uFF0C\u5C06\u8FD4\u56DE ",(0,s.jsx)(e.code,{children:"NULL"}),"\u3002\u8BE5\u51FD\u6570\u6709\u4E00\u4E2A\u522B\u540D ",(0,s.jsx)(e.code,{children:"INET6_NTOA"}),"\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> select ipv6_num_to_string(unhex('2A0206B8000000000000000000000011')) as addr;\n+--------------+\n| addr         |\n+--------------+\n| 2a02:6b8::11 |\n+--------------+\n1 row in set (0.01 sec)\n\nmysql> select ipv6_num_to_string(\"-23vno12i34nlfwlsj\");\n+------------------------------------------+\n| ipv6_num_to_string('-23vno12i34nlfwlsj') |\n+------------------------------------------+\n| NULL                                     |\n+------------------------------------------+\n1 row in set (0.14 sec)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IPV6_NUM_TO_STRING, INET6_NTOA, IP"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return o}});var t=i(667294);let s={},l=t.createContext(s);function o(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);