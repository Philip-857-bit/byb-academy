"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { LeaderboardEntry } from '@/lib/types';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Home, Shield, Users, Twitter, Download, Trash2, AlertTriangle, KeyRound, LogIn, LogOut } from 'lucide-react';
import { Logo } from '@/components/Logo';
import Papa from 'papaparse';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from '@/components/ui/input';
import { Skeleton } from '@/components/ui/skeleton';

const ADMIN_PASSWORD = 'byb-admin-2024';

export default function AdminDashboardPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [userData, setUserData] = useState<LeaderboardEntry[]>([]);
  const [isClearAlertOpen, setIsClearAlertOpen] = useState(false);

  useEffect(() => {
    const isAdmin = sessionStorage.getItem('isAdminAuthenticated') === 'true';
    setIsAuthenticated(isAdmin);
    if (isAdmin) {
      const storedLeaderboard = localStorage.getItem('leaderboard');
      if (storedLeaderboard) {
        setUserData(JSON.parse(storedLeaderboard));
      }
    }
  }, []);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      setIsAuthenticated(true);
      setError('');
      // Load data after login
      const storedLeaderboard = localStorage.getItem('leaderboard');
      if (storedLeaderboard) {
        setUserData(JSON.parse(storedLeaderboard));
      }
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isAdminAuthenticated');
    setIsAuthenticated(false);
    setUserData([]); // Clear data on logout
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const handleExportCsv = () => {
    if (userData.length === 0) {
      return;
    }

    const csvData = userData.map(entry => ({
      Username: entry.username,
      Email: entry.email,
      'X Handle': entry.xHandle,
      Score: entry.score,
      'Time (s)': entry.time,
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.setAttribute('download', 'byb-quiz-userdata.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleClearData = () => {
    localStorage.removeItem('leaderboard');
    setUserData([]);
    setIsClearAlertOpen(false);
  };
  
  if (isAuthenticated === null) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
          <Skeleton className="h-96 w-full max-w-sm" />
        </main>
      );
  }

  if (!isAuthenticated) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background">
        <Card className="w-full max-w-sm mx-auto shadow-2xl shadow-primary/10">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Logo />
            </div>
            <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
              <KeyRound className="h-6 w-6 text-primary" />
              Admin Login
            </CardTitle>
            <CardDescription>
              Enter the password to access the dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
               <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                className="pl-4 text-lg h-12"
              />
            </div>
            {error && <p className="text-destructive text-sm mt-2 text-center">{error}</p>}
          </CardContent>
          <CardFooter className="flex-col gap-4">
            <Button onClick={handleLogin} className="w-full" disabled={!password}>
              <LogIn />
              Login
            </Button>
            <Button onClick={() => router.push('/')} variant="outline" className="w-full">
                <Home /> Go to Homepage
            </Button>
          </CardFooter>
        </Card>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-background p-4 sm:p-8">
        <div className="container mx-auto max-w-6xl">
          <Card className="shadow-2xl shadow-primary/10">
            <CardHeader className="text-center">
               <div className="flex justify-center mb-4">
                <Logo />
              </div>
              <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                <Shield className="h-10 w-10 text-primary" />
                Admin Dashboard
              </CardTitle>
              <CardDescription>
                View all user quiz submissions and details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <h3 className="text-lg font-semibold">User Data</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Button onClick={handleExportCsv} disabled={userData.length === 0}>
                    <Download />
                    Export to CSV
                  </Button>
                  <AlertDialog open={isClearAlertOpen} onOpenChange={setIsClearAlertOpen}>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" disabled={userData.length === 0}>
                        <Trash2 />
                        Clear Data
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                          <AlertTriangle className="text-destructive"/>
                          Are you absolutely sure?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete all user submission data.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={handleClearData} className={buttonVariants({ variant: "destructive" })}>
                          Yes, delete all data
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Username</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>X Handle</TableHead>
                      <TableHead className="text-center">Score</TableHead>
                      <TableHead className="text-right">Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userData.length > 0 ? (
                      userData.map((entry, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{entry.username}</TableCell>
                          <TableCell>{entry.email}</TableCell>
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
                          No user data found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <div className="mt-8 flex justify-center items-center gap-4">
              <Button onClick={() => router.push('/')} className="gap-2">
                  <Home className="h-4 w-4" /> Go to Homepage
              </Button>
               <Button onClick={handleLogout} variant="outline" className="gap-2">
                  <LogOut className="h-4 w-4" /> Logout
              </Button>
          </div>
        </div>
      </main>
    </>
  );
}
