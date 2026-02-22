// components/RecommendationBundle.jsx
import React from 'react';
import { Box, Typography, Grid, Paper, Rating } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getSearchBundle } from '../api/movies';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

const RecommendationBundle = ({ query, movieDetails }) => {
  const navigate = useNavigate();
  const { data: bundle, isLoading, error } = useQuery({
    queryKey: ['bundle', query, movieDetails?.tmdb_id],
    queryFn: () => getSearchBundle(query),
    enabled: !!query,
  });

  if (isLoading) {
    return <Typography>Loading recommendations...</Typography>;
  }

  if (error) {
    return (
      <Typography color="error" sx={{ py: 2 }}>
        Error loading recommendations
      </Typography>
    );
  }

  if (!bundle) {
    return null;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        You Might Also Like
      </Typography>

      <Grid container spacing={3}>
        {bundle.tfidf_recommendations?.map((rec, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                cursor: 'pointer',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
              onClick={() => rec.tmdb?.tmdb_id && navigate(`/movie/${rec.tmdb.tmdb_id}`)}
            >
              {rec.tmdb ? (
                <MovieCard movie={rec.tmdb} tmdbId={rec.tmdb.tmdb_id} />
              ) : (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    {rec.title}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={rec.score} max={1} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {(rec.score * 100).toFixed(0)}% match
                    </Typography>
                  </Box>
                </Box>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecommendationBundle;