"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { LeaderboardEntry } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Home, Trophy, Twitter } from 'lucide-react';
import { Logo } from '@/components/Logo';

export default function LeaderboardPage() {
  const router = useRouter();
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const storedLeaderboard = localStorage.getItem('leaderboard');
    if (storedLeaderboard) {
      setLeaderboard(JSON.parse(storedLeaderboard));
    }
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };
  
  const getRankEmoji = (rank: number) => {
    if (rank === 0) return '🥇';
    if (rank === 1) return '🥈';
    if (rank === 2) return '🥉';
    return `#${rank + 1}`;
  }

  return (
    <main className="min-h-screen bg-background p-4 sm:p-8">
      <div className="container mx-auto max-w-4xl">
        <Card className="shadow-2xl shadow-primary/10">
          <CardHeader className="text-center">
             <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
              <Trophy className="h-10 w-10 text-primary" />
              Leaderboard
            </CardTitle>
            <CardDescription>
              See who's at the top. Rankings are based on score, then speed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px] text-center">Rank</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>X Handle</TableHead>
                    <TableHead className="text-center">Score</TableHead>
                    <TableHead className="text-right">Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leaderboard.length > 0 ? (
                    leaderboard.map((entry, index) => (
                      <TableRow key={index} className={index < 3 ? 'bg-primary/10 font-bold' : ''}>
                        <TableCell className="text-2xl text-center">{getRankEmoji(index)}</TableCell>
                        <TableCell>{entry.username}</TableCell>
                        <TableCell>
                          {entry.xHandle ? (
                            <a
                              href={`https://x.com/${entry.xHandle.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 hover:underline"
                            >
                              <Twitter className="h-4 w-4" />
                              {entry.xHandle}
                            </a>
                          ) : (
                            '-'
                          )}
                        </TableCell>
                        <TableCell className="text-center">{entry.score}</TableCell>
                        <TableCell className="text-right">{formatTime(entry.time)}</TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={5} className="h-24 text-center">
                        No results yet. Be the first to take the quiz!
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
        <div className="mt-8 flex justify-center">
            <Button onClick={() => router.push('/')} className="gap-2">
                <Home className="h-4 w-4" /> Go to Homepage
            </Button>
        </div>
      </div>
    </main>
  );
}
