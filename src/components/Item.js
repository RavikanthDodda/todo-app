import React, { Component } from "react";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Divider,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

export class Item extends Component {
  render() {
    const { id, text } = this.props;
    return (
      <div>
        <ListItem role={undefined} dense button>
          <ListItemIcon>
            <Checkbox
              edge="start"
              // checked={checked.indexOf(value) !== -1}
              tabIndex={-1}
              disableRipple
              // inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText
            onClick={this.props.openDialog.bind(this, "task", this.props.id)}
          >
            <Typography multiline style={{ wordWrap: "break-word" }}>
              {text}
            </Typography>
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="comments"
              onClick={this.props.delItem.bind(this, id)}
            >
              <ClearIcon fontSize="small" color="secondary" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
      </div>
    );
  }
}

export default Item;
