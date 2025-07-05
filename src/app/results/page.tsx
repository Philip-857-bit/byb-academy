"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Clock, Twitter, Home } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { questions } from '@/lib/questions';

interface Result {
  username: string;
  score: number;
  time: number;
  email: string;
  xHandle: string;
}

export default function ResultsPage() {
  const router = useRouter();
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const storedResult = localStorage.getItem('latestQuizResult');
    if (storedResult) {
      setResult(JSON.parse(storedResult));
    } else {
      router.replace('/');
    }
  }, [router]);

  if (!result) {
    return null;
  }
  
  const totalQuestions = questions.length;
  const percentage = Math.round((result.score / totalQuestions) * 100);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md mx-auto text-center shadow-2xl shadow-primary/10">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
          <CardDescription>Well done, {result.username}. Here's your result.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-around items-center p-4 bg-secondary rounded-lg">
            <div>
              <p className="text-sm text-muted-foreground">Score</p>
              <p className="text-4xl font-bold text-primary">{result.score} <span className="text-2xl text-muted-foreground">/ {totalQuestions}</span></p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Accuracy</p>
              <p className="text-4xl font-bold text-primary">{percentage}%</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 text-lg">
            <Clock className="h-6 w-6 text-muted-foreground" />
            <span>Time Taken: <span className="font-bold">{formatTime(result.time)}</span></span>
          </div>
          {result.xHandle && (
            <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
              <Twitter className="h-5 w-5" />
              <span>{result.xHandle}</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex-col space-y-4">
          <Button size="lg" className="w-full gap-2" onClick={() => router.push('/leaderboard')}>
            <Trophy className="h-5 w-5" /> View Leaderboard
          </Button>
          <Button size="lg" variant="outline" className="w-full gap-2" onClick={() => router.push('/')}>
            <Home className="h-5 w-5" /> Go to Homepage
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
