// pages/SearchPage.jsx
import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Pagination,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MovieGrid from '../components/MovieGrid';
import { searchMovies, getMovieDetails } from '../api/movies';
import RecommendationBundle from '../components/RecommendationBundle';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [page, setPage] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const { data: searchResults, isLoading, error } = useQuery({
    queryKey: ['search', query, page],
    queryFn: () => searchMovies(query, page),
    enabled: !!query,
  });

  const { data: movieDetails } = useQuery({
    queryKey: ['movieDetails', selectedMovie?.id],
    queryFn: () => getMovieDetails(selectedMovie?.id),
    enabled: !!selectedMovie?.id,
  });

  useEffect(() => {
    if (searchResults?.results?.[0] && !selectedMovie) {
      setSelectedMovie(searchResults.results[0]);
    }
  }, [searchResults]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput });
      setPage(1);
      setSelectedMovie(null);
      setShowRecommendations(false);
    }
  };

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setShowRecommendations(true);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <form onSubmit={handleSearch}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search for movies..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              size="large"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              startIcon={<SearchIcon />}
              size="large"
            >
              Search
            </Button>
          </Box>
        </form>
      </Box>

      {query && (
        <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
          {/* Search Results Sidebar */}
          <Box sx={{ width: 300, flexShrink: 0 }}>
            <Paper elevation={3}>
              <Typography variant="h6" sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
                Search Results
              </Typography>
              <List sx={{ maxHeight: 500, overflow: 'auto' }}>
                {searchResults?.results?.map((movie) => (
                  <React.Fragment key={movie.id}>
                    <ListItem
                      button
                      selected={selectedMovie?.id === movie.id}
                      onClick={() => handleMovieSelect(movie)}
                    >
                      <ListItemText
                        primary={movie.title}
                        secondary={movie.release_date ? new Date(movie.release_date).getFullYear() : ''}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                ))}
              </List>
              {searchResults?.total_pages > 1 && (
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
                  <Pagination
                    count={Math.min(searchResults.total_pages, 10)}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                  />
                </Box>
              )}
            </Paper>
          </Box>

          {/* Main Content Area */}
          <Box sx={{ flex: 1 }}>
            {selectedMovie && (
              <>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h5" gutterBottom>
                    Selected: {selectedMovie.title}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setShowRecommendations(!showRecommendations)}
                  >
                    {showRecommendations ? 'Hide' : 'Show'} Recommendations
                  </Button>
                </Box>

                {showRecommendations && movieDetails && (
                  <RecommendationBundle
                    query={selectedMovie.title}
                    movieDetails={movieDetails}
                  />
                )}

                {!showRecommendations && (
                  <MovieGrid
                    movies={searchResults?.results || []}
                    title="Search Results"
                  />
                )}
              </>
            )}
          </Box>
        </Box>
      )}
    </Container>
  );
}

export default SearchPage;