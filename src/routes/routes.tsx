import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {
        path: "/admin",
        element: <App />, 
        children: adminRoutes
    },
    { path: "/login", element: <Login /> },
    { path: "/registration", element: <Registration /> },
]);

export default router;