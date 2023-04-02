import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './BarGraph.css';

const data = [
  { name: 'Jan', peers: 400 },
  { name: 'Feb', peers: 300 },
  { name: 'Mar', peers: 200 },
  { name: 'Apr', peers: 278 },
  { name: 'May', peers: 189 },
  { name: 'Jun', peers: 239 },
  { name: 'Jul', peers: 349 },
  { name: 'Aug', peers: 278 },
  { name: 'Sep', peers: 689 },
  { name: 'Oct', peers: 349 },
  { name: 'Nov', peers: 239 },
  { name: 'Dec', peers: 449 },
];

const BarGraph = () => {
  return (
    <div className="bar-chart-container">
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="peers" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarGraph;
