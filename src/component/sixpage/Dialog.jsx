import * as React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DeleteIcon from '@mui/icons-material/Delete';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
const CustomDeleteIcon = styled(DeleteIcon)({
  fontSize: 50, 
  
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(7),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(4),
  },
 
  
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment >
     <Box sx={{ height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
     <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
     </Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers>
          <Typography sx={{textAlign:"center"}} gutterBottom>
           <CustomDeleteIcon /><br></br>
           <span style={{color:"black", fontWeight:"800"}}>Delete</span>
          </Typography>
          <Typography  sx={{textAlign:"center"}}  gutterBottom>
            Are you sure,you want to delete
          </Typography>
         
        </DialogContent>
        <DialogActions sx={{gap:"10px"}}>
          <Button sx={{'&:hover': {bgcolor:"#009f7f"}, width:"100%", bgcolor:"#009f7f", color:"white"}} autoFocus onClick={handleClose}>
           Cancle
          </Button>
          <Button sx={{'&:hover': {bgcolor:"#dc2626"}, width:"100%", bgcolor:"#dc2626",color:"white"}} autoFocus onClick={handleClickOpen}>
            Delete
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
