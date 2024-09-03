import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { Stats } from "./components/Stats";
import { Settings } from "./components/Settings";

export const router = createBrowserRouter([
    {
        element: <Dashboard />,
        path: "/",
        children: [
            {
                path: "stats",
                element: <Stats />,
            },
            {
                path: "settings",
                element: <Settings />,
            },
        ],
    },
]);
