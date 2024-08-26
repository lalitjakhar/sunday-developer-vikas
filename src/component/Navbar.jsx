import { Container, AppBar, Toolbar, Box, Button } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: "rgba(116, 198, 157, 1)", boxShadow: "none", height:"80px", display:"flex",justifyContent:"center" }}>
        <Toolbar>
          
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between" }}
          > 
            <Box>
              <img src="src/assets/nabbar/nabarlogo.svg" alt="" width={"100%"} />
            </Box>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Button
                color="inherit"
                sx={{
                  fontSize: "20px",
                  lineHeight: "25px",
                  fontWeight: "400",
                  fontFamily: "sans-serif",
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
