"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2164],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_label:"Submit a PFB transaction",description:"Steps for submitting a PFB transaction."},o="Submit a PFB transaction",s={unversionedId:"nodes/itn-pfb-transaction",id:"nodes/itn-pfb-transaction",title:"Submit a PFB transaction",description:"Steps for submitting a PFB transaction.",source:"@site/docs/nodes/itn-pfb-transaction.md",sourceDirName:"nodes",slug:"/nodes/itn-pfb-transaction",permalink:"/pr-preview/pr-852/nodes/itn-pfb-transaction",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-pfb-transaction.md",tags:[],version:"current",frontMatter:{sidebar_label:"Submit a PFB transaction",description:"Steps for submitting a PFB transaction."}},l={},c=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"submit-a-pfb-transaction"},"Submit a PFB transaction"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Submit a PFB transaction hash using your node."),(0,i.kt)("p",null,"You can find resources on doing this by following the\ntutorial ",(0,i.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial/#submit-a-pfb-transaction"},"here"),"."),(0,i.kt)("h2",{id:"directions"},"Directions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Submit the PFB using the wallet you submitted to us in Phase 2, task 1."),(0,i.kt)("li",{parentName:"ol"},"Share PFB transaction hash you submitted."),(0,i.kt)("li",{parentName:"ol"},"It has to be unique. We will be checking."),(0,i.kt)("li",{parentName:"ol"},"If PFB will be sucessfull, there will a large output, the\ntx hash is found by simply checking the ",(0,i.kt)("inlineCode",{parentName:"li"},"txhash")," field in\nthe first line of the output.")),(0,i.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Full points for submitting, none if not.")),(0,i.kt)("h2",{id:"submission"},"Submission"),(0,i.kt)("p",null,"Please submit a PFB transaction hash using your node.\nYou can use the block explorer to check if the transaction\nhas succeeded."),(0,i.kt)("p",null,"Submission link can be found ",(0,i.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"053FE12103804C72A822BFAFBB2061867E2DA4F5D10862DEE7A5E362ED48ABA3")))}d.isMDXComponent=!0}}]);