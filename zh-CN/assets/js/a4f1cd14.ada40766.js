"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["581847"],{501775:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/instr","title":"INSTR","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/instr.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/instr","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/instr","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"INSTR","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ELT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/elt"},"next":{"title":"LOCATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/string-functions/locate"}}'),i=t("785893"),r=t("250065");let l={title:"INSTR",language:"zh-CN"},c=void 0,o={},a=[{value:"instr",id:"instr",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"instr",children:"instr"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"INT instr(VARCHAR str, VARCHAR substr)"})}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE substr \u5728 str \u4E2D\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF08\u4ECE1\u5F00\u59CB\u8BA1\u6570\uFF09\u3002\u5982\u679C substr \u4E0D\u5728 str \u4E2D\u51FA\u73B0\uFF0C\u5219\u8FD4\u56DE0\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select instr(\"abc\", \"b\");\n+-------------------+\n| instr('abc', 'b') |\n+-------------------+\n|                 2 |\n+-------------------+\n\nmysql> select instr(\"abc\", \"d\");\n+-------------------+\n| instr('abc', 'd') |\n+-------------------+\n|                 0 |\n+-------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"INSTR\n"})})]})}function d(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);