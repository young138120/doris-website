"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["335209"],{330363:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>o,assets:()=>T,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-data-types/aggregate/QUANTILE-STATE","title":"QUANTILE_STATE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-data-types/aggregate/QUANTILE-STATE.md","sourceDirName":"sql-manual/sql-data-types/aggregate","slug":"/sql-manual/sql-data-types/aggregate/QUANTILE-STATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/aggregate/QUANTILE-STATE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"QUANTILE_STATE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/aggregate/BITMAP"},"next":{"title":"AGG_STATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/aggregate/AGG-STATE"}}'),a=t("785893"),l=t("250065");let r={title:"QUANTILE_STATE",language:"zh-CN"},i=void 0,T={},d=[{value:"QUANTILE_STATE",id:"quantile_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"notice",id:"notice",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"quantile_state",children:"QUANTILE_STATE"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"QUANTILE_STATE\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["\u5728 2.0 \u4E2D\u6211\u4EEC\u652F\u6301\u4E86",(0,a.jsx)(n.a,{href:"AGG_STATE.md",children:"agg_state"}),"\u529F\u80FD\uFF0C\u63A8\u8350\u4F7F\u7528 agg_state quantile_union(quantile_state not null) \u6765\u4EE3\u66FF\u672C\u7C7B\u578B\u3002"]})}),"\n",(0,a.jsx)(n.p,{children:"QUANTILE_STATE \u4E0D\u80FD\u4F5C\u4E3A key \u5217\u4F7F\u7528\uFF0C\u652F\u6301\u5728 Aggregate \u6A21\u578B\u3001Duplicate \u6A21\u578B\u548C Unique \u6A21\u578B\u7684\u8868\u4E2D\u4F7F\u7528\u3002\u5728 Aggregate \u6A21\u578B\u8868\u4E2D\u4F7F\u7528\u65F6\uFF0C\u5EFA\u8868\u65F6\u914D\u5408\u7684\u805A\u5408\u7C7B\u578B\u4E3A QUANTILE_UNION\u3002\n\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u548C\u9ED8\u8BA4\u503C\u3002\u957F\u5EA6\u6839\u636E\u6570\u636E\u7684\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236\u3002\n\u5E76\u4E14 QUANTILE_STATE \u5217\u53EA\u80FD\u901A\u8FC7\u914D\u5957\u7684 QUANTILE_PERCENT\u3001QUANTILE_UNION\u3001TO_QUANTILE_STATE \u7B49\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u6216\u4F7F\u7528\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["QUANTILE_STATE \u662F\u4E00\u79CD\u8BA1\u7B97\u5206\u4F4D\u6570\u8FD1\u4F3C\u503C\u7684\u7C7B\u578B\uFF0C\u5728\u5BFC\u5165\u65F6\u4F1A\u5BF9\u76F8\u540C\u7684 key\uFF0C\u4E0D\u540C value \u8FDB\u884C\u9884\u805A\u5408\uFF0C\u5F53 value \u6570\u91CF\u4E0D\u8D85\u8FC7 2048 \u65F6\u91C7\u7528\u660E\u7EC6\u8BB0\u5F55\u6240\u6709\u6570\u636E\uFF0C\u5F53 value \u6570\u91CF\u5927\u4E8E 2048 \u65F6\u91C7\u7528 ",(0,a.jsx)(n.a,{href:"https://github.com/tdunning/t-digest/blob/main/docs/t-digest-paper/histo.pdf",children:"TDigest"})," \u7B97\u6CD5\uFF0C\u5BF9\u6570\u636E\u8FDB\u884C\u805A\u5408\uFF08\u805A\u7C7B\uFF09\u4FDD\u5B58\u805A\u7C7B\u540E\u7684\u8D28\u5FC3\u70B9\u3002"]}),"\n",(0,a.jsx)(n.p,{children:"\u76F8\u5173\u51FD\u6570\uFF1A"}),"\n",(0,a.jsx)(n.p,{children:"QUANTILE_UNION(QUANTILE_STATE):\n\u6B64\u51FD\u6570\u4E3A\u805A\u5408\u51FD\u6570\uFF0C\u7528\u4E8E\u5C06\u4E0D\u540C\u7684\u5206\u4F4D\u6570\u8BA1\u7B97\u4E2D\u95F4\u7ED3\u679C\u8FDB\u884C\u805A\u5408\u64CD\u4F5C\u3002\u6B64\u51FD\u6570\u8FD4\u56DE\u7684\u7ED3\u679C\u4ECD\u662F QUANTILE_STATE"}),"\n",(0,a.jsx)(n.p,{children:"TO_QUANTILE_STATE(DOUBLE raw_data [,FLOAT compression]):\n\u6B64\u51FD\u6570\u5C06\u6570\u503C\u7C7B\u578B\u8F6C\u5316\u6210 QUANTILE_STATE \u7C7B\u578B\ncompression \u53C2\u6570\u662F\u53EF\u9009\u9879\uFF0C\u53EF\u8BBE\u7F6E\u8303\u56F4\u662F[2048, 10000]\uFF0C\u503C\u8D8A\u5927\uFF0C\u540E\u7EED\u5206\u4F4D\u6570\u8FD1\u4F3C\u8BA1\u7B97\u7684\u7CBE\u5EA6\u8D8A\u9AD8\uFF0C\u5185\u5B58\u6D88\u8017\u8D8A\u5927\uFF0C\u8BA1\u7B97\u8017\u65F6\u8D8A\u957F\u3002\ncompression \u53C2\u6570\u672A\u6307\u5B9A\u6216\u8BBE\u7F6E\u7684\u503C\u5728[2048, 10000]\u8303\u56F4\u5916\uFF0C\u4EE5 2048 \u7684\u9ED8\u8BA4\u503C\u8FD0\u884C"}),"\n",(0,a.jsx)(n.p,{children:"QUANTILE_PERCENT(QUANTILE_STATE, percent):\n\u6B64\u51FD\u6570\u5C06\u5206\u4F4D\u6570\u8BA1\u7B97\u7684\u4E2D\u95F4\u7ED3\u679C\u53D8\u91CF\uFF08QUANTILE_STATE\uFF09\u8F6C\u5316\u4E3A\u5177\u4F53\u7684\u5206\u4F4D\u6570\u6570\u503C"}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"select QUANTILE_PERCENT(QUANTILE_UNION(v1), 0.5) from test_table group by k1, k2, k3;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"notice",children:"notice"}),"\n",(0,a.jsx)(n.p,{children:"\u4F7F\u7528\u524D\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u6253\u5F00 QUANTILE_STATE \u5F00\u5173\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'$ mysql-client > admin set frontend config("enable_quantile_state_type"="true");\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u8FD9\u79CD\u65B9\u5F0F\u4E0B QUANTILE_STATE \u5F00\u5173\u4F1A\u5728 Fe \u8FDB\u7A0B\u91CD\u542F\u540E\u91CD\u7F6E\uFF0C\u6216\u8005\u5728 fe.conf \u4E2D\u6DFB\u52A0",(0,a.jsx)(n.code,{children:"enable_quantile_state_type=true"}),"\u914D\u7F6E\u9879\u53EF\u6C38\u4E45\u751F\u6548\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"QUANTILE_STATE, QUANTILE_UNION, TO_QUANTILE_STATE, QUANTILE_PERCENT\n"})})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},l=s.createContext(a);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);