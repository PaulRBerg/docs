"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,y=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Quick start",description:"Learn how to get started and run your first node on Celestia."},i="Quick start guide",l={unversionedId:"nodes/quick-start",id:"nodes/quick-start",title:"Quick start guide",description:"Learn how to get started and run your first node on Celestia.",source:"@site/docs/nodes/quick-start.md",sourceDirName:"nodes",slug:"/nodes/quick-start",permalink:"/pr-preview/pr-794/fr/nodes/quick-start",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/quick-start.md",tags:[],version:"current",frontMatter:{sidebar_label:"Quick start",description:"Learn how to get started and run your first node on Celestia."},sidebar:"nodes",previous:{title:"Blockspace race",permalink:"/pr-preview/pr-794/fr/nodes/blockspace-race"},next:{title:"Deciding which node to run",permalink:"/pr-preview/pr-794/fr/nodes/decide-node"}},s={},c=[{value:"Celestia Node",id:"celestia-node",level:2},{value:"Celestia App",id:"celestia-app",level:2},{value:"Getting started",id:"getting-started",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start-guide"},"Quick start guide"),(0,a.kt)("p",null,"In this section, we show you how to get started\nwith installing the needed libraries and packages\nin Celestia to help you run a node on Celestia."),(0,a.kt)("h2",{id:"celestia-node"},"Celestia Node"),(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," allows you to get started with\nrunning a light node and do Data Availability Sampling."),(0,a.kt)("p",null,"Light Nodes are the best nodes to test out initially if\nyou are new to participating in Celestia."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," client also allows you to run other types\nof Data-Availability nodes like Bridge and Full Storage\nnodes, which will be covered in later sections."),(0,a.kt)("h2",{id:"celestia-app"},"Celestia App"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"celestia-app")," is the software that allows you to run\nValidator nodes and also provide RPC endpoints."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"celestia-app")," covers the Consensus layer, while ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\ncovers the Data Availability layer."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"As covered in the previous section, Celestia offers\ntwo different test networks, ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-794/fr/nodes/arabica-devnet"},"Arabica"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-794/fr/nodes/mocha-testnet"},"Mocha"),"."),(0,a.kt)("p",null,"If you are planning to run a light node, it is recommended\nto use Arabica, which you will find options to connecting to\nin the later sections."),(0,a.kt)("p",null,"If you plan on running a validator, your only option is to run\nyour node on Mocha."),(0,a.kt)("p",null,"In this Quick Start guide, we will go over installing both of\nthe software clients: ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-app"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: If you just want to run a Light Node, you don't need to\ninstall ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-app")," and can skip that part.")),(0,a.kt)("p",null,"Proceed to the next section in order to get started."))}u.isMDXComponent=!0}}]);