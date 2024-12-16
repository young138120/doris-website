"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["95178"],{482970:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/hours-add","title":"HOURS_ADD","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/date-time-functions/hours-add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/hours-add","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/hours-add","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"HOURS_ADD","language":"en"},"sidebar":"docs","previous":{"title":"SECONDS_SUB","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/seconds-sub"},"next":{"title":"HOURS_DIFF","permalink":"/docs/2.0/sql-manual/sql-functions/date-time-functions/hours-diff"}}'),i=t("785893"),d=t("250065");let r={title:"HOURS_ADD",language:"en"},o=void 0,a={},l=[{value:"hours_add",id:"hours_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"hours_add",children:"hours_add"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME HOURS_ADD(DATETIME date, INT hours)"})}),"\n",(0,i.jsx)(n.p,{children:"Add specified hours from date time or date"}),"\n",(0,i.jsx)(n.p,{children:"The parameter date can be DATETIME or DATE, and the return type is DATETIME."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select hours_add(\"2020-02-02 02:02:02\", 1);\n+-------------------------------------+\n| hours_add('2020-02-02 02:02:02', 1) |\n+-------------------------------------+\n| 2020-02-02 03:02:02                 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"HOURS_ADD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var s=t(667294);let i={},d=s.createContext(i);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);