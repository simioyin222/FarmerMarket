import React, { useState, createContext } from 'react';
import ProduceAvailability from '../components/ProduceAvailability';

export const ProduceContext = createContext();

export const ProduceProvider = props => {
  const [produce, setProduce] = useState(ProduceAvailability);

  return (
    <ProduceContext.Provider value={[produce, setProduce]}>
      {props.children}
    </ProduceContext.Provider>
  );
};