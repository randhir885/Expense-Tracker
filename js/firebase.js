// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Replace with your own Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcbhqgVcmO5e2EgmCxiN9iYs-LOoU7Qv4",
    authDomain: "expense-tracker-c867d.firebaseapp.com",
    projectId: "expense-tracker-c867d",
    storageBucket: "expense-tracker-c867d.firebasestorage.app",
    messagingSenderId: "657829621653",
    appId: "1:657829621653:web:4d7062c853607d3766509c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export auth so other files can use it
export { auth };
