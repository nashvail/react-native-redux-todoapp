import { AsyncStorage } from 'react-native';
import { List, Map, fromJS } from 'immutable';
import {
  ADD_TASK,
  TOGGLE_TASK,
  CHANGE_FILTER,
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETE,
  STORAGE_TASKS,
  LOAD_TASKS_FROM_STORAGE
} from './constants';

const INITIAL_STATE = Map({
  tasks: List(),
  filter: FILTER_ALL
});

let counter = 0;

const addTask = (tasks, task) => {
  return tasks.push(Map({
    id: tasks.size + 1,
    text: task,
    complete: task.complete || false
  }));
}

// TODO: Improve
const toggleTask = (tasks, id) => {
  let updateIndex = 0;
  let updateTask = Map();
  tasks.forEach((task, index) => {
    if (task.get('id') === id) {
      updateIndex = index;
      updateTask = task;
      return false;
    }
  });

  return tasks.set(updateIndex, fromJS({
    id: updateTask.get('id'),
    text: updateTask.get('text'),
    complete: !updateTask.get('complete')
  }));
}

const saveTasks = async (tasks) => {
  try {
    await AsyncStorage.setItem(STORAGE_TASKS, JSON.stringify(tasks.toJS()));
  } catch (error) {
    // Error saving data
    console.log('Error saving data ', error);
  }
}

export default function (state = INITIAL_STATE, action) {
  if (!action)
    return state;

  switch (action.type) {
    case ADD_TASK:
      const ns = state.updateIn(['tasks'], tasks => addTask(tasks, action.task));
      saveTasks(ns.get('tasks'));
      return ns;
    case TOGGLE_TASK:
      const ns2 = state.updateIn(['tasks'], tasks => toggleTask(tasks, action.id));
      saveTasks(ns2.get('tasks'));
      return ns2;
    case CHANGE_FILTER:
      return state.set('filter', action.filter);
    case LOAD_TASKS_FROM_STORAGE:
      return state.set('tasks', fromJS(JSON.parse(action.data)));
    default:
      return state;
  }
}