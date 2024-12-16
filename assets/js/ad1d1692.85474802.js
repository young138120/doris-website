"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["637198"],{5524:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>s,default:()=>h,assets:()=>r,toc:()=>d,frontMatter:()=>l});var a=JSON.parse('{"id":"admin-manual/maint-monitor/tablet-local-debug","title":"Tablet Local Debug","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/admin-manual/maint-monitor/tablet-local-debug.md","sourceDirName":"admin-manual/maint-monitor","slug":"/admin-manual/maint-monitor/tablet-local-debug","permalink":"/docs/2.0/admin-manual/maint-monitor/tablet-local-debug","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Tablet Local Debug","language":"en"},"sidebar":"docs","previous":{"title":"Tablet Restore Tool","permalink":"/docs/2.0/admin-manual/maint-monitor/tablet-restore-tool"},"next":{"title":"Metadata Operations and Maintenance","permalink":"/docs/2.0/admin-manual/maint-monitor/metadata-operation"}}'),i=n("785893"),o=n("250065");let l={title:"Tablet Local Debug",language:"en"},s="Tablet Local Debug",r={},d=[{value:"1. Get information about the tablet",id:"1-get-information-about-the-tablet",level:2},{value:"2. Load Tablet locally",id:"2-load-tablet-locally",level:2}];function c(e){let t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"tablet-local-debug",children:"Tablet Local Debug"})}),"\n",(0,i.jsx)(t.p,{children:"During the online operation of Doris, various bugs may occur due to various reasons. For example: the replica is inconsistent, the data exists in the version diff, etc."}),"\n",(0,i.jsx)(t.p,{children:"At this time, it is necessary to copy the copy data of the tablet online to the local environment for reproduction, and then locate the problem."}),"\n",(0,i.jsx)(t.h2,{id:"1-get-information-about-the-tablet",children:"1. Get information about the tablet"}),"\n",(0,i.jsx)(t.p,{children:"The tablet id can be confirmed by the BE log, and then the information can be obtained by the following command (assuming the tablet id is 10020)."}),"\n",(0,i.jsx)(t.p,{children:"Get information such as DbId/TableId/PartitionId where the tablet is located."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql> show tablet 10020\\G\n*************************** 1. row ***************************\n       DbName: default_cluster:db1\n    TableName: tbl1\nPartitionName: tbl1\n    IndexName: tbl1\n         DbId: 10004\n      TableId: 10016\n  PartitionId: 10015\n      IndexId: 10017\n       IsSync: true\n        Order: 1\n    DetailCmd: SHOW PROC '/dbs/10004/10016/partitions/10015/10017/10020';\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Execute ",(0,i.jsx)(t.code,{children:"DetailCmd"})," in the previous step to obtain information such as BackendId/SchemaHash."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql>  SHOW PROC '/dbs/10004/10016/partitions/10015/10017/10020'\\G\n*************************** 1. row ***************************\n        ReplicaId: 10021\n        BackendId: 10003\n          Version: 3\nLstSuccessVersion: 3\n LstFailedVersion: -1\n    LstFailedTime: NULL\n       SchemaHash: 785778507\n    LocalDataSize: 780\n   RemoteDataSize: 0\n         RowCount: 2\n            State: NORMAL\n            IsBad: false\n     VersionCount: 3\n         PathHash: 7390150550643804973\n          MetaUrl: http://192.168.10.1:8040/api/meta/header/10020\n CompactionStatus: http://192.168.10.1:8040/api/compaction/show?tablet_id=10020\n"})}),"\n",(0,i.jsx)(t.p,{children:"Create tablet snapshot and get table creation statement"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'mysql> admin copy tablet 10020 properties("backend_id" = "10003", "version" = "2")\\G\n*************************** 1. row ***************************\n         TabletId: 10020\n        BackendId: 10003\n               Ip: 192.168.10.1\n             Path: /path/to/be/storage/snapshot/20220830101353.2.3600\nExpirationMinutes: 60\n  CreateTableStmt: CREATE TABLE `tbl1` (\n  `k1` int(11) NULL,\n  `k2` int(11) NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`k1`, `k2`)\nDISTRIBUTED BY HASH(k1) BUCKETS 1\nPROPERTIES (\n"replication_num" = "1",\n"version_info" = "2"\n);\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"admin copy tablet"})," command can generate a snapshot file of the corresponding replica and version for the specified tablet. Snapshot files are stored in the ",(0,i.jsx)(t.code,{children:"Path"})," directory of the BE node indicated by the ",(0,i.jsx)(t.code,{children:"Ip"})," field."]}),"\n",(0,i.jsx)(t.p,{children:"There will be a directory named tablet id under this directory, which will be packaged as a whole for later use. (Note that the directory is kept for a maximum of 60 minutes, after which it is automatically deleted)."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cd /path/to/be/storage/snapshot/20220830101353.2.3600\ntar czf 10020.tar.gz 10020/\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The command will also generate the table creation statement corresponding to the tablet at the same time. Note that this table creation statement is not the original table creation statement, its bucket number and replica number are both 1, and the ",(0,i.jsx)(t.code,{children:"versionInfo"})," field is specified. This table building statement is used later when loading the tablet locally."]}),"\n",(0,i.jsx)(t.p,{children:"So far, we have obtained all the necessary information, the list is as follows:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Packaged tablet data, such as 10020.tar.gz."}),"\n",(0,i.jsx)(t.li,{children:"Create a table statement."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"2-load-tablet-locally",children:"2. Load Tablet locally"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Build a local debugging environment"}),"\n",(0,i.jsx)(t.p,{children:"Deploy a single-node Doris cluster (1FE, 1BE) locally, and the deployment version is the same as the online cluster. If the online deployment version is DORIS-1.1.1, the local environment also deploys the DORIS-1.1.1 version."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Create a table"}),"\n",(0,i.jsx)(t.p,{children:"Create a table in the local environment using the create table statement from the previous step."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Get the tablet information of the newly created table"}),"\n",(0,i.jsx)(t.p,{children:"Because the number of buckets and replicas of the newly created table is 1, there will only be one tablet with one replica:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql> show tablets from tbl1\\G\n*************************** 1. row ***************************\n               TabletId: 10017\n              ReplicaId: 10018\n              BackendId: 10003\n             SchemaHash: 44622287\n                Version: 1\n      LstSuccessVersion: 1\n       LstFailedVersion: -1\n          LstFailedTime: NULL\n          LocalDataSize: 0\n         RemoteDataSize: 0\n               RowCount: 0\n                  State: NORMAL\nLstConsistencyCheckTime: NULL\n           CheckVersion: -1\n           VersionCount: -1\n               PathHash: 7390150550643804973\n                MetaUrl: http://192.168.10.1:8040/api/meta/header/10017\n       CompactionStatus: http://192.168.10.1:8040/api/compaction/show?tablet_id=10017\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql> show tablet 10017\\G\n*************************** 1. row ***************************\n       DbName: default_cluster:db1\n    TableName: tbl1\nPartitionName: tbl1\n    IndexName: tbl1\n         DbId: 10004\n      TableId: 10015\n  PartitionId: 10014\n      IndexId: 10016\n       IsSync: true\n        Order: 0\n    DetailCmd: SHOW PROC '/dbs/10004/10015/partitions/10014/10016/10017';\n"})}),"\n",(0,i.jsx)(t.p,{children:"Here we will record the following information:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TableId"}),"\n",(0,i.jsx)(t.li,{children:"PartitionId"}),"\n",(0,i.jsx)(t.li,{children:"TabletId"}),"\n",(0,i.jsx)(t.li,{children:"SchemaHash"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"At the same time, we also need to go to the data directory of the BE node in the debugging environment to confirm the shard id where the new tablet is located:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"cd /path/to/storage/data/*/10017 && pwd\n"})}),"\n",(0,i.jsx)(t.p,{children:"This command will enter the directory where the tablet 10017 is located and display the path. Here we will see a path similar to the following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"/path/to/storage/data/0/10017\n"})}),"\n",(0,i.jsxs)(t.p,{children:["where ",(0,i.jsx)(t.code,{children:"0"})," is the shard id."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Modify Tablet Data"}),"\n",(0,i.jsx)(t.p,{children:"Unzip the tablet data package obtained in the first step. The editor opens the 10017.hdr.json file, and modifies the following fields to the information obtained in the previous step:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'"table_id":10015\n"partition_id":10014\n"tablet_id":10017\n"schema_hash":44622287\n"shard_id":0\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Load the tablet"}),"\n",(0,i.jsxs)(t.p,{children:["First, stop the debug environment's BE process (./bin/stop_be.sh). Then copy all the .dat files in the same level directory of the 10017.hdr.json file to the ",(0,i.jsx)(t.code,{children:"/path/to/storage/data/0/10017/44622287"})," directory. This directory is the directory where the debugging environment tablet we obtained in step 3 is located. ",(0,i.jsx)(t.code,{children:"10017/44622287"})," are the tablet id and schema hash respectively."]}),"\n",(0,i.jsxs)(t.p,{children:["Delete the original tablet meta with the ",(0,i.jsx)(t.code,{children:"meta_tool"})," tool. The tool is located in the ",(0,i.jsx)(t.code,{children:"be/lib"})," directory."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"./lib/meta_tool --root_path=/path/to/storage --operation=delete_meta --tablet_id=10017 --schema_hash=44622287\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Where ",(0,i.jsx)(t.code,{children:"/path/to/storage"})," is the data root directory of BE. If the deletion is successful, the delete successfully log will appear."]}),"\n",(0,i.jsxs)(t.p,{children:["Load the new tablet meta via the ",(0,i.jsx)(t.code,{children:"meta_tool"})," tool."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"./lib/meta_tool --root_path=/path/to/storage --operation=load_meta --json_meta_path=/path/to/10017.hdr.json\n"})}),"\n",(0,i.jsx)(t.p,{children:"If the load is successful, the load successfully log will appear."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Verification"}),"\n",(0,i.jsx)(t.p,{children:"Restart the debug environment's BE process (./bin/start_be.sh). Query the table, if correct, you can query the data of the loaded tablet, or reproduce the online problem."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return l}});var a=n(667294);let i={},o=a.createContext(i);function l(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);