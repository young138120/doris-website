"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["502122"],{623771:function(A,e,n){n.r(e),n.d(e,{metadata:()=>t,contentTitle:()=>s,default:()=>d,assets:()=>l,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"admin-manual/open-api/fe-http/table-query-plan-action","title":"Table Query Plan Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/table-query-plan-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/table-query-plan-action","permalink":"/docs/admin-manual/open-api/fe-http/table-query-plan-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Table Query Plan Action","language":"en"},"sidebar":"docs","previous":{"title":"Statement Execution Action","permalink":"/docs/admin-manual/open-api/fe-http/statement-execution-action"},"next":{"title":"Table Row Count Action","permalink":"/docs/admin-manual/open-api/fe-http/table-row-count-action"}}'),a=n("785893"),r=n("250065");let i={title:"Table Query Plan Action",language:"en"},s="Table Query Plan Action",l={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(A){let e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...A.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"table-query-plan-action",children:"Table Query Plan Action"})}),"\n",(0,a.jsx)(e.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"POST /api/<db>/<table>/_query_plan"})}),"\n",(0,a.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(e.p,{children:"Given a SQL, it is used to obtain the query plan corresponding to the SQL."}),"\n",(0,a.jsx)(e.p,{children:"This interface is currently used in Spark-Doris-Connector, Spark obtains Doris' query plan."}),"\n",(0,a.jsx)(e.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"<db>"})}),"\n",(0,a.jsx)(e.p,{children:"Specify database"}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.code,{children:"<table>"})}),"\n",(0,a.jsx)(e.p,{children:"Specify table"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsx)(e.p,{children:"None"}),"\n",(0,a.jsx)(e.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'{\n	"sql": "select * from db1.tbl1;"\n}\n'})}),"\n",(0,a.jsx)(e.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"partitions": {\n			"10039": {\n				"routings": ["10.81.85.89:9062"],\n				"version": 2,\n				"versionHash": 982459448378619656,\n				"schemaHash": 1294206575\n			}\n		},\n		"opaqued_query_plan": "DAABDAACDwABDAAAAAEIAAEAAAAACAACAAAAAAgAAwAAAAAKAAT//////////w8ABQgAAAABAAAAAA8ABgIAAAABAAIACAAMABIIAAEAAAAADwACCwAAAAIAAAACazEAAAACazIPAAMIAAAAAgAAAAUAAAAFAgAEAQAAAA8ABAwAAAACDwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAAACAACAAAAAAAIABT/////CAAX/////wAADwABDAAAAAEIAAEAAAAQDAACDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABAAAAAAMAA8IAAEAAAABCAACAAAAAAAIABT/////CAAX/////wAADAAFCAABAAAABgwACAAADAAGCAABAAAAAA8AAgwAAAAAAAoABwAAAAAAAAAACgAIAAAAAAAAAAAADQACCgwAAAABAAAAAAAAJzcKAAEAAAAAAAAnNwoAAgAAAAAAAAACCgADDaJlqbrVdwgIAARNJAZvAAwAAw8AAQwAAAACCAABAAAAAAgAAgAAAAAMAAMPAAEMAAAAAQgAAQAAAAAMAAIIAAEAAAAFAAAACAAE/////wgABQAAAAQIAAYAAAAACAAHAAAAAAsACAAAAAJrMQgACQAAAAACAAoBAAgAAQAAAAEIAAIAAAAADAADDwABDAAAAAEIAAEAAAAADAACCAABAAAABQAAAAgABP////8IAAUAAAAICAAGAAAAAAgABwAAAAELAAgAAAACazIIAAkAAAABAgAKAQAPAAIMAAAAAQgAAQAAAAAIAAIAAAAMCAADAAAAAQoABAAAAAAAACc1CAAFAAAAAgAPAAMMAAAAAQoAAQAAAAAAACc1CAACAAAAAQgAAwAAAAIIAAQAAAAACwAHAAAABHRibDELAAgAAAAADAALCwABAAAABHRibDEAAAAMAAQKAAFfL5rpxl1I4goAArgs6f+h6eMxAAA=",\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Among them, ",(0,a.jsx)(e.code,{children:"opaqued_query_plan"})," is the binary format of the query plan."]}),"\n",(0,a.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Get the query plan of the specified SQL"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{children:'POST /api/db1/tbl1/_query_plan\n{\n    "sql": "select * from db1.tbl1;"\n}\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"partitions": {\n			"10039": {\n				"routings": ["192.168.1.1:9060"],\n				"version": 2,\n				"versionHash": 982459448378619656,\n				"schemaHash": 1294206575\n			}\n		},\n		"opaqued_query_plan": "DAABDAACDwABD...",\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function d(A={}){let{wrapper:e}={...(0,r.a)(),...A.components};return e?(0,a.jsx)(e,{...A,children:(0,a.jsx)(c,{...A})}):c(A)}},250065:function(A,e,n){n.d(e,{Z:function(){return s},a:function(){return i}});var t=n(667294);let a={},r=t.createContext(a);function i(A){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof A?A(e):{...e,...A}},[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(a):A.components||a:i(A.components),t.createElement(r.Provider,{value:e},A.children)}}}]);