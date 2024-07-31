import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "luzto-588ed.firebaseapp.com",
    projectId: "luzto-588ed",
    storageBucket: "luzto-588ed.appspot.com",
    messagingSenderId: "321567600681",
    appId: "1:321567600681:web:937bd4eff1b3a1f1332c38",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

const handleSignupForm = async (e, email, password) => {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log("User created:", userCredential.user);
        showToast(
            `Success! You have been signed in. Welcome, ${userCredential.user.email}!`,
            "success"
        );
    } catch (error) {
        console.error("Error signing up:", error.message);
        showToast(`Action failed: ${error.message}`, "error");
    }
};

const handleLoginForm = async (e, email, password) => {
    e.preventDefault();
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        console.log("User signed in:", userCredential.user);
        showToast(
            `Success! Welcome back, ${userCredential.user.email}!`,
            "success"
        );
    } catch (error) {
        console.error("Error signing in:", error.message);
        showToast(`Action failed: ${error.message}`, "error");
    }
};

const signupWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider).catch((error) => {
        console.error("Error signing in with Google:", error.message);
        showToast(`Google sign-in failed: ${error.message}`, "error");
    });
};

const logout = () => {
    signOut(auth)
        .then(() => console.log("User signed out"))
        .catch((error) => console.error("Error signing out:", error.message));
};

export { handleSignupForm, handleLoginForm, signupWithGoogle, auth, logout };
