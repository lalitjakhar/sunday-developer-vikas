import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";

import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Checkbox from "@mui/material/Checkbox";
import { Box, FormControlLabel, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";


export default function FruitDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          Open form dialog
        </Button>
        <Dialog
          fullWidth={"md"}
          maxWidth={"md"}
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          }}
        >
          <DialogContent sx={{ display: "flex", gap: "20px", padding: "0" }}>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={(theme) => ({
                position: "absolute",
                right: 8,
                top: 8,
                color: theme.palette.grey[500],
              })}
            >
              <CloseIcon />
            </IconButton>
            <Box
              sx={{
                width: "50%",
                paddingInline: "30px",
                paddingBlock: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <DialogContentText
                sx={{ fontSize: "30px", fontWeight: "700", color: "#000000" }}
              >
                Get 25% Discount
              </DialogContentText>
              <DialogContentText  sx={{ fontSize: "20px", fontWeight: "400", color: "#000000", lineHeight:'25px' }}>
                Subscribe to the mailing list to receive updates on new
                arrivals, special offers and our promotions.
              </DialogContentText>
              <Box sx={{ width: 500, maxWidth: "100%" }}>
                <TextField
                  sx={{ bgcolor: "background.paper" }} // Set background color or any other styles
                  fullWidth
                  label="Email"
                  id="fullWidth"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Typography>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Don't show this popup again" />
              </Typography>
            </Box>

            <Box sx={{ width: "50%" }}>
              <img
                src="src/assets/fruitsdialog/pickbazar02.webp"
                alt=""
                width={"100%"}
              />
            </Box>
          </DialogContent>
        </Dialog>
      </React.Fragment>
    </Box>
  );
}
