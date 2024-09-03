import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { AuthContextType } from "./components/AuthContextType";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const authContext: AuthContextType = {
        isLoggedIn,
        setIsLoggedIn,
    };

    return (
        <>
            <header>
                <h1>My App</h1>
            </header>
            <Outlet context={authContext} />
        </>
    );
}

export default App;
