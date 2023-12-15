// TaskList.js
import React from 'react';

function TaskList({ tasks, removeTask }) {
  return (
   <div>
     <ul style={{
    listStyle: "none",
}}>
      {tasks.map((task, index) => (
        <li key={index} style={{
            display: "flex",
            justifyContent: "space-between",
            width:"260px",
            marginTop: "15px",
            marginLeft: "-40px",
            fontSize:"18px",

        }}>
          {task}
        </li>
      ))}
    </ul>
   </div>
  );
}

export default TaskList;
