import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase (asegúrate de que sea correcta)
const firebaseConfig = {
  apiKey: "AIzaSyCLmPMp6uFq3Kua27fuhqsL0vVazb33hE8",
  authDomain: "proyecto-dmovil.firebaseapp.com",
  projectId: "proyecto-dmovil",
  storageBucket: "proyecto-dmovil.firebasestorage.app",
  messagingSenderId: "529186238641",
  appId: "1:529186238641:web:87292c13aeff865a5ef290"
};

let app;

try {
  // Inicializar Firebase
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error al inicializar Firebase: ", error.message);
}

// Exportar servicios fuera del try-catch
export const auth = getAuth(app);
export const db = getFirestore(app);

