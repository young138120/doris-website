"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["35998"],{266684:function(n,e,r){r.r(e),r.d(e,{metadata:()=>i,contentTitle:()=>d,default:()=>t,assets:()=>o,toc:()=>a,frontMatter:()=>c});var i=JSON.parse('{"id":"admin-manual/auth/ranger","title":"\u57FA\u4E8E Apache Ranger \u7684\u9274\u6743\u7BA1\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/auth/ranger.md","sourceDirName":"admin-manual/auth","slug":"/admin-manual/auth/ranger","permalink":"/zh-CN/docs/dev/admin-manual/auth/ranger","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u57FA\u4E8E Apache Ranger \u7684\u9274\u6743\u7BA1\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u57FA\u4E8E LDAP \u7684\u7528\u6237\u8BA4\u8BC1","permalink":"/zh-CN/docs/dev/admin-manual/auth/ldap"},"next":{"title":"MySQL \u5B89\u5168\u4F20\u8F93","permalink":"/zh-CN/docs/dev/admin-manual/auth/certificate"}}'),s=r("785893"),l=r("250065");let c={title:"\u57FA\u4E8E Apache Ranger \u7684\u9274\u6743\u7BA1\u7406",language:"zh-CN"},d=void 0,o={},a=[{value:"\u5B89\u88C5\u6B65\u9AA4",id:"\u5B89\u88C5\u6B65\u9AA4",level:2},{value:"\u5B89\u88C5 Doris Ranger \u63D2\u4EF6",id:"\u5B89\u88C5-doris-ranger-\u63D2\u4EF6",level:3},{value:"\u914D\u7F6E Doris Ranger \u63D2\u4EF6",id:"\u914D\u7F6E-doris-ranger-\u63D2\u4EF6",level:3},{value:"\u914D\u7F6E Doris \u96C6\u7FA4",id:"\u914D\u7F6E-doris-\u96C6\u7FA4",level:3},{value:"\u8D44\u6E90\u548C\u6743\u9650",id:"\u8D44\u6E90\u548C\u6743\u9650",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2},{value:"\u914D\u7F6E\u6743\u9650",id:"\u914D\u7F6E\u6743\u9650",level:3},{value:"Row Policy \u793A\u4F8B",id:"row-policy-\u793A\u4F8B",level:3},{value:"Data Mask \u793A\u4F8B",id:"data-mask-\u793A\u4F8B",level:3}];function h(n){let e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Apache Ranger \u662F\u4E00\u4E2A\u7528\u6765\u5728 Hadoop \u5E73\u53F0\u4E0A\u8FDB\u884C\u76D1\u63A7\uFF0C\u542F\u7528\u670D\u52A1\uFF0C\u4EE5\u53CA\u5168\u65B9\u4F4D\u6570\u636E\u5B89\u5168\u8BBF\u95EE\u7BA1\u7406\u7684\u5B89\u5168\u6846\u67B6\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5728 2.1.0 \u7248\u672C\u4E2D\uFF0CDoris \u652F\u6301\u901A\u8FC7\u96C6\u6210 Apache Ranger\uFF0C\u8FDB\u884C\u7EDF\u4E00\u7684\u6743\u9650\u7BA1\u7406\u3002"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u76EE\u524D\u8BE5\u529F\u80FD\u662F\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u5728 Ranger \u4E2D\u53EF\u914D\u7F6E\u7684\u8D44\u6E90\u5BF9\u8C61\u548C\u6743\u9650\u53EF\u80FD\u4F1A\u5728\u4E4B\u540E\u7684\u7248\u672C\u4E2D\u6709\u6240\u53D8\u5316\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"Apache Ranger \u7248\u672C\u9700\u5728 2.4.0 \u4EE5\u4E0A\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u5B89\u88C5\u6B65\u9AA4",children:"\u5B89\u88C5\u6B65\u9AA4"}),"\n",(0,s.jsx)(e.h3,{id:"\u5B89\u88C5-doris-ranger-\u63D2\u4EF6",children:"\u5B89\u88C5 Doris Ranger \u63D2\u4EF6"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4E0B\u8F7D\u4EE5\u4E0B\u6587\u4EF6"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/ranger/ranger-doris-plugin-3.0.0-SNAPSHOT.jar",children:"ranger-doris-plugin-3.0.0-SNAPSHOT.jar"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.a,{href:"https://selectdb-doris-1308700295.cos.ap-beijing.myqcloud.com/release/jdbc_driver/mysql-connector-java-8.0.25.jar",children:"mysql-connector-java-8.0.25.jar"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5C06\u4E0B\u8F7D\u597D\u7684\u6587\u4EF6\u653E\u5230 Ranger \u670D\u52A1\u7684 ",(0,s.jsx)(e.code,{children:"ranger-plugins/doris"})," \u76EE\u5F55\u4E0B\uFF0C\u5982\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"/usr/local/service/ranger/ews/webapp/WEB-INF/classes/ranger-plugins/doris/ranger-doris-plugin-3.0.0-SNAPSHOT.jar\n/usr/local/service/ranger/ews/webapp/WEB-INF/classes/ranger-plugins/doris/mysql-connector-java-8.0.25.jar\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u91CD\u542F Ranger \u670D\u52A1\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4E0B\u8F7D ",(0,s.jsx)(e.a,{href:"https://github.com/morningman/ranger/blob/doris-plugin/agents-common/src/main/resources/service-defs/ranger-servicedef-doris.json",children:"ranger-servicedef-doris.json"})]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E0A\u4F20\u5B9A\u4E49\u6587\u4EF6\u5230 Ranger \u670D\u52A1\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'curl -u user:password -X POST \\\n	-H "Accept: application/json" \\\n	-H "Content-Type: application/json" \\\n	http://172.21.0.32:6080/service/plugins/definitions \\\n	-d@ranger-servicedef-doris.json\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5176\u4E2D\u7528\u6237\u540D\u5BC6\u7801\u662F\u767B\u5F55 Ranger WebUI \u6240\u4F7F\u7528\u7684\u7528\u6237\u540D\u5BC6\u7801\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u670D\u52A1\u5730\u5740\u7AEF\u53E3\u53EF\u4EE5\u518D ",(0,s.jsx)(e.code,{children:"ranger-admin-site.xml"})," \u914D\u7F6E\u6587\u4EF6\u7684 ",(0,s.jsx)(e.code,{children:"ranger.service.http.port"})," \u914D\u7F6E\u9879\u67E5\u770B\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u6267\u884C\u6210\u529F\uFF0C\u4F1A\u8FD4\u56DE Json \u683C\u5F0F\u7684\u670D\u52A1\u5B9A\u4E49\uFF0C\u5982\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'{\n  "id": 207,\n  "guid": "d3ff9e41-f9dd-4217-bb5f-3fa9996454b6",\n  "isEnabled": true,\n  "createdBy": "Admin",\n  "updatedBy": "Admin",\n  "createTime": 1705817398112,\n  "updateTime": 1705817398112,\n  "version": 1,\n  "name": "doris",\n  "displayName": "Apache Doris",\n  "implClass": "org.apache.ranger.services.doris.RangerServiceDoris",\n  "label": "Doris",\n  "description": "Apache Doris",\n  "options": {\n    "enableDenyAndExceptionsInPolicies": "true"\n  },\n  ...\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u60F3\u91CD\u65B0\u521B\u5EFA\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5220\u9664\u670D\u52A1\u5B9A\u4E49\u540E\uFF0C\u518D\u91CD\u65B0\u4E0A\u4F20\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"curl -v -u user:password -X DELETE \\\nhttp://172.21.0.32:6080/service/plugins/definitions/207\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,s.jsx)(e.code,{children:"207"})," \u662F\u521B\u5EFA\u65F6\u8FD4\u56DE\u7684 id\u3002\u5220\u9664\u524D\uFF0C\u9700\u5728 Ranger WebUI \u754C\u9762\u5220\u9664\u5DF2\u521B\u5EFA\u7684 Doris \u670D\u52A1\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4E5F\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u5217\u4E3E\u5F53\u524D\u5DF2\u6DFB\u52A0\u7684\u670D\u52A1\u5B9A\u4E49\uFF0C\u4EE5\u4FBF\u83B7\u53D6 id\uFF1A"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"curl -v -u user:password -X GET \\\nhttp://172.21.0.32:6080/service/plugins/definitions/\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u914D\u7F6E-doris-ranger-\u63D2\u4EF6",children:"\u914D\u7F6E Doris Ranger \u63D2\u4EF6"}),"\n",(0,s.jsx)(e.p,{children:"\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u6253\u5F00 Ranger WebUI\uFF0C\u53EF\u4EE5\u518D Service Manger \u754C\u9762\u4E2D\u770B\u5230 Apache Doris \u63D2\u4EF6\uFF1A"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ranger",src:r(696748).Z+"",width:"3978",height:"1492"})}),"\n",(0,s.jsxs)(e.p,{children:["\u70B9\u51FB\u63D2\u4EF6\u65C1\u8FB9\u7684 ",(0,s.jsx)(e.code,{children:"+"})," \u53F7\u6DFB\u52A0\u4E00\u4E2A  Doris \u670D\u52A1\uFF1A"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ranger2",src:r(712206).Z+"",width:"1844",height:"1810"})}),"\n",(0,s.jsx)(e.p,{children:"Config Properties \u90E8\u5206\u53C2\u6570\u542B\u4E49\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"Username"}),"/",(0,s.jsx)(e.code,{children:"Pasword"}),"\uFF1ADoris \u96C6\u7FA4\u7684\u7528\u6237\u540D\u5BC6\u7801\uFF0C\u8FD9\u91CC\u5EFA\u8BAE\u4F7F\u7528 Admin \u7528\u6237\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"jdbc.driver_class"}),"\uFF1A\u8FDE\u63A5 Doris \u4F7F\u7528\u7684 JDBC \u9A71\u52A8\u3002",(0,s.jsx)(e.code,{children:"com.mysql.cj.jdbc.Driver"})]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"jdbc.url"}),"\uFF1ADoris \u96C6\u7FA4\u7684 JDBC url \u8FDE\u63A5\u4E32\u3002",(0,s.jsx)(e.code,{children:"jdbc:mysql://172.21.0.101:9030?useSSL=false"})]}),"\n",(0,s.jsxs)(e.li,{children:["\u989D\u5916\u53C2\u6570\uFF1A\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"resource.lookup.timeout.value.in.ms"}),"\uFF1A\u83B7\u53D6\u5143\u4FE1\u606F\u7684\u8D85\u65F6\u65F6\u95F4\uFF0C\u5EFA\u8BAE\u586B\u5199 ",(0,s.jsx)(e.code,{children:"10000"}),"\uFF0C\u5373 10 \u79D2\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["\u53EF\u4EE5\u70B9\u51FB ",(0,s.jsx)(e.code,{children:"Test Connection"})," \u68C0\u67E5\u662F\u5426\u53EF\u4EE5\u8054\u901A\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u4E4B\u540E\u70B9\u51FB ",(0,s.jsx)(e.code,{children:"Add"})," \u6DFB\u52A0\u670D\u52A1\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728 Service Manger \u754C\u9762\u7684 Apache Doris \u63D2\u4EF6\u4E2D\u770B\u5230\u521B\u5EFA\u7684\u670D\u52A1\uFF0C\u70B9\u51FB\u670D\u52A1\uFF0C\u5373\u53EF\u5F00\u59CB\u914D\u7F6E Ranger\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u914D\u7F6E-doris-\u96C6\u7FA4",children:"\u914D\u7F6E Doris \u96C6\u7FA4"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728\u6240\u6709 FE \u7684 conf \u76EE\u5F55\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"ranger-doris-security.xml"})," \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n    <property>\n        <name>ranger.plugin.doris.policy.cache.dir</name>\n        <value>/path/to/ranger/cache/</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.pollIntervalMs</name>\n        <value>30000</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.rest.client.connection.timeoutMs</name>\n        <value>60000</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.rest.client.read.timeoutMs</name>\n        <value>60000</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.rest.url</name>\n        <value>http://172.21.0.32:6080</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.policy.source.impl</name>\n        <value>org.apache.ranger.admin.client.RangerAdminRESTClient</value>\n    </property>\n    <property>\n        <name>ranger.plugin.doris.service.name</name>\n        <value>doris</value>\n    </property>\n</configuration>\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4E2D\u9700\u8981\u5C06 ",(0,s.jsx)(e.code,{children:"ranger.plugin.doris.policy.cache.dir"})," \u548C ",(0,s.jsx)(e.code,{children:"ranger.plugin.doris.policy.rest.url"})," \u6539\u4E3A\u5B9E\u9645\u503C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728\u6240\u6709 FE \u7684 conf \u76EE\u5F55\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"ranger-doris-audit.xml"})," \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:'<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n</configuration>\n'})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728\u6240\u6709 FE \u7684 conf \u76EE\u5F55\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"log4j.properties"})," \u6587\u4EF6\uFF0C\u5185\u5BB9\u5982\u4E0B\uFF1A"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"log4j.rootLogger = warn,stdout,D\n\nlog4j.appender.stdout = org.apache.log4j.ConsoleAppender\nlog4j.appender.stdout.Target = System.out\nlog4j.appender.stdout.layout = org.apache.log4j.PatternLayout\nlog4j.appender.stdout.layout.ConversionPattern = [%-5p] %d{yyyy-MM-dd HH:mm:ss,SSS} method:%l%n%m%n\n\nlog4j.appender.D = org.apache.log4j.DailyRollingFileAppender\nlog4j.appender.D.File = /path/to/fe/log/ranger.log\nlog4j.appender.D.Append = true\nlog4j.appender.D.Threshold = INFO\nlog4j.appender.D.layout = org.apache.log4j.PatternLayout\nlog4j.appender.D.layout.ConversionPattern = %-d{yyyy-MM-dd HH:mm:ss}  [ %t:%r ] - [ %p ]  %m%n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5176\u4E2D ",(0,s.jsx)(e.code,{children:"log4j.appender.D.File"})," \u6539\u4E3A\u5B9E\u9645\u503C\uFF0C\u7528\u4E8E\u5B58\u653E Ranger \u63D2\u4EF6\u7684\u65E5\u5FD7\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728\u6240\u6709 FE \u7684 fe.conf \u4E2D\u6DFB\u52A0\u914D\u7F6E\uFF1A"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"access_controller_type=ranger-doris"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u91CD\u542F\u6240\u6709 FE \u8282\u70B9\u5373\u53EF\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u8D44\u6E90\u548C\u6743\u9650",children:"\u8D44\u6E90\u548C\u6743\u9650"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u76EE\u524D Ranger \u4E2D\u652F\u6301\u7684 Doris \u8D44\u6E90\u5305\u62EC\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Catalog"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Database"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Table"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Column"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Resource"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"Workload Group"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u76EE\u524D Ranger \u4E2D\u652F\u6301\u7684 Doris \u6743\u9650\u5305\u62EC\uFF1A"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"SHOW"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"SHOW_VIEW"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"SHOW_RESOURCES"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"SHOW_WORKLOAD_GROUP"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"LOAD"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"ALTER"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"CREATE"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"ALTER_CREATE"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"ALTER_CREATE_DROP"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"DROP"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"SELECT"})}),"\n",(0,s.jsx)(e.li,{children:(0,s.jsx)(e.code,{children:"USAGE"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"}),"\n",(0,s.jsx)(e.h3,{id:"\u914D\u7F6E\u6743\u9650",children:"\u914D\u7F6E\u6743\u9650"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728 Doris \u4E2D\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"user1"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728 Doris \u4E2D\uFF0C\u5148\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"admin"})," \u7528\u6237\u521B\u5EFA\u4E00\u4E2A Catalog\uFF1A",(0,s.jsx)(e.code,{children:"hive"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728 Ranger \u4E2D\u521B\u5EFA ",(0,s.jsx)(e.code,{children:"user1"}),"\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728 Ranger \u4E2D\u6DFB\u52A0\u4E00\u4E2A Policy\uFF1A",(0,s.jsx)(e.code,{children:"show_hive_catalog"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ranger3",src:r(532382).Z+"",width:"1928",height:"1698"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"user1"})," \u767B\u5F55 Doris\uFF0C\u6267\u884C ",(0,s.jsx)(e.code,{children:"show catalogs"}),"\uFF0C\u53EA\u80FD\u770B\u5230 ",(0,s.jsx)(e.code,{children:"hive"})," catalog\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u5728 Ranger \u4E2D\u6DFB\u52A0\u4E00\u4E2A Policy\uFF1A",(0,s.jsx)(e.code,{children:"select_hive_catalog"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"ranger4",src:r(74275).Z+"",width:"1926",height:"1854"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528 ",(0,s.jsx)(e.code,{children:"user1"})," \u767B\u5F55 Doris\u3002\u8BE5\u7528\u6237\u53EF\u4EE5\u67E5\u770B\u6216\u67E5\u8BE2 ",(0,s.jsx)(e.code,{children:"hive"})," catalog \u4E0B\uFF0C\u6240\u6709\u4EE5 ",(0,s.jsx)(e.code,{children:"tpch"})," \u5F00\u5934\u7684 database \u4E0B\u7684\u6240\u6709\u8868\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"row-policy-\u793A\u4F8B",children:"Row Policy \u793A\u4F8B"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"2.1.3 \u7248\u672C\u652F\u6301"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53C2\u8003 \u914D\u7F6E\u6743\u9650 \u7ED9 user1 \u5206\u914D internal.db1.user \u8868\u7684 select \u6743\u9650\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728 Ranger \u4E2D\u6DFB\u52A0\u4E00\u4E2A Row Level Filter policy"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Row Policy \u793A\u4F8B",src:r(797447).Z+"",width:"1280",height:"703"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528 user1 \u767B\u5F55 Doris\u3002\u6267\u884C ",(0,s.jsx)(e.code,{children:"select * from internal.db1.user"}),"\uFF0C\u53EA\u80FD\u770B\u5230\u6EE1\u8DB3 ",(0,s.jsx)(e.code,{children:"id > 3"})," \u4E14 ",(0,s.jsx)(e.code,{children:"age = 2"})," \u7684\u6570\u636E\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"data-mask-\u793A\u4F8B",children:"Data Mask \u793A\u4F8B"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"2.1.3 \u7248\u672C\u652F\u6301"}),"\n"]}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u53C2\u8003 \u914D\u7F6E\u6743\u9650 \u7ED9 user1 \u5206\u914D internal.db1.user \u8868\u7684 select \u6743\u9650\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5728 Ranger \u4E2D\u6DFB\u52A0\u4E00\u4E2A Masking policy"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"Data Mask \u793A\u4F8B",src:r(3830).Z+"",width:"1280",height:"702"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsxs)(e.p,{children:["\u4F7F\u7528 user1 \u767B\u5F55 Doris\u3002\u6267\u884C ",(0,s.jsx)(e.code,{children:"select * from internal.db1.user"}),"\uFF0C\u770B\u5230\u7684 phone \u662F\u6309\u7167\u6307\u5B9A\u89C4\u5219\u8131\u654F\u540E\u7684\u6570\u636E\u3002"]}),"\n"]}),"\n"]})]})}function t(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},3830:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/ranger-data-mask-b6a744951ab66b50d2eab58507a71e58.png"},797447:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/ranger-row-policy-1ff51f26011c8534e95ba9a308d952a2.jpeg"},696748:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/ranger1-f3bf6121740cc89e025f6a1b2ae9a0f2.png"},712206:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/ranger2-e4453db1ebcf2d34cb964bcf67999dd7.png"},532382:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/ranger3-ec16fbd18f4839b786f30d3a886b74b9.png"},74275:function(n,e,r){r.d(e,{Z:function(){return i}});let i=r.p+"assets/images/ranger4-ddf46edc8b31e00d2daf502b8647df92.png"},250065:function(n,e,r){r.d(e,{Z:function(){return d},a:function(){return c}});var i=r(667294);let s={},l=i.createContext(s);function c(n){let e=i.useContext(l);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:c(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);