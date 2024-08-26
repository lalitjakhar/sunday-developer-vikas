import { Box, Container, Typography,Button } from "@mui/material";
const TeamSection = () => {
  return (
    <>
      <div>
        <Box sx={{paddingTop:"60px"}}>
          <Container maxWidth="lg" >
          <Box sx={{display:"grid", gap:"45px"}}>
          <Box width={"100%"} sx={{display:"flex", justifyContent:"center"}}>
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
               
               TEAM
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "40px", md: "40px", sm: "24px" },
                  fontWeight: "700",
                  lineHeight: { lg: "50px", md: "50px", sm: "30px" },
                  color: "rgba(0, 0, 0, 1)",
                }}
              >
                Our Talents
              </Typography>
              <Typography
                sx={{
                  fontSize: { lg: "20px", md: "20px", sm: "" },
                  lineHeight: { lg: "25px", md: "25px", sm: "" },
                  fontWeight: "400px",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur
                Suscipit nemo hic quos, ab,
              </Typography>
            </Box>
           </Box>
        <Box className="TeamSectionImg" sx={{display:"flex", justifyContent:"space-between"}}>
            <Box>
                <img src="src/assets/Teamsection/Teamimage1.png" alt="" width={"100%"} />
            </Box>
            <Box>
                <img src="src/assets/Teamsection/Teamimage2.png" alt=""  width={"100%"}  />
            </Box>
            <Box>
                <img src="src/assets/Teamsection/Teamimage3.png" alt=""  width={"100%"}  />
            </Box>
            <Box>
                <img src="src/assets/Teamsection/Teamimage4.png" alt=""  width={"100%"}  />
            </Box>


        </Box>
        <Box sx={{ textAlign: "center" }}>
              <Button sx={{width:"170px", height:"48px", bgcolor:"rgba(33, 37, 41, 1)", fontSize:"20px", lineHeight:"25px", color:"rgba(255, 255, 255, 1)"}}> View Team</Button>
            </Box>

          </Box>

          </Container>
        </Box>
      </div>
    </>
  );
};
export default TeamSection;
