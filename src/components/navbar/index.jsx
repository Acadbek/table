import { Outlet, NavLink, useLocation } from "react-router-dom";
import { navbar } from "../../utils/navbar";

const Navbar = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  return (
    <div>
      <div className="flex gap-8 bg-black py-4 text-white px-8 sticky top-0">
        {navbar.map(
          ({ title, link, id, isPrivate }) =>
            !isPrivate && (
              <NavLink
                exact="true"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "white",
                  };
                }}
                key={id}
                to={link}
              >
                {title}
              </NavLink>
            )
        )}
        <p>{query.get("name")}</p>
        <button onClick={() => localStorage.removeItem("token")}>
          log out
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
