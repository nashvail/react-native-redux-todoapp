import { List, Map } from 'immutable';

import { INITIAL_STATE,
  addTask,
  toggleTask } from './core';

export default function reducer(state = INITIAL_STATE, action) {
  if(!action)
    return state;

  switch(action.type) {
    case 'ADD_TASK':
      return state.update('tasks', tasks => addTask(tasks, action.task));
    case 'TOGGLE_TASK':
      return state.update('tasks', tasks => toggleTask(tasks, action.id));
    default: 
      return state;
  }
}