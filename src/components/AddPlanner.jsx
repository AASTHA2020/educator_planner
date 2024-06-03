import React, { useState } from 'react'; // Importing React and useState hook

const AddPlanner = ({ addToList }) => {
  // State to store user input text and hours
  const [usertext, setUsertext] = useState("");
  const [hours, setHours] = useState(0);

  // Handler for user text input
  const handleUserText = (e) => {
    setUsertext(e.target.value); // Updating state with user input
  }

  // Handler for hours input
  const handleHours = (e) => {
    setHours(e.target.value); // Updating state with hours input
  }

  // Function to handle adding item to list
  const handleAddToList = () => {
    addToList(usertext, hours); // Calling addToList function passed as prop
    setUsertext(""); // Resetting user text input
    setHours(0); // Resetting hours input
  }

  return (
    <div>
      <h1>Geekster Education Planner</h1>
      <div>
        <input type="text" value={usertext} id="task" onChange={handleUserText} /> {/* Input for task text */}
        <input type="number" value={hours} onChange={handleHours} /> {/* Input for task hours */}
        <button onClick={handleAddToList}>Add</button> {/* Button to add task to list */}
      </div>
    </div>
  )
}

export default AddPlanner;
