import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function SocialFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
      }}
    >
      <Container maxWidth="xl">
        <Divider sx={{ mb: 3, backgroundColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {/* Copyright */}
          <Typography variant="body2" color="text.secondary">
            © {currentYear} Shuva Das. All rights reserved.
          </Typography>

          {/* Social Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              component="a"
              href="#"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              component="a"
              href="#"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              component="a"
              href="#"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              size="small"
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              component="a"
              href="#"
            >
              <GitHubIcon />
            </IconButton>
          </Stack>

          {/* Links */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Privacy
            </Link>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Terms
            </Link>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Contact
            </Link>
          </Box>
        </Box>

        {/* TMDB Attribution */}
        <Typography
          variant="caption"
          color="text.secondary"
          align="center"
          sx={{
            display: 'block',
            mt: 3,
            pt: 2,
            borderTop: '1px solid rgba(255,255,255,0.1)',
            opacity: 0.7,
          }}
        >
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </Typography>
      </Container>
    </Box>
  );
}

export default SocialFooter;