"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8421],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),a=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=a(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=a(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||l[m]||p;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=n.length,o=new Array(p);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var a=2;a<p;a++)o[a]=n[a];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7117:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return l},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return a}});var r=n(3117),i=(n(7294),n(3905));const p={sidebar_label:"Keepers"},o="\ud83d\udd01 Keepers",c={unversionedId:"developers/recipe-keeper",id:"developers/recipe-keeper",title:"\ud83d\udd01 Keepers",description:"\ud83d\udcd7\xa0Define Recipe type and AppendRecipe keeper method",source:"@site/docs/developers/recipe-keeper.md",sourceDirName:"developers",slug:"/developers/recipe-keeper",permalink:"/pr-preview/pr-338/ru/developers/recipe-keeper",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/recipe-keeper.md",tags:[],version:"current",frontMatter:{sidebar_label:"Keepers"},sidebar:"developers",previous:{title:"Message Types",permalink:"/pr-preview/pr-338/ru/developers/recipe-message"},next:{title:"Querying Recipes",permalink:"/pr-preview/pr-338/ru/developers/recipe-query"}},s={},a=[{value:"\ud83d\udcd7\xa0Define <code>Recipe</code> type and <code>AppendRecipe</code> keeper method",id:"define-recipe-type-and-appendrecipe-keeper-method",level:2},{value:"\ud83d\udcd8\xa0Define keeper methods",id:"define-keeper-methods",level:2}],u={toc:a};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-keepers"},"\ud83d\udd01 Keepers"),(0,i.kt)("h2",{id:"define-recipe-type-and-appendrecipe-keeper-method"},"\ud83d\udcd7\xa0Define ",(0,i.kt)("inlineCode",{parentName:"h2"},"Recipe")," type and ",(0,i.kt)("inlineCode",{parentName:"h2"},"AppendRecipe")," keeper method"),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/proto/recipes/recipes/recipe.proto")," and\ndefine the ",(0,i.kt)("inlineCode",{parentName:"p"},"Recipe")," message:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/proto/recipes/recipes/recipe.proto"',title:'"recipes/proto/recipes/recipes/recipe.proto"'},'syntax = "proto3";\n\npackage recipes.recipes;\n\noption go_package = "recipes/x/recipes/types";\n\nmessage Recipe {\n  string creator = 1;\n  uint64 id = 2;\n  string dish = 3; \n  string ingredients = 4; \n}\n')),(0,i.kt)("h2",{id:"define-keeper-methods"},"\ud83d\udcd8\xa0Define keeper methods"),(0,i.kt)("p",null,"Now you\u2019ll define your ",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," keeper method."),(0,i.kt)("p",null,"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/recipe.go")," file. The\n",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," function is a placeholder to brainstorm how\nto implement it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'package keeper\n\nimport (\n  "encoding/binary"\n\n  "github.com/cosmos/cosmos-sdk/store/prefix"\n  sdk "github.com/cosmos/cosmos-sdk/types"\n\n  "recipes/x/recipes/types"\n)\n\n// func (k Keeper) AppendRecipe() uint64 {\n//    count := k.GetRecipeCount()\n//    store.Set()\n//    k.SetRecipeCount()\n//    return count\n// }\n')),(0,i.kt)("p",null,"Add these prefixes to the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/types/keys.go")," file\nin the ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," and add a comment for your reference:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/types/keys.go"',title:'"recipes/x/recipes/types/keys.go"'},'const (\n  //...\n\n  // Keep track of the index of recipes  \n  RecipeKey      = "Recipe-value-"\n  RecipeCountKey = "Recipe-count-"\n)\n')),(0,i.kt)("p",null,"Next, implement ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRecipeCount")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"recipes/x/recipes/keeper/recipe.go")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'func (k Keeper) GetRecipeCount(ctx sdk.Context) uint64 {\n  Get the store using storeKey (which is "recipes") and RecipeCountKey (which is "Recipe-count-")\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeCountKey))\n  \n  // Convert the RecipeCountKey to bytes\n  byteKey := []byte(types.RecipeCountKey)\n  \n  // Get the value of the count\n  bz := store.Get(byteKey)\n  \n  // Return zero if the count value is not found (for example, it\'s the first recipe)\n  if bz == nil {\n    return 0\n  }\n  \n  // Convert the count into a uint64\n  return binary.BigEndian.Uint64(bz)\n}\n')),(0,i.kt)("p",null,"And then ",(0,i.kt)("inlineCode",{parentName:"p"},"SetRecipeCount"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},'func (k Keeper) SetRecipeCount(ctx sdk.Context, count uint64) {\n  // Get the store using storeKey (which is "recipes") and RecipeCountKey (which is "Recipe-count-")\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeCountKey))\n  \n  // Convert the RecipeCountKey to bytes\n  byteKey := []byte(types.RecipeCountKey)\n  \n  // Convert count from uint64 to string and get bytes\n  bz := make([]byte, 8)\n  binary.BigEndian.PutUint64(bz, count)\n  \n  // Set the value of Recipe-count- to count\n  store.Set(byteKey, bz)\n}\n')),(0,i.kt)("p",null,"Now you\u2019re ready to implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"AppendRecipe")," function at\nthe top of the file above ",(0,i.kt)("inlineCode",{parentName:"p"},"GetRecipeCount")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SetRecipeCount"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="recipes/x/recipes/keeper/recipe.go"',title:'"recipes/x/recipes/keeper/recipe.go"'},"func (k Keeper) AppendRecipe (ctx sdk.Context, recipe types.Recipe) uint64 {\n  // Get the current number of recipes in the store\n  count := k.GetRecipeCount(ctx)\n  \n  // Assign an ID to the recipe based on the number of recipes in the store\n  recipe.Id = count\n  \n  // Get the store\n  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.RecipeKey))\n  \n  // Convert the recipe ID into bytes\n  byteKey := make([]byte, 8)\n  binary.BigEndian.PutUint64(byteKey, recipe.Id)\n  \n  // Marshal the recipe into bytes\n  appendedValue := k.cdc.MustMarshal(&recipe)\n  \n  // Insert the recipe bytes using recipe ID as a key\n  store.Set(byteKey, appendedValue)\n  \n  // Update the recipe count\n  k.SetRecipeCount(ctx, count+1)\n  return count\n}\n")),(0,i.kt)("p",null,"Now you have implemented all the code required to create\nnew recipes and store them on-chain. When a transaction that\ncontains a message type ",(0,i.kt)("inlineCode",{parentName:"p"},"MsgCreateRecipe")," is broadcast, the\nmessage is routed to the recipes module."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"k.CreateRecipe")," calls ",(0,i.kt)("inlineCode",{parentName:"li"},"AppendRecipe"),", which gets the recipe\ncount, adds a recipe using the count as the ID, increments the\ncount, and returns the ID")))}l.isMDXComponent=!0}}]);