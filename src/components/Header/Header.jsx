import { NavLink , Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
        <Link className="site-logo" to="/">HiRE</Link>
        <nav>
            <NavLink to="host" className={({isActive}) => isActive ? "active" : null}>Host</NavLink>
            <NavLink to="about" className={({isActive}) => isActive ? "active" : null}>About</NavLink>
            <NavLink to="hires" className={({isActive}) => isActive ? "active" : null}>Hires</NavLink>
            <Link to="login" >
                <img src="/images/avatar-icon.png" alt="login-icon" width="16px" />
            </Link>
        </nav>
    </header>
  )
}

export default Header