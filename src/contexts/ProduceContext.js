import React, {useState, createContext} from "react"

const produceAvailability = [
  {month: "January", produce: ["Apples", "Hazelnuts"]},
  {month: "February", produce: ["Pears", "Garlic", "Mushrooms"]},
  {month: "March", produce: ["Broccoli", "Lettuce", "Mint"]},
  {month: "April", produce: ["Asparagus", "Radishes", "Peas"]},
  {month: "May", produce: ["Cherries", "Strawberries", "Lettuce"]},
  {month: "June", produce: ["Blueberries", "Cucumbers", "Tomatoes"]},
  {month: "July", produce: ["Peaches", "Melons", "Corn"]},
  {month: "August", produce: ["Apricots", "Summer Squash", "Peppers"]},
  {month: "September", produce: ["Grapes", "Apples", "Pumpkins"]},
  {month: "October", produce: ["Cranberries", "Brussels Sprouts", "Kale"]},
  {month: "November", produce: ["Pears", "Squash", "Garlic"]},
  {month: "December", produce: ["Oranges", "Carrots", "Red Cabbage"]},
]

export const ProduceContext = createContext()

export const ProduceProvider = props => {
  const [produce, setProduce] = useState(produceAvailability)

  return (
    <ProduceContext.Provider value={[produce, setProduce]}>
      {props.children}
    </ProduceContext.Provider>
  )
}
