"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8271],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,u=m["".concat(i,".").concat(c)]||m[c]||h[c]||s;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={},o="Key management",l={unversionedId:"nodes/qgb-keys",id:"nodes/qgb-keys",title:"Key management",description:"The QGB keys command allows managing EVM private keys and P2P identities. It is defined as a subcommand for multiple commands with the only difference being the directory where the keys are stored. For the remaining functionality, it is the same for all the commands.",source:"@site/docs/nodes/qgb-keys.md",sourceDirName:"nodes",slug:"/nodes/qgb-keys",permalink:"/pr-preview/pr-668/nodes/qgb-keys",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-keys.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"QGB Orchestrator",permalink:"/pr-preview/pr-668/nodes/qgb-orchestrator"},next:{title:"QGB Relayer",permalink:"/pr-preview/pr-668/nodes/qgb-relayer"}},i={},p=[{value:"Orchestrator command",id:"orchestrator-command",level:2},{value:"Relayer command",id:"relayer-command",level:2},{value:"Deploy command",id:"deploy-command",level:2},{value:"Store initialization (!)",id:"store-initialization-",level:2},{value:"Options",id:"options",level:2},{value:"EVM keystore",id:"evm-keystore",level:3},{value:"EVM: Add subcommand",id:"evm-add-subcommand",level:4},{value:"EVM: Delete subcommand",id:"evm-delete-subcommand",level:4},{value:"EVM: List subcommand",id:"evm-list-subcommand",level:4},{value:"EVM: Update subcommand",id:"evm-update-subcommand",level:4},{value:"EVM: Import subcommand",id:"evm-import-subcommand",level:4},{value:"EVM: Import ECDSA",id:"evm-import-ecdsa",level:4},{value:"EVM: Import file",id:"evm-import-file",level:4},{value:"P2P keystore",id:"p2p-keystore",level:3},{value:"P2P: Add subcommand",id:"p2p-add-subcommand",level:4},{value:"P2P: Delete subcommand",id:"p2p-delete-subcommand",level:4},{value:"P2P: Import subcommand",id:"p2p-import-subcommand",level:4},{value:"P2P: List subcommand",id:"p2p-list-subcommand",level:4}],d={toc:p},m="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"key-management"},"Key management"),(0,r.kt)("p",null,"The QGB ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," command allows managing EVM private keys and P2P identities. It is defined as a subcommand for multiple commands with the only difference being the directory where the keys are stored. For the remaining functionality, it is the same for all the commands."),(0,r.kt)("h2",{id:"orchestrator-command"},"Orchestrator command"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"qgb orchestrator keys")," command manages keys for the orchestrator. By default, it uses the orchestrator default home directory to store the keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.orchestrator/keystore"),". However, the default home can be changed either by specifying a different directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," flag or setting the following environment variable:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ORCHESTRATOR_HOME")),(0,r.kt)("td",{parentName:"tr",align:null},"Home directory for the orchestrator"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~/.orchestrator")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h2",{id:"relayer-command"},"Relayer command"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"qgb relayer keys")," command manages keys for the relayer. By default, it uses the relayer default home directory to store the keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.relayer/keystore"),". However, the default home can be changed either by specifying a different directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," flag or setting the following environment variable:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RELAYER_HOME")),(0,r.kt)("td",{parentName:"tr",align:null},"Home directory for the relayer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~/.relayer")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h2",{id:"deploy-command"},"Deploy command"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"qgb deploy keys")," command manages keys for the deployer. By default, it uses the deployer default home directory to store the keys: ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.deployer/keystore"),". However, the default home can be changed either by specifying a different directory using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," flag or setting the following environment variable:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variable"),(0,r.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DEPLOYER_HOME")),(0,r.kt)("td",{parentName:"tr",align:null},"Home directory for the deploy command"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"~/.deployer")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,r.kt)("h2",{id:"store-initialization-"},"Store initialization (!)"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," command, the home directory will be created automatically for commands that ",(0,r.kt)("inlineCode",{parentName:"p"},"add/import")," new keys without having to manually initialize the store. Thus, you should be careful when running those."),(0,r.kt)("p",null,"However, if it finds an already initialized store, it will only add new keys to it and not overwrite it."),(0,r.kt)("p",null,"For the remaining subcommands ",(0,r.kt)("inlineCode",{parentName:"p"},"update/delete/list"),", if the store is not initialized, the command will complain and change nothing on the file system."),(0,r.kt)("h2",{id:"options"},"Options"),(0,r.kt)("p",null,"As specified above, aside from the difference in the default home directory, the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," subcommand is similar for all commands and handles the keys in the same way."),(0,r.kt)("p",null,"The examples will use the orchestrator command to access the keys. However, the same behaviour applies to the other commands as well."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb orchestrator keys --help\n\nQGB keys manager\n\nUsage:\n  qgb orchestrator keys [command]\n\nAvailable Commands:\n  evm         QGB EVM keys manager\n  p2p         QGB p2p keys manager\n\nFlags:\n  -h, --help   help for keys\n\nUse "qgb orchestrator keys [command] --help" for more information about a command.\n')),(0,r.kt)("h3",{id:"evm-keystore"},"EVM keystore"),(0,r.kt)("p",null,"The first subcommand of the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," command is ",(0,r.kt)("inlineCode",{parentName:"p"},"evm"),". This latter allows managing EVM keys."),(0,r.kt)("p",null,"The EVM keys are ",(0,r.kt)("inlineCode",{parentName:"p"},"ECDSA")," keys using the ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," curve. The implementation uses ",(0,r.kt)("inlineCode",{parentName:"p"},"geth")," file system keystore ",(0,r.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts"},"implementation"),". Thus, keys can be used interchangeably with any compatible software."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb orchestrator keys evm --help\n\nQGB EVM keys manager\n\nUsage:\n  qgb orchestrator keys evm [command]\n\nAvailable Commands:\n  add         create a new EVM address\n  delete      delete an EVM addresses from the key store\n  import      import evm keys to the keystore\n  list        list EVM addresses in key store\n  update      update an EVM account passphrase\n\nFlags:\n  -h, --help   help for evm\n\nUse "qgb orchestrator keys evm [command] --help" for more information about a command.\n')),(0,r.kt)("p",null,"The store also uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts.StandardScryptN")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts.StandardScryptP")," for the ",(0,r.kt)("inlineCode",{parentName:"p"},"Scrypt")," password-based key derivation algorithm to improve its resistance to parallel hardware attacks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"evmKs = keystore.NewKeyStore(evmKeyStorePath(path), keystore.StandardScryptN, keystore.StandardScryptP)\n")),(0,r.kt)("h4",{id:"evm-add-subcommand"},"EVM: Add subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," subcommand allows creating a new EVM private key and storing it in the keystore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm add --help\n\ncreate a new EVM address\n\nUsage:\n  qgb orchestrator keys evm add [flags]\n\nFlags:\n  -h, --help                help for add\n      --home string         The qgb evm keys home directory\n      --evm-passphrase string   the account passphrase (if not specified as a flag, it will be asked interactively)\n")),(0,r.kt)("p",null,"The passphrase of the key encryption can be passed as a flag. But it is advised not to pass it as plain text and instead enter it when prompted interactively."),(0,r.kt)("p",null,"After creating a new key, you will see its corresponding address printed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm add\n\nI[2023-04-13|14:16:11.387] successfully opened store                    path=/home/midnight/.orchestrator\nI[2023-04-13|14:16:11.387] please provide a passphrase for your account \nI[2023-04-13|14:16:30.533] account created successfully                 address=0xaF319b70de80232539ad576f88739afD2dF44187\nI[2023-04-13|14:16:30.534] successfully closed store                    path=/home/midnight/.orchestrator\n")),(0,r.kt)("h4",{id:"evm-delete-subcommand"},"EVM: Delete subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," subcommand allows deleting an EVM private key from store via providing its corresponding address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm delete --help\n\ndelete an EVM addresses from the key store\n\nUsage:\n  qgb orchestrator keys evm delete <account address in hex> [flags]\n\nFlags:\n  -h, --help                help for delete\n      --home string         The qgb evm keys home directory\n      --evm-passphrase string   the account passphrase (if not specified as a flag, it will be asked interactively)\n")),(0,r.kt)("p",null,"The provided address should be a ",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," prefixed EVM address."),(0,r.kt)("p",null,"After running the command, you will be prompted to enter the passphrase for the encrypted private key, if not passed as a flag."),(0,r.kt)("p",null,"Then, you will be prompted to confirm that you want to delete that private key. Make sure to verify if you're deleting the right one because once deleted, it can no longer be recovered!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm delete 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7 \n\nI[2023-04-13|15:01:41.308] successfully opened store                    path=/home/midnight/.orchestrator\nI[2023-04-13|15:01:41.309] deleting account                             address=0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7\nI[2023-04-13|15:01:41.309] please provide the address passphrase        \nI[2023-04-13|15:01:43.268] Are you sure you want to delete your private key? This action cannot be undone and may result in permanent loss of access to your account. \nPlease enter 'yes' or 'no' to confirm your decision: yes\nI[2023-04-13|15:01:45.532] private key has been deleted successfully    address=0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7\nI[2023-04-13|15:01:45.534] successfully closed store                    path=/home/midnight/.orchestrator\n")),(0,r.kt)("h4",{id:"evm-list-subcommand"},"EVM: List subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," subcommand allows listing the existing keys in the keystore:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm list\n\nI[2023-04-13|16:08:45.084] successfully opened store                    path=/home/midnight/.orchestrator\nI[2023-04-13|16:08:45.084] listing accounts available in store          \nI[2023-04-13|16:08:45.084] 0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba   \nI[2023-04-13|16:08:45.084] successfully closed store                    path=/home/midnight/.orchestrator\n")),(0,r.kt)("p",null,"You could specify a different home using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," flag to list the keys in another home directory."),(0,r.kt)("h4",{id:"evm-update-subcommand"},"EVM: Update subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," subcommand allows changing the EVM private key passphrase to a new one. It takes as argument the ",(0,r.kt)("inlineCode",{parentName:"p"},"0x")," prefixed EVM address corresponding to the private key we want to edit."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator evm update --help\n\nupdate an EVM account passphrase\n\nUsage:\n  qgb orchestrator keys evm update <account address in hex> [flags]\n\nFlags:\n      --evm-passphrase string   the evm account passphrase (if not specified as a flag, it will be asked interactively)\n  -h, --help                    help for update\n      --home string             The qgb evm keys home directory\n      --new-passphrase string   the evm account new passphrase (if not specified as a flag, it will be asked interactively)\n")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator evm update 0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba\n\nI[2023-04-13|16:21:17.139] successfully opened store                    path=/home/midnight/.orchestrator\nI[2023-04-13|16:21:17.140] updating account                             address=0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba\nI[2023-04-13|16:21:17.140] please provide the address passphrase        \nI[2023-04-13|16:21:18.134] please provide the address new passphrase    \nI[2023-04-13|16:21:22.403] successfully updated the passphrase          address=0x7Dd8F9CAfe6D25165249A454F2d0b72FD149Bbba\nI[2023-04-13|16:21:22.420] successfully closed store                    path=/home/midnight/.orchestrator\n")),(0,r.kt)("p",null,"Both the passphrases can be provided as flags, but it's better to pass them interactively for more security."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--home")," can be specified if the store is not in the default directory."),(0,r.kt)("h4",{id:"evm-import-subcommand"},"EVM: Import subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," subcommand allows importing existing private keys into the keystore. It has two subcommands: ",(0,r.kt)("inlineCode",{parentName:"p"},"ecdsa")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"file"),". The first allows importing a private key in plaintext, while the other allows importing a private key from a JSON file secured with a passphrase."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb orchestrator keys evm import --help\n\nimport evm keys to the keystore\n\nUsage:\n  qgb orchestrator keys evm import [command]\n\nAvailable Commands:\n  ecdsa       import an EVM address from an ECDSA private key\n  file        import an EVM address from a file\n\nFlags:\n  -h, --help   help for import\n\nUse "qgb orchestrator keys evm import [command] --help" for more information about a command.\n')),(0,r.kt)("h4",{id:"evm-import-ecdsa"},"EVM: Import ECDSA"),(0,r.kt)("p",null,"For the first one, it takes as argument the private key in plaintext. Then, it prompts for the passphrase to use when encrypting the key and saving it to the keystore. The passphrase could be passed as a flag using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--evm-passphrase"),", but it's advised not to."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm import ecdsa da6ed55cb2894ac2c9c10209c09de8e8b9d109b910338d5bf3d747a7e1fc9eb7\n\nI[2023-04-13|17:00:48.617] successfully opened store                    path=/home/midnight/.orchestrator\nI[2023-04-13|17:00:48.617] importing account                            \nI[2023-04-13|17:00:48.617] please provide the address passphrase        \nI[2023-04-13|17:00:51.989] successfully imported file                   address=0x6B452Da14195b0aDc3C960E56a078Cf8f50448f8\nI[2023-04-13|17:00:51.990] successfully closed store                    path=/home/midnight/.orchestrator\n")),(0,r.kt)("h4",{id:"evm-import-file"},"EVM: Import file"),(0,r.kt)("p",null,"For the second, it takes a JSON key file, as defined in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/eth-keyfile"},"here"),", and imports it to your keystore, so it can be used for signatures."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm import file --help\n\nimport an EVM address from a file\n\nUsage:\n  qgb orchestrator keys evm import file <path to key file> [flags]\n\nFlags:\n      --evm-passphrase string   the evm account passphrase (if not specified as a flag, it will be asked interactively)\n  -h, --help                    help for file\n      --home string             The qgb evm keys home directory\n      --new-passphrase string   the evm account new passphrase (if not specified as a flag, it will be asked interactively)\n")),(0,r.kt)("p",null,"For example, if we have a file in the current directory containing a private key, we could run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm import file UTC--2023-04-13T15-00-50.302148204Z--966e6f22781ef6a6a82bbb4db3df8e225dfd9488\n\nI[2023-04-13|17:31:53.307] successfully opened store                    path=/home/midnight/.orchestrator\nI[2023-04-13|17:31:53.307] importing account                            \nI[2023-04-13|17:31:53.308] please provide the address passphrase        \nI[2023-04-13|17:31:54.440] please provide the address new passphrase    \nI[2023-04-13|17:31:58.436] successfully imported file                   address=0x966e6f22781EF6a6A82BBB4DB3df8E225DfD9488\nI[2023-04-13|17:31:58.437] successfully closed store                    path=/home/midnight/.orchestrator\n")),(0,r.kt)("p",null,"with the ",(0,r.kt)("inlineCode",{parentName:"p"},"passphrase")," being the current file passphrase, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"new passphrase")," being the new passphrase that will be used to encrypt the private key in the QGB store."),(0,r.kt)("h3",{id:"p2p-keystore"},"P2P keystore"),(0,r.kt)("p",null,"Similar to the above EVM keystore, the P2P store has similar subcommands for handling the P2P Ed25519 private keys. However, it doesn't use any passphrase to secure them because they aren't that important. Any key could be used, and it is not binding to any identity. Thus, there is no need to secure them."),(0,r.kt)("p",null,"To access the P2P keystore, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb orchestrator keys p2p\n\nQGB p2p keys manager\n\nUsage:\n  qgb orchestrator keys p2p [command]\n\nAvailable Commands:\n  add         create a new Ed25519 P2P address\n  delete      delete an Ed25519 P2P private key from store\n  import      import an existing p2p private key\n  list        list existing p2p addresses\n\nFlags:\n  -h, --help   help for p2p\n\nUse "qgb orchestrator keys p2p [command] --help" for more information about a command.\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"orchestrator")," could be replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"relayer")," and the only difference would be the default home directory. Aside from that, all the methods defined for the orchestrator will also work with the relayer."),(0,r.kt)("h4",{id:"p2p-add-subcommand"},"P2P: Add subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," subcommand creates a new p2p key to the p2p store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys p2p add --help\n\ncreate a new Ed25519 P2P address\n\nUsage:\n  qgb orchestrator keys p2p add <nickname> [flags]\n\nFlags:\n  -h, --help          help for add\n      --home string   The qgb p2p keys home directory\n")),(0,r.kt)("p",null,"It takes as argument an optional ",(0,r.kt)("inlineCode",{parentName:"p"},"<nickname>")," which would be the name that we can use to reference that private key. If not specified, an incremental nickname will be assigned."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys p2p add\n\nI[2023-04-13|17:38:17.289] successfully opened store                    path=/home/midnight/.orchestrator\nI[2023-04-13|17:38:17.290] generating a new Ed25519 private key         nickname=1\nI[2023-04-13|17:38:17.291] key created successfully                     nickname=1\nI[2023-04-13|17:38:17.291] successfully closed store                    path=/home/midnight/.orchestrator\n")),(0,r.kt)("p",null,"For example, in the above execution, the nickname ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," was given to the newly added key, since we didn't provide a nickname."),(0,r.kt)("p",null,"The nickname will be needed in case the orchestrator needs to use a specific private key to connect to the P2P network, and that nickname will be provided as a flag. However, if not provided, the orchestrator/relayer will choose the first key in the store and just use it to connect."),(0,r.kt)("h4",{id:"p2p-delete-subcommand"},"P2P: Delete subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," subcommand will delete a P2P private key from store referenced by its nickname:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys p2p delete --help\n\ndelete an Ed25519 P2P private key from store\n\nUsage:\n  qgb orchestrator keys p2p delete <nickname> [flags]\n\nFlags:\n  -h, --help          help for delete\n      --home string   The qgb p2p keys home directory\n")),(0,r.kt)("h4",{id:"p2p-import-subcommand"},"P2P: Import subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," subcommand will import an existing Ed25519 private key to the store. It takes as argument the nickname that we wish to save the private key under, and the actual private key in hex format without ",(0,r.kt)("inlineCode",{parentName:"p"},"0x"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys p2p import --help\n\nimport an existing p2p private key\n\nUsage:\n  qgb orchestrator keys p2p import <nickname> <private_key_in_hex_without_0x> [flags]\n\nFlags:\n  -h, --help          help for import\n      --home string   The qgb p2p keys home directory\n")),(0,r.kt)("h4",{id:"p2p-list-subcommand"},"P2P: List subcommand"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," subcommand lists the existing P2P private keys in the store:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys p2p list --help\n\nlist existing p2p addresses\n\nUsage:\n  qgb orchestrator keys p2p list [flags]\n\nFlags:\n  -h, --help          help for list\n      --home string   The qgb p2p keys home directory\n")))}h.isMDXComponent=!0}}]);