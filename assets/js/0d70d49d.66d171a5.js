"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["151010"],{703053:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY-USING","title":"SHOW STORAGE POLICY USING","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY-USING.md","sourceDirName":"sql-manual/sql-statements/cluster-management/storage-management","slug":"/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY-USING","permalink":"/docs/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY-USING","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW STORAGE POLICY USING","language":"en"},"sidebar":"docs","previous":{"title":"SHOW STORAGE POLICY","permalink":"/docs/sql-manual/sql-statements/cluster-management/storage-management/SHOW-STORAGE-POLICY"},"next":{"title":"CREATE FILE","permalink":"/docs/sql-manual/sql-statements/security/CREATE-FILE"}}'),a=s("785893"),l=s("250065");let i={title:"SHOW STORAGE POLICY USING",language:"en"},o=void 0,r={},c=[{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function p(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"This command is used to show tables and partitions which is using storage policy"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"SHOW STORAGE POLICY USING [FOR some_policy]\n"})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"get all objects which are using storage policy"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"mysql> show storage policy using;\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| PolicyName            | Database                                | Table                                  | Partitions |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | table_with_storage_policy_1            | ALL        |\n| test_storage_policy   | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201701    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | partition_with_multiple_storage_policy | p201702    |\n| test_storage_policy_2 | regression_test_cold_heat_separation_p2 | table_with_storage_policy_2            | ALL        |\n| test_policy           | db2                                     | db2_test_1                             | ALL        |\n+-----------------------+-----------------------------------------+----------------------------------------+------------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"get objects which are using the storage policy named test_storage_policy"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"mysql> show storage policy using for test_storage_policy;\n+---------------------+-----------+---------------------------------+------------+\n| PolicyName          | Database  | Table                           | Partitions |\n+---------------------+-----------+---------------------------------+------------+\n| test_storage_policy | db_1      | partition_with_storage_policy_1 | p201701    |\n| test_storage_policy | db_1      | table_with_storage_policy_1     | ALL        |\n+---------------------+-----------+---------------------------------+------------+\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"SHOW, STORAGE, POLICY, USING\n"})}),"\n",(0,a.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function d(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return i}});var n=s(667294);let a={},l=n.createContext(a);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);