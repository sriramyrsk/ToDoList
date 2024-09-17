import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="flex justify-evenly bg-rose-950 items-centre p-3">
        <NavLink
          to="/"
          className="logo text-lg text-yellow-300 hover:text-white"
        >
          ToDoList
        </NavLink>
        <ul className="flex space-x-4 text-white italic ">
          <li className="nav-item">
            <NavLink
              to="/view-tasks"
              className="hover:text-yellow-300 font-medium text-lg"
            >
              View
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/add-tasks"
              className="hover:text-yellow-300 font-medium text-lg"
            >
              Add
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="hover:text-yellow-300 font-medium text-lg"
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
