import React from "react";
import Todo from "./Todo";
import { Grid, IconButton } from "@material-ui/core";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";


class List extends React.Component {
  constructor(props) {
    console.log(localStorage.getItem('todos'))
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
  componentDidUpdate(){
    localStorage.setItem('new_id',this.state.new_id);
    localStorage.setItem('todos',JSON.stringify(this.state.todos));
  }

  componentDidMount(){
    this.setState( {
      new_id: localStorage.getItem('new_id')||this.state.new_id,
      todos: JSON.parse(localStorage.getItem('todos'))||this.state.todos
    });
  }

  addTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.new_id,
          title: "To do",
        }
      ],
      new_id: this.state.new_id + 1,
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  render() {
    return (
      <div>
        <Grid container spacing={2} alignItems="center" justify="center">
          {
            this.state.todos.map((todo) => (
            <Grid item xs={12} sm={4}>
              <Todo id={todo.id} title={todo.title} delTodo={this.delTodo} className="col-md" />
            </Grid>
          ))
          }

          <IconButton
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
