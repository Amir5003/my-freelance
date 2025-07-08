import React from 'react';
import { Box, Typography, Grow } from '@mui/material';

const StepsSection = () => {
  return (
    <Grow in={true} timeout={1000}>
      <Box my={6} id="steps" sx={{ scrollMarginTop: '80px' }}>
        <Typography variant="h5" gutterBottom>
          How It Works
        </Typography>
        <ol style={{ paddingLeft: '1.2rem', lineHeight: '2rem' }}>
          <li>Contact me via WhatsApp or Email</li>
          <li>Tell me your idea</li>
          <li>Website ready in 2–3 days</li>
          <li>Pay after you're satisfied</li>
        </ol>
      </Box>
    </Grow>
  );
};

export default StepsSection;