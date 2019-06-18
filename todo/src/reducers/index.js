import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from '../actions';

export const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case COMPLETE_TASK:
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};
