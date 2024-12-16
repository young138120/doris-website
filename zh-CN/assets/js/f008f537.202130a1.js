"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["328736"],{635714:function(e,n,l){l.r(n),l.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>t});var i=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION","title":"SHOW-TRANSACTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-TRANSACTION","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"SHOW-TRANSACTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW-VIEW","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-VIEW"},"next":{"title":"SHOW-STREAM-LOAD","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-STREAM-LOAD"}}'),s=l("785893"),r=l("250065");let t={title:"SHOW-TRANSACTION",language:"zh-CN"},a=void 0,c={},d=[{value:"SHOW-TRANSACTION",id:"show-transaction",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"show-transaction",children:"SHOW-TRANSACTION"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"SHOW TRANSACTION"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u8BE5\u8BED\u6CD5\u7528\u4E8E\u67E5\u770B\u6307\u5B9A transaction id \u6216 label \u7684\u4E8B\u52A1\u8BE6\u60C5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id = transaction_id]\n[label = label_name];\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u793A\u4F8B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"TransactionId\uFF1A\u4E8B\u52A1id"}),"\n",(0,s.jsx)(n.li,{children:"Label\uFF1A\u5BFC\u5165\u4EFB\u52A1\u5BF9\u5E94\u7684 label"}),"\n",(0,s.jsx)(n.li,{children:"Coordinator\uFF1A\u8D1F\u8D23\u4E8B\u52A1\u534F\u8C03\u7684\u8282\u70B9"}),"\n",(0,s.jsxs)(n.li,{children:["TransactionStatus\uFF1A\u4E8B\u52A1\u72B6\u6001\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"PREPARE\uFF1A\u51C6\u5907\u9636\u6BB5"}),"\n",(0,s.jsx)(n.li,{children:"COMMITTED\uFF1A\u4E8B\u52A1\u6210\u529F\uFF0C\u4F46\u6570\u636E\u4E0D\u53EF\u89C1"}),"\n",(0,s.jsx)(n.li,{children:"VISIBLE\uFF1A\u4E8B\u52A1\u6210\u529F\u4E14\u6570\u636E\u53EF\u89C1"}),"\n",(0,s.jsx)(n.li,{children:"ABORTED\uFF1A\u4E8B\u52A1\u5931\u8D25"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"LoadJobSourceType\uFF1A\u5BFC\u5165\u4EFB\u52A1\u7684\u7C7B\u578B\u3002"}),"\n",(0,s.jsx)(n.li,{children:"PrepareTime\uFF1A\u4E8B\u52A1\u5F00\u59CB\u65F6\u95F4"}),"\n",(0,s.jsx)(n.li,{children:"CommitTime\uFF1A\u4E8B\u52A1\u63D0\u4EA4\u6210\u529F\u7684\u65F6\u95F4"}),"\n",(0,s.jsx)(n.li,{children:"FinishTime\uFF1A\u6570\u636E\u53EF\u89C1\u7684\u65F6\u95F4"}),"\n",(0,s.jsx)(n.li,{children:"Reason\uFF1A\u9519\u8BEF\u4FE1\u606F"}),"\n",(0,s.jsx)(n.li,{children:"ErrorReplicasCount\uFF1A\u6709\u9519\u8BEF\u7684\u526F\u672C\u6570"}),"\n",(0,s.jsx)(n.li,{children:"ListenerId\uFF1A\u76F8\u5173\u7684\u5BFC\u5165\u4F5C\u4E1A\u7684id"}),"\n",(0,s.jsx)(n.li,{children:"TimeoutMs\uFF1A\u4E8B\u52A1\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B id \u4E3A 4005 \u7684\u4E8B\u52A1\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE ID=4005;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A db \u4E2D\uFF0C\u67E5\u770B id \u4E3A 4005 \u7684\u4E8B\u52A1\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION FROM db WHERE ID=4005;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u67E5\u770B label \u4E3A label_name\u7684\u4E8B\u52A1\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE LABEL = 'label_name';\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"SHOW, TRANSACTION\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return a},a:function(){return t}});var i=l(667294);let s={},r=i.createContext(s);function t(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);