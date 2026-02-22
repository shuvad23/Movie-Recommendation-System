// pages/MoviePage.jsx
import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Chip,
  Rating,
  Divider,
  Paper,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovieDetails, getGenreRecommendations } from '../api/movies';
import MovieGrid from '../components/MovieGrid';
import RecommendationBundle from '../components/RecommendationBundle';

function MoviePage() {
  const { id } = useParams();

  const { data: movie, isLoading, error } = useQuery({
    queryKey: ['movie', id],
    queryFn: () => getMovieDetails(id),
  });

  const { data: genreRecs } = useQuery({
    queryKey: ['genreRecs', id],
    queryFn: () => getGenreRecommendations(id, 12),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (error || !movie) {
    return (
      <Container>
        <Typography color="error">Error loading movie details</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl">
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: 400,
          mb: 4,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={movie.backdrop_url || 'https://via.placeholder.com/1280x720'}
          alt={movie.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            p: 4,
          }}
        >
          <Typography variant="h2" color="white">
            {movie.title}
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 2 }}>
            <Rating value={movie.vote_average / 2} precision={0.5} readOnly />
            <Typography color="white">{movie.vote_average?.toFixed(1)}/10</Typography>
            <Typography color="white">
              {movie.release_date && new Date(movie.release_date).getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Grid container spacing={4}>
        {/* Poster and Details */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3}>
            <Box
              component="img"
              src={movie.poster_url || 'https://via.placeholder.com/500x750'}
              alt={movie.title}
              sx={{ width: '100%', borderRadius: 1 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          {/* Overview */}
          <Typography variant="h5" gutterBottom>
            Overview
          </Typography>
          <Typography paragraph>
            {movie.overview || 'No overview available.'}
          </Typography>

          {/* Genres */}
          <Box sx={{ my: 2 }}>
            <Typography variant="h6" gutterBottom>
              Genres
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {movie.genres?.map((genre) => (
                <Chip key={genre.id} label={genre.name} color="primary" />
              ))}
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* TF-IDF Recommendations */}
          <RecommendationBundle
            query={movie.title}
            movieDetails={movie}
          />

          {/* Genre Recommendations */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              More in {movie.genres?.[0]?.name || 'This Genre'}
            </Typography>
            <MovieGrid movies={genreRecs} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MoviePage;