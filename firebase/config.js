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

const poin = firebase.firestore().collection('points');
poin
  .get()
  .then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("All poin collection", data); 
    // [ { id: 'glMeZvPpTN1Ah31sKcnj', title: 'The Great Gatsby' } ]
  });


const poinpoin = firebase
  .firestore()
  .collection("points")
  .doc("mTrveExUlJpsEInPt1KX");

poinpoin.get().then((doc) => {
 // if (!doc.exists) return;
  console.log("POINT POINT R4eHqq0Zi1Hb6GrP8JuV:", doc.data());
  // Document data: { title: 'The Great Gatsby' }
});


/*

const mater = firebase
  .firestore()
  .collection("materials")
  .doc("R4eHqq0Zi1Hb6GrP8JuV");

mater.get().then((doc) => {
 // if (!doc.exists) return;
  console.log("Document data R4eHqq0Zi1Hb6GrP8JuV:", doc.data());
  // Document data: { title: 'The Great Gatsby' }
});

const materb = firebase
  .firestore()
  .collection("materials")
  .doc("mTrveExUlJpsEInPt1KX");

materb.get().then((doc) => {
 // if (!doc.exists) return;
  console.log("Document data mTrveExUlJpsEInPt1KX:", doc.data());
  // Document data: { title: 'The Great Gatsby' }
});
*/
