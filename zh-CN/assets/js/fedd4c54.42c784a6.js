"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["419028"],{556526:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>x,assets:()=>o,toc:()=>h,frontMatter:()=>r});var s=JSON.parse('{"id":"admin-manual/auth/ldap","title":"\u57FA\u4E8E LDAP \u7684\u7528\u6237\u8BA4\u8BC1","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/auth/ldap.md","sourceDirName":"admin-manual/auth","slug":"/admin-manual/auth/ldap","permalink":"/zh-CN/docs/admin-manual/auth/ldap","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u57FA\u4E8E LDAP \u7684\u7528\u6237\u8BA4\u8BC1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u8BA4\u8BC1\u548C\u9274\u6743","permalink":"/zh-CN/docs/admin-manual/auth/authentication-and-authorization"},"next":{"title":"\u57FA\u4E8E Apache Ranger \u7684\u9274\u6743\u7BA1\u7406","permalink":"/zh-CN/docs/admin-manual/auth/ranger"}}'),d=l("785893"),i=l("250065");let r={title:"\u57FA\u4E8E LDAP \u7684\u7528\u6237\u8BA4\u8BC1",language:"zh-CN"},c="LDAP",o={},h=[{value:"\u540D\u8BCD\u89E3\u91CA",id:"\u540D\u8BCD\u89E3\u91CA",level:2},{value:"LDAP \u76F8\u5173\u6982\u5FF5",id:"ldap-\u76F8\u5173\u6982\u5FF5",level:2},{value:"\u793A\u4F8B\uFF08\u4E0B\u6587\u7684\u4ECB\u7ECD\u90FD\u5C06\u6839\u636E\u8FD9\u4E2A\u4F8B\u5B50\u8FDB\u884C\u5C55\u5F00\uFF09",id:"\u793A\u4F8B\u4E0B\u6587\u7684\u4ECB\u7ECD\u90FD\u5C06\u6839\u636E\u8FD9\u4E2A\u4F8B\u5B50\u8FDB\u884C\u5C55\u5F00",level:3},{value:"LDAP \u540D\u8BCD\u89E3\u91CA",id:"ldap-\u540D\u8BCD\u89E3\u91CA",level:3},{value:"\u542F\u7528 LDAP \u8BA4\u8BC1",id:"\u542F\u7528-ldap-\u8BA4\u8BC1",level:2},{value:"server \u7AEF\u914D\u7F6E",id:"server-\u7AEF\u914D\u7F6E",level:3},{value:"\u914D\u7F6E <code>fe/conf/ldap.conf</code> \u6587\u4EF6",id:"\u914D\u7F6E-feconfldapconf-\u6587\u4EF6",level:4},{value:"\u8BBE\u7F6E LDAP \u7BA1\u7406\u5458\u5BC6\u7801",id:"\u8BBE\u7F6E-ldap-\u7BA1\u7406\u5458\u5BC6\u7801",level:4},{value:"Client \u7AEF\u914D\u7F6E",id:"client-\u7AEF\u914D\u7F6E",level:3},{value:"MySql Client",id:"mysql-client",level:4},{value:"Jdbc Client",id:"jdbc-client",level:4},{value:"LDAP \u8BA4\u8BC1\u8BE6\u89E3",id:"ldap-\u8BA4\u8BC1\u8BE6\u89E3",level:2},{value:"LDAP \u9A8C\u8BC1\u767B\u5F55\u8BE6\u89E3",id:"ldap-\u9A8C\u8BC1\u767B\u5F55\u8BE6\u89E3",level:3},{value:"LDAP \u7EC4\u6388\u6743\u8BE6\u89E3",id:"ldap-\u7EC4\u6388\u6743\u8BE6\u89E3",level:3},{value:"LDAP \u4FE1\u606F\u7F13\u5B58",id:"ldap-\u4FE1\u606F\u7F13\u5B58",level:3},{value:"LDAP \u9A8C\u8BC1\u7684\u5C40\u9650",id:"ldap-\u9A8C\u8BC1\u7684\u5C40\u9650",level:2},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function a(n){let e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.header,{children:(0,d.jsx)(e.h1,{id:"ldap",children:"LDAP"})}),"\n",(0,d.jsx)(e.p,{children:"\u63A5\u5165\u7B2C\u4E09\u65B9 LDAP \u670D\u52A1\u4E3A Doris \u63D0\u4F9B\u9A8C\u8BC1\u767B\u5F55\u548C\u7EC4\u6388\u6743\u670D\u52A1\u3002"}),"\n",(0,d.jsx)(e.p,{children:"LDAP \u9A8C\u8BC1\u767B\u5F55\u6307\u7684\u662F\u63A5\u5165 LDAP \u670D\u52A1\u7684\u5BC6\u7801\u9A8C\u8BC1\u6765\u8865\u5145 Doris \u7684\u9A8C\u8BC1\u767B\u5F55\u3002Doris \u4F18\u5148\u4F7F\u7528 LDAP \u9A8C\u8BC1\u7528\u6237\u5BC6\u7801\uFF0C\u5982\u679C LDAP \u670D\u52A1\u4E2D\u4E0D\u5B58\u5728\u8BE5\u7528\u6237\u5219\u7EE7\u7EED\u4F7F\u7528 Doris \u9A8C\u8BC1\u5BC6\u7801\uFF0C\u5982\u679C LDAP \u5BC6\u7801\u6B63\u786E\u4F46\u662F Doris \u4E2D\u6CA1\u6709\u5BF9\u5E94\u8D26\u6237\u5219\u521B\u5EFA\u4E34\u65F6\u7528\u6237\u767B\u5F55 Doris\u3002"}),"\n",(0,d.jsx)(e.p,{children:"LDAP \u7EC4\u6388\u6743\u662F\u5C06 LDAP \u4E2D\u7684 group \u6620\u5C04\u5230 Doris \u4E2D\u7684 Role\uFF0C\u5982\u679C\u7528\u6237\u5728 LDAP \u4E2D\u5C5E\u4E8E\u591A\u4E2A\u7528\u6237\u7EC4\uFF0C\u767B\u5F55 Doris \u540E\u7528\u6237\u5C06\u83B7\u5F97\u6240\u6709\u7EC4\u5BF9\u5E94 Role \u7684\u6743\u9650\uFF0C\u8981\u6C42\u7EC4\u540D\u4E0E Role \u540D\u5B57\u76F8\u540C\u3002"}),"\n",(0,d.jsx)(e.h2,{id:"\u540D\u8BCD\u89E3\u91CA",children:"\u540D\u8BCD\u89E3\u91CA"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"LDAP\uFF1A\u8F7B\u91CF\u7EA7\u76EE\u5F55\u8BBF\u95EE\u534F\u8BAE\uFF0C\u80FD\u591F\u5B9E\u73B0\u8D26\u53F7\u5BC6\u7801\u7684\u96C6\u4E2D\u7BA1\u7406\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u6743\u9650 Privilege\uFF1A\u6743\u9650\u4F5C\u7528\u7684\u5BF9\u8C61\u662F\u8282\u70B9\u3001\u6570\u636E\u5E93\u6216\u8868\u3002\u4E0D\u540C\u7684\u6743\u9650\u4EE3\u8868\u4E0D\u540C\u7684\u64CD\u4F5C\u8BB8\u53EF\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u89D2\u8272 Role\uFF1ADoris \u53EF\u4EE5\u521B\u5EFA\u81EA\u5B9A\u4E49\u547D\u540D\u7684\u89D2\u8272\u3002\u89D2\u8272\u53EF\u4EE5\u88AB\u770B\u505A\u662F\u4E00\u7EC4\u6743\u9650\u7684\u96C6\u5408\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"ldap-\u76F8\u5173\u6982\u5FF5",children:"LDAP \u76F8\u5173\u6982\u5FF5"}),"\n",(0,d.jsx)(e.p,{children:"\u5728 LDAP \u4E2D\uFF0C\u6570\u636E\u662F\u6309\u7167\u6811\u578B\u7ED3\u6784\u7EC4\u7EC7\u7684\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"\u793A\u4F8B\u4E0B\u6587\u7684\u4ECB\u7ECD\u90FD\u5C06\u6839\u636E\u8FD9\u4E2A\u4F8B\u5B50\u8FDB\u884C\u5C55\u5F00",children:"\u793A\u4F8B\uFF08\u4E0B\u6587\u7684\u4ECB\u7ECD\u90FD\u5C06\u6839\u636E\u8FD9\u4E2A\u4F8B\u5B50\u8FDB\u884C\u5C55\u5F00\uFF09"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{children:"- dc=example,dc=com\n - ou = ou1\n   - cn = group1\n   - cn = user1\n - ou = ou2\n   - cn = group2\n     - cn = user2\n - cn = user3\n"})}),"\n",(0,d.jsx)(e.h3,{id:"ldap-\u540D\u8BCD\u89E3\u91CA",children:"LDAP \u540D\u8BCD\u89E3\u91CA"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"dc(Domain Component): \u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A\u7EC4\u7EC7\u7684\u57DF\u540D\uFF0C\u4F5C\u4E3A\u6811\u7684\u6839\u7ED3\u70B9"}),"\n",(0,d.jsx)(e.li,{children:"dn(Distinguished Name): \u76F8\u5F53\u4E8E\u552F\u4E00\u540D\u79F0\uFF0C\u4F8B\u5982 user1 \u7684 dn \u4E3A cn=user1,ou=ou1,dc=example,dc=com user2 \u7684 dn \u4E3A cn=user2,cn=group2,ou=ou2,dc=example,dc=com"}),"\n",(0,d.jsx)(e.li,{children:"rdn(Relative Distinguished Name): dn \u7684\u4E00\u90E8\u5206\uFF0Cuser1 \u7684\u56DB\u4E2A rdn \u4E3A cn=user1 ou=ou1 dc=example \u548C dc=com"}),"\n",(0,d.jsx)(e.li,{children:"ou(Organization Unit): \u53EF\u4EE5\u7406\u89E3\u4E3A\u5B50\u7EC4\u7EC7\uFF0Cuser \u53EF\u4EE5\u653E\u5728 ou \u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u653E\u5728 example.com \u57DF\u4E2D"}),"\n",(0,d.jsx)(e.li,{children:"cn(common name):\u540D\u5B57"}),"\n",(0,d.jsx)(e.li,{children:"group: \u7EC4\uFF0C\u53EF\u4EE5\u7406\u89E3\u4E3A doris \u7684\u89D2\u8272"}),"\n",(0,d.jsx)(e.li,{children:"user: \u7528\u6237\uFF0C\u548C doris \u7684\u7528\u6237\u7B49\u4EF7"}),"\n",(0,d.jsx)(e.li,{children:"objectClass\uFF1A\u53EF\u4EE5\u7406\u89E3\u4E3A\u6BCF\u884C\u6570\u636E\u7684\u7C7B\u578B\uFF0C\u6BD4\u5982\u600E\u4E48\u533A\u5206 group1 \u662F group \u8FD8\u662F user\uFF0C\u6BCF\u79CD\u7C7B\u578B\u7684\u6570\u636E\u4E0B\u9762\u8981\u6C42\u6709\u4E0D\u540C\u7684\u5C5E\u6027\uFF0C\u6BD4\u5982 group \u8981\u6C42\u6709 cn \u548C member\uFF08user \u5217\u8868\uFF09\uFF0Cuser \u8981\u6C42\u6709 cn,password,uid \u7B49"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u542F\u7528-ldap-\u8BA4\u8BC1",children:"\u542F\u7528 LDAP \u8BA4\u8BC1"}),"\n",(0,d.jsx)(e.h3,{id:"server-\u7AEF\u914D\u7F6E",children:"server \u7AEF\u914D\u7F6E"}),"\n",(0,d.jsxs)(e.p,{children:["\u5728",(0,d.jsx)(e.code,{children:"fe/conf/fe.conf"})," \u6587\u4EF6\u4E2D\u914D\u7F6E\u8BA4\u8BC1\u65B9\u5F0F\u4E3Aldap ",(0,d.jsx)(e.code,{children:"authentication_type=ldap"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5728 ",(0,d.jsx)(e.code,{children:"fe/conf/ldap.conf"})," \u6587\u4EF6\u4E2D\u914D\u7F6E LDAP \u57FA\u672C\u4FE1\u606F\uFF0C"]}),"\n",(0,d.jsx)(e.p,{children:"\u53E6\u6709 LDAP \u7BA1\u7406\u5458\u5BC6\u7801\u9700\u8981\u4F7F\u7528 sql \u8BED\u53E5\u8FDB\u884C\u8BBE\u7F6E\u3002"}),"\n",(0,d.jsxs)(e.h4,{id:"\u914D\u7F6E-feconfldapconf-\u6587\u4EF6",children:["\u914D\u7F6E ",(0,d.jsx)(e.code,{children:"fe/conf/ldap.conf"})," \u6587\u4EF6"]}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_host = 127.0.0.1"})}),"\n",(0,d.jsx)(e.p,{children:"LDAP \u670D\u52A1 ip\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_port = 389"})}),"\n",(0,d.jsx)(e.p,{children:"LDAP \u670D\u52A1\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u660E\u6587\u4F20\u8F93\u7AEF\u53E3\u4E3A 389\uFF0C\u76EE\u524D Doris \u7684 LDAP \u529F\u80FD\u4EC5\u652F\u6301\u660E\u6587\u5BC6\u7801\u4F20\u8F93\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_admin_name = cn=admin,dc=domain,dc=com"})}),"\n",(0,d.jsx)(e.p,{children:"LDAP \u7BA1\u7406\u5458\u8D26\u6237\u201CDistinguished Name\u201D\u3002\u5F53\u7528\u6237\u4F7F\u7528 LDAP \u9A8C\u8BC1\u767B\u5F55 Doris \u65F6\uFF0CDoris \u4F1A\u7ED1\u5B9A\u8BE5\u7BA1\u7406\u5458\u8D26\u6237\u5728 LDAP \u4E2D\u641C\u7D22\u7528\u6237\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_user_basedn = ou=people,dc=domain,dc=com"})}),"\n",(0,d.jsx)(e.p,{children:"Doris \u5728 LDAP \u4E2D\u641C\u7D22\u7528\u6237\u4FE1\u606F\u65F6\u7684 base dn\uFF0C\u4F8B\u5982\u53EA\u5141\u8BB8\u4E0A\u4F8B\u4E2D\u7684 user2 \u767B\u9646 doris\uFF0C\u6B64\u5904\u914D\u7F6E\u4E3A ou=ou2,dc=example,dc=com \u5982\u679C\u5141\u8BB8\u4E0A\u4F8B\u4E2D\u7684 user1,user2,user3 \u90FD\u80FD\u767B\u9646 doris\uFF0C\u6B64\u5904\u914D\u7F6E\u4E3A dc=example,dc=com"}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_user_filter = (&(uid={login}))"})}),"\n",(0,d.jsxs)(e.p,{children:["Doris \u5728 LDAP \u4E2D\u641C\u7D22\u7528\u6237\u4FE1\u606F\u65F6\u7684\u8FC7\u6EE4\u6761\u4EF6\uFF0C\u5360\u4F4D\u7B26 ",(0,d.jsx)(e.code,{children:"{login}"})," \u4F1A\u88AB\u66FF\u6362\u4E3A\u767B\u5F55\u7528\u6237\u540D\u3002\u5FC5\u987B\u4FDD\u8BC1\u901A\u8FC7\u8BE5\u8FC7\u6EE4\u6761\u4EF6\u641C\u7D22\u7684\u7528\u6237\u552F\u4E00\uFF0C\u5426\u5219 Doris \u65E0\u6CD5\u901A\u8FC7 LDAP \u9A8C\u8BC1\u5BC6\u7801\uFF0C\u767B\u5F55\u65F6\u4F1A\u51FA\u73B0 ",(0,d.jsx)(e.code,{children:"ERROR 5081 (42000): user is not unique in LDAP server."})," \u7684\u9519\u8BEF\u4FE1\u606F\u3002"]}),"\n",(0,d.jsx)(e.p,{children:"\u4F8B\u5982\u4F7F\u7528 LDAP \u7528\u6237\u8282\u70B9 uid \u5C5E\u6027\u4F5C\u4E3A\u767B\u5F55 Doris \u7684\u7528\u6237\u540D\u53EF\u4EE5\u914D\u7F6E\u8BE5\u9879\u4E3A\uFF1A"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_user_filter = (&(uid={login}))"})}),"\n",(0,d.jsx)(e.p,{children:"\u4F7F\u7528 LDAP \u7528\u6237\u90AE\u7BB1\u524D\u7F00\u4F5C\u4E3A\u7528\u6237\u540D\u53EF\u914D\u7F6E\u8BE5\u9879\uFF1A"}),"\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_user_filter = (&(mail={login}@baidu.com))"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:(0,d.jsx)(e.code,{children:"ldap_group_basedn = ou=group,dc=domain,dc=com"})}),"\n",(0,d.jsxs)(e.p,{children:["Doris \u5728 LDAP \u4E2D\u641C\u7D22\u7EC4\u4FE1\u606F\u65F6\u7684 base dn\u3002\u5982\u679C\u4E0D\u914D\u7F6E\u8BE5\u9879\uFF0C\u5C06\u4E0D\u542F\u7528 LDAP \u7EC4\u6388\u6743\u3002\u540C ",(0,d.jsx)(e.code,{children:"ldap_user_basedn"})," \u7C7B\u4F3C\uFF0C\u9650\u5236 doris \u641C\u7D22 group \u65F6\u7684\u8303\u56F4\u3002"]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h4,{id:"\u8BBE\u7F6E-ldap-\u7BA1\u7406\u5458\u5BC6\u7801",children:"\u8BBE\u7F6E LDAP \u7BA1\u7406\u5458\u5BC6\u7801"}),"\n",(0,d.jsx)(e.p,{children:"\u914D\u7F6E\u597D ldap.conf \u6587\u4EF6\u540E\u542F\u52A8 fe\uFF0C\u4F7F\u7528 root \u6216 admin \u8D26\u53F7\u767B\u5F55 Doris\uFF0C\u6267\u884C sql\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:"set ldap_admin_password = password('ldap_admin_password');\n"})}),"\n",(0,d.jsx)(e.h3,{id:"client-\u7AEF\u914D\u7F6E",children:"Client \u7AEF\u914D\u7F6E"}),"\n",(0,d.jsx)(e.h4,{id:"mysql-client",children:"MySql Client"}),"\n",(0,d.jsx)(e.p,{children:"\u5BA2\u6237\u7AEF\u4F7F\u7528 LDAP \u9A8C\u8BC1\u9700\u8981\u542F\u7528 mysql \u5BA2\u6237\u7AEF\u660E\u6587\u9A8C\u8BC1\u63D2\u4EF6\uFF0C\u4F7F\u7528\u547D\u4EE4\u884C\u767B\u5F55 Doris \u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u4E24\u79CD\u65B9\u5F0F\u4E4B\u4E00\u542F\u7528 mysql \u660E\u6587\u9A8C\u8BC1\u63D2\u4EF6\uFF1A"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:["\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF ",(0,d.jsx)(e.code,{children:"LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN"})," \u503C 1"]}),"\n",(0,d.jsx)(e.p,{children:"\u4F8B\u5982\u5728 linux \u6216\u8005 mac \u73AF\u5883\u4E2D\u53EF\u4EE5\u4F7F\u7528\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:'echo "export LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1" >> \uFF5E/.bash_profile && source \uFF5E/.bash_profile\n'})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsxs)(e.p,{children:["\u6BCF\u6B21\u767B\u5F55 Doris \u65F6\u6DFB\u52A0\u53C2\u6570 ",(0,d.jsx)(e.code,{children:"--enable-cleartext-plugin"})]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"mysql -hDORIS_HOST -PDORIS_PORT -u user -p --enable-cleartext-plugin\n\n\u8F93\u5165 ldap \u5BC6\u7801\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h4,{id:"jdbc-client",children:"Jdbc Client"}),"\n",(0,d.jsx)(e.p,{children:"\u4F7F\u7528 Jdbc Client \u767B\u5F55 Doris \u65F6\uFF0C\u9700\u8981\u81EA\u5B9A\u4E49 plugin\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u9996\u5148\uFF0C\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A MysqlClearPasswordPluginWithoutSSL \u7684\u7C7B\uFF0C\u7EE7\u627F\u81EA MysqlClearPasswordPlugin\u3002\u5728\u8BE5\u7C7B\u4E2D\uFF0C\u91CD\u5199 requiresConfidentiality() \u65B9\u6CD5\uFF0C\u5E76\u8FD4\u56DE false\u3002"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-java",children:"public class MysqlClearPasswordPluginWithoutSSL extends MysqlClearPasswordPlugin {\n@Override  \npublic boolean requiresConfidentiality() {\n    return false;\n  }\n}\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u5728\u83B7\u53D6\u6570\u636E\u5E93\u8FDE\u63A5\u65F6\uFF0C\u9700\u8981\u5C06\u81EA\u5B9A\u4E49\u7684 plugin \u914D\u7F6E\u5230\u5C5E\u6027\u4E2D"}),"\n",(0,d.jsx)(e.p,{children:"\u5373\uFF08xxx \u4E3A\u81EA\u5B9A\u4E49\u7C7B\u7684\u5305\u540D\uFF09"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"authenticationPlugins=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL"}),"\n",(0,d.jsx)(e.li,{children:"defaultAuthenticationPlugin=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL"}),"\n",(0,d.jsx)(e.li,{children:"disabledAuthenticationPlugins=com.mysql.jdbc.authentication.MysqlClearPasswordPlugin"}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"eg:"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-sql",children:' jdbcUrl = "jdbc:mysql://localhost:9030/mydatabase?authenticationPlugins=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL&defaultAuthenticationPlugin=xxx.xxx.xxx.MysqlClearPasswordPluginWithoutSSL&disabledAuthenticationPlugins=com.mysql.jdbc.authentication.MysqlClearPasswordPlugin";\n\n'})}),"\n",(0,d.jsx)(e.h2,{id:"ldap-\u8BA4\u8BC1\u8BE6\u89E3",children:"LDAP \u8BA4\u8BC1\u8BE6\u89E3"}),"\n",(0,d.jsx)(e.p,{children:"LDAP \u5BC6\u7801\u9A8C\u8BC1\u548C\u7EC4\u6388\u6743\u662F Doris \u5BC6\u7801\u9A8C\u8BC1\u548C\u6388\u6743\u7684\u8865\u5145\uFF0C\u5F00\u542F LDAP \u529F\u80FD\u5E76\u4E0D\u80FD\u5B8C\u5168\u66FF\u4EE3 Doris \u7684\u5BC6\u7801\u9A8C\u8BC1\u548C\u6388\u6743\uFF0C\u800C\u662F\u4E0E Doris \u5BC6\u7801\u9A8C\u8BC1\u548C\u6388\u6743\u5E76\u5B58\u3002"}),"\n",(0,d.jsx)(e.h3,{id:"ldap-\u9A8C\u8BC1\u767B\u5F55\u8BE6\u89E3",children:"LDAP \u9A8C\u8BC1\u767B\u5F55\u8BE6\u89E3"}),"\n",(0,d.jsx)(e.p,{children:"\u5F00\u542F LDAP \u540E\uFF0C\u7528\u6237\u5728 Doris \u548C LDAP \u4E2D\u5B58\u5728\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"LDAP \u7528\u6237"}),(0,d.jsx)(e.th,{children:"Doris \u7528\u6237"}),(0,d.jsx)(e.th,{children:"\u5BC6\u7801"}),(0,d.jsx)(e.th,{children:"\u767B\u5F55\u60C5\u51B5"}),(0,d.jsx)(e.th,{children:"\u767B\u5F55 Doris \u7684\u7528\u6237"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"LDAP \u5BC6\u7801"}),(0,d.jsx)(e.td,{children:"\u767B\u5F55\u6210\u529F"}),(0,d.jsx)(e.td,{children:"Doris \u7528\u6237"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"Doris \u5BC6\u7801"}),(0,d.jsx)(e.td,{children:"\u767B\u5F55\u5931\u8D25"}),(0,d.jsx)(e.td,{children:"\u65E0"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u4E0D\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"Doris \u5BC6\u7801"}),(0,d.jsx)(e.td,{children:"\u767B\u5F55\u6210\u529F"}),(0,d.jsx)(e.td,{children:"Doris \u7528\u6237"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"LDAP \u5BC6\u7801"}),(0,d.jsx)(e.td,{children:"\u767B\u5F55\u6210\u529F"}),(0,d.jsx)(e.td,{children:"Ldap \u4E34\u65F6\u7528\u6237"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u5F00\u542F LDAP \u540E\uFF0C\u7528\u6237\u4F7F\u7528 mysql client \u767B\u5F55\u65F6\uFF0CDoris \u4F1A\u5148\u901A\u8FC7 LDAP \u670D\u52A1\u9A8C\u8BC1\u7528\u6237\u5BC6\u7801\uFF0C\u5982\u679C LDAP \u5B58\u5728\u7528\u6237\u4E14\u5BC6\u7801\u6B63\u786E\uFF0CDoris \u5219\u4F7F\u7528\u8BE5\u7528\u6237\u767B\u5F55\uFF1B\u6B64\u65F6 Doris \u82E5\u5B58\u5728\u5BF9\u5E94\u8D26\u6237\u5219\u76F4\u63A5\u767B\u5F55\u8BE5\u8D26\u6237\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u5BF9\u5E94\u8D26\u6237\u5219\u4E3A\u7528\u6237\u521B\u5EFA\u4E34\u65F6\u8D26\u6237\u5E76\u767B\u5F55\u8BE5\u8D26\u6237\u3002\u4E34\u65F6\u8D26\u6237\u5177\u6709\u5177\u6709\u76F8\u5E94\u5BF9\u6743\u9650\uFF08\u53C2\u89C1 LDAP \u7EC4\u6388\u6743\uFF09\uFF0C\u4EC5\u5BF9\u5F53\u524D\u8FDE\u63A5\u6709\u6548\uFF0Cdoris \u4E0D\u4F1A\u521B\u5EFA\u8BE5\u7528\u6237\uFF0C\u4E5F\u4E0D\u4F1A\u4EA7\u751F\u521B\u5EFA\u7528\u6237\u5BF9\u5143\u6570\u636E\u3002\n\u5982\u679C LDAP \u670D\u52A1\u4E2D\u4E0D\u5B58\u5728\u767B\u5F55\u7528\u6237\uFF0C\u5219\u4F7F\u7528 Doris \u8FDB\u884C\u5BC6\u7801\u8BA4\u8BC1\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u4EE5\u4E0B\u5047\u8BBE\u5DF2\u5F00\u542F LDAP \u8BA4\u8BC1\uFF0C\u914D\u7F6E ldap_user_filter = (&(uid={login}))\uFF0C\u4E14\u5176\u4ED6\u914D\u7F6E\u9879\u90FD\u6B63\u786E\uFF0C\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF LIBMYSQL_ENABLE_CLEARTEXT_PLUGIN=1"}),"\n",(0,d.jsx)(e.p,{children:"\u4F8B\u5982\uFF1A"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"Doris \u548C LDAP \u4E2D\u90FD\u5B58\u5728\u8D26\u6237\uFF1A"}),"\n",(0,d.jsxs)(e.p,{children:["\u5B58\u5728 Doris \u8D26\u6237\uFF1A",(0,d.jsx)(e.code,{children:"jack@'172.10.1.10'"}),"\uFF0C\u5BC6\u7801\uFF1A",(0,d.jsx)(e.code,{children:"123456"})]}),"\n",(0,d.jsxs)(e.p,{children:["LDAP \u7528\u6237\u8282\u70B9\u5B58\u5728\u5C5E\u6027\uFF1A",(0,d.jsx)(e.code,{children:"uid: jack"})," \u7528\u6237\u5BC6\u7801\uFF1A",(0,d.jsx)(e.code,{children:"abcdef"})]}),"\n",(0,d.jsxs)(e.p,{children:["\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u767B\u5F55 Doris \u53EF\u4EE5\u767B\u5F55 ",(0,d.jsx)(e.code,{children:"jack@'172.10.1.10'"})," \u8D26\u6237\uFF1A"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n"})}),"\n",(0,d.jsx)(e.p,{children:"\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5C06\u767B\u5F55\u5931\u8D25\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"LDAP \u4E2D\u5B58\u5728\u7528\u6237\uFF0CDoris \u4E2D\u4E0D\u5B58\u5728\u5BF9\u5E94\u8D26\u6237\uFF1A"}),"\n",(0,d.jsxs)(e.p,{children:["LDAP \u7528\u6237\u8282\u70B9\u5B58\u5728\u5C5E\u6027\uFF1A",(0,d.jsx)(e.code,{children:"uid: jack"})," \u7528\u6237\u5BC6\u7801\uFF1A",(0,d.jsx)(e.code,{children:"abcdef"})]}),"\n",(0,d.jsx)(e.p,{children:"\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u521B\u5EFA\u4E34\u65F6\u7528\u6237\u5E76\u767B\u5F55 jack@'%'\uFF0C\u4E34\u65F6\u7528\u6237\u5177\u6709\u57FA\u672C\u6743\u9650 DatabasePrivs\uFF1ASelect_priv\uFF0C\u7528\u6237\u9000\u51FA\u767B\u5F55\u540E Doris \u5C06\u5220\u9664\u8BE5\u4E34\u65F6\u7528\u6237\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"mysql -hDoris_HOST -PDoris_PORT -ujack -p abcdef\n"})}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"LDAP \u4E0D\u5B58\u5728\u7528\u6237\uFF1A"}),"\n",(0,d.jsxs)(e.p,{children:["\u5B58\u5728 Doris \u8D26\u6237\uFF1A",(0,d.jsx)(e.code,{children:"jack@'172.10.1.10'"}),"\uFF0C\u5BC6\u7801\uFF1A",(0,d.jsx)(e.code,{children:"123456"})]}),"\n",(0,d.jsx)(e.p,{children:"\u4F7F\u7528 Doris \u5BC6\u7801\u767B\u5F55\u8D26\u6237\uFF0C\u6210\u529F\uFF1A"}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-shell",children:"mysql -hDoris_HOST -PDoris_PORT -ujack -p 123456\n"})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"ldap-\u7EC4\u6388\u6743\u8BE6\u89E3",children:"LDAP \u7EC4\u6388\u6743\u8BE6\u89E3"}),"\n",(0,d.jsx)(e.p,{children:"DLAP \u7528\u6237 dn \u662F LDAP \u7EC4\u8282\u70B9\u7684\u201Cmember\u201D\u5C5E\u6027\u5219 Doris \u8BA4\u4E3A\u7528\u6237\u5C5E\u4E8E\u8BE5\u7EC4\u3002LDAP \u7EC4\u6388\u6743\u662F\u5C06 LDAP \u4E2D\u7684 group \u6620\u5C04\u5230 Doris \u4E2D\u7684 role\uFF0C\u5E76\u5C06\u6240\u6709\u5BF9\u5E94\u7684 role \u6743\u9650\u6388\u4E88\u767B\u5F55\u7528\u6237\uFF0C\u7528\u6237\u9000\u51FA\u767B\u5F55\u540E Doris \u4F1A\u64A4\u9500\u5BF9\u5E94\u7684 role \u6743\u9650\u3002\u5728\u4F7F\u7528 LDAP \u7EC4\u6388\u6743\u524D\u5E94\u8BE5\u5728 Doris \u4E2D\u521B\u5EFA\u76F8\u5E94\u5BF9 role\uFF0C\u5E76\u4E3A role \u6388\u6743\u3002"}),"\n",(0,d.jsx)(e.p,{children:"\u767B\u5F55\u7528\u6237\u6743\u9650\u8DDF Doris \u7528\u6237\u548C\u7EC4\u6743\u9650\u6709\u5173\uFF0C\u89C1\u4E0B\u8868\uFF1A"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"LDAP \u7528\u6237"}),(0,d.jsx)(e.th,{children:"Doris \u7528\u6237"}),(0,d.jsx)(e.th,{children:"\u767B\u5F55\u7528\u6237\u7684\u6743\u9650"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"LDAP \u7EC4\u6743\u9650 + Doris \u7528\u6237\u6743\u9650"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u4E0D\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"Doris \u7528\u6237\u6743\u9650"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"\u4E0D\u5B58\u5728"}),(0,d.jsx)(e.td,{children:"LDAP \u7EC4\u6743\u9650"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"\u5982\u679C\u767B\u5F55\u7684\u7528\u6237\u4E3A\u4E34\u65F6\u7528\u6237\uFF0C\u4E14\u4E0D\u5B58\u5728\u7EC4\u6743\u9650\uFF0C\u5219\u8BE5\u7528\u6237\u9ED8\u8BA4\u5177\u6709 information_schema \u7684 select_priv \u6743\u9650"}),"\n",(0,d.jsx)(e.p,{children:"\u4E3E\u4F8B\uFF1A"}),"\n",(0,d.jsxs)(e.p,{children:["LDAP \u7528\u6237 dn \u662F LDAP \u7EC4\u8282\u70B9\u7684 ",(0,d.jsx)(e.code,{children:"member"})," \u5C5E\u6027\u5219\u8BA4\u4E3A\u7528\u6237\u5C5E\u4E8E\u8BE5\u7EC4\uFF0CDoris \u4F1A\u622A\u53D6\u7EC4 dn \u7684\u7B2C\u4E00\u4E2A Rdn \u4F5C\u4E3A\u7EC4\u540D\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u4F8B\u5982\u7528\u6237 dn \u4E3A ",(0,d.jsx)(e.code,{children:"uid=jack,ou=aidp,dc=domain,dc=com"}),"\uFF0C\u7EC4\u4FE1\u606F\u5982\u4E0B\uFF1A"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-text",children:"dn: cn=doris_rd,ou=group,dc=domain,dc=com  \nobjectClass: groupOfNames  \nmember: uid=jack,ou=aidp,dc=domain,dc=com  \n"})}),"\n",(0,d.jsxs)(e.p,{children:["\u5219\u7EC4\u540D\u4E3A ",(0,d.jsx)(e.code,{children:"doris_rd"}),"\u3002"]}),"\n",(0,d.jsxs)(e.p,{children:["\u5047\u5982 jack \u8FD8\u5C5E\u4E8E LDAP \u7EC4 ",(0,d.jsx)(e.code,{children:"doris_qa"}),"\u3001",(0,d.jsx)(e.code,{children:"doris_pm"}),"\uFF1BDoris \u5B58\u5728 role\uFF1A",(0,d.jsx)(e.code,{children:"doris_rd"}),"\u3001",(0,d.jsx)(e.code,{children:"doris_qa"}),"\u3001",(0,d.jsx)(e.code,{children:"doris_pm"}),"\uFF0C\u5728\u4F7F\u7528 LDAP \u9A8C\u8BC1\u767B\u5F55\u540E\uFF0C\u7528\u6237\u4E0D\u4F46\u5177\u6709\u8BE5\u8D26\u6237\u539F\u6709\u7684\u6743\u9650\uFF0C\u8FD8\u5C06\u83B7\u5F97 role ",(0,d.jsx)(e.code,{children:"doris_rd"}),"\u3001",(0,d.jsx)(e.code,{children:"doris_qa"})," \u548C ",(0,d.jsx)(e.code,{children:"doris_pm"})," \u7684\u6743\u9650\u3002"]}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,d.jsx)(e.p,{children:"user \u5C5E\u4E8E\u54EA\u4E2A group \u548C LDAP \u6811\u7684\u7EC4\u7EC7\u7ED3\u6784\u65E0\u5173\uFF0C\u793A\u4F8B\u90E8\u5206\u7684 user2 \u5E76\u4E0D\u4E00\u5B9A\u5C5E\u4E8E group2\n\u82E5\u60F3\u8BA9 user2 \u5C5E\u4E8E group2\uFF0C\u9700\u8981\u5728 group2 \u7684 member \u5C5E\u6027\u4E2D\u6DFB\u52A0 user2"}),"\n"]}),"\n",(0,d.jsx)(e.h3,{id:"ldap-\u4FE1\u606F\u7F13\u5B58",children:"LDAP \u4FE1\u606F\u7F13\u5B58"}),"\n",(0,d.jsxs)(e.p,{children:["\u4E3A\u4E86\u907F\u514D\u9891\u7E41\u8BBF\u95EE LDAP \u670D\u52A1\uFF0CDoris \u4F1A\u5C06 LDAP \u4FE1\u606F\u7F13\u5B58\u5230\u5185\u5B58\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 ldap.conf \u4E2D\u7684",(0,d.jsx)(e.code,{children:"ldap_user_cache_timeout_s"}),"\u914D\u7F6E\u9879\u6307\u5B9A LDAP \u7528\u6237\u7684\u7F13\u5B58\u65F6\u95F4\uFF0C\u9ED8\u8BA4\u4E3A 12 \u5C0F\u65F6\uFF1B\u5728\u4FEE\u6539\u4E86 LDAP \u670D\u52A1\u4E2D\u7684\u4FE1\u606F\u6216\u8005\u4FEE\u6539\u4E86 Doris \u4E2D LDAP \u7528\u6237\u7EC4\u5BF9\u5E94\u7684 Role \u6743\u9650\u540E\uFF0C\u53EF\u80FD\u56E0\u4E3A\u7F13\u5B58\u800C\u6CA1\u6709\u53CA\u65F6\u751F\u6548\uFF0C\u53EF\u4EE5\u901A\u8FC7 refresh ldap \u8BED\u53E5\u5237\u65B0\u7F13\u5B58\uFF0C\u8BE6\u7EC6\u67E5\u770B",(0,d.jsx)(e.a,{href:"/zh-CN/docs/sql-manual/sql-statements/account-management/REFRESH-LDAP",children:"REFRESH-LDAP"}),"\u3002"]}),"\n",(0,d.jsx)(e.h2,{id:"ldap-\u9A8C\u8BC1\u7684\u5C40\u9650",children:"LDAP \u9A8C\u8BC1\u7684\u5C40\u9650"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"\u76EE\u524D Doris \u7684 LDAP \u529F\u80FD\u53EA\u652F\u6301\u660E\u6587\u5BC6\u7801\u9A8C\u8BC1\uFF0C\u5373\u7528\u6237\u767B\u5F55\u65F6\uFF0C\u5BC6\u7801\u5728 client \u4E0E fe \u4E4B\u95F4\u3001fe \u4E0E LDAP \u670D\u52A1\u4E4B\u95F4\u4EE5\u660E\u6587\u7684\u5F62\u5F0F\u4F20\u8F93\u3002"}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"\u600E\u4E48\u5224\u65AD LDAP \u7528\u6237\u5728 doris \u4E2D\u6709\u54EA\u4E9B\u89D2\u8272\uFF1F"}),"\n",(0,d.jsxs)(e.p,{children:["\u4F7F\u7528 LDAP \u7528\u6237\u5728 doris \u4E2D\u767B\u9646\uFF0C",(0,d.jsx)(e.code,{children:"show grants;"}),"\u80FD\u67E5\u770B\u5F53\u524D\u7528\u6237\u6709\u54EA\u4E9B\u89D2\u8272\u3002\u5176\u4E2D ldapDefaultRole \u662F\u6BCF\u4E2A ldap \u7528\u6237\u5728 doris \u4E2D\u90FD\u6709\u7684\u9ED8\u8BA4\u89D2\u8272\u3002"]}),"\n"]}),"\n",(0,d.jsxs)(e.li,{children:["\n",(0,d.jsx)(e.p,{children:"LDAP \u7528\u6237\u5728 doris \u4E2D\u7684\u89D2\u8272\u6BD4\u9884\u671F\u5C11\u600E\u4E48\u6392\u67E5\uFF1F"}),"\n",(0,d.jsxs)(e.ol,{children:["\n",(0,d.jsxs)(e.li,{children:["\u901A\u8FC7",(0,d.jsx)(e.code,{children:"show roles;"}),"\u67E5\u770B\u9884\u671F\u7684\u89D2\u8272\u5728 doris \u4E2D\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u9700\u8981\u901A\u8FC7",(0,d.jsx)(e.code,{children:" CREATE ROLE rol_name;"}),"\u521B\u5EFA\u89D2\u8272\u3002"]}),"\n",(0,d.jsxs)(e.li,{children:["\u68C0\u67E5\u9884\u671F\u7684 group \u662F\u5426\u5728",(0,d.jsx)(e.code,{children:"ldap_group_basedn"}),"\u5BF9\u5E94\u7684\u7EC4\u7EC7\u7ED3\u6784\u4E0B\u3002"]}),"\n",(0,d.jsx)(e.li,{children:"\u68C0\u67E5\u9884\u671F group \u662F\u5426\u5305\u542B member \u5C5E\u6027\u3002"}),"\n",(0,d.jsx)(e.li,{children:"\u68C0\u67E5\u9884\u671F group \u7684 member \u5C5E\u6027\u662F\u5426\u5305\u542B\u5F53\u524D\u7528\u6237\u3002"}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return r}});var s=l(667294);let d={},i=s.createContext(d);function r(n){let e=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);