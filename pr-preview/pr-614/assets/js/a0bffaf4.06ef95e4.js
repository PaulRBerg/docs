"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6537:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"RPC API tutorial"},o="RPC API tutorial",i={unversionedId:"developers/rpc-tutorial",id:"developers/rpc-tutorial",title:"RPC API tutorial",description:"This tutorial will teach you how to interact with a node's RPC API.",source:"@site/docs/developers/rpc-tutorial.mdx",sourceDirName:"developers",slug:"/developers/rpc-tutorial",permalink:"/pr-preview/pr-614/developers/rpc-tutorial",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rpc-tutorial.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"RPC API tutorial"},sidebar:"developers",previous:{title:"RPC API",permalink:"/pr-preview/pr-614/category/rpc-api"},next:{title:"Rollkit",permalink:"/pr-preview/pr-614/developers/rollkit"}},p={},s=[{value:"Celestia Node CLI guide",id:"celestia-node-cli-guide",level:2},{value:"Examples",id:"examples",level:3},{value:"Golang guide",id:"golang-guide",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rpc-api-tutorial"},"RPC API tutorial"),(0,r.kt)("p",null,"This tutorial will teach you how to interact with a node's RPC API."),(0,r.kt)("p",null,"First, ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/light-node"},"install celestia-node"),"."),(0,r.kt)("p",null,"Initalize your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> init --p2p.network <network>\n")),(0,r.kt)("p",null,"Start your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> start --p2p.network <network>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("h2",{id:"celestia-node-cli-guide"},"Celestia Node CLI guide"),(0,r.kt)("p",null,"The Celestia Node CLI has a ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," subcommand that\nallows you to interact with the node's RPC API via\nyour terminal."),(0,r.kt)("p",null,"The format will be as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc [module] [method] [...args]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth TOKEN")," flag sets the authentication token,\notherwise it will read from the environment's\n",(0,r.kt)("inlineCode",{parentName:"p"},"CELESTIA_NODE_AUTH_TOKEN")," variable.\nIf a token is not found, authentication will not be set."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--host URL")," flag sets the host address,\nthe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:26658")," over HTTP."),(0,r.kt)("p",null,"The arguments for ",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitPayForBlob")," are parsed specially,\nto improve UX."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SubmitPayForBlob")," can be done in a few ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The namespace ID can be encoded as either hex or base64"),(0,r.kt)("li",{parentName:"ul"},"The blob can be hex (",(0,r.kt)("inlineCode",{parentName:"li"},"0x..."),"), base64 (",(0,r.kt)("inlineCode",{parentName:"li"},'"..."'),"), or a normal string which will be encoded to base64 (",(0,r.kt)("inlineCode",{parentName:"li"},"'\"Hello There!\"'"),")")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Submit a blob to the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc state SubmitPayForBlob 0x1874e642f5dde589 '\"Hello there!!\"' 2000 100000\n")),(0,r.kt)("p",null,"Query node information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc node Info\n")),(0,r.kt)("p",null,"Get share by data availibility header and index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celesta rpc share GetShare $(celestia rpc header GetByHeight 200 | jq '.result.dah' -r ) 5 6 \n")),(0,r.kt)("p",null,"Get header by height:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc header GetByHeight 5\n")),(0,r.kt)("p",null,"Get data availability sampler stats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc das SamplingStats\n")),(0,r.kt)("h2",{id:"golang-guide"},"Golang guide"),(0,r.kt)("p",null,"If you're interested in interacting with the node's API in Go\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/api/rpc/client/client.go"},(0,r.kt)("inlineCode",{parentName:"a"},"client.go")),"),\nyou can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/renaynay/da-rpc-client-tutorial"},"da-rpc-client-tutorial"),"\nrepo."))}d.isMDXComponent=!0}}]);