  const firebaseConfig = {
    apiKey: "AIzaSyD7AqnbSnLd6caf707ejzOsFgJqm2yTzOQ",
    authDomain: "dent-lab-5c9a0.firebaseapp.com",
    projectId: "dent-lab-5c9a0",
    storageBucket: "dent-lab-5c9a0.appspot.com",
    messagingSenderId: "334558215631",
    appId: "1:334558215631:web:2fb06d227eb3b7a462e6ba",
    measurementId: "G-JM4T6PNBJW"
  };
  
  // Initialize Firebase in my website
  firebase.initializeApp(firebaseConfig);
    //criar o objeto da autenticação para que eu posso usar seus metodos
  const auth = firebase.auth();
  //criar o onjeto BD firestore para que eu possa usar seus métodos
  const db = firebase.firestore();