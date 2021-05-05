import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB7OUda7uoEHBPNMBOchmDXy9Uv-Nv4obo",
    authDomain: "disneyplus-clone-d1d26.firebaseapp.com",
    projectId: "disneyplus-clone-d1d26",
    storageBucket: "disneyplus-clone-d1d26.appspot.com",
    messagingSenderId: "527835408501",
    appId: "1:527835408501:web:56cf0a2f41a6c99302f03c"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebaseApp.auth();
const provider=new firebaseApp.auth.GoogleAuthProvider();
const storage=firebaseApp.storage();

export { auth, provider, storage };
export default db;
