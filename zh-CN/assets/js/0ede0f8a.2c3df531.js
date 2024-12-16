"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["315956"],{360852:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>u,assets:()=>o,toc:()=>r,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","title":"SHOW ROUTINE LOAD TASK","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD-TASK","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW ROUTINE LOAD TASK","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW ROUTINE LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-ROUTINE-LOAD"},"next":{"title":"SHOW CREATE ROUTINE LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-CREATE-ROUTINE-LOAD"}}'),l=t("785893"),i=t("250065");let a={title:"SHOW ROUTINE LOAD TASK",language:"zh-CN"},d=void 0,o={},r=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B\u4E00\u4E2A\u6307\u5B9A\u7684 Routine Load \u4F5C\u4E1A\u7684\u5F53\u524D\u6B63\u5728\u8FD0\u884C\u7684\u5B50\u4EFB\u52A1\u60C5\u51B5\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW ROUTINE LOAD TASK\nWHERE JobName = "job_name";\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-text",children:'              TaskId: d67ce537f1be4b86-abf47530b79ab8e6\n               TxnId: 4\n           TxnStatus: UNKNOWN\n               JobId: 10280\n          CreateTime: 2020-12-12 20:29:48\n    ExecuteStartTime: 2020-12-12 20:29:48\n             Timeout: 20\n                BeId: 10002\nDataSourceProperties: {"0":19}\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"TaskId"}),"\uFF1A\u5B50\u4EFB\u52A1\u7684\u552F\u4E00 ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"TxnId"}),"\uFF1A\u5B50\u4EFB\u52A1\u5BF9\u5E94\u7684\u5BFC\u5165\u4E8B\u52A1 ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"TxnStatus"}),"\uFF1A\u5B50\u4EFB\u52A1\u5BF9\u5E94\u7684\u5BFC\u5165\u4E8B\u52A1\u72B6\u6001\u3002\u4E3A null \u65F6\u8868\u793A\u5B50\u4EFB\u52A1\u8FD8\u672A\u5F00\u59CB\u8C03\u5EA6\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"JobId"}),"\uFF1A\u5B50\u4EFB\u52A1\u5BF9\u5E94\u7684\u4F5C\u4E1A ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"CreateTime"}),"\uFF1A\u5B50\u4EFB\u52A1\u7684\u521B\u5EFA\u65F6\u95F4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"ExecuteStartTime"}),"\uFF1A\u5B50\u4EFB\u52A1\u88AB\u8C03\u5EA6\u6267\u884C\u7684\u65F6\u95F4\uFF0C\u901A\u5E38\u665A\u4E8E\u521B\u5EFA\u65F6\u95F4\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Timeout"}),"\uFF1A\u5B50\u4EFB\u52A1\u8D85\u65F6\u65F6\u95F4\uFF0C\u901A\u5E38\u662F\u4F5C\u4E1A\u8BBE\u7F6E\u7684 ",(0,l.jsx)(n.code,{children:"max_batch_interval"})," \u7684\u4E24\u500D\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"BeId"}),"\uFF1A\u6267\u884C\u8FD9\u4E2A\u5B50\u4EFB\u52A1\u7684 BE \u8282\u70B9 ID\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"DataSourceProperties"}),"\uFF1A\u5B50\u4EFB\u52A1\u51C6\u5907\u6D88\u8D39\u7684 Kafka Partition \u7684\u8D77\u59CB offset\u3002\u662F\u4E00\u4E2A Json \u683C\u5F0F\u5B57\u7B26\u4E32\u3002Key \u4E3A Partition Id\u3002Value \u4E3A\u6D88\u8D39\u7684\u8D77\u59CB offset\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5C55\u793A\u540D\u4E3A test1 \u7684\u4F8B\u884C\u5BFC\u5165\u4EFB\u52A1\u7684\u5B50\u4EFB\u52A1\u4FE1\u606F\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW ROUTINE LOAD TASK WHERE JobName = "test1";\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, ROUTINE, LOAD, TASK\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,l.jsx)(n.p,{children:"\u901A\u8FC7\u8FD9\u4E2A\u547D\u4EE4\uFF0C\u53EF\u4EE5\u67E5\u770B\u4E00\u4E2A Routine Load \u4F5C\u4E1A\u5F53\u524D\u6709\u591A\u5C11\u5B50\u4EFB\u52A1\u5728\u8FD0\u884C\uFF0C\u5177\u4F53\u8FD0\u884C\u5728\u54EA\u4E2A BE \u8282\u70B9\u4E0A\u3002"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);