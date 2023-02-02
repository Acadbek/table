import { useEffect, useState } from "react";
import { createContext } from "react";

export const UsersContext = createContext([]);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
  );
};

export default UserProvider;
