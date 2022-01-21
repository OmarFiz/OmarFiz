/*import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"*/
import  firebase from 'firebase/compat/app';
import 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/firestore';


//const firebaseApp = initializeApp({
var firebaseConfig = {
//const config = {
  apiKey: 'AIzaSyC_JwpXS4uj9sRRDrbFAtalE1QulNTmKnw',
  authDomain: 'visualizer-new-devs-test.firebaseapp.com',
  projectId: 'visualizer-new-devs-test',
  storageBucket: 'visualizer-new-devs-test.appspot.com',
  messagingSenderId: '702664185241',
  appId: '1:702664185241:web:580752c50d570d0c89ef08'
//}
};
firebase.initializeApp(firebaseConfig);


const booksRef = firebase.firestore().collection('materials');
booksRef
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("All data in 'books' collection", data); 
    // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
  });
const bookRef2 = firebase.firestore().collection("materials").doc("R4eHqq0Zi1Hb6GrP8JuV");

bookRef2.get().then((doc) => {
 // if (!doc.exists) return;
  console.log("Document data R4eHqq0Zi1Hb6GrP8JuV:", doc.data());
  // Document data: { title: 'The Great Gatsby' }
});


const bookRef3 = firebase.firestore().collection("materials").doc("mTrveExUlJpsEInPt1KX");
bookRef3.get().then((doc) => {
//  if (!doc.exists) return;
  console.log("Document data mTrveExUlJpsEInPt1KX:", doc.data());
  // Document data: { title: 'The Great Gatsby' }
});


/*
const booksRef = firebase.firestore().collection('pointId');
booksRef
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("All data in 'books' collection", data); 
    // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
  });

*/
//const db = getFirestore();
//const db = firebase.firestore();
//const firestore = firebase.firestore();
/*firestore.settings({
  ssl: false,
  timestampsInSnapshots: true
})*/

//export default firestore;

//export { db ,firestore };
//export default config

/*if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage, auth };*/
