// src/screens/HabitacionDetails.js

import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HabitacionDetails = ({ route }) => {
  const { roomType } = route.params; // Recibe el tipo de habitación (deluxe o standard)
  const navigation = useNavigation();

  const getRoomDetails = (roomType) => {
    switch (roomType) {
      case 'deluxe':
        return {
          title: 'Habitación Deluxe',
          description: 'Una habitación de lujo con vistas espectaculares y una decoración moderna.',
          price: '$150 por noche',
          image: require('../../assets/deluxe.jpg'),
        };
      case 'standard':
        return {
          title: 'Habitación Standard',
          description: 'Una habitación cómoda y económica ideal para una estancia tranquila.',
          price: '$100 por noche',
          image: require('../../assets/estandar.jpg'),
        };
      default:
        return {};
    }
  };

  const roomDetails = getRoomDetails(roomType);

  return (
    <View style={styles.container}>
      <Image source={roomDetails.image} style={styles.roomImage} />
      <Text style={styles.title}>{roomDetails.title}</Text>
      <Text style={styles.description}>{roomDetails.description}</Text>
      <Text style={styles.price}>{roomDetails.price}</Text>
      <TouchableOpacity style={styles.reserveButton} onPress={() => navigation.navigate('Reserva')}>
        <Text style={styles.reserveButtonText}>Reservar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  roomImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  reserveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HabitacionDetails;
