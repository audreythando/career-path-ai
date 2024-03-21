import React from "react";
import { Typography, Container, Stack, Box } from "@mui/material";
import heroImage from "../../assets/hero-image.jpg";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={2} alignItems="center">
          <Typography variant="h4" gutterBottom color="white">
            Discover Your Dream Career Path with AI
          </Typography>
          <Typography variant="body1" color="white">
            Our AI analyzes your interests and skills to recommend the perfect
            career path for you.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
