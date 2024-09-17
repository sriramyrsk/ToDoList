import React from "react";
import backgroundImage from "../images/todolist.jpg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="mt-32 py-10 p-5 bg-orange-200">
        <div className="md:grid md:grid-cols-5 xm:grid-cols-0 flex flex-col-reverse  justify-content-center xm:items-center">
          <div className="grid grid-rows-3 justify-content-center  md:grid-cols-5  md:col-span-3  items-center xm:grid-cols-1 xm:gap-y-4 xm:row-start-2 md:text-left text-center">
            <h1 className="font-extrabold xm:row-start-1 xm:row-span-1 xm:col-start-1 xm:mx-auto xm:text-center md:text-4xl md:col-start-2 md:col-span-full md:items-center md:row-">
              Get It Done, One Task at a Time!{" "}
            </h1>
            <p className="md:row-start-2 md:row-end-3 font-light md:col-start-2 md:col-end-5 ml-1">
              Stay focused and conquer your day with our to-do list! 'Get It
              Done, One Task at a Time!' inspires you to break down your goals
              into manageable steps. Prioritize, tackle tasks, and celebrate
              progress—one task at a time!
            </p>
            <button className="md:col-start-2 md:row-start-3 bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-700">
              <Link to="add-tasks">Start Adding</Link>
            </button>
          </div>

          <Link to="add-tasks" className="">
            <div
              className="bg-image bg-contain bg-no-repeat bg-center	  md:col-span-2 min-h-52 xm:row-start-1 xm:row-end-2  "
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
