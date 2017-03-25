import React, { Component } from 'react';
import { Text, View, StyleSheet, SegmentedControlIOS, ListView } from 'react-native';
import NavigationBar from 'react-native-navbar';

import { TaskListContainer } from './TaskList';

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

      <SegmentedControlIOS
        values={navigationSegments}
        selectedIndex={0}
      />

      <TaskListContainer />

    </View>;
  }
}


