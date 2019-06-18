import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { removeTask as removeTaskAction } from '../actions';

const Todo = ({ task, removeTask }) => (
  <div>
    <p
      style={task.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
      onClick={() => removeTask(task.id)}
    >
      {task.task}
    </p>
  </div>
);

Todo.propTypes = {
  task: PropTypes.shape({
    task: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default connect(
  null,
  { removeTask: removeTaskAction },
)(Todo);
