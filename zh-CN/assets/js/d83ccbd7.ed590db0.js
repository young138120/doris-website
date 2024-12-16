"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["11595"],{575226:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS","title":"SHOW BACKENDS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS.md","sourceDirName":"sql-manual/sql-statements/cluster-management/instance-management","slug":"/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/SHOW-BACKENDS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW BACKENDS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MODIFY BACKEND","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/MODIFY-BACKEND"},"next":{"title":"DECOMMISSION BACKEND","permalink":"/zh-CN/docs/sql-manual/sql-statements/cluster-management/instance-management/DECOMMISSION-BACKEND"}}'),s=t("785893"),l=t("250065");let i={title:"SHOW BACKENDS",language:"zh-CN"},r=void 0,c={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u770B cluster \u5185\u7684 BE \u8282\u70B9"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:" SHOW BACKENDS;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"LastStartTime \u8868\u793A\u6700\u8FD1\u4E00\u6B21 BE \u542F\u52A8\u65F6\u95F4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"LastHeartbeat \u8868\u793A\u6700\u8FD1\u4E00\u6B21\u5FC3\u8DF3\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Alive \u8868\u793A\u8282\u70B9\u662F\u5426\u5B58\u6D3B\u3002"}),"\n",(0,s.jsx)(n.li,{children:"SystemDecommissioned \u4E3A true \u8868\u793A\u8282\u70B9\u6B63\u5728\u5B89\u5168\u4E0B\u7EBF\u4E2D\u3002"}),"\n",(0,s.jsx)(n.li,{children:"ClusterDecommissioned \u4E3A true \u8868\u793A\u8282\u70B9\u6B63\u5728\u51B2\u5F53\u524D cluster \u4E2D\u4E0B\u7EBF\u3002"}),"\n",(0,s.jsx)(n.li,{children:"TabletNum \u8868\u793A\u8BE5\u8282\u70B9\u4E0A\u5206\u7247\u6570\u91CF\u3002"}),"\n",(0,s.jsx)(n.li,{children:"DataUsedCapacity \u8868\u793A\u5B9E\u9645\u7528\u6237\u6570\u636E\u6240\u5360\u7528\u7684\u7A7A\u95F4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"AvailCapacity \u8868\u793A\u78C1\u76D8\u7684\u53EF\u4F7F\u7528\u7A7A\u95F4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"TotalCapacity \u8868\u793A\u603B\u78C1\u76D8\u7A7A\u95F4\u3002TotalCapacity = AvailCapacity + DataUsedCapacity + \u5176\u4ED6\u975E\u7528\u6237\u6570\u636E\u6587\u4EF6\u5360\u7528\u7A7A\u95F4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"UsedPct \u8868\u793A\u78C1\u76D8\u5DF2\u4F7F\u7528\u91CF\u767E\u5206\u6BD4\u3002"}),"\n",(0,s.jsx)(n.li,{children:"ErrMsg \u7528\u4E8E\u663E\u793A\u5FC3\u8DF3\u5931\u8D25\u65F6\u7684\u9519\u8BEF\u4FE1\u606F\u3002"}),"\n",(0,s.jsx)(n.li,{children:"Status \u7528\u4E8E\u4EE5 JSON \u683C\u5F0F\u663E\u793A BE \u7684\u4E00\u4E9B\u72B6\u6001\u4FE1\u606F\uFF0C\u76EE\u524D\u5305\u62EC\u6700\u540E\u4E00\u6B21 BE \u6C47\u62A5\u5176 tablet \u7684\u65F6\u95F4\u4FE1\u606F\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["HeartbeatFailureCounter\uFF1A\u73B0\u5728\u5F53\u524D\u8FDE\u7EED\u5931\u8D25\u7684\u5FC3\u8DF3\u6B21\u6570\uFF0C\u5982\u679C\u6B21\u6570\u8D85\u8FC7 ",(0,s.jsx)(n.code,{children:"max_backend_heartbeat_failure_tolerance_count"})," \u914D\u7F6E\uFF0C\u5219 isAlive \u5B57\u6BB5\u4F1A\u7F6E\u4E3A false\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"NodeRole \u7528\u4E8E\u5C55\u793A\u8282\u70B9\u89D2\u8272\uFF0C\u73B0\u5728\u6709\u4E24\u79CD\u7C7B\u578B\uFF1AMix \u4EE3\u8868\u539F\u6765\u7684\u8282\u70B9\u7C7B\u578B\uFF0Ccomputation \u4EE3\u8868\u53EA\u505A\u8BA1\u7B97\u7684\u8282\u70B9\u7C7B\u578B\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, BACKENDS\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var a=t(667294);let s={},l=a.createContext(s);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);