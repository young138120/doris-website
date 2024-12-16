"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["308452"],{924112:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d}});var i=t(843766),s=t(785893),n=t(250065);let o={title:"Apache Doris speeds up data reporting, tagging, and data lake analytics",description:"The user leverages the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieves high performance.",date:"2023-12-27",author:"Apache Doris",tags:["Best Practice"],image:"/images/apache-doris-speeds-up-data-reporting-data-lake-analytics.jpg"},r=void 0,c={authorsImageUrls:[void 0]},d=[{value:"Reporting",id:"reporting",level:2},{value:"From ClickHouse + MySQL to Apache Doris",id:"from-clickhouse--mysql-to-apache-doris",level:3},{value:"Performance improvements",id:"performance-improvements",level:3},{value:"Tagging",id:"tagging",level:2},{value:"Data lake analytics",id:"data-lake-analytics",level:2},{value:"Conclusion",id:"conclusion",level:2}];function l(e){let a={a:"a",div:"div",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["As much as we say ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," is an all-in-one data platform that is capable of various analytics workloads, it is always compelling to demonstrate that by real use cases. That's why I would like to share this user story with you. It is about how they leverage the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieve high performance."]}),"\n",(0,s.jsx)(a.p,{children:"This fintech service provider is a long-term user of Apache Doris. They have almost 10 clusters for production, hundreds of Doris backend nodes, and thousands of CPU Cores. The total data size is near 1 PB. Every day, they have hundreds of workflows running simultaneously, receive almost 10 billion new data records, and respond to millions of data queries."}),"\n",(0,s.jsx)(a.p,{children:"Before migrating to Apache Doris, they used ClickHouse, MySQL, and Elasticsearch. Then frictions arise from their ever-enlarging data size. They found it hard to scale out the ClickHouse clusters because there were too many dependencies. As for MySQL, they had to switch between various MySQL instances because one MySQL instance had its limits and cross-instance queries were not supported."}),"\n",(0,s.jsx)(a.h2,{id:"reporting",children:"Reporting"}),"\n",(0,s.jsx)(a.h3,{id:"from-clickhouse--mysql-to-apache-doris",children:"From ClickHouse + MySQL to Apache Doris"}),"\n",(0,s.jsx)(a.p,{children:"Data reporting is one of the major services they provide to their customers and they are bound by an SLA. They used to support such service with a combination of ClickHouse and MySQL, but they found significant fluctuations in their data synchronization duration, making it hard for them to meet the service levels outlined in their SLA. Diagnosis showed that it was because the multiple components add to the complexity and instability of data synchronization tasks. To fix that, they have used Apache Doris as a unified analytic engine to support data reporting."}),"\n",(0,s.jsx)(a.div,{style:{},children:(0,s.jsx)(a.img,{src:"https://cdn.selectdb.com/static/from_clickhouse_mysql_to_apache_doris_6387c0363a.png",alt:"from-clickhouse-mysql-to-apache-doris",width:"840",style:{},"'inline-block'}}":""})}),"\n",(0,s.jsx)(a.h3,{id:"performance-improvements",children:"Performance improvements"}),"\n",(0,s.jsxs)(a.p,{children:["With Apache Doris, they ingest data via the ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/1.2/data-operate/import/import-way/broker-load-manual",children:"Broker Load"})," method and reach an SLA compliance rate of over 99% in terms of data synchronization performance."]}),"\n",(0,s.jsx)(a.div,{style:{},children:(0,s.jsx)(a.img,{src:"https://cdn.selectdb.com/static/data_synchronization_size_and_duration_327e4dc1fe.png",alt:"data-synchronization-size-and-duration",width:"640",style:{},"'inline-block'}}":""})}),"\n",(0,s.jsxs)(a.p,{children:["As for data queries, the Doris-based architecture maintains an ",(0,s.jsx)(a.strong,{children:"average query response time"})," of less than ",(0,s.jsx)(a.strong,{children:"10s"})," and a ",(0,s.jsx)(a.strong,{children:"P90 response time"})," of less than ",(0,s.jsx)(a.strong,{children:"30s"}),". This is a 50% speedup compared to the old architecture."]}),"\n",(0,s.jsx)(a.div,{style:{},children:(0,s.jsx)(a.img,{src:"https://cdn.selectdb.com/static/average_query_response_time_372d71ef16.png",alt:"average-query-response-time",width:"840",style:{},"'inline-block'}}":""})}),"\n",(0,s.jsx)(a.div,{style:{},children:(0,s.jsx)(a.img,{src:"https://cdn.selectdb.com/static/query_response_time_percentile_756c6f6a71.png",alt:"query-response-time-percentile",width:"840",style:{},"'inline-block'}}":""})}),"\n",(0,s.jsx)(a.h2,{id:"tagging",children:"Tagging"}),"\n",(0,s.jsx)(a.p,{children:"Tagging is a common operation in customer analytics. You assign labels to customers based on their behaviors and characteristics, so that you can divide them into groups and figure out targeted marketing strategies for each group of them."}),"\n",(0,s.jsx)(a.p,{children:"In the old processing architecture where Elasticsearch was the processing engine, raw data was ingested and tagged properly. Then, it will be merged into JSON files and imported into Elasticsearch, which provides data services for analysts and marketers. In this process, the merging step was to reduce updates and relieve load for Elasticsearch, but it turned out to be a troublemaker:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsx)(a.li,{children:"Any problematic data in any of the tags could spoil the entire merging operation and thus interrupt the data services."}),"\n",(0,s.jsx)(a.li,{children:"The merging operation was implemented based on Spark and MapReduce and took up to 4 hours. Such a long time frame could encroach on marketing opportunities and lead to unseen losses."}),"\n"]}),"\n",(0,s.jsx)(a.div,{style:{},children:(0,s.jsx)(a.img,{src:"https://cdn.selectdb.com/static/tagging_services_3263e21c36.png",alt:"tagging-services",width:"840",style:{},"'inline-block'}}":""})}),"\n",(0,s.jsxs)(a.p,{children:["Then Apache Doris takes this over. Apache Doris arranges tag data with its data models, which process data fast and smoothly. The aforementioned merging step can be done by the ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/data-table/data-model#aggregate-model",children:"Aggregate Key model"}),", which aggregates tag data based on the specified Aggregate Key upon data ingestion. The ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/data-table/data-model#unique-model",children:"Unique Key model"})," is handy for partial column updates. Again, all you need is to specify the Unique Key. This enables swift and flexible data updating and saves you from the trouble of replacing the entire flat table. You can also put your detailed data into a ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/data-table/data-model#duplicate-model",children:"Duplicate model"})," to speed up certain queries. ",(0,s.jsx)(a.strong,{children:"In practice, it took the user 1 hour to finish the data ingestion, compared to 4 hours with the old architecture."})]}),"\n",(0,s.jsxs)(a.p,{children:["In terms of query performance, Doris is equipped with well-developed bitmap indexes and techniques tailored to high-concurrency queries, so in this case, it can finish ",(0,s.jsx)(a.strong,{children:"customer segmentation within seconds"})," and reach over ",(0,s.jsx)(a.strong,{children:"700 QPS in user-facing queries"}),"."]}),"\n",(0,s.jsx)(a.h2,{id:"data-lake-analytics",children:"Data lake analytics"}),"\n",(0,s.jsx)(a.p,{children:"In data lake scenarios, the data size you need to handle tends to be huge, but the data processing volume in each query tends to vary. To ensure fast data ingestion and high query performance of huge data sets, you need more resources. On the other hand, during non-peak time, you want to scale down your cluster for more efficient resource management. How do you handle this dilemma?"}),"\n",(0,s.jsx)(a.p,{children:"Apache Doris has a few features that are designed for data lake analytics, including Multi-Catalog and Compute Node. The former shields you from the headache of data ingestion in data lake analytics while the latter enables elastic cluster scaling."}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/lakehouse/multi-catalog/?_highlight=multi&_highlight=catalog",children:"Multi-Catalog"})," mechanism allows you to connect Doris to a variety of external data sources so you can use Doris as a unified query gateway without worrying about bulky data ingestion into Doris."]}),"\n",(0,s.jsxs)(a.p,{children:["The ",(0,s.jsx)(a.a,{href:"https://doris.apache.org/docs/advanced/compute-node/",children:"Compute Node"})," of Apache Doris is a backend role that is designed for remote federated query workloads, like those in data lake analytics. Normal Doris backend nodes are responsible for both SQL query execution and data management, while the Compute Nodes in Doris, as the name implies, only perform computation. Compute Nodes are stateless, making them elastic enough for cluster scaling."]}),"\n",(0,s.jsx)(a.p,{children:"The user introduces Compute Nodes into their cluster and deploys them with other components in a hybrid configuration. As a result, the cluster automatically scales down during the night, when there are fewer query requests, and scales out during the daytime to handle the massive query workload. This is more resource-efficient."}),"\n",(0,s.jsx)(a.p,{children:"For easier deployment, they have also optimized their Deploy on Yarn process via Skein. As is shown below, they define the number of Compute nodes and the required resources in the YAML file, and then pack the installation file, configuration file, and startup script into the distributed file system. In this way, they can start or stop the entire cluster of over 100 nodes within minutes using one simple line of code."}),"\n",(0,s.jsx)(a.div,{style:{},children:(0,s.jsx)(a.img,{src:"https://cdn.selectdb.com/static/skein_3516ba1a83.png",alt:"skein",width:"560",style:{},"'inline-block'}}":""})}),"\n",(0,s.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(a.p,{children:["For data reporting and customer tagging, Apache Doris smoothens data ingestion and merging steps, and delivers high query performance based on its own design and functionality. For data lake analytics, the user improves resource efficiency by elastic scaling of clusters using the Compute Node. Along their journey with Apache Doris, they have also developed a data ingestion task prioritizing mechanism and contributed it to the Doris project. A gesture to facilitate their use case ends up benefiting the whole ",(0,s.jsx)(a.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"open source community"}),". This is a great example of open-source products thriving on user involvement."]}),"\n",(0,s.jsxs)(a.p,{children:["Check Apache Doris ",(0,s.jsx)(a.a,{href:"https://github.com/apache/doris",children:"repo"})," on GitHub"]})]})}function h(e={}){let{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return r},a:function(){return o}});var i=t(667294);let s={},n=i.createContext(s);function o(e){let a=i.useContext(n);return i.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:a},e.children)}},843766:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/apache-doris-speeds-up-data-reporting-tagging-and-data-lake-analytics","source":"@site/blog/apache-doris-speeds-up-data-reporting-tagging-and-data-lake-analytics.md","title":"Apache Doris speeds up data reporting, tagging, and data lake analytics","description":"The user leverages the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieves high performance.","date":"2023-12-27T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris speeds up data reporting, tagging, and data lake analytics","description":"The user leverages the capabilities of Apache Doris in reporting, customer tagging, and data lake analytics and achieves high performance.","date":"2023-12-27","author":"Apache Doris","tags":["Best Practice"],"image":"/images/apache-doris-speeds-up-data-reporting-data-lake-analytics.jpg"},"unlisted":false,"prevItem":{"title":"Financial data warehousing: fast, secure, and highly available with Apache Doris","permalink":"/zh-CN/blog/a-fast-secure-high-available-real-time-data-warehouse-based-on-apache-doris"},"nextItem":{"title":"From Elasticsearch to Apache Doris: upgrading an observability platform","permalink":"/zh-CN/blog/from-elasticsearch-to-apache-doris-upgrading-an-observability-platform"}}')}}]);