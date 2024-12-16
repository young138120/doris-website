"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["264389"],{597888:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>t,toc:()=>l,frontMatter:()=>c});var a=JSON.parse('{"id":"install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-cg","title":"\u914D\u7F6E\u8BA1\u7B97\u7EC4","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-cg.md","sourceDirName":"install/cluster-deployment/k8s-deploy/compute-storage-decoupled","slug":"/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-cg","permalink":"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-cg","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u914D\u7F6E\u8BA1\u7B97\u7EC4","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u914D\u7F6E\u90E8\u7F72 FE","permalink":"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/config-fe"},"next":{"title":"Doris on AWS","permalink":"/zh-CN/docs/3.0/install/cluster-deployment/doris-on-aws"}}'),o=s("785893"),i=s("250065");let c={title:"\u914D\u7F6E\u8BA1\u7B97\u7EC4",language:"zh-CN"},r=void 0,t={},l=[{value:"\u6307\u5B9A\u8BA1\u7B97\u7EC4\u540D\u79F0",id:"\u6307\u5B9A\u8BA1\u7B97\u7EC4\u540D\u79F0",level:2},{value:"\u914D\u7F6E\u591A\u8BA1\u7B97\u7EC4",id:"\u914D\u7F6E\u591A\u8BA1\u7B97\u7EC4",level:2},{value:"\u914D\u7F6E\u670D\u52A1\u8BA1\u7B97\u8D44\u6E90",id:"\u914D\u7F6E\u670D\u52A1\u8BA1\u7B97\u8D44\u6E90",level:2},{value:"\u914D\u7F6E Cache \u6301\u4E45\u5316",id:"\u914D\u7F6E-cache-\u6301\u4E45\u5316",level:2}];function d(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"\u5B58\u7B97\u5206\u79BB\u96C6\u7FA4\u4E2D\uFF0C\u8BA1\u7B97\u7EC4\uFF08Compute Group\uFF09\u8D1F\u8D23\u6570\u636E\u5BFC\u5165\u5E76\u7F13\u5B58\u5BF9\u8C61\u5B58\u50A8\u4E2D\u7684\u6570\u636E\u4EE5\u63D0\u9AD8\u67E5\u8BE2\u6548\u7387\uFF0C\u8BA1\u7B97\u7EC4\u4E4B\u95F4\u76F8\u4E92\u9694\u79BB\u3002"}),"\n",(0,o.jsx)(n.h2,{id:"\u6307\u5B9A\u8BA1\u7B97\u7EC4\u540D\u79F0",children:"\u6307\u5B9A\u8BA1\u7B97\u7EC4\u540D\u79F0"}),"\n",(0,o.jsxs)(n.p,{children:["\u8BA1\u7B97\u7EC4\u5FC5\u987B\u8BBE\u5B9A\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u552F\u4E00\u6807\u8BC6\u7B26\u4E00\u65E6\u8BBE\u5B9A\u5C31\u4E0D\u80FD\u66F4\u6539\uFF0C\u521D\u59CB\u5316\u65F6\u552F\u4E00\u6807\u8BC6\u7B26\u4F1A\u4F5C\u4E3A\u8BA1\u7B97\u7EC4\u540D\u79F0\uFF0C\u4F5C\u4E3A\u8282\u70B9\u4E00\u4E2A\u7279\u6027\u6CE8\u518C\u5230\u5B58\u7B97\u5206\u79BB\u96C6\u7FA4\u4E2D\u3002\u4EE5\u4E0B\u5C55\u793A\u4E86\u4E00\u4E2A\u540D\u79F0\u4E3A ",(0,o.jsx)(n.code,{children:"cg1"}),"\uFF0C\u526F\u672C\u6570\u4E3A 1 \u7684\u8BA1\u7B97\u7EC4\u914D\u7F6E\u793A\u4F8B\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"spec:\n  computeGroups:\n  - uniqueId: cg1\n    image: ${beImage}\n    replicas: 1\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"${beImage}"})," \u4E3A\u90E8\u7F72 BE \u670D\u52A1\u7684\u955C\u50CF\u5730\u5740\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u914D\u7F6E\u591A\u8BA1\u7B97\u7EC4",children:"\u914D\u7F6E\u591A\u8BA1\u7B97\u7EC4"}),"\n",(0,o.jsxs)(n.p,{children:["\u4E00\u4E2A ",(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," \u8D44\u6E90\u652F\u6301\u90E8\u7F72\u591A\u5957\u8BA1\u7B97\u7EC4\uFF0C\u6BCF\u5957\u8BA1\u7B97\u7EC4\u4E4B\u95F4\u76F8\u4E92\u72EC\u7ACB\u3002\u4EE5\u4E0B\u5C55\u793A\u4E86\u90E8\u7F72\u540D\u79F0\u4E3A ",(0,o.jsx)(n.code,{children:"cg1"})," \u548C ",(0,o.jsx)(n.code,{children:"cg2"})," \u4E24\u5957\u8BA1\u7B97\u7EC4\u7684\u914D\u7F6E\u793A\u4F8B\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"spec:\n  computeGroups:\n  - uniqueId: cg1\n    image: ${beImage}\n    replicas: 3\n  - uniqueId: cg2\n    image: ${beImage}\n    replicas: 2\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5176\u4E2D\uFF0C\u540D\u79F0\u4E3A ",(0,o.jsx)(n.code,{children:"cg1"})," \u7684\u8BA1\u7B97\u7EC4\u526F\u672C\u6570\u4E3A 3\uFF0C\u540D\u79F0\u4E3A ",(0,o.jsx)(n.code,{children:"cg2"})," \u7684\u8BA1\u7B97\u7EC4\u526F\u672C\u6570\u4E3A 2\u3002${beImage} \u8868\u793A\u90E8\u7F72\u7684 BE \u670D\u52A1\u4F7F\u7528\u7684\u955C\u50CF\u5730\u5740\u3002"]}),"\n",(0,o.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,o.jsx)(n.p,{children:"\u591A\u5957\u8BA1\u7B97\u7EC4\u4F7F\u7528\u7684 image \u5C3D\u91CF\u4FDD\u6301\u4E00\u81F4\u3002"})}),"\n",(0,o.jsx)(n.h2,{id:"\u914D\u7F6E\u670D\u52A1\u8BA1\u7B97\u8D44\u6E90",children:"\u914D\u7F6E\u670D\u52A1\u8BA1\u7B97\u8D44\u6E90"}),"\n",(0,o.jsxs)(n.p,{children:["\u5B58\u7B97\u5206\u79BB\u9ED8\u8BA4\u90E8\u7F72\u4E2D\u6CA1\u6709\u9650\u5B9A\u6BCF\u4E2A BE \u670D\u52A1\u53EF\u4F7F\u7528\u7684\u8BA1\u7B97\u8D44\u6E90\u91CF\uFF0C",(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," \u4F7F\u7528 Kubernetes \u7684",(0,o.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits",children:"resources.requests \u548C resources.limits"})," \u6307\u5B9A CPU \u548C Memory \u4F7F\u7528\u91CF\u3002\u914D\u7F6E ",(0,o.jsx)(n.code,{children:"cg1"})," \u8BA1\u7B97\u7EC4\u6BCF\u4E2A BE \u53EF\u4F7F\u7528 8c 8Gi \u8D44\u6E90\u91CF\u914D\u7F6E\u793A\u4F8B\u5982\u4E0B\uFF1A"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"spec:\n  computeGroups:\n  - uniqueId: cg1\n    requests:\n      cpu: 8\n      memory: 8Gi\n    limits:\n      cpu: 8\n      memory: 8Gi\n"})}),"\n",(0,o.jsxs)(n.p,{children:["\u5C06\u4E0A\u8FF0\u914D\u7F6E\u66F4\u65B0\u5230\u9700\u8981\u90E8\u7F72\u7684",(0,o.jsxs)(n.a,{href:"/zh-CN/docs/3.0/install/cluster-deployment/k8s-deploy/compute-storage-decoupled/install-quickstart#%E7%AC%AC3%E6%AD%A5%E9%83%A8%E7%BD%B2%E5%AD%98%E7%AE%97%E5%88%86%E7%A6%BB%E9%9B%86%E7%BE%A4",children:[(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," \u8D44\u6E90"]}),"\u4E2D\u3002"]}),"\n",(0,o.jsx)(n.h2,{id:"\u914D\u7F6E-cache-\u6301\u4E45\u5316",children:"\u914D\u7F6E Cache \u6301\u4E45\u5316"}),"\n",(0,o.jsxs)(n.p,{children:["\u9ED8\u8BA4\u90E8\u7F72\u4E2D\uFF0CBE \u670D\u52A1\u4F7F\u7528 Kubernetes \u7684 ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/concepts/storage/volumes/#emptydir",children:"EmptyDir"})," \u4F5C\u4E3A\u670D\u52A1\u7684\u7F13\u5B58\u3002",(0,o.jsx)(n.code,{children:"EmptyDir"})," \u6A21\u5F0F\u662F\u975E\u6301\u4E45\u5316\u5B58\u50A8\u6A21\u5F0F\uFF0C\u670D\u52A1\u91CD\u542F\u540E\u7F13\u5B58\u7684\u6570\u636E\u4F1A\u4E22\u5931\u76F8\u5E94\u67E5\u8BE2\u4F1A\u6548\u7387\u4F1A\u964D\u4F4E\u3002\u914D\u7F6E\u6301\u4E45\u5316\u5B58\u50A8\u6D41\u7A0B\u5982\u4E0B\uFF1A"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\u81EA\u5B9A\u4E49\u5305\u542B\u542F\u52A8\u4FE1\u606F\u7684 ConfigMap",(0,o.jsx)(n.br,{}),"\n\u9ED8\u8BA4\u90E8\u7F72\u4E2D\uFF0C\u6BCF\u4E2A\u8BA1\u7B97\u7EC4\u7684 BE \u670D\u52A1\u4F7F\u7528\u955C\u50CF\u5185\u7684\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6\u542F\u52A8\uFF0C\u6301\u4E45\u5316\u7F13\u5B58\u6570\u636E\u9700\u8981\u81EA\u5B9A\u4E49\u542F\u52A8\u914D\u7F6E\u3002Doris Operator \u4F7F\u7528 Kubernetes \u7684 ConfigMap \u6765\u6302\u8F7D\u542F\u52A8\u914D\u7F6E\u6587\u4EF6\u3002\u4EE5\u4E0B\u5C55\u793A\u4E86\u4E00\u4E2A BE \u670D\u52A1\u53EF\u4F7F\u7528\u7684 ConfigMap \u793A\u4F8B\uFF1A"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: be-configmap\n  labels:\n    app.kubernetes.io/component: be\ndata:\n  be.conf: |\n    # For jdk 17, this JAVA_OPTS will be used as default JVM options\n    JAVA_OPTS_FOR_JDK_17="-Xmx1024m -DlogPath=$LOG_DIR/jni.log -Xlog:gc*:$LOG_DIR/be.gc.log.$CUR_DATE:time,uptime:filecount=10,filesize=50M -Djavax.security.auth.useSubjectCredsOnly=false -Dsun.security.krb5.debug=true -Dsun.java.command=DorisBE -XX:-CriticalJNINatives -XX:+IgnoreUnrecognizedVMOptions --add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.invoke=ALL-UNNAMED --add-opens=java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-opens=java.base/java.net=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED --add-opens=java.base/java.util=ALL-UNNAMED --add-opens=java.base/java.util.concurrent=ALL-UNNAMED --add-opens=java.base/java.util.concurrent.atomic=ALL-UNNAMED --add-opens=java.base/sun.nio.ch=ALL-UNNAMED --add-opens=java.base/sun.nio.cs=ALL-UNNAMED --add-opens=java.base/sun.security.action=ALL-UNNAMED --add-opens=java.base/sun.util.calendar=ALL-UNNAMED --add-opens=java.security.jgss/sun.security.krb5=ALL-UNNAMED --add-opens=java.management/sun.management=ALL-UNNAMED"\n    file_cache_path = [{"path":"/mnt/disk1/doris_cloud/file_cache","total_size":107374182400,"query_limit":107374182400}]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["\u5B58\u7B97\u5206\u79BB\u96C6\u7FA4 BE \u670D\u52A1\u7684\u542F\u52A8\u914D\u7F6E\u5FC5\u987B\u8BBE\u7F6E ",(0,o.jsx)(n.code,{children:"file_cache_path"}),"\uFF0C\u683C\u5F0F\u8BF7\u53C2\u8003",(0,o.jsxs)(n.a,{href:"/zh-CN/docs/3.0/compute-storage-decoupled/compilation-and-deployment#541-%E9%85%8D%E7%BD%AE-beconf",children:["\u5B58\u7B97\u5206\u79BB\u914D\u7F6E ",(0,o.jsx)(n.code,{children:"be.conf"})]})," \u7AE0\u8282\u3002\u4EE5\u4E0A\u793A\u4F8B\u4E2D\uFF0C\u8BBE\u7F6E\u4E86\u4E00\u4E2A\u76EE\u5F55\u4E3A ",(0,o.jsx)(n.code,{children:"/mnt/disk1/doris_cloud/file_cache"})," \u7684\u6301\u4E45\u5316\u7F13\u5B58\uFF0C\u8BBE\u7F6E\u53EF\u4F7F\u7528\u6301\u4E45\u5316\u603B\u5BB9\u91CF\u5927\u5C0F\u4E3A 100Gi\uFF0C\u67E5\u8BE2\u7684\u7F13\u5B58\u53EF\u4F7F\u7528\u7684\u603B\u5BB9\u91CF\u5927\u5C0F\u4E5F\u4E3A 100Gi\u3002"]}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsxs)(n.li,{children:["\u90E8\u7F72 ConfigMap",(0,o.jsx)(n.br,{}),"\n\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\uFF0C\u5C06\u5305\u542B\u81EA\u5B9A\u4E49\u542F\u52A8\u914D\u7F6E\u4FE1\u606F\u7684 ConfigMap \u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u90E8\u7F72\u5230 Kubernetes \u96C6\u7FA4\u4E2D\uFF1A"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"kubectl -n ${namespace} -f ${beConfigMapFileName}.yaml \n"})}),"\n",(0,o.jsxs)(n.p,{children:["${namespace} \u4E3A ",(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," \u90E8\u7F72\u7684\u547D\u540D\u7A7A\u95F4\uFF0C${beConfigMapFileName} \u4E3A\u5305\u542B\u81EA\u5B9A\u4E49 ConfigMap \u7684\u6587\u4EF6\u540D\u79F0\u3002"]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsxs)(n.li,{children:["\u66F4\u65B0 ",(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," \u8D44\u6E90",(0,o.jsx)(n.br,{}),"\n\u6301\u4E45\u5316\u5B58\u50A8\u9700\u8981\u914D\u7F6E\u5B58\u50A8\u6A21\u677F\uFF0C",(0,o.jsx)(n.code,{children:"DorisDisaggregatedCluster"})," \u4F7F\u7528 ",(0,o.jsx)(n.code,{children:"persistentVolume"})," \u63CF\u8FF0\u6301\u4E45\u5316\u5B58\u50A8\u6A21\u677F\u3002\u6A21\u677F\u4E2D\u4F7F\u7528 Kubernetes \u7684 ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/#PersistentVolumeClaimSpec",children:"PersistentVolumeClaimSpec"})," \u63CF\u8FF0\u6A21\u677F\u7684\u89C4\u683C\u3002",(0,o.jsx)(n.br,{}),"\nDoris Operator \u4F1A\u81EA\u52A8\u89E3\u6790\u542F\u52A8\u914D\u7F6E\u7684 ",(0,o.jsx)(n.code,{children:"file_cache_path"})," \u627E\u51FA\u6302\u8F7D\u70B9\uFF0C\u4F7F\u7528\u6A21\u677F\u6765\u81EA\u52A8\u751F\u6210\u6301\u4E45\u5316\u5B58\u50A8\u3002",(0,o.jsx)(n.code,{children:"annotations"})," \u53EF\u4E3A\u4F7F\u7528\u7684 ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/reference/kubernetes-api/config-and-storage-resources/persistent-volume-claim-v1/",children:"PersistentVolumeClaim"}),"\u3002Doris Operator \u9ED8\u8BA4\u4E3A\u65E5\u5FD7\u521B\u5EFA\u6301\u4E45\u5316\u5B58\u50A8\uFF0C\u53EF\u901A\u8FC7\u8BBE\u7F6E ",(0,o.jsx)(n.code,{children:"logNotStore: true"})," \u6765\u7981\u6B62\u4E3A\u65E5\u5FD7\u521B\u5EFA\u6301\u4E45\u5316\u5B58\u50A8\u3002\u4EE5\u4E0B\u5C55\u793A\u4E86 BE \u670D\u52A1\u4F7F\u7528\u81EA\u5B9A\u4E49\u7684 ConfigMap\uFF0C\u5E76\u8BBE\u7F6E\u5B58\u50A8\u6A21\u677F\u7684\u793A\u4F8B\uFF1A"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'spec:\n  computeGroups:\n  - uniqueId: cg1\n    configMaps:\n    - name: be-configmap\n      mountPath: "/etc/doris"\n    persistentVolume:\n      annotations:\n        doris.computegroup/id: cg1\n        doris.deployment/mode: disaggregated\n      logNotStore: true\n      persistentVolumeClaimSpec:\n        #storageClassName\uFF1A${storageClassName}\n        accessModes:\n        - ReadWriteOnce\n        resources:\n          requests:\n            storage: 500Gi\n'})}),"\n",(0,o.jsxs)(n.p,{children:["Doris Operator \u4F1A\u4F7F\u7528 Kubernetes \u96C6\u7FA4\u4E2D\u9ED8\u8BA4\u7684 ",(0,o.jsx)(n.a,{href:"https://kubernetes.io/zh-cn/docs/concepts/storage/storage-classes/#default-storageclass",children:"StorageClass"})," \u6765\u4E3A\u670D\u52A1\u521B\u5EFA\u6301\u4E45\u5316\u5B58\u50A8\u3002\u8BF7\u901A\u8FC7\u8BBE\u7F6E ",(0,o.jsx)(n.code,{children:"storageClassName"})," \u6765\u6307\u5B9A\u9700\u8981\u4F7F\u7528\u7684 StorageClass\u3002"]}),"\n",(0,o.jsx)(n.admonition,{title:"\u63D0\u793A",type:"tip",children:(0,o.jsx)(n.p,{children:'\u542F\u52A8\u914D\u7F6E\u5FC5\u987B\u6302\u8F7D\u5230 "/etc/doris" \u76EE\u5F55\u4E0B\u3002'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return c}});var a=s(667294);let o={},i=a.createContext(o);function c(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);