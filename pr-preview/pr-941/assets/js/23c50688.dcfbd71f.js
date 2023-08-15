"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2905],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Setup Your Validator",description:"Instructions for setting up your own validator."},i="Setup Your Validator",s={unversionedId:"nodes/itn-setup-validator",id:"nodes/itn-setup-validator",title:"Setup Your Validator",description:"Instructions for setting up your own validator.",source:"@site/docs/nodes/itn-setup-validator.md",sourceDirName:"nodes",slug:"/nodes/itn-setup-validator",permalink:"/pr-preview/pr-941/nodes/itn-setup-validator",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-setup-validator.md",tags:[],version:"current",frontMatter:{sidebar_label:"Setup Your Validator",description:"Instructions for setting up your own validator."}},l={},d=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-your-validator"},"Setup Your Validator"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Prepare your nodes and submit gentx to start the network."),(0,o.kt)("p",null,"Check out the Discord channel #validator if you need assistance\nor want to assist other validators."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("p",null,"This task is for you to setup your own validator."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Relevant docs: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/environment/"},"environment setup"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/celestia-app/"},"Celestia App installation"),",\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/celestia-node/"},"Celestia Node installation"),"."),(0,o.kt)("li",{parentName:"ol"},"Genesis instructions are found ",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/celestia-app-commands#signing-genesis-for-a-new-network"},"here"),".\nPlease use chain-id blockspacerace-0 and staking amount for gentx\n5000000000000utia. The repo to submit gentx is found on Discord.\nMake sure you name the PR and the gentx after your validator name."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Gentx submission deadline is Friday, March 10th 2023 23:59 UTC.")),(0,o.kt)("li",{parentName:"ol"},"You will find the final ",(0,o.kt)("inlineCode",{parentName:"li"},"genesis.json")," file ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/networks/blob/master/blockspacerace/genesis.json"},"here"),".\nMove it to your ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.celestia-app/config")," directory. For a refresher\non setting up your validator, please follow the guide ",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/validator-node/"},"here"),"\nNote that the guide refers to Mocha testnet, you will need to\nchange to ",(0,o.kt)("inlineCode",{parentName:"li"},"blockspacerace-0")," chain-id for your validator. ",(0,o.kt)("strong",{parentName:"li"},"Please DO\nNOT use pruning for now due to the bridge node, if this changes, we\nwill let you know.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"OPTIONAL")," Enable geolocation for your validator:\na. Open ",(0,o.kt)("inlineCode",{parentName:"li"},"~/celestia-app/config/config.toml"),"\nb. Look for ",(0,o.kt)("inlineCode",{parentName:"li"},"[rpc]")," section\nc. Make sure the ",(0,o.kt)("inlineCode",{parentName:"li"},"laddr")," is set like this: ",(0,o.kt)("inlineCode",{parentName:"li"},'laddr = "tcp://0.0.0.0:26657"'),"\nd. In your infrastructure settings, allow the port 26657 to be accessible publicly\ne. Then restart your validator"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Make sure to wait for official node release AFTER genesis,\nbefore setting it up.")," Instructions to start a bridge\nnode are found ",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/bridge-node/#deploy-the-celestia-bridge-node"},"here"),".\nPlease use your own ",(0,o.kt)("inlineCode",{parentName:"li"},"celestia-app")," node as the endpoint for your\nbridge node and make sure to add\n",(0,o.kt)("inlineCode",{parentName:"li"},"--metrics.tls=false --metrics --metrics.endpoint otel.celestia.tools:4318"),"\nto your bridge node's start command."),(0,o.kt)("li",{parentName:"ol"},"How to find your bridge Node ID is found ",(0,o.kt)("a",{parentName:"li",href:"../../developers/node-tutorial/#get-your-node-id"},"here"),".")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if validator and bridge node are successfully setup."),(0,o.kt)("li",{parentName:"ol"},"No points if either of them has not been successfully set up."),(0,o.kt)("li",{parentName:"ol"},"Having a running validator and bridge node is a prerequisite for\nparticipation in the testnet.")),(0,o.kt)("h2",{id:"submission"},"Submission"),(0,o.kt)("p",null,"Validators need to submit their ",(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," operator address and\ntheir Bridge Node ID."),(0,o.kt)("p",null,"Link to submit can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p")))}c.isMDXComponent=!0}}]);