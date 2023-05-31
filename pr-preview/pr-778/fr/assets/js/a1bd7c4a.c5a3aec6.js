"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||o;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_label:"Introduction to OP Stack integration",description:"Learn about the integration of OP Stack with Celestia."},r="Introduction to OP Stack integration",s={unversionedId:"developers/intro-to-op-stack",id:"developers/intro-to-op-stack",title:"Introduction to OP Stack integration",description:"Learn about the integration of OP Stack with Celestia.",source:"@site/docs/developers/intro-to-op-stack.md",sourceDirName:"developers",slug:"/developers/intro-to-op-stack",permalink:"/pr-preview/pr-778/fr/developers/intro-to-op-stack",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/intro-to-op-stack.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction to OP Stack integration",description:"Learn about the integration of OP Stack with Celestia."},sidebar:"developers",previous:{title:"Optimism",permalink:"/pr-preview/pr-778/fr/category/optimism"},next:{title:"Deploy an OP Stack devnet",permalink:"/pr-preview/pr-778/fr/developers/optimism-devnet"}},l={},p=[{value:"About the integration",id:"about-the-integration",level:2},{value:"Table of contents of the category",id:"table-of-contents-of-the-category",level:3},{value:"Celestia and OP Stack repository",id:"celestia-and-op-stack-repository",level:2},{value:"What are Optimism and the OP Stack?",id:"what-are-optimism-and-the-op-stack",level:3},{value:"What is Celestia?",id:"what-is-celestia",level:3},{value:"OP Stack and Celestia",id:"op-stack-and-celestia",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-op-stack-integration"},"Introduction to OP Stack integration"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://optimism.io"},"Optimism")," is a low-cost and lightning-fast Ethereum\nL2 blockchain, built with ",(0,i.kt)("a",{parentName:"p",href:"https://stack.optimism.io/"},"the OP Stack"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://celestia.org"},"Celestia")," is a modular consensus and data network,\nbuilt to enable anyone to easily deploy their own blockchain with\nminimal overhead."),(0,i.kt)("h2",{id:"about-the-integration"},"About the integration"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Discover how to integrate existing blockchain frameworks\nlike the OP Stack\ncan integrate with Celestia in this category.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Tested on a machine with 8GB RAM, 160 GB SSD,\nUbuntu 22.10, and a 4 core AMD CPU.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This is a ",(0,i.kt)("strong",{parentName:"p"},"beta integration")," and we are working on resolving open\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism/issues"},"issues"),".\nThe current testnet this setup is compatible with is the\n",(0,i.kt)("a",{parentName:"p",href:"../../nodes/blockspace-race"},"Blockspace Race")," testnet.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.optimism.io/"},"Optimism")," uses Ethereum as\na data availability (DA) layer. Currently, settlement and DA for\nOptimism are on Ethereum, both on-chain. ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher")," batches up\nrollup blocks and posts to Ethereum."),(0,i.kt)("h3",{id:"table-of-contents-of-the-category"},"Table of contents of the category"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../optimism-devnet"},"Deploy an OP Stack devnet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../optimism"},"Deploy an OP Stack testnet on Celestia"))),(0,i.kt)("h2",{id:"celestia-and-op-stack-repository"},"Celestia and OP Stack repository"),(0,i.kt)("p",null,"Find the repository for this integration\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism/"},"here")," or at\n",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/celestiaorg/optimism"),"."),(0,i.kt)("h3",{id:"what-are-optimism-and-the-op-stack"},"What are Optimism and the OP Stack?"),(0,i.kt)("p",null,"Optimism, an Ethereum L2 blockchain, is powered by the OP Stack,\nwhich is also the foundation for the\n",(0,i.kt)("a",{parentName:"p",href:"https://app.optimism.io/announcement"},"Optimism Collective")," committed\nto the ",(0,i.kt)("strong",{parentName:"p"},"impact=profit")," principle. This rewards individuals for their\npositive contributions to the collective."),(0,i.kt)("p",null,"Optimism addresses crypto ecosystem coordination failures, like funding public\ngoods and infrastructure. The OP Stack fosters collaboration and prevents\nredundancy by creating a shared, open-source system for developing new L2\nblockchains within the proposed Superchain ecosystem."),(0,i.kt)("p",null,"As Optimism evolves, the OP Stack will adapt to include components from\nblockchain infrastructure to governance systems. This software suite aims\nto simplify L2 blockchain creation and support the Optimism ecosystem's\ngrowth and development."),(0,i.kt)("p",null,"Learn more about Optimism ",(0,i.kt)("a",{parentName:"p",href:"https://www.optimism.io/"},"here"),"."),(0,i.kt)("h3",{id:"what-is-celestia"},"What is Celestia?"),(0,i.kt)("p",null,"Celestia is a modular consensus and data network, built to enable anyone to\neasily deploy their own blockchain with minimal overhead."),(0,i.kt)("p",null,"Celestia is a minimal blockchain that only orders and publishes transactions\nand does not execute them. By decoupling the consensus and application\nexecution layers, Celestia modularizes the blockchain technology stack\nand unlocks new possibilities for decentralized application builders.\nLean more at ",(0,i.kt)("a",{parentName:"p",href:"https://celestia.org"},"Celestia.org"),"."),(0,i.kt)("h2",{id:"op-stack-and-celestia"},"OP Stack and Celestia"),(0,i.kt)("p",null,"This category will guide you through how start your own devnet or testnet\nwith a modified version of ",(0,i.kt)("inlineCode",{parentName:"p"},"optimism-bedrock")," that uses Celestia as a\nDA layer."),(0,i.kt)("p",null,"The handling of data is accomplished in two ways. First, data is written\nto the data availability (DA) layer i.e. in this case Celestia, then the\ndata commitment is written to the ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher"),". When reading ",(0,i.kt)("inlineCode",{parentName:"p"},"op-node"),"\nsimply reads the data back from the DA layer by reading the\ndata commitment from the ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher")," first, then reading the\ndata from the DA layer using the data commitment. Hence, while\npreviously ",(0,i.kt)("inlineCode",{parentName:"p"},"op-node")," was reading from calldata on Ethereum,\nbut now it reads data from Celestia."),(0,i.kt)("p",null,"There are a few tools involved in the data handling process. ",(0,i.kt)("inlineCode",{parentName:"p"},"op-batcher"),"\nbatches up rollup blocks and posts them to Ethereum. ",(0,i.kt)("inlineCode",{parentName:"p"},"op-geth")," handles\nexecution, while ",(0,i.kt)("inlineCode",{parentName:"p"},"op-proposer")," is responsible for state commitment\nsubmission."),(0,i.kt)("p",null,"By using Celestia as a DA layer, existing L2s can switch from posting\ntheir data as ",(0,i.kt)("inlineCode",{parentName:"p"},"calldata")," on Ethereum, to posting to Celestia.\nThe commitment to the block is posted on Celestia, which is\npurpose-built for data availability. This is a more scalable than\nthe traditional method of posting this data as ",(0,i.kt)("inlineCode",{parentName:"p"},"calldata")," on monolithic chains."),(0,i.kt)("p",null,"If you'd like to go modular, bedrock has\nmade it easy to swap this out!"),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Now that you understand the integration, you can start learning about the\n",(0,i.kt)("a",{parentName:"p",href:"../taro-testnet"},"Taro testnet"),", built with OP Stack and Celestia! This\ntestnet is a great way to explore the possibilities of this integration\nand test your applications in a live environment."))}h.isMDXComponent=!0}}]);