import React, { useState } from 'react'; 

const PlannerItem = ({ listItem }) => 

  const [time, setTime] = useState(parseInt(listItem.hours));

   const increaseTime = () => {
    if (time >= 0) {
      setTime(time + 1); 
  }

  // Function to decrease time
  const decreaseTime = () => {
    if (time > 0) {
      setTime(time - 1);}
  }

  return (
    <div className='listItem'>
      {
        console.log(listItem)  }
      <span>{listItem.usertext} -</span><span>Time: {time} hours</span>
      <button onClick={increaseTime} style={{ backgroundColor: "#6b5ef5" }}>+</button> 
      <button onClick={decreaseTime} style={{ backgroundColor: "grey" }}>-</button> 
    </div>
  )
}

export default PlannerItem;
