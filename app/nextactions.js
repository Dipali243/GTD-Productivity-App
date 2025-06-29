import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Platform,
  StatusBar,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useTasks } from '../context/TaskContext';

export default function NextActionsScreen() {
  const { nextActions, markAsComplete } = useTasks();
  const [selectedContext, setSelectedContext] = useState('all');

  const filteredActions =
    selectedContext === 'all'
      ? nextActions
      : nextActions.filter((item) => item.context === selectedContext);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Next Actions</Text>

        <Picker
          selectedValue={selectedContext}
          onValueChange={(value) => setSelectedContext(value)}
          style={styles.picker}
        >
          <Picker.Item label="All Contexts" value="all" />
          <Picker.Item label="@home" value="@home" />
          <Picker.Item label="@work" value="@work" />
          <Picker.Item label="@errands" value="@errands" />
        </Picker>

        {filteredActions.length === 0 ? (
          <Text style={styles.emptyText}>No next actions found.</Text>
        ) : (
          <FlatList
            data={filteredActions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.taskItem}>
                <Text style={styles.taskText}>
                  {item.text} ({item.context})
                </Text>
                <Button
                  title="Complete"
                  onPress={() => markAsComplete(item.id)}
                  color="#28a745"
                />
              </View>
            )}
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
  picker: {
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    color: '#777',
  },
  taskItem: {
    backgroundColor: '#e9e9ff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
  },
  taskText: {
    fontSize: 16,
    marginBottom: 8,
  },
});
