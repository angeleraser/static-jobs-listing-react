import React from "react";
import "./css/index.css";
import JobList from "./components/JobList";
import MainProvider from "./components/MainProvider";
const JobListing = () => {
  return (
    <>
      <div className="bg-pattern"></div>
      <MainProvider>
        <JobList />
      </MainProvider>
    </>
  );
};

export default JobListing;
