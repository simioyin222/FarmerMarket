import React from "react"

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

function ProduceAvailability() {
  const currentMonth = new Date().toLocaleString("default", {month: "long"})
  const currentProduce =
    produceAvailability.find(produce => produce.month === currentMonth)
      ?.produce || []

  return (
    <div>
      <h2>Produce Available in {currentMonth}</h2>
      <ul>
        {currentProduce.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProduceAvailability
