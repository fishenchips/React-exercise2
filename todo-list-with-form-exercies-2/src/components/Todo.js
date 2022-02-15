import React from 'react'

function Todo(props) {
  return (
    <li className={props.addClass} onClick={props.handleClick}>{props.todo.task} </li>
  )
}

export default Todo