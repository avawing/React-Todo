import React from "react";
import Todo from './Todo'

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = [
        {
            task: this.task,
            id: Date.now(),
            completed: false
        }
    ];
  }
  render() {
    return (
      <>
        <ul>
          {
              this.state.map(item => {
                  return <Todo key ={item.id} props = {item} />
              })
          }
        </ul>
      </>
    );
  }
}

export default TodoList;
