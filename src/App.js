import Navbar from "./components/navbar";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import { navbar } from "./utils/navbar";
import { useEffect, useState } from "react";
import { Button } from "./components/data";

const App = () => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  const [tokenState, setTokenState] = useState(token);

  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {navbar.map(({ link, element, isPrivate }) => {
            return (
              !isPrivate && <Route key={link} path={link} element={element} />
            );
          })}
          {navbar.map(({ link, element, isPrivate }) => {
            return (
              isPrivate && <Route key={link} path={link} element={element} />
            );
          })}
        </Route>
      </Routes>
      <p className="bg-gray-400">{location.pathname.split(" ").join("-")}</p>
    </div>
  );
};

export default App;
