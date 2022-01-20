import firebase from "firebase/compat/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import React, { useEffect, useState } from "react";


const config = {
  apiKey: 'AIzaSyC_JwpXS4uj9sRRDrbFAtalE1QulNTmKnw',
  authDomain: 'visualizer-new-devs-test.firebaseapp.com',
  projectId: 'visualizer-new-devs-test',
  storageBucket: 'visualizer-new-devs-test.appspot.com',
  messagingSenderId: '702664185241',
  appId: '1:702664185241:web:580752c50d570d0c89ef08'
}

//export default config

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage, auth };
