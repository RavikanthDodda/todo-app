import React from "react";
import { useState } from "react";
import {
  TextField,
  Dialog,
  DialogTitle,
  Button,
  DialogContent,
  DialogActions,
} from "@material-ui/core";

const NameDialog = (props) => {
  const { onClose, open, mode } = props;
  const [name, setName] = useState("");
  const handleClose = (val) => {
    onClose(name);
    setName("");
  };

  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <Dialog
      onClose={() => {
        handleClose("");
      }}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle>{mode}</DialogTitle>
      <DialogContent>
        <TextField onChange={onChange} label="Type here" />
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default NameDialog;
