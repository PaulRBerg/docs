"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=d(a),u=r,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_label:"QGB Orchestrator",description:"Learn about the QGB Orchestrator."},s="QGB Orchestrator",i={unversionedId:"nodes/qgb-orchestrator",id:"nodes/qgb-orchestrator",title:"QGB Orchestrator",description:"Learn about the QGB Orchestrator.",source:"@site/docs/nodes/qgb-orchestrator.md",sourceDirName:"nodes",slug:"/nodes/qgb-orchestrator",permalink:"/pr-preview/pr-809/fr/nodes/qgb-orchestrator",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-orchestrator.md",tags:[],version:"current",frontMatter:{sidebar_label:"QGB Orchestrator",description:"Learn about the QGB Orchestrator."},sidebar:"nodes",previous:{title:"Install the QGB binary",permalink:"/pr-preview/pr-809/fr/nodes/qgb-binary"},next:{title:"Key management",permalink:"/pr-preview/pr-809/fr/nodes/qgb-keys"}},l={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"How to run",id:"how-to-run",level:2},{value:"Install the QGB binary",id:"install-the-qgb-binary",level:3},{value:"Init the store",id:"init-the-store",level:3},{value:"Add keys",id:"add-keys",level:3},{value:"EVM key",id:"evm-key",level:4},{value:"Requirements",id:"requirements",level:3},{value:"Consensus node configuration",id:"consensus-node-configuration",level:4},{value:"Start the orchestrator",id:"start-the-orchestrator",level:3},{value:"Edit validator",id:"edit-validator",level:4},{value:"Systemd service",id:"systemd-service",level:4},{value:"Issue: Journald not outputting the logs",id:"issue-journald-not-outputting-the-logs",level:5}],p={toc:d},h="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"qgb-orchestrator"},"QGB Orchestrator"),(0,r.kt)("p",null,"The role of the orchestrator is to sign attestations using its corresponding validator EVM private key. These attestations are generated within the QGB module of the Celestia-app state machine. To learn more about what attestations are, you can refer to this ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/tree/main/x/qgb"},"link"),"."),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,"The orchestrator does the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect to a Celestia-app full node or validator node via RPC and gRPC and wait for new attestations"),(0,r.kt)("li",{parentName:"ol"},"Once an attestation is created inside the QGB state machine, the orchestrator queries it."),(0,r.kt)("li",{parentName:"ol"},"After getting the attestation, the orchestrator signs it using the provided EVM private key. The private key should correspond to the EVM address provided when creating the validator. More details in ",(0,r.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/validator-node/#setup-qgb-keys"},"here"),"."),(0,r.kt)("li",{parentName:"ol"},"Then, the orchestrator pushes its signature to the P2P network it is connected to, via adding it as a DHT value."),(0,r.kt)("li",{parentName:"ol"},"Listen for new attestations and go back to step 2.")),(0,r.kt)("p",null,"The orchestrator connects to a separate P2P network than the consensus or the data availability one. So, we will provide bootstrappers for that one."),(0,r.kt)("p",null,"Bootstrapper for the Blockspace Race is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/dns/bootstr-incent-1.celestia.tools/tcp/30000/p2p/12D3KooWSGZ2LXW2soQFHgU82uLfN7pNW5gMMkTnu1fhMXG43TvP"))),(0,r.kt)("p",null,"Make sure to specify it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-b")," flag when running the orchestrator."),(0,r.kt)("p",null,"This means that even if the consensus node is already connected to the consensus network, if the orchestrator doesn't start with a list of bootstrapper to its specific network, then, it will not work and will output the following logs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"I[2023-04-26|00:04:08.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0\nI[2023-04-26|00:04:18.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0\nI[2023-04-26|00:04:28.175] waiting for routing table to populate        targetnumberofpeers=1 currentcount=0\n")),(0,r.kt)("h2",{id:"how-to-run"},"How to run"),(0,r.kt)("h3",{id:"install-the-qgb-binary"},"Install the QGB binary"),(0,r.kt)("p",null,"Make sure to have the QGB binary installed. Check ",(0,r.kt)("a",{parentName:"p",href:"https://docs.celestia.org/nodes/qgb-binary"},"here")," for more details."),(0,r.kt)("h3",{id:"init-the-store"},"Init the store"),(0,r.kt)("p",null,"Before starting the orchestrator, we will need to init the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator init\n")),(0,r.kt)("p",null,"By default, the store will be created under ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.orchestrator"),". However, if you want to specify a custom location, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," flag. Or, you can use the following environment variable:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ORCHESTRATOR_HOME")),(0,r.kt)("td",{parentName:"tr",align:null},"Home directory for the orchestrator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~/.orchestrator")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h3",{id:"add-keys"},"Add keys"),(0,r.kt)("p",null,"In order for the orchestrator to start, it will need two private keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*EVM private key"),(0,r.kt)("li",{parentName:"ul"},"*P2P private key")),(0,r.kt)("p",null,"The EVM private key is the most important one since it needs to correspond to the EVM address provided when creating the validator."),(0,r.kt)("p",null,"The P2P private key is optional, and a new one will be generated automatically on the start if none is provided."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," command will help you set up these keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys  --help\n")),(0,r.kt)("p",null,"To add an EVM private key, check the next section."),(0,r.kt)("h4",{id:"evm-key"},"EVM key"),(0,r.kt)("p",null,"Because EVM keys are important, we provide a keystore that will help manage them. The keystore uses a file system keystore protected by a passphrase to store and open private keys."),(0,r.kt)("p",null,"To import your EVM private key, there is the ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," subcommand to assist you with that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm import --help\n")),(0,r.kt)("p",null,"This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like in ",(0,r.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts"},"here"),"."),(0,r.kt)("p",null,"After adding the key, you can check that it's added via running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm list\n")),(0,r.kt)("p",null,"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," command, check the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," documentation in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer/blob/main/docs/keys.md"},"here"),"."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"To run an orchestrator, you will need to have access to the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*Access to your EVM address private key. This latter doesn't need to be funded in any network."),(0,r.kt)("li",{parentName:"ul"},"*A list of bootstrappers for the P2P network. These will be shared by the team for every network we plan on supporting."),(0,r.kt)("li",{parentName:"ul"},"*Access to your consensus node RPC and gRPC ports.")),(0,r.kt)("h4",{id:"consensus-node-configuration"},"Consensus node configuration"),(0,r.kt)("p",null,"Before running the orchestrator, make sure to have the node indexing enabled. To check, open your consensus node ",(0,r.kt)("inlineCode",{parentName:"p"},"config/config.toml")," and check the following section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'#######################################################\n###   Transaction Indexer Configuration Options     ###\n#######################################################\n[tx_index]\n\n# What indexer to use for transactions\n#\n# The application will set which txs to index. In some cases a node operator will be able\n# to decide which txs to index based on configuration set in the application.\n#\n# Options:\n#   1) "null"\n#   2) "kv" (default) - the simplest possible indexer, backed by key-value storage (defaults to levelDB; see DBBackend).\n#       - When "kv" is chosen "tx.height" and "tx.hash" will always be indexed.\n#   3) "psql" - the indexer services backed by PostgreSQL.\n# When "kv" or "psql" is chosen "tx.height" and "tx.hash" will always be indexed.\nindexer = "kv"\n')),(0,r.kt)("p",null,"Make sure to have the ",(0,r.kt)("inlineCode",{parentName:"p"},"indexer")," set to something other than ",(0,r.kt)("inlineCode",{parentName:"p"},'"null"'),", as seen above where it is set to ",(0,r.kt)("inlineCode",{parentName:"p"},'"kv"'),"."),(0,r.kt)("p",null,"If the indexer was just activated, then, by default, it will not have the previous transactions indexed. And, if you run the orchestrator at the same time, it will try to create the commitments and will fail as the transactions are not indexed."),(0,r.kt)("p",null,"To solve this, you can do either of the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*Re-index by deleting the history and resyncing."),(0,r.kt)("li",{parentName:"ul"},"*Or, connect the orchestrator at first to a public RPC that has indexing activated, and wait for it to catchup and sign up to the last unbonding period. Then, switch the orchestrator to point to your personal validator at the next unbonding period.")),(0,r.kt)("h3",{id:"start-the-orchestrator"},"Start the orchestrator"),(0,r.kt)("p",null,"Now that we have the store initialized, we can start the orchestrator. Make sure you have your Celestia-app node RPC and gRPC accessible, and able to connect to the P2P network bootstrappers."),(0,r.kt)("p",null,"The orchestrator accepts the following flags:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb orchestrator start --help\n\nStarts the QGB orchestrator to sign attestations\n\nUsage:\n  qgb orchestrator start <flags> [flags]\n\nFlags:\n  -c, --celes-grpc string          Specify the grpc address without the protocol prefix (default "localhost:9090")\n  -t, --celes-rpc string           Specify the rest rpc address (default "tcp://localhost:26657")\n  -d, --evm-address string         Specify the EVM account address to use for signing (Note: the private key should be in the keystore)\n  -h, --help                       help for start\n      --home string                The qgb orchestrator home directory\n  -b, --p2p-bootstrappers string   Comma-separated multiaddresses of p2p peers to connect to\n  -q, --p2p-listen-addr string     MultiAddr for the p2p peer to listen on (default "/ip4/0.0.0.0/tcp/30000")\n  -p, --p2p-nickname string        Nickname of the p2p private key to use (if not provided, an existing one from the p2p store or a newly generated one will be used)\n      --evm-passphrase string          the account passphrase (if not specified as a flag, it will be asked interactively)\n')),(0,r.kt)("p",null,"To start the orchestrator in the default home directory, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator start \\\n    -c localhost:9090 \\\n    -t http://localhost:26657 \\\n    -d 0x966e6f22781EF6a6A82BBB4DB3df8E225DfD9488 \\\n    -b /ip4/127.0.0.1/tcp/30001/p2p/12D3KooWFFHahpcZcuqnUhpBoX5fJ68Qm5Hc8dxiBcX1oo46fLxh \\\n    -q /ip4/0.0.0.0/tcp/30000\n")),(0,r.kt)("p",null,'And, you will be prompted to enter your EVM key passphrase so that the orchestrator can use it to sign attestations. Make sure that it\'s the EVM address that was provided when creating the validator. If not, then the orchestrator will not sign, and you will keep seeing a "validator not part of valset" warning message. If you see such message, first verify that your validator is part of the active validator set. If so, then probably the EVM address provided to the orchestrator is not the right one, and you should check which EVM address is registered to your validator. Check the next section for more information.'),(0,r.kt)("p",null,"If you no longer have access to your EVM address, you could always edit your validator with a new EVM address. This can be done through the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit-validator")," command. Check the next section."),(0,r.kt)("h4",{id:"edit-validator"},"Edit validator"),(0,r.kt)("p",null,"If your validator was created using an EVM address that you don't have access to, you can always edit it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit-validator")," command."),(0,r.kt)("p",null,"First, you should get your validator ",(0,r.kt)("inlineCode",{parentName:"p"},"valoper")," address. To do so, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd keys show <validator_account> --bech val\n")),(0,r.kt)("p",null,"This assumes that you're using the default home directory, the default keystore etc. If not, make sure to add the flags that correspond to your situation."),(0,r.kt)("p",null,"Then, you should get your validator to verify which EVM address is attached to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd query staking validator <validator_valoper_address>\n")),(0,r.kt)("p",null,"And check the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm_address")," field if it has an address that you want to use to sign attestations. If not, let's proceed to change it."),(0,r.kt)("p",null,"Note: Please double-check the parameters of the following command before running it, as it may have persistent effects."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd tx staking edit-validator --evm-address=<new_evm_address> --from=<validator_account> --fees 210utia\n")),(0,r.kt)("p",null,"Example command output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},'auth_info:\n  fee:\n    amount:\n    - amount: "210"\n      denom: utia\n    gas_limit: "210000"\n    granter: ""\n    payer: ""\n  signer_infos: []\n  tip: null\nbody:\n  extension_options: []\n  memo: ""\n  messages:\n  - \'@type\': /cosmos.staking.v1beta1.MsgEditValidator\n    commission_rate: null\n    description:\n      details: \'[do-not-modify]\'\n      identity: \'[do-not-modify]\'\n      moniker: \'[do-not-modify]\'\n      security_contact: \'[do-not-modify]\'\n      website: \'[do-not-modify]\'\n    evm_address: 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7\n    min_self_delegation: null\n    validator_address: celestiavaloper1vr6j8mq6aaxr5mw9sld3a75afjr4rytp42zy6h\n  non_critical_extension_options: []\n  timeout_height: "0"\nsignatures: []\nconfirm transaction before signing and broadcasting [y/N]: y\ncode: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: 25864170DDE40F51C0C38BCF5B22BBC015637F56AA1E2DFDA6CE51F2D5860579\n')),(0,r.kt)("p",null,"Now, you can verify that the EVM address has been updated using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd query staking validator <validator_valoper_address>\n")),(0,r.kt)("p",null,"Now, you can restart the orchestrator, and it should start signing."),(0,r.kt)("p",null,"Note: A validator set change is triggered if more than 5% of the total staking power of the network changes (0.5% for BSR). This means that even if you change your EVM address, and you don't see your orchestrator signing, it's alright. Just wait until the validator set changes, and then your orchestrator will automatically start signing."),(0,r.kt)("h4",{id:"systemd-service"},"Systemd service"),(0,r.kt)("p",null,"If you want to start the orchestrator as a ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," service, you could use the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*Make sure you have the store initialized and the EVM address private key imported. Check the above sections for how to do that."),(0,r.kt)("li",{parentName:"ul"},"*Put the following configuration under: ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/systemd/system/orchestrator.service"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[Unit]\nDescription=QGB orchestrator service\nAfter=network.target\n\n[Service]\nType=simple\nExecStart=<absolute_path_to_qgb_binary> orchestrator start -d <evm_address> --evm-passphrase <evm_passphrase> --celes-grpc <grpc_endpoint> -t <rpc_endpoint> -b <bootstrappers_list>\nLimitNOFILE=infinity\nLimitCORE=infinity\nRestart=always\nRestartSec=1\nStartLimitBurst=5\nUser=<username>\nStandardError=journal\nStandardOutput=journal\nTTYPath=/dev/tty0\n\n[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"*Start the orchestrator service using:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl start orchestrator\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Follow the logs to see if everything is running correctly:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo journalctl -f -u orchestrator\n")),(0,r.kt)("p",null,"And you should see the orchestrator signing."),(0,r.kt)("h5",{id:"issue-journald-not-outputting-the-logs"},"Issue: Journald not outputting the logs"),(0,r.kt)("p",null,"Sometimes, ",(0,r.kt)("inlineCode",{parentName:"p"},"journald")," wouldn't load the logs from the specified service. An easy fix would be to restart it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart systemd-journald\n")),(0,r.kt)("p",null,"Then, you should be able to follow the logs as expected."))}c.isMDXComponent=!0}}]);