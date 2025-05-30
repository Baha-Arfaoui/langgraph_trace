import React from 'react';

const TotalTraces = ({ data }) => {
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Total Traces</h2>
      <p className="text-2xl">{data.length}</p>
    </div>
  );
};

export default TotalTraces;
