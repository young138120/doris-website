"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["412700"],{129472:function(e,n,l){l.r(n),l.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>t});var i=JSON.parse('{"id":"sql-manual/sql-statements/Account-Management-Statements/REVOKE","title":"REVOKE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Account-Management-Statements/REVOKE.md","sourceDirName":"sql-manual/sql-statements/Account-Management-Statements","slug":"/sql-manual/sql-statements/Account-Management-Statements/REVOKE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/REVOKE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"REVOKE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"GRANT","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/GRANT"},"next":{"title":"DROP-ROLE","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/DROP-ROLE"}}'),s=l("785893"),r=l("250065");let t={title:"REVOKE",language:"zh-CN"},a=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:2},{value:"\u53C2\u6570",id:"\u53C2\u6570",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"priv_level",id:"priv_level",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"workload_group_name",id:"workload_group_name",level:3},{value:"compute_group_name",id:"compute_group_name",level:3},{value:"storage_vault_name",id:"storage_vault_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"role_list",id:"role_list",level:3},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u76F8\u5173\u547D\u4EE4",id:"\u76F8\u5173\u547D\u4EE4",level:2},{value:"Keywords",id:"keywords",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE \u547D\u4EE4\u7528\u4E8E\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"\u64A4\u9500\u67D0\u7528\u6237\u6216\u67D0\u89D2\u8272\u7684\u6307\u5B9A\u6743\u9650\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u64A4\u9500\u5148\u524D\u6388\u4E88\u67D0\u7528\u6237\u7684\u6307\u5B9A\u89D2\u8272\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE privilege_list ON priv_level FROM user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE privilege_list ON RESOURCE resource_name FROM user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE privilege_list ON WORKLOAD GROUP workload_group_name FROM user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE privilege_list ON COMPUTE GROUP compute_group_name FROM user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE privilege_list ON STORAGE VAULT storage_vault_name FROM user_identity [ROLE role_name]"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE role_list FROM user_identity"}),"\n",(0,s.jsx)(n.h2,{id:"\u53C2\u6570",children:"\u53C2\u6570"}),"\n",(0,s.jsx)(n.h3,{id:"privilege_list",children:"privilege_list"}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u64A4\u9500\u7684\u6743\u9650\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\u3002\u652F\u6301\u7684\u6743\u9650\u5305\u62EC\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"NODE_PRIV\uFF1A\u96C6\u7FA4\u8282\u70B9\u64CD\u4F5C\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"ADMIN_PRIV\uFF1A\u7BA1\u7406\u5458\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"GRANT_PRIV\uFF1A\u6388\u6743\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"SELECT_PRIV\uFF1A\u67E5\u8BE2\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"LOAD_PRIV\uFF1A\u6570\u636E\u5BFC\u5165\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"ALTER_PRIV\uFF1A\u4FEE\u6539\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"CREATE_PRIV\uFF1A\u521B\u5EFA\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"DROP_PRIV\uFF1A\u5220\u9664\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"USAGE_PRIV\uFF1A\u4F7F\u7528\u6743\u9650"}),"\n",(0,s.jsx)(n.li,{children:"SHOW_VIEW_PRIV\uFF1A\u67E5\u770B\u89C6\u56FE\u5B9A\u4E49\u6743\u9650"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"priv_level",children:"priv_level"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u6743\u9650\u7684\u4F5C\u7528\u8303\u56F4\u3002\u652F\u6301\u4EE5\u4E0B\u683C\u5F0F\uFF1A"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"."}),".*\uFF1A\u6240\u6709 catalog\u3001\u6570\u636E\u5E93\u548C\u8868"]}),"\n",(0,s.jsxs)(n.li,{children:["catalog_name.",(0,s.jsx)(n.em,{children:"."}),"\uFF1A\u6307\u5B9A catalog \u4E2D\u7684\u6240\u6709\u6570\u636E\u5E93\u548C\u8868"]}),"\n",(0,s.jsx)(n.li,{children:"catalog_name.db.*\uFF1A\u6307\u5B9A\u6570\u636E\u5E93\u4E2D\u7684\u6240\u6709\u8868"}),"\n",(0,s.jsx)(n.li,{children:"catalog_name.db.tbl\uFF1A\u6307\u5B9A\u6570\u636E\u5E93\u4E2D\u7684\u7279\u5B9A\u8868"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A resource \u540D\u79F0\u3002\u652F\u6301 % \uFF08\u5339\u914D\u4EFB\u610F\u5B57\u7B26\u4E32\uFF09\u548C _\uFF08\u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF09\u901A\u914D\u7B26\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"workload_group_name",children:"workload_group_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A workload group \u540D\u79F0\u3002\u652F\u6301 % \uFF08\u5339\u914D\u4EFB\u610F\u5B57\u7B26\u4E32\uFF09\u548C _\uFF08\u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF09\u901A\u914D\u7B26\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"compute_group_name",children:"compute_group_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A compute group \u540D\u79F0\u3002\u652F\u6301 % \uFF08\u5339\u914D\u4EFB\u610F\u5B57\u7B26\u4E32\uFF09\u548C _\uFF08\u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF09\u901A\u914D\u7B26\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"storage_vault_name",children:"storage_vault_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A storage vault \u540D\u79F0\u3002\u652F\u6301 % \uFF08\u5339\u914D\u4EFB\u610F\u5B57\u7B26\u4E32\uFF09\u548C _\uFF08\u5339\u914D\u4EFB\u610F\u5355\u4E2A\u5B57\u7B26\uFF09\u901A\u914D\u7B26\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"user_identity",children:"user_identity"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u64A4\u9500\u6743\u9650\u7684\u7528\u6237\u3002\u5FC5\u987B\u662F\u4F7F\u7528 CREATE USER \u521B\u5EFA\u7684\u7528\u6237\u3002user_identity \u4E2D\u7684 host \u53EF\u4EE5\u662F\u57DF\u540D\uFF0C\u5982\u679C\u662F\u57DF\u540D\uFF0C\u6743\u9650\u7684\u64A4\u9500\u65F6\u95F4\u53EF\u80FD\u4F1A\u6709 1 \u5206\u949F\u5DE6\u53F3\u7684\u5EF6\u8FDF\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"role_name",children:"role_name"}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u8981\u64A4\u9500\u6743\u9650\u7684\u89D2\u8272\u3002\u8BE5\u89D2\u8272\u5FC5\u987B\u5B58\u5728\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"role_list",children:"role_list"}),"\n",(0,s.jsx)(n.p,{children:"\u9700\u8981\u64A4\u9500\u7684\u89D2\u8272\u5217\u8868\uFF0C\u4EE5\u9017\u53F7\u5206\u9694\u3002\u6307\u5B9A\u7684\u6240\u6709\u89D2\u8272\u5FC5\u987B\u5B58\u5728\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u7528\u6237\u5728\u7279\u5B9A\u6570\u636E\u5E93\u4E0A\u7684 SELECT \u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE SELECT_PRIV ON db1.* FROM 'jack'@'192.%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u7528\u6237\u5BF9\u8D44\u6E90\u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON RESOURCE 'spark_resource' FROM 'jack'@'192.%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u7528\u6237\u7684\u89D2\u8272\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE 'role1','role2' FROM 'jack'@'192.%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u7528\u6237\u5BF9 workload group  \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON WORKLOAD GROUP 'g1' FROM 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u7528\u6237\u5BF9\u6240\u6709 workload group  \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON WORKLOAD GROUP '%' FROM 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u89D2\u8272\u5BF9 workload group  \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON WORKLOAD GROUP 'g1' FROM ROLE 'test_role';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u7528\u6237\u5BF9 compute group  \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON COMPUTE GROUP 'group1' FROM 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u89D2\u8272\u5BF9 compute group  \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON COMPUTE GROUP 'group1' FROM ROLE 'my_role';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u7528\u6237\u5BF9 storage vault \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON STORAGE VAULT 'vault1' FROM 'jack'@'%';"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u64A4\u9500\u89D2\u8272\u5BF9 storage vault \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON STORAGE VAULT 'vault1' FROM ROLE 'my_role';"}),"\n",(0,s.jsxs)(n.ol,{start:"11",children:["\n",(0,s.jsx)(n.li,{children:"\u64A4\u9500\u7528\u6237\u5BF9\u6240\u6709 storage vault \u7684\u4F7F\u7528\u6743\u9650\uFF1A"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"REVOKE USAGE_PRIV ON STORAGE VAULT '%' FROM 'jack'@'%';"}),"\n",(0,s.jsx)(n.h2,{id:"\u76F8\u5173\u547D\u4EE4",children:"\u76F8\u5173\u547D\u4EE4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/GRANT",children:"GRANT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS",children:"SHOW GRANTS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE",children:"CREATE ROLE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../Administration-Statements/CREATE-WORKLOAD-GROUP.md",children:"CREATE WORKLOAD GROUP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../Administration-Statements/CREATE-COMPUTE-GROUP.md",children:"CREATE COMPUTE GROUP"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../Administration-Statements/CREATE-RESOURCE.md",children:"CREATE RESOURCE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../Administration-Statements/CREATE-STORAGE-VAULT.md",children:"CREATE STORAGE VAULT"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REVOKE, WORKLOAD GROUP, COMPUTE GROUP, RESOURCE \n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return t}});var i=l(667294);let s={},r=i.createContext(s);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);