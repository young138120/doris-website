"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["790795"],{545828:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>f,assets:()=>r,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/frontends_disks","title":"frontends_disks","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/table-valued-functions/frontends_disks.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/frontends_disks","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/frontends_disks","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"frontends_disks","language":"zh-CN"},"sidebar":"docs","previous":{"title":"FRONTENDS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/frontends"},"next":{"title":"CATALOGS","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/catalogs"}}'),d=s("785893"),i=s("250065");let l={title:"frontends_disks",language:"zh-CN"},o=void 0,r={},a=[{value:"<code>frontends_disks</code>",id:"frontends_disks",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"frontends_disks",children:(0,d.jsx)(n.code,{children:"frontends_disks"})}),"\n",(0,d.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,d.jsx)(n.p,{children:"frontends_disks"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,d.jsx)(n.p,{children:"\u8868\u51FD\u6570\uFF0C\u751F\u6210 frontends_disks \u4E34\u65F6\u8868\uFF0C\u53EF\u4EE5\u67E5\u770B\u5F53\u524D doris \u96C6\u7FA4\u4E2D\u7684 FE \u8282\u70B9\u7684\u78C1\u76D8\u4FE1\u606F\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u7528\u4E8E from \u5B50\u53E5\u4E2D\u3002"}),"\n",(0,d.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"frontends_disks()"})}),"\n",(0,d.jsx)(n.p,{children:"frontends_disks() \u8868\u7ED3\u6784\uFF1A"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mysql> desc function frontends_disks();\n+-------------+------+------+-------+---------+-------+\n| Field       | Type | Null | Key   | Default | Extra |\n+-------------+------+------+-------+---------+-------+\n| Name        | TEXT | No   | false | NULL    | NONE  |\n| Host        | TEXT | No   | false | NULL    | NONE  |\n| DirType     | TEXT | No   | false | NULL    | NONE  |\n| Dir         | TEXT | No   | false | NULL    | NONE  |\n| Filesystem  | TEXT | No   | false | NULL    | NONE  |\n| Capacity    | TEXT | No   | false | NULL    | NONE  |\n| Used        | TEXT | No   | false | NULL    | NONE  |\n| Available   | TEXT | No   | false | NULL    | NONE  |\n| UseRate     | TEXT | No   | false | NULL    | NONE  |\n| MountOn     | TEXT | No   | false | NULL    | NONE  |\n+-------------+------+------+-------+---------+-------+\n11 rows in set (0.14 sec)\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"frontends_disks()"})," tvf \u5C55\u793A\u51FA\u6765\u7684\u4FE1\u606F\u57FA\u672C\u4E0E ",(0,d.jsx)(n.code,{children:"show frontends disks"})," \u8BED\u53E5\u5C55\u793A\u51FA\u7684\u4FE1\u606F\u4E00\u81F4\uFF0C\u4F46\u662F ",(0,d.jsx)(n.code,{children:"frontends_disks()"})," tvf \u7684\u5404\u4E2A\u5B57\u6BB5\u7C7B\u578B\u66F4\u52A0\u660E\u786E\uFF0C\u4E14\u53EF\u4EE5\u5229\u7528 tvf \u751F\u6210\u7684\u8868\u53BB\u505A\u8FC7\u6EE4\u3001join \u7B49\u64CD\u4F5C\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u5BF9 ",(0,d.jsx)(n.code,{children:"frontends_disks()"})," tvf \u4FE1\u606F\u5C55\u793A\u8FDB\u884C\u4E86\u9274\u6743\uFF0C\u4E0E ",(0,d.jsx)(n.code,{children:"show frontends disks"})," \u884C\u4E3A\u4FDD\u6301\u4E00\u81F4\uFF0C\u8981\u6C42\u7528\u6237\u5177\u6709 ADMIN/OPERATOR \u6743\u9650\u3002"]}),"\n",(0,d.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mysql> select * from frontends_disk()\\G\n*************************** 1. row ***************************\n       Name: fe_fe1d5bd9_d1e5_4ccc_9b03_ca79b95c9941\n       Host: 172.XX.XX.1\n    DirType: log\n        Dir: /data/doris/fe-github/log\n Filesystem: /dev/sdc5\n   Capacity: 366G\n       Used: 119G\n  Available: 228G\n    UseRate: 35%\n    MountOn: /data\n......    \n12 row in set (0.03 sec)\n"})}),"\n",(0,d.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"frontends_disks\n"})})]})}function f(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let d={},i=t.createContext(d);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);