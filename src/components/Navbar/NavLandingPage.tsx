import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { useTheme } from "@mui/material/styles";

interface LinkProps {
  to: string;
  label: string;
}

const NavLandingPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250, backgroundColor: "#222831" }} role="presentation">
      <List>
        <ListItem button component="a" href="/signup">
          <ListItemIcon></ListItemIcon>

          <ListItemText primary="Sign Up" />
        </ListItem>

        <ListItem button component="a" href="/login">
          <ListItemIcon></ListItemIcon>

          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", backgroundColor: "#222831" }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#222831", width: "100%" }}
      >
        <Toolbar disableGutters>
          <IconButton
            size="large"
            aria-label="open drawer"
            color="inherit"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, fontFamily: "Whisper", fontSize: "40px" }}
          >
            Career Path AI
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ backgroundColor: "#222831" }}
      >
        <div>
          <Toolbar sx={{ justifyContent: "flex-end" }}>
            <IconButton onClick={handleDrawerToggle}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>

          {drawerContent}
        </div>
      </Drawer>
    </Box>
  );
};

export default NavLandingPage;
