import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'How It Works', id: 'steps' },
  { label: 'Contact', id: 'contact' },
];

const HeaderButton = ({ children, onClick }) => (
  <Button
    variant="outlined"
    color="inherit"
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
      display: { xs: 'none', md: 'inline-flex' }, // Hide on mobile
    }}
    onClick={onClick}
  >
    {children}
  </Button>
);

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 800 }}>
          Amy Coder
        </Typography>
        {/* Desktop Nav */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navLinks.map((link) => (
            <HeaderButton key={link.id} onClick={() => scrollToSection(link.id)}>
              {link.label}
            </HeaderButton>
          ))}
        </Box>
        {/* Mobile Hamburger */}
        <IconButton
          color="inherit"
          edge="end"
          sx={{ display: { xs: 'inline-flex', md: 'none' } }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        {/* Side Drawer for Mobile */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: { width: 220, bgcolor: '#1976d2', color: '#fff' },
          }}
        >
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.id} disablePadding>
                <ListItemButton onClick={() => scrollToSection(link.id)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Header;