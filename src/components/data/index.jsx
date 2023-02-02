import React from "react";

export const Button = ({ children }) => {
  console.log(children);
  return <button className="text-red-700">{children}</button>;
};
