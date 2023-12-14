import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sbe__header-container">
            <div className="sbe__nav-wrapper">
            <Link to='/'><h1 className="logo">HiRE</h1></Link>
                <nav className="sbe__prim-nav">
                  <ul className="sbe__prim-navlist">
                  
                    <Link to='/about'>About</Link>
                    <Link to='/vans'>Vans</Link>

                  </ul>
                </nav>
                <div className="sbe__prim-nav_toggler">
                  {
                    isOpen ? <RiCloseLine color='#fff' size={27} onClick={() => setIsOpen(!isOpen)} /> : <RiMenu3Line color='#fff' size={27} onClick={() => setIsOpen(!isOpen)} />
                  }
                  {
                    isOpen && (
                      <div className="sbe__prim-nav_menu">
                        <ul className="sbe__prim-navlist">
                          <Link to='/about'>About</Link>
                          <Link to='/vans'>Vans</Link>
                        </ul>
                      </div>
                    )
                  }
                </div>
            </div>
    </header>
  )
}

export default Navbar