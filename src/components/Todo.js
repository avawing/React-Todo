import React from 'react'
import './Todo.css'

const Todo = props => {
return(
    <li onClick = {()=>{props.strikeItem(props.item.id)}} className = {`item${props.item.completed ? ' completed': ''}`}>
        {props.item.task}

    </li>
)}


export default Todo