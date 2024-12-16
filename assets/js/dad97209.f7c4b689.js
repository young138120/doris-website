"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["514888"],{371603:function(e,n,i){i.r(n),i.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>t});var o=JSON.parse('{"id":"admin-manual/open-api/fe-http/fe-version-info-action","title":"Fe Version Info Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/fe-version-info-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/fe-version-info-action","permalink":"/docs/admin-manual/open-api/fe-http/fe-version-info-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Fe Version Info Action","language":"en"},"sidebar":"docs","previous":{"title":"Extra Basepath Action","permalink":"/docs/admin-manual/open-api/fe-http/extra-basepath-action"},"next":{"title":"Get DDL Statement Action","permalink":"/docs/admin-manual/open-api/fe-http/get-ddl-stmt-action"}}'),r=i("785893"),s=i("250065");let t={title:"Fe Version Info Action",language:"en"},d="Fe Version Info Action",a={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"fe-version-info-action",children:"Fe Version Info Action"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/fe_version_info"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Get fe version info from fe host."}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"None."}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"None."}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"None."}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'```\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n'})}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'```\nGET /api/fe_version_info\n\nResponse:\n{\n    "msg":"success",\n    "code":0,\n    "data":{\n        "feVersionInfo":{\n            "dorisBuildVersionPrefix":"doris",\n            "dorisBuildVersionMajor":0,\n            "dorisBuildVersionMinor":0,\n            "dorisBuildVersionPatch":0,\n            "dorisBuildVersionRcVersion":"trunk",\n            "dorisBuildVersion":"doris-0.0.0-trunk",\n            "dorisBuildHash":"git://4b7b503d1cb3/data/doris/doris/be/../@a04f9814fe5a09c0d9e9399fe71cc4d765f8bff1",\n            "dorisBuildShortHash":"a04f981",\n            "dorisBuildTime":"Fri, 09 Sep 2022 07:57:02 UTC",\n            "dorisBuildInfo":"root@4b7b503d1cb3",\n            "dorisJavaCompileVersion":"openjdk full version \\"1.8.0_332-b09\\""\n        }\n    },\n    "count":0\n}\n```\n'})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return t}});var o=i(667294);let r={},s=o.createContext(r);function t(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);