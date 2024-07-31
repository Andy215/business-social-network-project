import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bulma/css/bulma.min.css";
import "./styles.css";

import Root from "./routes/root";
import About from "./routes/about";
import Profiles from "./routes/profiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/profiles",
    element: <Profiles />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
