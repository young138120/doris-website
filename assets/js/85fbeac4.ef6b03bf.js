"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["136427"],{250645:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/var-samp","title":"VARIANCE_SAMP,VARIANCE_SAMP","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/aggregate-functions/var-samp.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/var-samp","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/var-samp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"VARIANCE_SAMP,VARIANCE_SAMP","language":"en"},"sidebar":"docs","previous":{"title":"VARIANCE,VAR_POP,VARIANCE_POP","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/variance"},"next":{"title":"COVAR,COVAR_POP","permalink":"/docs/dev/sql-manual/sql-functions/aggregate-functions/covar"}}'),a=t("785893"),r=t("250065");let i={title:"VARIANCE_SAMP,VARIANCE_SAMP",language:"en"},l=void 0,o={},c=[{value:"VARIANCE_SAMP,VARIANCE_SAMP",id:"variance_sampvariance_samp",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"variance_sampvariance_samp",children:"VARIANCE_SAMP,VARIANCE_SAMP"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"VAR SAMP (expr)"})}),"\n",(0,a.jsx)(n.p,{children:"Returns the sample variance of the expr expression"}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"MySQL > select var_samp(scan_rows) from log_statis group by datetime;\n+-----------------------+\n| var_samp(`scan_rows`) |\n+-----------------------+\n|    5.6227132145741789 |\n+-----------------------+\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.p,{children:"VAR SAMP, VARIANCE SAMP,VAR,SAMP,VARIANCE"})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);