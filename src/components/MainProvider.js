import React, { createContext, useState } from "react";
import { jobsData } from "../data";
export const MainContext = createContext();
const MainProvider = ({ children }) => {
  const [filters, filterList] = useState([]);
  const providerValue = {
    filters,
    filterList,
    jobsData
  };
  return (
    <MainContext.Provider value={providerValue}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
