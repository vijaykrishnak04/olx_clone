import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase-firestore'
import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyBEV2zN9_4wrk94JseJVibU81X3zqJ212o",
    authDomain: "olx-clone-d37b0.firebaseapp.com",
    projectId: "olx-clone-d37b0",
    storageBucket: "olx-clone-d37b0.appspot.com",
    messagingSenderId: "566855563601",
    appId: "1:566855563601:web:6e6a54dbd7681790f2fb70",
    measurementId: "G-MWZ9XV0G8F"
};

export default  firebase.initializeApp(firebaseConfig)
