import React from "react";
import Item from "./Item";
import Header from "./Header";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  List,
  TextField,
  Container,
  Box,
} from "@material-ui/core";


class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      newId: 3,
      items: [
        {
          id: 1,
          text: "item",
          complete: false,
        },
        {
          id: 2,
          text: "item",
          complete: false,
        },
      ],
    };
  }

  componentDidMount(){
    this.setState({
    newId:localStorage.getItem('newId')||this.state.newId,
    items: JSON.parse(localStorage.getItem('items'))||this.state.items
  })
}

  componentDidUpdate(){
    localStorage.setItem('newId',this.state.newId);
    localStorage.setItem('items',JSON.stringify(this.state.items));
  }

  renameTodo = () => {
    console.log("dw")
  }
  

  addItem = () => {
    let inp = this.state.inputText === "" ? "Task" : this.state.inputText;
    this.setState({
      items: [
        ...this.state.items,
        {
          id: this.state.newId,
          text: inp,
          complete: false,
        },
      ],
      newId: this.state.newId + 1,
      inputText: "",
    });
  };
  delItem = (id) => {
    this.setState({
      items: [...this.state.items.filter((item) => item.id !== id)],
    });
  };

  onChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };


  render() {
    
    return (
      <Container>
        <Card variant="elevation">
          <Header title={this.props.title} renameTodo={this.renameTodo} delTodo={this.props.delTodo.bind(this,this.props.id)} />
          <CardContent>
            <Box height="11rem" overflow="auto">
            <List>
              {this.state.items.map((item) => (
                <Item id={item.id} text={item.text} delItem={this.delItem} />
              ))}
            </List>
            </Box>
          </CardContent>
          <CardActions disableSpacing>
            <Box display="flex" alignItems="flex-end" flexDirection="row" style={{width:"100%"}}>
              <Box flexGrow={2}>
                <TextField 
                  fullWidth
                  multiline
                  autoFocus
                  onChange={this.onChange}
                  value={this.state.inputText}
                  label="Add task..."
                />
              </Box>
              <Box>
                <IconButton type="submit" size="small" onClick={this.addItem}>
                  <AddBoxOutlinedIcon color="secondary" />
                </IconButton>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Container>
    );
  }

 

}

export default Todo;
