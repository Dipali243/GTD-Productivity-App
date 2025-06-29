import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTasks } from '../context/TaskContext';

export default function ProcessScreen() {
  const { inbox, moveToNextAction, moveToProject } = useTasks();
  const [context, setContext] = useState('@home');

  const renderItem = ({ item }) => (
    <View style={styles.taskCard}>
      <Text style={styles.taskText}>{item.text}</Text>
      <Text>Select Context:</Text>
      <Picker
        selectedValue={context}
        style={styles.picker}
        onValueChange={(value) => setContext(value)}
      >
        <Picker.Item label="@home" value="@home" />
        <Picker.Item label="@work" value="@work" />
        <Picker.Item label="@errands" value="@errands" />
      </Picker>
      <View style={styles.buttonGroup}>
        <Button title="To Next Action" onPress={() => moveToNextAction(item, context)} />
        <Button title="To Project" onPress={() => moveToProject(item)} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Process Inbox Items</Text>
        {inbox.length === 0 ? (
          <Text style={styles.emptyText}>🎉 Inbox is empty. Great job!</Text>
        ) : (
          <FlatList
            data={inbox}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777',
    marginTop: 40,
  },
  taskCard: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    marginVertical: 8,
    backgroundColor: '#e0e0e0',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    gap: 10,
  },
});
