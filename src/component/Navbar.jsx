import { AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar >
       
          <Toolbar>
              <Box sx={{flexGrow:"1"}}>
                <img src="src/assets/nabbar/nabarlogo.svg" alt="" />
              </Box>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Portfolio</Button>
                <Button color="inherit">Services</Button>
                <Button color="inherit">Contact</Button>
              </Box>
     
          </Toolbar>
    
      </AppBar>
    </>
  );
};
export default Navbar;
