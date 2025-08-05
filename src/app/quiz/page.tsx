"use client";

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/questions';
import type { LeaderboardEntry } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { AlertTriangle, Clock, ShieldAlert } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { supabase } from '@/lib/supabase';

const EXAM_DURATION = 20 * 60; // 20 mins

export default function ExamPage() {
  const router = useRouter();
  const { toast } = useToast();

  const [username, setUsername] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [xHandle, setXHandle] = useState<string | null>(null);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [progress, setProgress] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [shownStrike, setShownStrike] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [warningOpen, setWarningOpen] = useState(false);

  const startTimeRef = useRef<number>(Date.now());


  useEffect(() => {
    const storedUsername = localStorage.getItem('quizUsername') || '';
    const storedEmail = localStorage.getItem('quizEmail') || '';
    const storedXHandle = localStorage.getItem('quizXHandle') || '';

    if (!storedUsername || !storedEmail || !storedXHandle) {
      router.replace('/');
      return;
    }

    setUsername(storedUsername);
    setEmail(storedEmail);
    setXHandle(storedXHandle);

    const quizWasInProgress = localStorage.getItem('quizInProgress') === 'true';
    if (quizWasInProgress) {
      // ⚠️ Refresh counts as a new strike
      const storedStrikes = Number(localStorage.getItem('strikes') || '0');
      const storedAnswers = JSON.parse(localStorage.getItem('answers') || '{}');
      const storedTimeLeft = Number(localStorage.getItem('timeLeft') || EXAM_DURATION);
      const storedStartTime = Number(localStorage.getItem('startTime') || Date.now());

      setStrikes(storedStrikes);
      setAnswers(storedAnswers);
      setTimeLeft(storedTimeLeft);
      startTimeRef.current = storedStartTime;
    } else {
      const now = Date.now();
      localStorage.setItem('quizInProgress', 'true');
      localStorage.setItem('startTime', now.toString());
      startTimeRef.current = now;
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') handleCheatAttempt();
    };
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey) || e.key === 'F12' || (e.metaKey && e.altKey && e.key === 'i')) {
        e.preventDefault();
        handleCheatAttempt();
      }
    };

    window.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [router]);

  // 🔁 Persist important values
  useEffect(() => {
    localStorage.setItem('answers', JSON.stringify(answers));
  }, [answers]);

  useEffect(() => {
    localStorage.setItem('strikes', strikes.toString());
  }, [strikes]);

  useEffect(() => {
    localStorage.setItem('timeLeft', timeLeft.toString());
  }, [timeLeft]);

  // ❌ Warning/Disqualification
  useEffect(() => {
    if (strikes === 0 || isFinished || strikes === shownStrike) return;

    if (strikes >= 3) {
      toast({
        variant: 'destructive',
        title: 'Disqualified!',
        description: 'You have been disqualified for suspicious activity.',
      });
      finishQuiz();
    } else {
      setWarningOpen(true);
      toast({
        variant: 'destructive',
        title: `Warning ${strikes} of 3`,
        description: 'Switching tabs or trying to inspect the page is not allowed.',
      });
    }

    setShownStrike(strikes);
  }, [strikes, isFinished, shownStrike, toast]);

  // ⏳ Countdown timer
  useEffect(() => {
    if (!username || isFinished) return;
    if (timeLeft <= 0) {
      toast({ title: "Time's up!", description: 'Your Exam has been submitted automatically.' });
      finishQuiz();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft, username, isFinished, toast]);

  const handleCheatAttempt = useCallback(() => {
    if (isFinished) return;
    setStrikes((prev) => prev + 1);
  }, [isFinished]);

  const finishQuiz = useCallback(() => {
    if (isFinished) return;
    setIsFinished(true);

    const endTime = Date.now();
    const timeTaken = Math.round((endTime - startTimeRef.current) / 1000);

    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.answer) score++;
    });
     const result: LeaderboardEntry = { id: Date.now(), username: username ?? "", email: email ?? "", xHandle: xHandle ?? "", score, time: timeTaken };
    localStorage.setItem('latestQuizResult', JSON.stringify(result));

   
    // Save to Supabase
    if (username && email && xHandle !== null) {
      supabase.from("leaderboard").insert([
        { username, email, xHandle, score, time: timeTaken }
      ]).then(({ error }) => {
        if (error) console.error("❌ Supabase error:", error.message);
      });
    }

    // Save locally as fallback
    const leaderboard: LeaderboardEntry[] = JSON.parse(localStorage.getItem('leaderboard') || '[]');
    leaderboard.push(result);
    leaderboard.sort((a, b) => b.score - a.score || a.time - b.time);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));

    // 🧹 Cleanup
    localStorage.removeItem('quizInProgress');
    localStorage.removeItem('answers');
    localStorage.removeItem('strikes');
    localStorage.removeItem('startTime');
    localStorage.removeItem('timeLeft');

    router.push('/results');
  }, [answers, email, username, xHandle, router, isFinished]);

  const handleAnswerChange = (questionId: number, value: string) => {
    const updated = { ...answers, [questionId]: value };
    setAnswers(updated);
    setProgress((Object.keys(updated).length / questions.length) * 100);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  if (!username) return null;

  return (
    <>
      <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm shadow-md">
        <div className="container mx-auto p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">BYB Quiz</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-mono text-lg bg-secondary px-3 py-1 rounded-md">
              <Clock className="h-5 w-5 text-primary" />
              <span>{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-lg bg-destructive/20 text-destructive-foreground px-3 py-1 rounded-md">
              <ShieldAlert className="h-5 w-5 text-destructive" />
              <span>{strikes} / 3</span>
            </div>
          </div>
        </div>
        <Progress value={progress} className="w-full h-1" />
      </div>

      <main className="container mx-auto p-4 md:p-8">
        <form onSubmit={(e) => { e.preventDefault(); finishQuiz(); }}>
          <div className="space-y-8">
            {questions.map((q, index) => (
              <Card key={q.id} className="shadow-lg hover:shadow-primary/20">
                <CardHeader>
                  <CardTitle>{index + 1}. {q.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)} value={answers[q.id] || ''}>
                    {q.options.map((option, i) => (
                      <div key={i} className="flex items-center space-x-3 p-3 hover:bg-secondary rounded-md">
                        <RadioGroupItem value={option} id={`q${q.id}-o${i}`} />
                        <Label htmlFor={`q${q.id}-o${i}`} className="text-base flex-1 cursor-pointer">{option}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button type="submit" size="lg" className="w-full max-w-sm text-lg h-14" disabled={!allQuestionsAnswered || isFinished}>
              Submit Quiz
            </Button>
          </div>
        </form>
      </main>

      <AlertDialog open={warningOpen} onOpenChange={setWarningOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2">
              <AlertTriangle className="text-destructive" />
              Cheating Warning
            </AlertDialogTitle>
            <AlertDialogDescription>
              Leaving the quiz window is not allowed. You have {3 - strikes} warning{3 - strikes === 1 ? '' : 's'} remaining.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setWarningOpen(false)}>I Understand</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
