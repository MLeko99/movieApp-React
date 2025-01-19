import React, { useEffect, useState } from "react";
import { fetchTopMovies, searchContent } from "../api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import "../styles/MovieList.css";

const MovieList = () => {
  const searchQuery = useSelector((state) => state.app.searchQuery);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (searchQuery && searchQuery.length >= 3) {
      searchContent("movie", searchQuery)
        .then((res) => setMovies(Array.isArray(res) ? res : []))
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Greška pri dohvaćanju rezultata pretrage.");
        })
        .finally(() => setLoading(false));
    } else {
      fetchTopMovies()
        .then((data) => setMovies(Array.isArray(data) ? data : []))
        .catch((error) => {
          console.error("Error fetching top movies:", error);
          setError("Greška pri dohvaćanju top filmova.");
        })
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="list-container">
      <div className="grid">
        {movies.map((movie) => (
          <Link
            to={`/movie/${movie.id}`}
            state={{
              from: "/movies",
              search: searchQuery,
              tab: "movies",
            }}
            key={movie.id}
          >
            <div className="list-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
