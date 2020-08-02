import React, { useContext } from "react";
import { MainContext } from "./MainProvider";

const FilterButton = ({ label }) => {
  const {filters, filterList } = useContext(MainContext);
  const addFilter = () => {
    !filters.some((tag) => tag === label) &&
      filterList([label, ...filters]);
  };
  return (
    <button onClick={addFilter} className="text-cyan">
      {label}
    </button>
  );
};

export default FilterButton;
