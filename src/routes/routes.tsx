import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import { adminPaths } from "./admin.routes";
import { routesGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {
        path: "/admin",
        element: <App />,
        children: routesGenerator(adminPaths)
    },
    {
        path: "/faculty",
        element: <App />,
        children: routesGenerator(facultyPaths)
    },
    {
        path: "/student",
        element: <App />,
        children: routesGenerator(studentPaths)
    },
    { path: "/login", element: <Login /> },
    { path: "/registration", element: <Registration /> },
]);

export default router;