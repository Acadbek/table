import { users } from "../data/users";
import About from "../pages/about";
import Login from "../pages/login";
import MainUserDetails from "../pages/mainUserDetails";
import NotFound from "../pages/notFound";
import Slug from "../pages/slug";
import UserDetails from "../pages/slug/userDetails";
import Table from "../pages/table";
import Users from "../pages/users";
const token = JSON.parse(localStorage.getItem("token"));

export const navbar = [
  {
    id: 1,
    title: "About",
    link: "/about",
    element: <About />,
    isPrivate: false,
  },
  {
    id: 578,
    title: "About",
    link: "/about/:id",
    element: <MainUserDetails />,
    isPrivate: true,
  },
  {
    id: 2,
    title: "Page-2",
    link: "/blog",
    element: <h1>Page-2</h1>,
    isPrivate: false,
  },
  {
    id: 3,
    title: "Table",
    link: "/table",
    element: <Table />,
    isPrivate: false,
  },
  {
    id: 3888  ,
    title: "Users",
    link: "/users",
    element: <Users />,
    isPrivate: token ? false : true,
  },
  {
    id: 4,
    title: "Users",
    link: "/users/:title",
    element: <Slug data={users} />,
    isPrivate: true,
  },
  {
    id: 888,
    title: "Users",
    link: "/users/:title/:id",
    element: <UserDetails />,
    isPrivate: true,
  },
  {
    id: 5,
    title: "Login",
    link: "/login",
    element: <Login />,
    isPrivate: false,
  },
  { id: 4, title: "", link: "*", element: <NotFound />, isPrivate: false },
];
