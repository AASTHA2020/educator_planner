import React from 'react';
import PlannerItem from './PlannerItem';

const PlannerList = ({ taskList }) => {
  return (
    <div className='plannerlist'>
      {
        taskList.map((item, index) => (
          <PlannerItem key={index} listItem={item} /> // Mapping through taskList and rendering PlannerItem for each item
        ))
      }
    </div>
  )
}

export default PlannerList;
