export interface Question {
  id: number;
  class: string;
  question: string;
  options: string[];
  answer: string;
  type: 'multiple-choice' | 'true-false';
}

export interface LeaderboardEntry {
  id: number;
  username: string;
  email: string;
  xHandle: string;
  score: number;
  time: number; // in seconds
}
