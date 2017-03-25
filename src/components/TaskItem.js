import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 9,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 16
  },
  textCompleted: {
    fontSize: 16,
    color: 'grey',
    textDecorationLine: 'line-through'
  }
});

export default TaskItem = ({
  text,
  completed
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => console.log('wtf')}>
    <Text style={completed ? styles.textCompleted : styles.text }>
      {text}
    </Text>
  </TouchableOpacity>
);
