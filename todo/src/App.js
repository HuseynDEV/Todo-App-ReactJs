import React, { useState } from "react"
import Header from "./component/Header"
import './App.css'
import Form from "./component/Form"
import TodoList from "./component/TodoList"


const App = () => {

  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  return (
    <div className="all">
      <div className="container">
        <div className="app-wrapper">
          <div>
            <Header />
          </div>
          <div>
            <Form
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo} />
          </div>
          <div>
            <TodoList
              todos={todos}
              setTodos={setTodos}
              setEditTodo={setEditTodo}
              editTodo={editTodo}
              input={input}
              setInput={setInput} />
          </div>
        </div>
      </div>
    </div>
  )
}


export default App;
