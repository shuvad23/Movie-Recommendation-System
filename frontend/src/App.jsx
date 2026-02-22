import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import SearchPage from './pages/SearchPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import theme from './theme';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, py: 3 }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movie/:id" element={<MoviePage />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;