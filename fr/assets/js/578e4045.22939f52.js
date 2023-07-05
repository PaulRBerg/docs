"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),b=n,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},3255:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(464),o=a(578);const l=()=>r.createElement("ul",null,r.createElement("li",null,"Celestia Node - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${n.Z["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},n.Z["node-latest-tag"])),r.createElement("li",null,"Celestia App - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${n.Z["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},n.Z["app-latest-tag"])),r.createElement("li",null,"Rollkit - ",r.createElement("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${o.Z.arabicaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},o.Z.arabicaRollkitVersion)))},4058:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(8549),o=a(578);const l=()=>r.createElement("ul",null,r.createElement("li",null,"Celestia Node - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-node/releases/tag/${n.Z["node-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},n.Z["node-latest-tag"])),r.createElement("li",null,"Celestia App - ",r.createElement("a",{href:`https://github.com/celestiaorg/celestia-app/releases/tag/${n.Z["app-latest-tag"]}`,target:"_blank",rel:"noopener noreferrer"},n.Z["app-latest-tag"])),r.createElement("li",null,"Rollkit - ",r.createElement("a",{href:`https://github.com/rollkit/rollkit/releases/tag/${o.Z.mochaRollkitVersion}`,target:"_blank",rel:"noopener noreferrer"},o.Z.mochaRollkitVersion)))},464:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({"app-latest-tag":"v1.0.0-rc7","app-latest-sha":"2ad80bc4aa1be3ddae6b417189ce58088a93c666","core-latest-tag":"v1.23.0-tm-v0.34.28","core-latest-sha":"67cc27bcb051f911c40444530f4e5257b04dd469","node-latest-tag":"v0.11.0-rc6","node-latest-sha":"061b78881d7d3b968fafaff5ec2744f75b775954"})},578:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({golangNodeBSR:"1.20.2",golangNodeMocha:"1.19.1",golangNodeArabica:"1.20.2",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-9",bsrChainId:"blockspacerace-0",mochaChainId:"mocha-3",arabicaRollkitVersion:"v0.8.2-rc0",mochaRollkitVersion:"currently not compatible",bsrRollkitVersion:"v0.8.1",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2",orchrelayVersion:"v0.2.0-app-v0.13.2-beta"})},8549:(e,t,a)=>{a.d(t,{Z:()=>r});const r=Object.freeze({"app-latest-tag":"v1.0.0-rc7","app-latest-sha":"2ad80bc4aa1be3ddae6b417189ce58088a93c666","core-latest-tag":"v1.23.0-tm-v0.34.28","core-latest-sha":"67cc27bcb051f911c40444530f4e5257b04dd469","node-latest-tag":"v0.11.0-rc6","node-latest-sha":"061b78881d7d3b968fafaff5ec2744f75b775954"})},1731:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),o=a(4058),l=a(3255);const i={sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},s="Participate in the Celestia testnets",c={unversionedId:"nodes/participate",id:"nodes/participate",title:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in.",source:"@site/docs/nodes/participate.mdx",sourceDirName:"nodes",slug:"/nodes/participate",permalink:"/fr/nodes/participate",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/participate.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Participate in the Celestia testnets",description:"Celestia testnets that you can participate in."},sidebar:"nodes",previous:{title:"Overview",permalink:"/fr/nodes/overview"},next:{title:"Arabica devnet",permalink:"/fr/nodes/arabica-devnet"}},p={},d=[{value:"Network upgrades",id:"network-upgrades",level:2}],u=(b="BsrVersionTags",function(e){return console.warn("Component "+b+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var b;const f={toc:d},g="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(g,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"participate-in-the-celestia-testnets"},"Participate in the Celestia testnets"),(0,n.kt)("p",null,"Celestia currently has three existing testnets that you can participate in:"),(0,n.kt)("p",null,"{/* * ",(0,n.kt)("a",{parentName:"p",href:"/fr/nodes/blockspace-race"},"Blockspace race"),": An incentivised testnet for all participants:\nvalidators and other node operators, integrators, rollups and anyone curious. This\ntestnet closely reflects the version of Celestia at launch."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compatible software versions",(0,n.kt)(u,{mdxType:"BsrVersionTags"})," */}"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/nodes/arabica-devnet"},"Arabica devnet"),": A devnet focused on developers who\nwant to deploy sovereign rollups on the latest changes from Celestia's codebase.\nArabica will be updated frequently and might be unstable at times given new updates.\nValidators won't be able to validate on Arabica as it is not designed for\nvalidators to participate.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compatible software versions",(0,n.kt)(l.Z,{mdxType:"ArabicaVersionTags"})))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/fr/nodes/mocha-testnet"},"Mocha testnet"),": A testnet focused on enabling validators\nto test out their infrastructure by running nodes connected to the network. Developers\ncan also deploy sovereign rollups on Mocha, it just will always be behind Arabica\nas Mocha upgrades are slower given they need to be done via hardforks in coordination\nwith the validator community on Mocha.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Compatible software versions",(0,n.kt)(o.Z,{mdxType:"MochaVersionTags"}))))),(0,n.kt)("h2",{id:"network-upgrades"},"Network upgrades"),(0,n.kt)("p",null,"Join our ",(0,n.kt)("a",{parentName:"p",href:"https://t.me/+smSFIA7XXLU4MjJh"},"Telegram announcement channel"),"\nfor network upgrades."))}m.isMDXComponent=!0}}]);