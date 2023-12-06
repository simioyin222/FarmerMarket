import React, { useState, useContext } from 'react';
import { MarketContext } from './MarketContext';

function MarketForm() {
  const [markets, setMarkets] = useContext(MarketContext);
  const [newMarket, setNewMarket] = useState({ day: '', location: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setMarkets([...markets, newMarket]);
    setNewMarket({ day: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newMarket.day}
        onChange={(e) => setNewMarket({ ...newMarket, day: e.target.value })}
        placeholder="Day"
      />
      <input
        type="text"
        value={newMarket.location}
        onChange={(e) => setNewMarket({ ...newMarket, location: e.target.value })}
        placeholder="Location"
      />
      <button type="submit">Add Market</button>
    </form>
  );
}

export default MarketForm;

import React, { useContext } from 'react';
import { MarketContext } from './MarketContext';

function MarketList() {
  const [markets, setMarkets] = useContext(MarketContext);

  const deleteMarket = (day) => {
    const updatedMarkets = markets.filter(market => market.day !== day);
    setMarkets(updatedMarkets);
  };

  return (
    <div>
      {markets.map(market => (
        <div key={market.day}>
          {market.day} - {market.location}
          <button onClick={() => deleteMarket(market.day)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MarketList;