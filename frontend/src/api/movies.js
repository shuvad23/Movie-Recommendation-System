// api/movies.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

async function fetchAPI(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}

export async function fetchHomeMovies(category = 'popular', limit = 24) {
  return fetchAPI(`/home?category=${category}&limit=${limit}`);
}

export async function searchMovies(query, page = 1) {
  return fetchAPI(`/tmdb/search?query=${encodeURIComponent(query)}&page=${page}`);
}

export async function getMovieDetails(tmdbId) {
  return fetchAPI(`/movie/id/${tmdbId}`);
}

export async function getSearchBundle(query) {
  return fetchAPI(`/movie/search?query=${encodeURIComponent(query)}&tfidf_top_n=12&genre_limit=12`);
}

export async function getGenreRecommendations(tmdbId, limit = 12) {
  return fetchAPI(`/recommend/genre?tmdb_id=${tmdbId}&limit=${limit}`);
}

export async function getTfidfRecommendations(title, topN = 10) {
  return fetchAPI(`/recommend/tfidf?title=${encodeURIComponent(title)}&top_n=${topN}`);
}