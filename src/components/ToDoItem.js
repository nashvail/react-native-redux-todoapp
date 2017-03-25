import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';

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

const ToDoItem = ({
  text,
  completed
}) => (
  <TouchableHighlight 
    style={styles.container}
    activeOpacity={0.5}
    onPress={() => console.log('wtf')}>
    <Text style={completed ? styles.textCompleted : styles.text }>
      {text}
    </Text>
  </TouchableHighlight>
);

export default ToDoItem;