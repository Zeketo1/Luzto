import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import {
    addDoc,
    collection,
    getDocs,
    getFirestore,
    onSnapshot,
} from "firebase/firestore";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth";
import { fashionImgs } from "./components/shop/fashionProducts";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "luzto-588ed.firebaseapp.com",
    projectId: "luzto-588ed",
    storageBucket: "luzto-588ed.appspot.com",
    messagingSenderId: "321567600681",
    appId: "1:321567600681:web:937bd4eff1b3a1f1332c38",
};

// init firebase app
const app = initializeApp(firebaseConfig);

// init services
const auth = getAuth(app);
const db = getFirestore();

// init collection
const colUser = collection(db, "Users");
const colProducts = collection(db, "Products");
const colComments = collection(db, "Comments");

// get realtime collection data
let usernames = [];
let fireImgs;
onSnapshot(colUser, (snapshot) => {
    snapshot.docs.forEach((doc) => {
        usernames.push({ ...doc.data(), id: doc.id });
    });
});

// onSnapshot(colProducts, (snapshot) => {
//     snapshot.docs.forEach((doc) => (fireImgs = doc.data()));
//     console.log(fireImgs);
// });

let emailAuthName;

// Firestore
const addUsername = async (firstname, lastname, email) => {
    addDoc(colUser, {
        firstname,
        lastname,
        email,
    }).then(() => {
        console.log("Username added");
    });

    emailAuthName = `${firstname} ${lastname}`;
};

// Toastify
export const showToast = (message, type) => {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        icon: type === "success" ? "🎉" : "⚠️",
        style: {
            backgroundColor: type === "success" ? "#48bb78" : "#f56565",
            color: "#fff",
        },
        className: `custom-toast-${type}`,
        bodyClassName: `custom-toast-${type}-body`,
    });
};

// Authentication
// SignUp
const handleSignupForm = async (e, email, password) => {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        showToast(
            `Success! You have been signed in. Welcome, ${emailAuthName}!`,
            "success"
        );
    } catch (error) {
        showToast(`Action failed: ${error.message}`, "error");
    }
};

// Login
let loginUserEmail;
const handleLoginForm = async (e, email, password) => {
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        const loginUsername = usernames.find(
            (username) => username.email === userCredential.user.email
        );

        loginUserEmail = userCredential.user.email;

        // console.log("User signed in:", userCredential.user);
        // console.log("User signed in:", userCredential.user.uid);
        showToast(
            `Success! Welcome back, ${loginUsername.firstname}!`,
            "success"
        );
    } catch (error) {
        showToast(`Action failed: ${error.message}`, "error");
    }
};

// SignUp with Google
const signupWithGoogle = () => {
    let username;
    let userEmail;

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            username = user.displayName;
            userEmail = user.email;
            addUsername(username, null, userEmail)
        }
    });

    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
        .then(() => {
            showToast(`Success! Welcome back ${username}!`, "success");
        })
        .catch((error) => {
            showToast(`Google sign-in failed: ${error.message}`, "error");
        });
};

const logout = () => {
    signOut(auth)
        .then(() => showToast(`User signed out!`, "success"))
        .catch((error) =>
            showToast(`Action failed: ${error.message}`, "error")
        );
};

export {
    handleSignupForm,
    handleLoginForm,
    signupWithGoogle,
    auth,
    colComments,
    logout,
    fireImgs,
    addUsername,
    usernames,
};
