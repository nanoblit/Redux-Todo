import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { setTasks as setTasksAction } from './actions';

const App = ({ tasks, setTasks }) => {
  useEffect(() => {
    const tasksFromStorage = localStorage.getItem('tasks');
    console.log(tasksFromStorage);
    if (tasksFromStorage) {
      setTasks(JSON.parse(tasksFromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <TodoForm />
      <TodoList />
    </div>
  );
};

App.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      task: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
  ),
  setTasks: PropTypes.func.isRequired,
};

App.defaultProps = {
  tasks: [],
};

const mapStateToProps = state => ({
  tasks: state.tasks,
});

export default connect(
  mapStateToProps,
  { setTasks: setTasksAction },
)(App);
