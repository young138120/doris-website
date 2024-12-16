"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["234467"],{344599:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv4-to-ipv6","title":"IPV4_TO_IPV6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv4-to-ipv6","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IPV4_TO_IPV6","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV4_NUM_TO_STRING","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv4-num-to-string"},"next":{"title":"IPV4_STRING_TO_NUM","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/ip-functions/ipv4-string-to-num"}}'),s=i("785893"),o=i("250065");let l={title:"IPV4_TO_IPV6",language:"zh-CN"},r=void 0,c={},a=[{value:"IPV4_TO_IPV6",id:"ipv4_to_ipv6",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ipv4_to_ipv6",children:"IPV4_TO_IPV6"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_TO_IPV6"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"IPV6 IPV4_TO_IPV6(IPV4 ipv4)"})}),"\n",(0,s.jsx)(e.p,{children:"\u63A5\u53D7\u4E00\u4E2A\u7C7B\u578B\u4E3A IPv4 \u7684\u5730\u5740\uFF0C\u8FD4\u56DE\u76F8\u5E94 IPv6 \u7684\u5F62\u5F0F\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql [(none)]>select ipv6_num_to_string(ipv4_to_ipv6(to_ipv4('192.168.0.1')));\n+----------------------+\n| '::ffff:192.168.0.1' |\n+----------------------+\n| ::ffff:192.168.0.1   |\n+----------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_TO_IPV6, IP"})]})}function p(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return r},a:function(){return l}});var t=i(667294);let s={},o=t.createContext(s);function l(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);