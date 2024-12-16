"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["446072"],{772385:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>r,toc:()=>a,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/sec-to-time","title":"SEC_TO_TIME","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/sec-to-time.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/sec-to-time","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/sec-to-time","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SEC_TO_TIME","language":"zh-CN"},"sidebar":"docs","previous":{"title":"TIME_TO_SEC","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/time-to-sec"},"next":{"title":"EXTRACT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/extract"}}'),i=n("785893"),o=n("250065");let c={title:"SEC_TO_TIME",language:"zh-CN"},l=void 0,r={},a=[{value:"sec_to_time",id:"sec_to_time",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"sec_to_time",children:"sec_to_time"}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"TIME sec_to_time(INT timestamp)"})}),"\n",(0,i.jsx)(t.p,{children:"\u53C2\u6570\u4E3AINT\u7C7B\u578B\u65F6\u95F4\u6233\uFF0C\u51FD\u6570\u8FD4\u56DETIME\u7C7B\u578B\u65F6\u95F4\u3002"}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql >select sec_to_time(time_to_sec(cast('16:32:18' as time)));\n+----------------------------------------------------+\n| sec_to_time(time_to_sec(CAST('16:32:18' AS TIME))) |\n+----------------------------------------------------+\n| 16:32:18                                           |\n+----------------------------------------------------+\n1 row in set (0.53 sec)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"SEC_TO_TIME\n"})})]})}function u(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return c}});var s=n(667294);let i={},o=s.createContext(i);function c(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);