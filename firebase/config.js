import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs5jFF0fOVW38gVjOdBN6mwtiMoZpzRYs",
  authDomain: "parkistan-fyp.firebaseapp.com",
  projectId: "parkistan-fyp",
  storageBucket: "parkistan-fyp.appspot.com",
  messagingSenderId: "849214881407",
  appId: "1:849214881407:web:8fc5417bf9d06bb8a2494a"
};


// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }