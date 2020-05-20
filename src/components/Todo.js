import React from "react";
import Item from "./Item";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  IconButton,
  CardHeader,
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

  render() {
    return (
      <Container>
        <Card variant="elevation">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={this.props.title}
          />
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
                <Button type="submit" size="small" onClick={this.addItem}>
                  <AddBoxOutlinedIcon />
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Container>
    );
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
}

export default Todo;
