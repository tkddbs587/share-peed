import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCnsgiAkIbw9oK0yksp0s63SwIoMqSIFcs',
  authDomain: 'peed-share.firebaseapp.com',
  projectId: 'peed-share',
  storageBucket: 'peed-share.firebasestorage.app',
  messagingSenderId: '934954580354',
  appId: '1:934954580354:web:bc7840204fabfb2608b79b',
  measurementId: 'G-T0911FY2YQ',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
