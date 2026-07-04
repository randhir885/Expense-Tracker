import { auth } from "./firebase.js";

import {
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    console.log(document.getElementById("fullName"));
    console.log(document.getElementById("email"));
    console.log(document.getElementById("password"));
    console.log(document.getElementById("confirmPassword"));
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

        alert("Passwords do not match");
        return;

    }

    try {

        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        const user = userCredential.user;

        alert("Account created successfully!");

        console.log(user);

        // We will save the user's name in Supabase later.

    }

    catch (error) {

        alert(error.message);

    }

});
