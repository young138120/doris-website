"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381192"],{882673:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>s});var l=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/date-floor","title":"date_floor","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/date-time-functions/date-floor.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/date-floor","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/date-floor","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"date_floor","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DATEDIFF","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/datediff"},"next":{"title":"second_floor","permalink":"/zh-CN/docs/sql-manual/sql-functions/date-time-functions/second-floor"}}'),i=t("785893"),o=t("250065");let s={title:"date_floor",language:"zh-CN"},r=void 0,c={},d=[{value:"date_floor",id:"date_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"date_floor",children:"date_floor"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATETIME DATE_FLOOR(DATETIME datetime, INTERVAL period type)"})}),"\n",(0,i.jsx)(n.p,{children:"\u5C06\u65E5\u671F\u8F6C\u5316\u4E3A\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u5468\u671F\u7684\u6700\u8FD1\u4E0B\u53D6\u6574\u65F6\u523B\u3002"}),"\n",(0,i.jsx)(n.p,{children:"datetime \u53C2\u6570\u662F\u5408\u6CD5\u7684\u65E5\u671F\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,i.jsx)(n.p,{children:"period \u53C2\u6570\u662F\u6307\u5B9A\u6BCF\u4E2A\u5468\u671F\u6709\u591A\u5C11\u4E2A\u5355\u4F4D\u7EC4\u6210\uFF0C\u5F00\u59CB\u7684\u65F6\u95F4\u8D77\u70B9\u4E3A0001-01-01T00:00:00."}),"\n",(0,i.jsx)(n.p,{children:"type \u53C2\u6570\u53EF\u4EE5\u662F\u4E0B\u5217\u503C\uFF1AYEAR, MONTH, DAY, HOUR, MINUTE, SECOND."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql>select date_floor(\"0001-01-01 00:00:16\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:16', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"0001-01-01 00:00:18\",interval 5 second);\n+---------------------------------------------------------------+\n| second_floor('0001-01-01 00:00:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 0001-01-01 00:00:15                                           |\n+---------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 minute);\n+---------------------------------------------------------------+\n| minute_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 hour);\n+-------------------------------------------------------------+\n| hour_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-07-13 18:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 day);\n+------------------------------------------------------------+\n| day_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-10 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 month);\n+--------------------------------------------------------------+\n| month_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-01 00:00:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql>select date_floor(\"2023-07-13 22:28:18\",interval 5 year);\n+-------------------------------------------------------------+\n| year_floor('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2021-01-01 00:00:00                                         |\n+-------------------------------------------------------------+\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"DATE_FLOOR,DATE,FLOOR\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsx)(n.p,{children:"\u8FD8\u53EF\u53C2\u9605\uFF1A"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./second_ceil",children:"second_ceil"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./minute_ceil",children:"minute_ceil"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./hour_ceil",children:"hour_ceil"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./day_ceil",children:"day_ceil"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./month_ceil",children:"month_ceil"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"./year_ceil",children:"year_ceil"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return s}});var l=t(667294);let i={},o=l.createContext(i);function s(e){let n=l.useContext(o);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);