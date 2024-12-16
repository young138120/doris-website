"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["145640"],{762251:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>d,default:()=>m,assets:()=>a,toc:()=>c,frontMatter:()=>s});var i=JSON.parse('{"id":"table-design/tiered-storage/diff-disk-medium-migration","title":"SSD \u548C HDD \u5C42\u7EA7\u5B58\u50A8","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/tiered-storage/diff-disk-medium-migration.md","sourceDirName":"table-design/tiered-storage","slug":"/table-design/tiered-storage/diff-disk-medium-migration","permalink":"/zh-CN/docs/table-design/tiered-storage/diff-disk-medium-migration","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SSD \u548C HDD \u5C42\u7EA7\u5B58\u50A8","language":"zh-CN"},"sidebar":"docs","previous":{"title":"N-Gram \u7D22\u5F15","permalink":"/zh-CN/docs/table-design/index/ngram-bloomfilter-index"},"next":{"title":"\u8FDC\u7A0B\u5B58\u50A8","permalink":"/zh-CN/docs/table-design/tiered-storage/remote-storage"}}'),o=t("785893"),r=t("250065");let s={title:"SSD \u548C HDD \u5C42\u7EA7\u5B58\u50A8",language:"zh-CN"},d=void 0,a={},c=[];function l(e){let n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u53EF\u4EE5\u914D\u7F6E\u52A8\u6001\u5206\u533A\u53C2\u6570\uFF0C\u5728\u4E0D\u540C\u7684\u78C1\u76D8\u7C7B\u578B\u4E0A\u521B\u5EFA\u52A8\u6001\u5206\u533A\uFF0CDoris \u4F1A\u6839\u636E\u914D\u7F6E\u53C2\u6570\u5C06\u51B7\u6570\u636E\u4ECESSD\u8FC1\u79FB\u5230HDD\u3002\u8FD9\u6837\u7684\u505A\u6CD5\u5728\u964D\u4F4E\u6210\u672C\u7684\u540C\u65F6\uFF0C\u4E5F\u63D0\u5347\u4E86Doris\u7684\u8BFB\u5199\u6027\u80FD\u3002"}),"\n",(0,o.jsxs)(n.p,{children:["\u52A8\u6001\u5206\u533A\u53C2\u6570\u53EF\u4EE5\u53C2\u8003",(0,o.jsx)(n.a,{href:"../../table-design/data-partitioning/dynamic-partitioning",children:"\u6570\u636E\u5212\u5206-\u52A8\u6001\u5206\u533A"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"dynamic_partition.hot_partition_num"})}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"\u6CE8\u610F\uFF0Cdynamic_partition.storage_medium \u5FC5\u987B\u8BBE\u7F6E\u4E3AHDD\uFF0C\u5426\u5219 hot_partition_num \u5C06\u4E0D\u4F1A\u751F\u6548"})}),"\n",(0,o.jsxs)(n.p,{children:["\u6307\u5B9A\u6700\u65B0\u7684\u591A\u5C11\u4E2A\u5206\u533A\u4E3A\u70ED\u5206\u533A\u3002\u5BF9\u4E8E\u70ED\u5206\u533A\uFF0C\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u8BBE\u7F6E\u5176 ",(0,o.jsx)(n.code,{children:"storage_medium"})," \u53C2\u6570\u4E3A SSD\uFF0C\u5E76\u4E14\u8BBE\u7F6E ",(0,o.jsx)(n.code,{children:"storage_cooldown_time"}),"\u3002"]}),"\n",(0,o.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A\u82E5\u5B58\u50A8\u8DEF\u5F84\u4E0B\u6CA1\u6709 SSD \u78C1\u76D8\u8DEF\u5F84\uFF0C\u914D\u7F6E\u8BE5\u53C2\u6570\u4F1A\u5BFC\u81F4\u52A8\u6001\u5206\u533A\u521B\u5EFA\u5931\u8D25\u3002"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"hot_partition_num"})," \u8868\u793A\u5F53\u524D\u65F6\u95F4\u6240\u5728\u5206\u533A\u53CA\u4E4B\u524D\u7684 hot_partition_num - 1 \u4E2A\u5206\u533A\uFF0C\u4EE5\u53CA\u6240\u6709\u672A\u6765\u7684\u5206\u533A\uFF0C\u5C06\u88AB\u5B58\u50A8\u5728 SSD \u4ECB\u8D28\u4E0A\u3002"]}),"\n",(0,o.jsxs)(n.p,{children:["\u6211\u4EEC\u4E3E\u4F8B\u8BF4\u660E\u3002\u5047\u8BBE\u4ECA\u5929\u662F 2021-05-20\uFF0C\u6309\u5929\u5206\u533A\uFF0C\u52A8\u6001\u5206\u533A\u7684\u5C5E\u6027\u8BBE\u7F6E\u4E3A\uFF1Ahot_partition_num=2, end=3, start=-3\u3002\u5219\u7CFB\u7EDF\u4F1A\u81EA\u52A8\u521B\u5EFA\u4EE5\u4E0B\u5206\u533A\uFF0C\u5E76\u4E14\u8BBE\u7F6E ",(0,o.jsx)(n.code,{children:"storage_medium"})," \u548C ",(0,o.jsx)(n.code,{children:"storage_cooldown_time"})," \u53C2\u6570\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-Plain",children:'p20210517\uFF1A["2021-05-17", "2021-05-18") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210518\uFF1A["2021-05-18", "2021-05-19") storage_medium=HDD storage_cooldown_time=9999-12-31 23:59:59\np20210519\uFF1A["2021-05-19", "2021-05-20") storage_medium=SSD storage_cooldown_time=2021-05-21 00:00:00\np20210520\uFF1A["2021-05-20", "2021-05-21") storage_medium=SSD storage_cooldown_time=2021-05-22 00:00:00\np20210521\uFF1A["2021-05-21", "2021-05-22") storage_medium=SSD storage_cooldown_time=2021-05-23 00:00:00\np20210522\uFF1A["2021-05-22", "2021-05-23") storage_medium=SSD storage_cooldown_time=2021-05-24 00:00:00\np20210523\uFF1A["2021-05-23", "2021-05-24") storage_medium=SSD storage_cooldown_time=2021-05-25 00:00:00\n'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"dynamic_partition.storage_medium"})}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"\u6307\u5B9A\u521B\u5EFA\u7684\u52A8\u6001\u5206\u533A\u7684\u9ED8\u8BA4\u5B58\u50A8\u4ECB\u8D28\u3002\u9ED8\u8BA4\u662F HDD\uFF0C\u53EF\u9009\u62E9 SSD\u3002"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsxs)(n.p,{children:["\u6CE8\u610F\uFF0C\u5F53\u8BBE\u7F6E\u4E3A SSD \u65F6\uFF0C",(0,o.jsx)(n.code,{children:"hot_partition_num"})," \u5C5E\u6027\u5C06\u4E0D\u518D\u751F\u6548\uFF0C\u6240\u6709\u5206\u533A\u5C06\u9ED8\u8BA4\u4E3A SSD \u5B58\u50A8\u4ECB\u8D28\u5E76\u4E14\u51B7\u5374\u65F6\u95F4\u4E3A 9999-12-31 23:59:59\u3002"]})})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var i=t(667294);let o={},r=i.createContext(o);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);