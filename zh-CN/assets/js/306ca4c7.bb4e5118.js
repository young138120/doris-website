"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["41227"],{229219:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG","title":"ADMIN-SET-CONFIG","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-CONFIG","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ADMIN-SET-CONFIG","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN-SHOW-CONFIG","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-CONFIG"},"next":{"title":"SET-VARIABLE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-reference/Database-Administration-Statements/SET-VARIABLE"}}'),a=t("785893"),i=t("250065");let r={title:"ADMIN-SET-CONFIG",language:"zh-CN"},l=void 0,c={},d=[{value:"ADMIN-SET-CONFIG",id:"admin-set-config",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"admin-set-config",children:"ADMIN-SET-CONFIG"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"ADMIN SET CONFIG"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u8BBE\u7F6E\u96C6\u7FA4\u7684\u914D\u7F6E\u9879\uFF08\u5F53\u524D\u4EC5\u652F\u6301\u8BBE\u7F6EFE\u7684\u914D\u7F6E\u9879\uFF09\u3002\n\u53EF\u8BBE\u7F6E\u7684\u914D\u7F6E\u9879\uFF0C\u53EF\u4EE5\u901A\u8FC7 ADMIN SHOW FRONTEND CONFIG; \u547D\u4EE4\u67E5\u770B\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'  ADMIN SET FRONTEND CONFIG ("key" = "value") [ALL];\n  ADMIN SET ALL FRONTENDS CONFIG ("key" = "value");\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"1. \u4F7F\u7528ALL\u5173\u952E\u5B57\u540E\u914D\u7F6E\u53C2\u6570\u5C06\u5E94\u7528\u4E8E\u6240\u6709FE(\u9664 master_only \u53C2\u6570\u5916)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u8BBE\u7F6E 'disable_balance' \u4E3A true"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:' ADMIN SET FRONTEND CONFIG ("disable_balance" = "true");\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ADMIN, SET, CONFIG\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);