import { Box, Container, Typography,Button } from "@mui/material";

const Portfolio = () => {
  return (
    <>
      <div>
        <Box sx={{ paddingTop: "100px" }}>
          <Container maxWidth="lg">
            <Box sx={{display:"grid", gap:"30px"}}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                maxWidth={"411px"}
                sx={{ textAlign: "center", display: "grid", gap: "16px" }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "5px",
                    color: "rgba(116, 198, 157, 1)",
                    fontWeight: "700",
                  }}
                >
                  
                  Works
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "40px", md: "40px", sm: "24px" },
                    fontWeight: "700",
                    lineHeight: { lg: "50px", md: "50px", sm: "30px" },
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  Portfolio
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "20px", md: "20px", sm: "" },
                    lineHeight: { lg: "25px", md: "25px", sm: "" },
                    fontWeight: "400px",
                    
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Box>
            <Box width={"100%"} sx={{ display: "grid", gap: "30px" }}>
              <Box className="portfolio1" width={"100%"} sx={{ display: "flex", gap: "30px" }}>
                <Box
                  width={"50%"}
                 
                >
                  <img
                    src="src/assets/Portfolio/portfolio3.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
                <Box width={"50%"} sx={{ }}>
                  <img
                    src="src/assets/Portfolio/portfolio3.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
              </Box>
              <Box className="portfolio1" width={"100%"} sx={{ display: "flex", gap: "30px" }}>
                <Box width={"50%"}>
                  <img
                    src="src/assets/Portfolio/portfolio7.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
                <Box width={"50%"}>
                  <img
                    src="src/assets/Portfolio/portfolio6.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
              </Box>
              <Box className="portfolio1" width={"100%"} sx={{ display: "flex", gap: "30px" }}>
                <Box width={"50%"} >
                  <img
                    src="src/assets/Portfolio/portfolio3.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
                <Box width={"50%"} >
                  <img
                    src="src/assets/Portfolio/portfolio7.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
              </Box>
              <Box className="portfolio1" width={"100%"} sx={{ display: "flex", gap: "30px"}}>
                <Box width={"50%"} >
                  <img
                    src="src/assets/Portfolio/portfolio7.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
                <Box width={"50%"}>
                  <img
                    src="src/assets/Portfolio/portfolio6.svg"
                    alt=""
                    width={"100%"}
                  />
                </Box>
              </Box>
            </Box>
            </Box>
           <Box sx={{textAlign:"center", marginTop:"30px"}}>
           <Button sx={{width:"170px", height:"48px", bgcolor:"rgba(33, 37, 41, 1)", lineHeight:"25px", fontSize:"20px", color:"white"}}>Learn More</Button>
           </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default Portfolio;
