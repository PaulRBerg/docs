"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9641],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),k=a,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||r;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=n[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2983:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(7294),a=n(4334),r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,i),hidden:n},t)}},8420:function(e,t,n){n.d(t,{Z:function(){return k}});var l=n(3117),a=n(7294),r=n(4334),i=n(2389),o=n(7392),s=n(7094),c=n(2466),u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:k,groupId:m,className:b}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=k??g.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,a.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,c.o5)();if(null!=m){const e=y[m];null!=e&&e!==N&&h.some((t=>t.value===e))&&T(e)}const Z=e=>{const t=e.currentTarget,n=C.indexOf(t),l=h[n].value;l!==N&&(I(t),T(l),null!=m&&w(m,String(l)))},O=e=>{var t;let n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},b)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:O,onClick:Z},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function k(e){const t=(0,i.Z)();return a.createElement(p,(0,l.Z)({key:String(t)},e))}},464:function(e,t){const n=Object.freeze({"app-latest-tag":"v0.12.7-rc7","app-latest-sha":"67c90ede03d2543ce9b02726dfe17cf5aad1f20a","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.7.0-rc4","node-latest-sha":"8b9937fa04b9702bfb4f4b5604f05aa254713644"});t.Z=n},5480:function(e,t){const n=Object.freeze({golangNode:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-5"});t.Z=n},8549:function(e,t){const n=Object.freeze({"app-latest-tag":"v0.11.1","app-latest-sha":"a1eb594d43137ded5f9c1062168d26139a251e16","core-latest-tag":"v1.14.0-tm-v0.34.23","core-latest-sha":"ab4ef71b202dd9d27c879a820fa06e127d4234fa","node-latest-tag":"v0.6.4","node-latest-sha":"747c9e593542dfb32a933c731a9cd74b1fab897f"});t.Z=n},7245:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var l=n(3117),a=(n(7294),n(3905)),r=n(5480),i=n(8549),o=n(464),s=n(8420),c=n(2983);const u={sidebar_label:"Installing Celestia Node"},d="Celestia Node",p={unversionedId:"nodes/celestia-node",id:"nodes/celestia-node",title:"Celestia Node",description:"This tutorial goes over building and installing celestia-node. This",source:"@site/docs/nodes/celestia-node.mdx",sourceDirName:"nodes",slug:"/nodes/celestia-node",permalink:"/pr-preview/pr-445/nodes/celestia-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/celestia-node.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Installing Celestia Node"},sidebar:"nodes",previous:{title:"Setting Up Environment",permalink:"/pr-preview/pr-445/nodes/environment"},next:{title:"Docker Images",permalink:"/pr-preview/pr-445/nodes/docker-images"}},k={},m=[{value:"Install Celestia Node",id:"install-celestia-node",level:2},{value:"Network Selection",id:"network-selection",level:2},{value:"Errors",id:"errors",level:3},{value:"Errors",id:"errors-1",level:3}],b={toc:m};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"celestia-node"},"Celestia Node"),(0,a.kt)("p",null,"This tutorial goes over building and installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node"),". This\ntutorial assumes you completed the steps in setting up your development\nenvironment ",(0,a.kt)("a",{parentName:"p",href:"/pr-preview/pr-445/nodes/environment"},"here"),"."),(0,a.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,a.kt)(s.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,a.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Mocha Testnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",i.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",i.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))))),(0,a.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,a.kt)(s.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"amd",label:"Ubuntu (AMD)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"arm",label:"Ubuntu (ARM)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/linux ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"apple",label:"Mac (Apple)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: arm64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null)))),(0,a.kt)(c.Z,{value:"mac",label:"Mac (Intel)",mdxType:"TabItem"},(0,a.kt)("p",null,"Installing ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," for Arabica Devnet means installing a specific version\nto be compatible with the network."),(0,a.kt)("p",null,"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," binary by running the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"cd $HOME ",(0,a.kt)("br",null),"rm -rf celestia-node ",(0,a.kt)("br",null),"git clone https://github.com/celestiaorg/celestia-node.git ",(0,a.kt)("br",null),"cd celestia-node/ ",(0,a.kt)("br",null),"git checkout tags/",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"make go-install ",(0,a.kt)("br",null),"make cel-key ",(0,a.kt)("br",null))),(0,a.kt)("p",null,"Verify that the binary is working and check the version with the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia\nversion")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"$ celestia version ",(0,a.kt)("br",null),"Semantic version: ",o.Z["node-latest-tag"]," ",(0,a.kt)("br",null),"Commit: ",o.Z["node-latest-sha"]," ",(0,a.kt)("br",null),"Build Date: Thu Dec 15 10:19:22 PM UTC 2022 ",(0,a.kt)("br",null),"System version: amd64/darwin ",(0,a.kt)("br",null),"Golang version: go",r.Z.golangNode," ",(0,a.kt)("br",null))))))),(0,a.kt)("h2",{id:"network-selection"},"Network Selection"),(0,a.kt)("p",null,"Note: If you do not select a network, the default network will be 'Mocha'."),(0,a.kt)(s.Z,{groupId:"network",mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"mocha",label:"Mocha",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init --p2p.network mocha \ncelestia light start --p2p.network mocha --core.ip <address> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: It is advised before switching networks to reinitialize\nyour node via ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command. This is due to an old config being present.\nRe-initialisation will reset the config.")),(0,a.kt)("h3",{id:"errors"},"Errors"),(0,a.kt)("p",null,"If you an encounter an error, it is likely that an old config file is present:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Error: nodebuilder/share: interval must be positive; nodebuilder/core: invalid IP addr given:\n\n# or\n\nError: nodebuilder/share: interval must be positive\n")),(0,a.kt)("p",null,"You can re-initialize your node with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store> && celestia light init --p2p.network <network-name>\n")),(0,a.kt)("p",null,"Here's an example for Mocha:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./celestia-light-mocha && celestia light init --p2p.network mocha\n")),(0,a.kt)("p",null,"Your output will look similar to below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'2022-11-01T22:23:19.581+0100    INFO    node    nodebuilder/init.go:20  Initializing Light Node Store over \'/Users/joshstein/.celestia-light\'\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:51  Saving config   {"path": "/Users/joshstein/.celestia-light/config.toml"}\n2022-11-01T22:23:19.582+0100    INFO    node    nodebuilder/init.go:52  Node Store initialized\n')),(0,a.kt)("p",null,"Then start your node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network mocha --core.ip <address> --gateway --gateway.addr <ip-address> --gateway.port <port>\n"))),(0,a.kt)(c.Z,{value:"arabica",label:"Arabica \ud83c\udfd7\ufe0f",mdxType:"TabItem"},(0,a.kt)("p",null,"You can perform network selection in ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node")," between Arabica and\nMocha. However, you should note that networks work best on the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-node"),"\nversions mentioned above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init --p2p.network arabica\ncelestia light start --p2p.network arabica --core.ip <address> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"NOTE: It is advised before switching networks to reinitialize\nyour node via ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command. This is due to an old config being present.\nRe-initialisation will reset the config.")),(0,a.kt)("h3",{id:"errors-1"},"Errors"),(0,a.kt)("p",null,"If you an encounter an error, it is likely that an old config file is present:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"Error: nodebuilder/share: interval must be positive; nodebuilder/core: invalid IP addr given:\n\n# or\n\nError: nodebuilder/share: interval must be positive\n")),(0,a.kt)("p",null,"You can re-initialize your node with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~./<path-to-node-store> && celestia light init --p2p.network <network-name>\n")),(0,a.kt)("p",null,"Here's an example for Arabica:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"rm -rf ~./celestia-light-",r.Z.arabicaChainId," && celestia light init --p2p.network arabica")),(0,a.kt)("p",null,"Your output will look similar to below:"),(0,a.kt)("pre",null,(0,a.kt)("code",null,"2022-11-01T22:23:19.581+0100 INFO node nodebuilder/init.go:20 Initializing Light Node Store over '/Users/joshstein/.celestia-light-",r.Z.arabicaChainId,"' ",(0,a.kt)("br",null),"2022-11-01T22:23:19.582+0100 INFO node nodebuilder/init.go:51 Saving config ",`{"path": "/Users/joshstein/.celestia-light-${r.Z.arabicaChainId}/config.toml"}`,"` ",(0,a.kt)("br",null),"2022-11-01T22:23:19.582+0100 INFO node nodebuilder/init.go:52 Node Store initialized")),(0,a.kt)("p",null,"Then start your node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --p2p.network arabica --core.ip <address> --gateway --gateway.addr <ip-address> --gateway.port <port>\n")))))}g.isMDXComponent=!0}}]);