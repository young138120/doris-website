"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["539053"],{420615:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var r=JSON.parse('{"id":"lakehouse/sql-dialect","title":"SQL Converter for Apache Doris","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/lakehouse/sql-dialect.md","sourceDirName":"lakehouse","slug":"/lakehouse/sql-dialect","permalink":"/docs/3.0/lakehouse/sql-dialect","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SQL Converter for Apache Doris","language":"en"},"sidebar":"docs","previous":{"title":"Cloud Service Authentication","permalink":"/docs/3.0/lakehouse/cloud-auth"},"next":{"title":"Overview","permalink":"/docs/3.0/compute-storage-decoupled/overview"}}'),s=t("785893"),o=t("250065");let i={title:"SQL Converter for Apache Doris",language:"en"},l="SQL Dialect",c={},a=[{value:"Deploy service",id:"deploy-service",level:2},{value:"Use SQL dialect",id:"use-sql-dialect",level:2},{value:"Clickhouse",id:"clickhouse",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"sql-dialect",children:"SQL Dialect"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Starting from version 2.1, Doris can support multiple SQL dialects, such as Presto, Trino, Hive, PostgreSQL, Spark, Oracle, Clickhouse, and more. Through this feature, users can directly use the corresponding SQL dialect to query data in Doris, which facilitates users to smoothly migrate their original business to Doris."})}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["This function is currently an experimental function. If you encounter any problems during use, you are welcome to provide feedback through the mail group, ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/issues",children:"GitHub issue"})]})}),"\n",(0,s.jsx)(n.h2,{id:"deploy-service",children:"Deploy service"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Download latest ",(0,s.jsx)(n.a,{href:"https://www.selectdb.com/tools/doris-sql-convertor",children:"SQL Converter for Apache Doris"})]}),"\n",(0,s.jsx)(n.admonition,{title:"NOTE",type:"info",children:(0,s.jsxs)(n.p,{children:["The SQL dialect conversion tool is based on the open-source ",(0,s.jsx)(n.a,{href:"https://github.com/tobymao/sqlglot",children:"SQLGlot"})," and has been further developed by SelectDB. For more information about SQLGlot, please refer to the ",(0,s.jsx)(n.a,{href:"https://sqlglot.com/sqlglot.html",children:"SQLGlot official website"}),"."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The SQL Convertor is not maintained or endorsed by Apache Doris; these efforts are supervised by Committers and the Doris PMC. The use of these resources and services is entirely at your own discretion, and the community does not verify the licensing or validity of these tools.\n:::"}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"On any FE node, start the service through the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Configuring the service port\nvim apiserver/conf/config.conf\n# Start the SQL Converter for Apache Doris conversion service\nsh apiserver/bin/start.sh\n# If you need a front-end interface, you can configure the corresponding port in the webserver and start it. If you don't need a front-end, you can ignore the following operations.\nvim webserver/conf/config.conf\n# Start the front-end interface\nsh webserver/bin/start.sh\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"This service is a stateless service and can be started and stopped at any time."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure port in ",(0,s.jsx)(n.code,{children:"apiserver/conf/config.conf"})," to specify any available port, and configure workers to specify the number of threads to start. In concurrent scenarios, you can adjust as needed, the default is 1."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It is recommended to start a separate service on each FE node."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need to start the front-end interface, you can configure the SQL Converter for Apache Doris conversion service address in ",(0,s.jsx)(n.code,{children:"webserver/conf/config"}),".conf. The default is ",(0,s.jsx)(n.code,{children:"API_HOST=http://127.0.0.1:5001"})]}),"\n"]}),"\n"]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Start the Doris cluster (version 2.1 or higher)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Set the URL of the SQL Dialect Conversion Service with the following command in Doris:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'MySQL> set global sql_converter_service_url = "http://127.0.0.1:5001/api/v1/convert"'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"127.0.0.1:5001"})," is the deployment node IP and port of the SQL dialect conversion service."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"use-sql-dialect",children:"Use SQL dialect"}),"\n",(0,s.jsx)(n.p,{children:"Currently supported dialect types include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"presto"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"trino"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"clickhouse"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"hive"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"spark"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"postgres"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"oracle"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Presto"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> CREATE TABLE  test_sqlconvert (\n         id int,\n         start_time DateTime,\n         value String,\n         arr_int ARRAY<Int>,\n         arr_str ARRAY<String>\n     ) ENGINE=OLAP\n     DUPLICATE KEY(`id`)\n     COMMENT 'OLAP'\n     DISTRIBUTED BY HASH(`id`) BUCKETS 1\n     PROPERTIES (\n     \"replication_allocation\" = \"tag.location.default: 1\"\n     );\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> INSERT INTO test_sqlconvert values(1, '2024-05-20 13:14:52', '2024-01-14',[1, 2, 3, 3], ['Hello', 'World']);\nQuery OK, 1 row affected (0.08 sec)\n\nmysql> set sql_dialect=presto;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> SELECT cast(start_time as varchar(20)) as col1,\n            array_distinct(arr_int) as col2,\n            FILTER(arr_str, x -> x LIKE '%World%') as col3,\n            to_date(value,'%Y-%m-%d') as col4,\n            YEAR(start_time) as col5,\n            date_add('month', 1, start_time) as col6,\n            REGEXP_EXTRACT_ALL(value, '-.') as col7,\n            JSON_EXTRACT('{\"id\": \"33\"}', '$.id')as col8,\n            element_at(arr_int, 1) as col9,\n            date_trunc('day',start_time) as col10\n         FROM test_sqlconvert\n         where date_trunc('day',start_time)= DATE'2024-05-20'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.03 sec)\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"clickhouse",children:"Clickhouse"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> set sql_dialect=clickhouse;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> select  toString(start_time) as col1,\n             arrayCompact(arr_int) as col2,\n             arrayFilter(x -> x like '%World%',arr_str)as col3,\n             toDate(value) as col4,\n             toYear(start_time)as col5,\n             addMonths(start_time, 1)as col6,\n             extractAll(value, '-.')as col7,\n             JSONExtractString('{\"id\": \"33\"}' , 'id')as col8,\n             arrayElement(arr_int, 1) as col9,\n             date_trunc('day',start_time) as col10\n          FROM test_sqlconvert\n          where date_trunc('day',start_time)= '2024-05-20 00:00:00'     \n     order by id;\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| col1                | col2      | col3      | col4       | col5 | col6                | col7        | col8 | col9 | col10               |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n| 2024-05-20 13:14:52 | [1, 2, 3] | [\"World\"] | 2024-01-14 | 2024 | 2024-06-20 13:14:52 | ['-0','-1'] | \"33\" |    1 | 2024-05-20 00:00:00 |\n+---------------------+-----------+-----------+------------+------+---------------------+-------------+------+------+---------------------+\n1 row in set (0.02 sec)\n"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},o=r.createContext(s);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);