// components/Navbar.jsx
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  Container,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <AppBar position="sticky" color="default" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              flexGrow: 1,
            }}
            onClick={() => navigate('/')}
          >
            <MovieIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                color: 'primary.main',
                textDecoration: 'none',
              }}
            >
              MoviePrema
            </Typography>
          </Box>

          <form onSubmit={handleSearch}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search movies…"
                inputProps={{ 'aria-label': 'search' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Search>
          </form>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;