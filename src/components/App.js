import React, { Component } from 'react';
import { Text, View, StyleSheet, SegmentedControlIOS, ListView } from 'react-native';
import NavigationBar from 'react-native-navbar';

import { TaskListContainer } from './TaskList';
import { FilterControlContainer } from './FilterControl';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const titleConfig = {
  title: 'ToDo List',
};

const navigationSegments = ['All', 'Active', 'Complete'];

export default class App extends Component {
  render() {
    return  <View style={styles.container}>
      <NavigationBar title={titleConfig} />
      <FilterControlContainer />
      <TaskListContainer />
    </View>;
  }
}


