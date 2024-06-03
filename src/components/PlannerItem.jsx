import React, { useState } from 'react'; // Importing React and useState hook

const PlannerItem = ({ listItem }) => {
  // State to manage the time of each task item
  const [time, setTime] = useState(parseInt(listItem.hours));

  // Function to increase time
  const increaseTime = () => {
    if (time >= 0) {
      setTime(time + 1); // Incrementing the time
    }
  }

  // Function to decrease time
  const decreaseTime = () => {
    if (time > 0) {
      setTime(time - 1); // Decrementing the time
    }
  }

  return (
    <div className='listItem'>
      {
        console.log(listItem) // Logging the list item
      }
      <span>{listItem.usertext} -</span><span>Time: {time} hours</span>
      <button onClick={increaseTime} style={{ backgroundColor: "#6b5ef5" }}>+</button> {/* Button to increase time */}
      <button onClick={decreaseTime} style={{ backgroundColor: "grey" }}>-</button> {/* Button to decrease time */}
    </div>
  )
}

export default PlannerItem;
