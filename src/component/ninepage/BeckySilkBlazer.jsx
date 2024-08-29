import {
  Container,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  FormControl,
  InputLabel,
  NativeSelect,
  Button,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const BeckySilkBlazer = () => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          marginBlock: "40px",
         boxShadow:"3",
         paddingBlock:"80px",
          bgcolor: "#ffffff",
          borderRadius: "30px",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
          <Box
            width={"50%"}
            sx={{ display: "flex", flexDirection: "column", gap: "40px" }}
          >
            <Box textAlign={"center"}>
              <img
                src="src/assets/BeckySilkBlazer/BeckySilkBlazer1.jpg"
                alt=""
                width={400}
                height={495}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <img
                  src="src/assets/BeckySilkBlazer/BeckySilkBlazer1.jpg"
                  alt=""
                  width={135}
                  height={158}
                />
              </Box>
              <Box>
                <img
                  src="src/assets/BeckySilkBlazer/BeckySilkBlazer2.jpg"
                  alt=""
                  width={135}
                  height={158}
                />
              </Box>
              <Box>
                <img
                  src="src/assets/BeckySilkBlazer/BickeySilkBlazer3.jpg"
                  alt=""
                  width={135}
                  height={158}
                />
              </Box>
              <Box >
                <img
                  src="src/assets/BeckySilkBlazer/BeckySilkBlazer4.jpg"
                  alt=""
                  width={135}
                  height={158}
                />
              </Box>
            </Box>
          </Box>
          <Box width={"50%"}>
            <Typography
              variant="h2"
              sx={{
                fontSize: "36px",
                color: "##3c4858",
                fontFamily: "cursive",
                fontWeight: "600",
                marginBottom: "30px",
              }}
            >
              Becky Silk Blazer
            </Typography>
            <Typography
              sx={{ fontSize: "25px", color: "#3c4858", marginBottom: "50px" }}
            >
              $335
            </Typography>
            <Accordion sx={{boxShadow:"none"}}
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1d-content"
                id="panel1d-header"
                sx={{ "&:hover": { color: "#e91e63" } }}
              >
                <Typography>Description</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{fontSize:"14px", lineHeight:"20px"}}>
                  swimsuit has the fit and coverage of a bikini in a one-piece
                  silhouette. This fuchsia style is crafted from the s sculpting
                  peau douce fabric and has flattering cutouts through the torso
                  and back. Wear yours with mirrored sunglasses on vacation.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{boxShadow:"none"}}
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2d-content"
                id="panel2d-header"
                sx={{ "&:hover": { color: "#e91e63" } }}
              >
                <Typography>Designer Information</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  sx={{fontSize:"14px", lineHeight:"20px"}}>
                  An infusion of West Coast cool and New York attitude, Rebecca
                  Minkoff is synonymous with and later expanded her offering
                  with the Rebecca Minkoff Collection - a range of luxe city
                  staples with a.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion  sx={{boxShadow:"none"}}
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3d-content"
                id="panel3d-header"
                sx={{ "&:hover": { color: "#e91e63" } }}
              >
                <Typography>Detial and Care</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography  sx={{fontSize:"14px", lineHeight:"20px"}}>
                  <ul>
                    <li>Storm and midnight-blue stretch cotton-blend</li>
                    <li>
                      Notch lapels, functioning buttoned cuffs, two front flap
                      pockets, single vent, internal pocket
                    </li>
                    <li>Two button fastening</li>
                    <li>84% cotton, 14% nylon, 2% elastane</li>
                    <li>Dry clean</li>
                  </ul>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Grid container spacing={3} sx={{marginTop:"70px"}}>
              <Grid container item sm={"6"}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:"#aaaaaa"}}>
                  Select color
                  </InputLabel>
                  <NativeSelect 
                 
                    defaultValue={30}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                   
                  >
            
                    <option value={1} style={{bgcolor:""}}>Rose</option>
                    <option value={2}>Grey</option>
                    <option value={3}>White</option>
                    
                  </NativeSelect>
                </FormControl>
              </Grid>
              <Grid container item sm={"6"}>
                <FormControl fullWidth>
                  <InputLabel variant="standard" htmlFor="uncontrolled-native" sx={{color:"#aaaaaa"}}>
                  Select size
                  </InputLabel>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: "age",
                      id: "uncontrolled-native",
                    }}
                  >
                    <option value={10}>Small</option>
                    <option value={20}>Medium </option>
                    <option value={30}>Large</option>
                  </NativeSelect>
                </FormControl>
              </Grid>
            </Grid>
            <Box sx={{marginTop:"50px", textAlign:'end'}}>
                <Button endIcon={<ShoppingCartIcon />} sx={{width:"191px", height:"42px", bgcolor:"#e91e63" ,color:"white", borderRadius:"40px","&:hover":{bgcolor:"#e91e63"}}}> Add to Cart</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default BeckySilkBlazer;
