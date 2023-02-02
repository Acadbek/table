import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UsersContext } from "../../context/users";

const MainUserDetails = () => {
  const users = useContext(UsersContext);
  const params = useParams();
  const user = users?.find((user) => user?.id === +params.id);
  return (
    <div>
      <p className="text-red-700 text-[55px]"> {user?.name}</p>
      <p className="text-[22px]">{user?.email}</p>
    </div>
  );
};

export default MainUserDetails;
