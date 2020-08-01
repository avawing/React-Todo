import React from 'react'
//import ToDoList from './TodoList'


class TodoForm extends React.Component{
    
    constructor(){
        super()
        this.state = {
            todo: ""

        }
        
    }
    changeHandler = (event) => this.setState({todo: event.target.value})
    //addHandler = (event) => 
    //clearHandler = (event) => 
    render(){
        return(
            <>

            <form>
            <input name = "todo" type = "text" placeholder = "To do..." onChange = {this.changeHandler}></input>
            <button onClick = {this.addHandler}>Add Todo</button>
            <button onClick = {this.clearHandler}>Clear Completed</button>
            </form>
            
            
            </>
        )
    }
}

export default TodoForm