import { createBrowserRouter } from "react-router-dom";
import Home from "../containers/HomePage";
import Shop from "../containers/ShopPage";
import Contact from "../containers/ContactPage";
import App from "../App";
import About from "../containers/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
