import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import TVShowList from "../components/TVShowList";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Dohvati tab iz URL-a
  const [activeTab, setActiveTab] = useState(
    location.pathname.includes("/movies") ? "movies" : "tv"
  );
  const [searchQuery, setSearchQuery] = useState(location.state?.search || "");

  useEffect(() => {
    if (location.state?.search) {
      setSearchQuery(location.state.search);
    }
  }, [location.state]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(tab === "movies" ? "/movies" : "/tv", {
      state: { search: searchQuery },
    });
  };

  return (
    <div>
      <SearchBar
        onSearch={(query) => setSearchQuery(query)}
        initialQuery={searchQuery}
      />
      <div className="tabs">
        <button onClick={() => handleTabChange("movies")}>🎬 Filmovi</button>
        <button onClick={() => handleTabChange("tv")}>📺 Serije</button>
      </div>
      {activeTab === "movies" ? (
        <MovieList searchQuery={searchQuery} />
      ) : (
        <TVShowList searchQuery={searchQuery} />
      )}
    </div>
  );
};

export default Home;
