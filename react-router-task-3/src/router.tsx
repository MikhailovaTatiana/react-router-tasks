import { createBrowserRouter, Navigate } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";

export const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        path: "/old-home",
        element: <Navigate to='/home' replace />,
    },
    {
        element: <Home />,
        path: "/home",
    },
]);