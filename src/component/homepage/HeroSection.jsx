import { Box, Container, Typography, Button } from "@mui/material";
const HeroSection = () => {
  return (
    <>
      <div>
        <Box
          sx={{
            bgcolor: "rgba(116, 198, 157, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            width:"100%",
            height:"586px",
          
          }}
        >
          <Container
           maxWidth="lg"  
          >
            <Box className="herosectioncontent" sx={{display:"flex", width:"100%", }}>
            <Box className="welcomecontent" width={"50%"} sx={{order:"1"}}> 
              <Box
                
                sx={{
                  maxWidth: "416px",
                  display: "grid",
                  gap: "26px",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "700",
                    lineHeight: "20px",
                    color: "rgba(255, 255, 255, 1)",
                  }}
                >
                  WELCOME
                </Typography>
                <Typography
                  sx={{
                    fontSize: { sm: "28px", md: "42px" },
                    lineHeight: { sm: "35px", md: "50px" },
                    fontWeight: "700px",
                    color: "rgba(255, 255, 255, 1)",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    lineHeight: "18px",
                    fontWeight: "400px",
                    color: "rgba(255, 255, 255, 0.75)",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos
                  error ipsum, voluptate culpa nesciunt delectus iste?
                </Typography>
                <Box>
                  <Button
                    sx={{
                      width: "170px",
                      height: "48px",
                      bgcolor: "rgba(255, 255, 255, 1)",
                      fontSize: "20px",
                      fontWeight: "400px",
                      lineHeight: "25px",
                      color: "rgba(0, 0, 0, 1)",
                    }}
                  >
                    Expore
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box className="heroimage" sx={{ order:"2", width: "50%" }}>
             <Box>
             <img
                src="src/assets/herosection/herosection.png"
                alt=""
                width={"100%"}
              />
             </Box>
            </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default HeroSection;
