import { NavLink, Outlet } from "react-router-dom";
import "../App.css";
import '../index.css';

export function Layout() {
    return (
        <>
            <h1>Layout</h1>
            <nav id="navbar">
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>Services</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>
            <Outlet />
        </>
    );
}
