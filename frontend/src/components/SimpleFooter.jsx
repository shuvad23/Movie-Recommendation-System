import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function SimpleFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} Shuva Das. All rights reserved.
        </Typography>
        <Typography variant="caption" color="text.secondary" align="center" sx={{ display: 'block', mt: 1 }}>
          Data provided by TMDB API
        </Typography>
      </Container>
    </Box>
  );
}

export default SimpleFooter;