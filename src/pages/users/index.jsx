import React from "react";
import { users } from "../../data/users";
import { NavLink } from "react-router-dom";

const Users = () => {
  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <NavLink
          to={user.name.toLowerCase()}
          className="text-[25px] cursor-pointer"
          key={user.id}
        >
          {user.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Users;
