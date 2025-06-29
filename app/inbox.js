import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { useTasks } from '../context/TaskContext';

export default function InboxScreen() {
  const { inbox, addToInbox } = useTasks();
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim()) {
      addToInbox(text);
      setText('');
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Inbox</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter a task or idea"
          value={text}
          onChangeText={setText}
        />
        <Button title="Add to Inbox" onPress={handleAdd} />

        <FlatList
          data={inbox}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.taskItem}>• {item.text}</Text>
          )}
        />
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  taskItem: {
    fontSize: 16,
    marginTop: 8,
  },
});
