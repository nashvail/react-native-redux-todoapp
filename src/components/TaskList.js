import React, { Component } from 'react';
import { ListView, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { List, Map } from 'immutable';
import immutable from 'immutable';

import { TaskItemContainer } from './TaskItem';
import { HeaderContainer } from './Header';

import {
  CHANGE_FILTER,
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETE
} from '../constants';

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E'
  }
});

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => !immutable.is(r1, r2)
});

const renderRow = (rowData) => (
  <TaskItemContainer 
    id={rowData.get('id')} 
    text={rowData.get('text')} 
    completed={rowData.get('complete')} />
);

const renderSeparator = (sectionId, rowId) => (
  <View key={rowId} style={styles.separator} />
);

const filteredTasks = (tasks, filter) => { 
  switch(filter) {
    case FILTER_ALL:
      return tasks.toArray();
    case FILTER_ACTIVE:
      return tasks.filter(task => !task.get('complete'))
        .toArray();
    case FILTER_COMPLETE:
      return tasks.filter(task => task.get('complete'))
        .toArray();
    default:
      return tasks.toArray();
  }
};

export const TaskList = ({
  tasks,
  filter
}) =>  (
    <ListView
      stickyHeaderIndices={[0]}
      renderSeparator={renderSeparator}
      dataSource={ds.cloneWithRows(filteredTasks(tasks, filter))}
      renderRow={renderRow}
      renderHeader={() => <HeaderContainer />}
      keyboardShouldPersistTaps="handled"
    />
  );

const mapStateToProps = (state) => {
  return {
    tasks: state.get('tasks'),
    filter: state.get('filter')
  }
};

export const TaskListContainer = connect(mapStateToProps)(TaskList)