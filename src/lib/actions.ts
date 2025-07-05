'use server';

import { adminDb } from './firebase';

interface EmailPayload {
  to: string;
  username: string;
  score: number;
  totalQuestions: number;
}

export async function sendCompletionEmail({ to, username, score, totalQuestions }: EmailPayload) {
  // Check if Firebase Admin is configured and initialized
  if (!adminDb) {
      console.error('Firebase Admin SDK is not initialized. Email not queued. Make sure FIREBASE_SERVICE_ACCOUNT_KEY is set correctly in your environment variables.');
      return { success: false, message: 'Firebase Admin configuration is missing on the server.' };
  }

  try {
    // The 'mail' collection is the default for the Firebase "Trigger Email" extension.
    await adminDb.collection('mail').add({
      to: [to],
      message: {
        subject: `Your BYB Academy Quiz Results!`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: auto;">
            <h1 style="color: #333;">Congratulations, ${username}!</h1>
            <p>You've completed the Web3 Quiz Challenge.</p>
            <p>Your final score is: <strong style="font-size: 1.2em;">${score} out of ${totalQuestions}</strong></p>
            <p>Thank you for participating!</p>
            <br/>
            <p>The BYB Academy Team</p>
          </div>
        `,
      },
    });
    return { success: true, message: 'Email queued successfully.' };
  } catch (error) {
    console.error('Failed to queue email in Firestore:', error);
    return { success: false, message: 'Failed to queue email.' };
  }
}
