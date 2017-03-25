import React, { Component } from 'react';
import { Text, View, StyleSheet, SegmentedControlIOS, ListView } from 'react-native';
import NavigationBar from 'react-native-navbar';
import ToDoItem from './components/ToDoItem';
import Header from './components/Header';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});

const titleConfig = {
  title: 'ToDo List',
};

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const tasks =[
  {
    text: 'Eat lunch',
    completed: false
  },
  {
    text: 'Lay down on the beach',
    completed: true
  },
  {
    text: 'Have cold beer',
    completed: false
  }
];

const navigationSegments = ['All', 'Active', 'Complete'];

export default class ToDoApp extends Component {
  render() {
    return  <View style={{
      flex: 1
    }}>
      <NavigationBar title={titleConfig} />

      <SegmentedControlIOS
        values={navigationSegments}
        selectedIndex={0}
      />

      <ListView
        stickyHeaderIndices={[0]}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>}
        dataSource={ds.cloneWithRows(tasks)}
        renderRow={(rowData) => 
          <ToDoItem text={rowData.text} completed={rowData.completed} />
        }
        renderHeader={() => <Header />}
      />

    </View>;
  }
}