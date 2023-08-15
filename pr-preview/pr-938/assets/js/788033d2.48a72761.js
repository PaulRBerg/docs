"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9399],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(a),f=l,b=p["".concat(c,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:l,o[1]=s;for(var i=2;i<r;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>N});var n=a(7462),l=a(7294),r=a(6010),o=a(2466),s=a(6550),c=a(1980),i=a(7392),d=a(12);function p(e){return function(e){return l.Children.map(e,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:l}}=e;return{value:t,label:a,attributes:n,default:l}}))}function u(e){const{values:t,children:a}=e;return(0,l.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,c._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=u(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,i]=b({queryString:a,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,d.Nk)(a);return[n,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),h=(()=>{const e=c??p;return f({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),m(e)}),[i,m,r]),tabValues:r}}var h=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:a,selectedValue:s,selectValue:c,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=i[a].value;n!==s&&(p(t),c(n))},f=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},i.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:u},o,{className:(0,r.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=m(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",k.tabList)},l.createElement(g,(0,n.Z)({},e,t)),l.createElement(v,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return l.createElement(y,(0,n.Z)({key:String(t)},e))}},6038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),r=a(4866),o=a(5162);const s={sidebar_label:"Deploy an OP Stack devnet",description:"Start your own devnet with a modified version of optimism-bedrock."},c="Deploy an OP Stack devnet",i={unversionedId:"developers/optimism-devnet",id:"developers/optimism-devnet",title:"Deploy an OP Stack devnet",description:"Start your own devnet with a modified version of optimism-bedrock.",source:"@site/docs/developers/optimism-devnet.mdx",sourceDirName:"developers",slug:"/developers/optimism-devnet",permalink:"/pr-preview/pr-938/developers/optimism-devnet",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/optimism-devnet.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy an OP Stack devnet",description:"Start your own devnet with a modified version of optimism-bedrock."},sidebar:"developers",previous:{title:"Deploy a GM Portal dapp on Bubs testnet",permalink:"/pr-preview/pr-938/developers/gm-portal-bubs"},next:{title:"Deploy an OP Stack testnet on Celestia",permalink:"/pr-preview/pr-938/developers/optimism"}},d={},p=[{value:"Dependency setup",id:"dependency-setup",level:2},{value:"Environment setup and Golang installation",id:"environment-setup-and-golang-installation",level:3},{value:"Clone repository",id:"clone-repository",level:3},{value:"asdf",id:"asdf",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"python",id:"python",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Docker compose",id:"docker-compose",level:3},{value:"gcc &amp; libusb",id:"gcc--libusb",level:3},{value:"macOS only: set up python",id:"macos-only-set-up-python",level:3},{value:"Build devnet",id:"build-devnet",level:2},{value:"Start devnet",id:"start-devnet",level:3},{value:"View the logs of the devnet",id:"view-the-logs-of-the-devnet",level:3},{value:"Stop devnet",id:"stop-devnet",level:3},{value:"Viewing containers",id:"viewing-containers",level:3},{value:"Find a transaction",id:"find-a-transaction",level:2},{value:"Read the transaction call data",id:"read-the-transaction-call-data",level:2},{value:"Find the data on Celestia",id:"find-the-data-on-celestia",level:2}],u={toc:p},f="wrapper";function b(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-an-op-stack-devnet"},"Deploy an OP Stack devnet"),(0,l.kt)("p",null,"This guide will show you how to run your own OP Stack devnet."),(0,l.kt)("h2",{id:"dependency-setup"},"Dependency setup"),(0,l.kt)("h3",{id:"environment-setup-and-golang-installation"},"Environment setup and Golang installation"),(0,l.kt)("p",null,"Install dependencies ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-938/nodes/environment"},"here"),"."),(0,l.kt)("h3",{id:"clone-repository"},"Clone repository"),(0,l.kt)("p",null,"Next, clone the repo:"),(0,l.kt)(r.Z,{groupId:"network-type",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"local-devnet",label:"Local Devnet",mdxType:"TabItem"},(0,l.kt)("p",null,"This is the version for this tutorial:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/celestiaorg/optimism\ncd optimism\ngit checkout v0.1.3-OP_v1.0.6-CN_v0.11.0-rc8\n"))),(0,l.kt)(o.Z,{value:"arabica-devnet",label:"Arabica Devnet",mdxType:"TabItem"},(0,l.kt)("p",null,"If you are using ",(0,l.kt)("strong",{parentName:"p"},"Arabica Devnet")," and deploying using the\n",(0,l.kt)("a",{parentName:"p",href:"../optimism/"},(0,l.kt)("strong",{parentName:"a"},"testnet deployment guide"))," use the following\nversion:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/celestiaorg/optimism\ncd optimism\ngit checkout v0.1.3-OP_v1.0.6-CN_v0.11.0-rc8\n")))),(0,l.kt)("h3",{id:"asdf"},"asdf"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://asdf-vm.com/guide/getting-started.html"},"Install ",(0,l.kt)("inlineCode",{parentName:"a"},"asdf")),"\nto allow us to intall a specific version of node easily."),(0,l.kt)("p",null,"Here is an example for Ubuntu using bash:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.11.2\necho '. \"$HOME/.asdf/asdf.sh\"' >> ~/.bashrc\necho '. \"$HOME/.asdf/completions/asdf.bash\"' >> ~/.bashrc\n")),(0,l.kt)("p",null,"Set the path from the asdf documentation based on your operating\nsystem and shell type."),(0,l.kt)("p",null,"Here is an example for Ubuntu using bash:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:~/.asdf/bin/\n")),(0,l.kt)("p",null,"Check that it was installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf\n")),(0,l.kt)("h3",{id:"nodejs"},"Node.js"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"nodejs 16.16.0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin add nodejs\nasdf install nodejs 16.16.0\nasdf local nodejs 16.16.0\nsource ~/.bashrc\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install npm\n")),(0,l.kt)("p",null,"Update NPM to v9.6.5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g npm@9.6.5\n")),(0,l.kt)("p",null,"If using NVM, install NPM v9.6.5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nvm install v9.6.5\n")),(0,l.kt)("p",null,"Then set the version:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nvm use v9.6.5\n")),(0,l.kt)("h3",{id:"python"},"python"),(0,l.kt)("p",null,"Install python 3.10.7:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin-add python\nasdf install python 3.10.7\nasdf local python 3.10.7\nsource ~/.bashrc\n")),(0,l.kt)("h3",{id:"foundry"},"Foundry"),(0,l.kt)("p",null,"Download the Foundry script execute it to set up environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://foundry.paradigm.xyz/ | bash\n")),(0,l.kt)("p",null,"Set path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /root/.bashrc\n")),(0,l.kt)("p",null,"Run foundryup to install Foundry (",(0,l.kt)("inlineCode",{parentName:"p"},"forge"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cast"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"anvil"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"chisel"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"foundryup\n")),(0,l.kt)("h3",{id:"yarn"},"Yarn"),(0,l.kt)("p",null,"Install yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yarn\n")),(0,l.kt)("p",null,"Depending on the version installed,\nyou may need to update your version of NPM."),(0,l.kt)("h3",{id:"docker-compose"},"Docker compose"),(0,l.kt)("p",null,"Install docker-compose:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install docker-compose\n")),(0,l.kt)("h3",{id:"gcc--libusb"},"gcc & libusb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install gcc libusb-1.0-0-dev \n")),(0,l.kt)("h3",{id:"macos-only-set-up-python"},"macOS only: set up python"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install python3\nnpm config set python /usr/local/bin/python3\nnpm cache clean --force\n")),(0,l.kt)("h2",{id:"build-devnet"},"Build devnet"),(0,l.kt)("p",null,"Build TypeScript definitions for TS dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncd optimism\nyarn && make build-ts\n")),(0,l.kt)("p",null,"Set environment variables to start network:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_BATCH_INBOX_ADDRESS=0xff00000000000000000000000000000000000000\nexport L2OO_ADDRESS=0x70997970C51812dc3A010C7d01b50e0d17dc79C8\n")),(0,l.kt)("h3",{id:"start-devnet"},"Start devnet"),(0,l.kt)("p",null,"Start the network by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-up \n")),(0,l.kt)("p",null,"This starts up the layer 1 (ETH), layer 2 (",(0,l.kt)("inlineCode",{parentName:"p"},"op-geth"),"), data availability\nlayer (Celestia), the sequencer (",(0,l.kt)("inlineCode",{parentName:"p"},"op-node"),"), batch submitter (",(0,l.kt)("inlineCode",{parentName:"p"},"op-batcher"),"),\nstate commitment service (",(0,l.kt)("inlineCode",{parentName:"p"},"op-proposer"),")."),(0,l.kt)("h3",{id:"view-the-logs-of-the-devnet"},"View the logs of the devnet"),(0,l.kt)("p",null,"If you'd like to view the logs of the devnet, run the following command\nfrom the root of the Optimism directory:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-logs\n")),(0,l.kt)("admonition",{title:"optional",type:"tip"},(0,l.kt)("h4",{parentName:"admonition",id:"lazydocker"},"lazydocker"),(0,l.kt)("p",{parentName:"admonition"},"You can install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jesseduffield/lazydocker"},"lazydocker"),"\nto view all of the components of your stack in one GUI by running:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin add lazydocker https://github.com/comdotlinux/asdf-lazydocker.git\nasdf list all lazydocker\nasdf install lazydocker 0.12\nasdf global lazydocker 0.12\n")),(0,l.kt)("p",{parentName:"admonition"},"And run the command:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lazydocker\n")),(0,l.kt)("p",{parentName:"admonition"},"If you do this, you can skip the ",(0,l.kt)("a",{parentName:"p",href:"#viewing-containers"},"viewing containers"),"\nsection and ",(0,l.kt)("a",{parentName:"p",href:"#find-a-transaction"},"find a transaction"),".")),(0,l.kt)("h3",{id:"stop-devnet"},"Stop devnet"),(0,l.kt)("p",null,"If you'd like to start the network over, use the following command\nto safely shut down all of the containers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-down\n")),(0,l.kt)("p",null,"Then clean out the old config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-clean\n")),(0,l.kt)("h3",{id:"viewing-containers"},"Viewing containers"),(0,l.kt)("p",null,"To view the containers running, send:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,l.kt)("p",null,"Find the container ID of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ops-bedrock_op-batcher_1"),"\nand run the following to follow the logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container-id>\n")),(0,l.kt)("p",null,"In a new terminal, find the container ID of the\n",(0,l.kt)("inlineCode",{parentName:"p"},"ghcr.io/celestiaorg/local-celestia-devnet:main"),"\nand run the following to follow the logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container-id>\n")),(0,l.kt)("p",null,"You can do the same for other containers as you\nexplore the stack."),(0,l.kt)("h2",{id:"find-a-transaction"},"Find a transaction"),(0,l.kt)("p",null,"Now, we'll check for a recent transaction on the L1 with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast block latest --rpc-url localhost:8545\n")),(0,l.kt)("p",null,"Output of a block that contains a transaction will look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"baseFeePerGas        7\ndifficulty           2\nextraData            0xd883010a16846765746888676f312e31382e35856c696e75780000000000000001749030eb8e51903cf49e2c8c21e7ff98aaa7d45e3ecd51b8594440c5c66e9931b70b18d1a629212074f3ef9188bd0a9079e094e414d287f73d40ea8392349600\ngasLimit             30000000\ngasUsed              21072\nhash                 0x9d764f5e3e2ccf5a334ae4fbe3827e7b80750f39aa671c958b5c09a9b67d9dfc\nlogsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\nminer                0x0000000000000000000000000000000000000000\nmixHash              0x0000000000000000000000000000000000000000000000000000000000000000\nnonce                0x0000000000000000\nnumber               1569\nparentHash           0x1a5100654617b565bf2a117c7487a57c54d0c61b99d94592518fbc07b3fec45d\nreceiptsRoot         0xa981da57b00630bb01a6eb02629212ea8b0c89281a07295ace6bb78c81193e68\nsealFields           []\nsha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\nsize                 740\nstateRoot            0x9d1e02cbf556997123676f47749a043b5bd9bebe629f5dbd3f256a7d5e37b665\ntimestamp            1677272382\ntotalDifficulty      3139\ntransactions:        [\n    0x40b79afe3dc05ff398c2142ab47eb94ac3759a03dd1322b2d97bcdc2d1c34934\n]\n")),(0,l.kt)("p",null,"And copy the transaction hash from ",(0,l.kt)("inlineCode",{parentName:"p"},"transactions: [<transaction-hash]")," and\nset it as a variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export TX_HASH=0xb8869dfecf9a5a0e26df6b13e64071b859f2cc0587b97cb4387abf9ddb2ff9a0\n")),(0,l.kt)("h2",{id:"read-the-transaction-call-data"},"Read the transaction call data"),(0,l.kt)("p",null,"Now read the transaction call data on the L1:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast tx $TX_HASH --rpc-url localhost:8545\n")),(0,l.kt)("p",null,"The output will look similar to below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"blockHash            0xce5691878b61e3b5bbae66317512365ef6bb1f597b4dfc11e585abf470cdf4dd\nblockNumber          1164\nfrom                 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC\ngas                  21072\ngasPrice             1000000007\nhash                 0xb8869dfecf9a5a0e26df6b13e64071b859f2cc0587b97cb4387abf9ddb2ff9a0\ninput                0x0000000000000c2a00000000\nnonce                318\nr                    0x9a32da65f4dabf0e1c6d2a86d52c7d6f868997cfc1183fc28c5f0a0615a5e678\ns                    0x4ce385cc70a178b86d95de05428763805183276a6fd418c44e346a3838a70144\nto                   0xfF00000000000000000000000000000000000000\ntransactionIndex     0\nv                    0\nvalue                0\n")),(0,l.kt)("p",null,"Now set the ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," as the ",(0,l.kt)("inlineCode",{parentName:"p"},"INPUT")," variable, removing the ",(0,l.kt)("inlineCode",{parentName:"p"},"0x")," from the beginning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export INPUT=0000000000000c2a00000000\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Remember to remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"0x"),"!")),(0,l.kt)("h2",{id:"find-the-data-on-celestia"},"Find the data on Celestia"),(0,l.kt)("p",null,"Now navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"optimism/op-celestia")," and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go $INPUT\n")),(0,l.kt)("p",null,"Your result will look similar to the below!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"celestia block height: 3114; tx index: 0\n-----------------------------------------\noptimism block data on celestia: [00191cef8fb52cf322b77694ff5a92149800000000020b78dadae1c7f0c37b015fdd84970dfbe3ff4ab7abe8b9083c94aebe7df77e705bba47f8e72b762fadcecd6b62695920e9eee3e5369b3fd265726ebcfbfcbf3f5fcde3bd6960f53b7da1c147ae4fefe689b724ff54c83a0031ef93479f5a75f08e6a9bbd0b755c220e4ed8b3fd5c9cfc1b9ed0ca69dcabbf5cbd274aac793950f38ef6bd59e551e56d77fcf7aabd9287abd8af7b9de39cb3235732c58be7034774bf54134beb828c19b15f3553a74b64ffbd3a2fe0e8cbb77b0217dccb4f68de9774fbac5efaed040190797950f3e22bafc9d7884cf616d87db6a46ace99b277252dd36f9c7d5ebabfd46d5a71bec9872696b605173ccc153d4a7befbd69f64f6db25cc7dd59f86d5de586b457f7d759f73fe57fde0c32af006a5eebdcfb85d385b3ef3d158fbccaf263cb8b35cb2a58cc0f083f5cf3b742d555f3fe2362cd2b829a37c9c9446fedbf8d911f3f86cc79c335e960f26d5eef25e735f7dd9b926019dcf1ed5b134bfb02416e36be3b277635b757f36f2bff9260ddcf1f20132e5071afe8bcdd9ccdcffda440e69540cddbb548ecdd73863673ab122e2d36d69dfc8bd71be61dbae235cf63e3a9a0121141b726968e051d2b7ef076b11f3c9964b4fee0acfb93777fbd37d94dfdecfdd6836af39ebaaff58c07995706352fdf9259b773cfd42e0ed168914542c54ca28147969b18b7987ef233fcd41c1cde44ac79150700010000fffff649400701]\n")))}b.isMDXComponent=!0}}]);