import React from 'react';
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'

const todos = [{
  task: 'Organize Garage',
  id: 1528817077286,
  completed: false
},
{
  task: 'Bake Cookies',
  id: 1528817084358,
  completed: false
}]

class App extends React.Component {
  constructor(){
    super()
    
    
  // you will need a place to store your state in this component.
  this.state = {
      todos: todos
  }
}

strikeItem=(itemId)=>{
  console.log(itemId)
  this.setState({
    todos:this.state.todos.map(item => {
      if(item.id === itemId){
        return{
          ...item,
          completed: !item.completed
        }
      }
      return item
    })
  })
}

addTask = (event, item) =>{
  event.preventDefault()
  const newTask = {
    task: item,
    id: new Date(),
    completed: false
  }
  this.setState({todos:[...this.state.todos, newTask]})
}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  //and any change handlers you need to work with your state
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoForm addTask = {this.addTask} />
        <ToDoList todos = {this.state.todos} strikeItem = {this.strikeItem}/>
        
      </div>
    );
  }
}

export default App;
