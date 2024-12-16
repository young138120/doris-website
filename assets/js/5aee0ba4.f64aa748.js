"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["370819"],{40644:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/strright","title":"STRRIGHT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/strright.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/strright","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/strright","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STRRIGHT","language":"en"},"sidebar":"docs","previous":{"title":"STRLEFT","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/strleft"},"next":{"title":"SPLIT_PART","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/split-part"}}'),r=t("785893"),i=t("250065");let l={title:"STRRIGHT",language:"en"},o=void 0,a={},c=[{value:"strright",id:"strright",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"strright",children:"strright"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"VARCHAR strright (VARCHAR str, INT len)"})}),"\n",(0,r.jsxs)(n.p,{children:["It returns the right part of a string of specified length, length is char length not the byte size. Another alias for this function is ",(0,r.jsx)(n.code,{children:"right"}),".\nIf the parameters contain a NULL value, the function will always return NULL. If the integer parameter is negative, the function will retrieve the portion of the string starting from the left and moving to the right, beginning at the absolute value of len."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select strright(\"Hello doris\",5);\n+-------------------------+\n| strright('Hello doris', 5) |\n+-------------------------+\n| doris                   |\n+-------------------------+\nmysql> select strright(\"Hello doris\",-7);\n+--------------------------+\n| strright('Hello doris', -7) |\n+--------------------------+\n| doris                    |\n+--------------------------+\nmysql> select strright(\"Hello doris\",NULL);\n+----------------------------+\n| strright('Hello doris', NULL) |\n+----------------------------+\n| NULL                       |\n+----------------------------+\nmysql> select strright(NULL,5);\n+----------------+\n| strright(NULL, 5) |\n+----------------+\n| NULL           |\n+----------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"STRRIGHT, RIGHT\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);