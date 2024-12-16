"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["679749"],{248534:function(e,r,o){o.r(r),o.d(r,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>m,toc:()=>l,frontMatter:()=>n});var t=JSON.parse('{"id":"admin-manual/memory-management/memory-analysis/oom-crash-analysis","title":"OOM Killer Crash Analysis","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/memory-management/memory-analysis/oom-crash-analysis.md","sourceDirName":"admin-manual/memory-management/memory-analysis","slug":"/admin-manual/memory-management/memory-analysis/oom-crash-analysis","permalink":"/docs/admin-manual/memory-management/memory-analysis/oom-crash-analysis","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"OOM Killer Crash Analysis","language":"en"},"sidebar":"docs","previous":{"title":"Query error Memory Tracker Limit Exceeded","permalink":"/docs/admin-manual/memory-management/memory-analysis/query-cancelled-after-query-memory-exceeded"},"next":{"title":"Memory Log Analysis","permalink":"/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis"}}'),a=o("785893"),s=o("250065");let n={title:"OOM Killer Crash Analysis",language:"en"},i=void 0,m={},l=[{value:"Find the memory log before the OOM Killer is triggered",id:"find-the-memory-log-before-the-oom-killer-is-triggered",level:2},{value:"Excessive cluster memory pressure triggers OOM Killer",id:"excessive-cluster-memory-pressure-triggers-oom-killer",level:2},{value:"Some abnormal problems trigger OOM Killer",id:"some-abnormal-problems-trigger-oom-killer",level:2},{value:"Memory Tracker Statistics Missing",id:"memory-tracker-statistics-missing",level:3},{value:"Query Cancel stuck",id:"query-cancel-stuck",level:3},{value:"Jemalloc Metadata has a large memory footprint",id:"jemalloc-metadata-has-a-large-memory-footprint",level:3},{value:"Jemalloc Cache has a large memory footprint",id:"jemalloc-cache-has-a-large-memory-footprint",level:3}];function c(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["If there is no error message in ",(0,a.jsx)(r.code,{children:"log/be.out"})," after the BE process crashes, execute ",(0,a.jsx)(r.code,{children:"dmesg -T"}),". If you see the following log, it means that the OOM Killer has been triggered. It can be seen that at ",(0,a.jsx)(r.code,{children:"20240718 15:03:59"}),", the physical memory (anon-rss) of the doris_be process with pid 360303 is about 60 GB."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{children:"[Thu Jul 18 15:03:59 2024] Out of memory: Killed process 360303 (doris_be) total-vm:213416916kB, anon-rss:62273128kB, file-rss:0kB, shmem-rss:0kB, UID:0 pgtables:337048kB oom_score_adj:0\n"})}),"\n",(0,a.jsx)(r.p,{children:"Ideally, Doris will regularly detect the remaining available memory of the operating system, and take a series of actions including blocking subsequent memory requests and triggering memory GC to avoid triggering OOM Killer when memory is insufficient. However, refreshing memory status and memory GC have a certain lag, and it is difficult to completely catch all large memory requests. When the cluster pressure is too high, there is still a certain probability of triggering OOM Killer, causing the BE process to crash. In addition, if the memory status of the process is abnormal, the memory GC cannot release the memory, resulting in a decrease in the actual available memory of the process, which will increase the memory pressure of the cluster."}),"\n",(0,a.jsx)(r.p,{children:"If the OOM Killer is triggered, first analyze the memory status and task execution of the BE process before the OOM Killer is triggered based on the log, and then adjust the parameters in a targeted manner to restore the cluster to stability."}),"\n",(0,a.jsx)(r.h2,{id:"find-the-memory-log-before-the-oom-killer-is-triggered",children:"Find the memory log before the OOM Killer is triggered"}),"\n",(0,a.jsxs)(r.p,{children:["When the OOM Killer is triggered, it means that the process has insufficient available memory. Refer to ",(0,a.jsx)(r.a,{href:"/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis",children:"Memory Log Analysis"})," to find the last printed ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," keyword from bottom to top at the time when the OOM Killer is triggered in ",(0,a.jsx)(r.code,{children:"be/log/be.INFO"})," and analyze the main memory location of the BE process."]}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"less be/log/be.INFO"})," After opening the file, first jump to the log corresponding to the time when OOM Killer was triggered. Taking the result of ",(0,a.jsx)(r.code,{children:"dmesg -T"})," above as an example, enter ",(0,a.jsx)(r.code,{children:"/20240718 15:03:59"})," and press Enter to search for the corresponding time. If it cannot be found, it may be that the time when OOM Killer was triggered is somewhat deviated. You can search for ",(0,a.jsx)(r.code,{children:"/20240718 15:03:"}),". After the log jumps to the corresponding time, enter ",(0,a.jsx)(r.code,{children:"/Memory Tracker Summary"})," and press Enter to search for keywords. By default, it will search downward in the log. If it cannot be found or the time does not match, you need to press ",(0,a.jsx)(r.code,{children:"shift + n"})," to search upward first to find the last printed ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," and the ",(0,a.jsx)(r.code,{children:"Process Memory Summary"})," memory logs printed at the same time."]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"excessive-cluster-memory-pressure-triggers-oom-killer",children:"Excessive cluster memory pressure triggers OOM Killer"}),"\n",(0,a.jsx)(r.p,{children:"If the following phenomenon is met, it can be considered that the cluster memory pressure is too high, resulting in the process memory status not being refreshed in time at a certain moment, and the memory GC failing to release the memory in time, resulting in the failure to effectively control the BE process memory."}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Before Doris 2.1, Memory GC was not perfect, and when the memory was constantly tight, it was often easier to trigger the OOM Killer."}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Analysis of ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," found that the memory usage of queries and other tasks, various caches, metadata, etc. is reasonable."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"BE process memory monitoring in the corresponding time period shows that the memory usage rate is maintained at a high level for a long time, and there is no sign of memory leak"}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsxs)(r.p,{children:["Locate the memory log before the OOM Killer time point in ",(0,a.jsx)(r.code,{children:"be/log/be.INFO"}),", search the ",(0,a.jsx)(r.code,{children:"GC"})," keyword from bottom to top, and find that the BE process frequently executes memory GC."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["At this time, refer to ",(0,a.jsx)(r.a,{href:"/docs/admin-manual/config/be-config",children:"BE Configuration Items"})," to reduce ",(0,a.jsx)(r.code,{children:"mem_limit"})," and increase ",(0,a.jsx)(r.code,{children:"max_sys_mem_available_low_water_mark_bytes"})," in ",(0,a.jsx)(r.code,{children:"be/conf/be.conf"}),". For more information about memory limits, watermark calculation methods, and memory GC, see ",(0,a.jsx)(r.a,{href:"/docs/admin-manual/memory-management/memory-feature/memory-control-strategy",children:"Memory Control Strategy"}),"."]}),"\n",(0,a.jsxs)(r.p,{children:["In addition, other parameters can be adjusted to control memory status refresh and GC, including ",(0,a.jsx)(r.code,{children:"memory_gc_sleep_time_ms"}),", ",(0,a.jsx)(r.code,{children:"soft_mem_limit_frac"}),", ",(0,a.jsx)(r.code,{children:"memory_maintenance_sleep_time_ms"}),", ",(0,a.jsx)(r.code,{children:"process_minor_gc_size"}),", ",(0,a.jsx)(r.code,{children:"process_full_gc_size"}),", ",(0,a.jsx)(r.code,{children:"enable_query_memory_overcommit"}),", ",(0,a.jsx)(r.code,{children:"thread_wait_gc_max_milliseconds"}),", etc."]}),"\n",(0,a.jsx)(r.h2,{id:"some-abnormal-problems-trigger-oom-killer",children:"Some abnormal problems trigger OOM Killer"}),"\n",(0,a.jsx)(r.p,{children:"If the cluster memory pressure is too high, the memory status may be abnormal at this time, and the memory GC may not be able to release the memory in time. The following are some common abnormal problems that trigger OOM Killer."}),"\n",(0,a.jsx)(r.h3,{id:"memory-tracker-statistics-missing",children:"Memory Tracker Statistics Missing"}),"\n",(0,a.jsxs)(r.p,{children:["If the difference between ",(0,a.jsx)(r.code,{children:"Label=process resident memory"})," Memory Tracker and ",(0,a.jsx)(r.code,{children:"Label=sum of all trackers"})," Memory Tracker in the log ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," is large, or the Orphan Memory Tracker value is too large, it means that there is a statistical missing in the Memory Tracker. Refer to the [Memory Tracker Statistics Missing] section in ",(0,a.jsx)(r.a,{href:"/docs/admin-manual/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"})," for further analysis."]}),"\n",(0,a.jsx)(r.h3,{id:"query-cancel-stuck",children:"Query Cancel stuck"}),"\n",(0,a.jsxs)(r.p,{children:["Locate the time point of OOM Killer in the ",(0,a.jsx)(r.code,{children:"be/log/be.INFO"})," log, and then search ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"})," in the context to find the process memory statistics log. If there is a query that uses a large amount of memory in the ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"}),", execute ",(0,a.jsx)(r.code,{children:"grep {queryID} be/log/be.INFO"})," to confirm whether there is a log with the keyword ",(0,a.jsx)(r.code,{children:"Cancel"}),". The corresponding time point is the time when the query was canceled. If the query has been canceled, and the time point when the query was canceled is a long time away from the time point when the OOM Killer was triggered, refer to the analysis of [Query Cancel process stuck] in ",(0,a.jsx)(r.a,{href:"./memory-issue-faq.md",children:"Memory Problem FAQ"}),". For analysis of ",(0,a.jsx)(r.code,{children:"Memory Tracker Summary"}),", refer to ",(0,a.jsx)(r.a,{href:"/docs/admin-manual/memory-management/memory-analysis/memory-log-analysis",children:"Memory Log Analysis"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"jemalloc-metadata-has-a-large-memory-footprint",children:"Jemalloc Metadata has a large memory footprint"}),"\n",(0,a.jsxs)(r.p,{children:["Memory GC currently cannot release Jemalloc Metadata. Refer to the analysis of ",(0,a.jsx)(r.code,{children:"Label=tc/jemalloc_metadata"})," Memory Tracker in ",(0,a.jsx)(r.a,{href:"/docs/admin-manual/memory-management/memory-feature/memory-tracker",children:"Memory Tracker"})," to reduce memory usage."]}),"\n",(0,a.jsx)(r.h3,{id:"jemalloc-cache-has-a-large-memory-footprint",children:"Jemalloc Cache has a large memory footprint"}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"Common in Doris 2.0"}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["The default value of ",(0,a.jsx)(r.code,{children:"lg_tcache_max"})," in ",(0,a.jsx)(r.code,{children:"JEMALLOC_CONF"})," in ",(0,a.jsx)(r.code,{children:"be.conf"})," of Doris 2.0 is 20, which will cause the Jemalloc Cache to be too large and unable to be automatically released in some scenarios. Refer to ",(0,a.jsx)(r.a,{href:"/docs/admin-manual/memory-management/memory-analysis/jemalloc-memory-analysis",children:"Jemalloc Memory Analysis"})," to reduce the memory footprint of Jemalloc Cache."]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return n}});var t=o(667294);let a={},s=t.createContext(a);function n(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);