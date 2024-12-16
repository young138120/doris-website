"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["99652"],{688628:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>u,assets:()=>r,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS","title":"SHOW TABLET DIAGNOSIS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-DIAGNOSIS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW TABLET DIAGNOSIS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW TABLET STORAGE FORMAT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-TABLET-STORAGE-FORMAT"},"next":{"title":"SET REPLICA STATUS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-REPLICA-STATUS"}}'),l=t("785893"),s=t("250065");let i={title:"SHOW TABLET DIAGNOSIS",language:"zh-CN"},d=void 0,r={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u8BCA\u65AD\u6307\u5B9A tablet\u3002\u7ED3\u679C\u4E2D\u5C06\u663E\u793A\u8FD9\u4E2A tablet \u7684\u4FE1\u606F\u548C\u4E00\u4E9B\u6F5C\u5728\u7684\u95EE\u9898\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:"SHOW TABLET DIAGNOSIS tablet_id"}),"\n",(0,l.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,l.jsx)(n.p,{children:"\u7ED3\u679C\u4E2D\u7684\u5404\u884C\u4FE1\u606F\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"TabletExist:                         Tablet \u662F\u5426\u5B58\u5728"}),"\n",(0,l.jsx)(n.li,{children:"TabletId:                            Tablet ID"}),"\n",(0,l.jsx)(n.li,{children:"Database:                            Tablet \u6240\u5C5E DB \u548C\u5176 ID"}),"\n",(0,l.jsx)(n.li,{children:"Table:                               Tablet \u6240\u5C5E Table \u548C\u5176 ID"}),"\n",(0,l.jsx)(n.li,{children:"Partition:                           Tablet \u6240\u5C5E Partition \u548C\u5176 ID"}),"\n",(0,l.jsx)(n.li,{children:"MaterializedIndex:                   Tablet \u6240\u5C5E\u7269\u5316\u89C6\u56FE\u548C\u5176 ID"}),"\n",(0,l.jsx)(n.li,{children:"Replicas(ReplicaId -> BackendId):    Tablet \u5404\u526F\u672C\u548C\u5176\u6240\u5728 BE\u3002"}),"\n",(0,l.jsx)(n.li,{children:"ReplicasNum:                         \u526F\u672C\u6570\u91CF\u662F\u5426\u6B63\u786E\u3002"}),"\n",(0,l.jsx)(n.li,{children:"ReplicaBackendStatus:                \u526F\u672C\u6240\u5728 BE \u8282\u70B9\u662F\u5426\u6B63\u5E38\u3002\n10.ReplicaVersionStatus:                \u526F\u672C\u7684\u7248\u672C\u53F7\u662F\u5426\u6B63\u5E38\u3002\n11.ReplicaStatus:                       \u526F\u672C\u72B6\u6001\u662F\u5426\u6B63\u5E38\u3002\n12.ReplicaCompactionStatus:             \u526F\u672C Compaction \u72B6\u6001\u662F\u5426\u6B63\u5E38\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B Tablet 10001 \u7684\u8BCA\u65AD\u7ED3\u679C"}),"\n",(0,l.jsx)(n.p,{children:"SHOW TABLET DIAGNOSIS 10001;"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, DIAGNOSIS, TABLET\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var a=t(667294);let l={},s=a.createContext(l);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);