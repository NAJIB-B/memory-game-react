import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut, 
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAC4jWqLYizKhOEZAokY73AILXTZkIdjT4",
  authDomain: "memory-game-8a6d3.firebaseapp.com",
  projectId: "memory-game-8a6d3",
  storageBucket: "memory-game-8a6d3.appspot.com",
  messagingSenderId: "1006584626475",
  appId: "1:1006584626475:web:5a376f0b582f5de0f5996e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const db = getFirestore();

export const createUserDocument = async (userAuth, additionalInformation) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);



  const userSnapshot = await getDoc(userDocRef);

 
  //if snapshot exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log(error);
    }
  }
  //if snapshot exist
  return userDocRef;
};
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
export const signOutUser =async()=>await signOut(auth)

export const updateName = async () => {
  const userDocRef = doc(db, "users", "uIsy5e6jzNW1CmzpODey8X9TiTc2");
  const data = {
    levels: {
      1: { star: 2 },
    },
  };
  try {
    await setDoc(userDocRef, data, { merge: true });
  } catch (error) {
    console.log(error);
  }
};
export const getData = async () => {
  const userDocRef = doc(db, "users", "uIsy5e6jzNW1CmzpODey8X9TiTc2");

  try {
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
};
