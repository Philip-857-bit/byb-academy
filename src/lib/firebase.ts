import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import * as admin from 'firebase-admin';
import type { ServiceAccount } from 'firebase-admin';

const clientConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Client-side app for browser
const app = !getApps().length ? initializeApp(clientConfig) : getApp();
const db = getFirestore(app);

// Server-side app for admin actions
function getAdminApp() {
    if (admin.apps.length > 0) {
        return admin.app();
    }

    if (!process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('FIREBASE_SERVICE_ACCOUNT_KEY is not set. Firebase Admin features will be disabled.');
        }
        return null;
    }

    try {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY) as ServiceAccount;
        return admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });
    } catch (e) {
        console.error('Could not initialize Firebase Admin. Please check your FIREBASE_SERVICE_ACCOUNT_KEY.', e);
        return null;
    }
}

const adminApp = getAdminApp();
const adminDb = adminApp ? admin.firestore() : null;

export { app, db, adminDb };
