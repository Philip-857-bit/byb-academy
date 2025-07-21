import type { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    class: "BYB Week 3",
    question: "What is the primary reason blockchains require transaction fees?",
    options: [
      "Increase user wallets",
      "Incentivize validators and prevent spam",
      "Add more block rewards",
      "Reduce block sizes"
    ],
    answer: "Incentivize validators and prevent spam",
    type: "multiple-choice"
  },
  {
    id: 2,
    class: "BYB Week 3",
    question: "In Ethereum, what does 'gas limit' refer to?",
    options: [
      "The minimum ETH allowed per wallet",
      "The speed of confirmation",
      "The maximum amount of gas a user is willing to spend",
      "Block space usage"
    ],
    answer: "The maximum amount of gas a user is willing to spend",
    type: "multiple-choice"
  },
  {
    id: 3,
    class: "BYB Week 3",
    question: "Which blockchain typically uses rent fees for data storage?",
    options: [
      "Ethereum",
      "Solana",
      "Bitcoin",
      "Polygon"
    ],
    answer: "Solana",
    type: "multiple-choice"
  },
  {
    id: 4,
    class: "BYB Week 3",
    question: "What is the formula for calculating Ethereum gas fees?",
    options: [
      "ETH ÷ Time",
      "Gas Units × Gas Price",
      "Gwei – Network Fee",
      "Gas Limit + Block Size"
    ],
    answer: "Gas Units × Gas Price",
    type: "multiple-choice"
  },
  {
    id: 5,
    class: "BYB Week 3",
    question: "Which of the following best defines 'burn fee'?",
    options: [
      "A fee that melts NFTs",
      "A mining penalty fee",
      "A portion of transaction fees permanently removed from circulation",
      "A bribe paid to validators"
    ],
    answer: "A portion of transaction fees permanently removed from circulation",
    type: "multiple-choice"
  },
  {
    id: 6,
    class: "BYB Week 3",
    question: "What is the purpose of Web3 naming systems like ENS or SNS?",
    options: [
      "Host websites",
      "Replace long wallet addresses with human-readable names",
      "Store blockchain history",
      "Encrypt user tokens"
    ],
    answer: "Replace long wallet addresses with human-readable names",
    type: "multiple-choice"
  },
  {
    id: 7,
    class: "BYB Week 3",
    question: "What does DID stand for in Web3?",
    options: [
      "Decentralized Internal Domain",
      "Digital Identity Deployment",
      "Decentralized Identifier",
      "Dynamic Interoperability Data"
    ],
    answer: "Decentralized Identifier",
    type: "multiple-choice"
  },
  {
    id: 8,
    class: "BYB Week 3",
    question: "Which of these tokens is most similar to an identity badge in Web3?",
    options: [
      "Soulbound Token (SBT)",
      "Wrapped Token",
      "Utility Token",
      "Staked Token"
    ],
    answer: "Soulbound Token (SBT)",
    type: "multiple-choice"
  },
  {
    id: 9,
    class: "BYB Week 3",
    question: "Which of the following is a risk of public ENS domains?",
    options: [
      "Unlimited renewals",
      "Private key exposure",
      "Public visibility and name squatting",
      "Proof-of-Work duplication"
    ],
    answer: "Public visibility and name squatting",
    type: "multiple-choice"
  },
  {
    id: 10,
    class: "BYB Week 3",
    question: "A Web3 login system primarily uses:",
    options: [
      "OTPs and emails",
      "MetaMask or wallet-based authentication",
      "Phone number verification",
      "Cloud identity managers"
    ],
    answer: "MetaMask or wallet-based authentication",
    type: "multiple-choice"
  },
  {
    id: 11,
    class: "BYB Week 3",
    question: "Which of the following makes NFTs 'non-fungible'?",
    options: [
      "They're backed by fiat",
      "Each is unique and not interchangeable",
      "They operate on PoW chains",
      "They are fixed-supply tokens"
    ],
    answer: "Each is unique and not interchangeable",
    type: "multiple-choice"
  },
  {
    id: 12,
    class: "BYB Week 3",
    question: "What is the role of metadata in NFTs?",
    options: [
      "Adds extra gas fees",
      "Makes NFTs invisible",
      "Stores descriptive data and traits",
      "Links wallets to dApps"
    ],
    answer: "Stores descriptive data and traits",
    type: "multiple-choice"
  },
  {
    id: 13,
    class: "BYB Week 3",
    question: "What does it mean to 'mint' an NFT?",
    options: [
      "Transfer ETH",
      "Upload metadata",
      "Create a new token on the blockchain",
      "Trade on a DEX"
    ],
    answer: "Create a new token on the blockchain",
    type: "multiple-choice"
  },
  {
    id: 14,
    class: "BYB Week 3",
    question: "Which is NOT a real-world NFT use case?",
    options: [
      "Event access",
      "Voting tokens",
      "Creator royalties",
      "Identity in DAOs"
    ],
    answer: "Voting tokens",
    type: "multiple-choice"
  },
  {
    id: 15,
    class: "BYB Week 3",
    question: "What is a common NFT scam known as?",
    options: [
      "Token drain",
      "Market spoof",
      "Rug pull",
      "DAO sweep"
    ],
    answer: "Rug pull",
    type: "multiple-choice"
  },
  {
    id: 16,
    class: "BYB Week 3",
    question: "SocialFi platforms typically reward users for:",
    options: [
      "Burning tokens",
      "Mining NFTs",
      "Posting and engaging",
      "Bridging assets"
    ],
    answer: "Posting and engaging",
    type: "multiple-choice"
  },
  {
    id: 17,
    class: "BYB Week 3",
    question: "Friend.tech is an example of a platform that uses:",
    options: [
      "Governance staking",
      "Tokenized access to creators",
      "File storage",
      "NFT loans"
    ],
    answer: "Tokenized access to creators",
    type: "multiple-choice"
  },
  {
    id: 18,
    class: "BYB Week 3",
    question: "In GameFi, players typically earn crypto by:",
    options: [
      "Holding BTC",
      "Completing quests and trading NFTs",
      "Farming stablecoins",
      "Watching ads"
    ],
    answer: "Completing quests and trading NFTs",
    type: "multiple-choice"
  },
  {
    id: 19,
    class: "BYB Week 3",
    question: "What challenge is common in SocialFi systems?",
    options: [
      "Lack of tokens",
      "No use cases",
      "Bot spam and fake metrics",
      "Excessively high gas fees"
    ],
    answer: "Bot spam and fake metrics",
    type: "multiple-choice"
  },
  {
    id: 20,
    class: "BYB Week 3",
    question: "What is one major benefit of GameFi over traditional games?",
    options: [
      "No in-game rewards",
      "Centralized decision-making",
      "Players own and monetize assets",
      "Pay-to-play only"
    ],
    answer: "Players own and monetize assets",
    type: "multiple-choice"
  },
  {
    id: 21,
    class: "BYB Week 3",
    question: "What is InfoFi primarily about in Web3?",
    options: [
      "Sending tokenized emails",
      "Monetizing intelligence and information",
      "Playing financial games",
      "Real estate tokenization"
    ],
    answer: "Monetizing intelligence and information",
    type: "multiple-choice"
  },
  {
    id: 22,
    class: "BYB Week 3",
    question: "Which of the following is NOT a monetization method in InfoFi?",
    options: [
      "Token-gated content",
      "Proof-of-Work validation",
      "Tipping",
      "Subscriptions"
    ],
    answer: "Proof-of-Work validation",
    type: "multiple-choice"
  },
  {
    id: 23,
    class: "BYB Week 3",
    question: "How can users earn from consuming InfoFi content?",
    options: [
      "By staking predictions and accessing premium groups",
      "By only minting NFTs",
      "By selling SBTs",
      "By delegating tokens"
    ],
    answer: "By staking predictions and accessing premium groups",
    type: "multiple-choice"
  },
  {
    id: 24,
    class: "BYB Week 3",
    question: "What makes InfoFi powerful compared to other niches?",
    options: [
      "It uses GPU rendering",
      "It costs high gas",
      "Information is light but valuable",
      "It eliminates the need for wallets"
    ],
    answer: "Information is light but valuable",
    type: "multiple-choice"
  },
  {
    id: 25,
    class: "BYB Week 3",
    question: "Which of these is a known InfoFi platform?",
    options: [
      "MetaStream",
      "Degen Tips Bot",
      "Zapper Studio",
      "LensPlay"
    ],
    answer: "Degen Tips Bot",
    type: "multiple-choice"
  },
  {
    id: 26,
    class: "BYB Week 3",
    question: "The Metaverse is best described as:",
    options: [
      "A version of DeFi",
      "A static website layer",
      "An immersive, interactive digital world",
      "A browser plugin"
    ],
    answer: "An immersive, interactive digital world",
    type: "multiple-choice"
  },
  {
    id: 27,
    class: "BYB Week 3",
    question: "Which token powers land ownership in The Sandbox metaverse?",
    options: [
      "$MANA",
      "$AXS",
      "$SAND",
      "$UNI"
    ],
    answer: "$SAND",
    type: "multiple-choice"
  },
  {
    id: 28,
    class: "BYB Week 3",
    question: "NFTs in the metaverse can represent:",
    options: [
      "Wallet balances only",
      "3D avatars, wearables, and land",
      "Private keys",
      "Blockchain consensus"
    ],
    answer: "3D avatars, wearables, and land",
    type: "multiple-choice"
  },
  {
    id: 29,
    class: "BYB Week 3",
    question: "A challenge facing the Metaverse today is:",
    options: [
      "Too much hardware decentralization",
      "High TPS",
      "Accessibility and technical scalability",
      "NFT staking"
    ],
    answer: "Accessibility and technical scalability",
    type: "multiple-choice"
  },
  {
    id: 30,
    class: "BYB Week 3",
    question: "What future feature could transform user identity in the metaverse?",
    options: [
      "SBTs and smart AI avatars",
      "Rebase tokens",
      "Multisig contracts",
      "DeFi flash loans"
    ],
    answer: "SBTs and smart AI avatars",
    type: "multiple-choice"
  }
];