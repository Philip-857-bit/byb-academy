export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface LeaderboardEntry {
  id: number;
  username: string;
  email: string;
  xHandle: string;
  score: number;
  time: number; // in seconds
}
