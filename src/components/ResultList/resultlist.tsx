import React from "react";
import Card from "../Card/card";

const ResultList = ({ results }) => {
  console.log("ResultsData:", results);
  if (results[0].available === true) {
    // Handle the case where results is undefined or not an array

    return (
      <div className="grid grid-cols-1 gap-2 lg:gap-24  sm:grid-cols-2 lg:grid-cols-2">
        {results.map((result, index) => (
          <Card key={index} result={result} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="text-4xl lg:py-24 text-center text-white font-extrabold">
        Domain is taken, Try something else !!!
      </div>
    );
  }
};

export default ResultList;
