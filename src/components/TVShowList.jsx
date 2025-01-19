import React, { useEffect, useState } from "react";
import { fetchTopTVShows, searchContent } from "../api";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import "../styles/TVShowList.css";

const TVShowList = () => {
  const searchQuery = useSelector((state) => state.app.searchQuery);
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (searchQuery && searchQuery.length >= 3) {
      searchContent("tv", searchQuery)
        .then((res) => setTVShows(Array.isArray(res) ? res : []))
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Greška pri dohvaćanju rezultata pretrage.");
        })
        .finally(() => setLoading(false));
    } else {
      fetchTopTVShows()
        .then((data) => setTVShows(Array.isArray(data) ? data : []))
        .catch((error) => {
          console.error("Error fetching top TV shows:", error);
          setError("Greška pri dohvaćanju popularnih serija.");
        })
        .finally(() => setLoading(false));
    }
  }, [searchQuery]);

  if (loading) return <Loader />;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="list-container">
      <div className="grid">
        {tvShows.map((show) => (
          <Link
            to={`/tv/${show.id}`}
            state={{
              from: "/tv",
              search: searchQuery,
              tab: "tv",
            }}
            key={show.id}
          >
            <div className="list-item">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
              />
              <h3>{show.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TVShowList;
