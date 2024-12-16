"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["798706"],{736183:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>d,default:()=>t,assets:()=>a,toc:()=>h,frontMatter:()=>c});var l=JSON.parse('{"id":"admin-manual/cluster-management/upgrade","title":"\u96C6\u7FA4\u5347\u7EA7","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/cluster-management/upgrade.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/upgrade","permalink":"/zh-CN/docs/3.0/admin-manual/cluster-management/upgrade","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u96C6\u7FA4\u5347\u7EA7","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Meta Service API \u53C2\u8003","permalink":"/zh-CN/docs/3.0/compute-storage-decoupled/meta-service-api"},"next":{"title":"\u5F39\u6027\u6269\u7F29\u5BB9","permalink":"/zh-CN/docs/3.0/admin-manual/cluster-management/elastic-expansion"}}'),i=s("785893"),r=s("250065");let c={title:"\u96C6\u7FA4\u5347\u7EA7",language:"zh-CN"},d=void 0,a={},h=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"Doris \u7248\u672C\u8BF4\u660E",id:"doris-\u7248\u672C\u8BF4\u660E",level:2},{value:"\u5347\u7EA7\u6B65\u9AA4",id:"\u5347\u7EA7\u6B65\u9AA4",level:2},{value:"\u5347\u7EA7\u8BF4\u660E",id:"\u5347\u7EA7\u8BF4\u660E",level:3},{value:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8",id:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8",level:3},{value:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C",id:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C",level:3},{value:"\u5347\u7EA7\u6D41\u7A0B",id:"\u5347\u7EA7\u6D41\u7A0B",level:3}];function o(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,i.jsxs)(n.p,{children:["\u5347\u7EA7\u8BF7\u4F7F\u7528\u672C\u7AE0\u8282\u4E2D\u63A8\u8350\u7684\u6B65\u9AA4\u8FDB\u884C\u96C6\u7FA4\u5347\u7EA7\uFF0CDoris \u96C6\u7FA4\u5347\u7EA7\u53EF\u4F7F\u7528",(0,i.jsx)(n.strong,{children:"\u6EDA\u52A8\u5347\u7EA7"}),"\u7684\u65B9\u5F0F\u8FDB\u884C\u5347\u7EA7\uFF0C\u65E0\u9700\u96C6\u7FA4\u8282\u70B9\u5168\u90E8\u505C\u673A\u5347\u7EA7\uFF0C\u6781\u5927\u7A0B\u5EA6\u4E0A\u964D\u4F4E\u5BF9\u4E0A\u5C42\u5E94\u7528\u7684\u5F71\u54CD\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"doris-\u7248\u672C\u8BF4\u660E",children:"Doris \u7248\u672C\u8BF4\u660E"}),"\n",(0,i.jsx)(n.p,{children:"Doris \u5347\u7EA7\u8BF7\u9075\u5B88\u4E0D\u8981\u8DE8\u4E24\u4E2A\u4E8C\u4F4D\u7248\u672C\u5347\u7EA7\u7684\u539F\u5219\uFF0C\u4F9D\u6B21\u5F80\u540E\u5347\u7EA7\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6BD4\u5982\u4ECE 0.15.x \u5347\u7EA7\u5230 2.0.x \u7248\u672C\uFF0C\u5219\u5EFA\u8BAE\u5148\u5347\u7EA7\u81F3 1.1 \u6700\u65B0\u7248\u672C\uFF0C\u7136\u540E\u5347\u7EA7\u5230\u6700\u65B0\u7684 1.2 \u7248\u672C\uFF0C\u6700\u540E\u5347\u7EA7\u5230\u6700\u65B0\u7684 2.0 \u7248\u672C\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5347\u7EA7\u6B65\u9AA4",children:"\u5347\u7EA7\u6B65\u9AA4"}),"\n",(0,i.jsx)(n.h3,{id:"\u5347\u7EA7\u8BF4\u660E",children:"\u5347\u7EA7\u8BF4\u660E"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u5347\u7EA7\u8FC7\u7A0B\u4E2D\uFF0C\u7531\u4E8E Doris \u7684 RoutineLoad\u3001Flink-Doris-Connector\u3001Spark-Doris-Connector \u90FD\u5DF2\u5728\u4EE3\u7801\u4E2D\u5B9E\u73B0\u4E86\u91CD\u8BD5\u673A\u5236\uFF0C\u6240\u4EE5\u5728\u591A BE \u8282\u70B9\u7684\u96C6\u7FA4\u4E2D\uFF0C\u6EDA\u52A8\u5347\u7EA7\u4E0D\u4F1A\u5BFC\u81F4\u4EFB\u52A1\u5931\u8D25\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"StreamLoad \u4EFB\u52A1\u9700\u8981\u60A8\u5728\u81EA\u5DF1\u7684\u4EE3\u7801\u4E2D\u5B9E\u73B0\u91CD\u8BD5\u673A\u5236\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u4EFB\u52A1\u5931\u8D25\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u96C6\u7FA4\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u529F\u80FD\u5728\u5355\u6B21\u5347\u7EA7\u4EFB\u52A1\u4E2D\u52A1\u5FC5\u8981\u524D\u7F6E\u5173\u95ED\u548C\u7ED3\u675F\u540E\u6253\u5F00\uFF0C\u65E0\u8BBA\u60A8\u96C6\u7FA4\u8282\u70B9\u662F\u5426\u5168\u90E8\u5347\u7EA7\u5B8C\u6210\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8",children:"\u5347\u7EA7\u6D41\u7A0B\u6982\u89C8"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5143\u6570\u636E\u5907\u4EFD"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5173\u95ED\u96C6\u7FA4\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u529F\u80FD"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u517C\u5BB9\u6027\u6D4B\u8BD5"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7 BE"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7 FE"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6253\u5F00\u96C6\u7FA4\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u529F\u80FD"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C",children:"\u5347\u7EA7\u524D\u7F6E\u5DE5\u4F5C"}),"\n",(0,i.jsx)(n.p,{children:"\u8BF7\u6309\u5347\u7EA7\u6D41\u7A0B\u987A\u6B21\u6267\u884C\u5347\u7EA7"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"01 \u5143\u6570\u636E\u5907\u4EFD\uFF08\u91CD\u8981\uFF09"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["\u5C06 FE-Master \u8282\u70B9\u7684 ",(0,i.jsx)(n.code,{children:"doris-meta"})," \u76EE\u5F55\u8FDB\u884C\u5B8C\u6574\u5907\u4EFD\uFF01"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"02 \u5173\u95ED\u96C6\u7FA4\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u529F\u80FD"})}),"\n",(0,i.jsx)(n.p,{children:"\u5347\u7EA7\u8FC7\u7A0B\u4E2D\u4F1A\u6709\u8282\u70B9\u91CD\u542F\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F1A\u89E6\u53D1\u4E0D\u5FC5\u8981\u7684\u96C6\u7FA4\u5747\u8861\u548C\u526F\u672C\u4FEE\u590D\u903B\u8F91\uFF0C\u5148\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5173\u95ED\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'admin set frontend config("disable_balance" = "true");\nadmin set frontend config("disable_colocate_balance" = "true");\nadmin set frontend config("disable_tablet_scheduler" = "true");\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"03 \u517C\u5BB9\u6027\u6D4B\u8BD5"})}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u5143\u6570\u636E\u517C\u5BB9\u975E\u5E38\u91CD\u8981\uFF0C\u5982\u679C\u56E0\u4E3A\u5143\u6570\u636E\u4E0D\u517C\u5BB9\u5BFC\u81F4\u7684\u5347\u7EA7\u5931\u8D25\uFF0C\u90A3\u53EF\u80FD\u4F1A\u5BFC\u81F4\u6570\u636E\u4E22\u5931\uFF01\u5EFA\u8BAE\u6BCF\u6B21\u5347\u7EA7\u524D\u90FD\u8FDB\u884C\u5143\u6570\u636E\u517C\u5BB9\u6027\u6D4B\u8BD5\uFF01"})})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"FE \u517C\u5BB9\u6027\u6D4B\u8BD5"}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u91CD\u8981"})}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5EFA\u8BAE\u5728\u81EA\u5DF1\u672C\u5730\u7684\u5F00\u53D1\u673A\uFF0C\u6216\u8005 BE \u8282\u70B9\u505A FE \u517C\u5BB9\u6027\u6D4B\u8BD5\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4E0D\u5EFA\u8BAE\u5728 Follower \u6216\u8005 Observer \u8282\u70B9\u4E0A\u6D4B\u8BD5\uFF0C\u907F\u514D\u51FA\u73B0\u94FE\u63A5\u5F02\u5E38"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5982\u679C\u4E00\u5B9A\u5728 Follower \u6216\u8005 Observer \u8282\u70B9\u4E0A\uFF0C\u9700\u8981\u505C\u6B62\u5DF2\u542F\u52A8\u7684 FE \u8FDB\u7A0B"}),"\n"]}),"\n"]})]}),"\n",(0,i.jsx)(n.p,{children:"a. \u5355\u72EC\u4F7F\u7528\u65B0\u7248\u672C\u90E8\u7F72\u4E00\u4E2A\u6D4B\u8BD5\u7528\u7684 FE \u8FDB\u7A0B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon\n"})}),"\n",(0,i.jsx)(n.p,{children:"b. \u4FEE\u6539\u6D4B\u8BD5\u7528\u7684 FE \u7684\u914D\u7F6E\u6587\u4EF6 fe.conf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vi ${DORIS_NEW_HOME}/conf/fe.conf\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4FEE\u6539\u4EE5\u4E0B\u7AEF\u53E3\u4FE1\u606F\uFF0C\u5C06",(0,i.jsx)(n.strong,{children:"\u6240\u6709\u7AEF\u53E3"}),"\u8BBE\u7F6E\u4E3A",(0,i.jsx)(n.strong,{children:"\u4E0E\u7EBF\u4E0A\u4E0D\u540C"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"...\nhttp_port = 18030\nrpc_port = 19020\nquery_port = 19030\narrow_flight_sql_port = 19040\nedit_log_port = 19010\n...\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4FDD\u5B58\u5E76\u9000\u51FA"}),"\n",(0,i.jsx)(n.p,{children:"c. \u4FEE\u6539 fe.conf"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5728 fe.conf \u6DFB\u52A0 ClusterID \u914D\u7F6E"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "cluster_id=123456" >> ${DORIS_NEW_HOME}/conf/fe.conf\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6DFB\u52A0\u5143\u6570\u636E\u6545\u969C\u6062\u590D\u914D\u7F6E\uFF08",(0,i.jsx)(n.strong,{children:"2.0.2 + \u7248\u672C\u65E0\u9700\u8FDB\u884C\u6B64\u64CD\u4F5C"}),"\uFF09"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "metadata_failure_recovery=true" >> ${DORIS_NEW_HOME}/conf/fe.conf\n'})}),"\n",(0,i.jsx)(n.p,{children:"d. \u62F7\u8D1D\u7EBF\u4E0A\u73AF\u5883 Master FE \u7684\u5143\u6570\u636E\u76EE\u5F55 doris-meta \u5230\u6D4B\u8BD5\u73AF\u5883"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cp ${DORIS_OLD_HOME}/fe/doris-meta/* ${DORIS_NEW_HOME}/fe/doris-meta\n"})}),"\n",(0,i.jsx)(n.p,{children:"e. \u5C06\u62F7\u8D1D\u5230\u6D4B\u8BD5\u73AF\u5883\u4E2D\u7684 VERSION \u6587\u4EF6\u4E2D\u7684 cluster_id \u4FEE\u6539\u4E3A 123456\uFF08\u5373\u4E0E\u7B2C 3 \u6B65\u4E2D\u76F8\u540C\uFF09"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"vi ${DORIS_NEW_HOME}/fe/doris-meta/image/VERSION\nclusterId=123456\n"})}),"\n",(0,i.jsxs)(n.p,{children:["f. \u5728\u6D4B\u8BD5\u73AF\u5883\u4E2D\uFF0C\u8FD0\u884C\u542F\u52A8 FE\uFF08",(0,i.jsx)(n.strong,{children:"\u8BF7\u6309\u7167\u7248\u672C\u9009\u62E9\u542F\u52A8 FE \u7684\u65B9\u5F0F"}),"\uFF09"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"2.0.2(\u5305\u542B 2.0.2) + \u7248\u672C"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon --metadata_failure_recovery\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"2.0.1\uFF08\u5305\u542B 2.0.1\uFF09\u4EE5\u524D\u7684\u7248\u672C"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon \n   ```\n\ng. \u901A\u8FC7 FE \u65E5\u5FD7 fe.log \u89C2\u5BDF\u662F\u5426\u542F\u52A8\u6210\u529F\n\n```shell\ntail -f ${DORIS_NEW_HOME}/log/fe.log\n"})}),"\n",(0,i.jsx)(n.p,{children:"h. \u5982\u679C\u542F\u52A8\u6210\u529F\uFF0C\u5219\u4EE3\u8868\u517C\u5BB9\u6027\u6CA1\u6709\u95EE\u9898\uFF0C\u505C\u6B62\u6D4B\u8BD5\u73AF\u5883\u7684 FE \u8FDB\u7A0B\uFF0C\u51C6\u5907\u5347\u7EA7"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sh ${DORIS_NEW_HOME}/bin/stop_fe.sh\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"BE \u517C\u5BB9\u6027\u6D4B\u8BD5"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u5229\u7528\u7070\u5EA6\u5347\u7EA7\u65B9\u6848\uFF0C\u5148\u5347\u7EA7\u5355\u4E2A BE\uFF0C\u65E0\u5F02\u5E38\u548C\u62A5\u9519\u60C5\u51B5\u4E0B\u5373\u89C6\u4E3A\u517C\u5BB9\u6027\u6B63\u5E38\uFF0C\u53EF\u6267\u884C\u540E\u7EED\u5347\u7EA7\u52A8\u4F5C"}),"\n",(0,i.jsx)(n.h3,{id:"\u5347\u7EA7\u6D41\u7A0B",children:"\u5347\u7EA7\u6D41\u7A0B"}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"\u5148\u5347\u7EA7 BE\uFF0C\u540E\u5347\u7EA7 FE"}),(0,i.jsxs)(n.p,{children:["\u4E00\u822C\u800C\u8A00\uFF0CDoris \u53EA\u9700\u8981\u5347\u7EA7 FE \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"/bin"})," \u548C ",(0,i.jsx)(n.code,{children:"/lib"})," \u4EE5\u53CA BE \u76EE\u5F55\u4E0B\u7684  ",(0,i.jsx)(n.code,{children:"/bin"})," \u548C ",(0,i.jsx)(n.code,{children:"/lib"})]}),(0,i.jsxs)(n.p,{children:["\u5728 2.0.2 \u53CA\u4E4B\u540E\u7684\u7248\u672C\uFF0CFE \u548C BE \u90E8\u7F72\u8DEF\u5F84\u4E0B\u65B0\u589E\u4E86 ",(0,i.jsx)(n.code,{children:"custom_lib/"})," \u76EE\u5F55\uFF08\u5982\u6CA1\u6709\u53EF\u4EE5\u624B\u52A8\u521B\u5EFA\uFF09\u3002",(0,i.jsx)(n.code,{children:"custom_lib/"})," \u76EE\u5F55\u7528\u4E8E\u5B58\u653E\u4E00\u4E9B\u7528\u6237\u81EA\u5B9A\u4E49\u7684\u7B2C\u4E09\u65B9 jar \u5305\uFF0C\u5982 ",(0,i.jsx)(n.code,{children:"hadoop-lzo-*.jar"}),"\uFF0C",(0,i.jsx)(n.code,{children:"orai18n.jar"})," \u7B49\u3002"]}),(0,i.jsx)(n.p,{children:"\u8FD9\u4E2A\u76EE\u5F55\u5728\u5347\u7EA7\u65F6\u4E0D\u9700\u8981\u66FF\u6362\u3002"}),(0,i.jsxs)(n.p,{children:["\u4F46\u662F\u5728\u5927\u7248\u672C\u5347\u7EA7\u65F6\uFF0C\u53EF\u80FD\u4F1A\u6709\u65B0\u7684\u7279\u6027\u589E\u52A0\u6216\u8005\u8001\u529F\u80FD\u7684\u91CD\u6784\uFF0C\u8FD9\u4E9B\u4FEE\u6539\u53EF\u80FD\u4F1A\u9700\u8981\u5347\u7EA7\u65F6",(0,i.jsx)(n.strong,{children:"\u66FF\u6362/\u65B0\u589E"}),"\u66F4\u591A\u7684\u76EE\u5F55\u6765\u4FDD\u8BC1\u6240\u6709\u65B0\u529F\u80FD\u7684\u53EF\u7528\u6027\uFF0C\u8BF7\u5927\u7248\u672C\u5347\u7EA7\u65F6\u4ED4\u7EC6\u5173\u6CE8\u8BE5\u7248\u672C\u7684 Release-Note\uFF0C\u4EE5\u514D\u51FA\u73B0\u5347\u7EA7\u6545\u969C"]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"04 \u5347\u7EA7 BE"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u4E3A\u4E86\u4FDD\u8BC1\u60A8\u7684\u6570\u636E\u5B89\u5168\uFF0C\u8BF7\u4F7F\u7528 3 \u526F\u672C\u6765\u5B58\u50A8\u60A8\u7684\u6570\u636E\uFF0C\u4EE5\u907F\u514D\u5347\u7EA7\u8BEF\u64CD\u4F5C\u6216\u5931\u8D25\u5BFC\u81F4\u7684\u6570\u636E\u4E22\u5931\u95EE\u9898"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u591A\u526F\u672C\u7684\u524D\u63D0\u4E0B\uFF0C\u9009\u62E9\u4E00\u53F0 BE \u8282\u70B9\u505C\u6B62\u8FD0\u884C\uFF0C\u8FDB\u884C\u7070\u5EA6\u5347\u7EA7"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/be/bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u91CD\u547D\u540D BE \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"})," \u76EE\u5F55"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mv ${DORIS_OLD_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin_back\nmv ${DORIS_OLD_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib_back\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u590D\u5236\u65B0\u7248\u672C\u7684  ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"})," \u76EE\u5F55\u5230\u539F BE \u76EE\u5F55\u4E0B"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cp -r ${DORIS_NEW_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin\ncp -r ${DORIS_NEW_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u8BE5 BE \u8282\u70B9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/be/bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u94FE\u63A5\u96C6\u7FA4\uFF0C\u67E5\u770B\u8BE5\u8282\u70B9\u4FE1\u606F"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mysql",children:"show backends\\G\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u82E5\u8BE5 BE \u8282\u70B9 ",(0,i.jsx)(n.code,{children:"alive"})," \u72B6\u6001\u4E3A ",(0,i.jsx)(n.code,{children:"true"}),"\uFF0C\u4E14 ",(0,i.jsx)(n.code,{children:"Version"})," \u503C\u4E3A\u65B0\u7248\u672C\uFF0C\u5219\u8BE5\u8282\u70B9\u5347\u7EA7\u6210\u529F"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4F9D\u6B21\u5B8C\u6210\u5176\u4ED6 BE \u8282\u70B9\u5347\u7EA7"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"05 \u5347\u7EA7 FE"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"\u5148\u5347\u7EA7\u975E Master \u8282\u70B9\uFF0C\u540E\u5347\u7EA7 Master \u8282\u70B9\u3002"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u591A\u4E2A FE \u8282\u70B9\u60C5\u51B5\u4E0B\uFF0C\u9009\u62E9\u4E00\u4E2A\u975E Master \u8282\u70B9\u8FDB\u884C\u5347\u7EA7\uFF0C\u5148\u505C\u6B62\u8FD0\u884C"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/fe/bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u91CD\u547D\u540D FE \u76EE\u5F55\u4E0B\u7684 ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/mysql_ssl_default_certificate"})," \u76EE\u5F55"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mv ${DORIS_OLD_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin_back\nmv ${DORIS_OLD_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib_back\nmv ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate_back\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u590D\u5236\u65B0\u7248\u672C\u7684  ",(0,i.jsx)(n.code,{children:"/bin"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/lib"}),"\uFF0C",(0,i.jsx)(n.code,{children:"/mysql_ssl_default_certificate"})," \u76EE\u5F55\u5230\u539F FE \u76EE\u5F55\u4E0B"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cp -r ${DORIS_NEW_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin\ncp -r ${DORIS_NEW_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib\ncp -r ${DORIS_NEW_HOME}/fe/mysql_ssl_default_certificate ${DORIS_OLD_HOME}/fe/mysql_ssl_default_certificate\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u542F\u52A8\u8BE5 FE \u8282\u70B9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u94FE\u63A5\u96C6\u7FA4\uFF0C\u67E5\u770B\u8BE5\u8282\u70B9\u4FE1\u606F"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mysql",children:"show frontends\\G\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u82E5\u8BE5 FE \u8282\u70B9 ",(0,i.jsx)(n.code,{children:"alive"})," \u72B6\u6001\u4E3A ",(0,i.jsx)(n.code,{children:"true"}),"\uFF0C\u4E14 ",(0,i.jsx)(n.code,{children:"Version"})," \u503C\u4E3A\u65B0\u7248\u672C\uFF0C\u5219\u8BE5\u8282\u70B9\u5347\u7EA7\u6210\u529F"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u4F9D\u6B21\u5B8C\u6210\u5176\u4ED6 FE \u8282\u70B9\u5347\u7EA7\uFF0C",(0,i.jsx)(n.strong,{children:"\u6700\u540E\u5B8C\u6210 Master \u8282\u70B9\u7684\u5347\u7EA7"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"06 \u6253\u5F00\u96C6\u7FA4\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u529F\u80FD"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5347\u7EA7\u5B8C\u6210\uFF0C\u5E76\u4E14\u6240\u6709 BE \u8282\u70B9\u72B6\u6001\u53D8\u4E3A ",(0,i.jsx)(n.code,{children:"Alive"})," \u540E\uFF0C\u6253\u5F00\u96C6\u7FA4\u526F\u672C\u4FEE\u590D\u548C\u5747\u8861\u529F\u80FD\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'admin set frontend config("disable_balance" = "false");\nadmin set frontend config("disable_colocate_balance" = "false");\nadmin set frontend config("disable_tablet_scheduler" = "false");\n'})})]})}function t(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return c}});var l=s(667294);let i={},r=l.createContext(i);function c(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);