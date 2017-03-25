import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { toggleTask } from '../action_creators';

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

export const TaskItem = ({
  id,
  text,
  completed,
  dispatch
}) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => {
      dispatch(toggleTask(id));
    }}>
    <Text style={completed ? styles.textCompleted : styles.text }>
      {text}
    </Text>
  </TouchableOpacity>
);

export const TaskItemContainer = connect()(TaskItem);