
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    
    apiKey: "AIzaSyAVdtMA9EPE2WuDxFg6xkagpW_52TQF1rs",
    authDomain: "queenty-4b950.firebaseapp.com",
    databaseURL: "https://queenty-4b950.firebaseio.com",
    projectId: "queenty-4b950",
    storageBucket: "queenty-4b950.appspot.com",
    messagingSenderId: "633848955640",
    appId: "1:633848955640:web:793dc076052621986df10d",
    measurementId: "G-KD5H00RLZR"
}

firebase.initializeApp(config);

export const auth = firebase.auth(); 
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;