import uuid from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const addTask = task => ({
  type: ADD_TASK,
  payload: { task, completed: false, id: uuid() },
});

export const completeTask = id => ({ type: COMPLETE_TASK, payload: id });
export const removeTask = id => ({ type: REMOVE_TASK, payload: id });
