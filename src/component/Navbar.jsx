import { Container, AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: "rgba(116, 198, 157, 1)", boxShadow: "none", height:"80px", display:"flex",justifyContent:"center",position:"relative" ,top:"0" }}>
        <Toolbar>
          
          <Container className="navbar"
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between" }}
          > 
            <Box>
              <img src="src/assets/nabbar/nabarlogo.svg" alt="" width={"187px"} height={"48px"} />
            </Box>
            <Box className="navbae1" sx={{ display: "flex", gap: "10px"  }}>
              <Button
                color="inherit"
                sx={{
                  fontSize: {sm:"15px",md:"20px",lg:"20px"},
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
                href="/"
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: {sm:"15px",md:"20px",lg:"20px"},
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
                href="/secondpage"
              >
                Portfolio
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: {sm:"15px",md:"20px",lg:"20px"},
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
                href="/thirdpage"
              >
                Services
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: {sm:"15px",md:"20px",lg:"20px"},
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
                href="/fourthpage"
              >
                Contact
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: {sm:"15px",md:"20px",lg:"20px"},
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
                href="/fivepage"
              >
                Pricing
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
