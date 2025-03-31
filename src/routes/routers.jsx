import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./publicRoutes";
import priveRoutes from "./privateRoutes";

const routers = createBrowserRouter([...publicRoutes, ...priveRoutes]);
export default routers;