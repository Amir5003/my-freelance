import React from 'react';
import { Box, Typography, Fade } from '@mui/material';

const Footer = () => {
  return (
    <Fade in={true} timeout={800}>
      <Box py={2} textAlign="center">
        <Typography variant="body2" color="textSecondary">
          © 2025 Amy Coder. All rights reserved.
        </Typography>
      </Box>
    </Fade>
  );
};

export default Footer;