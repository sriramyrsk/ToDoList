import React from "react";

const AboutContent = () => {
  return (
    <section id="about" className="bg-green-400 my-7 px-2 py-5 md:p-5">
      <h1 className="font-extrabold text-4xl my-3 text-red-600">
        About the project
      </h1>
      <p className="text-medium">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        I developed this project ToDoList to learn react fundamental concepts. I
        was also very focused on making this a single page website without
        reloading. The ToDoList has the following features.
      </p>
      <ul className="flex flex-col bg-white py-3 px-5 w-fit rounded-lg my-3 font-bold ">
        <li>1.Add a task</li>
        <li>2.Remove a task</li>
        <li>3.Add time limit to tasks</li>
        <li>4.Add priorities to tasks</li>
        <li>5.Show real time status of the tasks</li>
        <li>6.Resposive design</li>
      </ul>
    </section>
  );
};

export default AboutContent;
