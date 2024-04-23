import { useState } from 'react'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  async function fetchTodos() {
      const response = await fetch("http://127.0.0.1:3000/");
      const json = await response.json();
      setTodos(json.todos);
  }

  fetchTodos();


  return (
    <>
      <div id='main_Container'>
          <CreateTodo/>
          <Todos todos= {todos} />
      </div>
    </>
  )
}

export default App
