import React, { useState } from 'react'; 

const AddPlanner = ({ addToList }) => {


  const [usertext, setUsertext] = useState("");
  const [hours, setHours] = useState(0);

  // Handler for user text input
  const handleUserText = (e) => {
    setUsertext(e.target.value); 
  }

  // Handler for hours input
  const handleHours = (e) => {
    setHours(e.target.value); 
  }

  // Function to handle adding item to list
  const handleAddToList = () => {
    addToList(usertext, hours);
    setUsertext(""); // Resetting user text input
    setHours(0); 
  }

  return (
    <div>
      <h1>Geekster Education Planner</h1>
      <div>
        <input type="text" value={usertext} id="task" onChange={handleUserText} /> 
        <input type="number" value={hours} onChange={handleHours} />
        <button onClick={handleAddToList}>Add</button> 
      </div>
    </div>
  )
}

export default AddPlanner;
