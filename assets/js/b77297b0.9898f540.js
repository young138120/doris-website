"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["793755"],{902044:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS","title":"SHOW-LOAD-WARNINGS","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS","permalink":"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-WARNINGS","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"SHOW-LOAD-WARNINGS","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-LOAD-PROFILE","permalink":"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD-PROFILE"},"next":{"title":"SHOW-INDEX","permalink":"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-INDEX"}}'),l=t("785893"),i=t("250065");let r={title:"SHOW-LOAD-WARNINGS",language:"en"},a=void 0,o={},c=[{value:"SHOW-LOAD-WARNINGS",id:"show-load-warnings",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"show-load-warnings",children:"SHOW-LOAD-WARNINGS"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"SHOW LOAD WARNINGS"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["If the import task fails and the error message is ",(0,l.jsx)(n.code,{children:"ETL_QUALITY_UNSATISFIED"}),", it means that there is an import quality problem. If you want to see these import tasks with quality problems, change the statement to complete this operation."]}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS\n[FROM db_name]\n[\n    WHERE\n    [LABEL[="your_label"]]\n    [LOAD_JOB_ID = ["job id"]]\n]\n'})}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"If db_name is not specified, the current default db is used"}),"\n",(0,l.jsx)(n.li,{children:"If LABEL = is used, it matches the specified label exactly"}),"\n",(0,l.jsx)(n.li,{children:"If LOAD_JOB_ID is specified, match the specified JOB ID exactly"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:'Display the data with quality problems in the import task of the specified db, and specify the label as "load_demo_20210112"'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'SHOW LOAD WARNINGS FROM demo WHERE LABEL = "load_demo_20210112"\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, LOAD, WARNINGS\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let l={},i=s.createContext(l);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);