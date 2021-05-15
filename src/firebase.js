import firebase from 'firebase/app';

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCobXu-wQXBUDTXEJ1K9ltOUfb-WXMiuF4",
    authDomain: "utube-but-better.firebaseapp.com",
    projectId: "utube-but-better",
    storageBucket: "utube-but-better.appspot.com",
    messagingSenderId: "704831202318",
    appId: "1:704831202318:web:936f7d2d7604031273c85f"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()