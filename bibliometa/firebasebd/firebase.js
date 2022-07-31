import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

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

export default firebaseConfig;