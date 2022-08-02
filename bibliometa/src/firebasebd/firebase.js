import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCF6q-ReEx381tecMdv4E_xhCAFHmOCb_s",
    authDomain: "bibliometa-1e459.firebaseapp.com",
    projectId: "bibliometa-1e459",
    storageBucket: "bibliometa-1e459.appspot.com",
    messagingSenderId: "405858559960",
    appId: "1:405858559960:web:2b425631618f32a2bf74ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
//const auth = getAuth(app)

export default firebaseConfig;
export { db, auth };
//export { auth };