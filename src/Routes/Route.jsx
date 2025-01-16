import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login";
import App from "../App";
import About from "../Components/About";
import Layout from "../Components/Layout";
import Books from "../Components/Books";
import BookIndividual from "../Components/BookIndividual";
import UserProfile from "../Components/UserProfile";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/About",
        element: <About />
      },
      {
        path: "/Books",
        element: <Books />
      },
      {
        path: "/Books/:Id",  
        element: <BookIndividual />
      },
      {
        path: "/User",
        element:<UserProfile/>
      },
      {
        path: "/Home",
        element: <Home/>
      }
    ]
  },
  {
    path: "*",
    element: <h1>Error Here</h1>
  },

]);

export default router;
