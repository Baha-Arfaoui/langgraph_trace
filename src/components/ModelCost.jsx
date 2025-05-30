import React from 'react';

const ModelCost = ({ data }) => {
  const totalTokens = data.reduce((sum, row) => sum + (row.total_tokens || 0), 0);
  const cost = (totalTokens * 0.0001).toFixed(2);
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Model Cost</h2>
      <p className="text-2xl">${cost}</p>
    </div>
  );
};

export default ModelCost;
