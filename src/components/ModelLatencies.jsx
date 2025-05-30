import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ModelLatencies = ({ data }) => {
  const grouped = data.reduce((acc, row) => {
    const date = new Date(row.date).toISOString().slice(0, 10);
    if (!acc[date]) acc[date] = [];
    acc[date].push(row.latency);
    return acc;
  }, {});

  const chartData = Object.entries(grouped).map(([date, latencies]) => {
    const sorted = latencies.sort((a, b) => a - b);
    const p50 = sorted[Math.floor(sorted.length * 0.5)];
    const p90 = sorted[Math.floor(sorted.length * 0.9)];
    const p99 = sorted[Math.floor(sorted.length * 0.99)];
    return { date, p50, p90, p99 };
  });

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">Model Latencies</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="p50" stroke="#6366f1" />
          <Line type="monotone" dataKey="p90" stroke="#ec4899" />
          <Line type="monotone" dataKey="p99" stroke="#f87171" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ModelLatencies;
