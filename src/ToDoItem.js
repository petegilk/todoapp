import React from 'react'

const ToDoItem = (props) => {
  return(
    <div>
      <li>{props.listValue}</li>
      <button onClick={props.deleteButton}>Delete</button>
    </div>
  )
}

export default ToDoItem