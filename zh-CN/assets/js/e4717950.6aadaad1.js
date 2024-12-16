"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["595536"],{645962:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return d}});var a=n(255362),i=n(785893),r=n(250065);let s={title:"New milestone: Apache Doris 2.0.0 just released",description:"Dear community, we are excited to announce that Apache Doris 2.0.0 is now production-ready on August 16, 2023",date:"2023-08-16",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.0.0.png"},o=void 0,l={authorsImageUrls:[void 0]},d=[{value:"<strong>A 10 Times Performance Increase</strong>",id:"a-10-times-performance-increase",level:2},{value:"A smarter query optimizer",id:"a-smarter-query-optimizer",level:3},{value:"Inverted Index",id:"inverted-index",level:3},{value:"20 times higher concurrency capability",id:"20-times-higher-concurrency-capability",level:3},{value:"A self-adaptive parallel execution model",id:"a-self-adaptive-parallel-execution-model",level:3},{value:"A Unified Platform for Multiple Analytic Workloads",id:"a-unified-platform-for-multiple-analytic-workloads",level:2},{value:"A 10 times more cost-effective log analysis solution",id:"a-10-times-more-cost-effective-log-analysis-solution",level:3},{value:"Enhanced data lakehousing capabilities",id:"enhanced-data-lakehousing-capabilities",level:3},{value:"Efficient Data Update",id:"efficient-data-update",level:2},{value:"Faster, Stabler, and Smarter Data Writing",id:"faster-stabler-and-smarter-data-writing",level:2},{value:"Higher speed in data writing",id:"higher-speed-in-data-writing",level:3},{value:"Greater stability in high-concurrency data writing",id:"greater-stability-in-high-concurrency-data-writing",level:3},{value:"Auto-synchronization of table schema",id:"auto-synchronization-of-table-schema",level:3},{value:"A New Multi-Tenant Resource Isolation Solution",id:"a-new-multi-tenant-resource-isolation-solution",level:2},{value:"Elastic Scaling and Storage-Compute Separation",id:"elastic-scaling-and-storage-compute-separation",level:2},{value:"Enhanced Usability",id:"enhanced-usability",level:2},{value:"Support for Kubernetes Deployment",id:"support-for-kubernetes-deployment",level:3},{value:"Support for Cross-Cluster Replication (CCR)",id:"support-for-cross-cluster-replication-ccr",level:3},{value:"Behavior Change",id:"behavior-change",level:2},{value:"Embarking on the 2.0.0 Journey",id:"embarking-on-the-200-journey",level:2}];function c(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"We are more than excited to announce that, after six months of coding, testing, and fine-tuning, Apache Doris 2.0.0 is now production-ready. Special thanks to the 275 committers who altogether contributed over 4100 optimizations and fixes to the project."}),"\n",(0,i.jsx)(t.p,{children:"This new version highlights:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"10 times faster data queries"}),"\n",(0,i.jsx)(t.li,{children:"Enhanced log analytic and federated query capabilities"}),"\n",(0,i.jsx)(t.li,{children:"More efficient data writing and updates"}),"\n",(0,i.jsx)(t.li,{children:"Improved multi-tenant and resource isolation mechanisms"}),"\n",(0,i.jsx)(t.li,{children:"Progresses in elastic scaling of resources and storage-compute separation"}),"\n",(0,i.jsx)(t.li,{children:"Enterprise-facing features for higher usability"}),"\n"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["Download: ",(0,i.jsx)(t.a,{href:"https://doris.apache.org/download",children:"https://doris.apache.org/download"})]}),"\n",(0,i.jsxs)(t.p,{children:["GitHub source code: ",(0,i.jsx)(t.a,{href:"https://github.com/apache/doris/releases/tag/2.0.0-rc04",children:"https://github.com/apache/doris/releases/tag/2.0.0-rc04"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"a-10-times-performance-increase",children:(0,i.jsx)(t.strong,{children:"A 10 Times Performance Increase"})}),"\n",(0,i.jsxs)(t.p,{children:["In SSB-Flat and TPC-H benchmarking, Apache Doris 2.0.0 delivered ",(0,i.jsx)(t.strong,{children:"over 10-time faster query performance"})," compared to an early version of Apache Doris."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"TPCH-benchmark-SSB-Flat-benchmark",src:n(498041).Z+"",width:"1724",height:"744"})}),"\n",(0,i.jsx)(t.p,{children:"This is realized by the introduction of a smarter query optimizer, inverted index, a parallel execution model, and a series of new functionalities to support high-concurrency point queries."}),"\n",(0,i.jsx)(t.h3,{id:"a-smarter-query-optimizer",children:"A smarter query optimizer"}),"\n",(0,i.jsx)(t.p,{children:"The brand new query optimizer, Nereids, has a richer statistical base and adopts the Cascades framework. It is capable of self-tuning in most query scenarios and supports all 99 SQLs in TPC-DS, so users can expect high performance without any fine-tuning or SQL rewriting."}),"\n",(0,i.jsx)(t.p,{children:"TPC-H tests showed that Nereids, with no human intervention, outperformed the old query optimizer by a wide margin. Over 100 users have tried Apache Doris 2.0.0 in their production environment and the vast majority of them reported huge speedups in query execution."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Nereids-optimizer-TPCH",src:n(340667).Z+"",width:"1280",height:"631"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Doc"}),": ",(0,i.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/query-acceleration/nereids/",children:"https://doris.apache.org/docs/dev/query-acceleration/nereids/"})]}),"\n",(0,i.jsxs)(t.p,{children:["Nereids is enabled by default in Apache Doris 2.0.0: ",(0,i.jsx)(t.code,{children:"SET enable_nereids_planner=true"}),". Nereids collects statistical data by calling the Analyze command."]}),"\n",(0,i.jsx)(t.h3,{id:"inverted-index",children:"Inverted Index"}),"\n",(0,i.jsxs)(t.p,{children:["In Apache Doris 2.0.0, we introduced ",(0,i.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/data-table/index/inverted-index?_highlight=inverted",children:"inverted index"})," to better support fuzzy keyword search, equivalence queries, and range queries."]}),"\n",(0,i.jsx)(t.p,{children:"A smartphone manufacturer tested Apache Doris 2.0.0 in their user behavior analysis scenarios. With inverted index enabled, v2.0.0 was able to finish the queries within milliseconds and maintain stable performance as the query concurrency level went up. In this case, it is 5 to 90 times faster than its old version."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"inverted-index-performance",src:n(148738).Z+"",width:"1718",height:"736"})}),"\n",(0,i.jsx)(t.h3,{id:"20-times-higher-concurrency-capability",children:"20 times higher concurrency capability"}),"\n",(0,i.jsx)(t.p,{children:"In scenarios like e-commerce order queries and express tracking, a huge number of end data users search for a certain data record simultaneously. These are what we call high-concurrency point queries, which can bring huge pressure on the system. A traditional solution is to introduce Key-Value stores like Apache HBase for such queries, and Redis as a cache layer to ease the burden, but that means redundant storage and higher maintenance costs."}),"\n",(0,i.jsx)(t.p,{children:"For a column-oriented DBMS like Apache Doris, the I/O usage of point queries will be multiplied. We need neater execution. Thus, on the basis of columnar storage, we added row storage format and row cache to increase row reading efficiency, short-circuit plans to speed up data retrieval, and prepared statements to reduce frontend overheads."}),"\n",(0,i.jsxs)(t.p,{children:["After these optimizations, Apache Doris 2.0 reached a concurrency level of ",(0,i.jsx)(t.strong,{children:"30,000 QPS per node"})," on YCSB on a 16 Core 64G cloud server with 4\xd71T hard drives, representing an improvement of ",(0,i.jsx)(t.strong,{children:"20 times"})," compared to its older version. This makes Apache Doris a good alternative to HBase in high-concurrency scenarios, so that users don't need to endure extra maintenance costs and redundant storage brought by complicated tech stacks."]}),"\n",(0,i.jsxs)(t.p,{children:["Read more: ",(0,i.jsx)(t.a,{href:"https://doris.apache.org/blog/How-We-Increased-Database-Query-Concurrency-by-20-Times",children:"https://doris.apache.org/blog/How-We-Increased-Database-Query-Concurrency-by-20-Times"})]}),"\n",(0,i.jsx)(t.h3,{id:"a-self-adaptive-parallel-execution-model",children:"A self-adaptive parallel execution model"}),"\n",(0,i.jsx)(t.p,{children:"Apache 2.0 brought in a Pipeline execution model for higher efficiency and stability in hybrid analytic workloads. In this model, the execution of queries is driven by data. The blocking operators in all query execution processes are split into pipelines. Whether a pipeline gets an execution thread depends on whether its relevant data is ready. This enables asynchronous blocking operations and more flexible system resource management. Also, this improves CPU efficiency as the system doesn't have to create and destroy threads that much."}),"\n",(0,i.jsxs)(t.p,{children:["Doc: ",(0,i.jsx)(t.a,{href:"https://doris.apache.org/docs/dev/query-acceleration/pipeline-execution-engine/",children:"https://doris.apache.org/docs/dev/query-acceleration/pipeline-execution-engine/"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"How to enable the Pipeline execution model"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The Pipeline execution engine is enabled by default in Apache Doris 2.0: ",(0,i.jsx)(t.code,{children:"Set enable_pipeline_engine = true"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"parallel_pipeline_task_num"})," represents the number of pipeline tasks that are parallelly executed in SQL queries. The default value of it is ",(0,i.jsx)(t.code,{children:"0"}),", which means Apache Doris will automatically set the concurrency level to half the number of CPUs in each backend node. Users can change this value as they need it."]}),"\n",(0,i.jsxs)(t.li,{children:["For those who are upgrading to Apache Doris 2.0 from an older version, it is recommended to set the value of ",(0,i.jsx)(t.code,{children:"parallel_pipeline_task_num"})," to that of ",(0,i.jsx)(t.code,{children:"parallel_fragment_exec_instance_num"})," in the old version."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"a-unified-platform-for-multiple-analytic-workloads",children:"A Unified Platform for Multiple Analytic Workloads"}),"\n",(0,i.jsx)(t.p,{children:"Apache Doris has been pushing its boundaries. Starting as an OLAP engine for reporting, it is now a data warehouse capable of ETL/ELT and more. Version 2.0 is making advancements in its log analysis and data lakehousing capabilities."}),"\n",(0,i.jsx)(t.h3,{id:"a-10-times-more-cost-effective-log-analysis-solution",children:"A 10 times more cost-effective log analysis solution"}),"\n",(0,i.jsx)(t.p,{children:"Apache Doris 2.0.0 provides native support for semi-structured data. In addition to JSON and Array, it now supports a complex data type: Map. Based on Light Schema Change, it also supports Schema Evolution, which means you can adjust the schema as your business changes. You can add or delete fields and indexes, and change the data types for fields. As we introduced inverted index and a high-performance text analysis algorithm into it, it can execute full-text search and dimensional analysis of logs more efficiently. With faster data writing and query speed and lower storage cost, it is 10 times more cost-effective than the common log analytic solution within the industry."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Apache-Doris-VS-Elasticsearch",src:n(980474).Z+"",width:"1280",height:"725"})}),"\n",(0,i.jsx)(t.h3,{id:"enhanced-data-lakehousing-capabilities",children:"Enhanced data lakehousing capabilities"}),"\n",(0,i.jsx)(t.p,{children:"In Apache Doris 1.2, we introduced Multi-Catalog to allow for auto-mapping and auto-synchronization of data from heterogeneous sources. In version 2.0.0, we extended the list of data sources supported and optimized Doris for based on users' needs in production environment."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Apache-Doris-data-lakehouse",src:n(284844).Z+"",width:"1708",height:"724"})}),"\n",(0,i.jsx)(t.p,{children:"Apache Doris 2.0.0 supports dozens of data sources including Hive, Hudi, Iceberg, Paimon, MaxCompute, Elasticsearch, Trino, ClickHouse, and almost all open lakehouse formats. It also supports snapshot queries on Hudi Copy-on-Write tables and read optimized queries on Hudi Merge-on-Read tables. It allows for authorization of Hive Catalog using Apache Ranger, so users can reuse their existing privilege control system. Besides, it supports extensible authorization plug-ins to enable user-defined authorization methods for any catalog."}),"\n",(0,i.jsx)(t.p,{children:"TPC-H benchmark tests showed that Apache Doris 2.0.0 is 3~5 times faster than Presto/Trino in queries on Hive tables. This is realized by all-around optimizations (in small file reading, flat table reading, local file cache, ORC/Parquet file reading, Compute Nodes, and information collection of external tables) finished in this development cycle and the distributed execution framework, vectorized execution engine, and query optimizer of Apache Doris."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Apache-Doris-VS-Trino",src:n(132007).Z+"",width:"1722",height:"728"})}),"\n",(0,i.jsx)(t.p,{children:"All this gives Apache Doris 2.0.0 an edge in data lakehousing scenarios. With Doris, you can do incremental or overall synchronization of multiple upstream data sources in one place, and expect much higher data query performance than other query engines. The processed data can be written back to the sources or provided for downstream systems. In this way, you can make Apache Doris your unified data analytic gateway."}),"\n",(0,i.jsx)(t.h2,{id:"efficient-data-update",children:"Efficient Data Update"}),"\n",(0,i.jsx)(t.p,{children:"Data update is important in real-time analysis, since users want to always be accessible to the latest data, and be able to update data flexibly, such as updating a row or just a few columns, batching updating or deleting their specified data, or even overwriting a whole data partition."}),"\n",(0,i.jsx)(t.p,{children:"Efficient data updating has been another hill to climb in data analysis. Apache Hive only supports updates on the partition level, while Hudi and Iceberg do better in low-frequency batch updates instead of real-time updates due to their Merge-on-Read and Copy-on-Write implementations."}),"\n",(0,i.jsx)(t.p,{children:"As for data updating, Apache Doris 2.0.0 is capable of:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Faster data writing"}),": In the pressure tests with an online payment platform, under 20 concurrent data writing tasks, Doris reached a writing throughput of 300,000 records per second and maintained stability throughout the over 10-hour continuous writing process."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Partial column update"}),": Older versions of Doris implements partial column update by ",(0,i.jsx)(t.code,{children:"replace_if_not_null"})," in the Aggregate Key model. In 2.0.0, we enable partial column updates in the Unique Key model. That means you can directly write data from multiple source tables into a flat table, without having to concatenate them into one output stream using Flink before writing. This method avoids a complicated processing pipeline and the extra resource consumption. You can simply specify the columns you need to update."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Conditional update and deletion"}),": In addition to the simple Update and Delete operations, we realize complicated conditional updates and deletes operations on the basis of Merge-on-Write."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"faster-stabler-and-smarter-data-writing",children:"Faster, Stabler, and Smarter Data Writing"}),"\n",(0,i.jsx)(t.h3,{id:"higher-speed-in-data-writing",children:"Higher speed in data writing"}),"\n",(0,i.jsx)(t.p,{children:"As part of our continuing effort to strengthen the real-time analytic capability of Apache Doris, we have improved the end-to-end real-time data writing capability of version 2.0.0. Benchmark tests reported higher throughput in various writing methods:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Stream Load, TPC-H 144G lineitem table, 48-bucket Duplicate table, triple-replica writing: throughput increased by 100%"}),"\n",(0,i.jsx)(t.li,{children:"Stream Load, TPC-H 144G lineitem table, 48-bucket Unique Key table, triple-replica writing: throughput increased by 200%"}),"\n",(0,i.jsx)(t.li,{children:"Insert Into Select, TPC-H 144G lineitem table, 48-bucket Duplicate table: throughput increased by 50%"}),"\n",(0,i.jsx)(t.li,{children:"Insert Into Select, TPC-H 144G lineitem table, 48-bucket Unique Key table: throughput increased by 150%"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"greater-stability-in-high-concurrency-data-writing",children:"Greater stability in high-concurrency data writing"}),"\n",(0,i.jsxs)(t.p,{children:["The sources of system instability often includes small file merging, write amplification, and the consequential disk I/O and CPU overheads. Hence, we introduced Vertical Compaction and Segment Compaction in version 2.0.0 to eliminate OOM errors in compaction and avoid the generation of too many segment files during data writing. After such improvements, Apache Doris can write data 50% faster while ",(0,i.jsx)(t.strong,{children:"using only 10% of the memory that it previously used"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Read more: ",(0,i.jsx)(t.a,{href:"https://doris.apache.org/blog/Understanding-Data-Compaction-in-3-Minutes/",children:"https://doris.apache.org/blog/Understanding-Data-Compaction-in-3-Minutes/"})]}),"\n",(0,i.jsx)(t.h3,{id:"auto-synchronization-of-table-schema",children:"Auto-synchronization of table schema"}),"\n",(0,i.jsx)(t.p,{children:"The latest Flink-Doris-Connector allows users to synchronize an entire database (such as MySQL and Oracle) to Apache Doris by one simple step. According to our test results, one single synchronization task can support the real-time concurrent writing of thousands of tables. Users no longer need to go through a complicated synchronization procedure because Apache Doris has automated the process. Changes in the upstream data schema will be automatically captured and dynamically updated to Apache Doris in a seamless manner."}),"\n",(0,i.jsxs)(t.p,{children:["Read more: ",(0,i.jsx)(t.a,{href:"https://doris.apache.org/blog/Auto-Synchronization-of-an-Entire-MySQL-Database-for-Data-Analysis",children:"https://doris.apache.org/blog/Auto-Synchronization-of-an-Entire-MySQL-Database-for-Data-Analysis"})]}),"\n",(0,i.jsx)(t.h2,{id:"a-new-multi-tenant-resource-isolation-solution",children:"A New Multi-Tenant Resource Isolation Solution"}),"\n",(0,i.jsx)(t.p,{children:"The purpose of multi-tenant resource isolation is to avoid resource preemption in the case of heavy loads. For that sake, older versions of Apache Doris adopted a hard isolation plan featured by Resource Group: Backend nodes of the same Doris cluster would be tagged, and those of the same tag formed a Resource Group. As data was ingested into the database, different data replicas would be written into different Resource Groups, which will be responsible for different workloads. For example, data reading and writing will be conducted on different data tablets, so as to realize read-write separation. Similarly, you can also put online and offline business on different Resource Groups."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"resource-isolation",src:n(292041).Z+"",width:"1823",height:"977"})}),"\n",(0,i.jsx)(t.p,{children:"This is an effective solution, but in practice, it happens that some Resource Groups are heavily occupied while others are idle. We want a more flexible way to reduce vacancy rate of resources. Thus, in 2.0.0, we introduce Workload Group resource soft limit."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"workload-group",src:n(780553).Z+"",width:"1166",height:"362"})}),"\n",(0,i.jsx)(t.p,{children:"The idea is to divide workloads into groups to allow for flexible management of CPU and memory resources. Apache Doris associates a query with a Workload Group, and limits the percentage of CPU and memory that a single query can use on a backend node. The memory soft limit can be configured and enabled by the user."}),"\n",(0,i.jsx)(t.p,{children:"When there is a cluster resource shortage, the system will kill the largest memory-consuming query tasks; when there are sufficient cluster resources, once a Workload Group uses more resources than expected, the idle cluster resources will be shared among all the Workload Groups to give full play to the system memory and ensure stable execution of queries. You can also prioritize the Workload Groups in terms of resource allocation. In other words, you can decide which tasks can be assigned with adequate resources and which not."}),"\n",(0,i.jsx)(t.p,{children:"Meanwhile, we introduced Query Queue in 2.0.0. Upon Workload Group creation, you can set a maximum query number for a query queue. Queries beyond that limit will wait for execution in the queue. This is to reduce system burden under heavy workloads."}),"\n",(0,i.jsx)(t.h2,{id:"elastic-scaling-and-storage-compute-separation",children:"Elastic Scaling and Storage-Compute Separation"}),"\n",(0,i.jsx)(t.p,{children:"When it comes to computation and storage resources, what do users want?"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Elastic scaling of computation resources"}),": Scale up resources quickly in peak times to increase efficiency and scale down in valley times to reduce costs."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Lower storage costs"}),": Use low-cost storage media and separate storage from computation."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Separation of workloads"}),": Isolate the computation resources of different workloads to avoid preemption."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Unified management of data"}),": Simply manage catalogs and data in one place."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"To separate storage and computation is a way to realize elastic scaling of resources, but it demands more efforts in maintaining storage stability, which determines the stability and continuity of OLAP services. To ensure storage stability, we introduced mechanisms including cache management, computation resource management, and garbage collection."}),"\n",(0,i.jsx)(t.p,{children:"In this respect, we divide our users into three groups after investigation:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Users with no need for resource scaling"}),"\n",(0,i.jsx)(t.li,{children:"Users requiring resource scaling, low storage costs, and workload separation from Apache Doris"}),"\n",(0,i.jsx)(t.li,{children:"Users who already have a stable large-scale storage system and thus require an advanced compute-storage-separated architecture for efficient resource scaling"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Apache Doris 2.0 provides two solutions to address the needs of the first two types of users."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Compute nodes"}),". We introduced stateless compute nodes in version 2.0. Unlike the mix nodes, the compute nodes do not save any data and are not involved in workload balancing of data tablets during cluster scaling. Thus, they are able to quickly join the cluster and share the computing pressure during peak times. In addition, in data lakehouse analysis, these nodes will be the first ones to execute queries on remote storage (HDFS/S3) so there will be no resource competition between internal tables and external tables.\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://doris.apache.org/docs/2.0/admin-manual/resource-admin/compute-node/",children:"Read more in Docs"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Hot-cold data separation"}),". Hot/cold data refers to data that is frequently/seldom accessed, respectively. Generally, it makes more sense to store cold data in low-cost storage. Older versions of Apache Doris support lifecycle management of table partitions: As hot data cooled down, it would be moved from SSD to HDD. However, data was stored with multiple replicas on HDD, which was still a waste. Now, in Apache Doris 2.0, cold data can be stored in object storage, which is even cheaper and allows single-copy storage. That reduces the storage costs by 70% and cuts down the computation and network overheads that come with storage.\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://doris.apache.org/blog/Tiered-Storage-for-Hot-and-Cold-Data-What-Why-and-How",children:"Read more in Docs"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For neater separate of computation and storage, the VeloDB team is going to contribute the Cloud Compute-Storage-Separation solution to the Apache Doris project. The performance and stability of it has stood the test of hundreds of companies in their production environment. The merging of code will be finished by October this year, and all Apache Doris users will be able to get an early taste of it in September."}),"\n",(0,i.jsx)(t.h2,{id:"enhanced-usability",children:"Enhanced Usability"}),"\n",(0,i.jsx)(t.p,{children:"Apache Doris 2.0.0 also highlights some enterprise-facing functionalities."}),"\n",(0,i.jsx)(t.h3,{id:"support-for-kubernetes-deployment",children:"Support for Kubernetes Deployment"}),"\n",(0,i.jsx)(t.p,{children:"Older versions of Apache Doris communicate based on IP, so any host failure in Kubernetes deployment that causes a POD IP drift will lead to cluster unavailability. Now, version 2.0 supports FQDN. That means the failed Doris nodes can recover automatically without human intervention, which lays the foundation for Kubernetes deployment and elastic scaling."}),"\n",(0,i.jsx)(t.h3,{id:"support-for-cross-cluster-replication-ccr",children:"Support for Cross-Cluster Replication (CCR)"}),"\n",(0,i.jsx)(t.p,{children:"Apache Doris 2.0.0 supports cross-cluster replication (CCR). Data changes at the database/table level in the source cluster will be synchronized to the target cluster. You can choose to replicate the incremental data or the overall data."}),"\n",(0,i.jsx)(t.p,{children:"It also supports synchronization of DDL, which means DDL statements executed by the source cluster can also by automatically replicated to the target cluster."}),"\n",(0,i.jsx)(t.p,{children:"It is simple to configure and use CCR in Doris. Leveraging this functionality, you can implement read-write separation and multi-datacenter replication"}),"\n",(0,i.jsx)(t.p,{children:"This feature allows for higher availability of data, read/write workload separation, and cross-data-center replication more efficiently."}),"\n",(0,i.jsx)(t.h2,{id:"behavior-change",children:"Behavior Change"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Use rolling upgrade from 1.2-ITS to 2.0.0, and restart upgrade from preview versions of 2.0 to 2.0.0;"}),"\n",(0,i.jsxs)(t.li,{children:["The new query optimizer (Nereids) is enabled by default: ",(0,i.jsx)(t.code,{children:"enable_nereids_planner=true"}),";"]}),"\n",(0,i.jsxs)(t.li,{children:["All non-vectorized code has been removed from the system, so the ",(0,i.jsx)(t.code,{children:"enable_vectorized_engine"})," parameter no long works;"]}),"\n",(0,i.jsxs)(t.li,{children:["A new parameter ",(0,i.jsx)(t.code,{children:"enable_single_replica_compaction"})," has been added;"]}),"\n",(0,i.jsx)(t.li,{children:"datev2, datetimev2, and decimalv3 are the default data types in table creation; datav1, datetimev1, and decimalv2 are not supported in table creation;"}),"\n",(0,i.jsx)(t.li,{children:"decimalv3 is the default data type for JDBC and Iceberg Catalog;"}),"\n",(0,i.jsxs)(t.li,{children:["A new data type ",(0,i.jsx)(t.code,{children:"AGG_STATE"})," has been added;"]}),"\n",(0,i.jsx)(t.li,{children:"The cluster column has been removed from backend tables;"}),"\n",(0,i.jsxs)(t.li,{children:["For better compatibility with BI tools, datev2 and datetimev2 are displayed as date and datetime when ",(0,i.jsx)(t.code,{children:"show create table"}),";"]}),"\n",(0,i.jsx)(t.li,{children:"max_openfiles and swaps checks are added to the backend startup script so inappropriate system configuration might lead to backend failure;"}),"\n",(0,i.jsx)(t.li,{children:"Password-free login is not allowed when accessing frontend on localhost;"}),"\n",(0,i.jsx)(t.li,{children:"If there is a Multi-Catalog in the system, by default, only data of the internal catalog will be displayed when querying information schema;"}),"\n",(0,i.jsx)(t.li,{children:"A limit has been imposed on the depth of the expression tree. The default value is 200;"}),"\n",(0,i.jsx)(t.li,{children:"The single quote in the return value of array string has been changed to double quote;"}),"\n",(0,i.jsx)(t.li,{children:"The Doris processes are renamed to DorisFE and DorisBE."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"embarking-on-the-200-journey",children:"Embarking on the 2.0.0 Journey"}),"\n",(0,i.jsx)(t.p,{children:"To make Apache Doris 2.0.0 production-ready, we invited hundreds of enterprise users to engage in the testing and optimized it for better performance, stability, and usability. In the next phase, we will continue responding to user needs with agile release planning. We plan to launch 2.0.1 in late August and 2.0.2 in September, as we keep fixing bugs and adding new features. We also plan to release an early version of 2.1 in September to bring a few long-requested capabilities to you. For example, in Doris 2.1, the Variant data type will better serve the schema-free analytic needs of semi-structured data; the multi-table materialized views will be able to simplify the data scheduling and processing link while speeding up queries; more and neater data ingestion methods will be added and nested composite data types will be realized."}),"\n",(0,i.jsxs)(t.p,{children:["If you have any questions or ideas when investigating, testing, and deploying Apache Doris, please find us on ",(0,i.jsx)(t.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Slack"}),". Our developers will be happy to hear them and provide targeted support."]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},498041:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-1-876d7d5b2307bad4190500815eca710a.png"},340667:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-2-01156d489e9907a7bc6c424d0bcd41c9.png"},148738:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-3-9abcfa6e282014f53bb04009b1d2623d.png"},980474:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-4-1e3ed90c197a9f3a5e853cb854f8f56e.png"},284844:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-5-f438663781fa9c4da57e1b08cd360d7a.png"},132007:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-6-e12c23ddbbd23aa017fe3cecf1847f48.png"},292041:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-7-55f4a01b41924f345f92ce1f8315dca9.png"},780553:function(e,t,n){n.d(t,{Z:function(){return a}});let a=n.p+"assets/images/release-note-2.0.0-8-786bcb555e7791f51a591291ed105021.png"},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return s}});var a=n(667294);let i={},r=a.createContext(i);function s(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}},255362:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/release-note-2.0.0","source":"@site/blog/release-note-2.0.0.md","title":"New milestone: Apache Doris 2.0.0 just released","description":"Dear community, we are excited to announce that Apache Doris 2.0.0 is now production-ready on August 16, 2023","date":"2023-08-16T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/zh-CN/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"New milestone: Apache Doris 2.0.0 just released","description":"Dear community, we are excited to announce that Apache Doris 2.0.0 is now production-ready on August 16, 2023","date":"2023-08-16","author":"Apache Doris","tags":["Release Notes"],"image":"/images/2.0.0.png"},"unlisted":false,"prevItem":{"title":"Auto synchronization of an entire MySQL database for data analysis","permalink":"/zh-CN/blog/Auto-Synchronization-of-an-Entire-MySQL-Database-for-Data-Analysis"},"nextItem":{"title":"Database in fintech: how to support 10,000 dashboards without causing a mess","permalink":"/zh-CN/blog/Database-in-Fintech-How-to-Support-ten-thousand-Dashboards-Without-Causing-a-Mess"}}')}}]);