# 🎬 Movie Recommendation System

A full-stack movie recommendation application that combines **content-based filtering (TF-IDF)** with **TMDB API data** to provide personalized movie suggestions.

![Movie Recommender Demo]([https://via.placeholder.com/800x400.png?text=Movie+Recommender+Demo](https://movieprema.netlify.app/))

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation](#installation)
- [Running Locally](#running-locally)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## 🎯 Overview

This movie recommendation system uses two approaches to suggest movies:

1. **Content-Based Filtering**: Uses TF-IDF vectorization on movie descriptions to find similar movies.  
2. **TMDB Integration**: Fetches real-time movie data, posters, and genre-based recommendations.

The application consists of a **FastAPI backend** and a **React frontend** with a modern, responsive UI.

---

## ✨ Features

### Backend
- **TF-IDF Based Recommendations** for content-based filtering  
- **TMDB API Integration** for real-time movie data, posters, and metadata  
- **RESTful API** with well-documented endpoints  
- **CORS Support** for cross-origin requests  
- **Async Operations** for fast API responses  

### Frontend
- **Responsive Design** for desktop, tablet, and mobile  
- **Dark Theme** inspired by Netflix  
- **Movie Search** with real-time suggestions  
- **Movie Details** view with comprehensive information  
- **Smart Recommendations**: TF-IDF and genre-based  
- **Infinite Scrolling** for smooth pagination  
- **Loading States**: Skeleton loaders and progress indicators  

---

## 🛠️ Tech Stack

### Backend
- **Framework**: FastAPI  
- **Language**: Python 3.9+  
- **ML/Dependencies**: scikit-learn, pandas, numpy  
- **HTTP Client**: httpx (async requests)  
- **Data Source**: TMDB API  

### Frontend
- **Framework**: React 18  
- **UI Library**: Material-UI (MUI) v5  
- **State Management**: React Query (TanStack Query)  
- **Routing**: React Router v6  
- **HTTP Client**: Fetch API  
- **Styling**: Emotion (CSS-in-JS)  

### Deployment
- **Backend Hosting**: Render.com  
- **Frontend Hosting**: Netlify / Vercel  
- **Version Control**: Git / GitHub  

---

## 🏗️ Architecture
┌─────────────┐ ┌──────────────┐ ┌─────────────┐
│ React │────▶│ FastAPI │────▶│ TMDB API │
│ Frontend │◀────│ Backend │◀────│ │
└─────────────┘ └──────────────┘ └─────────────┘
│
▼
┌─────────────┐
│ TF-IDF │
│ Model │
└─────────────┘


### Data Flow
1. User interacts with React frontend  
2. Frontend calls FastAPI backend  
3. Backend either:
   - Fetches data from TMDB API  
   - Computes recommendations using TF-IDF model  
4. Results returned to frontend and displayed  

---

## 📦 Installation

### Prerequisites
- Python 3.9+  
- Node.js 16+  
- npm or yarn  
- TMDB API Key (free)  

