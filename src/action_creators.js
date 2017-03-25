import {
  ADD_TASK,
  TOGGLE_TASK
} from './constants';

export const addTask = (task) => ({
  type: ADD_TASK,
  task
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id
});
