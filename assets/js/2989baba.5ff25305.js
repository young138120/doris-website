"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["542172"],{377377:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>p,assets:()=>d,toc:()=>r,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/CANCEL-LOAD","title":"CANCEL LOAD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-LOAD.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-LOAD","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-LOAD","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CANCEL LOAD","language":"en"},"sidebar":"docs","previous":{"title":"SHOW CREATE LOAD","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-CREATE-LOAD"},"next":{"title":"SHOW LOAD PROFILE","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-PROFILE"}}'),s=t("785893"),l=t("250065");let i={title:"CANCEL LOAD",language:"en"},o=void 0,d={},r=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to undo an import job for the specified label. Or batch undo import jobs via fuzzy matching"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CANCEL LOAD\n[FROM db_name]\nWHERE [LABEL = "load_label" | LABEL like "label_pattern" | STATE = "PENDING/ETL/LOADING"]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Notice: Cancel by State is supported since 1.2.0."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Cancel the import job whose label is ",(0,s.jsx)(n.code,{children:"example_db_test_load_label"})," on the database example_db"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CANCEL LOAD\nFROM example_db\nWHERE LABEL = "example_db_test_load_label";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Cancel all import jobs containing example* on the database example*db."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CANCEL LOAD\nFROM example_db\nWHERE LABEL like "example_";\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'Cancel all import jobs which state are "LOADING"'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CANCEL LOAD\nFROM example_db\nWHERE STATE = "loading";\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Tips",type:"tip",children:(0,s.jsx)(n.p,{children:"This feature is supported since the Apache Doris 1.2 version"})}),"\n",(0,s.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:" CANCEL, LOAD\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Only pending import jobs in PENDING, ETL, LOADING state can be canceled."}),"\n",(0,s.jsx)(n.li,{children:"When performing batch undo, Doris does not guarantee the atomic undo of all corresponding import jobs. That is, it is possible that only some of the import jobs were successfully undone. The user can view the job status through the SHOW LOAD statement and try to execute the CANCEL LOAD statement repeatedly."}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(667294);let s={},l=a.createContext(s);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);