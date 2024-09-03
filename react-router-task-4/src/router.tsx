import { createBrowserRouter } from "react-router-dom";
import { Home } from "./components/Home";
import { LogIn } from "./components/LogIn";
import App from "./App";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                element: (
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                ),
                path: "/home",
            },
            {
                element: <LogIn />,
                path: "/login",
            },
        ],
    },
]);
