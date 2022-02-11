import React from "react";

const TaskList = ({ taskList, deleteTask }) => {
  return (
    <div>
      TaskList
      {/* <h1>{x}</h1> */}
      {taskList.map((task) => (
        <div key={task.id}>
          <h3>{task.text}</h3>
          <button onClick={() => deleteTask(task.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
