import React, { useState } from "react";
import {
  AppBar,
  Box,
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

const NavLandingPage: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button component="a" href="/signup">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Sign Up" sx={{ color: "whitesmoke" }} />
        </ListItem>
        <ListItem button component="a" href="/login">
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Login" sx={{ color: "whitesmoke" }} />
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
          {isMobile && (
            <IconButton
              size="large"
              aria-label="open drawer"
              color="inherit"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          )}
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
        sx={{ "& .MuiDrawer-paper": { backgroundColor: "#222831" } }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default NavLandingPage;
