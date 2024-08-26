import { Box, Container, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <div>
        <Box sx={{ bgcolor: "rgba(116, 198, 157, 1)", height: "80px", display:"flex",alignItems:"center", marginTop:"30px" }}>
          <Container maxWidth="lg" >
            <Box className="FooterSection" sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Box>
                  {" "}
                  <img src="src/assets/Footer/Footer1.svg" alt="" />
                </Box>
                <Box>
                  {" "}
                  <img src="src/assets/Footer/Footer2.svg" alt="" />
                </Box>
                <Box>
                  <img src="src/assets/Footer/Footer3.svg" alt="" />
                </Box>
                <Box>
                  <img src="src/assets/Footer/Footer4.svg" alt="" />
                </Box>
                <Box>
                  <img src="src/assets/Footer/Footer5.svg" alt="" />
                </Box>
                <Box>
                  <img src="src/assets/Footer/Footer6.svg" alt="" />
                </Box>
                <Box>
                  <img src="src/assets/Footer/Footer7.svg" alt="" />
                </Box>
              </Box>
              <Box>
                <Typography sx={{fontSize:"20px", fontWeight:"400", lineHeight:"25px",color:"rgba(255, 255, 255, 1)"}}>© Start, 2022. All rights reserved.</Typography>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default Footer;
