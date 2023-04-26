"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"RPC API tutorial"},l="RPC API tutorial \u260e\ufe0f",i={unversionedId:"developers/rpc-tutorial",id:"developers/rpc-tutorial",title:"RPC API tutorial \u260e\ufe0f",description:"This tutorial will teach you how to interact with a Celestia Node's",source:"@site/docs/developers/rpc-tutorial.mdx",sourceDirName:"developers",slug:"/developers/rpc-tutorial",permalink:"/pr-preview/pr-690/fr/developers/rpc-tutorial",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/rpc-tutorial.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"RPC API tutorial"},sidebar:"developers",previous:{title:"RPC API",permalink:"/pr-preview/pr-690/fr/category/rpc-api"},next:{title:"Rollkit",permalink:"/pr-preview/pr-690/fr/developers/rollkit"}},p={},s=[{value:"Celestia Node CLI guide",id:"celestia-node-cli-guide",level:2},{value:"Auth token",id:"auth-token",level:3},{value:"Host URL",id:"host-url",level:3},{value:"<code>SubmitPayForBlob</code> arguments",id:"submitpayforblob-arguments",level:3},{value:"Completions",id:"completions",level:3},{value:"Examples",id:"examples",level:3},{value:"CLI tutorial",id:"cli-tutorial",level:2},{value:"Golang guide",id:"golang-guide",level:2}],u={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rpc-api-tutorial-\ufe0f"},"RPC API tutorial \u260e\ufe0f"),(0,r.kt)("p",null,"This tutorial will teach you how to interact with a Celestia Node's\n",(0,r.kt)("a",{parentName:"p",href:"https://node-rpc-docs.celestia.org/"},"RPC (Remote Procedure Call) API"),"."),(0,r.kt)("p",null,"First, you will need to ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/light-node"},"install ",(0,r.kt)("inlineCode",{parentName:"a"},"celestia-node"))," if\nyou have not already."),(0,r.kt)("p",null,"If you have not yet initalized your node, initialize it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> init --p2p.network <network>\n")),(0,r.kt)("p",null,"Start your node if it is not yet running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node_type> start --p2p.network <network>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--core.ip")," gRPC port defaults to 9090,\nso if you do not specify it in the command\nline, it will default to that port. You can\nadd the port after the IP address or use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--core.grpc.port")," flag to specify another\nport if you prefer."),(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("h2",{id:"celestia-node-cli-guide"},"Celestia Node CLI guide"),(0,r.kt)("p",null,"The Celestia Node CLI (Command Line Interface) has a ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," subcommand that\nallows you to interact with the node's RPC API via\nyour terminal."),(0,r.kt)("p",null,"The format for the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," subcommand is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc [module] [method] [...args]\n")),(0,r.kt)("h3",{id:"auth-token"},"Auth token"),(0,r.kt)("p",null,"In order to interact with the API using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," subcommand,\nyou will need to set your authentication token."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth TOKEN")," flag sets the authentication token,\notherwise it will read from the environment's\n",(0,r.kt)("inlineCode",{parentName:"p"},"CELESTIA_NODE_AUTH_TOKEN")," variable.\nIf a token is not found, authentication will not be set.\nAnd if authentication is not set, the request will fail."),(0,r.kt)("p",null,"To set your authentication token, you can use the\nfollowing command. Be sure to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<node-type>")," with\nthe type of node and ",(0,r.kt)("inlineCode",{parentName:"p"},"<network>"),"\nwith the network that you are running your node on:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CELESTIA_NODE_AUTH_TOKEN=$(celestia <node-type> auth admin --p2p.network <network>)\n")),(0,r.kt)("h3",{id:"host-url"},"Host URL"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--host URL")," flag sets the host address,\nthe default is ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:26658")," over HTTP."),(0,r.kt)("h3",{id:"submitpayforblob-arguments"},(0,r.kt)("inlineCode",{parentName:"h3"},"SubmitPayForBlob")," arguments"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc")," subcommand, you can submit a blob to the network\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitPayForBlob")," method."),(0,r.kt)("p",null,"The arguments for ",(0,r.kt)("inlineCode",{parentName:"p"},"SubmitPayForBlob")," are parsed specially,\nto improve UX."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SubmitPayForBlob")," can be done in a few ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"namespace ID")," can be encoded as either hex or base64"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("strong",{parentName:"li"},"blob")," can be hex (",(0,r.kt)("inlineCode",{parentName:"li"},"0x..."),"), base64 (",(0,r.kt)("inlineCode",{parentName:"li"},'"..."'),"), or a normal string which will be encoded to base64 (",(0,r.kt)("inlineCode",{parentName:"li"},"'\"Hello There!\"'"),")")),(0,r.kt)("h3",{id:"completions"},"Completions"),(0,r.kt)("p",null,"If you would like to turn on completions for the Celestia Node CLI ",(0,r.kt)("inlineCode",{parentName:"p"},"rpc"),"\nsubcommand, you can use the following command and follow the instructions\nin the CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia completion\n")),(0,r.kt)("p",null,"If you'd like to see the help menu for your shell, you can then run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia completion [bash | fish | powershell | zsh] --help\n")),(0,r.kt)("h3",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Set your auth token on a light node on Blockspace Race:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CELESTIA_NODE_AUTH_TOKEN=$(celestia light auth admin --p2p.network blockspacerace)\n")),(0,r.kt)("p",null,"Submit a blob to the network:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc state SubmitPayForBlob 0x1874e642f5dde589 '\"Hello there!!\"' 2000 100000\n")),(0,r.kt)("p",null,"Query node information:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc node Info\n")),(0,r.kt)("p",null,"Get share by data availibility header and index:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc share GetShare \"$(celestia rpc header GetByHeight 162011 | jq '.result.dah' -r)\" 162011 0\n")),(0,r.kt)("p",null,"Get share by namespace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc share GetSharesByNamespace \"$(celestia rpc header GetByHeight 162011 | jq '.result.dah' -r)\" GHTmQvXd5Yk=\n")),(0,r.kt)("p",null,"Get header by height:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc header GetByHeight 5\n")),(0,r.kt)("p",null,"Get data availability sampler stats:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia rpc das SamplingStats\n")),(0,r.kt)("h2",{id:"cli-tutorial"},"CLI tutorial"),(0,r.kt)("p",null,"If you'd like to create your own SVG, post it to Celestia, and retrieve it,\nyou can check out the ",(0,r.kt)("a",{parentName:"p",href:"https://based64.xyz/"},"Base64 SVG Tutorial"),"."),(0,r.kt)("h2",{id:"golang-guide"},"Golang guide"),(0,r.kt)("p",null,"If you're interested in interacting with the node's API in Go\n(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/api/rpc/client/client.go"},(0,r.kt)("inlineCode",{parentName:"a"},"client.go")),"),\nyou can use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/renaynay/da-rpc-client-tutorial"},"da-rpc-client-tutorial"),"\nrepo."))}d.isMDXComponent=!0}}]);