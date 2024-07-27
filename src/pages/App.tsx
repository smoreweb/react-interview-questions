import React, { useState } from 'react';
import Header from 'components/Header';
import TodoInput from 'components/TodoInput';
import TodoList from 'components/TodoList';
import Footer from 'components/Footer';
import { Todo } from 'shared/types';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { updateTodos, updateNextId } from 'store/features/applicationSlice';
import './App.css';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { todos, nextId } = useAppSelector((state) => state.application);

  const addTodo = (text: string) => {
    dispatch(updateTodos({ todos: [...todos, { id: nextId, text, completed: false }] }));
    dispatch(updateNextId({ nextId: nextId + 1 }));
  };

  const toggleTodo = (id: number) => {
    dispatch(updateTodos({ todos: todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ) }));
  };

  const clearCompleted = () => {
    dispatch(updateTodos({ todos: todos.filter((todo) => !todo.completed) }));
  };

  return (
    <div className="App">
      <Header />
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <Footer todos={todos.filter((todo) => !todo.completed).length} clearCompleted={clearCompleted} />
    </div>
  );
};

export default App;
