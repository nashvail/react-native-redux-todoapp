import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 5,
    borderRadius: 2
  },
  button: {
    borderColor: '#3275FB',
    backgroundColor: '#3275FB',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 2
  },
  text: {
    color: '#FFF'
  }
});

const Header = () => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder="Task.."
    />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
  </View>
);

export default Header;