import dotenv from 'dotenv'
import firebase from 'firebase/app';
import 'firebase/database'
dotenv.config()


    // Your web app's Firebase configuration
firebase.initializeApp({
    apiKey: "AIzaSyB0pVlLPuvC6FHNnOBcfcxcW3UUMHR5oBo",
    authDomain: "text-editor-prokit.firebaseapp.com",
    databaseURL: "https://text-editor-prokit-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "achiyablog",
    storageBucket: "achiyablog.appspot.com",
    messagingSenderId: "495689365486",
    appId: "1:495689365486:web:272e3f7045f6829de540ff"
    });


export default {
    firebase
}
