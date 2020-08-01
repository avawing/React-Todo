import React from 'react'


class TodoForm extends React.Component{
    constructor(){
        super()
        this.state = {
            task: ''
        }
    }

    changeHandler = event => {
        this.setState({task: event.target.value})
    };
    submitTask = event => {
        event.preventDefault()
        this.props.addTask(event, this.state.task)
    }
render(){
    return(
        <>
        <form onSubmit = {this.submitTask}>
        <input type = "text" name = "task" onChange = {this.changeHandler}></input>
        <button>Add Todo</button>
        <button onClick = {this.clearCompleted}>Clear Completed</button>
        </form>
        
        
        </>
    )
}
}
       

export default TodoForm