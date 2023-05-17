"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Deploy an OP Stack testnet on Celestia",description:"Start your own testnet with a modified version of optimism-bedrock."},i="Deploy an OP Stack testnet with Celestia",l={unversionedId:"developers/optimism",id:"developers/optimism",title:"Deploy an OP Stack testnet with Celestia",description:"Start your own testnet with a modified version of optimism-bedrock.",source:"@site/docs/developers/optimism.mdx",sourceDirName:"developers",slug:"/developers/optimism",permalink:"/pr-preview/pr-753/developers/optimism",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/optimism.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy an OP Stack testnet on Celestia",description:"Start your own testnet with a modified version of optimism-bedrock."},sidebar:"developers",previous:{title:"Deploy an OP Stack devnet",permalink:"/pr-preview/pr-753/developers/optimism-devnet"},next:{title:"Rollups as a Service",permalink:"/pr-preview/pr-753/category/rollups-as-a-service"}},s={},p=[{value:"Pick your deployment type",id:"pick-your-deployment-type",level:2},{value:"Using a local devnet",id:"using-a-local-devnet",level:3},{value:"Using a light node",id:"using-a-light-node",level:3},{value:"Using a RaaS provider",id:"using-a-raas-provider",level:3},{value:"Start the testnet",id:"start-the-testnet",level:2},{value:"View the logs of the testnet",id:"view-the-logs-of-the-testnet",level:2},{value:"Stop the testnet",id:"stop-the-testnet",level:2},{value:"Clean the testnet",id:"clean-the-testnet",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-an-op-stack-testnet-with-celestia"},"Deploy an OP Stack testnet with Celestia"),(0,r.kt)("p",null,"In order to deploy a testnet with Celestia, you will need to have a modified\nversion of ",(0,r.kt)("inlineCode",{parentName:"p"},"optimism-bedrock"),". You can find the steps to install dependencies\nand the modified version ",(0,r.kt)("a",{parentName:"p",href:"../optimism-devnet"},"here"),"."),(0,r.kt)("h2",{id:"pick-your-deployment-type"},"Pick your deployment type"),(0,r.kt)("p",null,"Using Celestia and OP stack, you have the option to either\nrun a light node of your own or a ",(0,r.kt)("inlineCode",{parentName:"p"},"local-celestia-devnet"),",\nwhich will give you a local devnet to test things out with."),(0,r.kt)("h3",{id:"using-a-local-devnet"},"Using a local devnet"),(0,r.kt)("p",null,"If you'd like to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"local-celestia-devnet"),", you're in luck!\nThis is the default for the OP Stack + Celestia repository. Head\nto the ",(0,r.kt)("a",{parentName:"p",href:"../optimism-devnet"},"previous page")," to get started."),(0,r.kt)("h3",{id:"using-a-light-node"},"Using a light node"),(0,r.kt)("p",null,"If you choose to use your own node store, the light node\nmust be ",(0,r.kt)("strong",{parentName:"p"},"fully synced")," and ",(0,r.kt)("strong",{parentName:"p"},"funded")," for you to be able to submit\nand retreive ",(0,r.kt)("inlineCode",{parentName:"p"},"PayForBlobs")," to a Celestia network."),(0,r.kt)("p",null,"If it is not synced, you will run into ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/issues/2151"},"errors"),"."),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"../../nodes/blockspace-race/"},"Blockspace Race page"),"\nto visit the faucet."),(0,r.kt)("p",null,"In order to mount existing data, you must have a node store that is\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia<node-type>-<network>")," directory. This is the\ndefault location of the node store when you initialize and run\na new Celestia node."),(0,r.kt)("p",null,"By default, the node will run with the account named\n",(0,r.kt)("inlineCode",{parentName:"p"},"my_celes_key"),"."),(0,r.kt)("p",null,"If you have your own setup you'd like to try, you can always edit\n",(0,r.kt)("inlineCode",{parentName:"p"},"optimism/ops-bedrock/docker-compose-testnet.yml")," to work with your setup."),(0,r.kt)("h3",{id:"using-a-raas-provider"},"Using a RaaS provider"),(0,r.kt)("p",null,"If you'd like to use a Rollups as a Service (RaaS) provider, you can do so\nby going to the ",(0,r.kt)("a",{parentName:"p",href:"../../category/rollups-as-a-service/"},"RaaS category"),"."),(0,r.kt)("h2",{id:"start-the-testnet"},"Start the testnet"),(0,r.kt)("p",null,"First, make sure your light node is synced and funded."),(0,r.kt)("p",null,"Next, you can start up the testnet with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-up\n")),(0,r.kt)("h2",{id:"view-the-logs-of-the-testnet"},"View the logs of the testnet"),(0,r.kt)("p",null,"If you'd like to view the logs of the testnet, run the following command\nfrom the root of the Optimism directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-logs\n")),(0,r.kt)("h2",{id:"stop-the-testnet"},"Stop the testnet"),(0,r.kt)("p",null,"To safely stop the testnet, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-down\n")),(0,r.kt)("h2",{id:"clean-the-testnet"},"Clean the testnet"),(0,r.kt)("p",null,"To remove all data from the testnet, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"make testnet-clean\n")))}u.isMDXComponent=!0}}]);