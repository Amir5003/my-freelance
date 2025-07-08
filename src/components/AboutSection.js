import React from 'react';
import { Box, Typography, Fade } from '@mui/material';

const AboutSection = () => {
  return (
    <Fade in={true} timeout={800}>
      <Box my={6} id="about" sx={{ scrollMarginTop: '80px' }}>
        <Typography variant="h5" gutterBottom>
          About Me
        </Typography>
        <Typography>
          Hi, I’m Amir Suhel, a freelance web developer offering professional websites at low cost. Whether you’re a student, entrepreneur, or shop owner — I help you go online quickly and affordably.
        </Typography>
      </Box>
    </Fade>
  );
};

export default AboutSection;