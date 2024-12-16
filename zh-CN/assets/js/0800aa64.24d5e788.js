"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["878271"],{444872:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>a,assets:()=>r,toc:()=>u,frontMatter:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/to-ipv6","title":"TO_IPV6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/ip-functions/to-ipv6.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/to-ipv6","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TO_IPV6","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TO_IPV4_OR_NULL","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv4-or-null"},"next":{"title":"TO_IPV6_OR_DEFAULT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/ip-functions/to-ipv6-or-default"}}'),s=t("785893"),l=t("250065");let o={title:"TO_IPV6",language:"zh-CN"},c=void 0,r={},u=[{value:"TO_IPV6",id:"to_ipv6",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"to_ipv6",children:"TO_IPV6"}),"\n",(0,s.jsx)(e.p,{children:"TO_IPV6"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"IPV6 TO_IPV6(STRING ipv6_str)"})}),"\n",(0,s.jsx)(e.p,{children:"\u8BE5\u51FD\u6570\u7C7B\u4F3Cipv6_string_to_num\uFF0C\u8F93\u5165IPv6\u5730\u5740\u7684\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u5E76\u8FD4\u56DEIPv6\u7C7B\u578B\u7684\u503C\u3002\n\u8BE5\u503C\u7684\u4E8C\u8FDB\u5236\u5F62\u5F0F\u7B49\u4E8Eipv6_string_to_num\u51FD\u6570\u8FD4\u56DE\u503C\u7684\u4E8C\u8FDB\u5236\u5F62\u5F0F\u3002\n\u5982\u679CIPv6\u5730\u5740\u4E3A\u975E\u6CD5\u683C\u5F0F\uFF0C\u5219\u629B\u51FA\u5F02\u5E38\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,s.jsxs)(e.p,{children:["\u5165\u53C2 ",(0,s.jsx)(e.code,{children:"ipv6_str"})," \u4E0D\u80FD\u4E3A ",(0,s.jsx)(e.code,{children:"NULL"}),"\uFF0C\u82E5\u4E3A ",(0,s.jsx)(e.code,{children:"NULL"}),"\uFF0C\u5219\u629B\u51FA\u5F02\u5E38\u3002"]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> select to_ipv6('::');\n+---------------+\n| to_ipv6('::') |\n+---------------+\n| ::            |\n+---------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"TO_IPV6, IP"})]})}function a(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return o}});var i=t(667294);let s={},l=i.createContext(s);function o(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);