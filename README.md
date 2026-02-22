# 🎬 Movie Recommendation System

<div align="center">

![Movie Recommender System](https://media.licdn.com/dms/image/v2/C5612AQH3iHcmYUpKQw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1594566576732?e=1773273600&v=beta&t=DlNNT13Gr8MjWbEpTg_z--PyI-HVrCp_imWQJnSYxZ0)

[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.111.0-green.svg)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18.2.0-61dafb.svg)](https://reactjs.org)
[![MUI](https://img.shields.io/badge/MUI-5.14.20-007FFF.svg)](https://mui.com)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge/deploy-status)](https://app.netlify.com)

A sophisticated full-stack movie recommendation engine combining **machine learning-powered content-based filtering** with **real-time TMDB API data** to deliver personalized movie suggestions.

[Live Demo](https://movieprema.netlify.app/) • [API Documentation](https://movie-recommendation-system-wt1o.onrender.com/docs) • [Report Bug](https://github.com/yourusername/movie-recommendation-system/issues)

</div>

---

## 📋 Table of Contents

- [✨ Key Features](#-key-features)
- [🏗️ System Architecture](#️-system-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [⚙️ Configuration](#️-configuration)
- [🎯 API Documentation](#-api-documentation)
- [🧠 Machine Learning Pipeline](#-machine-learning-pipeline)
- [🎨 Frontend Components](#-frontend-components)
- [📊 Performance Metrics](#-performance-metrics)
- [🌐 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

---

## ✨ Key Features

### 🎯 **Dual Recommendation Engine**
- **Content-Based Filtering**: TF-IDF vectorization + Cosine Similarity on movie descriptions
- **Genre-Based Discovery**: Real-time TMDB API integration for genre-specific recommendations
- **Hybrid Results**: Combined outputs for comprehensive suggestions

### 🔍 **Advanced Search Capabilities**
- Fuzzy search with typo tolerance
- Real-time suggestions as you type
- Multi-criteria filtering (title, year, genre)
- Paginated results with infinite scroll

### 📊 **Rich Movie Data**
- High-quality posters and backdrops
- Detailed metadata (runtime, ratings, languages)
- Cast and crew information
- Trailer links and similar movies

### 🎨 **Modern UI/UX**
- Netflix-inspired dark theme
- Fully responsive design
- Smooth animations and transitions
- Skeleton loading states
- Progressive image loading

### ⚡ **Performance Optimizations**
- Pre-computed similarity matrix for O(1) recommendations
- Async API calls with connection pooling
- React Query for intelligent caching
- Lazy loading of components and images

---


---

## 🛠️ Tech Stack

### **Backend**
| Technology | Version | Purpose |
|------------|---------|---------|
| [FastAPI](https://fastapi.tiangolo.com) | 0.111.0 | High-performance async web framework |
| [Python](https://python.org) | 3.9+ | Core programming language |
| [scikit-learn](https://scikit-learn.org) | 1.4.0 | TF-IDF vectorization & similarity |
| [pandas](https://pandas.pydata.org) | 2.2.0 | Data manipulation and analysis |
| [numpy](https://numpy.org) | 1.26.0 | Numerical operations |
| [httpx](https://www.python-httpx.org) | 0.27.0 | Async HTTP client for TMDB API |
| [python-dotenv](https://github.com/theskumar/python-dotenv) | 1.0.1 | Environment variable management |

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://reactjs.org) | 18.2.0 | UI library |
| [Material-UI](https://mui.com) | 5.14.20 | Component library & styling |
| [React Query](https://tanstack.com/query) | 5.12.2 | Data fetching & caching |
| [React Router](https://reactrouter.com) | 6.20.1 | Navigation & routing |
| [Emotion](https://emotion.sh) | 11.11.0 | CSS-in-JS styling |
| [MUI Icons](https://mui.com/material-ui/icons) | 5.14.19 | Icon components |

### **DevOps & Deployment**
| Tool | Purpose |
|------|---------|
| [Git](https://git-scm.com) | Version control |
| [GitHub](https://github.com) | Code hosting |
| [Render](https://render.com) | Backend hosting (free tier) |
| [Netlify](https://netlify.com) | Frontend hosting (free tier) |
| [TMDB API](https://developers.themoviedb.org/3) | Movie data source |

---

