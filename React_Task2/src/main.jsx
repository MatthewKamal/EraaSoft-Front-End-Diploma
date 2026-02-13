import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login";
import Register from "./pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
