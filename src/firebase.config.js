import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDvRMnQLjmdma01q_tY38-7EMZDF4dcEa8",
    authDomain: "online-shop-510db.firebaseapp.com",
    projectId: "online-shop-510db",
    storageBucket: "online-shop-510db.appspot.com",
    messagingSenderId: "391516007889",
    appId: "1:391516007889:web:88320da4b72dda7a4b84f0"
    };
  
  export default firebaseConfig
  // Initialize Firebase
export const app = initializeApp(firebaseConfig)