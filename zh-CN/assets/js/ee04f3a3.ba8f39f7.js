"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["216209"],{690424:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var o=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM","title":"WINDOW-FUNCTION-SUM","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-SUM","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"WINDOW-FUNCTION-SUM","language":"zh-CN"},"sidebar":"docs","previous":{"title":"WINDOW-FUNCTION-LAG","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG"},"next":{"title":"WINDOW-FUNCTION-LAST_VALUE","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE"}}'),i=t("785893"),s=t("250065");let r={title:"WINDOW-FUNCTION-SUM",language:"zh-CN"},l=void 0,c={},d=[{value:"WINDOW FUNCTION SUM",id:"window-function-sum",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"window-function-sum",children:"WINDOW FUNCTION SUM"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.p,{children:"\u8BA1\u7B97\u7A97\u53E3\u5185\u6570\u636E\u7684\u548C"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SUM([DISTINCT | ALL] expression) [OVER (analytic_clause)]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.p,{children:"\u6309\u7167 property \u8FDB\u884C\u5206\u7EC4\uFF0C\u5728\u7EC4\u5185\u8BA1\u7B97\u5F53\u524D\u884C\u4EE5\u53CA\u524D\u540E\u5404\u4E00\u884C\u7684x\u5217\u7684\u548C\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select x, property,   \nsum(x) over    \n(   \npartition by property   \norder by x   \nrows between 1 preceding and 1 following    \n) as 'moving total'    \nfrom int_t where property in ('odd','even');\n\n| x  | property | moving total |\n|----|----------|--------------|\n| 2  | even     | 6            |\n| 4  | even     | 12           |\n| 6  | even     | 18           |\n| 8  | even     | 24           |\n| 10 | even     | 18           |\n| 1  | odd      | 4            |\n| 3  | odd      | 9            |\n| 5  | odd      | 15           |\n| 7  | odd      | 21           |\n| 9  | odd      | 16           |\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"WINDOW,FUNCTION,SUM\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var o=t(667294);let i={},s=o.createContext(i);function r(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);