import { useState } from 'react'; 
import './App.css'; 
import AddPlanner from './components/AddPlanner'; 
import PlannerList from './components/PlannerList'; 

function App() {
  // State to store the list of planners
  const [plannerList, setPlannerList] = useState([]);

  // Function to add a new item to the planner list
  const addToList = (usertext, hours) => {

    console.log(usertext, hours); 
    
    let newItem = { usertext, hours }; // Creating a new item object
    
    setPlannerList([...plannerList, newItem]); // Updating the state with the new item
  }

  return (
    <div className="App">
      <AddPlanner addToList={addToList} /> {/* Passing the addToList function as a prop to AddPlanner */}
      <PlannerList taskList={plannerList} /> {/* Passing the planner list as a prop to PlannerList */}
    </div>
  );
}

export default App;
