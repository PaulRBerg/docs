"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),o=a(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),o=a(7294),r=a(6010),l=a(2466),s=a(6550),i=a(1980),u=a(7392),c=a(12);function d(e){return function(e){return o.Children.map(e,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:o}}=e;return{value:t,label:a,attributes:n,default:o}}))}function p(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=p(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[i,u]=h({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,c.Nk)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),k=(()=>{const e=i??d;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var k=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(d(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},o.createElement(b,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return o.createElement(v,(0,n.Z)({key:String(t)},e))}},1309:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=a(7462),o=(a(7294),a(3905)),r=a(4866),l=a(5162);const s={sidebar_label:"Full storage node",description:"Set up a Celestia full storage node."},i="Setting up a Celestia full storage Node",u={unversionedId:"nodes/full-storage-node",id:"nodes/full-storage-node",title:"Setting up a Celestia full storage Node",description:"Set up a Celestia full storage node.",source:"@site/docs/nodes/full-storage-node.mdx",sourceDirName:"nodes",slug:"/nodes/full-storage-node",permalink:"/nodes/full-storage-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/full-storage-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Full storage node",description:"Set up a Celestia full storage node."},sidebar:"nodes",previous:{title:"Bridge node",permalink:"/nodes/bridge-node"},next:{title:"Consensus",permalink:"/category/consensus"}},c={},d=[{value:"Overview of full storage nodes",id:"overview-of-full-storage-nodes",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Setting up your full storage node",id:"setting-up-your-full-storage-node",level:2},{value:"Setup the dependencies",id:"setup-the-dependencies",level:3},{value:"Install celestia-node",id:"install-celestia-node",level:2},{value:"Run the full storage node",id:"run-the-full-storage-node",level:3},{value:"Initialize the full storage node",id:"initialize-the-full-storage-node",level:4},{value:"Start the full storage node",id:"start-the-full-storage-node",level:4},{value:"Optional: run the full storage node with a custom key",id:"optional-run-the-full-storage-node-with-a-custom-key",level:3},{value:"Optional: start the full storage node with SystemD",id:"optional-start-the-full-storage-node-with-systemd",level:3},{value:"Stop the full node",id:"stop-the-full-node",level:3}],p={toc:d},m="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(m,(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-celestia-full-storage-node"},"Setting up a Celestia full storage Node"),(0,o.kt)("p",null,"This tutorial will guide you through setting up a Celestia Full Storage\nNode, which is a ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," that doesn't connect to ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-app"),"\n(hence not a full node) but stores all the data."),(0,o.kt)("h2",{id:"overview-of-full-storage-nodes"},"Overview of full storage nodes"),(0,o.kt)("p",null,"Full Storage nodes are Celestia nodes that store all the data. Full\nStorage nodes send block shares, headers, and fraud proofs to Light Nodes.\nThe Light Nodes gossip headers, fraud proofs, and sometimes block shares, between one another. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Full Storage Node",src:a(5533).Z,width:"3000",height:"2248"})),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe full storage node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: ",(0,o.kt)("strong",{parentName:"li"},"8 GB RAM")),(0,o.kt)("li",{parentName:"ul"},"CPU: ",(0,o.kt)("strong",{parentName:"li"},"Quad-Core")),(0,o.kt)("li",{parentName:"ul"},"Disk: ",(0,o.kt)("strong",{parentName:"li"},"1 TB SSD Storage")),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: ",(0,o.kt)("strong",{parentName:"li"},"1 Gbps for Download/1 Gbps for Upload"))),(0,o.kt)("h2",{id:"setting-up-your-full-storage-node"},"Setting up your full storage node"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,o.kt)("h3",{id:"setup-the-dependencies"},"Setup the dependencies"),(0,o.kt)("p",null,"You can follow the tutorial for setting up your dependencies ",(0,o.kt)("a",{parentName:"p",href:"/nodes/environment"},"here")),(0,o.kt)("h2",{id:"install-celestia-node"},"Install celestia-node"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Make sure that you have at least 250+ Gb of free space for\nCelestia Full Storage Node")),(0,o.kt)("p",null,"You can follow the tutorial for installing ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-node")," ",(0,o.kt)("a",{parentName:"p",href:"/nodes/celestia-node"},"here")),(0,o.kt)("h3",{id:"run-the-full-storage-node"},"Run the full storage node"),(0,o.kt)("h4",{id:"initialize-the-full-storage-node"},"Initialize the full storage node"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init --p2p.network blockspacerace\n"))),(0,o.kt)(l.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init\n"))),(0,o.kt)(l.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full init --p2p.network arabica\n")))),(0,o.kt)("h4",{id:"start-the-full-storage-node"},"Start the full storage node"),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,o.kt)("p",null,"Start the Full Storage Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In order for access to the ability to get/submit\nstate-related information, such as the ability to\nsubmit ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions, or query for the\nnode's account balance, a gRPC endpoint of a validator\n(core) node must be passed as directed below."),(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports"),"\nsection for information on which ports are\nrequired to be open on your machine.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --p2p.network blockspacerace\n")),(0,o.kt)("p",null,"If you would like to find example RPC endpoints, check out the list of\nresources ",(0,o.kt)("a",{parentName:"p",href:"../blockspace-race"},"here"),"."),(0,o.kt)("p",null,"You can create your key for your node by following the ",(0,o.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,o.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key"},"here")),(0,o.kt)("p",null,"Once you start the Full Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\n",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions.\nYou can find the address by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type full --keyring-backend test --p2p.network <network>\n")),(0,o.kt)("p",null,"You can get testnet tokens from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../blockspace-race"},"Blockspace Race"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a full-storage node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMocha Testnet as well, it is just mostly used for Validator operations."))),(0,o.kt)(l.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("p",null,"Start the Full Storage Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In order for access to the ability to get/submit\nstate-related information, such as the ability to\nsubmit ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions, or query for the\nnode's account balance, a gRPC endpoint of a validator\n(core) node must be passed as directed below."),(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports"),"\nsection for information on which ports are\nrequired to be open on your machine.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip <ip-address>:<port>\n")),(0,o.kt)("p",null,"If you would like to find example RPC endpoints, check out the list of\nresources ",(0,o.kt)("a",{parentName:"p",href:"../mocha-testnet#rpc-endpoints"},"here"),"."),(0,o.kt)("p",null,"You can create your key for your node by following the ",(0,o.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,o.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key"},"here")),(0,o.kt)("p",null,"Once you start the Full Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\n",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions.\nYou can find the address by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type full --keyring-backend test --p2p.network <network>\n")),(0,o.kt)("p",null,"You can get testnet tokens from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../mocha-testnet"},"Mocha"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a full-storage node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMocha Testnet as well, it is just mostly used for Validator operations."))),(0,o.kt)(l.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("p",null,"Start the Full Storage Node with a connection to a validator node's gRPC endpoint\n(which is usually exposed on port 9090):"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"In order for access to the ability to get/submit\nstate-related information, such as the ability to\nsubmit ",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions, or query for the\nnode's account balance, a gRPC endpoint of a validator\n(core) node must be passed as directed below."),(0,o.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../nodes/celestia-node/#ports"},"ports"),"\nsection for information on which ports are\nrequired to be open on your machine.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --p2p.network arabica\n")),(0,o.kt)("p",null,"If you would like to find example RPC endpoints, check out the list of\nresources ",(0,o.kt)("a",{parentName:"p",href:"../arabica-devnet#rpc-endpoints"},"here"),"."),(0,o.kt)("p",null,"You can create your key for your node by following the ",(0,o.kt)("inlineCode",{parentName:"p"},"cel-key")," instructions ",(0,o.kt)("a",{parentName:"p",href:"../../developers/celestia-node-key"},"here")),(0,o.kt)("p",null,"Once you start the Full Node, a wallet key will be generated for you.\nYou will need to fund that address with testnet tokens to pay for\n",(0,o.kt)("inlineCode",{parentName:"p"},"PayForBlob")," transactions.\nYou can find the address by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./cel-key list --node.type full --keyring-backend test --p2p.network <network>\n")),(0,o.kt)("p",null,"You can get testnet tokens from:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../arabica-devnet"},"Arabica"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: If you are running a full-storage node for your sovereign\nrollup, it is highly recommended to request Arabica devnet tokens\nas Arabica has the latest changes that can be used to\ntest for developing your sovereign rollup. You can still use\nMocha Testnet as well, it is just mostly used for Validator operations.")))),(0,o.kt)("h3",{id:"optional-run-the-full-storage-node-with-a-custom-key"},"Optional: run the full storage node with a custom key"),(0,o.kt)("p",null,"In order to run a full storage node using a custom key:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The custom key must exist inside the celestia full storage node directory\nat the correct path (default: ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.celestia-full/keys/keyring-test"),")"),(0,o.kt)("li",{parentName:"ol"},"The name of the custom key must be passed upon ",(0,o.kt)("inlineCode",{parentName:"li"},"start"),", like so:")),(0,o.kt)(r.Z,{groupId:"network",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"blockspacerace",label:"Blockspace Race",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --keyring.accname <name-of-custom-key> --p2p.network blockspacerace\n"))),(0,o.kt)(l.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip <ip-address> --keyring.accname <name-of-custom-key>\n"))),(0,o.kt)(l.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia full start --core.ip http://<ip-address> --keyring.accname <name-of-custom-key> --p2p.network arabica\n")))),(0,o.kt)("h3",{id:"optional-start-the-full-storage-node-with-systemd"},"Optional: start the full storage node with SystemD"),(0,o.kt)("p",null,"Follow the tutorial on setting up the full storage node as a background\nprocess with SystemD ",(0,o.kt)("a",{parentName:"p",href:"/nodes/systemd"},"here"),"."),(0,o.kt)("p",null,"With that, you are now running a Celestia Full Storage Node."),(0,o.kt)("h3",{id:"stop-the-full-node"},"Stop the full node"),(0,o.kt)("p",null,"In order to gracefully stop the full node, use ",(0,o.kt)("inlineCode",{parentName:"p"},"Control + C")," in the\nterminal window where the node is running. Be sure to only do this once\nas the shutdown will not be instantaneous."))}h.isMDXComponent=!0},5533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-storage-node-41e9d75a94b6e34dc4c4e517cc2d1456.png"}}]);