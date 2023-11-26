import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./LandingPage.jsx";
import MainCollection from "./Collection/MainCollection.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/MTGCollection/front-end/">
      <Route path="/MTGCollection/front-end/" element={<LandingPage />} />,
      <Route
        path="/MTGCollection/front-end/collection"
        element={<MainCollection />}
      />
      ,
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
