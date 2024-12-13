// src/screens/Home.js

import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Sección de bienvenida */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bienvenido a Hotel GM</Text>
        <Text style={styles.subtitle}>¡Tu destino ideal para descansar!</Text>
      </View>

      {/* Sección de imagen destacada y mensaje de bienvenida */}
      <View style={styles.introSection}>
        <Image 
          source={require('../../assets/hotel2.jpg')} // Cambia por una imagen representativa de tu hotel
          style={styles.introImage}
        />
        <Text style={styles.introText}>Descubre la experiencia única que ofrecemos. Relájate, disfruta y vive momentos inolvidables en nuestro hotel.</Text>
      </View>

      {/* Slider de imágenes del hotel */}
      <View style={styles.sliderContainer}>
        <Image 
          source={require('../../assets/hotel.jpg')}// Cambia por la URL real de tu imagen
          style={styles.hotelImage} 
        />
      </View>

      {/* Sección de habitaciones */}
      <View style={styles.roomsSection}>
        <Text style={styles.sectionTitle}>Habitaciones</Text>
        <View style={styles.roomCardsContainer}>
          {/* Habitación Deluxe */}
          <View style={styles.roomCard}>
            <Image 
              source={require('../../assets/deluxe.jpg')} // Imagen de la habitación Deluxe
              style={styles.roomImage}
            />
            <Text style={styles.roomTitle}>Habitación Deluxe</Text>
            <Text style={styles.roomPrice}>$150 por noche</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HabitacionDetails')}>
              <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
          </View>

          {/* Habitación Standard */}
          <View style={styles.roomCard}>
            <Image 
              source={require('../../assets/estandar.jpg')} // Imagen de la habitación Standard
              style={styles.roomImage}
            />
            <Text style={styles.roomTitle}>Habitación Standard</Text>
            <Text style={styles.roomPrice}>$100 por noche</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('HabitacionDetails')}>
              <Text style={styles.buttonText}>Ver más</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Sección de servicios */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Servicios</Text>
        <View style={styles.servicesContainer}>
          {/* Servicio Restaurante */}
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Restaurante</Text>
            <Image 
              source={require('../../assets/restaurante.jpg')} // Imagen del restaurante
              style={styles.serviceImage}
            />
          </View>

          {/* Servicio Piscina */}
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Piscina</Text>
            <Image 
              source={require('../../assets/piscina.jpg')} // Imagen de la piscina
              style={styles.serviceImage}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Servicios')}>
          <Text style={styles.buttonText}>Ver más servicios</Text>
        </TouchableOpacity>
      </View>

      {/* Botón para hacer una reserva */}
      <View style={styles.reserveSection}>
        <TouchableOpacity
          style={styles.reserveButton}
          onPress={() => navigation.navigate('Reserva')}>
          <Text style={styles.reserveButtonText}>Realizar Reserva</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginVertical: 20,
    paddingTop: 10,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Roboto', // Fuente destacada
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    fontFamily: 'Roboto', // Fuente destacada
    textAlign: 'center',
  },
  introSection: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  introImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  introText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  sliderContainer: {
    marginVertical: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  hotelImage: {
    width: '100%',
    height: 220,
    borderRadius: 10,
  },
  roomsSection: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  roomCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
  },
  roomCard: {
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
    padding: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  roomImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  roomTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  roomPrice: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  servicesSection: {
    marginVertical: 20,
    alignItems: "center",
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
    gap: 10,
  },
  serviceCard: {
    width: '48%',
    borderRadius: 10,
    backgroundColor: '#f4f4f4',
    padding: 10,
    alignItems: 'center',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginTop: 10,
    resizeMode: 'cover',
  },
  reserveSection: {
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
  reserveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    width: '100%',
  },
  reserveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Home;




