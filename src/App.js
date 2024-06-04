import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },

])
function App() {
  return (
   <RouterProvider router={router} />
  );
}

export default App;
