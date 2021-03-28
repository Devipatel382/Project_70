import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDz7o2jSXgGPrtqOz13dK-nv72kwr-t7zg",
  authDomain: "bedtimestories-9fcec.firebaseapp.com",
  databaseURL:"https://console.firebase.google.com/project/bedtimestories-9fcec/overview",
  projectId: "bedtimestories-9fcec",
  storageBucket: "bedtimestories-9fcec.appspot.com",
  messagingSenderId: "56932183986",
  appId: "1:56932183986:web:3e903c104fb460c8217eab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   