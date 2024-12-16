"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["539509"],{827243:function(e,t,n){n.r(t),n.d(t,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>l,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/extract-url-parameter","title":"EXTRACT_URL_PARAMETER","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/string-functions/extract-url-parameter.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/extract-url-parameter","permalink":"/docs/sql-manual/sql-functions/string-functions/extract-url-parameter","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"EXTRACT_URL_PARAMETER","language":"en"},"sidebar":"docs","previous":{"title":"CONVERT_TO","permalink":"/docs/sql-manual/sql-functions/string-functions/convert-to"},"next":{"title":"UUID","permalink":"/docs/sql-manual/sql-functions/string-functions/uuid"}}'),s=n("785893"),a=n("250065");let i={title:"EXTRACT_URL_PARAMETER",language:"en"},c=void 0,l={},o=[{value:"extract_url_parameter",id:"extract_url_parameter",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"keywords",id:"keywords",level:3}];function u(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"extract_url_parameter",children:"extract_url_parameter"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"VARCHAR  extract_url_parameter(VARCHAR url, VARCHAR  name)"})}),"\n",(0,s.jsx)(t.p,{children:'Returns the value of the "name" parameter in the URL, if present. Otherwise an empty string.\nIf there are many parameters with this name, the first occurrence is returned.\nThis function works assuming that the parameter name is encoded in the URL exactly as it was in the passed parameter.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> SELECT extract_url_parameter (\"http://doris.apache.org?k1=aa&k2=bb&test=cc#999\", \"k2\");\n+--------------------------------------------------------------------------------+\n| extract_url_parameter('http://doris.apache.org?k1=aa&k2=bb&test=cc#999', 'k2') |\n+--------------------------------------------------------------------------------+\n| bb                                                                             |\n+--------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you want to get other part of URL, you can use ",(0,s.jsx)(t.a,{href:"./parse_url.md",children:"parse_url"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"EXTRACT URL PARAMETER\n"})})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(667294);let s={},a=r.createContext(s);function i(e){let t=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);