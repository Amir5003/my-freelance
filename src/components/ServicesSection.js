import React from 'react';
import { Grid, Card, CardContent, Typography, Box, Zoom } from '@mui/material';

const services = [
  { title: 'Portfolio Website', desc: 'For students, freelancers, or resumes.' },
  { title: 'Business Website', desc: 'Landing page for your store or service.' },
  { title: 'Product Showcase', desc: 'One-page product site.' },
  { title: 'Blog Setup', desc: 'Launch your own blog site.' }
];

const ServicesSection = () => {
  return (
    <Box my={6} id="services" sx={{ scrollMarginTop: '80px' }}>
      <Typography variant="h5" align="center" gutterBottom>
        What I Offer
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Zoom in={true} style={{ transitionDelay: `${index * 100}ms` }}>
              <Card elevation={2}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{service.title}</Typography>
                  <Typography>{service.desc}</Typography>
                </CardContent>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;