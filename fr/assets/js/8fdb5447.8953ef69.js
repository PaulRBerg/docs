"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[593],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?l.createElement(f,n(n({ref:t},p),{},{components:r})):l.createElement(f,n({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,n[1]=i;for(var c=2;c<o;c++)n[c]=r[c];return l.createElement.apply(null,n)}return l.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4770:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var l=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Demos on Celestia",description:"A collection of various demos built on Celestia."},n="Demos on Celestia",i={unversionedId:"developers/demos",id:"developers/demos",title:"Demos on Celestia",description:"A collection of various demos built on Celestia.",source:"@site/docs/developers/demos.md",sourceDirName:"developers",slug:"/developers/demos",permalink:"/fr/developers/demos",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/demos.md",tags:[],version:"current",frontMatter:{sidebar_label:"Demos on Celestia",description:"A collection of various demos built on Celestia."},sidebar:"developers",previous:{title:"IBC Relaying Guide",permalink:"/fr/developers/ibc-relayer"},next:{title:"Integrate Celestia",permalink:"/fr/developers/integrate-celestia"}},s={},c=[{value:"Celestia",id:"celestia",level:2},{value:"OP Stack testnet",id:"op-stack-testnet",level:2},{value:"Rollkit",id:"rollkit",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"demos-on-celestia"},"Demos on Celestia"),(0,a.kt)("p",null,"This page is a collection of demos built by the community on top of\nCelestia. If you'd like to add yours to the list, please ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/docs/edit/main/docs/developers/demos.md"},"edit this page"),"\nand make a pull request to do so!"),(0,a.kt)("h2",{id:"celestia"},"Celestia"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"macOS light node client - ",(0,a.kt)("a",{parentName:"li",href:"https://quasarapp.xyz"},"quasarapp.xyz")),(0,a.kt)("li",{parentName:"ul"},"RPC CLI tutorial with an on-chain SVG - ",(0,a.kt)("a",{parentName:"li",href:"https://based64.xyz"},"based64.xyz"))),(0,a.kt)("h2",{id:"op-stack-testnet"},"OP Stack testnet"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gm portal, a smart contract demo - ",(0,a.kt)("a",{parentName:"li",href:"https://gmportal.xyz"},"gmportal.xyz")),(0,a.kt)("li",{parentName:"ul"},"generative art marketplace - ",(0,a.kt)("a",{parentName:"li",href:"https://buildmarket.xyz"},"buildmarket.xyz"))),(0,a.kt)("h2",{id:"rollkit"},"Rollkit"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"frontend for gm world tutorial - ",(0,a.kt)("a",{parentName:"li",href:"https://rollkit.dev/tutorials/gm-world-frontend"},"rollkit-frontend.vercel.app")),(0,a.kt)("li",{parentName:"ul"},"ethermint demo - ",(0,a.kt)("a",{parentName:"li",href:"https://saymoo.lol/"},"saymoo.lol")," (deprecated)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jcstein/celestia-rollkit-nfts"},"NFT collection")," made with Thirdweb SDK and their widgets -  (deprecated)")),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://buildwhatever.com"},"buildwhatever.com"))))}u.isMDXComponent=!0}}]);