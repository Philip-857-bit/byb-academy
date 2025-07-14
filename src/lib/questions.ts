import type { Question } from './types';

export const questions: Question[] = [
  // 🧠 Class 1: Evolution of Web (Web1, Web2, Web3)
  {
    id: 1,
    class: "BYB Week 2",
    question: "Which of the following best describes a hot wallet?",
    options: [
      "A wallet connected to the internet for frequent use",
      "A wallet stored on a paper and kept offline",
      "A wallet requiring multiple keys to access",
      "A hardware wallet that supports staking"
    ],
    answer: "A wallet connected to the internet for frequent use",
    type: "multiple-choice"
  },
  {
    id: 2,
    class: "BYB Week 2",
    question: "Which key type must be kept private to ensure wallet security?",
    options: [
      "Public Key",
      "Blockchain Key",
      "Private Key",
      "Node Key"
    ],
    answer: "Private Key",
    type: "multiple-choice"
  },
  {
    id: 3,
    class: "BYB Week 2",
    question: "What is a major benefit of using a multisig wallet?",
    options: [
      "It increases transaction speed",
      "It allows backup of seed phrases",
      "It requires multiple parties to authorize a transaction",
      "It supports mining rewards"
    ],
    answer: "It requires multiple parties to authorize a transaction",
    type: "multiple-choice"
  },
  {
    id: 4,
    class: "BYB Week 2",
    question: "Why is it important to split funds between hot and cold wallets?",
    options: [
      "To avoid high gas fees",
      "To improve staking rewards",
      "To maintain liquidity while securing majority of assets",
      "To allow multiple blockchain access"
    ],
    answer: "To maintain liquidity while securing majority of assets",
    type: "multiple-choice"
  },
  {
    id: 5,
    class: "BYB Week 2",
    question: "What is a best practice when generating a paper wallet?",
    options: [
      "Use a shared public computer",
      "Use a browser extension",
      "Use an offline computer for generation",
      "Back it up with a cloud service"
    ],
    answer: "Use an offline computer for generation",
    type: "multiple-choice"
  },
  {
    id: 6,
    class: "BYB Week 2",
    question: "Which combination is MOST accurate about Bitcoin in the context of the blockchain trilemma?",
    options: [
      "High scalability and security, low decentralization",
      "High decentralization and security, low scalability",
      "High scalability and decentralization, low security",
      "Balanced in all three aspects"
    ],
    answer: "High decentralization and security, low scalability",
    type: "multiple-choice"
  },
  {
    id: 7,
    class: "BYB Week 2",
    question: "Layer 2 solutions are primarily designed to:",
    options: [
      "Enhance the core consensus mechanism",
      "Store data on-chain permanently",
      "Improve scalability without compromising Layer 1 security",
      "Eliminate decentralization issues"
    ],
    answer: "Improve scalability without compromising Layer 1 security",
    type: "multiple-choice"
  },
  {
    id: 8,
    class: "BYB Week 2",
    question: "What is the purpose of sharding in a blockchain system?",
    options: [
      "To increase decentralization through smaller validators",
      "To divide the network into segments for parallel transaction processing",
      "To hide wallet addresses from public view",
      "To eliminate the need for Layer 2 chains"
    ],
    answer: "To divide the network into segments for parallel transaction processing",
    type: "multiple-choice"
  },
  {
    id: 9,
    class: "BYB Week 2",
    question: "Solana prioritizes which two aspects of the blockchain trilemma?",
    options: [
      "Security and decentralization",
      "Scalability and decentralization",
      "Scalability and security",
      "Decentralization and anonymity"
    ],
    answer: "Scalability and security",
    type: "multiple-choice"
  },
  {
    id: 10,
    class: "BYB Week 2",
    question: "Which of the following is NOT a Layer 1 blockchain?",
    options: [
      "Ethereum",
      "Bitcoin",
      "Polygon",
      "Solana"
    ],
    answer: "Polygon",
    type: "multiple-choice"
  },
  {
    id: 11,
    class: "BYB Week 2",
    question: "What is a rug pull in the context of NFTs?",
    options: [
      "An NFT that gets burned after mint",
      "A project abandoning after raising funds, leaving holders with worthless NFTs",
      "A smart contract with a time lock",
      "A mechanism that burns half of all tokens"
    ],
    answer: "A project abandoning after raising funds, leaving holders with worthless NFTs",
    type: "multiple-choice"
  },
  {
    id: 12,
    class: "BYB Week 2",
    question: "Which of the following is a method to avoid phishing scams in Web3?",
    options: [
      "Clicking only on airdrop links",
      "Using any wallet with automatic signing",
      "Verifying contract addresses on trusted explorers",
      "Accepting DMs from NFT projects"
    ],
    answer: "Verifying contract addresses on trusted explorers",
    type: "multiple-choice"
  },
  {
    id: 13,
    class: "BYB Week 2",
    question: "Honeypot scams are most associated with which Web3 niche?",
    options: [
      "NFTs",
      "Layer 1 blockchains",
      "Memecoins",
      "Cold wallets"
    ],
    answer: "Memecoins",
    type: "multiple-choice"
  },
  {
    id: 14,
    class: "BYB Week 2",
    question: "What is front-running in decentralized exchanges?",
    options: [
      "Automatically buying NFTs before mint",
      "Using insider information to stake tokens early",
      "Placing a trade ahead of another pending transaction to gain advantage",
      "Verifying gas prices before mint"
    ],
    answer: "Placing a trade ahead of another pending transaction to gain advantage",
    type: "multiple-choice"
  },
  {
    id: 15,
    class: "BYB Week 2",
    question: "DYOR stands for:",
    options: [
      "Don't Yield Other Risks",
      "Do Your Own Research",
      "Decentralize Your Own Record",
      "Deploy Your Own Revenue"
    ],
    answer: "Do Your Own Research",
    type: "multiple-choice"
  },
  {
    id: 16,
    class: "BYB Week 2",
    question: "Which of the following BEST describes the concept of token supply in tokenomics?",
    options: [
      "The number of exchanges a token is listed on",
      "The total value of NFTs in the ecosystem",
      "The total and circulating number of tokens available",
      "The team’s token lockup period"
    ],
    answer: "The total and circulating number of tokens available",
    type: "multiple-choice"
  },
  {
    id: 17,
    class: "BYB Week 2",
    question: "Vesting schedules in tokenomics are designed to:",
    options: [
      "Boost staking APYs on launch day",
      "Control token release over time to avoid dumps",
      "Increase validator incentives",
      "Support NFTs with fixed rarity"
    ],
    answer: "Control token release over time to avoid dumps",
    type: "multiple-choice"
  },
  {
    id: 18,
    class: "BYB Week 2",
    question: "Which of these statements distinguishes a lightpaper from a whitepaper?",
    options: [
      "Lightpapers contain deep technical architecture",
      "Whitepapers are shorter and more visual",
      "Lightpapers are simplified and less technical overviews",
      "Whitepapers are only used for marketing"
    ],
    answer: "Lightpapers are simplified and less technical overviews",
    type: "multiple-choice"
  },
  {
    id: 19,
    class: "BYB Week 2",
    question: "A whitepaper typically does NOT include:",
    options: [
      "Tokenomics and utility structure",
      "Team information and roadmap",
      "Detailed technical architecture",
      "Live trading prices of the token"
    ],
    answer: "Live trading prices of the token",
    type: "multiple-choice"
  },
  {
    id: 20,
    class: "BYB Week 2",
    question: "Why are tokenomics important in project evaluation?",
    options: [
      "They help developers access private funding",
      "They determine short-term marketing strategy",
      "They describe how tokens are distributed, used, and managed",
      "They explain wallet recovery processes"
    ],
    answer: "They describe how tokens are distributed, used, and managed",
    type: "multiple-choice"
  },
  {
    id: 21,
    class: "BYB Week 2",
    question: "What is a primary purpose of a roadmap in a Web3 project?",
    options: [
      "To increase blockchain transaction speed",
      "To guide the user interface design",
      "To align stakeholders and track milestones",
      "To distribute free airdrops"
    ],
    answer: "To align stakeholders and track milestones",
    type: "multiple-choice"
  },
  {
    id: 22,
    class: "BYB Week 2",
    question: "What is the benefit of a soft launch before a full launch?",
    options: [
      "It generates token inflation",
      "It delays roadmap execution",
      "It helps gather feedback and catch bugs",
      "It secures long-term staking partners"
    ],
    answer: "It helps gather feedback and catch bugs",
    type: "multiple-choice"
  },
  {
    id: 23,
    class: "BYB Week 2",
    question: "In roadmap planning, the MoSCoW method is used for:",
    options: [
      "Token staking options",
      "Prioritizing tasks and features",
      "Selecting validators for DAOs",
      "Calculating transaction throughput"
    ],
    answer: "Prioritizing tasks and features",
    type: "multiple-choice"
  },
  {
    id: 24,
    class: "BYB Week 2",
    question: "A good launch checklist should include all EXCEPT:",
    options: [
      "Marketing materials",
      "Rollback plan",
      "Analytics tools setup",
      "Whitepaper peer review"
    ],
    answer: "Whitepaper peer review",
    type: "multiple-choice"
  },
  {
    id: 25,
    class: "BYB Week 2",
    question: "A project launch retrospective is held to:",
    options: [
      "Analyze what worked and what didn’t",
      "Onboard new token holders",
      "Upgrade validator hardware",
      "Audit the NFT minting contract"
    ],
    answer: "Analyze what worked and what didn’t",
    type: "multiple-choice"
  },
  {
    id: 26,
    class: "BYB Week 2",
    question: "What does the ERC-20 token standard primarily define?",
    options: [
      "How NFTs are generated and transferred",
      "A protocol for minting stablecoins",
      "A set of rules for fungible token creation on Ethereum",
      "A format for lightpapers"
    ],
    answer: "A set of rules for fungible token creation on Ethereum",
    type: "multiple-choice"
  },
  {
    id: 27,
    class: "BYB Week 2",
    question: "Fungible tokens differ from NFTs in that:",
    options: [
      "Fungible tokens have unique identities",
      "NFTs are used for staking",
      "Fungible tokens are interchangeable and identical",
      "NFTs cannot be stored in wallets"
    ],
    answer: "Fungible tokens are interchangeable and identical",
    type: "multiple-choice"
  },
  {
    id: 28,
    class: "BYB Week 2",
    question: "Which of the following best describes a utility token?",
    options: [
      "A token used exclusively for governance voting",
      "A token representing real-world assets only",
      "A token that provides access or function within a platform",
      "A token that guarantees returns"
    ],
    answer: "A token that provides access or function within a platform",
    type: "multiple-choice"
  },
  {
    id: 29,
    class: "BYB Week 2",
    question: "The SPL token standard is specific to which blockchain?",
    options: [
      "Ethereum",
      "Bitcoin",
      "Solana",
      "Polygon"
    ],
    answer: "Solana",
    type: "multiple-choice"
  },
  {
    id: 30,
    class: "BYB Week 2",
    question: "A governance token typically allows holders to:",
    options: [
      "Buy NFTs during mint",
      "Earn interest via staking only",
      "Participate in protocol decisions and votes",
      "Migrate tokens to new wallets"
    ],
    answer: "Participate in protocol decisions and votes",
    type: "multiple-choice"
  }
];