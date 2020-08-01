import React from 'react'

const TodoForm = props =>{

        return(
            <>
            <form>
            <input type = "text" onChange = {props.changeHandler}></input>
            <button onClick = {props.addTask}>Add Todo</button>
            <button onClick = {props.clearCompleted}>Clear Completed</button>
            </form>
            
            
            </>
        )
    }

export default TodoForm