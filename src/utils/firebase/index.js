import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGUzBKUAvKu8Pn4rXlPMJUlOG5JR8yzQM",
  authDomain: "mrkg-merchandise.firebaseapp.com",
  projectId: "mrkg-merchandise",
  storageBucket: "mrkg-merchandise.appspot.com",
  messagingSenderId: "126782402145",
  appId: "1:126782402145:web:a94c458e3b7f09d5a4c420"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth(firebaseApp)

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore()

export const createDocFromAuth = async (userAuth) => {
    const docRef = doc(db, 'users', userAuth.uid)
    console.log(docRef)

    const record = await getDoc(docRef);

    if (!record.exists()) {
       try{
        await setDoc(docRef, {
            display: userAuth.displayName,
            email: userAuth.email,
            createdAt: new Date()
        })
       }
       catch (error) {
        console.log("error occurred in doc creation", error.message)
       } 
    }

    return record;
}