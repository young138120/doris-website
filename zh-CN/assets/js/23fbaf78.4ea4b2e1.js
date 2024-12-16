"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["866590"],{719594:function(n,e,o){o.r(e),o.d(e,{metadata:()=>l,contentTitle:()=>c,default:()=>a,assets:()=>t,toc:()=>d,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-functions/numeric-functions/floor","title":"FLOOR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/numeric-functions/floor.md","sourceDirName":"sql-manual/sql-functions/numeric-functions","slug":"/sql-manual/sql-functions/numeric-functions/floor","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/floor","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FLOOR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CEIL","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/ceil"},"next":{"title":"PMOD","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/numeric-functions/pmod"}}'),r=o("785893"),s=o("250065");let i={title:"FLOOR",language:"zh-CN"},c=void 0,t={},d=[{value:"floor",id:"floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"floor",children:"floor"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"BIGINT floor(DOUBLE x)"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679C\u4E0D\u6307\u5B9A",(0,r.jsx)(e.code,{children:"d"}),": \u8FD4\u56DE\u5C0F\u4E8E\u6216\u7B49\u4E8E",(0,r.jsx)(e.code,{children:"x"}),"\u7684\u6700\u5927\u6574\u6570\u503C, \u8FD9\u4E5F\u662F",(0,r.jsx)(e.strong,{children:"\u6700\u5E38\u89C1\u7684\u7528\u6CD5"}),".\n\u5426\u5219, \u6309\u7167\u4E0B\u9762\u89C4\u5219\u8FD4\u56DE\u6700\u5927\u7684\u5C0F\u4E8E\u6216\u8005\u7B49\u4E8E",(0,r.jsx)(e.code,{children:"x"}),"\u7684\u820D\u5165\u6570\u5B57:"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982 ",(0,r.jsx)(e.code,{children:"d"})," \u662F\u5B57\u9762\u91CF\uFF08\u4E0D\u662F\u5217\uFF09:",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.code,{children:"d"})," = 0: \u7B49\u540C\u4E8E\u6CA1\u6709 ",(0,r.jsx)(e.code,{children:"d"}),"\n",(0,r.jsx)(e.code,{children:"d"})," > 0 or ",(0,r.jsx)(e.code,{children:"d"})," < 0: \u820D\u5165\u6570\u662F ",(0,r.jsx)(e.code,{children:"1/(10^d)"})," \u7684\u500D\u6570\uFF0C\u5982\u679C ",(0,r.jsx)(e.code,{children:"1/(10^d)"})," \u4E0D\u7CBE\u786E\uFF0C\u5219\u4E3A\u76F8\u5E94\u6570\u636E\u7C7B\u578B\u7684\u6700\u63A5\u8FD1\u7684\u6570\u5B57\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:["\u5982\u679C ",(0,r.jsx)(e.code,{children:"d"})," \u4E3A\u4E00\u4E2A\u5217\uFF0C\u5E76\u4E14\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A Decimal \u7C7B\u578B\uFF0C\u90A3\u4E48\u7ED3\u679C Decimal \u4F1A\u8DDF\u5165\u53C2 Decimal \u5177\u6709\u76F8\u540C\u7684\u5C0F\u6570\u90E8\u5206\u957F\u5EA6\u3002"]}),"\n",(0,r.jsx)(e.admonition,{type:"tip",children:(0,r.jsxs)(e.p,{children:["\u8BE5\u51FD\u6570\u7684\u53E6\u4E00\u4E2A\u522B\u540D\u4E3A ",(0,r.jsx)(e.code,{children:"dfloor"}),"\u3002"]})}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select floor(1);\n+------------+\n| floor(1.0) |\n+------------+\n|          1 |\n+------------+\nmysql> select floor(2.4);\n+------------+\n| floor(2.4) |\n+------------+\n|          2 |\n+------------+\nmysql> select floor(-10.3);\n+--------------+\n| floor(-10.3) |\n+--------------+\n|          -11 |\n+--------------+\nmysql> select floor(123.45, 1), floor(123.45), floor(123.45, 0), floor(123.45, -1);\n+------------------+---------------+------------------+-------------------+\n| floor(123.45, 1) | floor(123.45) | floor(123.45, 0) | floor(123.45, -1) |\n+------------------+---------------+------------------+-------------------+\n|            123.4 |           123 |              123 |               120 |\n+------------------+---------------+------------------+-------------------+\nmysql> SELECT number\n    -> , floor(number * 2.5, number - 1) AS f_decimal_column\n    -> , floor(number * 2.5, 0) AS f_decimal_literal\n    -> , floor(cast(number * 2.5 AS DOUBLE), number - 1) AS f_double_column\n    -> , floor(cast(number * 2.5 AS DOUBLE), 0) AS f_double_literal\n    -> FROM test_enhanced_round\n    -> WHERE rid = 1;\n+--------+------------------+-------------------+-----------------+------------------+\n| number | f_decimal_column | f_decimal_literal | f_double_column | f_double_literal |\n+--------+------------------+-------------------+-----------------+------------------+\n|      1 |              2.0 |                 2 |               2 |                2 |\n+--------+------------------+-------------------+-----------------+------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"FLOOR, DFLOOR\n"})})]})}function a(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return c},a:function(){return i}});var l=o(667294);let r={},s=l.createContext(r);function i(n){let e=l.useContext(s);return l.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);