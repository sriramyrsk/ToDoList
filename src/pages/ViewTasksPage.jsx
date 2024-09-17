import React from "react";
import Tasks from "../components/Tasks";
const ViewTasksPage = ({ deleteTaskFn, updateFinishedTask }) => {
  return (
    <>
      <Tasks
        deleteTaskFn={deleteTaskFn}
        updateFinishedTask={updateFinishedTask}
      />
    </>
  );
};

export default ViewTasksPage;
