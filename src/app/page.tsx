"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle
} from '@/components/ui/card';
import { Logo } from '@/components/Logo';
import {
  AlertCircle, Clock, Mail, ShieldAlert,
  Trophy, Twitter, User
} from 'lucide-react';
import {
  Alert, AlertDescription, AlertTitle
} from '@/components/ui/alert';
import { supabase } from '@/lib/supabase';

export default function Home() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [xHandle, setXHandle] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleStartQuiz = async () => {
    setError('');

    if (username.trim() && email.trim() && xHandle.trim()) {
      try {
        const { data, error } = await supabase
          .from("leaderboard")
          .select("id")
          .eq("email", email.trim().toLowerCase());

        if (error) {
          console.error("Supabase error:", error.message);
          setError("An error occurred. Please try again.");
          return;
        }

        if (data && data.length > 0) {
          setError("This email address has already been used to take the quiz.");
          return;
        }

        localStorage.setItem('quizUsername', username.trim());
        localStorage.setItem('quizEmail', email.trim().toLowerCase());
        localStorage.setItem('quizXHandle', xHandle.trim());
        router.push('/quiz');
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
      <div className="w-full max-w-2xl mx-auto">
        <Card className="shadow-2xl shadow-primary/10">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <CardTitle className="text-3xl font-bold">Web3 Quiz Challenge</CardTitle>
            <CardDescription className="text-muted-foreground">
              Test your knowledge and climb the leaderboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold text-lg mb-4 text-center">Quiz Rules & Instructions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                <Clock className="h-5 w-5 mt-1 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold">15-Minute Timer</h4>
                  <p className="text-muted-foreground">The quiz has a total of 15 minutes. It submits automatically when time runs out.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                <AlertCircle className="h-5 w-5 mt-1 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold">30 Questions</h4>
                  <p className="text-muted-foreground">Answer 30 multiple-choice questions covering key Web3 concepts.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                <ShieldAlert className="h-5 w-5 mt-1 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold">No Cheating</h4>
                  <p className="text-muted-foreground">Switching tabs, refreshing, or leaving will result in warnings and disqualification.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                <Trophy className="h-5 w-5 mt-1 text-primary shrink-0" />
                <div>
                  <h4 className="font-semibold">Leaderboard</h4>
                  <p className="text-muted-foreground">Your score and time will be ranked. Fastest correct answers win tie-breakers.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 text-lg h-12"
                  onKeyDown={(e) => e.key === 'Enter' && handleStartQuiz()}
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 text-lg h-12"
                  onKeyDown={(e) => e.key === 'Enter' && handleStartQuiz()}
                />
              </div>
              <div className="relative">
                <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter your X handle (e.g. @byb_academy)"
                  value={xHandle}
                  onChange={(e) => setXHandle(e.target.value)}
                  className="pl-10 text-lg h-12"
                  onKeyDown={(e) => e.key === 'Enter' && handleStartQuiz()}
                />
              </div>
            </div>
            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Already Taken</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button
              size="lg"
              className="w-full text-lg h-14"
              onClick={handleStartQuiz}
              disabled={!username.trim() || !email.trim() || !xHandle.trim()}
            >
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
