"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["795451"],{428791:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>p,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range","title":"IPV4_CIDR_TO_RANGE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range","permalink":"/docs/sql-manual/sql-functions/ip-functions/ipv4-cidr-to-range","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"IPV4_CIDR_TO_RANGE","language":"en"},"sidebar":"docs","previous":{"title":"IS_IPV4_MAPPED","permalink":"/docs/sql-manual/sql-functions/ip-functions/is-ipv4-mapped"},"next":{"title":"IPV6_CIDR_TO_RANGE","permalink":"/docs/sql-manual/sql-functions/ip-functions/ipv6-cidr-to-range"}}'),s=i("785893"),r=i("250065");let o={title:"IPV4_CIDR_TO_RANGE",language:"en"},a=void 0,l={},c=[{value:"IPV4_CIDR_TO_RANGE",id:"ipv4_cidr_to_range",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"ipv4_cidr_to_range",children:"IPV4_CIDR_TO_RANGE"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_CIDR_TO_RANGE"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"STRUCT<IPV4, IPV4> IPV4_CIDR_TO_RANGE(IPV4 ip_v4, INT16 cidr)"})}),"\n",(0,s.jsx)(e.p,{children:"Receive an IPv4 and an Int16 value containing CIDR. Returns a struct that contains two IPv4 fields representing the lower range (min) and higher range (max) of the subnet, respectively."}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'mysql> SELECT ipv4_cidr_to_range(ipv4_string_to_num(\'192.168.5.2\'), 16);\n+-----------------------------------------------------------+\n| ipv4_cidr_to_range(ipv4_string_to_num(\'192.168.5.2\'), 16) |\n+-----------------------------------------------------------+\n| {"min": "192.168.0.0", "max": "192.168.255.255"}          |\n+-----------------------------------------------------------+\n\nmysql> SELECT ipv4_cidr_to_range(to_ipv4(\'192.168.5.2\'), 16);\n+--------------------------------------------------+\n| ipv4_cidr_to_range(to_ipv4(\'192.168.5.2\'), 16)   |\n+--------------------------------------------------+\n| {"min": "192.168.0.0", "max": "192.168.255.255"} |\n+--------------------------------------------------+\n\nmysql> SELECT ipv4_cidr_to_range(NULL, NULL);\n+--------------------------------+\n| ipv4_cidr_to_range(NULL, NULL) |\n+--------------------------------+\n| NULL                           |\n+--------------------------------+\n'})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IPV4_CIDR_TO_RANGE, IP"})]})}function p(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return o}});var t=i(667294);let s={},r=t.createContext(s);function o(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:o(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);