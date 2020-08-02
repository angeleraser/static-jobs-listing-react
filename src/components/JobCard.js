/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../css/JobCard.css";
import FilterButton from "./FilterButton";
const JobCard = ({
  companyName,
  companyLogo,
  ocupation,
  postDate,
  time,
  country,
  isNew,
  isFeatured,
  tags,
}) => {
  return (
    <article className={`job-card${isFeatured ? " featured" : ''}`}>
      {/*Job Data*/}
      <div className="data">
        <div
          className="company-logo"
          style={{
            backgroundImage: `url(${companyLogo})`,
          }}></div>
        <div className="info">
          <h2 className="company-name text-cyan">{companyName}</h2>
          {isNew && (
            <a href="#" className="tag new">
              New!
            </a>
          )}
          {isFeatured && (
            <a href="#" className="tag featured">
              Featured
            </a>
          )}
          <a className="ocupation">{ocupation}</a>
          <span>{postDate}</span>
          <span className="time">{time}</span>
          <span>{country}</span>
        </div>
      </div>
      <div className="filter-tags">
        {tags.map((label, i) => (
          <FilterButton label={label} key={i} />
        ))}
      </div>
    </article>
  );
};

export default JobCard;
