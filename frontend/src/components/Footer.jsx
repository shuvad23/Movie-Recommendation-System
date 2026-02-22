import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
    >
      <Container maxWidth="xl">
        <Divider sx={{ mb: 3, backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Shuva Das. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link href="#" color="text.secondary" underline="hover">
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Terms of Service
            </Link>
            <Link href="#" color="text.secondary" underline="hover">
              Contact
            </Link>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            Powered by TMDB API
          </Typography>
        </Box>
        
        <Typography 
          variant="caption" 
          color="text.secondary" 
          align="center" 
          sx={{ 
            display: 'block', 
            mt: 2,
            opacity: 0.7 
          }}
        >
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;