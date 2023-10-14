import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB4HVeGJrndZbBmUDOT_MzmfcVDeRx6UPU",
    authDomain: "clone-5bf64.firebaseapp.com",
    projectId: "clone-5bf64",
    storageBucket: "clone-5bf64.appspot.com",
    messagingSenderId: "561986382985",
    appId: "1:561986382985:web:4433f7b5c536c751e3ea58",
    measurementId: "G-3JXHB1DFXY"
}

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };