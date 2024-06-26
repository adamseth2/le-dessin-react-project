import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyB8jL-e6j8X8GY5RiSJJfiz9Uw8a0BT1SQ',
  authDomain: 'art-gallery-shop.firebaseapp.com',
  databaseURL: 'https://art-gallery-shop.firebaseio.com',
  projectId: 'art-gallery-shop',
  storageBucket: 'art-gallery-shop.appspot.com',
  messagingSenderId: '316324423102',
  appId: '1:316324423102:web:af3e7d802d0435c3f8c5ef',
};
// Initialize Firebase
initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore();
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
