import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect,
    onAuthStateChanged,
} from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "luzto-cc81f.firebaseapp.com",
    projectId: "luzto-cc81f",
    storageBucket: "luzto-cc81f.appspot.com",
    messagingSenderId: "814455920745",
    appId: "1:814455920745:web:e8385b20b81c12c3e76af8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const handleSignupForm = async (e, email, password) => {
    e.preventDefault(); // Prevent the default form submission

    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        // You can access user information from userCredential.user
                
        console.log("User created:", userCredential.user);
    } catch (error) {
        console.error("Error signing up:", error.message);
        // Optionally, handle the error in the UI, e.g., show an error message
    }
};

const handleLoginForm = async (e, email, password) => {
    e.preventDefault(); // Prevent the default form submission

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        // You can access user information from userCredential.user
        
        console.log("User created:", userCredential.user);
        toast.success(
                `Success! You have been signed in. Welcome back, ${userCredential.user.email}!`,
            {
                position: "top-right",
                autoClose: 5000, // 5 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                icon: "🎉", // Custom icon
                style: {
                    backgroundColor: "#48bb78", // Custom background color (green)
                    color: "#fff", // Custom text color
                },
                className: "custom-toast-success", // Custom class for further styling
                bodyClassName: "custom-toast-success-body", // Custom class for body styling
            }
        );
    } catch (error) {
        console.error("Error Signing in:", error.message);
        toast.error(`Action failed: ${error.message}`, {
            position: "top-right",
            autoClose: 4500, // 8 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: "⚠️", // Custom icon
            style: {
                backgroundColor: "#f56565", // Custom background color
                color: "#fff", // Custom text color
            },
            className: "custom-toast", // Custom class for further styling
            bodyClassName: "custom-toast-body", // Custom class for body styling
        });
    }
};

export { handleSignupForm, handleLoginForm };
