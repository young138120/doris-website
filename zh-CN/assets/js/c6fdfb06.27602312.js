"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["403903"],{414259:function(n,e,i){i.r(e),i.d(e,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>d,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"ecosystem/bi/finebi","title":"FineBI","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/ecosystem/bi/finebi.md","sourceDirName":"ecosystem/bi","slug":"/ecosystem/bi/finebi","permalink":"/zh-CN/docs/dev/ecosystem/bi/finebi","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FineBI","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Apache Superset","permalink":"/zh-CN/docs/dev/ecosystem/bi/apache-superset"},"next":{"title":"Power BI","permalink":"/zh-CN/docs/dev/ecosystem/bi/powerbi"}}'),t=i("785893"),c=i("250065");let r={title:"FineBI",language:"zh-CN"},l=void 0,d={},a=[{value:"FineBI \u4ECB\u7ECD",id:"finebi-\u4ECB\u7ECD",level:2},{value:"\u524D\u7F6E\u6761\u4EF6",id:"\u524D\u7F6E\u6761\u4EF6",level:2},{value:"\u767B\u5F55\u4E0E\u8FDE\u63A5",id:"\u767B\u5F55\u4E0E\u8FDE\u63A5",level:2},{value:"\u521B\u5EFA\u6570\u636E\u6A21\u578B",id:"\u521B\u5EFA\u6570\u636E\u6A21\u578B",level:2}];function h(n){let e={a:"a",admonition:"admonition",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,c.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"finebi-\u4ECB\u7ECD",children:"FineBI \u4ECB\u7ECD"}),"\n",(0,t.jsx)(e.p,{children:"FineBI \u662F\u4E00\u6B3E\u5546\u4E1A\u667A\u80FD\u4EA7\u54C1\uFF0C\u5176\u5177\u6709\u6570\u636E\u5904\u7406\u3001\u5373\u65F6\u5206\u6790\u3001\u591A\u7EF4\u5EA6\u5206\u6790Dashboard \u7B49\u591A\u79CD\u529F\u80FD\u7CFB\u7EDF\u67B6\u6784\uFF0CFineBI\u652F\u6301\u4E30\u5BCC\u7684\u6570\u636E\u6E90\u8FDE\u63A5\u3001\u591A\u79CD\u89C6\u56FE\u5BF9\u8868\u7684\u5206\u6790\u7BA1\u7406\u3002FineBI \u53EF\u4EE5\u987A\u5229\u652F\u6301Apache Doris \u7684\u5185\u90E8\u6570\u636E\u548C\u5916\u90E8\u6570\u636E\u7684\u5EFA\u6A21\u4E0E\u53EF\u89C6\u5316\u5904\u7406\u3002"}),"\n",(0,t.jsx)(e.h2,{id:"\u524D\u7F6E\u6761\u4EF6",children:"\u524D\u7F6E\u6761\u4EF6"}),"\n",(0,t.jsxs)(e.p,{children:["\u5B89\u88C5FineBI 5.0\u53CA\u4EE5\u4E0A\u7248\u672C\uFF0C\u4E0B\u8F7D\u94FE\u63A5\uFF1A",(0,t.jsx)(e.a,{href:"https://www.finebi.com/",children:"https://www.finebi.com/"})]}),"\n",(0,t.jsx)(e.h2,{id:"\u767B\u5F55\u4E0E\u8FDE\u63A5",children:"\u767B\u5F55\u4E0E\u8FDE\u63A5"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u521B\u5EFA\u767B\u5F55\u7684\u8D26\u6237\uFF0C\u5E76\u4F7F\u7528\u8BE5\u8D26\u6237\u767B\u5F55FineBI"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"login page",src:i(182673).Z+"",width:"686",height:"592"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsxs)(e.p,{children:["\u8FD9\u91CC\u9009\u62E9\u5185\u7F6E\u6570\u636E\u5E93\uFF0C\u82E5\u9700\u8981\u9009\u62E9\u5916\u90E8\u6570\u636E\u5E93\u914D\u7F6E\u6587\u6863\u53EF\u53C2\u8003\uFF1A",(0,t.jsx)(e.a,{href:"https://help.fanruan.com/finebi/doc-view-437.html",children:"https://help.fanruan.com/finebi/doc-view-437.html"})]}),"\n",(0,t.jsx)(e.admonition,{title:"Note",type:"info",children:(0,t.jsx)(e.p,{children:"\u8FD9\u91CC\u5EFA\u8BAE\u9009\u62E9\u5185\u7F6E\u6570\u636E\u5E93\u4F5C\u4E3A\u5E06\u8F6FBI \u7684\u4FE1\u606F\u5B58\u50A8\u5E93\uFF0C\u8FD9\u91CC\u9009\u62E9\u7684\u6570\u636E\u5E93\u7C7B\u578B\u4E0D\u662F\u67E5\u8BE2\u5206\u6790\u6570\u636E\u7684\u76EE\u6807\u5E93\uFF0C\u800C\u662F\u5B58\u50A8\u7EF4\u62A4\u5E06\u8F6FBI \u6A21\u578B\u3001\u4EEA\u8868\u76D8\u7B49\u4FE1\u606F\u7684\u6570\u636E\u5E93\uFF0C\u5E06\u8F6F\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u589E\u5220\u6539\u67E5\u7684\u64CD\u4F5C\u3002"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"select database",src:i(120782).Z+"",width:"1388",height:"684"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u70B9\u51FB\u7BA1\u7406\u7CFB\u7EDF\u6309\u94AE\u4E4B\u540E\u9009\u62E9\u6570\u636E\u8FDE\u63A5\u4E2D\u7684\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u8FDB\u800C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u5E93\u8FDE\u63A5"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"data connection",src:i(14637).Z+"",width:"2004",height:"1532"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5728\u65B0\u6570\u636E\u5E93\u8FDE\u63A5\u9009\u62E9\u754C\u9762\u9009\u62E9MySQL"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"select connection",src:i(767691).Z+"",width:"1776",height:"498"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u586B\u5199Doris\u6570\u636E\u5E93\u7684\u76F8\u5173\u8FDE\u63A5\u4FE1\u606F"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u53C2\u6570\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Username\uFF1A\u7528\u4E8E\u767B\u5F55 Doris \u96C6\u7FA4\u7684\u7528\u6237\u540D\uFF0C\u5982 admin\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Password\uFF1A\u7528\u4E8E\u767B\u5F55 Doris \u96C6\u7FA4\u7684\u7528\u6237\u5BC6\u7801\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Host\uFF1ADoris \u96C6\u7FA4\u7684 FE \u4E3B\u673A IP \u5730\u5740\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Port\uFF1ADoris \u96C6\u7FA4\u7684 FE \u67E5\u8BE2\u7AEF\u53E3\uFF0C\u5982 9030\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Coding\uFF1ADoris \u96C6\u7FA4\u4E2D\u7684\u7F16\u7801\u683C\u5F0F\u3002"}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"Name Database\uFF1ADoris \u96C6\u7FA4\u4E2D\u7684\u76EE\u6807\u6570\u636E\u5E93\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"connection information",src:i(289076).Z+"",width:"1146",height:"1590"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u70B9\u51FB\u6D4B\u8BD5\u94FE\u63A5\u3002\u5982\u679C\u8F93\u5165\u7684\u8FDE\u63A5\u4FE1\u606F\u6B63\u786E\u5219\u4F1A\u5F39\u51FA\u8FDE\u63A5\u6210\u529F"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"connection test",src:i(697867).Z+"",width:"904",height:"512"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\u521B\u5EFA\u6570\u636E\u6A21\u578B",children:"\u521B\u5EFA\u6570\u636E\u6A21\u578B"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5728\u516C\u5171\u6570\u636E\u4E2D\u70B9\u51FB\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u96C6\uFF0C\u6DFB\u52A0Doris \u6570\u636E\u96C6\u65F6\u53EF\u70B9\u51FB\u6570\u636E\u5E93\u8868"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"new dataset",src:i(942666).Z+"",width:"746",height:"624"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u9009\u62E9\u5DF2\u6709\u6570\u636E\u5E93\u8FDE\u63A5\u4E0B\u9700\u8981\u5BFC\u5165\u7684\u8868"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"select table",src:i(821545).Z+"",width:"2260",height:"500"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5BFC\u5165\u8868\u540E\u9700\u8981\u5BF9\u6BCF\u4E2A\u5BFC\u5165\u7684\u8868\u8FDB\u884C\u5237\u65B0\uFF0C\u53EA\u6709\u5237\u65B0\u540E\u624D\u53EF\u4EE5\u5728\u4E3B\u9898\u4E2D\u5BF9\u8BE5\u8868\u8FDB\u884C\u6570\u636E\u5206\u6790"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"refresh table",src:i(770757).Z+"",width:"3650",height:"1330"})}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:"\u5728\u7F16\u8F91\u7684\u4E3B\u9898\u4E2D\u6DFB\u52A0\u5BFC\u5165\u7684\u516C\u5171\u6570\u636E\uFF0C\u7136\u540E\u5373\u53EF\u6309\u7167\u4E1A\u52A1\u903B\u8F91\u8FDB\u884C\u7F57\u76D8\u5206\u6790\u4E0E\u914D\u7F6E\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"data analysis",src:i(531430).Z+"",width:"2802",height:"1526"})}),"\n"]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},182673:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-1-9ac6bf2a297df74354404c35d165b808.png"},531430:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-10-c858dee55fb99605ce13fc9a2d4f13b5.png"},120782:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-2-8f7c241a6c82537184e7502da96f8f0c.png"},14637:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-3-5ad1b290c79c275e001177c25b3d5886.png"},767691:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-4-3c85ea98da3aaa21519a5b69f2fefd8f.png"},289076:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-5-b0f6e1937605cd3847029b45bbee0273.png"},697867:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-6-bf862861654bdb2dd749e42c30dbe853.png"},942666:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-7-a6ead2e4bfeda94e238c92e7a15176fb.png"},821545:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-8-5b7da0640bfd0008f511b9e9d97be0ad.png"},770757:function(n,e,i){i.d(e,{Z:function(){return s}});let s=i.p+"assets/images/bi-finebi-en-9-81e4d1fc59ad09d95d6f0a6b05127339.png"},250065:function(n,e,i){i.d(e,{Z:function(){return l},a:function(){return r}});var s=i(667294);let t={},c=s.createContext(t);function r(n){let e=s.useContext(c);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(c.Provider,{value:e},n.children)}}}]);