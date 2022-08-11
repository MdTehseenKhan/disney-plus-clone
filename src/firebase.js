import firebase from "firebase"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pak-disney.firebaseapp.com",
  projectId: "pak-disney",
  storageBucket: "pak-disney.appspot.com",
  messagingSenderId: "722632744024",
  appId: "1:722632744024:web:207c8f81c2e4798d7d3e2d",
  measurementId: "G-WNH027L6HY",
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
