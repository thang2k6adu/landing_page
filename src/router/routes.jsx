import { Navigate } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("~/pages/HomePage"));
const About = lazy(() => import("~/pages/About"));

let routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default routes;