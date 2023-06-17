import React, { useState } from "react";
import { useBookEvent } from "../../context/BookContextProvider";
// import "./search.css";
export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const { dispatch } = useBookEvent();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue);
    dispatch({ type: "Search", payload: searchValue });
  };
  return (
    <div className="searchBar">
      <h2>SEARCH</h2>
      <span className="closeBtn">X</span>
      <div className="layout">
        <form>
          <input
            type="text"
            placeholder="search"
            value={searchValue}
            onChange={(e) => handleChange(e)}
          />
          <button> Search</button>
        </form>
      </div>
    </div>
  );
}
