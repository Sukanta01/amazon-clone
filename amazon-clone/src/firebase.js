import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyDEM9Bz_tvlEIuZBWhuTQqFEibk02zlcXM",
    authDomain: "clone-3b50f.firebaseapp.com",
    databaseURL: "https://clone-3b50f.firebaseio.com",
    projectId: "clone-3b50f",
    storageBucket: "clone-3b50f.appspot.com",
    messagingSenderId: "72333491089",
    appId: "1:72333491089:web:dfc9469b6d5aedaf7af830",
    measurementId: "G-4XRJGG4XVS"

});

const auth =firebase.auth();


export { auth };