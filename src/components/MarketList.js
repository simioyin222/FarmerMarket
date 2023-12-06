import React, { useContext } from 'react';
import { MarketContext } from '../contexts/MarketContext';

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
