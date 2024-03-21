import React from "react";
import { Typography, Container, Stack, Box, useTheme } from "@mui/material";
import heroImage from "../../assets/lp.png";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#222831",
        width: "100%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
          height: "300px", // Adjust height for smaller screens
        },
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" gutterBottom color="white">
            "Empowering futures through personalized career matches."
          </Typography>
          <Typography variant="body1" color="white">
            "Embark on a journey of self-discovery and professional fulfillment
            with our AI-powered career matchmaking platform. Say goodbye to
            uncertainty and hello to confidence as our hero AI algorithm works
            tirelessly to uncover your true passions, skills, and aspirations.
            Whether you're a recent graduate stepping into the workforce or a
            seasoned professional seeking a new direction, our platform is your
            beacon of light in the maze of career options. Let us guide you to a
            future where your potential meets purpose, one personalized career
            path at a time. Your success story starts here."
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
