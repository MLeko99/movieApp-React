import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery, setActiveTab } from "../store/appSlice";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import TVShowList from "../components/TVShowList";

const Home = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.app.searchQuery);
  const activeTab = useSelector((state) => state.app.activeTab);

  const handleTabChange = (tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div>
      <SearchBar
        onSearch={(query) => dispatch(setSearchQuery(query))}
        initialQuery={searchQuery}
      />
      <div className="tabs">
        <button
          className={activeTab === "movies" ? "active" : ""}
          onClick={() => handleTabChange("movies")}
        >
          🎬 Filmovi
        </button>
        <button
          className={activeTab === "tv" ? "active" : ""}
          onClick={() => handleTabChange("tv")}
        >
          📺 Serije
        </button>
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
