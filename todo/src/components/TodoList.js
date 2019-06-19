import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ tasks }) => (
  <div>
    {tasks.map(task => (
      <Todo key={task.id} task={task} />
    ))}
  </div>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
};

TodoList.defaultProps = {
  tasks: [],
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TodoList);
