"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["969024"],{213250:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","title":"ALTER SQL_BLOCK_RULE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/ALTER-SQL_BLOCK_RULE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ALTER SQL_BLOCK_RULE","language":"en"},"sidebar":"docs","previous":{"title":"CREATE SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE"},"next":{"title":"DROP SQL_BLOCK_RULE","permalink":"/docs/sql-manual/sql-statements/data-governance/DROP-SQL_BLOCK_RULE"}}'),a=t("785893"),l=t("250065");let i={title:"ALTER SQL_BLOCK_RULE",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Modify SQL blocking rules to allow modification of each item such as sql/sqlHash/partition_num/tablet_num/cardinality/global/enable."}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE rule_name\n[PROPERTIES ("key"="value", ...)];\n'})}),"\n",(0,a.jsx)(n.p,{children:"illustrate:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"sql and sqlHash cannot be set at the same time. This means that if a rule sets sql or sqlHash, the other attribute cannot be modified;"}),"\n",(0,a.jsx)(n.li,{children:"sql/sqlHash and partition_num/tablet_num/cardinality cannot be set at the same time. For example, if a rule sets partition_num, then sql or sqlHash cannot be modified;"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Modify according to SQL properties"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"If a rule sets partition_num, then sql or sqlHash cannot be modified"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"ALTER,SQL_BLOCK_RULE\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);