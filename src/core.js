import { List, Map, fromJS } from 'immutable';

export const INITIAL_STATE = Map();

let counter = 0;

export function addTask(tasks, task) {
  if(!tasks)
    tasks = List();
  return tasks.push(Map({
    id: counter++,
    text: task.text,
    complete: task.complete
  }));
}

export function toggleTask(tasks, id) {
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