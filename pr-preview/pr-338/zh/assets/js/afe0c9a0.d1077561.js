"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2460],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=i,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2229:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var n=a(3117),i=(a(7294),a(3905));const o={sidebar_label:"Celestia's Data Availability Layer"},r="Celestia's Data Availability Layer",l={unversionedId:"concepts/how-celestia-works/data-availability-layer",id:"concepts/how-celestia-works/data-availability-layer",title:"Celestia's Data Availability Layer",description:"Celestia is a data availability (DA) layer that provides a",source:"@site/docs/concepts/how-celestia-works/data-availability-layer.md",sourceDirName:"concepts/how-celestia-works",slug:"/concepts/how-celestia-works/data-availability-layer",permalink:"/pr-preview/pr-338/zh/concepts/how-celestia-works/data-availability-layer",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/concepts/how-celestia-works/data-availability-layer.md",tags:[],version:"current",frontMatter:{sidebar_label:"Celestia's Data Availability Layer"},sidebar:"concepts",previous:{title:"Monolithic vs. Modular Blockchains",permalink:"/pr-preview/pr-338/zh/concepts/how-celestia-works/monolithic-vs-modular"},next:{title:"The Lifecycle of a Celestia App Transaction",permalink:"/pr-preview/pr-338/zh/concepts/how-celestia-works/transaction-lifecycle"}},s={},d=[{value:"Data Availability Sampling (DAS)",id:"data-availability-sampling-das",level:2},{value:"Scalability",id:"scalability",level:3},{value:"Fraud Proofs of Incorrectly Extended Data",id:"fraud-proofs-of-incorrectly-extended-data",level:3},{value:"Namespaced Merkle Trees (NMTs)",id:"namespaced-merkle-trees-nmts",level:2},{value:"Building a PoS Blockchain for DA",id:"building-a-pos-blockchain-for-da",level:2},{value:"Providing Data Availability",id:"providing-data-availability",level:3}],c={toc:d};function h(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"celestias-data-availability-layer"},"Celestia's Data Availability Layer"),(0,i.kt)("p",null,"Celestia is a data availability (DA) layer that provides a\nscalable solution to the ",(0,i.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/alexandria/article/what-is-data-availability"},"data availability problem"),".\nDue to the permissionless nature of the blockchain networks,\na DA layer must provide a mechanism for the execution and settlement\nlayers to check in a trust-minimized way whether transaction data is indeed available."),(0,i.kt)("p",null,"Two key features of Celestia's DA layer are ",(0,i.kt)("a",{parentName:"p",href:"https://blog.celestia.org/celestia-mvp-release-data-availability-sampling-light-clients/"},"data availability sampling"),"\n(DAS) and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/nmt"},"Namespaced Merkle trees")," (NMTs).\nBoth features are novel blockchain scaling solutions: DAS enables light\nnodes to verify data availability without needing to download an entire block;\nNMTs enable execution and settlement layers on Celestia to download transactions\nthat are only relevant to them."),(0,i.kt)("h2",{id:"data-availability-sampling-das"},"Data Availability Sampling (DAS)"),(0,i.kt)("p",null,"In general, light nodes download only block headers that contain\ncommitments (i.e., Merkle roots) of the block data\xa0(i.e., the list of transactions)."),(0,i.kt)("p",null,"To make DAS possible, Celestia uses a 2-dimensional Reed-Solomon\nencoding scheme to encode the block data: every block data is split\ninto k \xd7 k chunks, arranged in a k \xd7 k matrix, and extended with parity\ndata into a 2k \xd7 2k extended matrix by applying multiple times Reed-Solomon encoding."),(0,i.kt)("p",null,"Then, 4k separate Merkle roots are computed for the rows and columns\nof the extended matrix; the Merkle root of these Merkle roots is used\nas the block data commitment in the block header."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2D Reed-Soloman (RS) Encoding",src:a(1047).Z,width:"1452",height:"706"})),(0,i.kt)("p",null,"To verify that the data is available, Celestia light nodes are sampling\nthe 2k \xd7 2k data chunks."),(0,i.kt)("p",null,"Every light node randomly chooses a set of unique coordinates in the\nextended matrix and queries full nodes for the data chunks and the\ncorresponding Merkle proofs at those coordinates. If light nodes\nreceive a valid response for each sampling query, then there is a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/issues/805#issuecomment-1150081075"},"high probability guarantee"),"\nthat the whole block's data is available."),(0,i.kt)("p",null,"Additionally, every received data chunk with a correct Merkle proof\nis gossiped to the network. As a result, as long as the Celestia light\nnodes are sampling together enough data chunks (i.e., at least k \xd7 k unique chunks),\nthe full block can be recovered by honest full nodes."),(0,i.kt)("p",null,"For more details on DAS, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1809.09044"},"original paper"),"."),(0,i.kt)("h3",{id:"scalability"},"Scalability"),(0,i.kt)("p",null,"DAS enables Celestia to scale the DA layer. DAS can be performed by\nresource-limited light nodes since each light node only samples a small\nportion of the block data. The more light nodes there are in the network,\nthe more data they can collectively download and store."),(0,i.kt)("p",null,"This means that increasing the number of light nodes performing DAS allows\nfor larger blocks (i.e., with more transactions), while still keeping DAS\nfeasible for resource-limited light nodes. However, in order to validate\nblock headers, Celestia light nodes need to download the 4k intermediate\nMerkle roots."),(0,i.kt)("p",null,"For a block data size of n bytes, this means that every light node must\ndownload O(n) bytes. Therefore, any improvement in the bandwidth capacity\nof Celestia light nodes has a quadratic effect on the throughput of Celestia's\nDA layer."),(0,i.kt)("h3",{id:"fraud-proofs-of-incorrectly-extended-data"},"Fraud Proofs of Incorrectly Extended Data"),(0,i.kt)("p",null,"The requirement of downloading the 4k intermediate Merkle roots is a\nconsequence of using a 2-dimensional Reed-Solomon encoding scheme. Alternatively,\nDAS could be designed with a standard (i.e., 1-dimensional) Reed-Solomon encoding,\nwhere the original data is split into k  chunks and extended with k additional\nchunks of parity data. Since the block data commitment is the Merkle root of the\n2k resulting data chunks, light nodes no longer need to download O(n) bytes to\nvalidate block headers."),(0,i.kt)("p",null,"The downside of the standard Reed-Solomon encoding is dealing with malicious\nblock producers that generate the extended data incorrectly."),(0,i.kt)("p",null,"This is possible as ",(0,i.kt)("strong",{parentName:"p"},"Celestia does not require a majority of the consensus\n(i.e., block producers) to be honest to guarantee data availability."),"\nThus, if the extended data is invalid, the original data might not be\nrecoverable, even if the light nodes are sampling sufficient unique chunks\n(i.e., at least k for a standard encoding and k \xd7 k for a 2-dimensional encoding)."),(0,i.kt)("p",null,"As a solution, ",(0,i.kt)("em",{parentName:"p"},"Fraud Proofs of Incorrectly Generated Extended Data")," enable\nlight nodes to reject blocks with invalid extended data. Such proofs require\nreconstructing the encoding and verifying the mismatch. With standard Reed-Solomon\nencoding, this entails downloading the original data, i.e., O(n) bytes.\nContrastingly, with 2-dimensional Reed-Solomon encoding, only O(n ) bytes are\nrequired as it is sufficient to verify only one row or one column of the\nextended matrix."),(0,i.kt)("h2",{id:"namespaced-merkle-trees-nmts"},"Namespaced Merkle Trees (NMTs)"),(0,i.kt)("p",null,"Celestia partitions the block data into multiple namespaces, one for\nevery application (e.g., rollup) using the DA layer. As a result, every\napplication needs to download only its own data and can ignore the data\nof other applications."),(0,i.kt)("p",null,"For this to work, the DA layer must be able to prove that the provided\ndata is complete, i.e., all the data for a given namespace is returned.\nTo this end, Celestia is using Namespaced Merkle Trees (NMTs)."),(0,i.kt)("p",null,"An NMT is a Merkle tree with the leafs ordered by the namespace identifiers\nand the hash function modified so that every node  in the tree includes the\nrange of namespaces of all its descendants. The following figure shows an\nexample of an NMT with height three (i.e., eight data chunks). The data is\npartitioned into three namespaces."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Namespaced Merkle Tree",src:a(8797).Z,width:"3855",height:"1337"})),(0,i.kt)("p",null,"When an application requests the data for namespace 2, the DA layer must\nprovide the data chunks ",(0,i.kt)("inlineCode",{parentName:"p"},"D3"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"D4"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"D5"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"D6")," and the nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"N2"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"N8"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"N7")," as proof (note that the application already has the root ",(0,i.kt)("inlineCode",{parentName:"p"},"N14")," from\nthe block header)."),(0,i.kt)("p",null,"As a result, the application is able to check that the provided data is part\nof the block data. Furthermore, the application can verify that all the data\nfor namespace 2 was provided. If the DA layer provides for example only the\ndata chunks ",(0,i.kt)("inlineCode",{parentName:"p"},"D4")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"D5"),", it must also provide nodes ",(0,i.kt)("inlineCode",{parentName:"p"},"N12")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"N11")," as proofs.\nHowever, the application can identify that the data is incomplete by checking\nthe namespace range of the two nodes, i.e., both ",(0,i.kt)("inlineCode",{parentName:"p"},"N12")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"N11")," have descendants\npart of namespace 2."),(0,i.kt)("p",null,"For more details on NMTs, take a look at the ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1905.09274"},"original paper"),"."),(0,i.kt)("h2",{id:"building-a-pos-blockchain-for-da"},"Building a PoS Blockchain for DA"),(0,i.kt)("h3",{id:"providing-data-availability"},"Providing Data Availability"),(0,i.kt)("p",null,"The Celestia DA layer consists of a PoS blockchain. Celestia is dubbing this\nblockchain as the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"Celestia App"),",\nan application that provides transactions to facilitate the DA layer and is built\nusing ",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.44/"},"Cosmos SDK"),". The following figure\nshows the main components of Celestia App."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Main components of Celestia App",src:a(6512).Z,width:"668",height:"640"})),(0,i.kt)("p",null,"Celestia App is built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-core"},"Celestia Core"),",\na modified version of the ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1807.04938"},"Tendermint consensus algorithm"),".\nAmong the more important changes to vanilla Tendermint, Celestia Core:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enables the erasure coding of block data (using the 2-dimensional Reed-Solomon\nencoding scheme)."),(0,i.kt)("li",{parentName:"ul"},"Replaces the regular Merkle tree used by Tendermint to store block data with\na ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/nmt"},"Namespaced Merkle tree")," that enables\nthe above layers (i.e., execution and settlement) to only download the needed\ndata (for more details, see the section below describing use cases).")),(0,i.kt)("p",null,"For more details on the changes to Tendermint, take a look at the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-core/tree/v0.34.x-celestia/docs/celestia-architecture"},"ADRs"),".\nNotice that Celestia Core nodes are still using the Tendermint p2p network."),(0,i.kt)("p",null,"Similarly to Tendermint, Celestia Core is connected to the application layer\n(i.e., the state machine) by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/tree/master/spec/abci%2B%2B"},"ABCI++"),",\na major evolution of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tendermint/tendermint/tree/master/spec/abci"},"ABCI"),"\n(Application Blockchain Interface)."),(0,i.kt)("p",null,"The Celestia App state machine is necessary to execute the PoS logic and to\nenable the governance of the DA layer."),(0,i.kt)("p",null,"However, the Celestia App is data-agnostic -- the state machine neither\nvalidates nor stores the data that is made available by the Celestia App."))}h.isMDXComponent=!0},6512:function(e,t,a){t.Z=a.p+"assets/images/celestia-app-94d3b9baaf383a59904fe08da53afa59.png"},8797:function(e,t,a){t.Z=a.p+"assets/images/nmt-c413099c3014bab8a8bf49c46ab79298.png"},1047:function(e,t,a){t.Z=a.p+"assets/images/reed-solomon-encoding-f362028ac31a62b75ff08bd2d4212427.png"}}]);