"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2236],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),u=n,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||o;return t?a.createElement(f,i(i({ref:r},c),{},{components:t})):a.createElement(f,i({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},641:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_label:"Hardfork Process",description:"Overview of the Celestia hardfork process."},i="Celestia hardfork process",s={unversionedId:"nodes/hardfork-process",id:"nodes/hardfork-process",title:"Celestia hardfork process",description:"Overview of the Celestia hardfork process.",source:"@site/docs/nodes/hardfork-process.md",sourceDirName:"nodes",slug:"/nodes/hardfork-process",permalink:"/pr-preview/pr-906/nodes/hardfork-process",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/hardfork-process.md",tags:[],version:"current",frontMatter:{sidebar_label:"Hardfork Process",description:"Overview of the Celestia hardfork process."},sidebar:"nodes",previous:{title:"SystemD",permalink:"/pr-preview/pr-906/nodes/systemd"}},l={},d=[{value:"General process",id:"general-process",level:2},{value:"Mocha hardfork",id:"mocha-hardfork",level:3},{value:"Blockspace race hardfork",id:"blockspace-race-hardfork",level:3}],c={toc:d},p="wrapper";function h(e){let{components:r,...t}=e;return(0,n.kt)(p,(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"celestia-hardfork-process"},"Celestia hardfork process"),(0,n.kt)("p",null,"Blockchain networks often times need to upgrade with new features\nwhich require coordination work among the validators prior to activating\nthe upgrades."),(0,n.kt)("p",null,"This process is called a hardfork or a network upgrade. In those events,\nthe Celestia Labs team will be coordinating with the validators on\nwhat they need to do in order to be ready for an upcoming hardfork."),(0,n.kt)("p",null,"Hardforks are not backward-compatible with older versions of the network\nsoftware which is why it is important that validators upgrade their software\nto continue validating on the network after the network upgrades."),(0,n.kt)("h2",{id:"general-process"},"General process"),(0,n.kt)("p",null,"The general process can be broken down into several components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hardfork specifications and features (defined by description of features\nand code implementation of those features)."),(0,n.kt)("li",{parentName:"ul"},"Binary used to add those features (a new binary release with those features\nwill be provided by Celestia team in order for validators to upgrade\ntheir nodes to the new binary)."),(0,n.kt)("li",{parentName:"ul"},"A block number for when the network upgrades (even if validators upgrade\ntheir binary to be hardfork ready, the network upgrade does not happen right\naway, but some short time in the future at a specific block number)."),(0,n.kt)("li",{parentName:"ul"},"Testing of the features (happens on testnets first prior to activating on\nmainnet in order to ensure the network can upgrade securely).")),(0,n.kt)("p",null,"The two testnets were hardforks are deployed on are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-906/nodes/arabica-devnet"},"Arabica")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/pr-preview/pr-906/nodes/mocha-testnet"},"Mocha"))),(0,n.kt)("h3",{id:"mocha-hardfork"},"Mocha hardfork"),(0,n.kt)("p",null,"Celestia is planning the Mocha Hardfork upgrade on the Mamaki Testnet.\nThis hardfork is unique as it will reset the Mamaki network to block 0\nwhile maintaining the existing state and also will rename Mamaki to Mocha."),(0,n.kt)("p",null,"The new chain-id will be ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha"),"."),(0,n.kt)("p",null,"The release logs for ",(0,n.kt)("inlineCode",{parentName:"p"},"mocha")," can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/releases"},"here"),"."),(0,n.kt)("p",null,"The most exciting feature included is setting the stage for QGB on Mocha."),(0,n.kt)("p",null,"Validators will need to generate 2 new keys in order to be QGB-ready.\nNote that for the Mocha Hardfork, QGB will not launch yet so you\ncan swap those keys after for new ones if needed. The keys needed are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 EVM key"),(0,n.kt)("li",{parentName:"ul"},"1 Celestia key")),(0,n.kt)("p",null,"So, in order for this to happen, validators will need to maintain two\nnew keys in order to have a successful upgrade."),(0,n.kt)("p",null,"Those two keys will need to be added to 2 new flags on ",(0,n.kt)("inlineCode",{parentName:"p"},"celestia-app"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--evm-address"),": This flag should contain a ",(0,n.kt)("inlineCode",{parentName:"li"},"0x")," EVM address.")),(0,n.kt)("h3",{id:"blockspace-race-hardfork"},"Blockspace race hardfork"),(0,n.kt)("p",null,"The Blockspace Race hardfork process will follow\na different workflow than regular Tendermint and Cosmos-SDK\nnetwork upgrades."),(0,n.kt)("p",null,"Instead of using tools like Cosmovisor and swapping binaries at block\nactivation number, validators will be upgrading to new binaries\nahead of the hardfork block number. The new binaries will have\nthe new logic and features for activating when the target block\nnumber for the hardfork is reached."),(0,n.kt)("p",null,"To prepare for the hardfork, please upgrade to the new ",(0,n.kt)("inlineCode",{parentName:"p"},"celestia-app"),"\nversion referenced in the Blockspace Race task."))}h.isMDXComponent=!0}}]);