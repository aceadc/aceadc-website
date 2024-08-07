// pages/api/assistance.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, country, phoneNumber, message } = req.body;

    try {
      // Reference to the Firestore collection
      const docRef = await addDoc(collection(db, "webForms"), {
        name: name,
        email: email,
        country: country,
        phone: phoneNumber,
        message: message,
        type: "contact",
        host: "aceadc.com",
        created: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
      res
        .status(200)
        .json({ message: "Form submitted successfully", id: docRef.id });
    } catch (error) {
      console.error("Error adding document: ", error);
      res.status(500).json({ error: "Error submitting form" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
