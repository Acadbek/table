import { useContext } from "react";
import { UsersContext } from "../../context/users";
import { Link } from "react-router-dom";

const About = () => {
  const users = useContext(UsersContext);

  return (
    <div>
      <h1>
        ABout
        {users?.map((user) => (
          <li key={user.id}>
            <Link to={`/about/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </h1>
    </div>
  );
};

export default About;
