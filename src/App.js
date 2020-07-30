import React from 'react';
import ToDoForm from './components/TodoForm'
import ToDoList from './components/TodoList'

class App extends React.Component {
  constructor(){
    super()
    
  // you will need a place to store your state in this component.
  this.state = {
      
  }
}
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, 
  //and any change handlers you need to work with your state
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList />
        <ToDoForm />
      </div>
    );
  }
}

export default App;
