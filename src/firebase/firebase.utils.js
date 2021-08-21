import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8QWdn1KjMkyeyKY_8T0Dr1Dg1C0TCUCk",
    authDomain: "crwn-db-6e813.firebaseapp.com",
    projectId: "crwn-db-6e813",
    storageBucket: "crwn-db-6e813.appspot.com",
    messagingSenderId: "228794253887",
    appId: "1:228794253887:web:49092853575d9640e66e8a",
    measurementId: "G-KJX9ZS8TVR"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
