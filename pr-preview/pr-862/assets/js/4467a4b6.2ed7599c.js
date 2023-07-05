"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Introduction",description:"A brief introduction to the Celestia modular blockchain."},i="Introduction",c={unversionedId:"concepts/how-celestia-works/introduction",id:"concepts/how-celestia-works/introduction",title:"Introduction",description:"A brief introduction to the Celestia modular blockchain.",source:"@site/docs/concepts/how-celestia-works/introduction.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/introduction",permalink:"/pr-preview/pr-862/concepts/how-celestia-works/introduction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/introduction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction",description:"A brief introduction to the Celestia modular blockchain."},sidebar:"concepts",previous:{title:"How Celestia works",permalink:"/pr-preview/pr-862/category/how-celestia-works"},next:{title:"Monolithic vs. modular blockchains",permalink:"/pr-preview/pr-862/concepts/how-celestia-works/monolithic-vs-modular"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Celestia is a modular blockchain network whose goal is to build a scalable\n",(0,a.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-a-scalable-general-purpose-data-availability-layer-for-decentralized-apps-and-trust-minimized-sidechains"},"data availability layer"),",\nenabling the next generation of scalable blockchain architectures -\n",(0,a.kt)("a",{parentName:"p",href:"https://celestia.org/learn"},"modular blockchains"),". Celestia scales by\n",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.09274"},"decoupling execution from consensus")," and\nintroducing a new primitive,\n",(0,a.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"data availability sampling"),"."),(0,a.kt)("p",null,"The former entails that Celestia is only responsible for ordering\ntransactions and guaranteeing their data availability; this is\nsimilar to ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Atomic_broadcast#Equivalent_to_Consensus"},"reducing consensus to atomic broadcast"),"."),(0,a.kt)("p",null,"The latter provides an efficient solution to the\n",(0,a.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/alexandria/article/what-is-data-availability"},"data availability problem"),"\nby only requiring resource-limited light nodes to sample a\nsmall number of random chunks from each block to verify data availability."),(0,a.kt)("p",null,"Interestingly, more light nodes that participate in sampling\nincreases the amount of data that the network can safely handle,\nenabling the block size to increase without equally increasing the\ncost to verify the chain."))}d.isMDXComponent=!0}}]);