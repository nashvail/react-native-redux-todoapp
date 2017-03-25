import { List, Map } from 'immutable';
import {
  ADD_TASK
} from './constants';

const INITIAL_STATE = Map({
  tasks: List()
});

let counter = 0;

const addTask = (tasks, task) => {
  return tasks.push(Map({
    id: counter++,
    text: task,
    complete: task.complete || false
  }));
}

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
    default:
      return state;
  }
}