"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["246608"],{187677:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>l,default:()=>c,assets:()=>d,toc:()=>o,frontMatter:()=>s});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","title":"CREATE ASYNC MATERIALIZED VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/table-and-view/materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/materialized-view","slug":"/sql-manual/sql-statements/table-and-view/materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","permalink":"/docs/sql-manual/sql-statements/table-and-view/materialized-view/CREATE-ASYNC-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"CREATE ASYNC MATERIALIZED VIEW","language":"en"}}'),r=n("785893"),a=n("250065");let s={title:"CREATE ASYNC MATERIALIZED VIEW",language:"en"},l=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"syntax",id:"syntax",level:4},{value:"illustrate",id:"illustrate",level:4},{value:"simpleColumnDefs",id:"simplecolumndefs",level:5},{value:"buildMode",id:"buildmode",level:5},{value:"refreshMethod",id:"refreshmethod",level:5},{value:"refreshTrigger",id:"refreshtrigger",level:5},{value:"key",id:"key",level:5},{value:"partition",id:"partition",level:5},{value:"property",id:"property",level:4},{value:"Examples",id:"examples",level:2},{value:"Keywords",id:"keywords",level:2}];function h(e){let i={a:"a",code:"code",h2:"h2",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(i.p,{children:"This statement is used to create an asynchronous materialized view."}),"\n",(0,r.jsx)(i.h4,{id:"syntax",children:"syntax"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW (IF NOT EXISTS)? mvName=multipartIdentifier\n        (LEFT_PAREN cols=simpleColumnDefs RIGHT_PAREN)? buildMode?\n        (REFRESH refreshMethod? refreshTrigger?)?\n        ((DUPLICATE)? KEY keys=identifierList)?\n        (COMMENT STRING_LITERAL)?\n        (PARTITION BY LEFT_PAREN mvPartition RIGHT_PAREN)?\n        (DISTRIBUTED BY (HASH hashKeys=identifierList | RANDOM) (BUCKETS (INTEGER_VALUE | AUTO))?)?\n        propertyClause?\n        AS query\n"})}),"\n",(0,r.jsx)(i.h4,{id:"illustrate",children:"illustrate"}),"\n",(0,r.jsx)(i.h5,{id:"simplecolumndefs",children:"simpleColumnDefs"}),"\n",(0,r.jsx)(i.p,{children:"Used to define the materialized view column information, if not defined, it will be automatically derived"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"simpleColumnDefs\n: cols+=simpleColumnDef (COMMA cols+=simpleColumnDef)*\n    ;\n\nsimpleColumnDef\n: colName=identifier (COMMENT comment=STRING_LITERAL)?\n    ;\n"})}),"\n",(0,r.jsx)(i.p,{children:'For example, define two columns aa and bb, where the annotation for aa is "name"'}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE MATERIALIZED VIEW mv1\n(aa comment "name",bb)\n'})}),"\n",(0,r.jsx)(i.h5,{id:"buildmode",children:"buildMode"}),"\n",(0,r.jsx)(i.p,{children:"Used to define whether the materialized view is refreshed immediately after creation, default to IMMEDIATE"}),"\n",(0,r.jsx)(i.p,{children:"IMMEDIATE: Refresh Now"}),"\n",(0,r.jsx)(i.p,{children:"DEFERRED: Delay refresh"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"buildMode\n: BUILD (IMMEDIATE | DEFERRED)\n;\n"})}),"\n",(0,r.jsx)(i.p,{children:"For example, specifying the materialized view to refresh immediately"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW mv1\nBUILD IMMEDIATE\n"})}),"\n",(0,r.jsx)(i.h5,{id:"refreshmethod",children:"refreshMethod"}),"\n",(0,r.jsx)(i.p,{children:"Used to define the refresh method for materialized views, default to AUTO"}),"\n",(0,r.jsx)(i.p,{children:"COMPLETE: Full refresh"}),"\n",(0,r.jsx)(i.p,{children:"AUTO: Try to refresh incrementally as much as possible. If incremental refresh is not possible, refresh in full"}),"\n",(0,r.jsx)(i.p,{children:"The SQL definition and partition fields of the materialized view need to meet the following conditions for partition incremental updates:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"At least one of the base tables used by the materialized view is a partitioned table."}),"\n",(0,r.jsx)(i.li,{children:"The base tables used by the materialized view must use list or range partitioning strategies."}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"partition by"})," clause in the SQL definition of the materialized view can only have one partitioning column."]}),"\n",(0,r.jsxs)(i.li,{children:["The partitioning column specified in the ",(0,r.jsx)(i.code,{children:"partition by"})," clause of the materialized view's SQL must come after the ",(0,r.jsx)(i.code,{children:"SELECT"})," statement."]}),"\n",(0,r.jsxs)(i.li,{children:["If the materialized view's SQL includes a ",(0,r.jsx)(i.code,{children:"group by"})," clause, the columns used for partitioning must come after the ",(0,r.jsx)(i.code,{children:"group by"})," clause."]}),"\n",(0,r.jsxs)(i.li,{children:["If the materialized view's SQL includes window functions, the columns used for partitioning must come after the ",(0,r.jsx)(i.code,{children:"partition by"})," clause."]}),"\n",(0,r.jsx)(i.li,{children:"Data changes should occur on partitioned tables. If data changes occur on non-partitioned tables, the materialized view needs to be fully rebuilt."}),"\n",(0,r.jsx)(i.li,{children:"If a field from the null-generating side of a join is used as a partitioning column for the materialized view, it cannot be incrementally updated by partition. For example, for a LEFT OUTER JOIN, the partitioning column must be on the left side, not the right."}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"refreshMethod\n: COMPLETE | AUTO\n;\n"})}),"\n",(0,r.jsx)(i.p,{children:"For example, specifying full refresh of materialized views"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW mv1\nREFRESH COMPLETE\n"})}),"\n",(0,r.jsx)(i.h5,{id:"refreshtrigger",children:"refreshTrigger"}),"\n",(0,r.jsx)(i.p,{children:"Trigger method for refreshing data in materialized views, default to MANUAL"}),"\n",(0,r.jsx)(i.p,{children:"MANUAL: Manual refresh"}),"\n",(0,r.jsx)(i.p,{children:"SCHEDULE: Timed refresh"}),"\n",(0,r.jsx)(i.p,{children:"COMMIT: Trigger-based refresh. When the base table data changes, a task to refresh the materialized view is automatically generated."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"refreshTrigger\n: ON MANUAL\n| ON SCHEDULE refreshSchedule\n| ON COMMIT\n;\n    \nrefreshSchedule\n: EVERY INTEGER_VALUE mvRefreshUnit (STARTS STRING_LITERAL)?\n;\n    \nmvRefreshUnit\n: MINUTE | HOUR | DAY | WEEK\n;    \n"})}),"\n",(0,r.jsx)(i.p,{children:"For example: executed every 2 hours, starting from 21:07:09 on December 13, 2023"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE MATERIALIZED VIEW mv1\nREFRESH ON SCHEDULE EVERY 2 HOUR STARTS "2023-12-13 21:07:09"\n'})}),"\n",(0,r.jsx)(i.h5,{id:"key",children:"key"}),"\n",(0,r.jsx)(i.p,{children:"The materialized view is the DUPLICATE KEY model, therefore the specified columns are arranged in sequence"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"identifierList\n: LEFT_PAREN identifierSeq RIGHT_PAREN\n    ;\n\nidentifierSeq\n: ident+=errorCapturingIdentifier (COMMA ident+=errorCapturingIdentifier)*\n;\n"})}),"\n",(0,r.jsx)(i.p,{children:"For example, specifying k1 and k2 as sorting sequences"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW mv1\nKEY(k1,k2)\n"})}),"\n",(0,r.jsx)(i.h5,{id:"partition",children:"partition"}),"\n",(0,r.jsxs)(i.p,{children:["There are two types of partitioning methods for materialized views. If no partitioning is specified, there will be a default single partition. If a partitioning field is specified, the system will automatically deduce the source base table of that field and synchronize all partitions of the base table (currently supporting ",(0,r.jsx)(i.code,{children:"OlapTable"})," and ",(0,r.jsx)(i.code,{children:"hive"}),"). (Limitation: If the base table is an ",(0,r.jsx)(i.code,{children:"OlapTable"}),", it can only have one partition field)"]}),"\n",(0,r.jsxs)(i.p,{children:["For example, if the base table is a range partition with a partition field of ",(0,r.jsx)(i.code,{children:"create_time"})," and partitioning by day, and ",(0,r.jsx)(i.code,{children:"partition by(ct) as select create_time as ct from t1"})," is specified when creating a materialized view,\nthen the materialized view will also be a range partition with a partition field of 'ct' and partitioning by day"]}),"\n",(0,r.jsxs)(i.p,{children:["Materialized views can also reduce the number of partitions by using partition roll-up. Currently, the partition roll-up function supports ",(0,r.jsx)(i.code,{children:"date_trunc"}),", and the roll-up units supported are ",(0,r.jsx)(i.code,{children:"year"}),", ",(0,r.jsx)(i.code,{children:"month"}),", and ",(0,r.jsx)(i.code,{children:"day"}),"."]}),"\n",(0,r.jsx)(i.p,{children:'The selection of partition fields and the definition of materialized views must meet the conditions for partition incremental updates for the materialized view to be created successfully; otherwise, an error "Unable to find a suitable base table for partitioning" will occur.'}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"mvPartition\n    : partitionKey = identifier\n    | partitionExpr = functionCallExpression\n    ;\n"})}),"\n",(0,r.jsx)(i.p,{children:"For example, if the base table is partitioned by day, the materialized view is also partitioned by day."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"partition by (`k2`)\n"})}),"\n",(0,r.jsx)(i.p,{children:"For example, if the base table is partitioned by day, the materialized view is partitioned by month."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"partition by (date_trunc(`k2`,'month'))\n"})}),"\n",(0,r.jsx)(i.h4,{id:"property",children:"property"}),"\n",(0,r.jsx)(i.p,{children:"The materialized view can specify both the properties of the table and the properties unique to the materialized view."}),"\n",(0,r.jsx)(i.p,{children:"The properties unique to materialized views include:"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"grace_period"}),": When performing query rewrites, there is a maximum allowed delay time (measured in seconds) for the data of the materialized view. If there is a discrepancy between the data of partition A and the base table, and the last refresh time of partition A of the materialized view was 1, while the current system time is 2, then this partition will not undergo transparent rewriting. However, if the grace_period is greater than or equal to 1, this partition will be used for transparent rewriting."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"excluded_trigger_tables"}),": Table names ignored during data refresh, separated by commas. For example, ",(0,r.jsx)(i.code,{children:" table1, table2"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"refresh_partition_num"}),": The number of partitions refreshed by a single insert statement is set to 1 by default. When refreshing a materialized view, the system first calculates the list of partitions to be refreshed and then splits it into multiple insert statements that are executed in sequence according to this configuration. If any insert statement fails, the entire task will stop executing. The materialized view ensures the transactionality of individual insert statements, meaning that failed insert statements will not affect partitions that have already been successfully refreshed."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"workload_group"}),": The name of the workload_group used by the materialized view when performing refresh tasks. This is used to limit the resources used for refreshing data in the materialized view, in order to avoid affecting the operation of other business processes. For details on how to create and use workload_group, refer to ",(0,r.jsx)(i.a,{href:"../../../../admin-manual/workload-group.md",children:"WORKLOAD-GROUP"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"query"}),": Create a query statement for the materialized view, and the result is the data in the materialized view"]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"enable_nondeterministic_function"}),": Whether the SQL definition of the materialized view allows containing nondeterministic\nfunctions, such as current_date(), now(), random(), etc. If true, they are allowed; otherwise, they are not allowed.\nBy default, they are not allowed."]}),"\n",(0,r.jsx)(i.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Create a materialized view mv1 that refreshes immediately and then once a week, with the data source being the hive catalog"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS SELECT * FROM hive_catalog.db1.user;\n'})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Create a materialized view with multiple table joins"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE MATERIALIZED VIEW mv1 BUILD IMMEDIATE REFRESH COMPLETE ON SCHEDULE EVERY 1 WEEK\n DISTRIBUTED BY RANDOM BUCKETS 2\n PROPERTIES (\n "replication_num" = "1"\n )\n AS select user.k1,user.k3,com.k4 from user join com on user.k1=com.k1;\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"CREATE, ASYNC, MATERIALIZED, VIEW\n"})})]})}function c(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return l},a:function(){return s}});var t=n(667294);let r={},a=t.createContext(r);function s(e){let i=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);