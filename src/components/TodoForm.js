import React from 'react'
import ToDoList from './TodoList'
const todos = []



class TodoForm extends React.Component{
    
    constructor(){
        
        super()
        this.state = {
            todos: todos
        }
        
        
    }

    changeHandler = (event) => this.setState({todo: event.target.value})
    addHandler = (event) => {
        event.preventDefault()
        const newTask = {
            task: '',
            id: Date.now(),
            completed: false
        }
        this.setState({...this.todos, newTask})
        console.log(newTask)
        console.log(todos)
    }
    //clearHandler = (event) => 
    render(){
        return(
            <div>
            {/*<ToDoList props = {todos} />*/}
            
            <form>
            <input name = "task" type = "text" placeholder = "To do..." onChange = {this.changeHandler}></input>
            <button onClick = {this.addHandler}>Add Todo</button>
            <button onClick = {this.clearHandler}>Clear Completed</button>
            </form>   

            </div>
        )
    }
}

export default TodoForm