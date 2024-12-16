"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["228047"],{371374:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-statements/session/variable/SHOW-VARIABLES","title":"SHOW VARIABLES","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/session/variable/SHOW-VARIABLES.md","sourceDirName":"sql-manual/sql-statements/session/variable","slug":"/sql-manual/sql-statements/session/variable/SHOW-VARIABLES","permalink":"/docs/3.0/sql-manual/sql-statements/session/variable/SHOW-VARIABLES","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW VARIABLES","language":"en"},"sidebar":"docs","previous":{"title":"UNSET VARIABLE","permalink":"/docs/3.0/sql-manual/sql-statements/session/variable/UNSET-VARIABLE"},"next":{"title":"SHOW PROCESSLIST","permalink":"/docs/3.0/sql-manual/sql-statements/session/queries/SHOW-PROCESSLIST"}}'),t=s("785893"),l=s("250065");let a={title:"SHOW VARIABLES",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to display Doris system variables, which can be queried by conditions"}),"\n",(0,t.jsx)(n.p,{children:"grammar:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW [GLOBAL | SESSION] VARIABLES\n     [LIKE 'pattern' | WHERE expr]\n"})}),"\n",(0,t.jsx)(n.p,{children:"illustrate:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"show variables is mainly used to view the values of system variables."}),"\n",(0,t.jsx)(n.li,{children:"Executing the SHOW VARIABLES command does not require any privileges, it only requires being able to connect to the server."}),"\n",(0,t.jsx)(n.li,{children:"Use the like statement to match with variable_name."}),"\n",(0,t.jsx)(n.li,{children:"The % percent wildcard can be used anywhere in the matching pattern"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The default here is to match the Variable_name, here is the exact match"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show variables like 'max_connections';\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Matching through the percent sign (%) wildcard can match multiple items"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show variables like '%connec%';\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Use the Where clause for matching queries"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"show variables where variable_name = 'version';\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SHOW, VARIABLES\n"})}),"\n",(0,t.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var i=s(667294);let t={},l=i.createContext(t);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);