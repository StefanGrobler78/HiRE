import { NavLink , Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
        <Link className="site-logo" to="/">HiRE</Link>
        <nav>
            <NavLink to="/host">Host</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/hires">Hires</NavLink>
        </nav>
    </header>
  )
}

export default Header