"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3845],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||l;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,i=new Array(l);i[0]=d;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9214:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return p}});var n=t(3117),o=(t(7294),t(3905));const l={sidebar_label:"Scaffold your Rollup"},i="\ud83c\udfd7\xa0Scaffolding your Rollup",a={unversionedId:"developers/recipe-scaffold",id:"developers/recipe-scaffold",title:"\ud83c\udfd7\xa0Scaffolding your Rollup",description:"\ud83d\udd25 Use Ignite CLI to Scaffold a recipes Rollup",source:"@site/docs/developers/recipe-scaffold.md",sourceDirName:"developers",slug:"/developers/recipe-scaffold",permalink:"/pr-preview/pr-396/fr/developers/recipe-scaffold",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/recipe-scaffold.md",tags:[],version:"current",frontMatter:{sidebar_label:"Scaffold your Rollup"},sidebar:"developers",previous:{title:"Recipe Book Overview",permalink:"/pr-preview/pr-396/fr/developers/recipe-book"},next:{title:"Message Types",permalink:"/pr-preview/pr-396/fr/developers/recipe-message"}},c={},p=[{value:"\ud83d\udd25 Use Ignite CLI to Scaffold a <code>recipes</code> Rollup",id:"-use-ignite-cli-to-scaffold-a-recipes-rollup",level:2},{value:"\ud83d\udc8e Installing Rollmint",id:"-installing-rollmint",level:2}],s={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"scaffolding-your-rollup"},"\ud83c\udfd7\xa0Scaffolding your Rollup"),(0,o.kt)("h2",{id:"-use-ignite-cli-to-scaffold-a-recipes-rollup"},"\ud83d\udd25 Use Ignite CLI to Scaffold a ",(0,o.kt)("inlineCode",{parentName:"h2"},"recipes")," Rollup"),(0,o.kt)("p",null,"Run the following command to scaffold your ",(0,o.kt)("inlineCode",{parentName:"p"},"recipes")," chain using Ignite CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold chain recipes --address-prefix recipes\n")),(0,o.kt)("p",null,"Your new ",(0,o.kt)("inlineCode",{parentName:"p"},"recipes")," chain has been scaffolded and\n",(0,o.kt)("inlineCode",{parentName:"p"},"--address-prefix recipes")," allows the address prefix\nto be ",(0,o.kt)("inlineCode",{parentName:"p"},"recipes")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmos"),"."),(0,o.kt)("p",null,"Change into the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipes")," directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd recipes\n")),(0,o.kt)("h2",{id:"-installing-rollmint"},"\ud83d\udc8e Installing Rollmint"),(0,o.kt)("p",null,"To swap out Tendermint for Rollmint, run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go mod edit -replace github.com/cosmos/cosmos-sdk=github.com/celestiaorg/cosmos-sdk-rollmint@v0.46.7-rollmint-v0.5.0-no-fraud-proofs\ngo mod edit --replace github.com/tendermint/tendermint=github.com/celestiaorg/tendermint@v0.34.22-0.20221013213714-8be9b54c8c21\ngo mod tidy\ngo mod download\n")))}u.isMDXComponent=!0}}]);