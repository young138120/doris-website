"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["807345"],{978320:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>h,assets:()=>r,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"query/join-optimization/colocation-join","title":"Colocation Join","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/query/join-optimization/colocation-join.md","sourceDirName":"query/join-optimization","slug":"/query/join-optimization/colocation-join","permalink":"/docs/2.0/query/join-optimization/colocation-join","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Colocation Join","language":"en"},"sidebar":"docs","previous":{"title":"Bucket Shuffle Join","permalink":"/docs/2.0/query/join-optimization/bucket-shuffle-join"},"next":{"title":"Runtime Filter","permalink":"/docs/2.0/query/join-optimization/runtime-filter"}}'),o=t("785893"),a=t("250065");let l={title:"Colocation Join",language:"en"},s="Colocation Join",r={},c=[{value:"Noun Interpretation",id:"noun-interpretation",level:2},{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Establishment of tables",id:"establishment-of-tables",level:3},{value:"Delete table",id:"delete-table",level:3},{value:"View Group",id:"view-group",level:3},{value:"Modify Colocate Group",id:"modify-colocate-group",level:3},{value:"Other related operations",id:"other-related-operations",level:3},{value:"Colocation Duplicate Balancing and Repair",id:"colocation-duplicate-balancing-and-repair",level:2},{value:"Replica Repair",id:"replica-repair",level:3},{value:"Duplicate Equilibrium",id:"duplicate-equilibrium",level:3},{value:"Query",id:"query",level:2},{value:"Advanced Operations",id:"advanced-operations",level:2},{value:"FE Configuration Item",id:"fe-configuration-item",level:3}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"colocation-join",children:"Colocation Join"})}),"\n",(0,o.jsx)(n.p,{children:"Colocation Join is a new feature introduced in Doris 0.9. The purpose of this paper is to provide local optimization for some Join queries to reduce data transmission time between nodes and speed up queries."}),"\n",(0,o.jsxs)(n.p,{children:["The original design, implementation and effect can be referred to ",(0,o.jsx)(n.a,{href:"https://github.com/apache/incubator-doris/issues/245",children:"ISSUE 245"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The Colocation Join function has undergone a revision, and its design and use are slightly different from the original design. This document mainly introduces Colocation Join's principle, implementation, usage and precautions."}),"\n",(0,o.jsxs)(n.p,{children:["Note: This property will not be synchronized by CCR. If this table is copied by CCR, that is, PROPERTIES contains ",(0,o.jsx)(n.code,{children:"is_being_synced = true"}),", this property will be erased in this table."]}),"\n",(0,o.jsx)(n.h2,{id:"noun-interpretation",children:"Noun Interpretation"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"FE: Frontend, the front-end node of Doris. Responsible for metadata management and request access."}),"\n",(0,o.jsx)(n.li,{children:"BE: Backend, Doris's back-end node. Responsible for query execution and data storage."}),"\n",(0,o.jsx)(n.li,{children:"Colocation Group (CG): A CG contains one or more tables. Tables within the same group have the same Colocation Group Schema and the same data fragmentation distribution."}),"\n",(0,o.jsx)(n.li,{children:"Colocation Group Schema (CGS): Used to describe table in a CG and general Schema information related to Colocation. Including bucket column type, bucket number and copy number."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"principle",children:"Principle"}),"\n",(0,o.jsx)(n.p,{children:"The Colocation Join function is to make a CG of a set of tables with the same CGS. Ensure that the corresponding data fragments of these tables will fall on the same BE node. When tables in CG perform Join operations on bucket columns, local data Join can be directly performed to reduce data transmission time between nodes."}),"\n",(0,o.jsxs)(n.p,{children:["The data of a table will eventually fall into a barrel according to the barrel column value Hash and the number of barrels modeled. Assuming that the number of buckets in a table is 8, there are eight buckets ",(0,o.jsx)(n.code,{children:"[0, 1, 2, 3, 4, 5, 6, 7] "}),"Buckets'. We call such a sequence a ",(0,o.jsx)(n.code,{children:"Buckets Sequence"}),". Each Bucket has one or more Tablets. When a table is a single partitioned table, there is only one Tablet in a Bucket. If it is a multi-partition table, there will be more than one."]}),"\n",(0,o.jsx)(n.p,{children:"In order for a table to have the same data distribution, the table in the same CG must ensure the following attributes are the same:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Barrel row and number of barrels"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Bucket column, that is, the column specified in `DISTRIBUTED BY HASH (col1, col2,...)'in the table building statement. Bucket columns determine which column values are used to Hash data from a table into different Tablets. Tables in the same CG must ensure that the type and number of barrel columns are identical, and the number of barrels is identical, so that the data fragmentation of multiple tables can be controlled one by one."}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Number of copies"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The number of copies of all partitions of all tables in the same CG must be the same. If inconsistent, there may be a copy of a Tablet, and there is no corresponding copy of other table fragments on the same BE."}),"\n",(0,o.jsx)(n.p,{children:"Tables in the same CG do not require consistency in the number, scope, and type of partition columns."}),"\n",(0,o.jsxs)(n.p,{children:["After fixing the number of bucket columns and buckets, the tables in the same CG will have the same Buckets Sequence. The number of replicas determines the number of replicas of Tablets in each bucket, which BE they are stored on. Suppose that Buckets Sequence is ",(0,o.jsx)(n.code,{children:"[0, 1, 2, 3, 4, 5, 6, 7] "}),", and that BE nodes have ",(0,o.jsx)(n.code,{children:"[A, B, C, D] "}),"4. A possible distribution of data is as follows:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| 0 | | 1 | | 2 | | 3 | | 4 | | 5 | | 6 | | 7 |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n| A | | B | | C | | D | | A | | B | | C | | D |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| B | | C | | D | | A | | B | | C | | D | | A |\n|   | |   | |   | |   | |   | |   | |   | |   |\n| C | | D | | A | | B | | C | | D | | A | | B |\n+---+ +---+ +---+ +---+ +---+ +---+ +---+ +---+\n"})}),"\n",(0,o.jsx)(n.p,{children:"The data of all tables in CG will be uniformly distributed according to the above rules, which ensures that the data with the same barrel column value are on the same BE node, and local data Join can be carried out."}),"\n",(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n.h3,{id:"establishment-of-tables",children:"Establishment of tables"}),"\n",(0,o.jsxs)(n.p,{children:["When creating a table, you can specify the attribute ",(0,o.jsx)(n.code,{children:'"colocate_with"="group_name"'})," in ",(0,o.jsx)(n.code,{children:"PROPERTIES"}),", which means that the table is a Colocation Join table and belongs to a specified Colocation Group."]}),"\n",(0,o.jsx)(n.p,{children:"Examples:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n  "colocate_with" = "group1"\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["If the specified group does not exist, Doris automatically creates a group that contains only the current table. If the Group already exists, Doris checks whether the current table satisfies the Colocation Group Schema. If satisfied, the table is created and added to the Group. At the same time, tables create fragments and replicas based on existing data distribution rules in Groups.\nGroup belongs to a database, and its name is unique in a database. Internal storage is the full name of Group ",(0,o.jsx)(n.code,{children:"dbId_groupName"}),", but users only perceive groupName."]}),"\n",(0,o.jsxs)(n.p,{children:["In version 2.0, Doris supports cross-Database Group. When creating a table, you need to use the keyword ",(0,o.jsx)(n.code,{children:"__global__"})," as a prefix of the Group name. like:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'CREATE TABLE tbl (k1 int, v1 int sum)\nDISTRIBUTED BY HASH(k1)\nBUCKETS 8\nPROPERTIES(\n     "colocate_with" = "__global__group1"\n);\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The Group prefixed with ",(0,o.jsx)(n.code,{children:"__global__"})," no longer belongs to a Database, and its name is also globally unique."]}),"\n",(0,o.jsx)(n.p,{children:"Cross-Database Colocate Join can be realized by creating a Global Group."}),"\n",(0,o.jsx)(n.h3,{id:"delete-table",children:"Delete table"}),"\n",(0,o.jsxs)(n.p,{children:["When the last table in Group is deleted completely (deleting completely means deleting from the recycle bin). Usually, when a table is deleted by the ",(0,o.jsx)(n.code,{children:"DROP TABLE"})," command, it will be deleted after the default one-day stay in the recycle bin, and the group will be deleted automatically."]}),"\n",(0,o.jsx)(n.h3,{id:"view-group",children:"View Group"}),"\n",(0,o.jsx)(n.p,{children:"The following command allows you to view the existing Group information in the cluster."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"SHOW PROC '/colocation_group';\n\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| GroupId     | GroupName    | TableIds     | BucketsNum | ReplicationNum | DistCols | IsStable |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n| 10005.10008 | 10005_group1 | 10007, 10040 | 10         | 3              | int(11)  | true     |\n+-------------+--------------+--------------+------------+----------------+----------+----------+\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"GroupId: The unique identity of a group's entire cluster, with DB ID in the first half and group ID in the second half."}),"\n",(0,o.jsx)(n.li,{children:"GroupName: The full name of Group."}),"\n",(0,o.jsx)(n.li,{children:"Tablet Ids: The group contains a list of Tables'ID."}),"\n",(0,o.jsx)(n.li,{children:"Buckets Num: Number of barrels."}),"\n",(0,o.jsx)(n.li,{children:"Replication Num: Number of copies."}),"\n",(0,o.jsx)(n.li,{children:"DistCols: Distribution columns,"}),"\n",(0,o.jsx)(n.li,{children:"IsStable: Is the group stable (for the definition of stability, see section `Collocation replica balancing and repair')."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can further view the data distribution of a group by following commands:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"SHOW PROC '/colocation_group/10005.10008';\n\n+-------------+---------------------+\n| BucketIndex | BackendIds          |\n+-------------+---------------------+\n| 0           | 10004, 10002, 10001 |\n| 1           | 10003, 10002, 10004 |\n| 2           | 10002, 10004, 10001 |\n| 3           | 10003, 10002, 10004 |\n| 4           | 10002, 10004, 10003 |\n| 5           | 10003, 10002, 10001 |\n| 6           | 10003, 10004, 10001 |\n| 7           | 10003, 10004, 10002 |\n+-------------+---------------------+\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"BucketIndex: Subscript to the bucket sequence."}),"\n",(0,o.jsx)(n.li,{children:"Backend Ids: A list of BE node IDs where data fragments are located in buckets."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"The above commands require ADMIN privileges. Normal user view is not supported at this time."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"modify-colocate-group",children:"Modify Colocate Group"}),"\n",(0,o.jsx)(n.p,{children:"You can modify the Colocation Group property of a table that has been created. Examples:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'ALTER TABLE tbl SET ("colocate_with" = "group2");'})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"If the table has not previously specified a Group, the command checks the Schema and adds the table to the Group (if the Group does not exist, it will be created)."}),"\n",(0,o.jsx)(n.li,{children:"If other groups are specified before the table, the command first removes the table from the original group and adds a new group (if the group does not exist, it will be created)."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"You can also delete the Colocation attribute of a table by following commands:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'ALTER TABLE tbl SET ("colocate_with" = "");'})}),"\n",(0,o.jsx)(n.h3,{id:"other-related-operations",children:"Other related operations"}),"\n",(0,o.jsx)(n.p,{children:"When an ADD PARTITION is added to a table with a Colocation attribute and the number of copies is modified, Doris checks whether the modification violates the Colocation Group Schema and rejects it if it does."}),"\n",(0,o.jsx)(n.h2,{id:"colocation-duplicate-balancing-and-repair",children:"Colocation Duplicate Balancing and Repair"}),"\n",(0,o.jsx)(n.p,{children:"Copy distribution of Colocation tables needs to follow the distribution specified in Group, so it is different from common fragmentation in replica repair and balancing."}),"\n",(0,o.jsx)(n.p,{children:"Group itself has a Stable attribute, when Stable is true, which indicates that all fragments of the table in the current Group are not changing, and the Colocation feature can be used normally. When Stable is false, it indicates that some tables in Group are being repaired or migrated. At this time, Colocation Join of related tables will degenerate into ordinary Join."}),"\n",(0,o.jsx)(n.h3,{id:"replica-repair",children:"Replica Repair"}),"\n",(0,o.jsx)(n.p,{children:"Copies can only be stored on specified BE nodes. So when a BE is unavailable (downtime, Decommission, etc.), a new BE is needed to replace it. Doris will first look for the BE with the lowest load to replace it. After replacement, all data fragments on the old BE in the Bucket will be repaired. During the migration process, Group is marked Unstable."}),"\n",(0,o.jsx)(n.h3,{id:"duplicate-equilibrium",children:"Duplicate Equilibrium"}),"\n",(0,o.jsxs)(n.p,{children:["Doris will try to distribute the fragments of the Collocation table evenly across all BE nodes. For the replica balancing of common tables, the granularity is single replica, that is to say, it is enough to find BE nodes with lower load for each replica alone. The equilibrium of the Colocation table is at the Bucket level, where all replicas within a Bucket migrate together. We adopt a simple equalization algorithm, which distributes Buckets Sequence evenly on all BEs, regardless of the actual size of the replicas, but only according to the number of replicas. Specific algorithms can be referred to the code annotations in ",(0,o.jsx)(n.code,{children:"ColocateTableBalancer.java"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Note 1: Current Colocation replica balancing and repair algorithms may not work well for heterogeneous deployed Oris clusters. The so-called heterogeneous deployment, that is, the BE node's disk capacity, number, disk type (SSD and HDD) is inconsistent. In the case of heterogeneous deployment, small BE nodes and large BE nodes may store the same number of replicas."}),"\n",(0,o.jsxs)(n.p,{children:["Note 2: When a group is in an Unstable state, the Join of the table in it will degenerate into a normal Join. At this time, the query performance of the cluster may be greatly reduced. If you do not want the system to balance automatically, you can set the FE configuration item ",(0,o.jsx)(n.code,{children:"disable_colocate_balance"})," to prohibit automatic balancing. Then open it at the right time. (See Section ",(0,o.jsx)(n.code,{children:"Advanced Operations"})," for details)"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,o.jsx)(n.p,{children:"The Colocation table is queried in the same way as ordinary tables, and users do not need to perceive Colocation attributes. If the Group in which the Colocation table is located is in an Unstable state, it will automatically degenerate to a normal Join."}),"\n",(0,o.jsx)(n.p,{children:"Examples are given to illustrate:"}),"\n",(0,o.jsx)(n.p,{children:"Table 1:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'CREATE TABLE `tbl1` (\n    `k1` date NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` int(11) SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nPARTITION BY RANGE(`k1`)\n(\n    PARTITION p1 VALUES LESS THAN (\'2019-05-31\'),\n    PARTITION p2 VALUES LESS THAN (\'2019-06-30\')\n)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,o.jsx)(n.p,{children:"Table 2:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'CREATE TABLE `tbl2` (\n    `k1` datetime NOT NULL COMMENT "",\n    `k2` int(11) NOT NULL COMMENT "",\n    `v1` double SUM NOT NULL COMMENT ""\n) ENGINE=OLAP\nAGGREGATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(`k2`) BUCKETS 8\nPROPERTIES (\n    "colocate_with" = "group1"\n);\n'})}),"\n",(0,o.jsx)(n.p,{children:"View the query plan:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"DESC SELECT * FROM tbl1 INNER JOIN tbl2 ON (tbl1.k2 = tbl2.k2);\n\n+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN                           |\n|   |  hash predicates:                              |\n|   |  colocate: true                                |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----1:OlapScanNode                              |\n|   |       TABLE: tbl2                              |\n|   |       PREAGGREGATION: OFF. Reason: null        |\n|   |       partitions=0/1                           |\n|   |       rollup: null                             |\n|   |       buckets=0/0                              |\n|   |       cardinality=-1                           |\n|   |       avgRowSize=0.0                           |\n|   |       numNodes=0                               |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n+----------------------------------------------------+\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If Colocation Join works, the Hash Join Node will show ",(0,o.jsx)(n.code,{children:"colocate: true"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"If not, the query plan is as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"+----------------------------------------------------+\n| Explain String                                     |\n+----------------------------------------------------+\n| PLAN FRAGMENT 0                                    |\n|  OUTPUT EXPRS:`tbl1`.`k1` |                        |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   RESULT SINK                                      |\n|                                                    |\n|   2:HASH JOIN                                      |\n|   |  join op: INNER JOIN (BROADCAST)               |\n|   |  hash predicates:                              |\n|   |  colocate: false, reason: group is not stable  |\n|   |    `tbl1`.`k2` = `tbl2`.`k2`                   |\n|   |  tuple ids: 0 1                                |\n|   |                                                |\n|   |----3:EXCHANGE                                  |\n|   |       tuple ids: 1                             |\n|   |                                                |\n|   0:OlapScanNode                                   |\n|      TABLE: tbl1                                   |\n|      PREAGGREGATION: OFF. Reason: No AggregateInfo |\n|      partitions=0/2                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 0                                  |\n|                                                    |\n| PLAN FRAGMENT 1                                    |\n|  OUTPUT EXPRS:                                     |\n|   PARTITION: RANDOM                                |\n|                                                    |\n|   STREAM DATA SINK                                 |\n|     EXCHANGE ID: 03                                |\n|     UNPARTITIONED                                  |\n|                                                    |\n|   1:OlapScanNode                                   |\n|      TABLE: tbl2                                   |\n|      PREAGGREGATION: OFF. Reason: null             |\n|      partitions=0/1                                |\n|      rollup: null                                  |\n|      buckets=0/0                                   |\n|      cardinality=-1                                |\n|      avgRowSize=0.0                                |\n|      numNodes=0                                    |\n|      tuple ids: 1                                  |\n+----------------------------------------------------+\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The HASH JOIN node displays the corresponding reason: ",(0,o.jsx)(n.code,{children:"colocate: false, reason: group is not stable"}),". At the same time, an EXCHANGE node will be generated."]}),"\n",(0,o.jsx)(n.h2,{id:"advanced-operations",children:"Advanced Operations"}),"\n",(0,o.jsx)(n.h3,{id:"fe-configuration-item",children:"FE Configuration Item"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"disable_colocate_relocate"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Whether to close Doris's automatic Colocation replica repair. The default is false, i.e. not closed. This parameter only affects the replica repair of the Colocation table, but does not affect the normal table."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"disable_colocate_balance"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Whether to turn off automatic Colocation replica balancing for Doris. The default is false, i.e. not closed. This parameter only affects the replica balance of the Collocation table, but does not affect the common table."}),"\n",(0,o.jsxs)(n.p,{children:["User can set these configurations at runtime. See ",(0,o.jsx)(n.code,{children:"HELP ADMIN SHOW CONFIG;"})," and ",(0,o.jsx)(n.code,{children:"HELP ADMIN SET CONFIG;"}),"."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"disable_colocate_join"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Whether to turn off the Colocation Join function or not. In 0.10 and previous versions, the default is true, that is, closed. In a later version, it will default to false, that is, open."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"use_new_tablet_scheduler"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In 0.10 and previous versions, the new replica scheduling logic is incompatible with the Colocation Join function, so in 0.10 and previous versions, if ",(0,o.jsx)(n.code,{children:"disable_colocate_join = false"}),", you need to set ",(0,o.jsx)(n.code,{children:"use_new_tablet_scheduler = false"}),", that is, close the new replica scheduler. In later versions, ",(0,o.jsx)(n.code,{children:"use_new_tablet_scheduler"})," will be equal to true."]}),"\n",(0,o.jsx)(n.p,{children:"###HTTP Restful API"}),"\n",(0,o.jsx)(n.p,{children:"Doris provides several HTTP Restful APIs related to Colocation Join for viewing and modifying Colocation Group."}),"\n",(0,o.jsxs)(n.p,{children:["The API is implemented on the FE side and accessed using ",(0,o.jsx)(n.code,{children:"fe_host: fe_http_port"}),". ADMIN privileges are required."]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"View all Colocation information for the cluster"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'GET /api/colocate\n\nReturn the internal Colocation info in JSON format:\n\n{\n    "msg": "success",\n  "code": 0,\n  "data": {\n    "infos": [\n      ["10003.12002", "10003_group1", "10037, 10043", "1", "1", "int(11)", "true"]\n    ],\n    "unstableGroupIds": [],\n    "allGroupIds": [{\n      "dbId": 10003,\n      "grpId": 12002\n    }]\n  },\n  "count": 0 \n}\n'})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Mark Group as Stable or Unstable"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Mark as Stable"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"```\nPOST /api/colocate/group_stable?db_id=10005&group_id=10008\n\nReturns: 200\n```\n"})}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Mark as Unstable"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"```\nDELETE /api/colocate/group_stable?db_id=10005&group_id=10008\n\nReturns: 200\n```\n"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"3",children:["\n",(0,o.jsx)(n.li,{children:"Setting Data Distribution for Group"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The interface can force the number distribution of a group."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"```\nPOST /api/colocate/bucketseq?db_id=10005&group_id=10008\n\nBody:\n[[10004,10002],[10003,10002],[10002,10004],[10003,10002],[10002,10004],[10003,10002],[10003,10004],[10003,10004],[10003,10004],[10002,10004]]\n\nReturns: 200\n```\n"})}),"\n",(0,o.jsx)(n.p,{children:"Body is a Buckets Sequence represented by a nested array and the ID of the BE where the fragments are distributed in each Bucket."}),"\n",(0,o.jsxs)(n.p,{children:["Note that using this command, you may need to set the FE configuration ",(0,o.jsx)(n.code,{children:"disable_colocate_relocate"})," and ",(0,o.jsx)(n.code,{children:"disable_colocate_balance"})," to true. That is to shut down the system for automatic Colocation replica repair and balancing. Otherwise, it may be automatically reset by the system after modification."]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(667294);let o={},a=i.createContext(o);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);