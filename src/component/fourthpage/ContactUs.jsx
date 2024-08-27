import { Box, Container, Typography, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <div>
        <Box>
          <Container maxWidth="lg">
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Box
                maxWidth={"411px"}
                sx={{ textAlign: "center", display: "grid", gap: "16px" }}
              >
                <Typography
                  sx={{
                    fontSize: { lg: "40px", md: "40px", sm: "24px" },
                    fontWeight: "700",
                    lineHeight: { lg: "50px", md: "50px", sm: "30px" },
                    color: "rgba(0, 0, 0, 1)",
                    fontFamily: "sans-serif",
                  }}
                >
                  Contact Us
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
            <Box className="Contactuspagecontent"
              sx={{
                width:"100%",
                display: "flex",
                justifyContent: "space-between",
                gap: "20px",
               marginBlock:'80px'
              }}
            >
              <Box width={"100% "} >
                <Box height={"384px"} sx={{ display: "grid", gap: "21px" }}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name">Email</label>
                    <input type="email" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="massage">Massage</label>
                    <input type="text" id="name" />
                  </div>
                  <Button sx={{ width: "100%", bgcolor: "black" }}>
                    Submit
                  </Button>
                </Box>
              </Box>
              <Box width={"100%"}>
                <img
                  src="src/assets/contactus/contactus (1).png"
                  alt=""
                  width={"100%"}
                  height={"384px"}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
    </>
  );
};
export default ContactUs;
