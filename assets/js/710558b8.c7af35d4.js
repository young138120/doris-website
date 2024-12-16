"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["301988"],{135478:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"lakehouse/database/es","title":"Elasticsearch","description":"\x3c!--","source":"@site/docs/lakehouse/database/es.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/es","permalink":"/docs/dev/lakehouse/database/es","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Elasticsearch","language":"en"},"sidebar":"docs","previous":{"title":"GBase 8a","permalink":"/docs/dev/lakehouse/database/gbase-8a"},"next":{"title":"Alibaba Cloud Max Compute","permalink":"/docs/dev/lakehouse/database/max-compute"}}'),t=s("785893"),i=s("250065");let d={title:"Elasticsearch",language:"en"},l="Elasticsearch",o={},c=[{value:"Usage",id:"usage",level:2},{value:"Create Catalog",id:"create-catalog",level:2},{value:"Parameter Description",id:"parameter-description",level:3},{value:"Column Type Mapping",id:"column-type-mapping",level:2},{value:"Array Type",id:"array-type",level:3},{value:"Best Practice",id:"best-practice",level:2},{value:"Predicate Pushdown",id:"predicate-pushdown",level:3},{value:"Columnar Scan for Faster Queries (enable_docvalue_scan=true)",id:"columnar-scan-for-faster-queries-enable_docvalue_scantrue",level:3},{value:"Sniff Keyword Fields",id:"sniff-keyword-fields",level:3},{value:"Auto Node Discovery, Set to True by Default (nodes_discovery=true)",id:"auto-node-discovery-set-to-true-by-default-nodes_discoverytrue",level:3},{value:"HTTPS Access Mode for ES Clusters",id:"https-access-mode-for-es-clusters",level:3},{value:"Query Usage",id:"query-usage",level:3},{value:"Basic Query",id:"basic-query",level:4},{value:"Extended esquery(field, QueryDSL)",id:"extended-esqueryfield-querydsl",level:4},{value:"Suggestions for Time Fields",id:"suggestions-for-time-fields",level:3},{value:"Obtain ES Metadata Field <code>_id</code>",id:"obtain-es-metadata-field-_id",level:3},{value:"Getting globally ordered query results",id:"getting-globally-ordered-query-results",level:3},{value:"Modify the batch size for scroll requests.",id:"modify-the-batch-size-for-scroll-requests",level:3},{value:"FAQ",id:"faq",level:2},{value:"Appendix",id:"appendix",level:2},{value:"How Doris Conducts Queries in ES",id:"how-doris-conducts-queries-in-es",level:3}];function a(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"elasticsearch",children:"Elasticsearch"})}),"\n",(0,t.jsx)(n.p,{children:"Elasticsearch (ES) Catalogs in Doris support auto-mapping of ES metadata. Users can utilize the full-text search capability of ES in combination of the distributed query planning capability of Doris to provide a full-fledged OLAP solution that is able to perform:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Multi-index distributed Join queries in ES;"}),"\n",(0,t.jsx)(n.li,{children:"Join queries across Doris and ES as well as full-text search and filter."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Doris supports Elasticsearch 5.x and newer versions."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-catalog",children:"Create Catalog"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG es PROPERTIES (\n    "type"="es",\n    "hosts"="http://127.0.0.1:9200"\n);\n'})}),"\n",(0,t.jsxs)(n.p,{children:['Since there is no concept of "database" in ES, after connecting to ES, Doris will automatically generate a unique database: ',(0,t.jsx)(n.code,{children:"default_db"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["After switching to the ES Catalog, you will be in the ",(0,t.jsx)(n.code,{children:"dafault_db"}),"  so you don't need to execute the ",(0,t.jsx)(n.code,{children:"USE default_db"})," command."]}),"\n",(0,t.jsx)(n.h3,{id:"parameter-description",children:"Parameter Description"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Required or Not"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"hosts"})}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"ES address, can be one or multiple addresses, or the load balancer address of ES"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"user"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Empty"}),(0,t.jsx)(n.td,{children:"ES username"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"password"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"Empty"}),(0,t.jsx)(n.td,{children:"Password of the corresponding user"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"doc_value_scan"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Whether to obtain value of the target field by ES/Lucene columnar storage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"keyword_sniff"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Whether to sniff the text.fields in ES based on keyword; If this is set to false, the system will perform matching after tokenization."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"nodes_discovery"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Whether to enable ES node discovery, set to true by default; set to false in network isolation environments and only connected to specified nodes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ssl"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:'Whether to enable HTTPS access mode for ES, currently follows a "Trust All" method in FE/BE'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"mapping_es_id"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsxs)(n.td,{children:["Whether to map the  ",(0,t.jsx)(n.code,{children:"_id"}),"  field in the ES index"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"like_push_down"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"true"}),(0,t.jsx)(n.td,{children:"Whether to transform like to wildcard push down to es, this increases the cpu consumption of the es."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"include_hidden_index"})}),(0,t.jsx)(n.td,{children:"No"}),(0,t.jsx)(n.td,{children:"false"}),(0,t.jsx)(n.td,{children:"Whether to include hidden index, default to false."})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In terms of authentication, only HTTP Basic authentication is supported and it requires the user to have read privilege for the index and paths including ",(0,t.jsx)(n.code,{children:"/_cluster/state/"})," and ",(0,t.jsx)(n.code,{children:"_nodes/http"})," ; if you have not enabled security authentication for the cluster, you don't need to set the  ",(0,t.jsx)(n.code,{children:"user"})," and ",(0,t.jsx)(n.code,{children:"password"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"If there are multiple types in the index in 5.x and 6.x, the first type is taken by default."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"column-type-mapping",children:"Column Type Mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"ES Type"}),(0,t.jsx)(n.th,{children:"Doris Type"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"null"}),(0,t.jsx)(n.td,{children:"null"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{children:"boolean"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"byte"}),(0,t.jsx)(n.td,{children:"tinyint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"short"}),(0,t.jsx)(n.td,{children:"smallint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"integer"}),(0,t.jsx)(n.td,{children:"int"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"long"}),(0,t.jsx)(n.td,{children:"bigint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"unsigned_long"}),(0,t.jsx)(n.td,{children:"largeint"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"half_float"}),(0,t.jsx)(n.td,{children:"float"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"scaled_float"}),(0,t.jsx)(n.td,{children:"double"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"date"}),(0,t.jsx)(n.td,{children:"date"}),(0,t.jsx)(n.td,{children:"Only support default/yyyy-MM-dd HH:mm:ss/yyyy-MM-dd/epoch_millis format"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"keyword"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ip"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"constant_keyword"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"wildcard"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nested"}),(0,t.jsx)(n.td,{children:"json"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"json"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"other"}),(0,t.jsx)(n.td,{children:"unsupported"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"array-type",children:"Array Type"}),"\n",(0,t.jsxs)(n.p,{children:["Elasticsearch does not have an explicit array type, but one of its fields can contain\n",(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/array.html",children:"0 or more values"}),".\nTo indicate that a field is an array type, a specific ",(0,t.jsx)(n.code,{children:"doris"})," structural annotation can be added to the\n",(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-meta-field.html",children:"_meta"})," section of the index mapping.\nFor Elasticsearch 6.x and before release, please refer ",(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/6.8/mapping-meta-field.html",children:"_meta"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, suppose there is an index ",(0,t.jsx)(n.code,{children:"doc"})," containing the following data structure."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "array_int_field": [1, 2, 3, 4],\n  "array_string_field": ["doris", "is", "the", "best"],\n  "id_field": "id-xxx-xxx",\n  "timestamp_field": "2022-11-12T12:08:56Z",\n  "array_object_field": [\n    {\n      "name": "xxx",\n      "age": 18\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The array fields of this structure can be defined by using the following command to add the field property definition\nto the ",(0,t.jsx)(n.code,{children:"_meta.doris"})," property of the target index mapping."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'# ES 7.x and above\ncurl -X PUT "localhost:9200/doc/_mapping?pretty" -H \'Content-Type:application/json\' -d \'\n{\n    "_meta": {\n        "doris":{\n            "array_fields":[\n                "array_int_field",\n                "array_string_field",\n                "array_object_field"\n            ]\n        }\n    }\n}\'\n\n# ES 6.x and before\ncurl -X PUT "localhost:9200/doc/_mapping?pretty" -H \'Content-Type: application/json\' -d \'\n{\n    "_doc": {\n        "_meta": {\n            "doris":{\n                "array_fields":[\n                    "array_int_field",\n                    "array_string_field",\n                    "array_object_field"\n                ]\n            }\n    }\n    }\n}\n\'\n\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"array_fields"}),"\uFF1AUsed to indicate a field that is an array type."]}),"\n",(0,t.jsx)(n.h2,{id:"best-practice",children:"Best Practice"}),"\n",(0,t.jsx)(n.h3,{id:"predicate-pushdown",children:"Predicate Pushdown"}),"\n",(0,t.jsx)(n.p,{children:"ES Catalogs support predicate pushdown to ES, which means only the filtered data will be returned. This can markedly improve query performance and reduce usage of CPU, memory, and IO in both Doris and ES."}),"\n",(0,t.jsx)(n.p,{children:"For the sake of optimization, operators will be converted into the following ES queries:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"SQL syntax"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"ES 5.x+ syntax"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"="}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"term query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"in"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"terms query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"> , < , >= , \u21D0"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"range query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"and"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"bool.filter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"or"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"bool.should"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"not"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"bool.must_not"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"not in"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"bool.must_not + terms query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"is_not_null"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"exists query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"is_null"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"bool.must_not + exists query"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"esquery"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"ES-native JSON QueryDSL"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"columnar-scan-for-faster-queries-enable_docvalue_scantrue",children:"Columnar Scan for Faster Queries (enable_docvalue_scan=true)"}),"\n",(0,t.jsxs)(n.p,{children:["Set  ",(0,t.jsx)(n.code,{children:'"enable_docvalue_scan" = "true"'}),"."]}),"\n",(0,t.jsx)(n.p,{children:"After this, when obtaining data from ES, Doris will follow these rules:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Try and see"}),": Doris will automatically check if columnar storage is enabled for the target fields (doc_value: true), if it is, Doris will obtain all values in the fields from the columnar storage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto-downgrading"}),": If any one of the target fields is not available in columnar storage, Doris will parse and obtain all target data from row storage (",(0,t.jsx)(n.code,{children:"_source"}),")."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Benefits"})}),"\n",(0,t.jsxs)(n.p,{children:["By default, Doris On ES obtains all target columns from ",(0,t.jsx)(n.code,{children:"_source"}),", which is in row storage and JSON format. Compared to columnar storage, ",(0,t.jsx)(n.code,{children:"_source"})," is slow in batch read. In particular, when the system only needs to read small number of columns, the performance of  ",(0,t.jsx)(n.code,{children:"docvalue"}),"  can be about a dozen times faster than that of  ",(0,t.jsx)(n.code,{children:"_source"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Note"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Columnar storage is not available for ",(0,t.jsx)(n.code,{children:"text"})," fields in ES. Thus, if you need to obtain fields containing ",(0,t.jsx)(n.code,{children:"text"})," values, you will need to obtain them from ",(0,t.jsx)(n.code,{children:"_source"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["When obtaining large numbers of fields (",(0,t.jsx)(n.code,{children:">= 25"}),"), the performances of ",(0,t.jsx)(n.code,{children:"docvalue"}),"  and  ",(0,t.jsx)(n.code,{children:"_source"})," are basically equivalent."]}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"keyword"})," type field, due to the ",(0,t.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/keyword.html#keyword-params",children:(0,t.jsx)(n.code,{children:"ignore_above"})})," parameter's limit, long text fields exceeding this limit will be ignored, so the result may be empty. In this case, you need to turn off ",(0,t.jsx)(n.code,{children:"enable_docvalue_scan"})," and get the result from ",(0,t.jsx)(n.code,{children:"_source"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"sniff-keyword-fields",children:"Sniff Keyword Fields"}),"\n",(0,t.jsxs)(n.p,{children:["Set  ",(0,t.jsx)(n.code,{children:'"enable_keyword_sniff" = "true"'}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["ES allows direct data ingestion without an index since it will automatically create an index after ingestion. For string fields, ES will create a field with both ",(0,t.jsx)(n.code,{children:"text"})," and ",(0,t.jsx)(n.code,{children:"keyword"})," types. This is how the Multi-Field feature of ES works. The mapping is as follows:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"k4": {\n   "type": "text",\n   "fields": {\n      "keyword": {   \n         "type": "keyword",\n         "ignore_above": 256\n      }\n   }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:['For example, to conduct "=" filtering on ',(0,t.jsx)(n.code,{children:"k4"}),", Doris on ES will convert the filtering operation into an ES TermQuery."]}),"\n",(0,t.jsx)(n.p,{children:"The original SQL filter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'k4 = "Doris On ES"\n'})}),"\n",(0,t.jsx)(n.p,{children:"The converted ES query DSL:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"term" : {\n    "k4": "Doris On ES"\n\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Since the first field of ",(0,t.jsx)(n.code,{children:"k4"})," is ",(0,t.jsx)(n.code,{children:"text"}),", it will be tokenized by the analyzer set for ",(0,t.jsx)(n.code,{children:"k4"})," (or by the standard analyzer if no analyzer has been set for ",(0,t.jsx)(n.code,{children:"k4"}),') after data ingestion. As a result, it will be tokenized into three terms: "Doris", "on", and "ES".']}),"\n",(0,t.jsx)(n.p,{children:"The details are as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'POST /_analyze\n{\n  "analyzer": "standard",\n  "text": "Doris On ES"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The tokenization results:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n   "tokens": [\n      {\n         "token": "doris",\n         "start_offset": 0,\n         "end_offset": 5,\n         "type": "<ALPHANUM>",\n         "position": 0\n      },\n      {\n         "token": "on",\n         "start_offset": 6,\n         "end_offset": 8,\n         "type": "<ALPHANUM>",\n         "position": 1\n      },\n      {\n         "token": "es",\n         "start_offset": 9,\n         "end_offset": 11,\n         "type": "<ALPHANUM>",\n         "position": 2\n      }\n   ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If you conduct a query as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"term" : {\n    "k4": "Doris On ES"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Since there is no term in the dictionary that matches the term ",(0,t.jsx)(n.code,{children:"Doris On ES"}),", no result will be returned."]}),"\n",(0,t.jsxs)(n.p,{children:["However, if you have set ",(0,t.jsx)(n.code,{children:"enable_keyword_sniff: true"}),", the system will convert ",(0,t.jsx)(n.code,{children:'k4 = "Doris On ES"'})," to ",(0,t.jsx)(n.code,{children:'k4.keyword = "Doris On ES"'}),"  to match the SQL semantics. The converted ES query DSL will be:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'"term" : {\n    "k4.keyword": "Doris On ES"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"k4.keyword"}),"  is of ",(0,t.jsx)(n.code,{children:"keyword"})," type, so the data is written in ES as a complete term, allowing for successful matching."]}),"\n",(0,t.jsx)(n.h3,{id:"auto-node-discovery-set-to-true-by-default-nodes_discoverytrue",children:"Auto Node Discovery, Set to True by Default (nodes_discovery=true)"}),"\n",(0,t.jsxs)(n.p,{children:["Set  ",(0,t.jsx)(n.code,{children:'"nodes_discovery" = "true"'}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Then, Doris will discover all available data nodes (the allocated shards) in ES. If Doris BE hasn't accessed the ES data node addresses, then set ",(0,t.jsx)(n.code,{children:'"nodes_discovery" = "false"'})," . ES clusters are deployed in private networks that are isolated from public Internet, so users will need proxy access."]}),"\n",(0,t.jsx)(n.h3,{id:"https-access-mode-for-es-clusters",children:"HTTPS Access Mode for ES Clusters"}),"\n",(0,t.jsxs)(n.p,{children:["Set  ",(0,t.jsx)(n.code,{children:'"ssl" = "true"'}),"."]}),"\n",(0,t.jsx)(n.p,{children:'A temporary solution is to implement a "Trust All" method in FE/BE. In the future, the real user configuration certificates will be used.'}),"\n",(0,t.jsx)(n.h3,{id:"query-usage",children:"Query Usage"}),"\n",(0,t.jsx)(n.p,{children:"You can use the ES external tables in Doris the same way as using Doris internal tables, except that the Doris data models (Rollup, Pre-Aggregation, and Materialized Views) are unavailable."}),"\n",(0,t.jsx)(n.h4,{id:"basic-query",children:"Basic Query"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"select * from es_table where k1 > 1000 and k3 ='term' or k4 like 'fu*z_'\n"})}),"\n",(0,t.jsx)(n.h4,{id:"extended-esqueryfield-querydsl",children:"Extended esquery(field, QueryDSL)"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"esquery(field, QueryDSL)"})," function can be used to push queries that cannot be expressed in SQL, such as ",(0,t.jsx)(n.code,{children:"match_phrase"})," and ",(0,t.jsx)(n.code,{children:"geoshape"})," , to ES for filtering."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.code,{children:"esquery"}),", the first parameter (the column name) is used to associate with ",(0,t.jsx)(n.code,{children:"index"}),", while the second parameter is the JSON expression of basic ",(0,t.jsx)(n.code,{children:"Query DSL"})," in ES, which is surrounded by ",(0,t.jsx)(n.code,{children:"{}"}),". The ",(0,t.jsx)(n.code,{children:"root key"})," in JSON is unique, which can be ",(0,t.jsx)(n.code,{children:"match_phrase"}),", ",(0,t.jsx)(n.code,{children:"geo_shape"})," or ",(0,t.jsx)(n.code,{children:"bool"})," , etc."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"match_phrase"})," query:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'select * from es_table where esquery(k4, \'{\n        "match_phrase": {\n           "k4": "doris on es"\n        }\n    }\');\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"geo"})," query:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'select * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n'})}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"bool"})," query:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'select * from es_table where esquery(k4, \' {\n         "bool": {\n            "must": [\n               {\n                  "terms": {\n                     "k1": [\n                        11,\n                        12\n                     ]\n                  }\n               },\n               {\n                  "terms": {\n                     "k2": [\n                        100\n                     ]\n                  }\n               }\n            ]\n         }\n      }\');\n'})}),"\n",(0,t.jsx)(n.h3,{id:"suggestions-for-time-fields",children:"Suggestions for Time Fields"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"These are only applicable for ES external tables. Time fields will be automatically mapped to Date or Datetime type in ES Catalogs."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"ES boasts flexible usage of time fields, but in ES external tables, improper type setting of time fields will result in predicate pushdown failures."}),"\n",(0,t.jsx)(n.p,{children:"It is recommended to allow the highest level of format compatibility for time fields when creating an index:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:' "dt": {\n     "type": "date",\n     "format": "yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||epoch_millis"\n }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["When creating this field in Doris, it is recommended to set its type to ",(0,t.jsx)(n.code,{children:"date"})," or ",(0,t.jsx)(n.code,{children:"datetime"}),"  (or ",(0,t.jsx)(n.code,{children:"varchar"})," ) . You can use the following SQL statements to push the filters down to ES."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"select * from doe where k2 > '2020-06-21';\n\nselect * from doe where k2 < '2020-06-21 12:00:00'; \n\nselect * from doe where k2 < 1593497011; \n\nselect * from doe where k2 < now();\n\nselect * from doe where k2 < date_format(now(), '%Y-%m-%d');\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The default format of time fields in ES is:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"strict_date_optional_time||epoch_millis\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Timestamps ingested into ES need to be converted into ",(0,t.jsx)(n.code,{children:"ms"}),", which is the internal processing format in ES; otherwise errors will occur in ES external tables."]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"obtain-es-metadata-field-_id",children:["Obtain ES Metadata Field ",(0,t.jsx)(n.code,{children:"_id"})]}),"\n",(0,t.jsxs)(n.p,{children:["Each ingested files, if not specified with an  ",(0,t.jsx)(n.code,{children:"_id"})," , will be given a globally unique ",(0,t.jsx)(n.code,{children:"_id"}),", which is the primary key. Users can assign an ",(0,t.jsx)(n.code,{children:"_id"}),"  with unique business meanings to the files during ingestion."]}),"\n",(0,t.jsxs)(n.p,{children:["To obtain such field values from ES external tables, you can add an ",(0,t.jsx)(n.code,{children:"_id"}),"  field of ",(0,t.jsx)(n.code,{children:"varchar"}),"  type when creating tables."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'CREATE EXTERNAL TABLE `doe` (\n  `_id` varchar COMMENT "",\n  `city`  varchar COMMENT ""\n) ENGINE=ELASTICSEARCH\nPROPERTIES (\n"hosts" = "http://127.0.0.1:8200",\n"user" = "root",\n"password" = "root",\n"index" = "doe"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To obtain such field values from ES Catalogs, please set ",(0,t.jsx)(n.code,{children:'"mapping_es_id" = "true"'}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Note:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"_id"}),"  field only supports ",(0,t.jsx)(n.code,{children:"="})," and ",(0,t.jsx)(n.code,{children:"in"})," filtering."]}),"\n",(0,t.jsxs)(n.li,{children:["The",(0,t.jsx)(n.code,{children:"_id"}),"  field must be of  ",(0,t.jsx)(n.code,{children:"varchar"}),"  type."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"getting-globally-ordered-query-results",children:"Getting globally ordered query results"}),"\n",(0,t.jsxs)(n.p,{children:["ES query results sorted by scores are useful in scenarios such as relevance sorting, prioritizing important content, etc. Doris querying ES pulls data according to the distribution of shards in the ES index in order to take full advantage of the MPP architecture.",(0,t.jsx)(n.br,{}),"\nIn order to get globally ordered sorting results, you need to do a single point query on ES. This can be controlled by the session variable ",(0,t.jsx)(n.code,{children:"enable_es_parallel_scroll"})," (default true).",(0,t.jsx)(n.br,{}),"\nWhen ",(0,t.jsx)(n.code,{children:"enable_es_parallel_scroll=false"})," is set, Doris will send a ",(0,t.jsx)(n.code,{children:"scroll"})," query without ",(0,t.jsx)(n.code,{children:"shard_preference"})," and ",(0,t.jsx)(n.code,{children:"sort"})," information to the ES cluster to get globally ordered results.",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.strong,{children:"Note:"})," Use with caution when the query result set is large."]}),"\n",(0,t.jsx)(n.h3,{id:"modify-the-batch-size-for-scroll-requests",children:"Modify the batch size for scroll requests."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"batch"})," of a ",(0,t.jsx)(n.code,{children:"scroll"})," request is 4064 by default, and can be changed with the session variable ",(0,t.jsx)(n.code,{children:"batch_size"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Are X-Pack authenticated ES clusters supported?"}),"\n",(0,t.jsx)(n.p,{children:"All ES clusters with HTTP Basic authentications are supported."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Why are some queries require longer response time than those in ES?"}),"\n",(0,t.jsxs)(n.p,{children:["For ",(0,t.jsx)(n.code,{children:"_count "})," queries, ES can directly read the metadata regarding the number of the specified files instead of filtering the original data. This is a huge time saver."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Can aggregation operations be pushed down?"}),"\n",(0,t.jsx)(n.p,{children:"Currently, Doris On ES does not support pushdown for aggregations such as sum, avg, and min/max. In such operations, Doris obtains all files that met the specified conditions from ES and then conducts computing internally."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"appendix",children:"Appendix"}),"\n",(0,t.jsx)(n.h3,{id:"how-doris-conducts-queries-in-es",children:"How Doris Conducts Queries in ES"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"+----------------------------------------------+\n|                                              |\n| Doris      +------------------+              |\n|            |       FE         +--------------+-------+\n|            |                  |  Request Shard Location\n|            +--+-------------+-+              |       |\n|               ^             ^                |       |\n|               |             |                |       |\n|  +-------------------+ +------------------+  |       |\n|  |            |      | |    |             |  |       |\n|  | +----------+----+ | | +--+-----------+ |  |       |\n|  | |      BE       | | | |      BE      | |  |       |\n|  | +---------------+ | | +--------------+ |  |       |\n+----------------------------------------------+       |\n   |        |          | |        |         |          |\n   |        |          | |        |         |          |\n   |    HTTP SCROLL    | |    HTTP SCROLL   |          |\n+-----------+---------------------+------------+       |\n|  |        v          | |        v         |  |       |\n|  | +------+--------+ | | +------+-------+ |  |       |\n|  | |               | | | |              | |  |       |\n|  | |   DataNode    | | | |   DataNode   +<-----------+\n|  | |               | | | |              | |  |       |\n|  | |               +<--------------------------------+\n|  | +---------------+ | | |--------------| |  |       |\n|  +-------------------+ +------------------+  |       |\n|   Same Physical Node                         |       |\n|                                              |       |\n|           +-----------------------+          |       |\n|           |                       |          |       |\n|           |      MasterNode       +<-----------------+\n| ES        |                       |          |\n|           +-----------------------+          |\n+----------------------------------------------+\n\n\n"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Doris FE sends a request to the specified host for table creation in order to obtain information about the HTTP port and the index shard allocation."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Based on the information about node and index metadata from FE, Doris generates a query plan and send it to the corresponding BE node."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Following the principle of proximity, the BE node sends request to the locally deployed ES node, and obtain data from ",(0,t.jsx)(n.code,{children:"_source"})," or ",(0,t.jsx)(n.code,{children:"docvalue"}),"  from each shard of ES index concurrently by way of ",(0,t.jsx)(n.code,{children:"HTTP Scroll"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Doris returns the computing results to the user."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var r=s(667294);let t={},i=r.createContext(t);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);