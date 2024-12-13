import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase"; // Asegúrate de que la ruta sea correcta
import Icon from 'react-native-vector-icons/MaterialIcons'; // Para el ojo

const SignUpScreen = ({ navigation }) => {
  // Estados para los campos de entrada
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true); // Estado para el ojo de la contraseña
  const [secureConfirmText, setSecureConfirmText] = useState(true); // Estado para el ojo de confirmar contraseña

  // Función para manejar el registro
  const handleSignUp = () => {
    // Validar los campos
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Por favor complete todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    // Crear usuario en Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert("¡Éxito!", "Usuario registrado exitosamente.");
        navigation.navigate("Login"); // Redirige al login después del registro exitoso
      })
      .catch((error) => {
        let errorMessage = "Error desconocido";
        if (error.code === "auth/invalid-email") {
          errorMessage = "El correo electrónico no es válido.";
        } else if (error.code === "auth/email-already-in-use") {
          errorMessage = "Este correo ya está registrado.";
        } else if (error.code === "auth/weak-password") {
          errorMessage = "La contraseña es demasiado débil.";
        }
        Alert.alert("Error", errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      {/* Nombre completo */}
      <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={name}
        onChangeText={setName}
      />

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

      {/* Confirmar contraseña */}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={secureConfirmText}
        />
        <TouchableOpacity
          onPress={() => setSecureConfirmText(!secureConfirmText)}
          style={styles.eyeIcon}
        >
          <Icon name={secureConfirmText ? "visibility" : "visibility-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Requisitos de la contraseña */}
      <View style={styles.passwordRules}>
        <Text style={styles.rulesText}>• Al menos 6 caracteres</Text>
        <Text style={styles.rulesText}>• Al menos 1 letra mayúscula</Text>
        <Text style={styles.rulesText}>• Al menos 1 número</Text>
        <Text style={styles.rulesText}>• Al menos 1 carácter especial</Text>
      </View>

      {/* Botón de registro */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      {/* Enlace al Login */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>¿Ya tienes una cuenta? Inicia sesión</Text>
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
  passwordRules: {
    marginTop: 20,
    padding: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "#f9f9f9",
    marginBottom: 20,  // Separa los requisitos del botón
  },
  rulesText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 4,
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

export default SignUpScreen;






