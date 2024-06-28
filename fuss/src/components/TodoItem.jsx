import React from 'react'

const TodoItem = () => {
  return (
    <li className='flex justify-between items-center '>
      <span className='flex space-x-3'>
        <input type='checkbox'></input>
        <p>Eat</p>
      </span> 
      <p>...</p>
    </li>
  )
}

export default TodoItem