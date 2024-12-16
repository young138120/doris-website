"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["264507"],{89661:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>o});var r=JSON.parse('{"id":"db-connect/database-connect","title":"\u6570\u636E\u5E93\u8FDE\u63A5","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/db-connect/database-connect.md","sourceDirName":"db-connect","slug":"/db-connect/database-connect","permalink":"/zh-CN/docs/3.0/db-connect/database-connect","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u6570\u636E\u5E93\u8FDE\u63A5","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Doris on AWS","permalink":"/zh-CN/docs/3.0/install/cluster-deployment/doris-on-aws"},"next":{"title":"\u57FA\u4E8E Arrow Flight SQL \u7684\u9AD8\u901F\u6570\u636E\u4F20\u8F93\u94FE\u8DEF","permalink":"/zh-CN/docs/3.0/db-connect/arrow-flight-sql-connect"}}'),s=t("785893"),i=t("250065");let o={title:"\u6570\u636E\u5E93\u8FDE\u63A5",language:"zh-CN"},a=void 0,c={},l=[{value:"MySQL Client",id:"mysql-client",level:2},{value:"MySQL JDBC Connector",id:"mysql-jdbc-connector",level:2},{value:"DBeaver",id:"dbeaver",level:2},{value:"Doris \u5185\u7F6E\u7684 Web UI",id:"doris-\u5185\u7F6E\u7684-web-ui",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Apache Doris \u91C7\u7528 MySQL \u7F51\u7EDC\u8FDE\u63A5\u534F\u8BAE\uFF0C\u517C\u5BB9 MySQL \u751F\u6001\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u3001JDBC/ODBC \u548C\u5404\u79CD\u53EF\u89C6\u5316\u5DE5\u5177\u3002\u540C\u65F6 Apache Doris \u4E5F\u5185\u7F6E\u4E86\u4E00\u4E2A\u7B80\u5355\u7684 Web UI\uFF0C\u65B9\u4FBF\u4F7F\u7528\u3002\u4E0B\u9762\u5206\u522B\u4ECB\u7ECD\u5982\u4F55\u901A\u8FC7 MySQL Client\u3001MySQL JDBC Connector\u3001DBeaver \u548C Doris \u5185\u7F6E\u7684 Web UI \u6765\u8FDE\u63A5 Doris\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"mysql-client",children:"MySQL Client"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ECE MySQL \u5B98\u65B9\u7F51\u7AD9\u4E0B\u8F7D MySQL Client\uFF0C\u6216\u8005\u4E0B\u8F7D\u6211\u4EEC\u63D0\u4F9B\u7684 Linux \u4E0A\u514D\u5B89\u88C5\u7684 ",(0,s.jsx)(n.a,{href:"https://cdn.selectdb.com/download/mysql-client/mysql-5.7.22-linux-glibc2.12-x86_64.tar.gz",children:"MySQL \u5BA2\u6237\u7AEF"}),"\u3002\u5F53\u524D Doris \u4E3B\u8981\u517C\u5BB9 MySQL 5.7 \u53CA\u5176\u4EE5\u4E0A\u7684\u5BA2\u6237\u7AEF\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u89E3\u538B\u4E0B\u8F7D\u7684 MySQL \u5BA2\u6237\u7AEF\uFF0C\u5728 ",(0,s.jsx)(n.code,{children:"bin/"})," \u76EE\u5F55\u4E0B\u53EF\u4EE5\u627E\u5230 ",(0,s.jsx)(n.code,{children:"mysql"})," \u547D\u4EE4\u884C\u5DE5\u5177\u3002\u7136\u540E\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u8FDE\u63A5 Doris\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# FE_IP \u4E3A FE \u7684\u76D1\u542C\u5730\u5740\uFF0C FE_QUERY_PORT \u4E3A FE \u7684 MYSQL \u534F\u8BAE\u670D\u52A1\u7684\u7AEF\u53E3\uFF0C\u5728 fe.conf \u4E2D\u5BF9\u5E94 query_port, \u9ED8\u8BA4\u4E3A 9030.\nmysql -h FE_IP -P FE_QUERY_PORT -u USER_NAME \n"})}),"\n",(0,s.jsx)(n.p,{children:"\u767B\u5F55\u540E\uFF0C\u663E\u793A\u5982\u4E0B\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"Welcome to the MySQL monitor.  Commands end with ; or \\g.                                                                                                                                                                                  \nYour MySQL connection id is 236                                                                                                                                                                                                            \nServer version: 5.7.99 Doris version doris-2.0.3-rc06-37d31a5                                                                                                                                                                              \n                                                                                                                                                                                                                                           \nCopyright (c) 2000, 2018, Oracle and/or its affiliates. All rights reserved.                                                                                                                                                               \n                                                                                                                                                                                                                                           \nOracle is a registered trademark of Oracle Corporation and/or its                                                                                                                                                                          \naffiliates. Other names may be trademarks of their respective                                                                                                                                                                              \nowners.                                                                                                                                                                                                                                    \n                                                                                                                                                                                                                                           \nType 'help;' or '\\h' for help. Type '\\c' to clear the current input statement.                                                                                                                                                             \n                                                                                                                                                                                                                                           \nmysql> \n"})}),"\n",(0,s.jsx)(n.h2,{id:"mysql-jdbc-connector",children:"MySQL JDBC Connector"}),"\n",(0,s.jsx)(n.p,{children:"\u8BF7\u5728 MySQL \u5B98\u65B9\u7F51\u7AD9\u4E0B\u8F7D\u76F8\u5E94\u7684 JDBC Connector\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8FDE\u63A5\u4EE3\u7801\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-Java",children:'String user = "user_name";\nString password = "user_password";\nString newUrl = "jdbc:mysql://FE_IP:FE_PORT/demo\uFF1FuseUnicode=true&characterEncoding=utf8&useTimezone=true&serverTimezone=Asia/Shanghai&useSSL=false&allowPublicKeyRetrieval=true";\ntry {\n    Connection myCon = DriverManager.getConnection(newUrl, user, password);\n    Statement stmt = myCon.createStatement();\n    ResultSet result = stmt.executeQuery("show databases");\n    ResultSetMetaData metaData = result.getMetaData();\n    int columnCount = metaData.getColumnCount();\n    while (result.next()) {\n        for (int i = 1; i <= columnCount; i++) {\n            System.out.println(result.getObject(i));\n        }\n    }\n} catch (SQLException e) {\n    log.error("get JDBC connection exception.", e);\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"dbeaver",children:"DBeaver"}),"\n",(0,s.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5230 Apache Doris \u7684 MySQL \u8FDE\u63A5\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u521B\u5EFA\u5230 Apache Doris \u7684 MySQL \u8FDE\u63A5",src:t(815171).Z+"",width:"1280",height:"1083"})}),"\n",(0,s.jsx)(n.p,{children:"\u5728 DBeaver \u4E2D\u8FDB\u884C\u67E5\u8BE2\uFF1A"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"DBeaver Connect",src:t(887140).Z+"",width:"1280",height:"946"})}),"\n",(0,s.jsx)(n.h2,{id:"doris-\u5185\u7F6E\u7684-web-ui",children:"Doris \u5185\u7F6E\u7684 Web UI"}),"\n",(0,s.jsx)(n.p,{children:"Doris FE \u5185\u7F6E Web UI\u3002\u7528\u6237\u65E0\u987B\u5B89\u88C5 MySQL \u5BA2\u6237\u7AEF\uFF0C\u5373\u53EF\u901A\u8FC7\u5185\u7F6E\u7684 Web UI \u8FDB\u884C SQL \u67E5\u8BE2\u548C\u5176\u5B83\u76F8\u5173\u4FE1\u606F\u7684\u67E5\u770B\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u6D4F\u89C8\u5668\u4E2D\u8F93\u5165 http://fe_ip:fe_port,  \u6BD4\u5982 ",(0,s.jsx)(n.code,{children:"http://172.20.63.118:8030"}),"\uFF0C\u6253\u5F00 Doris \u5185\u7F6E\u7684 Web \u63A7\u5236\u53F0\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5185\u7F6E Web \u63A7\u5236\u53F0\uFF0C\u4E3B\u8981\u4F9B\u96C6\u7FA4 root \u8D26\u6237\u4F7F\u7528\uFF0C\u9ED8\u8BA4\u5B89\u88C5\u540E root \u8D26\u6237\u5BC6\u7801\u4E3A\u7A7A\u3002"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"WebUI",src:t(692650).Z+"",width:"1280",height:"724"})}),"\n",(0,s.jsx)(n.p,{children:"\u6BD4\u5982\uFF0C\u5728 Playground \u4E2D\uFF0C\u6267\u884C\u5982\u4E0B\u8BED\u53E5\uFF0C\u53EF\u4EE5\u5B8C\u6210\u5BF9 BE \u8282\u70B9\u7684\u6DFB\u52A0\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'ALTER SYSTEM ADD BACKEND "be_host_ip:heartbeat_service_port";\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Playground",src:t(261001).Z+"",width:"1280",height:"654"})}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.p,{children:"Playground \u4E2D\u6267\u884C\u8FD9\u79CD\u548C\u5177\u4F53\u6570\u636E\u5E93/\u8868\u6CA1\u6709\u5173\u7CFB\u7684\u8BED\u53E5\uFF0C\u52A1\u5FC5\u5728\u5DE6\u4FA7\u5E93\u680F\u91CC\u968F\u610F\u9009\u62E9\u4E00\u4E2A\u6570\u636E\u5E93\uFF0C\u624D\u80FD\u6267\u884C\u6210\u529F\uFF0C\u8FD9\u4E2A\u9650\u5236\uFF0C\u7A0D\u540E\u4F1A\u53BB\u6389\u3002"}),(0,s.jsx)(n.p,{children:"\u5F53\u524D\u5185\u7F6E\u7684 Web \u63A7\u5236\u53F0\uFF0C\u8FD8\u4E0D\u80FD\u6267\u884C SET \u7C7B\u578B\u7684 SQL \u8BED\u53E5\uFF0C\u6240\u4EE5\uFF0C\u5728 Web \u63A7\u5236\u53F0\uFF0C\u5F53\u524D\u8FD8\u4E0D\u80FD\u901A\u8FC7\u6267\u884C SET PASSWORD FOR 'user' = PASSWORD('user_password') `\u7C7B\u4F3C\u8BED\u53E5\u3002"})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},887140:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/DBeaver-query-11f3e80e04942de7bd200a685655da3c.png"},815171:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/DBeaver-e74120612bdbc9d4a14b79a5819ba6d5.png"},261001:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/Doris-WebUI-Playground-f5c92b371f51f1ab721e68d0f9752a86.png"},692650:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/Doris-WebUI-0e96b0a7f82ba3609666352a6f56b26a.png"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);