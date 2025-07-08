import React from 'react';
import { Box, Typography, Button, Slide } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const HeroSection = ()=> {
  return (
    <Slide direction="down" in={true} timeout={700}>
      <Box textAlign="center" py={10} bgcolor="#1976d2" color="white" borderRadius={4} mt={2}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Affordable Websites Starting at ₹999
        </Typography>
        <Typography variant="h6" mb={3}>
          Build your online presence in just 3 days
        </Typography>
        <Button
  variant="contained"
  sx={{
    bgcolor: '#baff39',
    color: '#1976d2',
    fontWeight: 700,
    px: 4,
    py: 1.5,
    fontSize: 18,
    boxShadow: 4,
    borderRadius: 3,
    '&:hover': {
      bgcolor: '#d4ff70',
      color: '#0d47a1',
      boxShadow: 8,
      transform: 'scale(1.04)',
    },
    transition: 'all 0.2s',
  }}
  href="https://wa.me/919160790120?text=Hi%2C%20I%20need%20a%20website"
  startIcon={<WhatsAppIcon />}
  target="_blank"
  rel="noopener noreferrer"
>
  Get Started on WhatsApp
</Button>
      </Box>
    </Slide>
  );
};

export default HeroSection;