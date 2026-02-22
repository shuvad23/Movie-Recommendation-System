// components/MovieGrid.jsx
import React from 'react';
import { Grid, Box, Typography, CircularProgress } from '@mui/material';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, title, loading, error }) => {
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" sx={{ py: 4 }}>
        Error loading movies: {error.message}
      </Typography>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <Typography align="center" sx={{ py: 4 }}>
        No movies found
      </Typography>
    );
  }

  return (
    <Box sx={{ py: 3 }}>
      {title && (
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
      )}
      <Grid container spacing={3}>
        {movies.map((movie) => (
          <Grid item key={movie.tmdb_id || movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieGrid;