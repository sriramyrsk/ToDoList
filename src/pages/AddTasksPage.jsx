import React from "react";
import TaskForm from "../components/TaskForm";
const AddTasksPage = ({ addTaskSubmit }) => {
  return (
    <>
      <TaskForm addTaskSubmit={addTaskSubmit} />
    </>
  );
};

export default AddTasksPage;
