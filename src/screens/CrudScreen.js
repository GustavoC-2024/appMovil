// src/screens/CrudScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from "react-native";
import { db } from "../services/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function CrudScreen() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasksList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksList);
    } catch (error) {
      Alert.alert("Error", "No se pudieron obtener las tareas.");
    }
  };

  const addTask = async () => {
    if (!task.trim()) {
      Alert.alert("Error", "La tarea no puede estar vacía.");
      return;
    }
    try {
      await addDoc(collection(db, "tasks"), { title: task });
      setTask("");
      fetchTasks();
    } catch (error) {
      Alert.alert("Error", "No se pudo agregar la tarea.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await deleteDoc(doc(db, "tasks", id));
      fetchTasks();
    } catch (error) {
      Alert.alert("Error", "No se pudo eliminar la tarea.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD de Tareas</Text>
      <TextInput
        placeholder="Nueva tarea"
        value={task}
        onChangeText={setTask}
        style={styles.input}
      />
      <Button title="Agregar Tarea" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text>{item.title}</Text>
            <Button title="Eliminar" onPress={() => deleteTask(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, marginBottom: 10 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 4 },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 4,
  },
});
