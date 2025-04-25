import React, { useState, useCallback } from "react";
import debounce from "../../debounce";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch, initialQuery }) => {
  const [input, setInput] = useState(initialQuery || "");

  const handleChange = useCallback(
    debounce((value) => {
      onSearch(value);
    }, 1000),
    []
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Pretraži filmove ili serije..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          handleChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
