"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),p=n(7392),u=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,p]=h({queryString:n,groupId:a}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==i&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",f.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,g.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162);const i={sidebar_label:"Troubleshooting",description:"A guide to troubleshooting common issues with Celestia Node."},s="Troubleshooting",p={unversionedId:"nodes/celestia-node-troubleshooting",id:"nodes/celestia-node-troubleshooting",title:"Troubleshooting",description:"A guide to troubleshooting common issues with Celestia Node.",source:"@site/docs/nodes/celestia-node-troubleshooting.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-node-troubleshooting",permalink:"/pr-preview/pr-875/nodes/celestia-node-troubleshooting",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-node-troubleshooting.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Troubleshooting",description:"A guide to troubleshooting common issues with Celestia Node."},sidebar:"nodes",previous:{title:"Config.toml guide",permalink:"/pr-preview/pr-875/nodes/config-toml"},next:{title:"Celestia App",permalink:"/pr-preview/pr-875/category/celestia-app"}},u={},d=[{value:"Ports",id:"ports",level:2},{value:"Changing the location of your node store",id:"changing-the-location-of-your-node-store",level:2},{value:"Network selection",id:"network-selection",level:2},{value:"Resetting your config",id:"resetting-your-config",level:2},{value:"All node types on v0.9.1 and later",id:"all-node-types-on-v091-and-later",level:3},{value:"All node types on v0.9.0 and earlier",id:"all-node-types-on-v090-and-earlier",level:3},{value:"Clearing the data store",id:"clearing-the-data-store",level:2},{value:"Version 0.9.0+",id:"version-090",level:3},{value:"Example for light node on Blockspace Race on v0.9.0+",id:"example-for-light-node-on-blockspace-race-on-v090",level:3},{value:"Bridge and full nodes v0.8.2 and earlier",id:"bridge-and-full-nodes-v082-and-earlier",level:3},{value:"Light nodes v0.8.2 and earlier",id:"light-nodes-v082-and-earlier",level:3},{value:"Example for Blockspace Race on v0.8.2 and earlier",id:"example-for-blockspace-race-on-v082-and-earlier",level:4},{value:"FATAL headers given to the heightSub are in the wrong order",id:"fatal-headers-given-to-the-heightsub-are-in-the-wrong-order",level:2}],c={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h2",{id:"ports"},"Ports"),(0,r.kt)("p",null,"When interacting with a Celestia node,\nyou may need to open ports on your machine to allow\ncommunication between nodes, such as bridge nodes. It is essential that\nspecific ports are accessible. Make sure that your firewall allows\nconnections to the correct ports."),(0,r.kt)("p",null,"If you run a node on a cloud server, make sure that the ports are open\non the server's firewall. If you run a node at home, make sure that your\nrouter allows connections to the correct ports."),(0,r.kt)("p",null,"For example, validator ports 9090\nand 26657 need to be accessible by the bridge, and port 2121 is\nrequired for P2P connections for all node types."),(0,r.kt)("p",null,"The following ports are used by Celestia nodes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:null},"Address"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Enabled by default on node"),(0,r.kt)("th",{parentName:"tr",align:null},"Flag"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2121"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/UDP"),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null},"P2P"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"N/A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26658"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null},"RPC"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--rpc.port string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"26659"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null},"REST Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--gateway.port string"))))),(0,r.kt)("h2",{id:"changing-the-location-of-your-node-store"},"Changing the location of your node store"),(0,r.kt)("p",null,"In this section, we'll guide you through starting your node using a\nnode store in a different location than you originally started with."),(0,r.kt)("p",null,"First, stop your node safely using ",(0,r.kt)("inlineCode",{parentName:"p"},"control + C"),"."),(0,r.kt)("p",null,"Then, init your node again with a new node store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node-type> init --node.store /home/user/celestia-<node-type>-location/ --p2p.network blockspacerace\n")),(0,r.kt)("p",null,"Next, start your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia full start --core.ip rpc-blockspacerace.pops.one --p2p.network blockspacerace --node.store /home/user/celestia-<node-type>-location/\n")),(0,r.kt)("p",null,"If you choose to change the location of your node store,\nyou will need to execute each command on your node with\nthe following flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"--node.store /home/user/celestia-<node-type>-location/\n")),(0,r.kt)("p",null,"When using ",(0,r.kt)("inlineCode",{parentName:"p"},"cel-key"),", the process is different.\nTo show the keys you should add ",(0,r.kt)("inlineCode",{parentName:"p"},"--keyring-dir")," like this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./cel-key list --p2p.network blockspacerace --node.type full --keyring-dir /home/user/celestia-<node-type>-location/keys/\n")),(0,r.kt)("h2",{id:"network-selection"},"Network selection"),(0,r.kt)("p",null,"Note: If you do not select a network, the default network will be 'Mocha'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node-type> init --p2p.network <network>\ncelestia <node-type> start --p2p.network <network> --core.ip <address> --gateway.deprecated-endpoints --gateway --gateway.addr <ip-address> --gateway.port <port>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"NOTE: It is advised before switching networks to reinitialize\nyour node via ",(0,r.kt)("inlineCode",{parentName:"p"},"init")," command. This is due to an old config being present.\nRe-initialisation will reset the config.")),(0,r.kt)("h2",{id:"resetting-your-config"},"Resetting your config"),(0,r.kt)("p",null,"If you an encounter an error, it is likely that an old config file is present:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Error: nodebuilder/share: interval must be positive; nodebuilder/core: invalid IP addr given:\n\n# or\n\nError: nodebuilder/share: interval must be positive\n")),(0,r.kt)("p",null,"You can re-initialize your node's config with the following commands:"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Save your config so custom values are not lost.")),(0,r.kt)(o.Z,{groupId:"nodever",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"0.9.1",label:"v0.9.1 and later",mdxType:"TabItem"},(0,r.kt)("h3",{id:"all-node-types-on-v091-and-later"},"All node types on v0.9.1 and later"),(0,r.kt)("p",null,"Run the following command to update your config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node-type> config-update --p2p.network <network>\n")),(0,r.kt)("p",null,"This will pull in any new values from new configuration\nand merge them into the existing configuration."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"After using the ",(0,r.kt)("inlineCode",{parentName:"p"},"config-update")," command, it is encouraged to\ndouble-check that your custom values are preserved.")),(0,r.kt)("p",null,"Then, to start your node again:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node-type> start --p2p.network <network>\n"))),(0,r.kt)(l.Z,{value:"0.9.0",label:"v0.9.0 and earlier",mdxType:"TabItem"},(0,r.kt)("h3",{id:"all-node-types-on-v090-and-earlier"},"All node types on v0.9.0 and earlier"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, remove your config:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm ~./<path-to-node-store>/config.toml\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Re-initialize the node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node-type> init --p2p.network <network>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you have saved any custom values, add them back to the config.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Start the node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node-type> start --p2p.network <network>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")))),(0,r.kt)("h2",{id:"clearing-the-data-store"},"Clearing the data store"),(0,r.kt)(o.Z,{groupId:"nodever",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"0.9.0",label:"v0.9.0 and later",mdxType:"TabItem"},(0,r.kt)("h3",{id:"version-090"},"Version 0.9.0+"),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"bridge, full, and light nodes"),",\nremove the data store with this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia <node-type> unsafe-reset-store --p2p.network <network>\n")),(0,r.kt)("h3",{id:"example-for-light-node-on-blockspace-race-on-v090"},"Example for light node on Blockspace Race on v0.9.0+"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"celestia light unsafe-reset-store --p2p.network blockspacerace\n"))),(0,r.kt)(l.Z,{value:"0.8.2",label:"v0.8.2 and earlier",mdxType:"TabItem"},(0,r.kt)("h3",{id:"bridge-and-full-nodes-v082-and-earlier"},"Bridge and full nodes v0.8.2 and earlier"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Make sure not to remove anything except the\ndirectories listed below.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, remove the data store:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store>/data\nrm -rf ~./<path-to-node-store>/transients\nrm -rf ~./<path-to-node-store>/index\nrm -rf ~./<path-to-node-store>/blocks\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Re-initialize the node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node type> init --p2p.network <network>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Start the node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia <node type> start --p2p.network <network>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("h3",{id:"light-nodes-v082-and-earlier"},"Light nodes v0.8.2 and earlier"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Make sure not to remove anything except the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<path-to-node-store>/data")," directory.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, remove the data store:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store>/data\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Re-initialize the node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init --p2p.network <network>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Start the node:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network <network>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("h4",{id:"example-for-blockspace-race-on-v082-and-earlier"},"Example for Blockspace Race on v0.8.2 and earlier"),(0,r.kt)("p",null,"Here's an example for clearing the data store\non Blockspace Race with a light node:"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Make sure not to remove anything except the\n",(0,r.kt)("inlineCode",{parentName:"p"},"<path-to-node-store>/data")," directory.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./celestia-light-blockspacerace-0/data\ncelestia light init --p2p.network blockspacerace\n")),(0,r.kt)("p",null,"Your output will look similar to below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'2022-11-01T22:23:19.581+0100    INFO    node    nodebuilder/init.go:20  Initializing Light Node Store over \'/Users/joshstein/.celestia-light-blockspacerace-0\'\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:51  Saving config   {"path": "/Users/joshstein/.celestia-light-blockspacerace-0/config.toml"}\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:52  Node Store initialized\n')),(0,r.kt)("p",null,"Then start your node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network blockspacerace --core.ip <address> --gateway.deprecated-endpoints --gateway --gateway.addr <ip-address> --gateway.port <port>\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"#ports"},"ports")," section for information on\nwhich ports are required to be open on your machine.")),(0,r.kt)("h2",{id:"fatal-headers-given-to-the-heightsub-are-in-the-wrong-order"},"FATAL headers given to the heightSub are in the wrong order"),(0,r.kt)("p",null,"If you observe a FATAL log line like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-log"},'FATAL   header/store    store/heightsub.go:87   PLEASE FILE A BUG REPORT: headers given to the heightSub are in the wrong order"\n')),(0,r.kt)("p",null,"then it is possible the celestia-node ",(0,r.kt)("inlineCode",{parentName:"p"},"data/")," directory contains headers from a\nprevious instance of the network that you are currently trying to run against.\nOne resolution strategy is to delete the existing celestia-node config for the\ntarget network and re-initialize it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# rm -rf ~/.celestia-<node-type>-<network>\nrm -rf ~/.celestia-bridge-private\n\n# celestia <node-type> init --p2p.network <network>\ncelestia bridge init --p2p.network private\n")))}h.isMDXComponent=!0}}]);