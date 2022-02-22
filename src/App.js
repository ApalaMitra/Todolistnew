import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import TodoList from './components/todo/TodoList';
import TodoContainer from './container/todoContainer';

function App() {
  return (
    <div className='todo-app'>
    {/* <TodoList/>*/}
    <TodoContainer/>
    </div>
  );
}

export default App;
