import React from 'react'
import './Header.css'
import CartButton from '../Cart/CartButton'
export default function Header() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h3 className="logo-h">E-comm</h3>
            </div>
            <ul className="classlists">
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
            <div className="search">
                <input type="text" placeholder="Search Your Item Here" className="in" />
            </div>
            <div className="cart">
              <CartButton/>
            </div>
            <div className="buttons">
                <button className="login">Login</button>
                <button className="login">Sign Up</button>
            </div>
        </nav>
    )
}
