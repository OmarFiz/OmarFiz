/*import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import React, { useEffect, useState } from "react";

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"*/
import firebase from 'firebase/compat/app';
import firebase from 'firebase/app';
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
//const db = getFirestore();
//const db = firebase.firestore();
const firestore = firebase.firestore();
/*firestore.settings({
  ssl: false,
  timestampsInSnapshots: true
})*/

export default firestore;

//export { db ,firestore };
//export default config

/*if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage, auth };*/
