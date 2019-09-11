import firebase from 'firebase';
  const firebaseConfig = {
    apiKey: "AIzaSyCwb-dbXK3FAsYP5LRIkq6f0xFbYH5xChg",
    authDomain: "hog-in.firebaseapp.com",
    databaseURL: "https://hog-in.firebaseio.com",
    projectId: "hog-in",
    storageBucket: "",
    messagingSenderId: "347456532277",
    appId: "1:347456532277:web:964cb3e984755f4f"
  };
  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;

