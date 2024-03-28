import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Stack,
  Grid,
  TextField,
  Button,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Hero from "../../assets/lp.png";

const LandingPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "#222831",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img src={Hero} alt="Hero" width="100%" />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={2}>
            <Typography
              variant="h4"
              gutterBottom
              color="whitesmoke"
              sx={{ marginTop: { xs: 0, md: "300px" } }}
            >
              Discover hidden career paths you might not have considered.
            </Typography>
            <Typography variant="body1" color="primary">
              Gain insights into the skills and experience needed for your dream
              job. Get personalized recommendations for learning resources and
              development opportunities. Save time and effort in your career
              exploration journey.
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              {/* <Button
                variant="contained"
                color="primary"
                sx={{ marginRight: 2 }}
              >
                Sign Up Now
              </Button> */}
              <Button
                variant="contained"
                color="primary"
                sx={{ marginLeft: 2 }}
              >
                Login
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
