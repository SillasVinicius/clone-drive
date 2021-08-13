import firebase from "firebase";

const firebaseConfig = {
    //suas credenciais
    apiKey: "AIzaSyCkSB6c579uE1dpRw4WKhQothVxwk_Cu40",
    authDomain: "clone-drive-7354b.firebaseapp.com",
    projectId: "clone-drive-7354b",
    storageBucket: "clone-drive-7354b.appspot.com",
    messagingSenderId: "520153069372",
    appId: "1:520153069372:web:a6a87bc2b0e7229c889039"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const storage = firebaseApp.storage();

const db = firebase.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;