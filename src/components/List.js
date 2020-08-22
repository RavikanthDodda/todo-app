import React from "react";
import Todo from "./Todo";
import { Grid, IconButton } from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import NameDialog from "./NameDialog";

class List extends React.Component {
  constructor(props) {
    console.log(localStorage.getItem("todos"));
    super(props);
    this.state = {
      new_id: 1,
      todos: [],
      dialogStatus: false,
      name: "",
    };
  }
  componentDidUpdate() {
    localStorage.setItem("new_id", this.state.new_id);
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    this.setState({
      new_id: Number(localStorage.getItem("new_id")) || this.state.new_id,
      todos: JSON.parse(localStorage.getItem("todos")) || this.state.todos,
    });
  }
  openDialog = () => {
    this.setState({
      dialogStatus: true,
    });
  };
  onCloseDialog = (name) => {
    this.setState({
      dialogStatus: false,
    });
    this.addTodo(name);
  };
  addTodo = (name) => {
    if (name !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            id: this.state.new_id,
            title: name,
          },
        ],
        new_id: Number(this.state.new_id) + 1,
        name: "",
      });
    }
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  renameTodo = (id, name) => {
    let newTodos = [
      ...this.state.todos.map((todo) => {
        if (todo.id === id) todo.title = name;
        return todo;
      }),
    ];
    this.setState({
      todos: newTodos,
    });
  };
  render() {
    return (
      <div>
        <Grid container spacing={2} alignItems="center" justify="center">
          {this.state.todos.map((todo) => (
            <Todo
              id={todo.id}
              title={todo.title}
              delTodo={this.delTodo}
              renameTodo={this.renameTodo}
              className="col-md"
            />
          ))}

          <IconButton onClick={this.openDialog}>
            <AddToPhotosIcon fontSize="large" />
          </IconButton>
          <NameDialog
            open={this.state.dialogStatus}
            onClose={this.onCloseDialog}
            mode={"Title for new to-do"}
          />
        </Grid>
      </div>
    );
  }
}

export default List;
