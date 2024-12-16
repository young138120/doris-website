"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["746231"],{504468:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>s,default:()=>h,assets:()=>a,toc:()=>l,frontMatter:()=>c});var t=JSON.parse('{"id":"admin-manual/config/fe-config-template","title":"FE Configuration","description":"\x3c!--","source":"@site/docs/admin-manual/config/fe-config-template.md","sourceDirName":"admin-manual/config","slug":"/admin-manual/config/fe-config-template","permalink":"/docs/dev/admin-manual/config/fe-config-template","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FE Configuration","language":"en","toc_min_heading_level":2,"toc_max_heading_level":4}}'),o=i("785893"),r=i("250065");let c={title:"FE Configuration",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},s="FE Configuration",a={},l=[{value:"Precautions",id:"precautions",level:2},{value:"View configuration items",id:"view-configuration-items",level:2},{value:"Set configuration items",id:"set-configuration-items",level:2},{value:"Examples",id:"examples",level:2},{value:"Configurations",id:"configurations",level:2}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"fe-configuration",children:"FE Configuration"})}),"\n",(0,o.jsx)(n.p,{children:"This document mainly introduces the relevant configuration items of FE."}),"\n",(0,o.jsxs)(n.p,{children:["The FE configuration file ",(0,o.jsx)(n.code,{children:"fe.conf"})," is usually stored in the ",(0,o.jsx)(n.code,{children:"conf/"})," directory of the FE deployment path. In version 0.14, another configuration file ",(0,o.jsx)(n.code,{children:"fe_custom.conf"})," will be introduced. The configuration file is used to record the configuration items that are dynamically configured and persisted by the user during operation."]}),"\n",(0,o.jsxs)(n.p,{children:["After the FE process is started, it will read the configuration items in ",(0,o.jsx)(n.code,{children:"fe.conf"})," first, and then read the configuration items in ",(0,o.jsx)(n.code,{children:"fe_custom.conf"}),". The configuration items in ",(0,o.jsx)(n.code,{children:"fe_custom.conf"})," will overwrite the same configuration items in ",(0,o.jsx)(n.code,{children:"fe.conf"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The location of the ",(0,o.jsx)(n.code,{children:"fe_custom.conf"})," file can be configured in ",(0,o.jsx)(n.code,{children:"fe.conf"})," through the ",(0,o.jsx)(n.code,{children:"custom_config_dir"})," configuration item."]}),"\n",(0,o.jsx)(n.h2,{id:"precautions",children:"Precautions"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"1."})," For the purpose of simplifying the architecture, modifying the configuration through the mysql protocol will only modify the data in the local FE memory, and will not synchronize the changes to all FEs.\nFor Config items that only take effect on the Master FE, the modification request will be automatically forwarded to the Master FE."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"2."})," Note that the option ",(0,o.jsx)(n.code,{children:"forward_to_master"})," will affect the display results of ",(0,o.jsx)(n.code,{children:"show frontend config"}),", if ",(0,o.jsx)(n.code,{children:"forward_to_master=true"}),", ",(0,o.jsx)(n.code,{children:"show frontend config"})," shows the Config of Master FE (Even if you are connecting to a Follower FE currently), this may cause you to be unable to see the modification of the local FE configuration; if you expect show config of the FE you're connecting, then execute the command ",(0,o.jsx)(n.code,{children:"set forward_to_master=false"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"view-configuration-items",children:"View configuration items"}),"\n",(0,o.jsx)(n.p,{children:"There are two ways to view the configuration items of FE:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"FE web page"}),"\n",(0,o.jsxs)(n.p,{children:["Open the FE web page ",(0,o.jsx)(n.code,{children:"http://fe_host:fe_http_port/Configure"})," in the browser. You can see the currently effective FE configuration items in ",(0,o.jsx)(n.code,{children:"Configure Info"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"View by command"}),"\n",(0,o.jsx)(n.p,{children:"After the FE is started, you can view the configuration items of the FE in the MySQL client with the following command:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"SHOW FRONTEND CONFIG;"})}),"\n",(0,o.jsx)(n.p,{children:"The meanings of the columns in the results are as follows:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Key: the name of the configuration item."}),"\n",(0,o.jsx)(n.li,{children:"Value: The value of the current configuration item."}),"\n",(0,o.jsx)(n.li,{children:"Type: The configuration item value type, such as integer or string."}),"\n",(0,o.jsxs)(n.li,{children:["IsMutable: whether it can be dynamically configured. If true, the configuration item can be dynamically configured at runtime. If false, it means that the configuration item can only be configured in ",(0,o.jsx)(n.code,{children:"fe.conf"})," and takes effect after restarting FE."]}),"\n",(0,o.jsx)(n.li,{children:"MasterOnly: Whether it is a unique configuration item of Master FE node. If it is true, it means that the configuration item is meaningful only at the Master FE node, and is meaningless to other types of FE nodes. If false, it means that the configuration item is meaningful in all types of FE nodes."}),"\n",(0,o.jsx)(n.li,{children:"Comment: The description of the configuration item."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"set-configuration-items",children:"Set configuration items"}),"\n",(0,o.jsx)(n.p,{children:"There are two ways to configure FE configuration items:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Static configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Add and set configuration items in the ",(0,o.jsx)(n.code,{children:"conf/fe.conf"})," file. The configuration items in ",(0,o.jsx)(n.code,{children:"fe.conf"})," will be read when the FE process starts. Configuration items not in ",(0,o.jsx)(n.code,{children:"fe.conf"})," will use default values."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Dynamic configuration via MySQL protocol"}),"\n",(0,o.jsx)(n.p,{children:"After the FE starts, you can set the configuration items dynamically through the following commands. This command requires administrator privilege."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'ADMIN SET FRONTEND CONFIG (" fe_config_name "=" fe_config_value ");'})}),"\n",(0,o.jsxs)(n.p,{children:["Not all configuration items support dynamic configuration. You can check whether the dynamic configuration is supported by the ",(0,o.jsx)(n.code,{children:"IsMutable"})," column in the",(0,o.jsx)(n.code,{children:"SHOW FRONTEND CONFIG;"}),"command result."]}),"\n",(0,o.jsxs)(n.p,{children:["If the configuration item of ",(0,o.jsx)(n.code,{children:"MasterOnly"})," is modified, the command will be directly forwarded to the Master FE and only the corresponding configuration item in the Master FE will be modified."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Configuration items modified in this way will become invalid after the FE process restarts."})}),"\n",(0,o.jsxs)(n.p,{children:["For more help on this command, you can view it through the ",(0,o.jsx)(n.code,{children:"HELP ADMIN SET CONFIG;"})," command."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Dynamic configuration via HTTP protocol"}),"\n",(0,o.jsxs)(n.p,{children:["For details, please refer to ",(0,o.jsx)(n.a,{href:"../http-actions/fe/set-config-action.md",children:"Set Config Action"})]}),"\n",(0,o.jsxs)(n.p,{children:["This method can also persist the modified configuration items. The configuration items will be persisted in the ",(0,o.jsx)(n.code,{children:"fe_custom.conf"})," file and will still take effect after FE is restarted."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Modify ",(0,o.jsx)(n.code,{children:"async_pending_load_task_pool_size"})]}),"\n",(0,o.jsxs)(n.p,{children:["Through ",(0,o.jsx)(n.code,{children:"SHOW FRONTEND CONFIG;"})," you can see that this configuration item cannot be dynamically configured (",(0,o.jsx)(n.code,{children:"IsMutable"})," is false). You need to add in ",(0,o.jsx)(n.code,{children:"fe.conf"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"async_pending_load_task_pool_size = 20"})}),"\n",(0,o.jsx)(n.p,{children:"Then restart the FE process to take effect the configuration."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Modify ",(0,o.jsx)(n.code,{children:"dynamic_partition_enable"})]}),"\n",(0,o.jsxs)(n.p,{children:["Through ",(0,o.jsx)(n.code,{children:"SHOW FRONTEND CONFIG;"})," you can see that the configuration item can be dynamically configured (",(0,o.jsx)(n.code,{children:"IsMutable"})," is true). And it is the unique configuration of Master FE. Then first we can connect to any FE and execute the following command to modify the configuration:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true"); `\n'})}),"\n",(0,o.jsx)(n.p,{children:"Afterwards, you can view the modified value with the following command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"set forward_to_master = true;\nSHOW FRONTEND CONFIG;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After modification in the above manner, if the Master FE restarts or a Master election is performed, the configuration will be invalid. You can add the configuration item directly in ",(0,o.jsx)(n.code,{children:"fe.conf"})," and restart the FE to make the configuration item permanent."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Modify ",(0,o.jsx)(n.code,{children:"max_distribution_pruner_recursion_depth"})]}),"\n",(0,o.jsxs)(n.p,{children:["Through ",(0,o.jsx)(n.code,{children:"SHOW FRONTEND CONFIG;"})," you can see that the configuration item can be dynamically configured (",(0,o.jsx)(n.code,{children:"IsMutable"})," is true). It is not unique to Master FE."]}),"\n",(0,o.jsx)(n.p,{children:"Similarly, we can modify the configuration by dynamically modifying the configuration command. Because this configuration is not unique to the Master FE, user need to connect to different FEs separately to modify the configuration dynamically, so that all FEs use the modified configuration values."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"configurations",children:"Configurations"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note:"}),"\n",(0,o.jsxs)(n.p,{children:["The following content is automatically generated by ",(0,o.jsx)(n.code,{children:"docs/generate-config-and-variable-doc.sh"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["If you need to modify, please modify the description information in ",(0,o.jsx)(n.code,{children:"fe/fe-common/src/main/java/org/apache/doris/common/Config.java"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"<--DOC_PLACEHOLDER--\x3e"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return c}});var t=i(667294);let o={},r=t.createContext(o);function c(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);