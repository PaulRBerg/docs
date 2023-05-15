"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[7822],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Restart your node with metrics flags",description:"Instructions metrics flags to your node start command."},i="Restart your node with metrics flags",s={unversionedId:"nodes/itn-enable-telemetry-nodes",id:"nodes/itn-enable-telemetry-nodes",title:"Restart your node with metrics flags",description:"Instructions metrics flags to your node start command.",source:"@site/docs/nodes/itn-enable-telemetry-nodes.md",sourceDirName:"nodes",slug:"/nodes/itn-enable-telemetry-nodes",permalink:"/pr-preview/pr-753/nodes/itn-enable-telemetry-nodes",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-enable-telemetry-nodes.md",tags:[],version:"current",frontMatter:{sidebar_label:"Restart your node with metrics flags",description:"Instructions metrics flags to your node start command."}},l={},c=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"How to submit",id:"how-to-submit",level:2},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"restart-your-node-with-metrics-flags"},"Restart your node with metrics flags"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Add metrics flags to your node start command\nand restart your node to apply it."),(0,o.kt)("p",null,"The metrics endpoint will gather your node's data\nto track your uptime."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"--metrics.tls=false --metrics --metrics.endpoint otel.celestia.tools:4318"),"\nto your node's start command and restart your node.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you are having troubles after a node\nrestart, please do the following:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Keep restarting the node process until\nit works."),(0,o.kt)("li",{parentName:"ul"},"Do not be afraid of warnings or occasional\nerrors - as long as blocks are syncing, it's fine"),(0,o.kt)("li",{parentName:"ul"},"Try using a different RPC from the list ",(0,o.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/blockspace-race/#rpc-endpoints"},"here")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if we can see data from your Celestia Node"),(0,o.kt)("li",{parentName:"ol"},"No points if we cannot"),(0,o.kt)("li",{parentName:"ol"},"Note that we will keep track of your metrics throughout the whole\nITN so make sure you leave it connected throughout all phases."),(0,o.kt)("li",{parentName:"ol"},"Make sure you can see your Node ID on ",(0,o.kt)("a",{parentName:"li",href:"https://tiascan.com"},"Tiascan")," in\nyour respective node category. You can also check your node uptime\nstatus there.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to submit"),(0,o.kt)("p",null,"Please submit your Node ID so that we can confirm it is pushing metrics."),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is only a submission example! Do NOT use it on your task submission.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"12D3KooWFXnqPbzeAEwMuuaxuEsBG1XV6xVDqzNZJyk8qYxEAVDw")))}d.isMDXComponent=!0}}]);