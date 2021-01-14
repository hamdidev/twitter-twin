import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDf_2jqJkto_-84AFPAvanxx8SBzFvkfyg",
    authDomain: "twitter-twiin.firebaseapp.com",
    projectId: "twitter-twiin",
    storageBucket: "twitter-twiin.appspot.com",
    messagingSenderId: "1060207988364",
    appId: "1:1060207988364:web:eca65822b55be6a21835a9",
    measurementId: "G-HCY7F42E5F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()

  export default db;