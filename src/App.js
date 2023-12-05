import React from 'react';
import MarketSchedule from './components/MarketSchedule';
import ProduceAvailability from './components/ProduceAvailability';
import './App.css'; // Importing CSS file

function App() {
  return (
    <div className="App">
      <h1>Avery's Organics</h1>
      <MarketSchedule />
      <ProduceAvailability />
    </div>
  );
}

export default App;
