"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["387769"],{831213:function(e,n,r){r.r(n),r.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"install/construct-docker/run-docker-cluster","title":"Deploy Docker cluster","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/install/construct-docker/run-docker-cluster.md","sourceDirName":"install/construct-docker","slug":"/install/construct-docker/run-docker-cluster","permalink":"/docs/1.2/install/construct-docker/run-docker-cluster","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Deploy Docker cluster","language":"en"},"sidebar":"docs","previous":{"title":"Build Docker Image","permalink":"/docs/1.2/install/construct-docker/construct-docker-image"},"next":{"title":"Kubernetes Deployment","permalink":"/docs/1.2/install/k8s-deploy"}}'),s=r("785893"),t=r("250065");let i={title:"Deploy Docker cluster",language:"en"},d="Deploy the Docker cluster",c={},l=[{value:"Background description",id:"background-description",level:2},{value:"Applicable scene",id:"applicable-scene",level:2},{value:"Software Environment",id:"software-environment",level:2},{value:"Hardware environment",id:"hardware-environment",level:2},{value:"Pre-environment preparation",id:"pre-environment-preparation",level:2},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Network Mode Description",id:"network-mode-description",level:3},{value:"Interface Description",id:"interface-description",level:3},{value:"Script Template",id:"script-template",level:3},{value:"Docker Run command",id:"docker-run-command",level:4},{value:"Docker Compose script",id:"docker-compose-script",level:4},{value:"Deploy Doris Docker",id:"deploy-doris-docker",level:2},{value:"Special case description",id:"special-case-description",level:3},{value:"Unfinished business",id:"unfinished-business",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"deploy-the-docker-cluster",children:"Deploy the Docker cluster"})}),"\n",(0,s.jsx)(n.h2,{id:"background-description",children:"Background description"}),"\n",(0,s.jsxs)(n.p,{children:["This article will briefly describe how to quickly build a complete Doris test cluster through ",(0,s.jsx)(n.code,{children:"docker run"})," or ",(0,s.jsx)(n.code,{children:"docker-compose up"})," commands."]}),"\n",(0,s.jsx)(n.h2,{id:"applicable-scene",children:"Applicable scene"}),"\n",(0,s.jsx)(n.p,{children:"It is recommended to use Doris Docker in SIT or DEV environment to simplify the deployment process."}),"\n",(0,s.jsx)(n.p,{children:"If you want to test a certain function point in the new version, you can use Doris Docker to deploy a Playground environment. Or when you want to reproduce a certain problem during debugging, you can also use the docker environment to simulate."}),"\n",(0,s.jsx)(n.p,{children:"In the production environment, currently try to avoid using containerized solutions for Doris deployment."}),"\n",(0,s.jsx)(n.h2,{id:"software-environment",children:"Software Environment"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Software"}),(0,s.jsx)(n.th,{children:"Version"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Docker"}),(0,s.jsx)(n.td,{children:"20.0 and above"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"docker-compose"}),(0,s.jsx)(n.td,{children:"2.10 and above"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"hardware-environment",children:"Hardware environment"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Configuration Type"}),(0,s.jsx)(n.th,{children:"Hardware Information"}),(0,s.jsx)(n.th,{children:"Maximum Running Cluster Size"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Minimum configuration"}),(0,s.jsx)(n.td,{children:"2C 4G"}),(0,s.jsx)(n.td,{children:"1FE 1BE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Recommended configuration"}),(0,s.jsx)(n.td,{children:"4C 16G"}),(0,s.jsx)(n.td,{children:"3FE 3BE"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"pre-environment-preparation",children:"Pre-environment preparation"}),"\n",(0,s.jsx)(n.p,{children:"The following command needs to be executed on the host machine"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sysctl -w vm.max_map_count=2000000\n"})}),"\n",(0,s.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,s.jsxs)(n.p,{children:["Different platforms need to use different Image images. This article takes the ",(0,s.jsx)(n.code,{children:"X86_64"})," platform as an example."]}),"\n",(0,s.jsx)(n.h3,{id:"network-mode-description",children:"Network Mode Description"}),"\n",(0,s.jsx)(n.p,{children:"There are two network modes applicable to Doris Docker."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"HOST mode suitable for deployment across multiple nodes, this mode is suitable for deploying 1FE 1BE on each node."}),"\n",(0,s.jsx)(n.li,{children:"The subnet bridge mode is suitable for deploying multiple Doris processes on a single node. This mode is suitable for single-node deployment (recommended). If you want to deploy multiple nodes, you need to deploy more components (not recommended)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"For the sake of presentation, this chapter only demonstrates scripts written in subnet bridge mode."}),"\n",(0,s.jsx)(n.h3,{id:"interface-description",children:"Interface Description"}),"\n",(0,s.jsxs)(n.p,{children:["From the version of ",(0,s.jsx)(n.code,{children:"Apache Doris 1.2.1 Docker Image"}),", the interface list of each process image is as follows:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"process name"}),(0,s.jsx)(n.th,{children:"interface name"}),(0,s.jsx)(n.th,{children:"interface definition"}),(0,s.jsx)(n.th,{children:"interface example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FE\\BE\\BROKER"}),(0,s.jsx)(n.td,{children:"FE_SERVERS"}),(0,s.jsx)(n.td,{children:"FE node main information"}),(0,s.jsx)(n.td,{children:"fe1:172.20.80.2:9010,fe2:172.20.80.3:9010,fe3:172.20.80.4:9010"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"FE"}),(0,s.jsx)(n.td,{children:"FE_ID"}),(0,s.jsx)(n.td,{children:"FE node ID"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BE"}),(0,s.jsx)(n.td,{children:"BE_ADDR"}),(0,s.jsx)(n.td,{children:"BE node main information"}),(0,s.jsx)(n.td,{children:"172.20.80.5:9050"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BE"}),(0,s.jsx)(n.td,{children:"NODE_ROLE"}),(0,s.jsx)(n.td,{children:"BE node type"}),(0,s.jsx)(n.td,{children:"computation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"BROKER"}),(0,s.jsx)(n.td,{children:"BROKER_ADDR"}),(0,s.jsx)(n.td,{children:"Main information of BROKER node"}),(0,s.jsx)(n.td,{children:"172.20.80.6:8000"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Note that the above interface must fill in the information, otherwise the process cannot be started."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["FE_SERVERS interface rules are: ",(0,s.jsx)(n.code,{children:"FE_NAME:FE_HOST:FE_EDIT_LOG_PORT[,FE_NAME:FE_HOST:FE_EDIT_LOG_PORT]"})]}),"\n",(0,s.jsxs)(n.p,{children:["The FE_ID interface rule is: an integer of ",(0,s.jsx)(n.code,{children:"1-9"}),", where the FE number ",(0,s.jsx)(n.code,{children:"1"})," is the Master node."]}),"\n",(0,s.jsxs)(n.p,{children:["BE_ADDR interface rule is: ",(0,s.jsx)(n.code,{children:"BE_HOST:BE_HEARTBEAT_SERVICE_PORT"})]}),"\n",(0,s.jsxs)(n.p,{children:["The NODE_ROLE interface rule is: ",(0,s.jsx)(n.code,{children:"computation"})," or empty, where empty or other values indicate that the node type is ",(0,s.jsx)(n.code,{children:"mix"})," type"]}),"\n",(0,s.jsxs)(n.p,{children:["BROKER_ADDR interface rule is: ",(0,s.jsx)(n.code,{children:"BROKER_HOST:BROKER_IPC_PORT"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"script-template",children:"Script Template"}),"\n",(0,s.jsx)(n.h4,{id:"docker-run-command",children:"Docker Run command"}),"\n",(0,s.jsx)(n.p,{children:"Create a subnet bridge"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker network create --driver bridge --subnet=172.20.80.0/24 doris-network\n"})}),"\n",(0,s.jsx)(n.p,{children:"1FE & 1BE Command Templates"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'docker run -itd \\\n--name=fe \\\n--env FE_SERVERS="fe1:172.20.80.2:9010" \\\n--env FE_ID=1 \\\n-p 8030:8030 \\\n-p 9030:9030 \\\n-v /data/fe/doris-meta:/opt/apache-doris/fe/doris-meta \\\n-v /data/fe/conf:/opt/apache-doris/fe/conf \\\n-v /data/fe/log:/opt/apache-doris/fe/log \\\n--network=doris-network \\\n--ip=172.20.80.2 \\\napache/doris:1.2.1-fe-x86_64\n\ndocker run -itd \\\n--name=be \\\n--env FE_SERVERS="fe1:172.20.80.2:9010" \\\n--env BE_ADDR="172.20.80.3:9050" \\\n-p 8040:8040 \\\n-v /data/be/storage:/opt/apache-doris/be/storage \\\n-v /data/be/conf:/opt/apache-doris/be/conf \\\n-v /data/be/log:/opt/apache-doris/be/log \\\n--network=doris-network \\\n--ip=172.20.80.3 \\\napache/doris:1.2.1-be-x86_64  # if CPU does not support AVX2, use\n                              # apache/doris:1.2.1-be-x86_64-noavx2\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note: if you CPU does not support AVX2, the backend will fail to start.\nIf this is the case, use the ",(0,s.jsx)(n.code,{children:"apache/doris:X.X.X-be-x86_64-noavx2"})," backend image.\nUse ",(0,s.jsx)(n.code,{children:"docker logs -f be"})," to check the backend for error messages."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["3FE & 3BE run command template can be downloaded ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/rum-command/3fe_3be.sh",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"docker-compose-script",children:"Docker Compose script"}),"\n",(0,s.jsx)(n.p,{children:"1FE & 1BE template"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'version: \'3\'\nservices:\n   docker-fe:\n     image: "apache/doris:1.2.1-fe-x86_64"\n     container_name: "doris-fe"\n     hostname: "fe"\n     environment:\n       - FE_SERVERS=fe1:172.20.80.2:9010\n       - FE_ID=1\n     ports:\n       - 8030:8030\n       - 9030:9030\n     volumes:\n       - /data/fe/doris-meta:/opt/apache-doris/fe/doris-meta\n       - /data/fe/conf:/opt/apache-doris/fe/conf\n       - /data/fe/log:/opt/apache-doris/fe/log\n     networks:\n       doris_net:\n         ipv4_address: 172.20.80.2\n   docker-be:\n     image: "apache/doris:1.2.1-be-x86_64"  # use apache/doris:1.2.1-be-x86_64-noavx2, if CPU does not support AVX2\n     container_name: "doris-be"\n     hostname: "be"\n     depends_on:\n       - docker-fe\n     environment:\n       - FE_SERVERS=fe1:172.20.80.2:9010\n       - BE_ADDR=172.20.80.3:9050\n     ports:\n       - 8040:8040\n     volumes:\n       - /data/be/storage:/opt/apache-doris/be/storage\n       - /data/be/conf:/opt/apache-doris/be/conf\n       - /data/be/script:/docker-entrypoint-initdb.d\n       - /data/be/log:/opt/apache-doris/be/log\n     networks:\n       doris_net:\n         ipv4_address: 172.20.80.3\nnetworks:\n   doris_net:\n     ipam:\n       config:\n         - subnet: 172.20.80.0/16\n'})}),"\n",(0,s.jsxs)(n.p,{children:["3FE & 3BE Docker Compose file can be downloaded ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris/tree/master/docker/runtime/docker-compose-demo/build-cluster/docker-compose/3fe_3be/docker-compose.yaml",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-doris-docker",children:"Deploy Doris Docker"}),"\n",(0,s.jsx)(n.p,{children:"You can choose one of the two deployment methods:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Execute the ",(0,s.jsx)(n.code,{children:"docker run"})," command to create a cluster"]}),"\n",(0,s.jsxs)(n.li,{children:["Save the ",(0,s.jsx)(n.code,{children:"docker-compose.yaml"})," script and execute the ",(0,s.jsx)(n.code,{children:"docker-compose up -d"})," command in the same directory to create a cluster"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"special-case-description",children:"Special case description"}),"\n",(0,s.jsxs)(n.p,{children:["Due to the different ways of implementing containers internally on MacOS, it may not be possible to directly modify the value of ",(0,s.jsx)(n.code,{children:"max_map_count"})," on the host during deployment. You need to create the following containers first:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shel",children:"docker run -it --privileged --pid=host --name=change_count debian nsenter -t 1 -m -u -n -i sh\n"})}),"\n",(0,s.jsx)(n.p,{children:"The container was created successfully executing the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sysctl -w vm.max_map_count=2000000\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then ",(0,s.jsx)(n.code,{children:"exit"})," exits and creates the Doris Docker cluster."]}),"\n",(0,s.jsx)(n.h2,{id:"unfinished-business",children:"Unfinished business"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Compose Demo List"}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var o=r(667294);let s={},t=o.createContext(s);function i(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);