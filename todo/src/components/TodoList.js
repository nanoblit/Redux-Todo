import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const TodoList = ({ tasks }) => (
  <div>
    {tasks.map(({ task, id }) => (
      <div key={id}>{task}</div>
    ))}
  </div>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({ task: PropTypes.string.isRequired, id: PropTypes.string.isRequired }),
  ),
};

TodoList.defaultProps = {
  tasks: [],
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(TodoList);
