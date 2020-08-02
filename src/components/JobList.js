import React, { useContext } from "react";
import "../css/JobList.css";
import JobCard from "./JobCard";
import FilterBar from "./FilterBar";
import { MainContext } from "./MainProvider";
const JobList = () => {
  const { jobsData, filters } = useContext(MainContext);
  const getJobsByFilters = () =>
    jobsData.filter(({ tags }) =>
      filters.every((label) => tags.some((tag) => tag === label))
    );
  return (
    <div className="job-list">
      <FilterBar />
      {getJobsByFilters().map((info) => (
        <JobCard {...info} key={info.companyName} />
      ))}
    </div>
  );
};

export default JobList;
