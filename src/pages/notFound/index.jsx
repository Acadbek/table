import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-red-400 text-[45px]">404</h1>
      <NavLink
        className="bg-slate-900 px-2 py-1 rounded-md text-white"
        to={"/"}
      >
        go to home
      </NavLink>
    </div>
  );
};

export default NotFound;
