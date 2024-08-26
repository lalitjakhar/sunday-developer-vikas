import { Container, AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: "rgba(116, 198, 157, 1)", boxShadow: "none", height:"80px", display:"flex",justifyContent:"center",position:"fixed" }}>
        <Toolbar>
          
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between" }}
          > 
            <Box>
              <img src="src/assets/nabbar/nabarlogo.svg" alt="" width={"187px"} height={"48px"} />
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "20px",
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: "20px",
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
              >
                Portfolio
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: "20px",
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
              >
                Services
              </Button>
              <Button
                color="inherit"
                sx={{
                  fontSize: "20px",
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
                  textTransform:"none"
                }}
              >
                Contact
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
