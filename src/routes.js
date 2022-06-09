import { useRoutes } from "react-router-dom";
import Home from "./pages/home";
import Pagina2 from "./pages/pagina2";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/pagina2",
      element: <Pagina2 />
    }
  ]);

  return routes;
};
export default Router;
