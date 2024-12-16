"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["397170"],{200683:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"lakehouse/database/sqlserver","title":"SQL Server","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/database/sqlserver.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/sqlserver","permalink":"/zh-CN/docs/dev/lakehouse/database/sqlserver","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"SQL Server","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Oracle","permalink":"/zh-CN/docs/dev/lakehouse/database/oracle"},"next":{"title":"IBM Db2","permalink":"/zh-CN/docs/dev/lakehouse/database/ibm-db2"}}'),t=r("785893"),d=r("250065");let l={title:"SQL Server",language:"zh-CN"},i=void 0,c={},a=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u8FDE\u63A5 SQL Server",id:"\u8FDE\u63A5-sql-server",level:2},{value:"\u8FDE\u63A5\u5B89\u5168",id:"\u8FDE\u63A5\u5B89\u5168",level:3},{value:"\u5C42\u7EA7\u6620\u5C04",id:"\u5C42\u7EA7\u6620\u5C04",level:2},{value:"\u7C7B\u578B\u6620\u5C04",id:"\u7C7B\u578B\u6620\u5C04",level:2},{value:"SQL Server \u5230 Doris \u7C7B\u578B\u6620\u5C04",id:"sql-server-\u5230-doris-\u7C7B\u578B\u6620\u5C04",level:3},{value:"\u67E5\u8BE2\u4F18\u5316",id:"\u67E5\u8BE2\u4F18\u5316",level:2},{value:"\u8C13\u8BCD\u4E0B\u63A8",id:"\u8C13\u8BCD\u4E0B\u63A8",level:3},{value:"\u884C\u6570\u9650\u5236",id:"\u884C\u6570\u9650\u5236",level:3},{value:"\u8F6C\u4E49\u5B57\u7B26",id:"\u8F6C\u4E49\u5B57\u7B26",level:3},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function h(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Doris JDBC Catalog \u652F\u6301\u901A\u8FC7\u6807\u51C6 JDBC \u63A5\u53E3\u8FDE\u63A5 SQL Server \u6570\u636E\u5E93\u3002\u672C\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E SQL Server \u6570\u636E\u5E93\u8FDE\u63A5\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,t.jsx)(n.p,{children:"\u8981\u8FDE\u63A5\u5230 SQL Server \u6570\u636E\u5E93\uFF0C\u60A8\u9700\u8981"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"SQL Server 2012 \u6216\u66F4\u9AD8\u7248\u672C\uFF0C\u6216 Azure SQL \u6570\u636E\u5E93\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["SQL Server \u6570\u636E\u5E93\u7684 JDBC \u9A71\u52A8\u7A0B\u5E8F\uFF0C\u60A8\u53EF\u4EE5\u4ECE ",(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.microsoft.sqlserver/mssql-jdbc",children:"Maven \u4ED3\u5E93"}),"\u4E0B\u8F7D\u6700\u65B0\u6216\u6307\u5B9A\u7248\u672C\u7684 SQL Server JDBC \u9A71\u52A8\u7A0B\u5E8F\u3002",(0,t.jsx)(n.strong,{children:"\u63A8\u8350\u4F7F\u7528 SQL Server JDBC Driver 11.2.x \u53CA\u4EE5\u4E0A\u7248\u672C\u3002"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Doris \u6BCF\u4E2A FE \u548C BE \u8282\u70B9\u548C SQL Server \u670D\u52A1\u5668\u4E4B\u95F4\u7684\u7F51\u7EDC\u8FDE\u63A5\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A 1433\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u8FDE\u63A5-sql-server",children:"\u8FDE\u63A5 SQL Server"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG sqlserver PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="secret",\n    "jdbc_url" = "jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false",\n    "driver_url" = "mssql-jdbc-11.2.3.jre8.jar",\n    "driver_class" = "com.microsoft.sqlserver.jdbc.SQLServerDriver"\n)\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"jdbc_url"})," \u5B9A\u4E49\u8981\u4F20\u9012\u7ED9 SQL Server JDBC \u9A71\u52A8\u7A0B\u5E8F\u7684\u8FDE\u63A5\u4FE1\u606F\u548C\u53C2\u6570\u3002 ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/zh-cn/sql/connect/jdbc/building-the-connection-url?view=sql-server-ver16",children:"SQL Server JDBC \u9A71\u52A8\u7A0B\u5E8F\u6587\u6863"}),"\u4E2D\u63D0\u4F9B\u4E86 URL \u652F\u6301\u7684\u53C2\u6570\u3002"]})}),"\n",(0,t.jsx)(n.h3,{id:"\u8FDE\u63A5\u5B89\u5168",children:"\u8FDE\u63A5\u5B89\u5168"}),"\n",(0,t.jsx)(n.p,{children:"JDBC \u9A71\u52A8\u7A0B\u5E8F\u4EE5\u53CA\u8FDE\u63A5\u5668\u81EA\u52A8\u4F7F\u7528\u4F20\u8F93\u5C42\u5B89\u5168\u6027 (TLS) \u52A0\u5BC6\u548C\u8BC1\u4E66\u9A8C\u8BC1\u3002\u8FD9\u9700\u8981\u5728 SQL Server \u6570\u636E\u5E93\u4E3B\u673A\u4E0A\u914D\u7F6E\u5408\u9002\u7684 TLS \u8BC1\u4E66\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679C\u60A8\u6CA1\u6709\u5EFA\u7ACB\u5FC5\u8981\u7684\u914D\u7F6E\uFF0C\u60A8\u53EF\u4EE5\u4F7F\u7528 encrypt \u5C5E\u6027\u7981\u7528\u8FDE\u63A5\u5B57\u7B26\u4E32\u4E2D\u7684\u52A0\u5BC6\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'"jdbc_url"="jdbc:sqlserver://<host>:<port>;databaseName=<databaseName>;encrypt=false"\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/zh-cn/sql/connect/jdbc/using-ssl-encryption?view=sql-server-ver16",children:"SQL Server JDBC \u9A71\u52A8\u7A0B\u5E8F\u6587\u6863\u7684 TLS \u90E8\u5206"}),"\u8BE6\u7EC6\u4ECB\u7ECD\u4E86 trustServerCertificate\u3001hostNameInCertificate\u3001trustStore \u548C trustStorePassword \u7B49\u5176\u4ED6\u53C2\u6570\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5C42\u7EA7\u6620\u5C04",children:"\u5C42\u7EA7\u6620\u5C04"}),"\n",(0,t.jsxs)(n.p,{children:["\u6620\u5C04 SQLServer \u65F6\uFF0CDoris \u7684\u4E00\u4E2A Database \u5BF9\u5E94\u4E8E SQL Server \u4E2D\u6307\u5B9A Database\uFF08",(0,t.jsx)(n.code,{children:"jdbc_url"})," \u53C2\u6570\u4E2D\u7684 ",(0,t.jsx)(n.code,{children:"<databaseName>"}),"\uFF09\u4E0B\u7684\u4E00\u4E2A Schema\u3002\u800C Doris \u7684 Database \u4E0B\u7684 Table \u5219\u5BF9\u5E94\u4E8E SQLServer \u4E2D\uFF0CSchema \u4E0B\u7684 Tables\u3002\u5373\u6620\u5C04\u5173\u7CFB\u5982\u4E0B\uFF1A"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Doris"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"SQLServer"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Catalog"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Database"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Database"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Schema"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Table"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Table"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u7C7B\u578B\u6620\u5C04",children:"\u7C7B\u578B\u6620\u5C04"}),"\n",(0,t.jsx)(n.h3,{id:"sql-server-\u5230-doris-\u7C7B\u578B\u6620\u5C04",children:"SQL Server \u5230 Doris \u7C7B\u578B\u6620\u5C04"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"SQL Server Type"}),(0,t.jsx)(n.th,{children:"Doris Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bit"}),(0,t.jsx)(n.td,{children:"BOOLEAN"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tinyint"}),(0,t.jsx)(n.td,{children:"SMALLINT"}),(0,t.jsx)(n.td,{children:"SQLServer \u7684 tinyint \u662F\u65E0\u7B26\u53F7\u6570\uFF0C\u6240\u4EE5\u6620\u5C04\u4E3A Doris \u7684 SMALLINT"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"smallint"}),(0,t.jsx)(n.td,{children:"SMALLINT"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{children:"INT"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"bigint"}),(0,t.jsx)(n.td,{children:"BIGINT"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"real"}),(0,t.jsx)(n.td,{children:"FLOAT"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"DOUBLE"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"money"}),(0,t.jsx)(n.td,{children:"DECIMAL(19,4)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"smallmoney"}),(0,t.jsx)(n.td,{children:"DECIMAL(10,4)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"decimal/numeric"}),(0,t.jsx)(n.td,{children:"DECIMAL"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"date"}),(0,t.jsx)(n.td,{children:"DATE"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"datetime/datetime2/smalldatetime"}),(0,t.jsx)(n.td,{children:"DATETIMEV2"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"char/varchar/text/nchar/nvarchar/ntext"}),(0,t.jsx)(n.td,{children:"STRING"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"time/datetimeoffset"}),(0,t.jsx)(n.td,{children:"STRING"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"timestamp"}),(0,t.jsx)(n.td,{children:"STRING"}),(0,t.jsx)(n.td,{children:"\u8BFB\u53D6\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u5341\u516D\u8FDB\u5236\u663E\u793A\uFF0C\u65E0\u5B9E\u9645\u610F\u4E49"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Other"}),(0,t.jsx)(n.td,{children:"UNSUPPORTED"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"\u67E5\u8BE2\u4F18\u5316",children:"\u67E5\u8BE2\u4F18\u5316"}),"\n",(0,t.jsx)(n.h3,{id:"\u8C13\u8BCD\u4E0B\u63A8",children:"\u8C13\u8BCD\u4E0B\u63A8"}),"\n",(0,t.jsxs)(n.p,{children:["\u5F53\u6267\u884C\u7C7B\u4F3C\u4E8E ",(0,t.jsx)(n.code,{children:"where dt = '2022-01-01'"})," \u8FD9\u6837\u7684\u67E5\u8BE2\u65F6\uFF0CDoris \u80FD\u591F\u5C06\u8FD9\u4E9B\u8FC7\u6EE4\u6761\u4EF6\u4E0B\u63A8\u5230\u5916\u90E8\u6570\u636E\u6E90\uFF0C\u4ECE\u800C\u76F4\u63A5\u5728\u6570\u636E\u6E90\u5C42\u9762\u6392\u9664\u4E0D\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E\uFF0C\u51CF\u5C11\u4E86\u4E0D\u5FC5\u8981\u7684\u6570\u636E\u83B7\u53D6\u548C\u4F20\u8F93\u3002\u8FD9\u5927\u5927\u63D0\u9AD8\u4E86\u67E5\u8BE2\u6027\u80FD\uFF0C\u540C\u65F6\u4E5F\u964D\u4F4E\u4E86\u5BF9\u5916\u90E8\u6570\u636E\u6E90\u7684\u8D1F\u8F7D\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u884C\u6570\u9650\u5236",children:"\u884C\u6570\u9650\u5236"}),"\n",(0,t.jsxs)(n.p,{children:["\u5982\u679C\u5728\u67E5\u8BE2\u4E2D\u5E26\u6709 limit \u5173\u952E\u5B57\uFF0CDoris \u4F1A\u5C06 limit \u8F6C\u4E49\u4E3A SQL Server \u7684 ",(0,t.jsx)(n.code,{children:"TOP"})," \u8BED\u6CD5\uFF0C\u4EE5\u51CF\u5C11\u6570\u636E\u4F20\u8F93\u91CF\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u8F6C\u4E49\u5B57\u7B26",children:"\u8F6C\u4E49\u5B57\u7B26"}),"\n",(0,t.jsx)(n.p,{children:"Doris \u4F1A\u5728\u4E0B\u53D1\u5230 SQL Server \u7684\u67E5\u8BE2\u8BED\u53E5\u4E2D\uFF0C\u81EA\u52A8\u5728\u5B57\u6BB5\u540D\u4E0E\u8868\u540D\u4E0A\u52A0\u4E0A\u8F6C\u4E49\u7B26\uFF1A([])\uFF0C\u4EE5\u907F\u514D\u5B57\u6BB5\u540D\u4E0E\u8868\u540D\u4E0E SQL Server \u5185\u90E8\u5173\u952E\u5B57\u51B2\u7A81\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8FDE\u63A5 SQL Server \u51FA\u73B0\u8BC1\u4E66\u8BA4\u8BC1\u5F02\u5E38"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'SQLServerException: The driver could not establish a secure connection to SQL Server by using Secure Sockets Layer (SSL) encryption.\nError: "sun.security.validator.ValidatorException: PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException:\nunable to find valid certification path to requested target". ClientConnectionId:a92f3817-e8e6-4311-bc21-7c66\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u53EF\u5728\u521B\u5EFA Catalog \u7684 ",(0,t.jsx)(n.code,{children:"jdbc_url"})," \u628AJDBC\u8FDE\u63A5\u4E32\u6700\u540E\u589E\u52A0 ",(0,t.jsx)(n.code,{children:"encrypt=false"})," \uFF0C\u5982 ",(0,t.jsx)(n.code,{children:'"jdbc_url" = "jdbc:sqlserver://127.0.0.1:1433;DataBaseName=doris_test;encrypt=false"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8FDE\u63A5 SQL Server \u51FA\u73B0 TLS \u5F02\u5E38"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"The server selected protocol version TLS10 is not accepted by client preferences [TLS13, TLS12]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD9\u662F\u56E0\u4E3A SQL Server \u4E0E JDBC \u5BA2\u6237\u7AEF\u4E4B\u95F4\u7684 TLS \u534F\u8BAE\u7248\u672C\u4E0D\u5339\u914D\u3002\u8FDE\u63A5\u7684 SQL Server \u4EC5\u652F\u6301 TLS 1.0\uFF0C\u800C JDBC \u5BA2\u6237\u7AEF\u6240\u5728 JAVA \u73AF\u5883\u9ED8\u8BA4\u7981\u7528\u4E86 TLS 1.0\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u89E3\u51B3\u65B9\u5F0F\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\u5728 SQL Server \u4E0A\u542F\u7528 TLS 1.2\u3002\n\u53C2\u8003\uFF1A",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/zh-cn/troubleshoot/sql/database-engine/connect/tls-1-2-support-microsoft-sql-server",children:"SQL Server TLS 1.2 \u652F\u6301"})]}),"\n",(0,t.jsxs)(n.li,{children:["\u542F\u7528 JDK \u7684 TLS 1.0\u3002\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"vim ${JAVA_HOME}/lib/security/java.security\n#\u627E\u5230\u8FD9\u6BB5\njdk.tls.disabledAlgorithms=SSLv3, TLSv1, TLSv1.1, RC4, DES, MD5withRSA, \\\nDH keySize < 1024, EC keySize < 224, 3DES_EDE_CBC, anon, NULL, \\\ninclude jdk.disabled.namedCurves\n\n#\u5220\u6389\u5176\u4E2D\u7684TLSv1, TLSv1.1 , \u6539\u6210\u4E0B\u9762\u8FD9\u6837\u5373\u53EF\njdk.tls.disabledAlgorithms=SSLv3, RC4, DES, MD5withRSA, \\\nDH keySize < 1024, EC keySize < 224, anon, NULL, \\\ninclude jdk.disabled.namedCurves\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var s=r(667294);let t={},d=s.createContext(t);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);