import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function FirebaseConfig() {
  const firebaseConfig = {
    apiKey: "AIzaSyDwJw42aaq7wYydNSzcYSOV0mW0gIypnsw",
    authDomain: "portfolio1-7d136.firebaseapp.com",
    databaseURL:
      "https://portfolio1-7d136-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfolio1-7d136",
    storageBucket: "portfolio1-7d136.appspot.com",
    messagingSenderId: "847619268765",
    appId: "1:847619268765:web:ff2a75533577ef880fb474",
    measurementId: "G-8SWN96291Q",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default FirebaseConfig;
