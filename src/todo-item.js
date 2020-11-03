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

  render() {
    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.state.done}
          onChange={this.toggleDone}
        />
        <p>{this.props.todo.title}</p>
      </div>
    );
  }
}

export default TodoItem;
