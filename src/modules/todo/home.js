import React from 'react'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'
// Layout components.
import Main from '../../layouts/main';


const TodoApp = () => (
  <Main>
    <h1>Todo App</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Main>
)

export default TodoApp
