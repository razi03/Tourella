// // src/firebaseConfig.js

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyARhpqItrA8HL35WuqV02wWxOf0rN-52R8",
//   authDomain: "tourella-a45ae.firebaseapp.com",
//   projectId: "tourella-a45ae",
//   storageBucket: "tourella-a45ae.appspot.com",
//   messagingSenderId: "135123666991",
//   appId: "1:135123666991:web:390c4016d1e40f0dd15eda",
//   measurementId: "G-WFP9RVP42S"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firestore and Storage
// const db = getFirestore(app);
// const storage = getStorage(app);

// export { db, storage };



// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARhpqItrA8HL35WuqV02wWxOf0rN-52R8",
  authDomain: "tourella-a45ae.firebaseapp.com",
  projectId: "tourella-a45ae",
  storageBucket: "tourella-a45ae.appspot.com",
  messagingSenderId: "135123666991",
  appId: "1:135123666991:web:390c4016d1e40f0dd15eda",
//   measurementId: "G-WFP9RVP42S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
