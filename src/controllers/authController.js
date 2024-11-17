// src/controllers/authController.js
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "../models/firebaseConfig";
const db = getFirestore();

export const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      let errorMessage = "Ocurrió un error.";
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        errorMessage = "Correo electrónico o contraseña incorrectos.";
      }
      return { success: false, message: errorMessage };
    }
  };

export const registerUser = async (userData) => {
  const { email, password, firstName, lastName } = userData;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guarda los datos adicionales en Firestore
    await setDoc(doc(db, "users", user.uid), {
      firstName,
      lastName,
      email,
      createdAt: new Date(),
    });
    return { success: true, user:user }; // R
  } catch (error) {
    return { success: false, message: error.message };
  }
};


export const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error("Error al cerrar sesión:", error.message);
    return { success: false, message: error.message };
  }
};

