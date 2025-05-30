import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const UserConsumption = ({ data }) => {
  const grouped = data.reduce((acc, row) => {
    acc[row.user_id] = (acc[row.user_id] || 0) + row.total_tokens;
    return acc;
  }, {});

  const chartData = Object.entries(grouped).map(([user_id, tokens]) => ({ user_id, tokens }));

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-2">User Consumption (Tokens)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="user_id" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tokens" fill="#f59e0b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserConsumption;
