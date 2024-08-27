import { Box, Typography, Container, Button } from "@mui/material";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";

import { Tab } from "@mui/base/Tab";
import CheckIcon from "@mui/icons-material/Check";

const PricingCard = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3">Choose your right plan</Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
            quod?
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Tabs defaultValue={1}>
            <TabsList>
              <Tab value={1}>One</Tab>
              <Tab value={2}>Two</Tab>
              <Tab value={3}>Three</Tab>
            </TabsList>
          </Tabs>
        </Box>
        <Box className="pricingcard" sx={{ width:"100%", display: "flex", gap: "25px", paddingBlock:"50px" }}>
            


          <Box className="pricingcard1"
            sx={{
                width:"33%",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              borderRadius:"20px",
              boxShadow:"3"
            }}
          >
            <Box>
              <Button
                sx={{
                  bgcolor: "#4287f5",
                  color: "white",
                  borderRadius: "10px",
                  marginBottom: "14px",
                }}
              >
                {" "}
                Pro
              </Button>
              <Typography sx={{ color: "rgba(33, 37, 41, 0.5)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam quasi voluptatibus atque deleniti ipsum enim quos .
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid rgba(33, 37, 41, 0.5)",
                paddingBottom: "40px",
              }}
            >
              <Typography>
                <span
                  style={{
                    fontSize: "30px",
                    color: "black",
                    fontWeight: "800",
                  }}
                >
                  $2500{" "}
                </span>
                <span style={{ color: "rgba(33, 37, 41, 0.5)" }}>/month</span>
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid rgba(33, 37, 41, 0.5)",
                paddingBottom: "120px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem.py
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem, ipsum
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  bgcolor: "white",
                  width: "100%",
                  border: "1px solid rgba(33, 37, 41, 0.5)",
                  color: "black",
                  textTransform: "none",
                }}
              >
                get started
              </Button>
            </Box>
          </Box>





          <Box className="pricingcard1"
            sx={{
                width:"33%",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              borderRadius:"30px",
              boxShadow:"3"
            }}
          >
            <Box>
              <Button
                sx={{
                  bgcolor: "#4287f5",
                  color: "white",
                  borderRadius: "10px",
                  marginBottom: "14px",
                }}
              >
                {" "}
                Pro Plus
              </Button>
              <Typography sx={{ color: "rgba(33, 37, 41, 0.5)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam quasi 
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid rgba(33, 37, 41, 0.5)",
                paddingBottom: "15px",
              }}
            >
              <Typography>
                <span
                  style={{
                    fontSize: "30px",
                    color: "black",
                    fontWeight: "800",
                  }}
                >
                  $3800{" "}
                </span>
                <span style={{ color: "rgba(33, 37, 41, 0.5)" }}>/month</span>
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid rgba(33, 37, 41, 0.5)",
                paddingBottom: "98px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem.py
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem, ipsum
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem, ipsum
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  bgcolor: "white",
                  width: "100%",
                  border: "1px solid rgba(33, 37, 41, 0.5)",
                  color: "black",
                  textTransform: "none",
                }}
              >
                get started
              </Button>
            </Box>
          </Box>





          <Box className="pricingcard1"
            sx={{
                width:"33%",
              padding: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              borderRadius:"30px",
              boxShadow:"3"
            }}
          >
            <Box>
              <Button
                sx={{
                  bgcolor: "#4287f5",
                  color: "white",
                  borderRadius: "10px",
                  marginBottom: "14px",
                }}
              >
                {" "}
               Custom
              </Button>
              <Typography sx={{ color: "rgba(33, 37, 41, 0.5)" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam quasi voluptatibus atque deleniti ipsum enim quos .
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid rgba(33, 37, 41, 0.5)",
                paddingBottom: "40px",
              }}
            >
              <Typography>
                <span
                  style={{
                    fontSize: "30px",
                    color: "black",
                    fontWeight: "800",
                  }}
                >
                 Lets Talks!{" "}
                </span>
               
              </Typography>
            </Box>
            <Box
              sx={{
                borderBottom: "1px solid rgba(33, 37, 41, 0.5)",
                paddingBottom: "84px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem, ipsum
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem.py
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround
              </Typography>
              <Typography>
                {" "}
                <CheckIcon /> 3-5 days turnaround Lorem, ipsum
              </Typography>
            </Box>

            <Box>
              <Button
                sx={{
                  width: "100%",
                  border: "1px solid rgba(33, 37, 41, 0.5)",
                  color: "white",
                  textTransform: "none",
                  bgcolor:"black"
                }}
              >
                Book a call
              </Button>
            </Box>
          </Box>

        </Box>
      </Container>
    </div>
  );
};

export default PricingCard;
