import type { Question } from './types';

export const questions: Question[] = [
  // Day 1
  {
    id: 1,
    question: "What does 'BYB' stand for in the context of our academy?",
    options: ["Block by Block", "Build Your Brand", "Buy Your Bitcoin", "Bring Your Buddy"],
    correctAnswer: "Block by Block",
  },
  {
    id: 2,
    question: "Which of the following is a key pillar of Web3?",
    options: ["Centralization", "Decentralization", "Authorization", "Monetization"],
    correctAnswer: "Decentralization",
  },
  {
    id: 3,
    question: "What is a common use case for NFTs?",
    options: ["Sending emails", "Digital art and collectibles", "Streaming movies", "Database management"],
    correctAnswer: "Digital art and collectibles",
  },
  {
    id: 4,
    question: "True or False: A blockchain is a centralized, distributed ledger.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 5,
    question: "What technology is fundamental to cryptocurrencies like Bitcoin?",
    options: ["Artificial Intelligence", "Virtual Reality", "Blockchain", "Cloud Computing"],
    correctAnswer: "Blockchain",
  },
  // Day 2
  {
    id: 6,
    question: "What is a 'smart contract'?",
    options: ["A legal document written by a lawyer", "A contract that is easy to understand", "A self-executing contract with the terms of the agreement directly written into code", "A traditional contract stored on a computer"],
    correctAnswer: "A self-executing contract with the terms of the agreement directly written into code",
  },
  {
    id: 7,
    question: "Which platform is most known for popularizing smart contracts?",
    options: ["Bitcoin", "Ripple", "Dogecoin", "Ethereum"],
    correctAnswer: "Ethereum",
  },
  {
    id: 8,
    question: "What does DeFi stand for?",
    options: ["Decentralized Finance", "Digital Finance", "Distributed Funding", "Default Fines"],
    correctAnswer: "Decentralized Finance",
  },
  {
    id: 9,
    question: "True or False: You need a bank to participate in DeFi.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 10,
    question: "A 'DAO' is a:",
    options: ["Digital Asset Organizer", "Decentralized Autonomous Organization", "Data Access Object", "Direct Auction Offering"],
    correctAnswer: "Decentralized Autonomous Organization",
  },
  // Day 3
  {
    id: 11,
    question: "Which of these is NOT a type of cryptocurrency wallet?",
    options: ["Hardware wallet", "Software wallet", "Paper wallet", "Cloud wallet"],
    correctAnswer: "Cloud wallet",
  },
  {
    id: 12,
    question: "What is 'gas fee' in the context of Ethereum?",
    options: ["A fee for vehicle fuel", "A fee paid to miners/validators for processing transactions", "A subscription fee for using Ethereum", "A tax on crypto profits"],
    correctAnswer: "A fee paid to miners/validators for processing transactions",
  },
  {
    id: 13,
    question: "What is the main purpose of a 'seed phrase'?",
    options: ["To encrypt your data", "To set your username", "To recover your wallet and funds", "To confirm a transaction"],
    correctAnswer: "To recover your wallet and funds",
  },
  {
    id: 14,
    question: "True or False: All NFTs are built on the Ethereum blockchain.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 15,
    question: "The term 'metaverse' refers to:",
    options: ["A new type of university", "A virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual space", "A type of advanced database", "A popular video game"],
    correctAnswer: "A virtual shared space, created by the convergence of virtually enhanced physical reality and physically persistent virtual space",
  },
  // Day 4, 5, 6
  {
    id: 16,
    question: "What is 'Layer 2' scaling solution?",
    options: ["A secondary security protocol", "A framework built on top of a main blockchain to improve scalability", "A backup for the main blockchain", "A new type of consensus algorithm"],
    correctAnswer: "A framework built on top of a main blockchain to improve scalability",
  },
  {
    id: 17,
    question: "Which is an example of a Layer 2 solution for Ethereum?",
    options: ["Bitcoin", "Solana", "Polygon", "Cardano"],
    correctAnswer: "Polygon",
  },
  {
    id: 18,
    question: "What does 'HODL' mean in crypto slang?",
    options: ["Hold On for Dear Life", "Highly Optimized Digital Ledger", "Halt Official Digital Lending", "A misspelling of 'HOLD'"],
    correctAnswer: "Hold On for Dear Life",
  },
  {
    id: 19,
    question: "True or False: A private key should be shared with others for security.",
    options: ["True", "False"],
    correctAnswer: "False",
  },
  {
    id: 20,
    question: "What is the primary risk of using a centralized exchange?",
    options: ["They are too slow", "They can be a single point of failure and are subject to hacks or control", "They have high fees", "They don't offer enough coin variety"],
    correctAnswer: "They can be a single point of failure and are subject to hacks or control",
  },
  {
    id: 21,
    question: "What is 'staking' in cryptocurrency?",
    options: ["Betting on coin price movements", "Locking up crypto holdings to help secure a network and earn rewards", "A type of crypto mining", "Exchanging one coin for another"],
    correctAnswer: "Locking up crypto holdings to help secure a network and earn rewards",
  },
  {
    id: 22,
    question: "Which of the following is NOT a characteristic of a good brand?",
    options: ["Consistency", "Authenticity", "Inflexibility", "Community Engagement"],
    correctAnswer: "Inflexibility",
  },
  {
    id: 23,
    question: "In Web3, your digital identity is often tied to your...",
    options: ["Email address", "Social media profile", "Wallet address", "Phone number"],
    correctAnswer: "Wallet address",
  },
  {
    id: 24,
    question: "True or False: 'Interoperability' is the ability of different blockchains to communicate with each other.",
    options: ["True", "False"],
    correctAnswer: "True",
  },
  {
    id: 25,
    question: "What is a 'dApp'?",
    options: ["A downloadable application", "A distributed application", "A decentralized application", "A data application"],
    correctAnswer: "A decentralized application",
  },
  {
    id: 26,
    question: "What best describes Web1?",
    options: ["Read and write era", "Read-only era", "User-generated content era", "Fully decentralized internet"],
    correctAnswer: "Read-only era",
  },
  {
    id: 27,
    question: "Which of the following platforms are examples of Web2?",
    options: ["Wikipedia and Britannica", "Facebook and Instagram", "Ethereum and Solana", "DuckDuckGo and Yahoo"],
    correctAnswer: "Facebook and Instagram",
  },
  {
    id: 28,
    question: "What is a key characteristic of Web3?",
    options: ["Centralized data storage", "Ownership of data by companies", "Read/write/own era", "Limited interactivity"],
    correctAnswer: "Read/write/own era",
  },
  {
    id: 29,
    question: "What is decentralization in the context of Web3?",
    options: ["Data controlled by one company", "Ownership by different people", "Faster browsing experience", "Government regulation of content"],
    correctAnswer: "Ownership by different people",
  },
  {
    id: 30,
    question: "Which of the following is NOT listed as a benefit of blockchain in the notes?",
    options: ["Transparency", "Security", "Centralized access", "No need for identification"],
    correctAnswer: "Centralized access",
  },
];
