// pages/HomePage.jsx
import React, { useState } from 'react';
import {
  Container,
  Tabs,
  Tab,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import MovieGrid from '../components/MovieGrid';
import { fetchHomeMovies } from '../api/movies';

const categories = [
  { value: 'popular', label: 'Popular' },
  { value: 'top_rated', label: 'Top Rated' },
  { value: 'upcoming', label: 'Upcoming' },
  { value: 'now_playing', label: 'Now Playing' },
  { value: 'trending', label: 'Trending' },
];

function HomePage() {
  const [category, setCategory] = useState('popular');
  const [limit] = useState(24);

  const { data: movies, isLoading, error } = useQuery({
    queryKey: ['homeMovies', category, limit],
    queryFn: () => fetchHomeMovies(category, limit),
  });

  const handleCategoryChange = (event, newValue) => {
    setCategory(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs
          value={category}
          onChange={handleCategoryChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((cat) => (
            <Tab key={cat.value} label={cat.label} value={cat.value} />
          ))}
        </Tabs>
      </Box>

      <MovieGrid
        movies={movies}
        loading={isLoading}
        error={error}
      />
    </Container>
  );
}

export default HomePage;