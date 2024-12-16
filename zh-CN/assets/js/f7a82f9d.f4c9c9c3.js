"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["396907"],{667195:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>a});var s=JSON.parse('{"id":"admin-manual/resource-admin/use-workload-remote-io-limit","title":"\u4F7F\u7528Workload Group\u7BA1\u7406\u8FDC\u7A0BIO","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/resource-admin/use-workload-remote-io-limit.md","sourceDirName":"admin-manual/resource-admin","slug":"/admin-manual/resource-admin/use-workload-remote-io-limit","permalink":"/zh-CN/docs/dev/admin-manual/resource-admin/use-workload-remote-io-limit","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4F7F\u7528Workload Group\u7BA1\u7406\u8FDC\u7A0BIO","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528Workload Group\u7BA1\u7406\u672C\u5730IO","permalink":"/zh-CN/docs/dev/admin-manual/resource-admin/use-workload-local-io-limit"},"next":{"title":"SQL \u62E6\u622A","permalink":"/zh-CN/docs/dev/admin-manual/query-admin/sql-interception"}}'),o=r("785893"),t=r("250065");let a={title:"\u4F7F\u7528Workload Group\u7BA1\u7406\u8FDC\u7A0BIO",language:"zh-CN"},i=void 0,c={},l=[{value:"\u6D4B\u8BD5\u8FDC\u7A0BIO\u9650\u5236",id:"\u6D4B\u8BD5\u8FDC\u7A0Bio\u9650\u5236",level:2},{value:"\u6D4B\u8BD5\u73AF\u5883",id:"\u6D4B\u8BD5\u73AF\u5883",level:3},{value:"\u6D4B\u8BD5\u4E0D\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684IO",id:"\u6D4B\u8BD5\u4E0D\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684io",level:3},{value:"\u6D4B\u8BD5\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684IO",id:"\u6D4B\u8BD5\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684io",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"BrokerLoad\u548CS3Load \u662F\u5E38\u7528\u7684\u5927\u6279\u91CF\u6570\u636E\u5BFC\u5165\u65B9\u5F0F\uFF0C\u7528\u6237\u53EF\u4EE5\u628A\u6570\u636E\u5148\u4E0A\u4F20\u5230HDFS\u6216\u8005S3\uFF0C\u7136\u540E\u901A\u8FC7Brokerload\u548CS3Load \u5BF9\u6570\u636E\u8FDB\u884C\u5E76\u884C\u5BFC\u5165\u3002 Doris\u4E3A\u4E86\u52A0\u5FEB\u5BFC\u5165\u901F\u5EA6\uFF0C\u4F1A\u4F7F\u7528\u591A\u7EBF\u7A0B\u5E76\u884C\u7684\u65B9\u5F0F\u4ECEHDFS/S3\u62C9\u53D6\u6570\u636E\uFF0C\u6B64\u65F6\u4F1A\u5BF9HDFS/S3 \u4EA7\u751F\u5DE8\u5927\u7684\u538B\u529B\uFF0C\u4F1A\u5BFC\u81F4HDFS/S3\u4E0A\u8FD0\u884C\u7684\u522B\u7684\u4F5C\u4E1A\u4E0D\u7A33\u5B9A\u3002\n\u53EF\u4EE5\u901A\u8FC7Workload Group \u8FDC\u7A0BIO\u7684\u9650\u5236\u529F\u80FD\u6765\u9650\u5236\u5BFC\u5165\u8FC7\u7A0B\u4E2D\u5BF9HDFS/S3\u7684\u5E26\u5BBD\uFF0C\u964D\u4F4E\u5BF9\u5176\u4ED6\u4E1A\u52A1\u7684\u5F71\u54CD\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u6D4B\u8BD5\u8FDC\u7A0Bio\u9650\u5236",children:"\u6D4B\u8BD5\u8FDC\u7A0BIO\u9650\u5236"}),"\n",(0,o.jsx)(n.h3,{id:"\u6D4B\u8BD5\u73AF\u5883",children:"\u6D4B\u8BD5\u73AF\u5883"}),"\n",(0,o.jsx)(n.p,{children:"1FE\uFF0C1BE\u90E8\u7F72\u5728\u540C\u4E00\u53F0\u673A\u5668\uFF0C\u914D\u7F6E\u4E3A16\u683864G\u5185\u5B58\u3002\u6D4B\u8BD5\u6570\u636E\u4E3Aclickbench\u6570\u636E\u96C6\uFF0C\u6D4B\u8BD5\u524D\u9700\u8981\u628A\u6570\u636E\u96C6\u4E0A\u4F20\u5230S3\u4E0A\u3002\u8003\u8651\u5230\u4E0A\u4F20\u65F6\u95F4\u7684\u95EE\u9898\uFF0C\u6211\u4EEC\u53EA\u53D6\u5176\u4E2D\u76841\u5343\u4E07\u884C\u6570\u636E\u4E0A\u4F20\uFF0C\u7136\u540E\u4F7F\u7528tvf\u7684\u529F\u80FD\u67E5\u8BE2s3\u7684\u6570\u636E\u3002"}),"\n",(0,o.jsx)(n.p,{children:"\u4E0A\u4F20\u6210\u529F\u540E\u53EF\u4EE5\u4F7F\u7528\u547D\u4EE4\u67E5\u770BSchema\u4FE1\u606F\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'// \u67E5\u770Bschema\nDESC FUNCTION s3 (\n    "URI" = "https://bucketname/1kw.tsv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="true"\n);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"\u6D4B\u8BD5\u4E0D\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684io",children:"\u6D4B\u8BD5\u4E0D\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684IO"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u53D1\u8D77\u5355\u5E76\u53D1\u6D4B\u8BD5\uFF0C\u5168\u8868\u626B\u63CFclickbench\u8868\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'// \u8BBE\u7F6E\u53EAscan\u6570\u636E\uFF0C\u4E0D\u8FD4\u56DE\u7ED3\u679C\nset dry_run_query = true;\n\n// \u4F7F\u7528tvf\u67E5\u8BE2s3\u7684\u6570\u636E\nSELECT * FROM s3(\n    "URI" = "https://bucketname/1kw.tsv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="true"\n);\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u4F7F\u7528\u7CFB\u7EDF\u8868\u67E5\u770B\u6B64\u65F6\u7684\u8FDC\u7A0BIO\u541E\u5410\u3002\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A\u67E5\u8BE2\u7684\u8FDC\u7A0BIO\u541E\u5410\u4E3A837M\u6BCF\u79D2\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8FD9\u91CC\u7684\u5B9E\u9645IO\u541E\u5410\u53D7\u73AF\u5883\u5F71\u54CD\u8F83\u5927\uFF0C\u5982\u679CBE\u6240\u5728\u7684\u673A\u5668\u8FDE\u63A5\u5916\u90E8\u5B58\u50A8\u7684\u5E26\u5BBD\u6BD4\u8F83\u4F4E\uFF0C\u90A3\u4E48\u53EF\u80FD\u5B9E\u9645\u7684\u541E\u5410\u4F1A\u5C0F\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MySQL [(none)]> select cast(REMOTE_SCAN_BYTES_PER_SECOND/1024/1024 as int) as read_mb from information_schema.workload_group_resource_usage;\n+---------+\n| read_mb |\n+---------+\n|     837 |\n+---------+\n1 row in set (0.104 sec)\n\nMySQL [(none)]> select cast(REMOTE_SCAN_BYTES_PER_SECOND/1024/1024 as int) as read_mb from information_schema.workload_group_resource_usage;\n+---------+\n| read_mb |\n+---------+\n|     867 |\n+---------+\n1 row in set (0.070 sec)\n\nMySQL [(none)]> select cast(REMOTE_SCAN_BYTES_PER_SECOND/1024/1024 as int) as read_mb from information_schema.workload_group_resource_usage;\n+---------+\n| read_mb |\n+---------+\n|     867 |\n+---------+\n1 row in set (0.186 sec)\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u4F7F\u7528sar(sar -n DEV 1 3600)\u547D\u4EE4\u67E5\u770B\u673A\u5668\u7684\u7F51\u7EDC\u5E26\u5BBD\uFF0C\u53EF\u4EE5\u770B\u5230\u673A\u5668\u7EA7\u522B\u6700\u5927\u7F51\u7EDC\u5E26\u5BBD\u4E3A1033M\u6BCF\u79D2\u3002\n\u8F93\u51FA\u7684\u7B2C\u4E00\u5217\u4E3A\u5F53\u524D\u673A\u5668\u67D0\u4E2A\u7F51\u5361\u6BCF\u79D2\u63A5\u6536\u7684\u5B57\u8282\u6570\uFF0C\u5355\u4F4D\u4E3AKB\u6BCF\u79D2\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"use workload group rio",src:r(716653).Z+"",width:"960",height:"436"})}),"\n",(0,o.jsx)(n.h3,{id:"\u6D4B\u8BD5\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684io",children:"\u6D4B\u8BD5\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684IO"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"\u4FEE\u6539Workload Group\u7684\u914D\u7F6E\uFF0C\u9650\u5236\u8FDC\u7A0B\u8BFB\u7684IO\u541E\u5410\u4E3A100M\u6BCF\u79D2\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"alter workload group normal properties('remote_read_bytes_per_second'='104857600');\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"\u53D1\u8D77\u5355\u5E76\u53D1\u626B\u5168\u8868\u7684\u67E5\u8BE2\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'// \u8BBE\u7F6E\u53EAscan\u6570\u636E\uFF0C\u4E0D\u8FD4\u56DE\u7ED3\u679C\nset dry_run_query = true;\n\n// \u4F7F\u7528tvf\u67E5\u8BE2s3\u7684\u6570\u636E\nSELECT * FROM s3(\n    "URI" = "https://bucketname/1kw.tsv",\n    "s3.access_key"= "ak",\n    "s3.secret_key" = "sk",\n    "format" = "csv",\n    "use_path_style"="true"\n);\n'})}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"\u4F7F\u7528\u7CFB\u7EDF\u8868\u67E5\u770B\u6B64\u65F6\u7684\u8FDC\u7A0B\u8BFBIO\u541E\u5410\uFF0C\u6B64\u65F6\u7684IO\u541E\u5410\u5728100M\u5DE6\u53F3\uFF0C\u4F1A\u6709\u4E00\u5B9A\u7684\u6CE2\u52A8\uFF0C\u8FD9\u4E2A\u6CE2\u52A8\u662F\u53D7\u76EE\u524D\u7B97\u6CD5\u8BBE\u8BA1\u7684\u5F71\u54CD\uFF0C\u901A\u5E38\u4F1A\u6709\u4E00\u4E2A\u9AD8\u5CF0\uFF0C\u4F46\u4E0D\u4F1A\u6301\u7EED\u5F88\u957F\u65F6\u95F4\uFF0C\u5C5E\u4E8E\u6B63\u5E38\u60C5\u51B5\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MySQL [(none)]> select cast(REMOTE_SCAN_BYTES_PER_SECOND/1024/1024 as int) as read_mb from information_schema.workload_group_resource_usage;\n+---------+\n| read_mb |\n+---------+\n|      56 |\n+---------+\n1 row in set (0.010 sec)\n\nMySQL [(none)]> select cast(REMOTE_SCAN_BYTES_PER_SECOND/1024/1024 as int) as read_mb from information_schema.workload_group_resource_usage;\n+---------+\n| read_mb |\n+---------+\n|     131 |\n+---------+\n1 row in set (0.009 sec)\n\nMySQL [(none)]> select cast(REMOTE_SCAN_BYTES_PER_SECOND/1024/1024 as int) as read_mb from information_schema.workload_group_resource_usage;\n+---------+\n| read_mb |\n+---------+\n|     111 |\n+---------+\n1 row in set (0.009 sec)\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsx)(n.li,{children:"\u4F7F\u7528sar\u547D\u4EE4\uFF08sar -n DEV 1 3600\uFF09\u67E5\u770B\u76EE\u524D\u7684\u7F51\u5361\u63A5\u6536\u6D41\u91CF\uFF0C\u7B2C\u4E00\u5217\u4E3A\u6BCF\u79D2\u63A5\u6536\u7684\u6570\u636E\u91CF\uFF0C\u53EF\u4EE5\u770B\u5230\u6700\u5927\u503C\u53D8\u6210\u4E86207M\u6BCF\u79D2\uFF0C\u8BF4\u660E\u8BFBIO\u7684\u9650\u5236\u662F\u751F\u6548\u7684\uFF0C\u4F46\u662F\u7531\u4E8Esar\u547D\u4EE4\u770B\u5230\u7684\u662F\u673A\u5668\u7EA7\u522B\u7684\u6D41\u91CF\uFF0C\u56E0\u6B64\u8981\u6BD4Doris\u7EDF\u8BA1\u5230\u7684\u4F1A\u5927\u4E00\u4E9B\u3002"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"use workload group rio",src:r(674967).Z+"",width:"864",height:"472"})})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},716653:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/use_wg_rio_1-e3ae321d5e709bb0ba21b9572d2bce1f.png"},674967:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/use_wg_rio_2-7511c9afedf43b931909b18e529f00ea.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let o={},t=s.createContext(o);function a(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);