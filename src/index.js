import React from "react";
import ReactDOM from "react-dom";

import TodoItem from "./todo-item";

import "./style/style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      todos: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      todo: e.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    console.log("addtodo");
    fetch("http://localhost:5000/api/create-todo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        title: this.state.todo,
        done: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          todos: [data, ...prevState.todos],
          todo: "",
        }));
      });
  };

  componentDidMount() {
    fetch("http://localhost:5000/api/get-all-todos")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          todos: data,
        })
      );
  }

  renderTodos = () => {
    return this.state.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} />;
    });
  };

  render() {
    return (
      <div className="app">
        <h1>Todo List</h1>
        <form className="add-todo" onSubmit={this.addTodo}>
          <input
            type="text"
            placeholder="Add Todo"
            value={this.state.todo}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add</button>
        </form>
        {this.renderTodos()}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
