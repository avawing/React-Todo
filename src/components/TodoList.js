import React from "react";
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props =>{
  return (
    <>
    <ul>
      {
          this.props.map(item => {
              return <Todo key ={item.id} props = {item} />
          })
      }
    </ul>
  </>
  )
}


export default TodoList;
