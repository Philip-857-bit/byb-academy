# **App Name**: BYB Academy Quiz Website

## Core Features:

- 30 Questions Total: A total of 30 questions, with 5 questions each from Day 1 to Day 6 topics. Multiple choice or True/False format is recommended for auto-grading.
- Quiz Timer: A 15-minute countdown timer for the entire quiz, which automatically submits when time runs out.
- Tab-Switch & Screen Lock: Users are disqualified or get a warning if they switch tabs, leave the quiz window, or try to inspect or refresh the page.
- Leaderboard: Rankings based on total score and time taken to submit (used as a tiebreaker), with live updates or refreshes after each quiz submission.
- Authentication: Optional authentication using username or wallet login (if tied to Web3 identity), or a one-time access link or code.

## Style Guidelines:

- Landing Page with instructions and a Start Quiz button.
- Quiz Page with 30 questions (paginated or all-in-one-scroll) and a timer at the top. Submit button is disabled until all questions are answered.
- Tab Restriction Script that monitors tab switches and displays a warning (or auto-submits after 3 strikes).
- Leaderboard Page with Name, Score, and Time Taken, with live refresh or on demand.