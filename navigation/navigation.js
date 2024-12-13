// src/navigation/navigation.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../src/screens/LoginScreen";
import SignUpScreen from "../src/screens/SignUpScreen";
import HomeScreen from "../src/screens/HomeScreen";
import CrudScreen from "../src/screens/CrudScreen";
import Reserva from "../src/screens/Reserva";
import HabitacionDetails from "../src/screens/HabitacionDetails";

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CRUD" component={CrudScreen} />
        <Stack.Screen name="HabitacionDetails" component={HabitacionDetails} />
        <Stack.Screen name="Reserva" component={Reserva} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
