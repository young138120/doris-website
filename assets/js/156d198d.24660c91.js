"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["4257"],{302236:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM","title":"CANCEL-ALTER-SYSTEM","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM.md","sourceDirName":"sql-manual/sql-reference/Cluster-Management-Statements","slug":"/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM","permalink":"/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/CANCEL-ALTER-SYSTEM","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"CANCEL-ALTER-SYSTEM","language":"en"},"sidebar":"docs","previous":{"title":"ALTER-SYSTEM-DROP-BROKER","permalink":"/docs/2.0/sql-manual/sql-reference/Cluster-Management-Statements/ALTER-SYSTEM-DROP-BROKER"},"next":{"title":"CREATE-ROLE","permalink":"/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/CREATE-ROLE"}}'),l=t("785893"),r=t("250065");let a={title:"CANCEL-ALTER-SYSTEM",language:"en"},i=void 0,c={},o=[{value:"CANCEL-ALTER-SYSTEM",id:"cancel-alter-system",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"cancel-alter-system",children:"CANCEL-ALTER-SYSTEM"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"CANCEL DECOMMISSION"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"This statement is used to undo a node offline operation. (Administrator only!)"}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Find backend through host and port"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CANCEL DECOMMISSION BACKEND "host:heartbeat_port"[,"host:heartbeat_port"...];\n'})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Find backend through backend_id"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CANCEL DECOMMISSION BACKEND "id1","id2","id3...";\n'})}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Cancel the offline operation of both nodes:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'CANCEL DECOMMISSION BACKEND "host1:port", "host2:port";\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Cancel the offline operation of the node with backend_id 1:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'    CANCEL DECOMMISSION BACKEND "1","2";\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"CANCEL, DECOMMISSION, CANCEL ALTER\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let l={},r=s.createContext(l);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);