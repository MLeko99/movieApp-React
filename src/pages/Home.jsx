import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveTab } from "../store/appSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchQuery = useSelector((state) => state.app.searchQuery);
  const activeTab = useSelector((state) => state.app.activeTab);

  const handleTabChange = (tab) => {
    dispatch(setActiveTab(tab));
    navigate(tab === "movies" ? "/movies" : "/tv", {
      state: { search: searchQuery, tab },
    });
  };

  return (
    <div>
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
    </div>
  );
};

export default Home;
