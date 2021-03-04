import React from "react";

const ResultItem = ({ children, value }) => {
  return (
    <div className="resultItem">
      <p>{children}</p>
      <p>{value}</p>
    </div>
  );
};

export default ResultItem;
