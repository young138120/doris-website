"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["233905"],{694470:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"table-design/data-partitioning/dynamic-partitioning","title":"Dynamic partitioning","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/table-design/data-partitioning/dynamic-partitioning.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/dynamic-partitioning","permalink":"/docs/3.0/table-design/data-partitioning/dynamic-partitioning","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Dynamic partitioning","language":"en"},"sidebar":"docs","previous":{"title":"Manual partitioning","permalink":"/docs/3.0/table-design/data-partitioning/manual-partitioning"},"next":{"title":"Auto Partition","permalink":"/docs/3.0/table-design/data-partitioning/auto-partitioning"}}'),r=n("785893"),a=n("250065");let s={title:"Dynamic partitioning",language:"en"},o=void 0,d={},c=[{value:"How to use",id:"how-to-use",level:2},{value:"Rule parameters",id:"rule-parameters",level:2},{value:"Create history partition rules",id:"create-history-partition-rules",level:2},{value:"Example",id:"example",level:2},{value:"Principle and control behavior",id:"principle-and-control-behavior",level:2},{value:"Modify properties",id:"modify-properties",level:2},{value:"Check table scheduling status",id:"check-table-scheduling-status",level:2},{value:"Advanced operations",id:"advanced-operations",level:2}];function l(e){let i={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"Dynamic partitioning is designed to manage the lifecycle of partitions, reducing the burden on users."}),"\n",(0,r.jsxs)(i.p,{children:["Dynamic partitioning only supports RANGE partitioning based on ",(0,r.jsx)(i.code,{children:"DATE"})," or ",(0,r.jsx)(i.code,{children:"DATETIME"})," columns. It is applicable for cases where time data in partition columns grows synchronously with the real world. In such scenarios, data can be partitioned flexibly based on time data, and can be automatically stored with the cold-hot tiering strategy or recycled according to settings."]}),"\n",(0,r.jsxs)(i.p,{children:["For partitioning method that can be more widely applicable, see ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/table-design/data-partitioning/auto-partitioning",children:"Auto partitioning"}),"."]}),"\n",(0,r.jsx)(i.admonition,{title:"Warning",type:"caution",children:(0,r.jsxs)(i.p,{children:["This feature will be disabled when synchronized by CCR. If this table is copied by CCR, that is, PROPERTIES contains ",(0,r.jsx)(i.code,{children:"is_being_synced = true"}),", it will be displayed as enabled in show create table, but will not actually take effect. When ",(0,r.jsx)(i.code,{children:"is_being_synced"})," is set to ",(0,r.jsx)(i.code,{children:"false"}),", these features will resume working, but the ",(0,r.jsx)(i.code,{children:"is_being_synced"})," property is for CCR peripheral modules only and should not be manually set during CCR synchronization."]})}),"\n",(0,r.jsx)(i.h2,{id:"how-to-use",children:"How to use"}),"\n",(0,r.jsx)(i.p,{children:"The rules for dynamic partitioning can be specified when the table is created or modified at runtime."}),"\n",(0,r.jsx)(i.p,{children:"Currently, dynamic partition rules can only be set for partition tables with single partition columns."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Specified when creating table"}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE tbl1\n(...)\nPROPERTIES\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n'})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Modify at runtime"}),"\n"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    "dynamic_partition.prop2" = "value2",\n    ...\n)\n'})}),"\n",(0,r.jsx)(i.h2,{id:"rule-parameters",children:"Rule parameters"}),"\n",(0,r.jsxs)(i.p,{children:["The rules of dynamic partition are prefixed with ",(0,r.jsx)(i.code,{children:"dynamic_partition."}),":"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.enable"})}),"\n",(0,r.jsxs)(i.p,{children:["Whether to enable the dynamic partition feature. Can be specified as ",(0,r.jsx)(i.code,{children:"TRUE"})," or",(0,r.jsx)(i.code,{children:" FALSE"}),". If not filled, the default is ",(0,r.jsx)(i.code,{children:"TRUE"}),". If it is ",(0,r.jsx)(i.code,{children:"FALSE"}),", Doris will ignore the dynamic partitioning rules of the table."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"dynamic_partition.time_unit"}),"(required parameters)"]}),"\n",(0,r.jsxs)(i.p,{children:["The unit for dynamic partition scheduling. Can be specified as ",(0,r.jsx)(i.code,{children:"HOUR"}),",",(0,r.jsx)(i.code,{children:"DAY"}),",",(0,r.jsx)(i.code,{children:" WEEK"}),", ",(0,r.jsx)(i.code,{children:"MONTH"})," and ",(0,r.jsx)(i.code,{children:"YEAR"}),", means to create or delete partitions by hour, day, week, month and year, respectively."]}),"\n",(0,r.jsxs)(i.p,{children:["When specified as ",(0,r.jsx)(i.code,{children:"HOUR"}),", the suffix format of the dynamically created partition name is ",(0,r.jsx)(i.code,{children:"yyyyMMddHH"}),", for example, ",(0,r.jsx)(i.code,{children:"2020032501"}),". ",(0,r.jsx)(i.em,{children:"When the time unit is HOUR, the data type of partition column cannot be DATE."})]}),"\n",(0,r.jsxs)(i.p,{children:["When specified as ",(0,r.jsx)(i.code,{children:"DAY"}),", the suffix format of the dynamically created partition name is ",(0,r.jsx)(i.code,{children:"yyyyMMdd"}),", for example, ",(0,r.jsx)(i.code,{children:"20200325"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["When specified as ",(0,r.jsx)(i.code,{children:"WEEK"}),", the suffix format of the dynamically created partition name is ",(0,r.jsx)(i.code,{children:"yyyy_ww"}),". That is, the week of the year of current date. For example, the suffix of the partition created for ",(0,r.jsx)(i.code,{children:"2020-03-25"})," is ",(0,r.jsx)(i.code,{children:"2020_13"}),", indicating that it is currently the 13th week of 2020."]}),"\n",(0,r.jsxs)(i.p,{children:["When specified as ",(0,r.jsx)(i.code,{children:"MONTH"}),", the suffix format of the dynamically created partition name is ",(0,r.jsx)(i.code,{children:"yyyyMM"}),", for example, ",(0,r.jsx)(i.code,{children:"202003"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["When specified as ",(0,r.jsx)(i.code,{children:"YEAR"}),", the suffix format of the dynamically created partition name is ",(0,r.jsx)(i.code,{children:"yyyy"}),", for example, ",(0,r.jsx)(i.code,{children:"2020"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.time_zone"})}),"\n",(0,r.jsxs)(i.p,{children:["The time zone of the dynamic partition, if not filled in, defaults to the time zone of the current machine's system, such as ",(0,r.jsx)(i.code,{children:"Asia/Shanghai"}),", if you want to know the supported TimeZone, you can found in ",(0,r.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",children:"Timezone"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.start"})}),"\n",(0,r.jsxs)(i.p,{children:["The starting offset of the dynamic partition, usually a negative number. Depending on the ",(0,r.jsx)(i.code,{children:"time_unit"})," attribute, based on the current day (week / month), the partitions with a partition range before this offset will be deleted. If not filled, the default is ",(0,r.jsx)(i.code,{children:"-2147483648"}),", that is, the history partition will not be  deleted."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsx)(i.p,{children:"Note that if the user sets history_partition_num (> 0), the starting partition for creating dynamic partitions will use max(start, -history_partition_num), and when deleting historical partitions, the range up to start will still be retained, where start < 0."})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"dynamic_partition.end"}),"(required parameters)"]}),"\n",(0,r.jsxs)(i.p,{children:["The end offset of the dynamic partition, usually a positive number. According to the difference of the ",(0,r.jsx)(i.code,{children:"time_unit"})," attribute, the partition of the corresponding range is created in advance based on the current day (week / month)."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"dynamic_partition.prefix"}),"(required parameters)"]}),"\n",(0,r.jsx)(i.p,{children:"The dynamically created partition name prefix."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.buckets"})}),"\n",(0,r.jsx)(i.p,{children:"The number of buckets corresponding to the dynamically created partitions."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.replication_num"})}),"\n",(0,r.jsx)(i.p,{children:"The replication number of dynamic partition.If not filled in, defaults to the number of table's replication number."}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.start_day_of_week"})}),"\n",(0,r.jsxs)(i.p,{children:["When ",(0,r.jsx)(i.code,{children:"time_unit"})," is",(0,r.jsx)(i.code,{children:" WEEK"}),", this parameter is used to specify the starting point of the week. The value ranges from 1 to 7. Where 1 is Monday and 7 is Sunday. The default is 1, which means that every week starts on Monday."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.start_day_of_month"})}),"\n",(0,r.jsxs)(i.p,{children:["When ",(0,r.jsx)(i.code,{children:"time_unit"})," is",(0,r.jsx)(i.code,{children:" MONTH"}),", this parameter is used to specify the start date of each month. The value ranges from 1 to 28. 1 means the 1st of every month, and 28 means the 28th of every month. The default is 1, which means that every month starts at 1st. The 29, 30 and 31 are not supported at the moment to avoid ambiguity caused by lunar years or months."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Doris supports multi-level storage with SSD and HDD tiers. For more details, please refer to ",(0,r.jsx)(i.a,{href:"/docs/3.0/table-design/tiered-storage/diff-disk-medium-migration",children:"tiered-storage"})]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.create_history_partition"})}),"\n",(0,r.jsxs)(i.p,{children:["The default is false. When set to true, Doris will automatically create all partitions, as described in the creation rules below. At the same time, the parameter ",(0,r.jsx)(i.code,{children:"max_dynamic_partition_num"})," of FE will limit the total number of partitions to avoid creating too many partitions at once. When the number of partitions expected to be created is greater than ",(0,r.jsx)(i.code,{children:"max_dynamic_partition_num"}),", the operation will fail."]}),"\n",(0,r.jsxs)(i.p,{children:["When the ",(0,r.jsx)(i.code,{children:"start"})," attribute is not specified, this parameter has no effect."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.history_partition_num"})}),"\n",(0,r.jsxs)(i.p,{children:["When ",(0,r.jsx)(i.code,{children:"create_history_partition"})," is ",(0,r.jsx)(i.code,{children:"true"}),", this parameter is used to specify the number of history partitions. The default value is -1, which means it is not set."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic_partition.reserved_history_periods"})}),"\n",(0,r.jsxs)(i.p,{children:["The range of reserved history periods. It should be in the form of ",(0,r.jsx)(i.code,{children:"[yyyy-MM-dd,yyyy-MM-dd],[...,...]"})," while the ",(0,r.jsx)(i.code,{children:"dynamic_partition.time_unit"}),' is "DAY, WEEK, MONTH and YEAR". And it should be in the form of ',(0,r.jsx)(i.code,{children:"[yyyy-MM-dd HH:mm:ss,yyyy-MM-dd HH:mm:ss],[...,...]"})," while the dynamic_partition.time_unit",(0,r.jsx)(i.code,{children:'is "HOUR". And no more spaces expected. The default value is'}),'"NULL"`, which means it is not set.']}),"\n",(0,r.jsx)(i.p,{children:"Let us give an example. Suppose today is 2021-09-06, partitioned by day, and the properties of dynamic partition are set to:"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:'time_unit="DAY/WEEK/MONTH/YEAR", end=3, start=-3, reserved_history_periods="[2020-06-01,2020-06-20],[2020-10-31,2020-11-15]"'}),"."]}),"\n",(0,r.jsx)(i.p,{children:"The system will automatically reserve following partitions in following period :"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'["2020-06-01","2020-06-20"],\n["2020-10-31","2020-11-15"]\n'})}),"\n",(0,r.jsx)(i.p,{children:"or"}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:'time_unit="HOUR", end=3, start=-3, reserved_history_periods="[2020-06-01 00:00:00,2020-06-01 03:00:00]"'}),"."]}),"\n",(0,r.jsx)(i.p,{children:"The system will automatically reserve following partitions in following period :"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'["2020-06-01 00:00:00","2020-06-01 03:00:00"]\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Otherwise, every ",(0,r.jsx)(i.code,{children:"[...,...]"})," in ",(0,r.jsx)(i.code,{children:"reserved_history_periods"})," is a couple of properties, and they should be set at the same time. And the first date can't be larger than the second one."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"create-history-partition-rules",children:"Create history partition rules"}),"\n",(0,r.jsxs)(i.p,{children:["When ",(0,r.jsx)(i.code,{children:"create_history_partition"})," is ",(0,r.jsx)(i.code,{children:"true"}),", i.e. history partition creation is enabled, Doris determines the number of history partitions to be created based on ",(0,r.jsx)(i.code,{children:"dynamic_partition.start"})," and ",(0,r.jsx)(i.code,{children:"dynamic_partition.history_partition_num"}),"."]}),"\n",(0,r.jsxs)(i.p,{children:["Assuming the number of history partitions to be created is ",(0,r.jsx)(i.code,{children:"expect_create_partition_num"}),", the number is as follows according to different settings."]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"create_history_partition"})," = ",(0,r.jsx)(i.code,{children:"true"})]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"dynamic_partition.history_partition_num"})," is not set, i.e. -1.",(0,r.jsx)(i.br,{}),"\n",(0,r.jsx)(i.code,{children:"expect_create_partition_num"})," = ",(0,r.jsx)(i.code,{children:"end"})," - ",(0,r.jsx)(i.code,{children:"start"}),";"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"dynamic_partition.history_partition_num"})," is set",(0,r.jsx)(i.br,{}),"\n",(0,r.jsx)(i.code,{children:"expect_create_partition_num"})," = ",(0,r.jsx)(i.code,{children:"end"})," - max(",(0,r.jsx)(i.code,{children:"start"}),", ",(0,r.jsx)(i.code,{children:"-history_partition_num"}),");"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"create_history_partition"})," = ",(0,r.jsx)(i.code,{children:"false"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["No history partition will be created, ",(0,r.jsx)(i.code,{children:"expect_create_partition_num"})," = ",(0,r.jsx)(i.code,{children:"end"})," - 0;"]}),"\n",(0,r.jsxs)(i.p,{children:["When ",(0,r.jsx)(i.code,{children:"expect_create_partition_num"})," is greater than ",(0,r.jsx)(i.code,{children:"max_dynamic_partition_num"})," (default 500), creating too many partitions is prohibited."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Examples:"})}),"\n",(0,r.jsxs)(i.p,{children:["Suppose today is 2021-05-20, partition by day, and the attributes of dynamic partition are set to ",(0,r.jsx)(i.code,{children:"create_history_partition=true, end=3, start=-3, history_partition_num=1"}),", then the system will automatically create the following partitions."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"p20210519\np20210520\np20210521\np20210522\np20210523\n"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"history_partition_num=5"})," and keep the rest attributes as in 1, then the system will automatically create the following partitions."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n"})}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.code,{children:"history_partition_num=-1"})," i.e., if you do not set the number of history partitions and keep the rest of the attributes as in 1, the system will automatically create the following partitions."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:"p20210517\np20210518\np20210519\np20210520\np20210521\np20210522\np20210523\n"})}),"\n",(0,r.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["Table ",(0,r.jsx)(i.code,{children:"tbl1"})," partition column k1, type is DATE, create a dynamic partition rule. By day partition, only the partitions of the last 7 days are kept, and the partitions of the next 3 days are created in advance."]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-7",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "32"\n);\n'})}),"\n",(0,r.jsx)(i.p,{children:"Suppose the current date is 2020-05-29. According to the above rules, tbl1 will produce the following partitions:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'p20200529: ["2020-05-29", "2020-05-30")\np20200530: ["2020-05-30", "2020-05-31")\np20200531: ["2020-05-31", "2020-06-01")\np20200601: ["2020-06-01", "2020-06-02")\n'})}),"\n",(0,r.jsxs)(i.p,{children:["On the next day, 2020-05-30, a new partition will be created ",(0,r.jsx)(i.code,{children:'p20200602: [" 2020-06-02 "," 2020-06-03 ")'})]}),"\n",(0,r.jsxs)(i.p,{children:["On 2020-06-06, because ",(0,r.jsx)(i.code,{children:"dynamic_partition.start"})," is set to 7, the partition 7 days ago will be deleted, that is, the partition ",(0,r.jsx)(i.code,{children:"p20200529"})," will be deleted."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Table tbl1 partition column k1, type is DATETIME, create a dynamic partition rule. Partition by week, only keep the partition of the last 2 weeks, and create the partition of the next 2 weeks in advance."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE tbl1\n(\n    k1 DATETIME,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "WEEK",\n    "dynamic_partition.start" = "-2",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8"\n);\n'})}),"\n",(0,r.jsx)(i.p,{children:"Suppose the current date is 2020-05-29, which is the 22nd week of 2020. The default week starts on Monday. Based on the above rules, tbl1 will produce the following partitions:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'p2020_22: ["2020-05-25 00:00:00", "2020-06-01 00:00:00")\np2020_23: ["2020-06-01 00:00:00", "2020-06-08 00:00:00")\np2020_24: ["2020-06-08 00:00:00", "2020-06-15 00:00:00")\n'})}),"\n",(0,r.jsx)(i.p,{children:"The start date of each partition is Monday of the week. At the same time, because the type of the partition column k1 is DATETIME, the partition value will fill the hour, minute and second fields, and all are 0."}),"\n",(0,r.jsxs)(i.p,{children:["On 2020-06-15, the 25th week, the partition 2 weeks ago will be deleted, ie ",(0,r.jsx)(i.code,{children:"p2020_22"})," will be deleted."]}),"\n",(0,r.jsxs)(i.p,{children:["In the above example, suppose the user specified the start day of the week as ",(0,r.jsx)(i.code,{children:'"dynamic_partition.start_day_of_week" = "3"'}),", that is, set Wednesday as the start of week. The partition is as follows:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'p2020_22: ["2020-05-27 00:00:00", "2020-06-03 00:00:00")\np2020_23: ["2020-06-03 00:00:00", "2020-06-10 00:00:00")\np2020_24: ["2020-06-10 00:00:00", "2020-06-17 00:00:00")\n'})}),"\n",(0,r.jsx)(i.p,{children:"That is, the partition ranges from Wednesday of the current week to Tuesday of the next week."}),"\n",(0,r.jsx)(i.admonition,{type:"tip",children:(0,r.jsxs)(i.p,{children:["2019-12-31 and 2020-01-01 are in same week, if the starting date of the partition is 2019-12-31, the partition name is ",(0,r.jsx)(i.code,{children:"p2019_53"}),", if the starting date of the partition is 2020-01 -01, the partition name is ",(0,r.jsx)(i.code,{children:"p2020_01"}),"."]})}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"Table tbl1 partition column k1, type is DATE, create a dynamic partition rule. Partition by month without deleting historical partitions, and create partitions for the next 2 months in advance. At the same time, set the starting date on the 3rd of each month."}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE tbl1\n(\n    k1 DATE,\n    ...\n)\nPARTITION BY RANGE(k1) ()\nDISTRIBUTED BY HASH(k1)\nPROPERTIES\n(\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.time_unit" = "MONTH",\n    "dynamic_partition.end" = "2",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "8",\n    "dynamic_partition.start_day_of_month" = "3"\n);\n'})}),"\n",(0,r.jsx)(i.p,{children:"Suppose the current date is 2020-05-29. Based on the above rules, tbl1 will produce the following partitions:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'p202005: ["2020-05-03", "2020-06-03")\np202006: ["2020-06-03", "2020-07-03")\np202007: ["2020-07-03", "2020-08-03")\n'})}),"\n",(0,r.jsxs)(i.p,{children:["Because ",(0,r.jsx)(i.code,{children:"dynamic_partition.start"})," is not set, the historical partition will not be deleted."]}),"\n",(0,r.jsx)(i.p,{children:"Assuming that today is 2020-05-20, and set 28th as the start of each month, the partition range is:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'p202004: ["2020-04-28", "2020-05-28")\np202005: ["2020-05-28", "2020-06-28")\np202006: ["2020-06-28", "2020-07-28")\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"principle-and-control-behavior",children:"Principle and control behavior"}),"\n",(0,r.jsxs)(i.p,{children:["Apache Doris sets a fixed FE control thread that continuously checks the table based on dynamic partitioning at specific time intervals (specified by the ",(0,r.jsx)(i.code,{children:"dynamic_partition_check_interval_seconds"})," field) to perform the necessary partition creation and deletion operations."]}),"\n",(0,r.jsxs)(i.p,{children:["Specifically, when dynamic partitioning is executed, the following checks and operations are performed (refer to the start time of the partition as ",(0,r.jsx)(i.code,{children:"START"})," and the end time as ",(0,r.jsx)(i.code,{children:"END"}),", and omit ",(0,r.jsx)(i.code,{children:"dynamic_partition."}),"):"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["All partitions before ",(0,r.jsx)(i.code,{children:"START"})," are deleted."]}),"\n",(0,r.jsxs)(i.li,{children:["If ",(0,r.jsx)(i.code,{children:"create_history_partition"})," is ",(0,r.jsx)(i.code,{children:"false"}),", create all partitions between the current time and ",(0,r.jsx)(i.code,{children:"END"}),"; if ",(0,r.jsx)(i.code,{children:"create_history_partition"})," is ",(0,r.jsx)(i.code,{children:"true"}),", not only all partitions between the current time and ",(0,r.jsx)(i.code,{children:"END"})," are created, but also all partitions between ",(0,r.jsx)(i.code,{children:"START"})," and current time are created. If ",(0,r.jsx)(i.code,{children:"history_partition_num"})," is specified, the number of created partitions before current time cannot exceed the value of ",(0,r.jsx)(i.code,{children:"history_partition_num"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Note that:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["If the partition time range intersects with the ",(0,r.jsx)(i.code,{children:"[START, END]"})," range, it is considered to belong to the current dynamic partition time range."]}),"\n",(0,r.jsx)(i.li,{children:"If the newly created partition conflicts with an existing partition, the current partition is retained, and the new partition is not created. If the conflict occurs when the table is created, DDL will occur an error."}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"Therefore, after the automatic maintenance of the partition table, the state presented is as follows:"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"No partitions are included"})," before the ",(0,r.jsx)(i.code,{children:"START"})," time except for those specified in ",(0,r.jsx)(i.code,{children:"reserved_history_periods"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"All manually created partitions"})," after the ",(0,r.jsx)(i.code,{children:"END"})," time are retained."]}),"\n",(0,r.jsxs)(i.li,{children:["Apart from manually deleted or accidentally lost partitions, the table contains all partitions within a specific range:\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["If ",(0,r.jsx)(i.code,{children:"create_history_partition"})," is ",(0,r.jsx)(i.code,{children:"true"}),",\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["if ",(0,r.jsx)(i.code,{children:"history_partition_num"})," is specified, the specific range is ",(0,r.jsx)(i.code,{children:"[max(START, current time) - history_partition_num * time_unit), END]"}),";"]}),"\n",(0,r.jsxs)(i.li,{children:["if ",(0,r.jsx)(i.code,{children:"history_partition_num"})," is not specified, the specific range is ",(0,r.jsx)(i.code,{children:"[START, END]"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["If ",(0,r.jsx)(i.code,{children:"dynamic_partition.create_history_partition"})," is ",(0,r.jsx)(i.code,{children:"false"}),", the specific range is ",(0,r.jsx)(i.code,{children:"[current time, END]"}),", also including existing partitions in ",(0,r.jsx)(i.code,{children:"[START, current time)"}),".\nThe entire specific range is divided into multiple partition ranges based on ",(0,r.jsx)(i.code,{children:"time_unit"}),". If a range intersects with an existing partition ",(0,r.jsx)(i.code,{children:"X"}),", ",(0,r.jsx)(i.code,{children:"X"})," is preserved; otherwise, the range will be completely covered by a partition created by dynamic partition."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Unless the number of partitions is about to exceed ",(0,r.jsx)(i.code,{children:"max_dynamic_partition_num"}),", the creation will fail."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"modify-properties",children:"Modify properties"}),"\n",(0,r.jsx)(i.p,{children:"You can modify the properties of the dynamic partitioning with the following command:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'ALTER TABLE tbl1 SET\n(\n    "dynamic_partition.prop1" = "value1",\n    ...\n);\n'})}),"\n",(0,r.jsx)(i.p,{children:"The modification of certain attributes may cause conflicts. Assume that the partition granularity was DAY and the following partitions have been created:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{children:'p20200519: ["2020-05-19", "2020-05-20")\np20200520: ["2020-05-20", "2020-05-21")\np20200521: ["2020-05-21", "2020-05-22")\n'})}),"\n",(0,r.jsxs)(i.p,{children:["If the partition granularity is changed to MONTH at this time, the system will try to create a partition with the range ",(0,r.jsx)(i.code,{children:'["2020-05-01", "2020-06-01")'}),", and this range conflicts with the existing partition. So it cannot be created. And the partition with the range ",(0,r.jsx)(i.code,{children:'["2020-06-01", "2020-07-01")'})," can be created normally. Therefore, the partition between 2020-05-22 and 2020-05-30 needs to be filled manually."]}),"\n",(0,r.jsx)(i.h2,{id:"check-table-scheduling-status",children:"Check table scheduling status"}),"\n",(0,r.jsx)(i.p,{children:"You can further view the scheduling of dynamic partitioned tables by using the following command:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:"mysql> SHOW DYNAMIC PARTITION TABLES;\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| TableName | Enable | TimeUnit | Start       | End  | Prefix | Buckets | StartOf   | LastUpdateTime | LastSchedulerTime   | State  | LastCreatePartitionMsg | LastDropPartitionMsg | ReservedHistoryPeriods  |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n| d3        | true   | WEEK     | -3          | 3    | p      | 1       | MONDAY    | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | [2021-12-01,2021-12-31] |\n| d5        | true   | DAY      | -7          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d4        | true   | WEEK     | -3          | 3    | p      | 1       | WEDNESDAY | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d6        | true   | MONTH    | -2147483648 | 2    | p      | 8       | 3rd       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d2        | true   | DAY      | -3          | 3    | p      | 32      | N/A       | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n| d7        | true   | MONTH    | -2147483648 | 5    | p      | 8       | 24th      | N/A            | 2020-05-25 14:29:24 | NORMAL | N/A                    | N/A                  | NULL                    |\n+-----------+--------+----------+-------------+------+--------+---------+-----------+----------------+---------------------+--------+------------------------+----------------------+-------------------------+\n7 rows in set (0.02 sec)\n"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"LastUpdateTime"}),": The last time of modifying dynamic partition properties"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"LastSchedulerTime"}),": The last time of performing dynamic partition scheduling"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"State"}),": The state of the last execution of dynamic partition scheduling"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"LastCreatePartitionMsg"}),": Error message of the last time to dynamically add partition scheduling"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"LastDropPartitionMsg"}),": Error message of the last execution of dynamic deletion partition scheduling"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"advanced-operations",children:"Advanced operations"}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Modify FE configuration items"})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic\\_partition\\_enable"})}),"\n",(0,r.jsxs)(i.p,{children:["Whether to enable Doris's dynamic partition feature. The default value is ",(0,r.jsx)(i.code,{children:"false"}),", which is off. This parameter only affects the partitioning operation of dynamic partition tables, not normal tables. You can modify the parameters in ",(0,r.jsx)(i.code,{children:"fe.conf"})," and restart FE to take effect. You can also execute the following commands at runtime to take effect:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'MySQL protocol:\n\n`ADMIN SET FRONTEND CONFIG ("dynamic_partition_enable" = "true")`\n\nHTTP protocol:\n\n`curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_enable=true`\n'})}),"\n",(0,r.jsxs)(i.p,{children:["To turn off dynamic partitioning globally, set this parameter to ",(0,r.jsx)(i.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.code,{children:"dynamic\\_partition\\_check\\_interval\\_seconds"})}),"\n",(0,r.jsxs)(i.p,{children:["The execution frequency of dynamic partition threads defaults to 600 (10 minutes), that is, scheduling is performed every 10 minutes. You can modify the parameters in ",(0,r.jsx)(i.code,{children:"fe.conf"})," and restart FE to take effect. You can also modify the following commands at runtime:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-sql",children:'MySQL protocol:\n\n`ADMIN SET FRONTEND CONFIG ("dynamic_partition_check_interval_seconds" = "7200")`\n\nHTTP protocol:\n\n`curl --location-trusted -u username:password -XGET http://fe_host:fe_http_port/api/_set_config?dynamic_partition_check_interval_seconds=432000`\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Switching between dynamic partitioning and manual partitioning"})}),"\n",(0,r.jsx)(i.p,{children:"You can switch a table between dynamic and manual partitioning, but a table cannot be partitioned simultaneously by dynamic and manual partitioning."}),"\n",(0,r.jsxs)(i.p,{children:["By running the ",(0,r.jsx)(i.code,{children:'ALTER TABLE tbl_name SET ("dynamic_partition.enable" = "<true/false>")'})," command, you can turn on and off dynamic partitioning."]}),"\n",(0,r.jsxs)(i.p,{children:["When dynamic partitioning is turned off, Apache Doris will no longer manage partitions automatically, and users need to create or delete partitions manually by using ",(0,r.jsx)(i.code,{children:"ALTER TABLE"}),"; when dynamic partitioning is turned on, redundant partitions will be deleted according to the rules of dynamic partitioning."]})]})}function h(e={}){let{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,i,n){n.d(i,{Z:function(){return o},a:function(){return s}});var t=n(667294);let r={},a=t.createContext(r);function s(e){let i=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);