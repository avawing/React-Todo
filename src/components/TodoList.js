import React from "react";
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props =>{
  return (
    <>
    <ul>
      {
          props.todos.map(item => {
              return (<Todo key={item.id} item = {item} strikeItem = {props.strikeItem}/>)
          })
      }
    </ul>
  </>
  )
}


export default TodoList;
