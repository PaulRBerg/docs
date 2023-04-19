"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a="Maintain high node uptime",s={unversionedId:"nodes/itn-high-uptime-node",id:"nodes/itn-high-uptime-node",title:"Maintain high node uptime",description:"Description",source:"@site/docs/nodes/itn-high-uptime-node.md",sourceDirName:"nodes",slug:"/nodes/itn-high-uptime-node",permalink:"/pr-preview/pr-490/fr/nodes/itn-high-uptime-node",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-high-uptime-node.md",tags:[],version:"current",frontMatter:{}},l={},p=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2},{value:"Example",id:"example",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"maintain-high-node-uptime"},"Maintain high node uptime"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Ensure your Data Availability node has a high up-time for the duration of\nthe incentivized testnet program."),(0,i.kt)("p",null,"We will be measuring your node's uptime using a formula that measures\nhow many sampling requests were submitted upon a certain period of time."),(0,i.kt)("h2",{id:"directions"},"Directions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure your node does not go offline for long periods of time\notherwise it impacts your uptime score."),(0,i.kt)("li",{parentName:"ol"},"You can monitor your node uptime by searching for your Node ID ",(0,i.kt)("a",{parentName:"li",href:"https://tiascan.com"},"here"),".")),(0,i.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Points are awarded based on the following ",(0,i.kt)("a",{parentName:"li",href:"https://www.wolframalpha.com/input?i=y%3D1.05%5Ex%2F1.05%5E100+from+0+to+100"},"formula"),".\nBase for Full Storage and Bridge nodes is 1.05 and 100% uptime, base\nfor Light nodes is 1.02 and 80% uptime."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"node_uptime = minimum(total_block_sampled_or_synced/network_head, total_node_uptime_in_seconds/(current_time-node_Start_time))")),(0,i.kt)("li",{parentName:"ol"},"Maximum score for light node uptime at the end of phase 5 is 25 points."),(0,i.kt)("li",{parentName:"ol"},"Maximum score for bridge node uptime at the end of phase 5 is 110 points."),(0,i.kt)("li",{parentName:"ol"},"Maximum score for full storage node uptime at the end of phase 5 is 80 points.")),(0,i.kt)("h2",{id:"submission"},"Submission"),(0,i.kt)("p",null,"Please submit your Node ID."),(0,i.kt)("p",null,"Submission link can be found ",(0,i.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,i.kt)("p",null," ",(0,i.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")))}m.isMDXComponent=!0}}]);