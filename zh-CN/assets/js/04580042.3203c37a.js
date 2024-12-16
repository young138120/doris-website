"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["698849"],{434661:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/elt","title":"ELT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/string-functions/elt.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/elt","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/elt","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ELT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"UNHEX","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/unhex"},"next":{"title":"INSTR","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/string-functions/instr"}}'),l=t("785893"),i=t("250065");let a={title:"ELT",language:"zh-CN"},r=void 0,c={},o=[{value:"elt",id:"elt",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"elt",children:"elt"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"VARCHAR elt(INT, VARCHAR,...)"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6307\u5B9A\u7684\u7D22\u5F15\u5904\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u5982\u679C\u6307\u5B9A\u7684\u7D22\u5F15\u5904\u6CA1\u6709\u5B57\u7B26\u4E32\uFF0C\u5219\u8FD4\u56DENULL\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select elt(1, 'aaa', 'bbb');\n+----------------------+\n| elt(1, 'aaa', 'bbb') |\n+----------------------+\n| aaa                  |\n+----------------------+\nmysql> select elt(2, 'aaa', 'bbb');\n+-----------------------+\n| elt(2, 'aaa', 'bbb')  |\n+-----------------------+\n| bbb                   |\n+-----------------------+\nmysql> select elt(0, 'aaa', 'bbb');\n+----------------------+\n| elt(0, 'aaa', 'bbb') |\n+----------------------+\n| NULL                 |\n+----------------------+\nmysql> select elt(2, 'aaa', 'bbb');\n+-----------------------+\n| elt(3, 'aaa', 'bbb')  |\n+-----------------------+\n| NULL                  |\n+-----------------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"ELT\n"})})]})}function d(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return a}});var s=t(667294);let l={},i=s.createContext(l);function a(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:a(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);