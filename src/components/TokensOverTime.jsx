import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const TokensOverTime = ({ data }) => {
  const grouped = data.reduce((acc, row) => {
    const date = new Date(row.date).toISOString().slice(0, 10);
    acc[date] = (acc[date] || 0) + row.total_tokens;
    return acc;
  }, {});

  const chartData = Object.entries(grouped).map(([date, tokens]) => ({ date, tokens }));

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Model Usage (Tokens)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="tokens" stroke="#10b981" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TokensOverTime;
