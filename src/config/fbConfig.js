import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyC5RWBbHfrGL325rOz1-qpvAltCgnAJmy4",
    authDomain: "instabook-26a03.firebaseapp.com",
    databaseURL: "https://instabook-26a03.firebaseio.com",
    projectId: "instabook-26a03",
    storageBucket: "instabook-26a03.appspot.com",
    messagingSenderId: "62304371342",
    appId: "1:62304371342:web:03b2b74cddc6c7e197ffdf",
    measurementId: "G-062D5HPPR5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase