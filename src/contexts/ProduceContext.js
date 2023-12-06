import React, { useState, createContext } from 'react';

export const ProduceContext = createContext();

export const ProduceProvider = props => {
  const [produce, setProduce] = useState(produceAvailability);

  return (
    <ProduceContext.Provider value={[produce, setProduce]}>
      {props.children}
    </ProduceContext.Provider>
  );
};