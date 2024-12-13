import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Asegúrate de que la ruta sea correcta
import Icon from 'react-native-vector-icons/MaterialIcons'; // Para el ojo

const LoginScreen = ({ navigation }) => {
  // Estados para los campos de entrada
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secureText, setSecureText] = useState(true); // Estado para el ojo de la contraseña

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Validar los campos
    if (!email || !password) {
      Alert.alert("Error", "Por favor complete todos los campos.");
      return;
    }

    // Iniciar sesión en Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("¡Bienvenido!", "Inicio de sesión exitoso.");
        navigation.navigate("Home"); // Redirige a la pantalla de inicio después del login exitoso
      })
      .catch((error) => {
        let errorMessage = "Error desconocido";
        if (error.code === "auth/invalid-email") {
          errorMessage = "El correo electrónico no es válido.";
        } else if (error.code === "auth/user-not-found") {
          errorMessage = "No se encontró un usuario con ese correo.";
        } else if (error.code === "auth/wrong-password") {
          errorMessage = "La contraseña es incorrecta.";
        }
        Alert.alert("Error", errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      {/* Correo electrónico */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* Contraseña */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={secureText}
        />
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={styles.eyeIcon}
        >
          <Icon name={secureText ? "visibility" : "visibility-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Botón de inicio de sesión */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Enlace al registro */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 4,
    width: "100%", // Se asegura que todos los campos tengan el mismo ancho
  },
  passwordContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Asegura que el contenedor ocupe el mismo ancho
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -12 }], // Centra el icono verticalmente
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 4,
    marginBottom: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textAlign: "center",
    marginTop: 12,
  },
});

export default LoginScreen;

