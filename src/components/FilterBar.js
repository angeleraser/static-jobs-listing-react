import React, { useContext } from "react";
import "../css/FilterBar.css";
import { MainContext } from "./MainProvider";
const FilterBar = () => {
  const { filters, filterList } = useContext(MainContext);
  const removeFilterFromBar = (e) => {
    const tag = e.target.textContent;
    const filteredList = filters.filter((label) => label !== tag);
    filterList([...filteredList]);
  };
  return (
    <nav className={`filter-bar${filters.length > 0 ? " visible" : ""}`}>
      <div className="tags">
        {filters.map((label) => (
          <button onClick={removeFilterFromBar} key={label}>
            {label}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          filterList([]);
        }}
        className="clear-btn">
        Clear
      </button>
    </nav>
  );
};

export default FilterBar;
