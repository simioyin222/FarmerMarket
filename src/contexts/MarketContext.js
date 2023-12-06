import React, {useState, createContext} from "react"

export const MarketContext = createContext()

export const MarketProvider = props => {
  const [markets, setMarkets] = useState(marketSchedule)

  return (
    <MarketContext.Provider value={[markets, setMarkets]}>
      {props.children}
    </MarketContext.Provider>
  )
}
