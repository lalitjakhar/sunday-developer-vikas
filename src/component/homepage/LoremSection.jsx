import { Box, Container, Typography, Button } from "@mui/material";
const LoremSection = () => {
  return (
    <>
      <div>
        <Box width={"100%"} sx={{ display: "flex", justifyContent: "center", paddingBlock:"50px", alignItems:"center" }}>
          <Container maxWidth="lg" sx={{display:"grid", gap:"55px"}}>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
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
                  {" "}
                  LoremSection
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "40px", md: "40px", sm: "24px" },
                    fontWeight: "700",
                    lineHeight: { lg: "50px", md: "50px", sm: "30px" },
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  Lorem Ipsum Dolor
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
            <Box  sx={{ display: "flex", flexDirection:{sm:"column", md:"row",lg:"row",xs:"column"} ,alignItems:{sm:"center",xs:"center"}, justifyContent: "space-between", gap:{sm:"20px",xs:"20px"} }}>
              <Box>
                <img
                  src="src/assets/loremsection/lorem1.svg"
                  alt=""
                  width={"100%"}
                />
              </Box>
              <Box>
                <img
                  src="src/assets/loremsection/lorem2.svg"
                  alt=""
                  width={"100%"}
                />
              </Box>
              <Box>
                <img
                  src="src/assets/loremsection/lorem3.svg"
                  alt=""
                  width={"100%"}
                />
              </Box>
              <Box>
                <img
                  src="src/assets/loremsection/lorem4.svg"
                  alt=""
                  width={"100%"}
                />
              </Box>
              <Box>
                <img
                  src="src/assets/loremsection/lorem5.svg"
                  alt=""
                  width={"100%"}
                />
              </Box>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button sx={{width:"170px", height:"48px", bgcolor:"rgba(33, 37, 41, 1)", fontSize:"20px", lineHeight:"25px", color:"rgba(255, 255, 255, 1)"}}> Lern more</Button>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default LoremSection;
