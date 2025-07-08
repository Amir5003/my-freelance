import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const ContactSection = () => {
  return (
      <Box
        id="contact"
        sx={{
          // my: 10,
          scrollMarginTop: '80px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)',
          // py: 8,
          borderRadius: 6,
          // boxShadow: 6,
        }}
      >
        <Paper
          // elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            background: '#fff',
            borderRadius: 6,
            color: '#1976d2',
            // maxWidth: 700,
            width: '100%',
            mx: 'auto',
            textAlign: 'center',
            boxShadow: 6,
            border: '2px solid #1976d2',
          }}
        >
          <Typography variant="h3" fontWeight={800} gutterBottom sx={{ color: '#1976d2', letterSpacing: 2 }}>
            Contact Me
          </Typography>
          <Typography sx={{ color: '#333', mb: 4, fontSize: 20 }}>
            Ready to get started? Reach out on <b>WhatsApp</b> or <b>Email</b> and let’s discuss your project!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 4, justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#e3f2fd', px: 3, py: 2, borderRadius: 3, minWidth: 250 }}>
              <EmailIcon sx={{ color: '#1976d2', fontSize: 30 }} />
              <Box>
                <Typography sx={{ fontWeight: 700, color: '#1976d2', fontSize: 17 }}>amirsuhel@gmail.com</Typography>
                <Typography variant="caption" sx={{ color: '#555' }}>Email</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: '#e3f2fd', px: 3, py: 2, borderRadius: 3, minWidth: 250 }}>
              <WhatsAppIcon sx={{ color: '#25d366', fontSize: 30 }} />
              <Box>
                <Typography sx={{ fontWeight: 700, color: '#1976d2', fontSize: 17 }}>+91 91607 90120</Typography>
                <Typography variant="caption" sx={{ color: '#555' }}>WhatsApp</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#1976d2',
                color: '#fff',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                fontSize: 16,
                borderRadius: 3,
                boxShadow: 2,
                '&:hover': { bgcolor: '#1565c0', color: '#fff', boxShadow: 4, transform: 'scale(1.04)' },
                transition: 'all 0.2s',
              }}
              href="mailto:amirsuhel@gmail.com"
              startIcon={<EmailIcon />}
            >
              Send Email
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#1976d2',
                color: '#1976d2',
                fontWeight: 700,
                px: 4,
                py: 1.5,
                fontSize: 16,
                borderRadius: 3,
                '&:hover': { bgcolor: '#1976d2', color: '#fff', borderColor: '#1976d2', boxShadow: 2, transform: 'scale(1.04)' },
                transition: 'all 0.2s',
              }}
              href="https://wa.me/919160790120?text=Hi%2C%20I%20want%20a%20website%20at%20low%20cost"
              startIcon={<WhatsAppIcon />}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Me
            </Button>
          </Box>
        </Paper>
      </Box>
  );
};

export default ContactSection;