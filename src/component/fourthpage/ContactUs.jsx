import { Box, Container, Typography, Button } from "@mui/material";

const ContactUs = () => {
  return (
    <>
      <div>
        <Box>
          <Container maxWidth="lg" sx={{paddingBlock:"30px"}}>
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
              <Box width={"100% "} sx={{order:{sm:"2",xs:"2",md:"1",lg:"1"}}} >
                <Box height={"384px"} sx={{ display: "grid", }}>
                  <div className="form-group">
                    <label htmlFor="name" style={{fontSize:"20px"}}>Name</label>
                    <input type="text" id="name" style={{minHeight:"40px",backgroundColor:"rgba(238, 238, 238, 1)", border:'1px solid black', borderRadius:'5px'}} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="name" style={{fontSize:"20px"}}>Email</label>
                    <input type="email" id="name" style={{minHeight:"40px" ,backgroundColor:"rgba(238, 238, 238, 1)", border:'1px solid black', borderRadius:'5px'}}  />
                  </div>
                  <div className="form-group">
                    <label htmlFor="massage" style={{fontSize:"20px"}}>Massage</label>
                    <input  type="text" id="name" style={{minHeight:"60px" ,backgroundColor:"rgba(238, 238, 238, 1)", border:'1px solid black', borderRadius:'5px'}}  />
                  </div>
                  <Button sx={{ width: "100%", bgcolor: "black", fontSize:"20px",fontWeight:"400",lineHeight:"25px", color:"rgba(255, 255, 255, 1) " , textTransform:"none" }}>
                    Submit
                  </Button>
                </Box>
              </Box>
              <Box width={"100%"} sx={{order:{sm:"1",xs:"1",md:"2",lg:"2"}}}>
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
