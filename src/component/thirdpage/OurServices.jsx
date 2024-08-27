import { Box, Container, Typography, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
const OurServices = () => {
  return (
    <>
      <div>
        <Box>
          <Container maxWidth="lg" sx={{ paddingBlock: "120px", display:"grid" ,gap:"40px" }}>
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
                  Plans
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "40px", md: "40px", sm: "24px" },
                    fontWeight: "700",
                    lineHeight: { lg: "50px", md: "50px", sm: "30px" },
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "sans-serif",
                  }}
                >
                  Our Services
                </Typography>
                <Typography
                  sx={{
                    fontSize: { lg: "20px", md: "20px", sm: "" },
                    lineHeight: { lg: "25px", md: "25px", sm: "" },
                    fontWeight: "400px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Box>
            </Box>
            <Box className="OurServicesPage" sx={{ display: "flex",gap:"100px" }}>
              <Box
                width={"100%"}
                sx={{
               
                  display: "flex",
                  justifyContent: "center",
                  paddingBlock: "30px",
                  borderRadius:"15px",
                  bgcolor:"rgba(255, 255, 255, 1)",
                  boxShadow:"3"
                }}
              >
                <Box sx={{ maxWidth: "279px", display: "grid", gap: "45px" }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                      Basic
                    </Typography>
                    <Typography>
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "50px",
                          color: "rgba(0, 0, 0, 1)",
                        }}
                      >
                        {" "}
                        $100
                      </span>{" "}
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          lineHeight: "18px",
                          color: "rgba(33, 37, 41, 0.5)",
                        }}
                      >
                        /month
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                        width: "279px",
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Suscipit nemo hic quos, ab, dolor aperiam
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      sx={{
                        width: "170px",
                        height: "48px",
                        bgcolor: "rgba(33, 37, 41, 1)",
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 1)",
                        textTransform: "none",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box
                width={"100%"}
                sx={{
                  
                  display: "flex",
                  justifyContent: "center",
                  paddingBlock: "30px",
                  borderRadius:"15px",
                  bgcolor:"rgba(255, 255, 255, 1)",
                  boxShadow:"3"
                }}
              >
                <Box sx={{ maxWidth: "279px", display: "grid", gap: "45px" }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                      Plus
                    </Typography>
                    <Typography>
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "50px",
                          color: "rgba(0, 0, 0, 1)",
                        }}
                      >
                        {" "}
                        $250
                      </span>{" "}
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          lineHeight: "18px",
                          color: "rgba(33, 37, 41, 0.5)",
                        }}
                      >
                        /month
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                        width: "279px",
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Suscipit nemo hic quos, ab, dolor aperiam
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      sx={{
                        width: "170px",
                        height: "48px",
                        bgcolor: "rgba(33, 37, 41, 1)",
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 1)",
                        textTransform: "none",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Box
                width={"100%"}
                sx={{
                
                  display: "flex",
                  justifyContent: "center",
                  paddingBlock: "30px",
                  borderRadius:"15px",
                  bgcolor:"rgba(255, 255, 255, 1)",
                  boxShadow:"3"
                }}
              >
                <Box sx={{ maxWidth: "279px", display: "grid", gap: "45px" }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        color: "rgba(0, 0, 0, 1)",
                      }}
                    >
                     Pro
                    </Typography>
                    <Typography>
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "50px",
                          color: "rgba(0, 0, 0, 1)",
                        }}
                      >
                        {" "}
                        $400
                      </span>{" "}
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: "400",
                          lineHeight: "18px",
                          color: "rgba(33, 37, 41, 0.5)",
                        }}
                      >
                        /month
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                        width: "279px",
                      }}
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Suscipit nemo hic quos, ab, dolor aperiam
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: "18px",
                        fontWeight: "400px",
                        color: "rgba(33, 37, 41, 0.5)",
                      }}
                    >
                      <CheckIcon /> Lorem ipsum, dolor sit{" "}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      sx={{
                        width: "170px",
                        height: "48px",
                        bgcolor: "rgba(33, 37, 41, 1)",
                        fontSize: "20px",
                        fontWeight: "400",
                        color: "rgba(255, 255, 255, 1)",
                        textTransform: "none",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default OurServices;
