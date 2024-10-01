// services/firebaseConfig.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "https://console.firebase.google.com/project/qchillp",
    projectId: "qchillp",
    storageBucket: "qchillp.appspot.com",
    messagingSenderId: "521594179171",
    appId: "1:521594179171:android:969db72c9de593fdddf256"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
const messaging = firebase.messaging();

export { firestore, messaging };
