import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home"
import App from "../App"
import About from "../Components/About"
import Layout from "../Components/Layout"
import Books from "../Components/Books"


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [  {
      path: "/",
      element: <Home/>
    },
    {
      path: "/About",
      element: <About/>
    },
    {
      path: "/Books",
      element:<Books/>
    }
  ]
  },
  {
    path: "*",
    element: <h1>Error Here</h1>
  },

])

  export default router