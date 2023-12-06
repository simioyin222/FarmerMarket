import React from 'react';
import { MarketProvider } from './contexts/MarketContext';
import { ProduceProvider } from './contexts/ProduceContext'; 
import MarketSchedule from './components/MarketSchedule';
import ProduceAvailability from './components/ProduceAvailability';
import MarketForm from './components/MarketForm';
import MarketList from './components/MarketList';
import './App.css';

function App() {
  return (
    <MarketProvider>
      <ProduceProvider>
        <div className="App">
          <h1>Avery's Organics</h1>
          <MarketForm />
          <MarketList />
          <MarketSchedule />
          <ProduceAvailability />
        </div>
      </ProduceProvider>
    </MarketProvider>
  );
}
