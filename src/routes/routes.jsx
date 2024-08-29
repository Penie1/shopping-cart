import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/HomePage";
import Shop from "../containers/ShopPage";
import Contact from "../containers/ContactPage";
import About from "../containers/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
