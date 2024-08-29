import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 450 }} role="presentation" onClick={toggleDrawer(false)}>
     <Typography sx={{borderBottom:"1px solid black", fontSize:'20px', fontWeight:"800", height:'70px', display:'flex', alignItems:"center", color:"#009f7f"}}>0 item</Typography>


    </Box>
  );

  return (
    <div style={{height:"100vh", display:"flex", justifyContent:"center",alignItems:"center"}}>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
