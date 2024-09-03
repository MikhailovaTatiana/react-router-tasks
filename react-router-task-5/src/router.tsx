import { createBrowserRouter } from "react-router-dom";
import { UserProfile } from "./components/UserProfile";
import App from "./App";

export const router = createBrowserRouter([
    {
        element: <App />,
        path: "/",
        children: [
            {
                element: <UserProfile />,
                path: "user/:id",
            },
        ],
    },
]);
