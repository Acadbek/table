import React from "react";
import { Link } from "react-router-dom";

export const User = ({ user }) => {
  return (
    <div>
      <span className="font-bold">User: </span>
      <Link to={String(user.id)}>{user.name}</Link>
    </div>
  );
};
