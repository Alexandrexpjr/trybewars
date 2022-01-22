import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterNumericValues';
import Order from './components/Order';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <h1>TrybeWars</h1>
      <div id='filters-div'>
        <FilterByName />
        <FilterByNumericValues />
        <Order />
      </div>
      <Table />
    </PlanetsProvider>
  );
}

export default App;
