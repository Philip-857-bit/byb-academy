import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    class: "Class 1",
    question: "What is Web3's core principle?",
    options: ['Decentralization', 'Central servers', 'Static content', 'Single admin control'],
    answer: "Decentralization",
    type: "multiple-choice"
  },
  {
    id: 2,
    class: "Class 2",
    question: "What enables value transfer on Web3?",
    options: ['NFTs', 'Smartphones', 'Blockchain', 'Cloud servers'],
    answer: "Blockchain",
    type: "multiple-choice"
  },
  {
    id: 3,
    class: "Class 3",
    question: "Web1 was mostly:",
    options: ['Read-only', 'Write and publish', 'Interactive apps', 'Streaming content'],
    answer: "Read-only",
    type: "multiple-choice"
  },
  {
    id: 4,
    class: "Class 4",
    question: "A wallet stores:",
    options: ['Web pages', 'Private keys and crypto', 'Passwords only', 'DeFi tokens'],
    answer: "Private keys and crypto",
    type: "multiple-choice"
  },
  {
    id: 5,
    class: "Class 5",
    question: "A private key is used to:",
    options: ['Receive funds', 'Secure websites', 'Sign and approve transactions', 'Launch nodes'],
    answer: "Sign and approve transactions",
    type: "multiple-choice"
  },
  {
    id: 6,
    class: "Class 6",
    question: "What is ETH?",
    options: ['Ethereum wallet', 'Ethereum token', 'NFT platform', 'Bitcoin clone'],
    answer: "Ethereum token",
    type: "multiple-choice"
  },
  {
    id: 7,
    class: "Class 7",
    question: "Which wallet is browser-based?",
    options: ['MetaMask', 'Ledger', 'ColdCard', 'Trezor'],
    answer: "MetaMask",
    type: "multiple-choice"
  },
  {
    id: 8,
    class: "Class 8",
    question: "A dApp is:",
    options: ['A centralized application', 'A desktop program', 'A decentralized application', 'A digital art gallery'],
    answer: "A decentralized application",
    type: "multiple-choice"
  },
  {
    id: 9,
    class: "Class 9",
    question: "Gas fee means:",
    options: ['Fuel for DAOs', 'Ethereum transaction cost', 'Wallet password', 'Smart contract length'],
    answer: "Ethereum transaction cost",
    type: "multiple-choice"
  },
  {
    id: 10,
    class: "Class 1",
    question: "Layer 1 blockchain example:",
    options: ['Polygon', 'Arbitrum', 'Solana', 'Optimism'],
    answer: "Solana",
    type: "multiple-choice"
  },
  {
    id: 11,
    class: "Class 2",
    question: "Cold wallets are best for:",
    options: ['Short-term trades', 'Hot token swaps', 'Long-term secure storage', 'Paying gas fees'],
    answer: "Long-term secure storage",
    type: "multiple-choice"
  },
  {
    id: 12,
    class: "Class 3",
    question: "Smart contracts run:",
    options: ['In Excel', 'Manually by devs', 'Automatically on blockchain', 'Only during staking'],
    answer: "Automatically on blockchain",
    type: "multiple-choice"
  },
  {
    id: 13,
    class: "Class 4",
    question: "ENS lets you:",
    options: ['Buy NFTs', 'Mint stablecoins', 'Create human-readable addresses', 'Swap tokens'],
    answer: "Create human-readable addresses",
    type: "multiple-choice"
  },
  {
    id: 14,
    class: "Class 5",
    question: "A mnemonic phrase is:",
    options: ['Crypto price formula', 'Staking proof', 'Wallet recovery seed', 'Public key'],
    answer: "Wallet recovery seed",
    type: "multiple-choice"
  },
  {
    id: 15,
    class: "Class 6",
    question: "ERC-20 tokens are:",
    options: ['Non-fungible', 'Fungible', 'Only for NFTs', 'ETH-based games'],
    answer: "Fungible",
    type: "multiple-choice"
  },
  {
    id: 16,
    class: "Class 7",
    question: "WalletConnect connects:",
    options: ['Banks and DAOs', 'Users and Layer 2s', 'Wallets and dApps', 'Miners and oracles'],
    answer: "Wallets and dApps",
    type: "multiple-choice"
  },
  {
    id: 17,
    class: "Class 8",
    question: "DAO stands for:",
    options: ['Decentralized App Order', 'Data on Account', 'Decentralized Autonomous Organization', 'Designated Asset Option'],
    answer: "Decentralized Autonomous Organization",
    type: "multiple-choice"
  },
  {
    id: 18,
    class: "Class 9",
    question: "Staking means:",
    options: ['Token burning', 'Locking tokens for rewards or security', 'Paying fees', 'Swapping coins'],
    answer: "Locking tokens for rewards or security",
    type: "multiple-choice"
  },
  {
    id: 19,
    class: "Class 5",
    question: "Hot wallet example:",
    options: ['Trezor', 'Ledger', 'MetaMask', 'ColdCard'],
    answer: "MetaMask",
    type: "multiple-choice"
  },
  {
    id: 20,
    class: "Class 6",
    question: "Smallest BTC unit:",
    options: ['Bit', 'Satoshi', 'NanoBTC', 'Microblock'],
    answer: "Satoshi",
    type: "multiple-choice"
  },
  {
    id: 21,
    class: "Class 10",
    question: "Solana introduced:",
    options: ['Proof of Stake', 'Proof of History', 'PoW', 'Proof of Burn'],
    answer: "Proof of History",
    type: "multiple-choice"
  },
  {
    id: 22,
    class: "Class 11",
    question: "Consensus mechanism ensures:",
    options: ['NFT visibility', 'Validator rewards', 'Agreement on network state', 'Oracle integrity'],
    answer: "Agreement on network state",
    type: "multiple-choice"
  },
  {
    id: 23,
    class: "Class 12",
    question: "Ethereum switch from PoW to PoS was called:",
    options: ['The Merge', 'Flippening', 'Transition 2.0', 'Beacon Burst'],
    answer: "The Merge",
    type: "multiple-choice"
  },
  {
    id: 24,
    class: "Class 13",
    question: "Wrapped tokens are:",
    options: ['Duplicate tokens', 'Tokens pegged to another on different chain', 'Old NFTs', 'Digital cash'],
    answer: "Tokens pegged to another on different chain",
    type: "multiple-choice"
  },
  {
    id: 25,
    class: "Class 14",
    question: "DeFi protocol example:",
    options: ['YouTube', 'Compound', 'Telegram', 'Photoshop'],
    answer: "Compound",
    type: "multiple-choice"
  },
  {
    id: 26,
    class: "Class 15",
    question: "ZK-Rollups improve:",
    options: ['Staking', 'Scalability and privacy', 'NFT royalties', 'Gas collection'],
    answer: "Scalability and privacy",
    type: "multiple-choice"
  },
  {
    id: 27,
    class: "Class 16",
    question: "Hop Protocol is used for:",
    options: ['Token launch', 'Bridging across chains', 'Oracles', 'DAO votes'],
    answer: "Bridging across chains",
    type: "multiple-choice"
  },
  {
    id: 28,
    class: "Class 17",
    question: "TVL in DeFi means:",
    options: ['Token Volume Limit', 'Total Value Locked', 'Trade Value List', 'Trusted Validator Ledger'],
    answer: "Total Value Locked",
    type: "multiple-choice"
  },
  {
    id: 29,
    class: "Class 18",
    question: "Quadratic voting prevents:",
    options: ['Over-centralization', 'Token minting', 'NFT forging', 'Rollup exits'],
    answer: "Over-centralization",
    type: "multiple-choice"
  },
  {
    id: 30,
    class: "Class 19",
    question: "Governance tokens allow:",
    options: ['Airdrops', 'Voting', 'Burning tokens', 'Running nodes'],
    answer: "Voting",
    type: "multiple-choice"
  },
  {
    id: 31,
    class: "Class 11",
    question: "Celestia is a:",
    options: ['Rollup chain', 'Layer 0', 'NFT app', 'Modular blockchain'],
    answer: "Modular blockchain",
    type: "multiple-choice"
  },
  {
    id: 32,
    class: "Class 12",
    question: "Arbitrum and Optimism are:",
    options: ['L1s', 'Rollups', 'Wallets', 'Games'],
    answer: "Rollups",
    type: "multiple-choice"
  },
  {
    id: 33,
    class: "Class 13",
    question: "Oracles connect:",
    options: ['Users and apps', 'Wallets to bridges', 'Blockchains to off-chain data', 'L2s to dApps'],
    answer: "Blockchains to off-chain data",
    type: "multiple-choice"
  },
  {
    id: 34,
    class: "Class 14",
    question: "NFTs are created via:",
    options: ['Proof of Work', 'Smart contracts', 'Wallet syncing', 'Decentralized ID'],
    answer: "Smart contracts",
    type: "multiple-choice"
  },
  {
    id: 35,
    class: "Class 15",
    question: "IPFS is used for:",
    options: ['Token staking', 'DAO polling', 'Decentralized file storage', 'Gas estimation'],
    answer: "Decentralized file storage",
    type: "multiple-choice"
  },
  {
    id: 36,
    class: "Class 16",
    question: "ERC-1155 tokens are:",
    options: ['Only for NFTs', 'Used for DeFi', 'Support fungible and non-fungible tokens', 'Security tokens'],
    answer: "Support fungible and non-fungible tokens",
    type: "multiple-choice"
  },
  {
    id: 37,
    class: "Class 17",
    question: "zkSync and StarkNet are:",
    options: ['Wallets', 'DAOs', 'ZK-Rollups', 'DIDs'],
    answer: "ZK-Rollups",
    type: "multiple-choice"
  },
  {
    id: 38,
    class: "Class 18",
    question: "DAO treasuries store:",
    options: ['NFT blueprints', 'Governance tokens', 'Funds for collective decisions', 'Cold keys'],
    answer: "Funds for collective decisions",
    type: "multiple-choice"
  },
  {
    id: 39,
    class: "Class 19",
    question: "Immutable contracts mean:",
    options: ['Can’t be changed after deployment', 'Always visible', 'Gasless', 'Voting required'],
    answer: "Can’t be changed after deployment",
    type: "multiple-choice"
  },
  {
    id: 40,
    class: "Class 20",
    question: "Lightning Network helps scale:",
    options: ['Solana', 'Avalanche', 'Ethereum', 'Bitcoin'],
    answer: "Bitcoin",
    type: "multiple-choice"
  },
  {
    id: 41,
    class: "Class 21",
    question: "MEV stands for:",
    options: ['Merged Execution Volume', 'Maximum Extractable Value', 'Minimal Economic Verification', 'Most Efficient Validator'],
    answer: "Maximum Extractable Value",
    type: "multiple-choice"
  },
  {
    id: 42,
    class: "Class 22",
    question: "zk-SNARKs provide:",
    options: ['DeFi liquidity', 'Private zero-knowledge proofs', 'Staking pools', 'Rollup exits'],
    answer: "Private zero-knowledge proofs",
    type: "multiple-choice"
  },
  {
    id: 43,
    class: "Class 23",
    question: "Cosmos is a:",
    options: ['Wallet', 'Layer 0 protocol', 'NFT tool', 'Game engine'],
    answer: "Layer 0 protocol",
    type: "multiple-choice"
  },
  {
    id: 44,
    class: "Class 24",
    question: "Soulbound tokens are:",
    options: ['Locked for rewards', 'Non-transferable', 'Backed by BTC', 'Time-locked'],
    answer: "Non-transferable",
    type: "multiple-choice"
  },
  {
    id: 45,
    class: "Class 25",
    question: "Slashing penalizes validators for:",
    options: ['Correct voting', 'Inactive wallets', 'Misbehavior or downtime', 'High gas usage'],
    answer: "Misbehavior or downtime",
    type: "multiple-choice"
  },
  {
    id: 46,
    class: "Class 26",
    question: "Reentrancy bugs affect:",
    options: ['Bridges', 'Wallet keys', 'Smart contract logic', 'Block time'],
    answer: "Smart contract logic",
    type: "multiple-choice"
  },
  {
    id: 47,
    class: "Class 27",
    question: "zkSync is known for:",
    options: ['NFT volume', 'Gas burning', 'Zero-knowledge proofs', 'Validator leasing'],
    answer: "Zero-knowledge proofs",
    type: "multiple-choice"
  },
  {
    id: 48,
    class: "Class 21",
    question: "Modular blockchains separate:",
    options: ['NFT and DAO', 'Execution, consensus, data layers', 'Gas and staking', 'Wallet and node'],
    answer: "Execution, consensus, data layers",
    type: "multiple-choice"
  },
  {
    id: 49,
    class: "Class 22",
    question: "EigenLayer allows:",
    options: ['Restaking ETH for new protocols', 'DeFi lending', 'NFT bridging', 'DAO voting'],
    answer: "Restaking ETH for new protocols",
    type: "multiple-choice"
  },
  {
    id: 50,
    class: "Class 23",
    question: "Sequencer in rollups does:",
    options: ['Validates contracts', 'Orders transactions', 'Hosts NFTs', 'Runs wallets'],
    answer: "Orders transactions",
    type: "multiple-choice"
  },
  {
    id: 51,
    class: "Class 24",
    question: "Zero-knowledge proofs allow:",
    options: ['No proof needed', 'Proofs without revealing data', 'Validators to hide', 'Faster NFTs'],
    answer: "Proofs without revealing data",
    type: "multiple-choice"
  },
  {
    id: 52,
    class: "Class 25",
    question: "Liveness means:",
    options: ['NFT activity', 'Ability to keep adding valid transactions', 'Governance frequency', 'Rollup exit rate'],
    answer: "Ability to keep adding valid transactions",
    type: "multiple-choice"
  },
  {
    id: 53,
    class: "Class 26",
    question: "ZK prover does what?",
    options: ['Signs blocks', 'Constructs ZK proofs', 'Launches DAOs', 'Manages TVL'],
    answer: "Constructs ZK proofs",
    type: "multiple-choice"
  },
  {
    id: 54,
    class: "Class 27",
    question: "Censorship resistance ensures:",
    options: ['Tokens always mint', 'Nodes aren’t blocked', 'No entity can block valid transactions', 'Gas always drops'],
    answer: "No entity can block valid transactions",
    type: "multiple-choice"
  },
  {
    id: 55,
    class: "Class 21",
    question: "Restaking is:",
    options: ['Burning ETH', 'Using ETH stake across protocols', 'DAO upgrade', 'Cross-chain voting'],
    answer: "Using ETH stake across protocols",
    type: "multiple-choice"
  },
  {
    id: 56,
    class: "Class 22",
    question: "Proof of Humanity confirms:",
    options: ['Smart contract audits', 'Identity without central authority', 'Bridges only', 'NFT staking'],
    answer: "Identity without central authority",
    type: "multiple-choice"
  },
  {
    id: 57,
    class: "Class 23",
    question: "Optimistic Rollups assume:",
    options: ['Transactions are always wrong', 'Everything needs fraud proofs', 'Transactions are valid unless challenged', 'Block times must double'],
    answer: "Transactions are valid unless challenged",
    type: "multiple-choice"
  },
  {
    id: 58,
    class: "Class 24",
    question: "Celestia focuses on:",
    options: ['EVM speed', 'Modular blockchain infrastructure', 'DEX aggregation', 'Stablecoin minting'],
    answer: "Modular blockchain infrastructure",
    type: "multiple-choice"
  },
  {
    id: 59,
    class: "Class 25",
    question: "Flash loans allow:",
    options: ['Gasless NFTs', 'Uncollateralized loans in a single transaction', 'Wallet backup', 'DAO payouts'],
    answer: "Uncollateralized loans in a single transaction",
    type: "multiple-choice"
  },
  {
    id: 60,
    class: "Class 26",
    question: "Validium combines:",
    options: ['DeFi and NFTs', 'Off-chain data availability with ZK proofs', 'Rollups and Oracles', 'Staking with wallets'],
    answer: "Off-chain data availability with ZK proofs",
    type: "multiple-choice"
  }
];