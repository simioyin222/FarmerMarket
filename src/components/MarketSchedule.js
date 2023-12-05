import React, {useState} from "react"

const marketSchedule = [
  {day: "Sunday", location: "Lents International"},
  {day: "Monday", location: "Pioneer Courthouse Square"},
  {day: "Tuesday", location: "Hillsdale Farmers Market"},
  {day: "Wednesday", location: "Shemanski Park Farmers Market"},
  {day: "Thursday", location: "Northwest Portland Farmers Market"},
  {day: "Friday", location: "Portland State University Farmers Market"},
  {day: "Saturday", location: "Beaverton Farmers Market"},
]

function MarketSchedule() {
  const [currentDay, setCurrentDay] = useState("Sunday")

  const schedule = marketSchedule.find(schedule => schedule.day === currentDay)

  return (
    <div>
      <h2>Market Schedule</h2>
      <div>
        {marketSchedule.map(schedule => (
          <button
            key={schedule.day}
            onClick={() => setCurrentDay(schedule.day)}
          >
            {schedule.day}
          </button>
        ))}
      </div>
      <p>{schedule ? `Location: ${schedule.location}` : "No market today"}</p>
    </div>
  )
}

export default MarketSchedule
