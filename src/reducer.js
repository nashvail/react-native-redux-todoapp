import { List, Map, fromJS } from 'immutable';
import {
  ADD_TASK,
  TOGGLE_TASK,
  CHANGE_FILTER,
  FILTER_ACTIVE,
  FILTER_ALL,
  FILTER_COMPLETE
} from './constants';

const INITIAL_STATE = Map({
  tasks: List(),
  filter: FILTER_ALL
});

let counter = 0;

const addTask = (tasks, task) => {
  return tasks.push(Map({
    id: counter++,
    text: task,
    complete: task.complete || false
  }));
}

// TODO: Improve
const toggleTask = (tasks, id) => {
  let updateIndex = 0;
  let updateTask = Map();
  tasks.forEach( (task, index) => {
    if(task.get('id') === id) {
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

export default function(state = INITIAL_STATE, action) {
  if(!action)
    return state;

  switch(action.type) {
    case ADD_TASK:
      return state.updateIn(['tasks'], tasks => addTask(tasks, action.task));
    case TOGGLE_TASK:
      return state.updateIn(['tasks'], tasks => toggleTask(tasks, action.id));
    case CHANGE_FILTER:
      return state.set('filter', action.filter);
    default:
      return state;
  }
}