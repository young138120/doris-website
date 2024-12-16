"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["426766"],{286160:function(e,n,i){i.r(n),i.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return t},toc:function(){return l}});var t=i(391587),s=i(785893),a=i(250065);let r={title:"The application of Apache Doris in NIO",description:"NIO Inc. (NYSE: NIO)is a leading company in the premium smart electric vehicle market. Founded in November 2014, NIO designs, develops, jointly manufactures and sells premium smart electric vehicles, driving innovations in autonomous driving, digital technologies, electric powertrains and batteries. Recently, NIO planned to enter the U.S. market alongside other western markets by the end of 2025. The company has already established a U.S. headquarters in San Jose, California, where they started hiring people..",date:"2022-11-28",author:"Huaidong Tang",tags:["Best Practice"],image:"/images/nio.png"},o="The Application of Apache Doris in NIO",d={authorsImageUrls:[void 0]},l=[{value:"About NIO",id:"about-nio",level:2},{value:"The Architecture Evolution of OLAP in NIO",id:"the-architecture-evolution-of-olap-in-nio",level:2},{value:"1. Introduced Apache Druid",id:"1-introduced-apache-druid",level:3},{value:"2. Introduced TiDB",id:"2-introduced-tidb",level:3},{value:"3. Introduced Apache Doris",id:"3-introduced-apache-doris",level:3},{value:"Apache Doris-the Unified OLAP Datawarehouse",id:"apache-doris-the-unified-olap-datawarehouse",level:2},{value:"1. Data Source",id:"1-data-source",level:3},{value:"2. Data Import",id:"2-data-import",level:3},{value:"3. Data Processing",id:"3-data-processing",level:3},{value:"4. Data Warehouse",id:"4-data-warehouse",level:3},{value:"5. Data Service",id:"5-data-service",level:3},{value:"6. Application",id:"6-application",level:3},{value:"Best Practice of Apache Doris on CDP Architecture",id:"best-practice-of-apache-doris-on-cdp-architecture",level:2},{value:"1. CDP Architecture",id:"1-cdp-architecture",level:3},{value:"2. Considerations for CDP Storage Selection",id:"2-considerations-for-cdp-storage-selection",level:3},{value:"Summery and Benefits",id:"summery-and-benefits",level:2}];function c(e){let n={blockquote:"blockquote",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NIO",src:i(22928).Z+"",width:"900",height:"383"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Guide: The topic of this sharing is the application of Apache Doris in NIO, which mainly includes the following topics:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Introduction about NIO"}),"\n",(0,s.jsx)(n.li,{children:"The Development of OLAP in NIO"}),"\n",(0,s.jsx)(n.li,{children:"Apache Doris-the Unified OLAP Data warehouse"}),"\n",(0,s.jsx)(n.li,{children:"Best Practice of Apache Doris on CDP Architecture"}),"\n",(0,s.jsx)(n.li,{children:"Summery and Benefits"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Author\uFF1AHuaidong Tang, Data Team Leader, NIO INC"}),"\n",(0,s.jsx)(n.h2,{id:"about-nio",children:"About NIO"}),"\n",(0,s.jsx)(n.p,{children:"NIO Inc. (NYSE: NIO)is a leading company in the premium smart electric vehicle market. Founded in November 2014, NIO designs, develops, jointly manufactures and sells premium smart electric vehicles, driving innovations in autonomous driving, digital technologies, electric powertrains and batteries."}),"\n",(0,s.jsx)(n.p,{children:"Recently, NIO planned to enter the U.S. market alongside other western markets by the end of 2025. The company has already established a U.S. headquarters in San Jose, California, where they started hiring people."}),"\n",(0,s.jsx)(n.h2,{id:"the-architecture-evolution-of-olap-in-nio",children:"The Architecture Evolution of OLAP in NIO"}),"\n",(0,s.jsx)(n.p,{children:"The architectural evolution of OLAP in NIO took several steps for years."}),"\n",(0,s.jsx)(n.h3,{id:"1-introduced-apache-druid",children:"1. Introduced Apache Druid"}),"\n",(0,s.jsx)(n.p,{children:"At that time, there were not so many OLAP storage and query engines to choose from. The more common ones were Apache Druid and Apache Kylin. There are 2 reasons why we didn't choose Kylin."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The most suitable and optimal storage at the bottom of Kylin is HBase and adding it would increase the cost of operation and maintenance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kylin's precalculation involves various dimensions and indicators. Too many dimensions and indicators would cause great pressure on storage."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We prefer Druid because we used to be users and are familiar with it. Apache Druid has obvious advantages. It supports real-time and offline data import, columnar storage, high concurrency, and high query efficiency. But it has downsides as well:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Standard protocols such as JDBC are not used"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The capability of JOIN is weak"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Significant performance downhill when performing dedeplication"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"High in operation and maintenance costs, different components have separate installation methods and different dependencies; Data import needs extra integration with Hadoop and the dependencies of JAR packages"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-introduced-tidb",children:"2. Introduced TiDB"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"TiDB is a mature datawarehouse focused on OLTP+OLAP, which also has distinctive advantages and disadvantages:"})}),"\n",(0,s.jsx)(n.p,{children:"Advantage:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"OLTP database, can be updated friendly"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supports detailed and aggregated query, which can handle dashboard statistical reports or query of detailed data at the same time"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supports standard SQL, which has low cost of use"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Low operation and maintenance cost"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Disadvantages:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"It is not an independent OLAP. TiFlash relies on OLTP and will increase storage. Its OLAP ability is insufficient"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The overall performance should be measured separately by each scene"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"3-introduced-apache-doris",children:"3. Introduced Apache Doris"}),"\n",(0,s.jsx)(n.p,{children:"Since 2021, we have officially introduced Apache Doris. In the process of selection, we are most concerned about various factors such as product performance, SQL protocol, system compatibility, learning and operation and maintenance costs. After deep research and detailed comparison of the following systems, we came to the following conclusions:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Apache Doris, whose advantages fully meet our demands:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supports high concurrent query (what we concerned most)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supports both real-time and offline data"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supports detailed and aggregated query"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"UNIQ model can be updated"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The ability of Materialized View can greatly speed up query efficiency"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fully compatible with the MySQL protocol and the cost of development is relatively low"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The performance fully meets our requirements"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Lower operation and maintenance costs"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Moreover, there is another competitor, Clickhouse. Its stand-alone performance is extremely strong, but its disadvantages are hard to accept:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"In some cases, its multi-table JOIN is weak"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Relatively low in concurrency"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"High operation and maintenance costs"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"With multiple good performances, Apache Doris outstands Druid and TiDB. Meanwhile Clickhouse did not fit well in our business, which lead us to Apache Doris."}),"\n",(0,s.jsx)(n.h2,{id:"apache-doris-the-unified-olap-datawarehouse",children:"Apache Doris-the Unified OLAP Datawarehouse"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NIO",src:i(744766).Z+"",width:"1018",height:"669"})}),"\n",(0,s.jsx)(n.p,{children:"This diagram basically describes our OLAP Architecuture, including data source, data import, data processing, data warehouse, data service and application."}),"\n",(0,s.jsx)(n.h3,{id:"1-data-source",children:"1. Data Source"}),"\n",(0,s.jsx)(n.p,{children:"In NIO, the data source not only refers to database, but also event tracking data, device data, vehicle data, etc. The data will be ingested into the big data platform."}),"\n",(0,s.jsx)(n.h3,{id:"2-data-import",children:"2. Data Import"}),"\n",(0,s.jsx)(n.p,{children:"For business data, you can trigger CDC and convert it into a data stream, store it in Kafka, and then perform stream processing. Some data that can only be passed in batches will directly enter our distributed storage."}),"\n",(0,s.jsx)(n.h3,{id:"3-data-processing",children:"3. Data Processing"}),"\n",(0,s.jsx)(n.p,{children:"We took the Lambda architecture rather than stream-batch integration."}),"\n",(0,s.jsx)(n.p,{children:"Our own business determines that our Lambda architecture should be divided into two paths: offline and real-time:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Some data is streamed."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Some data can be stored in the data stream, and some historical data will not be stored in Kafka."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Some data requires high precision in some circumstances. In order to ensure the accuracy of the data, an offline pipeline will recalculate and refresh the entire data."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"4-data-warehouse",children:"4. Data Warehouse"}),"\n",(0,s.jsx)(n.p,{children:"From data processing to the data warehouse, we did not adopt Flink or Spark Doris Connector. We use Routine Load to connect Apache Doris and Flink, and Broker Load to connect Doris and Spark. The data generated in batches by Spark will be backed up to Hive for further use in other scenarios. In this way, each calculation is used for multiple scenarios at the same time, which greatly improves the efficiency. It also works for Flink."}),"\n",(0,s.jsx)(n.h3,{id:"5-data-service",children:"5. Data Service"}),"\n",(0,s.jsx)(n.p,{children:"What behind Doris is One Service. By registering the data source or flexible configuration, the API with flow and authority control is automatically generated, which greatly improves flexibility. And with the k8s serverless solution, the entire service is much more flexible."}),"\n",(0,s.jsx)(n.h3,{id:"6-application",children:"6. Application"}),"\n",(0,s.jsx)(n.p,{children:"In the application layer, we mainly deploy some reporting applications and other services."}),"\n",(0,s.jsx)(n.p,{children:"We mainly have two types of scenarios:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"User-oriented"})," , which is similar to the Internet, contains a data dashboard and data indicators."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Car-oriented"})," , car data enters Doris in this way. After certain aggregation, the volume of Doris data is about billions. But the overall performance can still meet our requirements."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"best-practice-of-apache-doris-on-cdp-architecture",children:"Best Practice of Apache Doris on CDP Architecture"}),"\n",(0,s.jsx)(n.h3,{id:"1-cdp-architecture",children:"1. CDP Architecture"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"NIO",src:i(474283).Z+"",width:"1471",height:"422"})}),"\n",(0,s.jsx)(n.p,{children:"Next, let me introduce Doris' practice on the operating platform. This is what happens in our real business. Nowadays, Internet companies will make their own CDP, which includes several modules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tags"})," , which is the most basic part."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Target"})," , based on tags, select people according to some certain logic."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Insight"})," , aiming at a group of people, clarify the distribution and characteristics of the group."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Touch"})," , use methods such as text messages, phone calls, voices, APP notifications, IM, etc. to reach users, and cooperate with flow control."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Effect analysis,"})," to improve the integrity of the operation platform, with action, effect and feedback."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Doris plays the most important role here, including: tags storage, groups storage, and effect analysis."}),"\n",(0,s.jsx)(n.p,{children:"Tags are divided into basic tags and basic data of user behavior. We can flexibly customize other tags based on those facts. From the perspective of time effectiveness, tags are also divided into real-time tags and offline tags."}),"\n",(0,s.jsx)(n.h3,{id:"2-considerations-for-cdp-storage-selection",children:"2. Considerations for CDP Storage Selection"}),"\n",(0,s.jsx)(n.p,{children:"We took five dimensions into account when we select CDP storage."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(1) Unification of Offline and Real-time"})}),"\n",(0,s.jsx)(n.p,{children:"As mentioned earlier, there are offline tags and real-time tags. Currently we are close to quasi-real-time. For some data, quasi-real-time is good enough to meet our needs. A large number of tags are still offline tags. The methods used are Doris's Routine Load and Broker Load."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Scenes"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Requirements"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Apache Doris's Function"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Real-time tags"}),(0,s.jsx)(n.td,{children:"Real-time data updates"}),(0,s.jsx)(n.td,{children:"Routine Load"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Offline tags"}),(0,s.jsx)(n.td,{children:"Highly efficient batch import"}),(0,s.jsx)(n.td,{children:"Broker Load"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Unification of offline and real-time"}),(0,s.jsx)(n.td,{children:"Unification of offline and real-time data storage"}),(0,s.jsx)(n.td,{children:"Routine Load and Broker Load update different columns of the same table"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"In addition, on the same table, the update frequency of different columns is also different. For example, we need to update the user's identity in real time because the user's identity changes all the time. T+1's update does not meet our needs. Some tags are offline, such as the user's gender, age and other basic tags, T+1 update is sufficient to meet our standards. The maintenance cost caused by putting the tags of basic users on the same table is very low. When customizing tags later, the number of tables will be greatly reduced, which benefits the overall performance."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(2) Efficient Targets"})}),"\n",(0,s.jsx)(n.p,{children:"When users tags are done, is time to target right group of people. The target is to filter out all the people who meet the conditions according to different combinations of tags. At this time, there will be queries with different combinations of tag conditions. There was an obvious improvement when Apache Doris upgraded to vectorization."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Scenes"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Requirements"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Apache Doris's Function"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Complex Condition Targets"}),(0,s.jsx)(n.td,{children:"Highly efficient combination of tags"}),(0,s.jsx)(n.td,{children:"Optimization of SIMD"})]})})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(3) Efficient Polymerization"})}),"\n",(0,s.jsx)(n.p,{children:"The user insights and effect analysis statistics mentioned above require statistical analysis of the data, which is not a simple thing of obtaining tags by user ID. The amount of data read and query efficiency have a great impact on the distribution of our tags, the distribution of groups, and the statistics of effect analysis. Apache Doris helps a lot:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Data Partition. We shard the data by time order and the analysis and statistics will greatly reduce the amount of data, which can greatly speed up the efficiency of query and analysis."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Node aggregation. Then we collect them for unified aggregation."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Vectorization. The vectorization execution engine has significant performance improvement."}),"\n"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Scenes"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Requirements"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Apache Doris's Function"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Distribution of Tags Values"}),(0,s.jsx)(n.td,{children:"The distribution values \u200B\u200Bof all tags need to be updated every day. Fast and efficient statistics are required"}),(0,s.jsx)(n.td,{children:"Data partition lessens data transfer and calculation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Distribution of Groups"}),(0,s.jsx)(n.td,{children:"Same as Above"}),(0,s.jsx)(n.td,{children:"Unified storage and calculation, each node aggregates first"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Statistics for Performance Analysis"}),(0,s.jsx)(n.td,{children:"Same as Above"}),(0,s.jsx)(n.td,{children:"Speed up SIMD"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(4) Multi-table Association"})}),"\n",(0,s.jsx)(n.p,{children:"Our CDP might be different from common CDP scenarios in the industry, because common CDP tags in some scenarios are estimated in advance and no custom tags, which leaves the flexibility to users who use CDP to customize tags themselves. The underlying data is scattered in different database tables. If you want to create a custom tag, you must associate the tables."}),"\n",(0,s.jsx)(n.p,{children:"A very important reason we chose Doris is the ability to associate multiple tables. Through performance tests, Apache Doris is able to meet our requirements. And Doris provides users with powerful capabilities because tags are dynamic."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Scenes"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Requirements"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Apache Doris's Function"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Distributed Characteristics of the Population"}),(0,s.jsx)(n.td,{children:"The distribution of statistical groups under a certain characteristic"}),(0,s.jsx)(n.td,{children:"Table Association"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Single Tag"}),(0,s.jsx)(n.td,{children:"Display tags"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"(5) Query Federation"})}),"\n",(0,s.jsx)(n.p,{children:"Whether the user is successfully reached or not will be recorded in TiDB. Notifications during operations may only affect user experience. If a transaction is involved, such as gift cards or coupons, the task execution must be done without repetition. TiDB is more suitable for this OLTP scenario."}),"\n",(0,s.jsx)(n.p,{children:"But for effect analysis, it is necessary to understand the extent to which the operation plan is implemented, whether the goal is achieved and its distribution. It is necessary to combine task execution and group selection for analysis, which requires the query association between Doris and TiDB."}),"\n",(0,s.jsx)(n.p,{children:"The size of the tag is probably small, so we would like to save it into Elasticsearch. However, it proves us wrong later."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Scenes"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Requirements"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Apache Doris's Function"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Effect Analysis Associated with Execution Details"}),(0,s.jsx)(n.td,{children:"Doris query associated with TiDB"}),(0,s.jsx)(n.td,{children:"Query Association with other databases"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Group Tags Associated with Behavior Aggregation"}),(0,s.jsx)(n.td,{children:"Doris query associated with Elasticsearch"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"summery-and-benefits",children:"Summery and Benefits"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"bitmap"}),". Our volume are not big enough to test its full efficiency. If the volume reaches a certain level, using bitmap might have a good performance improvement. For example, when calculating UV , bitmap aggregation can be considered if the full set of Ids is greater than 50 million."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"The performance is good"})," when Elasticsearch single-table query is associated with Doris."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Better to update columns in batches"}),". In order to reduce the number of tables and improve the performance of the JOIN table, the table designed should be as streamlined as possible and aggregated as much as possible. However, fields of the same type may have different update frequencies. Some fields need to be updated at daily level, while others may need to be updated at hourly level. Updating a column alone is an important requirement. The solution from Apache Doris is to use REPLACE_IF_NOT_NULL. Note: It is impossible to replace the original non-null value with null. You can replace all nulls with meaningful default values, such as unknown."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Online Services"}),". Apache Doris serves online and offline scenarios at the same time, which requires high resource isolation."]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},22928:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/NIO_kv-7601d71a49c7ecd7fb42f03de600ae6c.png"},474283:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/cdp-3d65926e741a2837759b07514e914bbf.png"},744766:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/olap-96ad3bb86cebd92a200a0581f0418d3c.png"},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var t=i(667294);let s={},a=t.createContext(s);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}},391587:function(e){e.exports=JSON.parse('{"permalink":"/blog/NIO","source":"@site/blog/NIO.md","title":"The application of Apache Doris in NIO","description":"NIO Inc. (NYSE: NIO)is a leading company in the premium smart electric vehicle market. Founded in November 2014, NIO designs, develops, jointly manufactures and sells premium smart electric vehicles, driving innovations in autonomous driving, digital technologies, electric powertrains and batteries. Recently, NIO planned to enter the U.S. market alongside other western markets by the end of 2025. The company has already established a U.S. headquarters in San Jose, California, where they started hiring people..","date":"2022-11-28T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Huaidong Tang","key":null,"page":null}],"frontMatter":{"title":"The application of Apache Doris in NIO","description":"NIO Inc. (NYSE: NIO)is a leading company in the premium smart electric vehicle market. Founded in November 2014, NIO designs, develops, jointly manufactures and sells premium smart electric vehicles, driving innovations in autonomous driving, digital technologies, electric powertrains and batteries. Recently, NIO planned to enter the U.S. market alongside other western markets by the end of 2025. The company has already established a U.S. headquarters in San Jose, California, where they started hiring people..","date":"2022-11-28","author":"Huaidong Tang","tags":["Best Practice"],"image":"/images/nio.png"},"unlisted":false,"prevItem":{"title":"Apache Doris helped Netease create a refined operation DMP system","permalink":"/blog/Netease"},"nextItem":{"title":"How does Apache Doris help AISPEECH build a data warehouse in AI chatbots scenario","permalink":"/blog/Use-Apache-Doris-with-AI-chatbots"}}')}}]);