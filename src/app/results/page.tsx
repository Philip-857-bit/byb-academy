"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, Home } from "lucide-react";
import { Logo } from "@/components/Logo";
import { questions } from "@/lib/questions";
import { supabase } from "@/lib/supabase";

interface Result {
  id: number;
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
    const storedResult = localStorage.getItem("latestQuizResult");

    if (storedResult) {
      const parsedResult: Result = JSON.parse(storedResult);
      setResult(parsedResult);

      const saveResult = async () => {
        const { error } = await supabase.from("leaderboard").insert([
          {
            username: parsedResult.username,
            score: parsedResult.score,
            time: parsedResult.time,
            email: parsedResult.email,
            xHandle: parsedResult.xHandle,
          },
        ]);

        if (error) {
          console.error("❌ Failed to save result:", error.message);
        } else {
          console.log("✅ Result saved to Supabase");
        }
      };

      saveResult();
    } else {
      router.replace("/");
    }
  }, [router]);

  if (!result) return null;

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
          <CardTitle>Quiz Completed 🎉</CardTitle>
          <CardDescription>
            Here's how you performed in the Web3 Quiz Challenge.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Username:</span>
            <span>{result.username}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Score:</span>
            <span>
              {result.score} / {totalQuestions}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Percentage:</span>
            <span>{percentage}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Time:</span>
            <span>{formatTime(result.time)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Twitter:</span>
            <span>@{result.xHandle}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">Email:</span>
            <span>{result.email}</span>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={() => router.push("/")}>
            <Home className="mr-2 h-4 w-4" /> Home
          </Button>
          <Button variant="outline" onClick={() => router.push("/leaderboard")}>
            <Trophy className="mr-2 h-4 w-4" /> Leaderboard
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}