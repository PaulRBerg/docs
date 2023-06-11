"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8088],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(i),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return i?n.createElement(h,o(o({ref:t},u),{},{components:i})):n.createElement(h,o({ref:t},u))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3884:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={sidebar_label:"Maintain High Validator Uptime",description:"Ensure your validator has a high up-time during the Blockspace Race."},o="Maintain High Validator Uptime",l={unversionedId:"nodes/itn-high-uptime",id:"nodes/itn-high-uptime",title:"Maintain High Validator Uptime",description:"Ensure your validator has a high up-time during the Blockspace Race.",source:"@site/docs/nodes/itn-high-uptime.md",sourceDirName:"nodes",slug:"/nodes/itn-high-uptime",permalink:"/pr-preview/pr-809/nodes/itn-high-uptime",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-high-uptime.md",tags:[],version:"current",frontMatter:{sidebar_label:"Maintain High Validator Uptime",description:"Ensure your validator has a high up-time during the Blockspace Race."}},s={},p=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maintain-high-validator-uptime"},"Maintain High Validator Uptime"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Ensure your validator has a high up-time for the duration of\nthe Blockspace Race, including during pauses."),(0,r.kt)("p",null,"Please note that there are tasks and phases where you will\nlikely have some downtime, so please ensure you have the\nbest possible uptime outside of those events."),(0,r.kt)("h2",{id:"directions"},"Directions"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Ensure your validator does not go offline otherwise it\nimpacts your uptime score.")),(0,r.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Points are awarded based on the following ",(0,r.kt)("a",{parentName:"li",href:"https://www.wolframalpha.com/input?i=y%3D1.08%5Ex%2F1.08%5E100+from+0+to+100"},"formula"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"validator_uptime = total_signed_blocks/network_height")),(0,r.kt)("li",{parentName:"ol"},"Maximum score for uptime at the end of phase 5 is 350 points.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"Validators need to submit their ",(0,r.kt)("inlineCode",{parentName:"p"},"celestiavaloper")," operator address."),(0,r.kt)("p",null,"Submission link can be found ",(0,r.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"celestiavaloper1q3v5cugc8cdpud87u4zwy0a74uxkk6u4q4gx4p")))}d.isMDXComponent=!0}}]);