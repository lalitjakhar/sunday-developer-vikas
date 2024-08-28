import { Box, Typography, Container } from "@mui/material";

import { styled } from "@mui/system";
import { Tabs } from "@mui/base/Tabs";
import { TabsList as BaseTabsList } from "@mui/base/TabsList";
import { buttonClasses } from "@mui/base/Button";
import { Tab as BaseTab, tabClasses } from "@mui/base/Tab";
import { grey } from "@mui/material/colors";
import { TabPanel } from "@mui/base";
import MonthlyPricing from "./MonthlyPricing";
import QuaterlyPricing from "./QuaterlyPricing";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#8A2BE2",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

const Tab = styled(BaseTab)`
  font-family: "IBM Plex Sans", sans-serif;
  color: #00000;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  line-height: 1.5;
  padding: 8px 12px;
  margin: 6px;
  border: none;
  border-radius: 16px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[500]};
  }

  &:focus {
    color: #fff;
    outline: 3px solid ${blue[400]};
  }

  &.${tabClasses.selected} {
    color: #fff;
    background-color: ${blue[500]};
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
    min-width: 600px;
    background-color: ${grey[200]};
    border-radius: 22px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${
      theme.palette.mode === "dark" ? "rgba(0,0,0, 0.4)" : "rgba(0,0,0, 0.2)"
    };
    `
);

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
          <Tabs
            defaultValue={1}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TabsList>
              <Tab value={1}>Monthly Pricing</Tab>
              <Tab value={2}>Quaterly Pricing</Tab>
            </TabsList>
            <TabPanel value={1}>
              <MonthlyPricing />
            </TabPanel>
            <TabPanel value={2}>
              <QuaterlyPricing />
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
    </div>
  );
};

export default PricingCard;
