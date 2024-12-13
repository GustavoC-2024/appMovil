// src/screens/Reserva.js

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Reserva = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Realiza tu Reserva</Text>

      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Correo Electrónico" />
      <TextInput style={styles.input} placeholder="Fecha de Entrada" />
      <TextInput style={styles.input} placeholder="Fecha de Salida" />

      <TouchableOpacity style={styles.reserveButton}>
        <Text style={styles.reserveButtonText}>Confirmar Reserva</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  reserveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Reserva;
