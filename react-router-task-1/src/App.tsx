import "./App.css";
import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <div className='links'>
                <NavLink to='/'>Home</NavLink>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <Outlet />
        </>
    );
}

export default App;
