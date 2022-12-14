import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6dQtQt3veFYfs0ZuMtBkoOOcbUaogyNU",
    authDomain: "sorteolink2022.firebaseapp.com",
    projectId: "sorteolink2022",
    storageBucket: "sorteolink2022.appspot.com",
    messagingSenderId: "924479572788",
    appId: "1:924479572788:web:1d5805170b152cfe59b361"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });
  
  export const  auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup( auth, provider);
  
  export const db = getFirestore();
  export const addCollectionsAndDocuments = async (collectionKey, objectToAdd) => {
      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);
  
      objectToAdd.forEach((object) => {
          const docRef = doc(collectionRef, object.title.toLowerCase());
          batch.set(docRef, object);
      });
  
      await batch.commit();
      console.log('done');
  };
  export const getCategoriesAndDocuments = async () => {
      const collectionRef = collection(db , 'categories');
      const q = query(collectionRef);
  
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
      
      // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
      //     const {title, items } = docSnapshot.data();
      //     acc[title.toLowerCase()] = items;
      //     return acc;
      // },{});
  
      // return categoryMap;
  };
   
  export const createUserDocumentFromAuth = async (
      userAuth,
      aditionalInformation = {}
      ) => {
      if(!userAuth) return;
      
      const userDocRef = doc(db, 'users', userAuth.uid ); 
  
      const userSnapshot = await getDoc( userDocRef );
      if( !userSnapshot.exists()){
          const {displayName, email} = userAuth;
          const createdAt = new Date();
  
          try{
              await setDoc(userDocRef,{
                  displayName,
                  email,
                  createdAt,
                  ...aditionalInformation 
              });
          } catch(error){
              console.log('error creating the user', error.message);
          }
      } 
  
      return userSnapshot;
  }
  
  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if( !email || !password) return;
  
      return await createUserWithEmailAndPassword(auth, email, password);
  }
  
  export const signInAuthWithEmailAndPassword = async (email, password) => {
    console.log("SignIn " + email + " " + password );
    if( !email || !password) return;
  
      return await signInWithEmailAndPassword(auth, email, password);
  }
  
  export const signOutUser = async () => await signOut(auth);
  
  export const onAuthStateChangedListener = (callback) => onAuthStateChanged( auth, callback);
  
  export const getCurrentUSer = () => {
      return new Promise((resolve, reject) =>{
          const unsubscribe = onAuthStateChanged(
              auth,
              (userAuth) => {
                  unsubscribe();
                  resolve(userAuth);
              },
              reject
          )
      });
  }