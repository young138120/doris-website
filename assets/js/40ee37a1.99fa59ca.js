"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["141094"],{653543:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution","title":"Solving Unevenly Data Distribution","description":"\x3c!--","source":"@site/docs/query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Solving Unevenly Data Distribution","language":"en"},"sidebar":"docs","previous":{"title":"Accelerating Query with Runtime Filter Tuning","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/accelerating-queries-with-runtime-filter"},"next":{"title":"DML Tuning Plan","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/dml-tuning-plan"}}'),s=n("785893"),o=n("250065");let r={title:"Solving Unevenly Data Distribution",language:"en"},a=void 0,l={},c=[{value:"Tuning Case 1: Bucket Issue",id:"tuning-case-1-bucket-issue",level:2},{value:"Tuning Case 2: Row Estimation Issue",id:"tuning-case-2-row-estimation-issue",level:2}];function u(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In the section on using column statistics to optimize plans, we introduced the uniformity assumption employed by the optimizer. However, in real-world scenarios, data often does not satisfy this uniformity assumption. When the optimizer generates an unsatisfactory execution plan due to significant estimation errors, we can manually adjust and optimize the execution plan using hints."}),"\n",(0,s.jsx)(t.h2,{id:"tuning-case-1-bucket-issue",children:"Tuning Case 1: Bucket Issue"}),"\n",(0,s.jsx)(t.p,{children:"When data skew occurs on the bucket key of a table, the workload will be unevenly distributed across different BE instances, thereby prolonging the overall query execution time."}),"\n",(0,s.jsxs)(t.p,{children:["Taking the TPC-H schema as an example: Suppose the ",(0,s.jsx)(t.code,{children:"orders"})," table uses ",(0,s.jsx)(t.code,{children:"o_orderkey"})," as the bucket key and has two tablets. For certain reasons, one tablet contains 100 million rows of data, while the other tablet contains only 100 rows."]}),"\n",(0,s.jsx)(t.p,{children:"When executing the following query:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT COUNT(*) FROM orders JOIN customer ON o_custkey = c_custkey;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The optimizer generates a Broadcast Join, with the ",(0,s.jsx)(t.code,{children:"orders"})," table as the left table and the ",(0,s.jsx)(t.code,{children:"customer"})," table as the right table."]}),"\n",(0,s.jsxs)(t.p,{children:["The execution engine then launches a thread for each tablet of the ",(0,s.jsx)(t.code,{children:"orders"})," table to perform the join. However, due to uneven data distribution, one thread processes 100 million rows of data, while the other thread processes only 100 rows."]}),"\n",(0,s.jsxs)(t.p,{children:["Ideally, both threads should each process 50% of the data to double the query efficiency. To address this issue, we can specify the use of a Shuffle Join to redistribute the data from the ",(0,s.jsx)(t.code,{children:"orders"})," table based on ",(0,s.jsx)(t.code,{children:"o_custkey"})," before joining it with the ",(0,s.jsx)(t.code,{children:"customer"})," table."]}),"\n",(0,s.jsx)(t.h2,{id:"tuning-case-2-row-estimation-issue",children:"Tuning Case 2: Row Estimation Issue"}),"\n",(0,s.jsx)(t.p,{children:"The optimizer estimates the filter rate based on the uniformity assumption. Significant errors in the estimated number of filtered rows can impact the selection of subsequent SQL operators."}),"\n",(0,s.jsx)(t.p,{children:"When estimating the filter rate, the optimizer typically relies on the assumption of uniform distribution. However, when the error in the estimated number of filtered rows is significant, it can affect the selection of subsequent SQL operators."}),"\n",(0,s.jsx)(t.p,{children:"Considering the following SQL query:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select count(1) \nfrom orders, customer \nwhere o_custkey = c_custkey and o_orderdate < '1920-01-02'\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Under the assumption of uniform distribution, the optimizer may assume that the number of rows output after filtering with ",(0,s.jsx)(t.code,{children:"o_orderdate < '1920-01-02'"})," will be less than the number of rows in the ",(0,s.jsx)(t.code,{children:"customer"})," table, and therefore choose to build a hash table based on the ",(0,s.jsx)(t.code,{children:"orders"})," table."]}),"\n",(0,s.jsxs)(t.p,{children:["However, if the actual data is skewed, resulting in more ",(0,s.jsx)(t.code,{children:"orders"})," satisfying the condition than the number of entries in the ",(0,s.jsx)(t.code,{children:"customer"})," table, a more reasonable choice would be to build the hash table based on the ",(0,s.jsx)(t.code,{children:"customer"})," table."]}),"\n",(0,s.jsx)(t.p,{children:"To optimize the query, we need to adjust the SQL statement based on the actual situation or prompt the optimizer to use a more suitable execution plan."}),"\n",(0,s.jsx)(t.p,{children:"Revising the SQL as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"select /* +leading(orders customer) */ count(1)\nfrom orders, customer \nwhere o_custkey = c_custkey and o_orderdate < '1920-01-02'\n"})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return r}});var i=n(667294);let s={},o=i.createContext(s);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);