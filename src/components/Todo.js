import React from "react";
import Item from "./Item";
import Header from "./Header";
import NameDialog from "./NameDialog";
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
  Grid,
} from "@material-ui/core";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      newId: 1,
      items: [],
      dialogStatus: false,
    };
  }
  componentDidMount() {
    this.setState({
      newId: localStorage.getItem("newId" + this.props.id) || this.state.newId,
      items:
        JSON.parse(localStorage.getItem("items" + this.props.id)) ||
        this.state.items,
    });
  }

  componentDidUpdate() {
    localStorage.setItem("newId" + this.props.id, this.state.newId);
    localStorage.setItem(
      "items" + this.props.id,
      JSON.stringify(this.state.items)
    );
  }
  openDialog = (mode, id) => {
    this.mode = mode;
    this.id = id;
    this.setState({
      dialogStatus: true,
    });
  };

  closeDialog = (name) => {
    if (name !== "" && this.mode === "to-do") this.renameTodo(name);
    if (name !== "" && this.mode === "task") this.renameItem(name, this.id);
    this.setState({
      dialogStatus: false,
    });
  };

  renameTodo = (name) => {
    this.props.renameTodo(this.props.id, name);
  };

  renameItem = (name, id) => {
    let newItems = [
      ...this.state.items.map((item) => {
        if (item.id === id) item.text = name;
        return item;
      }),
    ];
    this.setState({
      items: newItems,
    });
  };

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
      newId: Number(this.state.newId) + 1,
      inputText: "",
    });
    console.log(this.state.newId);
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
      <Grid item xs={12} sm={4}>
        <Box mt={2}>
          <Container>
            <Card variant="elevation" elevation="8">
              <Header
                title={this.props.title}
                openDialog={this.openDialog}
                delTodo={this.props.delTodo.bind(this, this.props.id)}
              />
              <CardContent>
                <Box height="11rem" overflow="auto">
                  <List>
                    {this.state.items.map((item) => (
                      <Item
                        id={item.id}
                        key={item.id}
                        text={item.text}
                        delItem={this.delItem}
                        openDialog={this.openDialog}
                      />
                    ))}
                  </List>
                </Box>
              </CardContent>
              <CardActions disableSpacing>
                <Box
                  display="flex"
                  alignItems="flex-end"
                  flexDirection="row"
                  style={{ width: "100%" }}
                >
                  <Box flexGrow={2}>
                    <TextField
                      fullWidth
                      multiline
                      autoFocus
                      onChange={this.onChange}
                      value={this.state.inputText}
                      label="Add task..."
                      required="true"
                    />
                  </Box>
                  <Box>
                    <IconButton
                      type="submit"
                      size="small"
                      onClick={this.addItem}
                    >
                      <AddBoxOutlinedIcon color="secondary" />
                    </IconButton>
                  </Box>
                </Box>
              </CardActions>
            </Card>
          </Container>
        </Box>
        <NameDialog
          open={this.state.dialogStatus}
          onClose={this.closeDialog}
          mode={`Edit this ${this.mode}`}
        />
      </Grid>
    );
  }
}

export default Todo;
