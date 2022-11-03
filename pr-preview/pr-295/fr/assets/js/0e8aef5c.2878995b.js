"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3034],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),g=o,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||a;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4484:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return p}});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_label:"Query your Rollup"},l="\ud83d\udcac\xa0Say \u201cgm world!\u201d",i={unversionedId:"developers/gm-query",id:"developers/gm-query",title:"\ud83d\udcac\xa0Say \u201cgm world!\u201d",description:"Now, we\u2019re going to get our blockchain to say gm world and in order to do so",source:"@site/docs/developers/gm-query.md",sourceDirName:"developers",slug:"/developers/gm-query",permalink:"/pr-preview/pr-295/fr/developers/gm-query",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/gm-query.md",tags:[],version:"current",frontMatter:{sidebar_label:"Query your Rollup"},sidebar:"developers",previous:{title:"Build a Sovereign Rollup",permalink:"/pr-preview/pr-295/fr/developers/gm-rollmint"},next:{title:"What's next",permalink:"/pr-preview/pr-295/fr/developers/gm-next"}},s={},p=[{value:"\u270b\xa0Create your first query",id:"create-your-first-query",level:2},{value:"\ud83d\udce8\xa0Query request and response types",id:"query-request-and-response-types",level:2},{value:"\ud83d\udc4b\xa0Gm keeper function",id:"gm-keeper-function",level:2},{value:"\ud83d\udfe2\xa0Start your Sovereign Rollup",id:"start-your-sovereign-rollup",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"say-gm-world"},"\ud83d\udcac\xa0Say \u201cgm world!\u201d"),(0,o.kt)("p",null,"Now, we\u2019re going to get our blockchain to say ",(0,o.kt)("inlineCode",{parentName:"p"},"gm world")," and in order to do so\nwe need to make the following changes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify a protocol buffer file"),(0,o.kt)("li",{parentName:"ul"},"Create a keeper query function that returns data"),(0,o.kt)("li",{parentName:"ul"},"Register a query function")),(0,o.kt)("p",null,"Protocol buffer files contain proto RPC calls that define Cosmos SDK queries\nand message handlers, and proto messages that define Cosmos SDK types. The RPC\ncalls are also responsible for exposing an HTTP API."),(0,o.kt)("p",null,"The Keeper is required for each Cosmos SDK module and is an abstraction for\nmodifying the state of the blockchain. Keeper functions allow you to query or\nwrite to the state. After you add a query to your chain, you need to register\nthe query. You\u2019ll only need to register a query once."),(0,o.kt)("p",null,"The typical Cosmos blockchain developer workflow looks something like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start with proto files to define Cosmos SDK\xa0",(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/building-modules/msg-services.html"},"messages")),(0,o.kt)("li",{parentName:"ul"},"Define and register\xa0",(0,o.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/building-modules/query-services.html"},"queries")),(0,o.kt)("li",{parentName:"ul"},"Define message handler logic"),(0,o.kt)("li",{parentName:"ul"},"Finally, implement the logic of these queries and message handlers in keeper functions")),(0,o.kt)("h2",{id:"create-your-first-query"},"\u270b\xa0Create your first query"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"For this part of the tutorial, open a new terminal window that is not the\nsame that you started the chain in.")),(0,o.kt)("p",null,"In your new terminal, ",(0,o.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," directory and run this command\nto create the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm")," query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ignite scaffold query gm --response text\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"modify proto/gm/query.proto\nmodify x/gm/client/cli/query.go\ncreate x/gm/client/cli/query_gm.go\ncreate x/gm/keeper/grpc_query_gm.go\n\n\ud83c\udf89 Created a query `gm`.\n")),(0,o.kt)("p",null,"What just happened? ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," accepts the name of the query (",(0,o.kt)("inlineCode",{parentName:"p"},"gm"),"), an optional\nlist of request parameters (empty in this tutorial), and an optional\ncomma-separated list of response field with a ",(0,o.kt)("inlineCode",{parentName:"p"},"--response")," flag (",(0,o.kt)("inlineCode",{parentName:"p"},"text")," in this\ntutorial)."),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"gm/proto/gm/query.proto")," file, you\u2019ll see that ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," RPC has\nbeen added to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="gm/proto/gm/query.proto"',title:'"gm/proto/gm/query.proto"'},'service Query {\n  rpc Params(QueryParamsRequest) returns (QueryParamsResponse) {\n    option (google.api.http).get = "/gm/gm/params";\n  }\n    rpc Gm(QueryGmRequest) returns (QueryGmResponse) {\n        option (google.api.http).get = "/gm/gm/gm";\n    }\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," RPC for the ",(0,o.kt)("inlineCode",{parentName:"p"},"Query")," service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"is responsible for returning a ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," string"),(0,o.kt)("li",{parentName:"ul"},"Accepts request parameters (",(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmRequest"),")"),(0,o.kt)("li",{parentName:"ul"},"Returns response of type ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmResponse")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"option")," defines the endpoint that is used by gRPC to generate an HTTP API")),(0,o.kt)("h2",{id:"query-request-and-response-types"},"\ud83d\udce8\xa0Query request and response types"),(0,o.kt)("p",null,"In the same file, we will find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmRequest")," is empty because it does not require parameters"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmResponse")," contains ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," that is returned from the chain")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="gm/proto/gm/query.proto"',title:'"gm/proto/gm/query.proto"'},"message QueryGmRequest {\n}\n\nmessage QueryGmResponse {\n  string text = 1;\n}\n")),(0,o.kt)("h2",{id:"gm-keeper-function"},"\ud83d\udc4b\xa0Gm keeper function"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"gm/x/gm/keeper/grpc_query_gm.go")," file contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," keeper function that\nhandles the query and returns data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="gm/x/gm/keeper/grpc_query_gm.go"',title:'"gm/x/gm/keeper/grpc_query_gm.go"'},'func (k Keeper) Gm(goCtx context.Context, req *types.QueryGmRequest) (*types.QueryGmResponse, error) {\n    if req == nil {\n        return nil, status.Error(codes.InvalidArgument, "invalid request")\n    }\n    ctx := sdk.UnwrapSDKContext(goCtx)\n    _ = ctx\n    return &types.QueryGmResponse{}, nil\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Gm")," function performs the following actions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Makes a basic check on the request and throws an error if it\u2019s ",(0,o.kt)("inlineCode",{parentName:"li"},"nil")),(0,o.kt)("li",{parentName:"ul"},"Stores context in a ",(0,o.kt)("inlineCode",{parentName:"li"},"ctx")," variable that contains information about the\nenvironment of the request"),(0,o.kt)("li",{parentName:"ul"},"Returns a response of type ",(0,o.kt)("inlineCode",{parentName:"li"},"QueryGmResponse"))),(0,o.kt)("p",null,"Currently, the response is empty. Let\u2019s update the keeper function."),(0,o.kt)("p",null,"Our ",(0,o.kt)("inlineCode",{parentName:"p"},"query.proto")," file defines that the response accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"text"),". Use your text\neditor to modify the keeper function in ",(0,o.kt)("inlineCode",{parentName:"p"},"gm/x/gm/keeper/grpc_query_gm.go")," ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="gm/x/gm/keeper/grpc_query_gm.go"',title:'"gm/x/gm/keeper/grpc_query_gm.go"'},'func (k Keeper) Gm(goCtx context.Context, req *types.QueryGmRequest) (*types.QueryGmResponse, error) {\n    if req == nil {\n        return nil, status.Error(codes.InvalidArgument, "invalid request")\n    }\n    ctx := sdk.UnwrapSDKContext(goCtx)\n    _ = ctx\n    return &types.QueryGmResponse{Text: "gm world!"}, nil\n}\n')),(0,o.kt)("h2",{id:"start-your-sovereign-rollup"},"\ud83d\udfe2\xa0Start your Sovereign Rollup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'gmd start --rollmint.aggregator true --rollmint.da_layer celestia --rollmint.da_config=\'{"base_url":"[http://localhost:26658](http://134.209.70.139:26658/)","timeout":60000000000,"gas_limit":6000000}\' --rollmint.namespace_id 000000000000FFFF --rollmint.da_start_height 100783\n')),(0,o.kt)("p",null,"The\xa0",(0,o.kt)("inlineCode",{parentName:"p"},"query"),"\xa0command has also scaffolded\n",(0,o.kt)("inlineCode",{parentName:"p"},"x/gm/client/cli/query_gm.go"),"\xa0that\nimplements a CLI equivalent of the gm query and mounted this command in\n",(0,o.kt)("inlineCode",{parentName:"p"},"x/gm/client/cli/query.go"),". Run the following command and get the following\nJSON response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gmd q gm gm\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"text: gm world!\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"4.png",src:n(6986).Z,width:"1064",height:"862"})),(0,o.kt)("p",null,"Congratulations \ud83c\udf89 you've successfully built your first rollup and queried it!"))}m.isMDXComponent=!0},6986:function(e,t,n){t.Z=n.p+"assets/images/4-856eac0d6cc770f822920d687f38f9e7.png"}}]);