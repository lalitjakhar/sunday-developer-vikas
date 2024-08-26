
import { Box, Container, Typography, Button } from "@mui/material";
const LoremIpsumSection = () => {
  return (
    <>
      <div>
        <Box sx={{paddingTop:"100px"}}>
          <Container maxWidth="lg">
            <Box
              className="LoremAmetSection"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                width={"50%"}
                sx={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <Box sx={{ maxWidth: "470px", display: "grid", gap: "16px" }}>
                  <Typography
                    sx={{
                      fontSize: { lg: "40px", md: "40px", sm: "24px" },
                      fontWeight: "700",
                      lineHeight: { lg: "50px", md: "50px", sm: "30px" },
                      color: "rgba(33, 37, 41, 1)",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "400px",
                      lineHeight: "18px",
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
                        bgcolor: "rgba(33, 37, 41, 1)",
                        fontSize: "20px",
                        fontWeight: "400",
                        lineHeight: "25px",
                        textAlign: "center",
                        color: "rgba(255, 255, 255, 1)",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box width={"50%"}>
               <Box>
               <img
                  src="src/assets/LoremIpsumSection/Loremipsumsection.png"
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
export default LoremIpsumSection;
