import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TVShowDetail from "./pages/TVShowDetail";
import "./index.css";

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/tv" />} />
      <Route path="/movies" element={<Home activeTab="movies" />} />
      <Route path="/tv" element={<Home activeTab="tv" />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/tv/:id" element={<TVShowDetail />} />
    </Routes>
  </Router>
);

export default App;
