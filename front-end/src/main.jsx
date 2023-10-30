import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SignIn from "./SignIn.jsx";
import DisplayCards from "./DisplayCards.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/" element={<SignIn />} />,
      <Route path="/displaycards" element={<DisplayCards />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
