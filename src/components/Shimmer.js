import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
