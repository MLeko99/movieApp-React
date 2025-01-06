import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button
        className={activeTab === "movies" ? "active" : ""}
        onClick={() => setActiveTab("movies")}
      >
        Movies
      </button>
      <button
        className={activeTab === "tv" ? "active" : ""}
        onClick={() => setActiveTab("tv")}
      >
        TV Shows
      </button>
    </div>
  );
};

export default Tabs;
