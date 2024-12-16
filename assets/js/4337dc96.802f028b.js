"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["777010"],{945615:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK","title":"ADMIN-REBALANCE-DISK","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK","permalink":"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-REBALANCE-DISK","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ADMIN-REBALANCE-DISK","language":"en"},"sidebar":"docs","previous":{"title":"ADMIN-COPY-TABLET","permalink":"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-COPY-TABLET"},"next":{"title":"ADMIN-CANCEL-REBALANCE-DISK","permalink":"/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK"}}'),i=t("785893"),a=t("250065");let r={title:"ADMIN-REBALANCE-DISK",language:"en"},l=void 0,c={},d=[{value:"ADMIN-REBALANCE-DISK",id:"admin-rebalance-disk",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"admin-rebalance-disk",children:"ADMIN-REBALANCE-DISK"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"ADMIN REBALANCE DISK"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to try to rebalance disks of the specified backends first, no matter if the cluster is balanced"}),"\n",(0,i.jsx)(n.p,{children:"Grammar:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'ADMIN REBALANCE DISK [ON ("BackendHost1:BackendHeartBeatPort1", "BackendHost2:BackendHeartBeatPort2", ...)];\n'})}),"\n",(0,i.jsx)(n.p,{children:"Explain:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"This statement only means that the system attempts to rebalance disks of specified backends with high priority, no matter if the cluster is balanced."}),"\n",(0,i.jsx)(n.li,{children:"The default timeout is 24 hours. Timeout means that the system will no longer rebalance disks of specified backends with high priority. The command settings need to be reused."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Attempt to rebalance disks of all backends"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"ADMIN REBALANCE DISK;\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Attempt to rebalance disks oof the specified backends"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'ADMIN REBALANCE DISK ON ("192.168.1.1:1234", "192.168.1.2:1234");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.p,{children:"ADMIN,REBALANCE,DISK"}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);