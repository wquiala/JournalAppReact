import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC-oLi5qmHAd0mRonEo6wtP3__hscgePSA',
  authDomain: 'react-jpurnalapp.firebaseapp.com',
  projectId: 'react-jpurnalapp',
  storageBucket: 'react-jpurnalapp.appspot.com',
  messagingSenderId: '674719441819',
  appId: '1:674719441819:web:c007634ac0df55c335b73e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
