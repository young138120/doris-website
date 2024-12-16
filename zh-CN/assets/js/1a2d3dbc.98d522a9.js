"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["816843"],{224275:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/get-load-state","title":"Get Load State","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/fe-http/get-load-state.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/get-load-state","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-load-state","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Get Load State","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Get Load Info Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-load-info-action"},"next":{"title":"Get FE log file","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-log-file-action"}}'),s=t("785893"),l=t("250065");let i={title:"Get Load State",language:"zh-CN"},r=void 0,d={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/<db>/get_load_state"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"\u8FD4\u56DE\u6307\u5B9A label \u7684\u5BFC\u5165\u4E8B\u52A1\u7684\u72B6\u6001\n\u6267\u884C\u5B8C\u6BD5\u540E\uFF0C\u4F1A\u4EE5 Json \u683C\u5F0F\u8FD4\u56DE\u8FD9\u6B21\u5BFC\u5165\u7684\u76F8\u5173\u5185\u5BB9\u3002\u5F53\u524D\u5305\u62EC\u4EE5\u4E0B\u5B57\u6BB5\uFF1A\nLabel\uFF1A\u672C\u6B21\u5BFC\u5165\u7684 label\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u4E3A\u4E00\u4E2A uuid\nStatus\uFF1A\u6B64\u547D\u4EE4\u662F\u5426\u6210\u529F\u6267\u884C\uFF0CSuccess \u8868\u793A\u6210\u529F\u6267\u884C\nMessage\uFF1A\u5177\u4F53\u7684\u6267\u884C\u4FE1\u606F\nState: \u53EA\u6709\u5728 Status \u4E3A Success \u65F6\u624D\u6709\u610F\u4E49\nUNKNOWN: \u6CA1\u6709\u627E\u5230\u5BF9\u5E94\u7684 Label\nPREPARE: \u5BF9\u5E94\u7684\u4E8B\u52A1\u5DF2\u7ECF prepare\uFF0C\u4F46\u5C1A\u672A\u63D0\u4EA4\nCOMMITTED: \u4E8B\u52A1\u5DF2\u7ECF\u63D0\u4EA4\uFF0C\u4E0D\u80FD\u88AB cancel\nVISIBLE: \u4E8B\u52A1\u63D0\u4EA4\uFF0C\u5E76\u4E14\u6570\u636E\u53EF\u89C1\uFF0C\u4E0D\u80FD\u88AB cancel\nABORTED: \u4E8B\u52A1\u5DF2\u7ECF\u88AB ROLLBACK\uFF0C\u5BFC\u5165\u5DF2\u7ECF\u5931\u8D25"}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"<db>"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"label"})}),"\n",(0,s.jsx)(n.p,{children:"\u6307\u5B9A\u5BFC\u5165 label"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"\u65E0"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": "VISIBLE",\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u5982 label \u4E0D\u5B58\u5728\uFF0C\u5219\u8FD4\u56DE\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": "UNKNOWN",\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A label \u7684\u5BFC\u5165\u4E8B\u52A1\u7684\u72B6\u6001\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/example_db/get_load_state?label=my_label\n\n{\n	"msg": "success",\n	"code": 0,\n	"data": "VISIBLE",\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var a=t(667294);let s={},l=a.createContext(s);function i(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);