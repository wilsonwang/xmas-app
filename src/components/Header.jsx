import React, { useState } from 'react'
import './header.css';

function Header() {
    const [open, setOpen] = useState(false);
    const handleToggleMenu = () => {
        setOpen(!open);
    }

  return (
    // <div>Header</div>
    <header>
        <a href="/" className="logo">Christmas.</a>

        <ul className="nav">
            <li><a href="#"><i className="bi bi-house"></i></a></li>
            <li><a href="#">Gifts</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>

        { !open ? <a href="#" className="menu" onClick={handleToggleMenu}><i className="bi bi-list"></i></a>
                : <a href="#" className="menu" onClick={handleToggleMenu}><i className="bi bi-x-lg"></i></a> }
        
    </header>
  )
}
export default Header