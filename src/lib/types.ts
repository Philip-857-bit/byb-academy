export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface LeaderboardEntry {
  username: string;
  email: string;
  xHandle: string;
  score: number;
  time: number; // in seconds
}
