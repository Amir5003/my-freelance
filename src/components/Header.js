import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const HeaderButton = ({ children, onClick }) => (
  <Button
    variant="outlined"
    color="#ffffff"
    sx={{
      mx: 1,
      borderRadius: 3,
      fontWeight: 600,
      textTransform: 'none',
      transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
      '&:hover': {
        transform: 'scale(1.08)',
        boxShadow: 3,
      },
    }}
    onClick={onClick}
  >
    {children}
  </Button>
);

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Amy Coder
        </Typography>
        <Box>
          <HeaderButton color="inherit" onClick={() => scrollToSection('about')}>About</HeaderButton>
          <HeaderButton color="inherit" onClick={() => scrollToSection('services')}>Services</HeaderButton>
          <HeaderButton color="inherit" onClick={() => scrollToSection('steps')}>How It Works</HeaderButton>
          <HeaderButton color="inherit" onClick={() => scrollToSection('contact')}>Contact</HeaderButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;