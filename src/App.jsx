import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TotalTraces from './components/TotalTraces';
import ModelCost from './components/ModelCost';
import TracesOverTime from './components/TracesOverTime';
import TokensOverTime from './components/TokensOverTime';
import UserConsumption from './components/UserConsumption';
import ModelLatencies from './components/ModelLatencies';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Langfuse Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TotalTraces data={data} />
        <ModelCost data={data} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TracesOverTime data={data} />
        <TokensOverTime data={data} />
      </div>
      <UserConsumption data={data} />
      <ModelLatencies data={data} />
    </div>
  );
};

export default App;
