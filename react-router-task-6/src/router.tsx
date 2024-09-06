import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";

export const router = createBrowserRouter([
    {
        element: <App />,
        path: '/',
        children: [
            {
                element: <Home />,
                path: '/home',
            },
            {
                element: <Services />,
                path: '/services',
            },
            {
                element: <Contact />,
                path: '/contact',
            },
        ]
    },
    
])