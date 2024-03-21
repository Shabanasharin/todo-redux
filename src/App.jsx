

import React, { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, toggleTodo } from './slices/TodoSlices'

function App() {
 const [text,setText] = useState('')
 const dispatch = useDispatch()
 const todos = useSelector(state => state.todos);

 const handleAddTodo = () => {
  if (text.trim() !== '') {
    dispatch(addTodo({
      id: Date.now(),
      text,
      completed: false,
    }));
    setText('');
  }
};
const handleDeleteTodo = id => {
  dispatch(deleteTodo(id));
};

const handleToggleTodo = id => {
  dispatch(toggleTodo(id));
};

  return (

    <>
      <div className='d-flex align-items-center justify-content-center' >
        <div style={{width:"800px",height:"400px",border:"solid green 5px"}} >
          <h1>My ToDo List</h1>
          <div className='d-flex justify-Content- between'>
            <input type="text" onChange={e => setText(e.target.value)}   placeholder='Add Todo...'/>
            <button onClick={handleAddTodo} className='btn btn-primary' >Submitt</button>
          </div>
          <div className='d-flex justify-content-between mt-5'>
            <ul >
    
               {todos.map(todo=>(
                <li style={{textDecoration:'none'}} key={todo.id}>
                  <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                   <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >{todo.text}</span>
                <button onClick={() => handleDeleteTodo(todo.id)} style={{marginLeft:'500px'}} className='btn btn-warning'>Delete</button>
               </li>
            ))}
                </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
