"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["965037"],{618586:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/week","title":"WEEK","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/date-time-functions/week.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/week","permalink":"/docs/sql-manual/sql-functions/date-time-functions/week","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"WEEK","language":"en"},"sidebar":"docs","previous":{"title":"DAYOFWEEK","permalink":"/docs/sql-manual/sql-functions/date-time-functions/dayofweek"},"next":{"title":"WEEKDAY","permalink":"/docs/sql-manual/sql-functions/date-time-functions/weekday"}}'),s=n("785893"),i=n("250065");let d={title:"WEEK",language:"en"},r=void 0,c={},a=[{value:"week",id:"week",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function x(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"week",children:"week"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"INT WEEK(DATE date[, INT mode])"})}),"\n",(0,s.jsx)(t.p,{children:"Returns the week number for date.The value of the mode argument defaults to 0.\nThe following table describes how the mode argument works."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Mode"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"First day of week"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Range"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Week 1 is the first week \u2026"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Sunday in this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Sunday in this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"4"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"0-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Monday in this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Sunday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with 4 or more days this year"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"7"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Monday"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1-53"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"with a Monday in this year"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"The parameter is Date or Datetime type"}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select week('2020-1-1');\n+------------------+\n| week('2020-1-1') |\n+------------------+\n|                0 |\n+------------------+\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select week('2020-7-1',1);\n+---------------------+\n| week('2020-7-1', 1) |\n+---------------------+\n|                  27 |\n+---------------------+\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"WEEK\n"})})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var l=n(667294);let s={},i=l.createContext(s);function d(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);