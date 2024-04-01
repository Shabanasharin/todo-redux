

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
      <div className='d-flex  justify-content-center align-items-center'style={{marginTop:"100px"}} >
        <div style={{width:"550px",height:"auto",border:"solid green 5px"}} >
          <h1 style={{textAlign:'center'}} className='mt-5'>My ToDo List</h1>
          <div className='d-flex justify-Content- between'>
            <input  className='ms-3 mt-3 form-control ' type="text" onChange={e => setText(e.target.value)}   placeholder='Add Todo...'/>
            <button  onClick={handleAddTodo} className='btn btn-info mt-3 ms-1 me-3' >Submitt</button>
          </div>
          <div className='d-flex justify-content-between mt-5'>
            <ul >
    
               {todos.map(todo=>(
                <div className='d-flex justify-content-between align-items-between'>
                  <li style={{listStyle:'none'}} key={todo.id}>
                    <input type="checkbox" checked={todo.completed} onChange={() => handleToggleTodo(todo.id)} />
                     <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >{todo.text}</span>
                  <button onClick={() => handleDeleteTodo(todo.id)}  className='btn btn-primary mb-3'style={{marginLeft:"300px"}}>Delete</button>
                 </li>
                </div>
            ))}
                </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
