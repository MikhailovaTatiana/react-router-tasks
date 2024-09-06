import { NavLink, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
        <h1>My App</h1>
        <nav id='navbar'>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
        <Outlet />
    </>
  )
}

export default App
