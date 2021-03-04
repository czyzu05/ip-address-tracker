import React from "react";
import ResultItem from "./ResultItem";

const ResultDetails = ({ ip, location, isp }) => {
  const { city, timezone } = location;
  return (
    <div className="results">
      <ResultItem value={ip}>IP Address</ResultItem>
      <ResultItem value={city}>Location</ResultItem>
      <ResultItem value={timezone}>Timezone</ResultItem>
      <ResultItem value={isp}>ISP</ResultItem>
    </div>
  );
};

export default ResultDetails;
