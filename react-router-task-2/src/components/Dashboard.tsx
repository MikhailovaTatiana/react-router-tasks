import { Link, Outlet } from "react-router-dom";

export function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <section className="links">
                <Link to='/stats'>Stats</Link>
                <Link to='/settings'>Settings</Link>
            </section>
            <section className="outlet">
                <Outlet />
            </section>
        </>
    )
}