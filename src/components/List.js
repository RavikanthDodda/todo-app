import React from "react";
import Todo from "./Todo";
import { Grid, IconButton } from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      new_id: 2,
      todos: [
        {
          id: 1,
          title: "To do",
        },
      ],
    };
  }

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.new_id,
          title: "To do",
        },
      ],
      new_id: this.state.new_id + 1,
    });
  };

  render() {
    return (
      <div>
        <Grid container spacing={2} alignItems="center" justify="center">
          {this.state.todos.map((todo) => (
            <Grid item xs={12} sm={4}>
              <Todo id={todo.id} title={todo.title} className="col-md" />
            </Grid>
          ))}

          <IconButton
            className="btn btn-primary"
            type="button"
            onClick={this.addTodo}
          >
            <AddToPhotosIcon fontSize="large" />
          </IconButton>
        </Grid>
      </div>
    );
  }
}

export default List;
