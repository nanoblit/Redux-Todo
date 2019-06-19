import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTask as addTaskAction } from '../actions';

const TodoForm = ({ addTask }) => {
  const inputRef = React.createRef();

  const handleAddTask = e => {
    e.preventDefault();
    addTask(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleAddTask}>
      <input ref={inputRef} />
      <button type="submit">Add Task</button>
    </form>
  );
};

TodoForm.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default connect(
  null,
  { addTask: addTaskAction },
)(TodoForm);
