import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

const NavLandingPage: React.FC = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#222831" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#222831", width: "100%" }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, fontFamily: "Whisper", fontSize: "40px" }}
        >
          Career Path AI
        </Typography>
      </AppBar>
    </Box>
  );
};

export default NavLandingPage;
