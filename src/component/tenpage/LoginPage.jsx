import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Fade,
  Typography,
  InputAdornment,
  FormControl,
  Input,
} from "@mui/material";
import React from "react";
import ViewDayIcon from "@mui/icons-material/ViewDay";
import GridOnIcon from "@mui/icons-material/GridOn";
import ViewCarouselSharpIcon from "@mui/icons-material/ViewCarouselSharp";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import FaceIcon from "@mui/icons-material/Face";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import HttpsIcon from "@mui/icons-material/Https";
import FavoriteIcon from "@mui/icons-material/Favorite";

const LoginPage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box className="loginpage">
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Button sx={{ color: "#ffffff", textTransform: "none" }}>
                  Metrial kit PRO React
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box>
                  <Button
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    startIcon={<GridOnIcon />}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{ color: "#ffffff" }}
                  >
                    COMPONENT
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <Button
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    startIcon={<ViewDayIcon />}
                    endIcon={<ArrowDropDownIcon />}
                    sx={{ color: "#ffffff" }}
                  >
                    SECTIONS
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <Button
                    id="fade-button"
                    aria-controls={open ? "fade-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    endIcon={
                      <ArrowDropDownIcon sx={{ transform: "rotate(180deg)" }} />
                    }
                    startIcon={
                      <ViewCarouselSharpIcon
                        sx={{ fontSize: "25px !important" }}
                      />
                    }
                    sx={{ color: "#ffffff " }}
                  >
                    EXAMPLES
                  </Button>
                  <Menu
                    id="fade-menu"
                    MenuListProps={{
                      "aria-labelledby": "fade-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </Box>
                <Box>
                  <Button
                    sx={{
                      bgcolor: "#ffffff",
                      color: "#999999",
                      width: "133px",
                      height: "44px",
                      borderRadius: "30px",
                      "&:hover": { bgcolor: "#ffffff" },
                    }}
                    startIcon={<ShoppingCartSharpIcon />}
                  >
                    buy now
                  </Button>
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "600px",
          }}
        >
          <Box
            sx={{
              width: "350px",
              height: "448px",
              bgcolor: "#ffffff",
              boxShadow: "3",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "310px",
                height: "144px",
                border: "1p solid black",
                bgcolor: "#8e24aa",
                position: "absolute",
                bottom: "340px",
                borderRadius: "5px",
                left: "20px",
              }}
            >
              <Box
                sx={{
                  height: "144px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "20px",
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "18px",
                    fontWeight: "600px",
                    color: "#ffffff",
                  }}
                >
                  Login
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "30px",
                  }}
                >
                  <Box>
                    <GoogleIcon />
                  </Box>
                  <Box>
                    <TwitterIcon />
                  </Box>
                  <Box>
                    <FacebookIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box height={{ height: "448px" }}>
              <Typography sx={{ marginTop: "128px", textAlign: "center" }}>
                Or Be Classical
              </Typography>
              <Box
                textAlign={"center"}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  padding: "30px",
                }}
              >
                <FormControl variant="standard">
                  <Input
                    type="text..."
                    placeholder="Name..."
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <FaceIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="standard">
                  <Input
                    type="email"
                    placeholder="Email...."
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <MarkEmailUnreadIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl variant="standard">
                  <Input
                    type="passward"
                    placeholder="Passward"
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <HttpsIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  sx={{ width: "160px", height: "54px", color: "#9c27b0" }}
                >
                  Get started
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
        <AppBar
          position="static"
          sx={{ bgcolor: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="lg">
            <Toolbar
              disableGutters
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box>
                <Button sx={{ color: "#ffffff", textTransform: "none" }}>
                  CREATIEVE TIM
                </Button>
                <Button sx={{ color: "#ffffff", textTransform: "none" }}>
                  ABOUT US
                </Button>
                <Button sx={{ color: "#ffffff", textTransform: "none" }}>
                  BLOG
                </Button>
                <Button sx={{ color: "#ffffff", textTransform: "none" }}>
                  LICENSES
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography>© 2024 , made with</Typography>
                <Button startIcon={<FavoriteIcon />} sx={{ color: "white" }}>
                  {" "}
                  by Creative Tim for a better web
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </>
  );
};
export default LoginPage;
