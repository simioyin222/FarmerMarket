import React, { useState, createContext } from 'react';

const marketSchedule = [
  { day: 'Sunday', location: 'Lents International' },
  { day: 'Monday', location: 'Pioneer Courthouse Square' },
  { day: 'Tuesday', location: 'Hillsdale Farmers Market' },
  { day: 'Wednesday', location: 'Shemanski Park Farmers Market' },
  { day: 'Thursday', location: 'Northwest Portland Farmers Market' },
  { day: 'Friday', location: 'Portland State University Farmers Market' },
  { day: 'Saturday', location: 'Beaverton Farmers Market' },
];

export const MarketContext = createContext();

export const MarketProvider = props => {
  const [markets, setMarkets] = useState(marketSchedule);

  return (
    <MarketContext.Provider value={[markets, setMarkets]}>
      {props.children}
    </MarketContext.Provider>
  );
};
