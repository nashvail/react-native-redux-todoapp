import {
  ADD_TASK,
  TOGGLE_TASK,
  CHANGE_FILTER
} from './constants';

export const addTask = (task) => ({
  type: ADD_TASK,
  task
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  id
});

export const changeFilter = (filter) => ({
  type: CHANGE_FILTER,
  filter
})
