// components/MovieCard.jsx
import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, tmdbId }) => {
  const navigate = useNavigate();
  const id = tmdbId || movie?.tmdb_id;
  const title = movie?.title || movie?.original_title;
  const posterPath = movie?.poster_url || movie?.poster_path;
  const rating = movie?.vote_average || movie?.voteAverage;
  const releaseDate = movie?.release_date || movie?.releaseDate;

  const handleClick = () => {
    if (id) {
      navigate(`/movie/${id}`);
    }
  };

  return (
    <Card onClick={handleClick} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="300"
        image={posterPath || 'https://via.placeholder.com/300x450?text=No+Poster'}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3" noWrap>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
          {rating && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating value={rating / 2} precision={0.5} readOnly size="small" />
              <Typography variant="body2" sx={{ ml: 1 }}>
                {rating.toFixed(1)}
              </Typography>
            </Box>
          )}
          {releaseDate && (
            <Chip
              label={new Date(releaseDate).getFullYear()}
              size="small"
              variant="outlined"
            />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;