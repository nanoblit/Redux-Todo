import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { completeTask as completeTaskAction, removeTask as removeTaskAction } from '../actions';

const Todo = ({ task, completeTask, removeTask }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <p
      style={task.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
      onClick={() => completeTask(task.id)}
    >
      {task.task}
    </p>
    <button onClick={() => removeTask(task.id)} type="button" style={{ display: 'inline' }}>
      X
    </button>
  </div>
);

Todo.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  completeTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default connect(
  null,
  { completeTask: completeTaskAction, removeTask: removeTaskAction },
)(Todo);
