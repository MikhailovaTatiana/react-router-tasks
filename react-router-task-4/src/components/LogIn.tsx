import { useNavigate, useOutletContext } from "react-router-dom";
import { AuthContextType } from "./AuthContextType";

export function LogIn() {
    const { setIsLoggedIn } = useOutletContext<AuthContextType>();
    const navigate = useNavigate();

    function handleLogIn() {
        setIsLoggedIn(true);
        navigate("/home");
    }

    return (
        <main>
            <h2>Log In</h2>
            <button onClick={handleLogIn}>Log In</button>
        </main>
    );
}
