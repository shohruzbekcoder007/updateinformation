import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from "@mui/material/IconButton";
import SaveIcon from "@mui/icons-material/Save";
import Typography from '@mui/material/Typography';

export default function AlertDialog({updatePerson, changeLogic}) {

  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(false);

  const handleClickOpen = () => {
      
    if(changeLogic().open){
      setOpen(true);
    }
    else {
      updatePerson();
      setColor(true)
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
          aria-label="delete"
          onClick={handleClickOpen}
      >
      <SaveIcon sx={{width: 23, height: 23}} color={color?"success":"disabled"} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Quyidagi mantiqiy nazorat xatoliklarini tug'irlashingiz kerak!!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
                changeLogic().messages.map((item, index) => {
                    return <Typography>{index+1}. {item}</Typography>
                })
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Tushunarli
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
