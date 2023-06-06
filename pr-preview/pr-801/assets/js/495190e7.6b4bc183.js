"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2089],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:r,l[1]=p;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"Deploy a GM Portal dapp on Taro testnet",description:"Make your own GM Portal dapp on the OP Stack."},l="Deploying a dapp on Taro testnet",p={unversionedId:"developers/gm-portal-taro",id:"developers/gm-portal-taro",title:"Deploying a dapp on Taro testnet",description:"Make your own GM Portal dapp on the OP Stack.",source:"@site/docs/developers/gm-portal-taro.md",sourceDirName:"developers",slug:"/developers/gm-portal-taro",permalink:"/pr-preview/pr-801/developers/gm-portal-taro",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-portal-taro.md",tags:[],version:"current",frontMatter:{sidebar_label:"Deploy a GM Portal dapp on Taro testnet",description:"Make your own GM Portal dapp on the OP Stack."},sidebar:"developers",previous:{title:"Deploy a smart contract on Taro testnet",permalink:"/pr-preview/pr-801/developers/deploy-on-taro"},next:{title:"Deploy an OP Stack devnet",permalink:"/pr-preview/pr-801/developers/optimism-devnet"}},c={},i=[{value:"Update the frontend",id:"update-the-frontend",level:2},{value:"Interact with the frontend",id:"interact-with-the-frontend",level:2},{value:"Next steps",id:"next-steps",level:2}],s={toc:i},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-a-dapp-on-taro-testnet"},"Deploying a dapp on Taro testnet"),(0,r.kt)("p",null,"First, review the ",(0,r.kt)("a",{parentName:"p",href:"../taro-testnet"},"Taro testnet page")," and the\n",(0,r.kt)("a",{parentName:"p",href:"../deploy-on-taro"},"Deploy a smart contract to Taro testnet")," tutorial."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You will need a funded account to deploy your smart contract.")),(0,r.kt)("p",null,"Next, clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"gm-portal")," from Github and start the frontend:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/jcstein/gm-portal.git\ncd gm-portal/frontend\nyarn && yarn dev\n")),(0,r.kt)("p",null,"In a new terminal instance, set your private key for the\nfaucet as a variable and the RPC URL you're using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export PRIVATE_KEY=ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80\nexport TARO_RPC_URL=https://taro-testnet.calderachain.xyz/http\n")),(0,r.kt)("p",null,"Now, change into the ",(0,r.kt)("inlineCode",{parentName:"p"},"gm-portal/contracts")," directory in the same terminal and deploy\nthe contract using Foundry:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/gm-portal/contracts\nforge script script/GmPortal.s.sol:GmPortalScript --rpc-url $TARO_RPC_URL --private-key $PRIVATE_KEY --broadcast\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gm-contract",src:n(2587).Z,width:"1934",height:"1292"})),(0,r.kt)("p",null,"In the output of the deployment, find the contract address and set it as a variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<your contract address from the output above>\n")),(0,r.kt)("p",null,"Next, you're ready to interact with the contract from your terminal!"),(0,r.kt)("p",null,'First, send a "gm" to the contract:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS \\\n"gm(string)" "gm" \\\n--private-key $PRIVATE_KEY \\\n--rpc-url $TARO_RPC_URL\n')),(0,r.kt)("p",null,'Now that you\'ve posted to the contract, you can read all "gms" (GMs) from the\ncontract with\nthis command:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getAllGms()" --rpc-url $TARO_RPC_URL\n')),(0,r.kt)("p",null,"Next, query the total number of gms, which will be returned as a hex value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getTotalGms()" --rpc-url $TARO_RPC_URL\n')),(0,r.kt)("p",null,"In order to interact with the contract on the frontend, you'll need to fund an\naccount thatyou have in your Ethereum wallet. Transfer to an external account\nwith this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export RECEIVER=<receiver ETH address>\ncast send --private-key $PRIVATE_KEY $RECEIVER --value 1ether --rpc-url $TARO_RPC_URL\n")),(0,r.kt)("p",null,"If you are in a different terminal than the one you set the private key in, you\nmay need to set it again."),(0,r.kt)("h2",{id:"update-the-frontend"},"Update the frontend"),(0,r.kt)("p",null,"Next, you will need to update a few things before you can interact with the\ncontract on the frontend:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Change the contract address on ",(0,r.kt)("inlineCode",{parentName:"li"},"gm-portal/frontend/src/App.tsx")," to your\ncontract address"),(0,r.kt)("li",{parentName:"ol"},"Match the chain info on ",(0,r.kt)("inlineCode",{parentName:"li"},"gm-portal/frontend/src/main.tsx")," with the chain\nconfig of your L2"),(0,r.kt)("li",{parentName:"ol"},"If you changed the contract, update the ABI in\n",(0,r.kt)("inlineCode",{parentName:"li"},"gm-portal/frontend/GmPortal.json")," from\n",(0,r.kt)("inlineCode",{parentName:"li"},"gm-portal/contracts/out/GmPortal.sol/GmPortal.json"),". This can be done with:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncp dev/gm-portal/contracts/out/GmPortal.sol/GmPortal.json dev/gm-portal/frontend\n")),(0,r.kt)("h2",{id:"interact-with-the-frontend"},"Interact with the frontend"),(0,r.kt)("p",null,"Now, login with your wallet that you funded, and post a GM on your GM portal!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gm-taro",src:n(4351).Z,width:"3644",height:"2362"})),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"There are many possibilities of what could be built with this stack.\nThese projects would be good to build on this stack:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on-chain gaming"),(0,r.kt)("li",{parentName:"ul"},"decentralized social media"),(0,r.kt)("li",{parentName:"ul"},"an NFT ticketing rollup"),(0,r.kt)("li",{parentName:"ul"},"Optimism on CelOPstia"),(0,r.kt)("li",{parentName:"ul"},"OP Craft on Celestia")))}u.isMDXComponent=!0},2587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gm_contract-9111b4b1d037bf80d66ecc56e3c2583a.png"},4351:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gm_taro-784564e670c1b52b1af9a250b4a7d113.png"}}]);