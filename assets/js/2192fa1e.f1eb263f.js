"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["371139"],{655498:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"admin-manual/cluster-management/upgrade","title":"Upgrading Cluster","description":"\x3c!--","source":"@site/docs/admin-manual/cluster-management/upgrade.md","sourceDirName":"admin-manual/cluster-management","slug":"/admin-manual/cluster-management/upgrade","permalink":"/docs/dev/admin-manual/cluster-management/upgrade","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Upgrading Cluster","language":"en"},"sidebar":"docs","previous":{"title":"Meta Service API","permalink":"/docs/dev/compute-storage-decoupled/meta-service-api"},"next":{"title":"Elastic Scaling","permalink":"/docs/dev/admin-manual/cluster-management/elastic-expansion"}}'),i=r("785893"),t=r("250065");let l={title:"Upgrading Cluster",language:"en"},d=void 0,o={},a=[{value:"Overview",id:"overview",level:2},{value:"Doris Release Notes",id:"doris-release-notes",level:2},{value:"Upgrade Steps",id:"upgrade-steps",level:2},{value:"Upgrade Instructions",id:"upgrade-instructions",level:3},{value:"Overview of the Upgrade Process",id:"overview-of-the-upgrade-process",level:3},{value:"Upgrade Pre-work",id:"upgrade-pre-work",level:3},{value:"Upgrade process",id:"upgrade-process",level:3},{value:"Upgrade BE",id:"upgrade-be",level:4}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["To upgrade, please use the steps recommended in this chapter to upgrade the cluster. The Doris cluster upgrade can be upgraded using the ",(0,i.jsx)(n.strong,{children:"rolling upgrade"})," method, which does not require all cluster nodes to be shut down for upgrade, which greatly reduces the impact on upper-layer applications."]}),"\n",(0,i.jsx)(n.h2,{id:"doris-release-notes",children:"Doris Release Notes"}),"\n",(0,i.jsxs)(n.p,{children:["When upgrading Doris, please follow the principle of ",(0,i.jsx)(n.strong,{children:"not skipping two minor versions"})," and upgrade sequentially."]}),"\n",(0,i.jsx)(n.p,{children:"For example, if you are upgrading from version 0.15.x to 2.0.x, it is recommended to first upgrade to the latest version of 1.1, then upgrade to the latest version of 1.2, and finally upgrade to the latest version of 2.0."}),"\n",(0,i.jsx)(n.h2,{id:"upgrade-steps",children:"Upgrade Steps"}),"\n",(0,i.jsx)(n.h3,{id:"upgrade-instructions",children:"Upgrade Instructions"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"During the upgrade process, since Doris's RoutineLoad, Flink-Doris-Connector, and Spark-Doris-Connector have implemented a retry mechanism in the code, in a multi-BE node cluster, the rolling upgrade will not cause the task to fail ."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The StreamLoad task requires you to implement a retry mechanism in your own code, otherwise the task will fail."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The cluster copy repair and balance function must be closed before and opened after the completion of a single upgrade task, regardless of whether all your cluster nodes have been upgraded."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"overview-of-the-upgrade-process",children:"Overview of the Upgrade Process"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Metadata backup"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Turn off the cluster copy repair and balance function"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compatibility testing"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Upgrade BE"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Upgrade FE"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Turn on the cluster replica repair and balance function"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"upgrade-pre-work",children:"Upgrade Pre-work"}),"\n",(0,i.jsx)(n.p,{children:"Please perform the upgrade in sequence according to the upgrade process"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"01 Metadata Backup (Important)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Make a full backup of the ",(0,i.jsx)(n.code,{children:"doris-meta"})," directory of the FE-Master node!"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"02 Turn off the cluster replica repair and balance function"})}),"\n",(0,i.jsx)(n.p,{children:"There will be node restart during the upgrade process, so unnecessary cluster balancing and replica repair logic may be triggered, first close it with the following command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'admin set frontend config("disable_balance" = "true");\nadmin set frontend config("disable_colocate_balance" = "true");\nadmin set frontend config("disable_tablet_scheduler" = "true");\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"03 Compatibility Testing"})}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"caution",children:(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Metadata compatibility is very important, if the upgrade fails due to incompatible metadata, it may lead to data loss! It is recommended to perform a metadata compatibility test before each upgrade!"})})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"FE Compatibility Test"}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Important",type:"tip",children:(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"It is recommended to do FE compatibility test on your local development machine or BE node."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"It is not recommended to test on Follower or Observer nodes to avoid link exceptions"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If it must be on the Follower or Observer node, the started FE process needs to be stopped"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.p,{children:"a. Use the new version alone to deploy a test FE process"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\nsh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:"b. Modify the FE configuration file fe.conf for testing"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\nvi ${DORIS_NEW_HOME}/conf/fe.conf\n```\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Modify the following port information, set ",(0,i.jsx)(n.strong,{children:"all ports"})," to ",(0,i.jsx)(n.strong,{children:"different from online"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\n...\nhttp_port = 18030\nrpc_port = 19020\nquery_port = 19030\narrow_flight_sql_port = 19040\nedit_log_port = 19010\n...\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:"Save and exit"}),"\n",(0,i.jsx)(n.p,{children:"c. Modify fe.conf"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Add ClusterID configuration in fe.conf"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'echo "cluster_id=123456" >> ${DORIS_NEW_HOME}/conf/fe.conf\n```\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Add metadata failover configuration in fe.conf (",(0,i.jsx)(n.strong,{children:">=2.0.2 + version does not require this operation"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'echo "metadata_failure_recovery=true" >> ${DORIS_NEW_HOME}/conf/fe.conf\n'})}),"\n",(0,i.jsx)(n.p,{children:"d. Copy the metadata directory doris-meta of the online environment Master FE to the test environment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\ncp ${DORIS_OLD_HOME}/fe/doris-meta/* ${DORIS_NEW_HOME}/fe/doris-meta\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:"e. Change the cluster_id in the VERSION file copied to the test environment to 123456 (that is, the same as in step 3)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\nvi ${DORIS_NEW_HOME}/fe/doris-meta/image/VERSION\nclusterId=123456\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:"f. In the test environment, run the startup FE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the version is greater than or equal to 2.0.2, run the following command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon --metadata_failure_recovery\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If the version is less than 2.0.2, run the following command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_NEW_HOME}/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"g. Observe whether the startup is successful through the FE log fe.log"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\ntail -f ${DORIS_NEW_HOME}/log/fe.log\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:"h. If the startup is successful, it means that there is no problem with the compatibility, stop the FE process of the test environment, and prepare for the upgrade"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```\nsh ${DORIS_NEW_HOME}/bin/stop_fe.sh\n```\n"})}),"\n",(0,i.jsx)(n.p,{children:"2. BE Compatibility Test"}),"\n",(0,i.jsx)(n.p,{children:"You can use the grayscale upgrade scheme to upgrade a single BE first. If there is no exception or error, the compatibility is considered normal, and subsequent upgrade actions can be performed"}),"\n",(0,i.jsx)(n.h3,{id:"upgrade-process",children:"Upgrade process"}),"\n",(0,i.jsxs)(n.admonition,{title:"Tip",type:"tip",children:[(0,i.jsx)(n.p,{children:"Upgrade BE first, then FE"}),(0,i.jsxs)(n.p,{children:["Generally speaking, Doris only needs to upgrade ",(0,i.jsx)(n.code,{children:"/bin"})," and ",(0,i.jsx)(n.code,{children:"/lib"})," under the FE directory and ",(0,i.jsx)(n.code,{children:"/bin"})," and ",(0,i.jsx)(n.code,{children:"/lib"})," under the BE directory"]}),(0,i.jsxs)(n.p,{children:["In versions 2.0.2 and later, the ",(0,i.jsx)(n.code,{children:"custom_lib/"})," directory is added to the FE and BE deployment paths (if not, it can be created manually). The ",(0,i.jsx)(n.code,{children:"custom_lib/"})," directory is used to store some user-defined third-party jar packages, such as ",(0,i.jsx)(n.code,{children:"hadoop-lzo-*.jar"}),", ",(0,i.jsx)(n.code,{children:"orai18n.jar"}),", etc."]}),(0,i.jsx)(n.p,{children:"This directory does not need to be replaced during upgrade."}),(0,i.jsxs)(n.p,{children:["However, when a major version is upgraded, new features may be added or old functions refactored. These modifications may require ",(0,i.jsx)(n.strong,{children:"replace/add"})," more directories during the upgrade to ensure the availability of all new features. Please Carefully pay attention to the Release-Note of this version when upgrading the version to avoid upgrade failures"]})]}),"\n",(0,i.jsx)(n.h4,{id:"upgrade-be",children:"Upgrade BE"}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsx)(n.p,{children:"In order to ensure the safety of your data, please use 3 copies to store your data to avoid data loss caused by misoperation or failure of the upgrade"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Under the premise of multiple copies, select a BE node to stop running and perform grayscale upgrade"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/be/bin/stop_be.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Rename the ",(0,i.jsx)(n.code,{children:"/bin"}),", ",(0,i.jsx)(n.code,{children:"/lib"})," directories under the BE directory"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mv ${DORIS_OLD_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin_back\nmv ${DORIS_OLD_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib_back\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the new version of ",(0,i.jsx)(n.code,{children:"/bin"}),", ",(0,i.jsx)(n.code,{children:"/lib"})," directory to the original BE directory"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cp -r ${DORIS_NEW_HOME}/be/bin ${DORIS_OLD_HOME}/be/bin\ncp -r ${DORIS_NEW_HOME}/be/lib ${DORIS_OLD_HOME}/be/lib\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start the BE node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/be/bin/start_be.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Link the cluster to view the node information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mysql",children:"show backends\\G\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the ",(0,i.jsx)(n.code,{children:"alive"})," status of the BE node is ",(0,i.jsx)(n.code,{children:"true"}),", and the value of ",(0,i.jsx)(n.code,{children:"Version"})," is the new version, the node upgrade is successful"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Complete the upgrade of other BE nodes in sequence"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"05 Upgrade FE"})}),"\n",(0,i.jsx)(n.admonition,{title:"Tip",type:"tip",children:(0,i.jsx)(n.p,{children:"Upgrade the non-Master nodes first, and then upgrade the Master nodes."})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the case of multiple FE nodes, select a non-Master node to upgrade and stop running first"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/fe/bin/stop_fe.sh\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Rename the ",(0,i.jsx)(n.code,{children:"/bin"}),", ",(0,i.jsx)(n.code,{children:"/lib"})," directories under the FE directory"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"mv ${DORIS_OLD_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin_back\nmv ${DORIS_OLD_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib_back\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the new version of ",(0,i.jsx)(n.code,{children:"/bin"}),", ",(0,i.jsx)(n.code,{children:"/lib"})," directory to the original FE directory"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"cp -r ${DORIS_NEW_HOME}/fe/bin ${DORIS_OLD_HOME}/fe/bin\ncp -r ${DORIS_NEW_HOME}/fe/lib ${DORIS_OLD_HOME}/fe/lib\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Start the FE node"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sh ${DORIS_OLD_HOME}/fe/bin/start_fe.sh --daemon\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Link the cluster to view the node information"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mysql",children:"show frontends\\G\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If the FE node ",(0,i.jsx)(n.code,{children:"alive"})," status is ",(0,i.jsx)(n.code,{children:"true"}),", and the value of ",(0,i.jsx)(n.code,{children:"Version"})," is the new version, the node is upgraded successfully"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Complete the upgrade of other FE nodes in turn, ",(0,i.jsx)(n.strong,{children:"finally complete the upgrade of the Master node"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"06 Turn on the cluster replica repair and balance function"})}),"\n",(0,i.jsxs)(n.p,{children:["After the upgrade is complete and all BE nodes become ",(0,i.jsx)(n.code,{children:"Alive"}),", enable the cluster copy repair and balance function:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'admin set frontend config("disable_balance" = "false");\nadmin set frontend config("disable_colocate_balance" = "false");\nadmin set frontend config("disable_tablet_scheduler" = "false");\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return l}});var s=r(667294);let i={},t=s.createContext(i);function l(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);