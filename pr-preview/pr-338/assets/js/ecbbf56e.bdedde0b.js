"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3104],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=d;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4281:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return a},toc:function(){return p}});var r=t(3117),i=(t(7294),t(3905));const o={},l="Ethermint Dependencies",a={unversionedId:"developers/ethermint-dependencies",id:"developers/ethermint-dependencies",title:"Ethermint Dependencies",description:"This section will guide you through installing the dependencies",source:"@site/docs/developers/ethermint-dependencies.md",sourceDirName:"developers",slug:"/developers/ethermint-dependencies",permalink:"/pr-preview/pr-338/developers/ethermint-dependencies",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/ethermint-dependencies.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Ethermint",permalink:"/pr-preview/pr-338/developers/ethermint"},next:{title:"Rollmint Installation",permalink:"/pr-preview/pr-338/developers/rollmint-on-ethermint"}},u={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setting Up Your Ethermint Node",id:"setting-up-your-ethermint-node",level:2},{value:"Golang Dependency",id:"golang-dependency",level:2}],c={toc:p};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ethermint-dependencies"},"Ethermint Dependencies"),(0,i.kt)("p",null,"This section will guide you through installing the dependencies\nyou need for the deployment process of an Ethermint Sovereign Rollup\non Celestia."),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe full storage node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,i.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,i.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,i.kt)("h2",{id:"setting-up-your-ethermint-node"},"Setting Up Your Ethermint Node"),(0,i.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64 instance machine."),(0,i.kt)("h2",{id:"golang-dependency"},"Golang Dependency"),(0,i.kt)("p",null,"The Golang version used for this tutorial is v1.18+"),(0,i.kt)("p",null,"If you are using a Linux distribution, you can install Golang\nby following our tutorial ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-338/nodes/environment#install-golang"},"here"),"."))}s.isMDXComponent=!0}}]);