import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, CardHeader, Popper, Paper, Fade, Button, Box, Modal } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    
  },

}));

export default function Header(props) {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openModal, setOpen] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const renameModal = () => {
    setAnchorEl(null);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const delModal = () => {
    setAnchorEl(null);

    props.delTodo();
  };
  
  return (
    <div>
      <Popper open={open} anchorEl={anchorEl} placement="bottom-end" transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
             <Paper elevation={1} className={classes.paper}>
               <Box flexDirection="column">
              <Button flex aria-label="rename" size="small" onClick={renameModal} >
                 Rename
               </Button>
               <Button flex aria-label="rename" size="small" onClick={delModal} >
                 Delete
               </Button>
               </Box>
             </Paper>
          </Fade>
        )}
      </Popper>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
      />
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
      <Paper style={{width:"400",height:"300"}}><p>dwdwdwdw</p></Paper>
      </Modal>
    </div>
  );
}
