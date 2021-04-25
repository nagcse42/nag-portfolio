import React from 'react';
import './App.css';
import SampleChart from './components/charts/sample-chart';
import AncillaryIncome from './components/charts/ancillayIncome';
import DynamicChart from './components/charts/DynamicChart';
import DynamicTable from './components/charts/DynamicTable';

function App() {
  return (
    <div className="App">
       <DynamicChart></DynamicChart>
       <DynamicTable></DynamicTable>
    </div>
  );
}

export default App;
