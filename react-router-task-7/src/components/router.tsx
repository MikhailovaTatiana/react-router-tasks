import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        path: '/',
        children: [
            {
                element: <Home />,
                path: '/home',
            },
            {
                element: <About />,
                path: '/about',
            },
            {
                element: <Contact />,
                path: '/contact',
            },
        ]
    }
]
)