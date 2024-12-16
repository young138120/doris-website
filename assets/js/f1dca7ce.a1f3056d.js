"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["45045"],{284519:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>p,assets:()=>d,toc:()=>r,frontMatter:()=>s});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/get-load-info-action","title":"Get Load Info Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/get-load-info-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/get-load-info-action","permalink":"/docs/admin-manual/open-api/fe-http/get-load-info-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Get Load Info Action","language":"en"},"sidebar":"docs","previous":{"title":"Get DDL Statement Action","permalink":"/docs/admin-manual/open-api/fe-http/get-ddl-stmt-action"},"next":{"title":"Get Load State","permalink":"/docs/admin-manual/open-api/fe-http/get-load-state"}}'),l=t("785893"),i=t("250065");let s={title:"Get Load Info Action",language:"en"},o="Get Load Info Action",d={},r=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"get-load-info-action",children:"Get Load Info Action"})}),"\n",(0,l.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET /api/<db>/_load_info"})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Used to obtain the information of the load job of the specified label."}),"\n",(0,l.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"<db>"})}),"\n",(0,l.jsx)(n.p,{children:"Specify database"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"label"})}),"\n",(0,l.jsx)(n.p,{children:"Specify load label"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,l.jsx)(n.p,{children:"None"}),"\n",(0,l.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"dbName": "default_cluster:db1",\n		"tblNames": ["tbl1"],\n		"label": "my_label",\n		"clusterName": "default_cluster",\n		"state": "FINISHED",\n		"failMsg": "",\n		"trackingUrl": ""\n	},\n	"count": 0\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Get the load job information of the specified label"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'GET /api/example_db/_load_info?label=my_label\n\nResponse\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"dbName": "default_cluster:db1",\n		"tblNames": ["tbl1"],\n		"label": "my_label",\n		"clusterName": "default_cluster",\n		"state": "FINISHED",\n		"failMsg": "",\n		"trackingUrl": ""\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var a=t(667294);let l={},i=a.createContext(l);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);