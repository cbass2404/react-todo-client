import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: this.props.todo.done,
    };
  }

  toggleDone = () => {
    fetch(`http://localhost:5000/api/edit-todo/${this.props.todo.id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ done: !this.state.done }),
    }).then(() => {
      this.setState((prevState) => ({
        done: !prevState.done,
      }));
    });
  };

  todoDelete = () => {
    fetch(`http://localhost:5000/api/delete-todo/${this.props.todo.id}`, {
      method: "DELETE",
    }).then(() => {
      this.props.setTodos();
    });
  };

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.toggleDone}
        />
        <p className={this.state.done ? "done" : ""}>{this.props.todo.title}</p>
        <button onClick={() => this.todoDelete()}>Delete</button>
      </div>
    );
  }
}

export default TodoItem;
