import React from 'react'

const Todo = props => {
return(
    <li onClick = {()=>{props.strikeItem(props.item.id)}} className = {`item${props.item.completed ? ' completed': ''}`}>
        {props.item.task}

    </li>
)}


export default Todo