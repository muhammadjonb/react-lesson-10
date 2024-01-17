import React from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/Frame 168.svg'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="navbar_items">
            <NavLink className="navbar_link" to="/">
              Home
            </NavLink>
            <NavLink className="navbar_link" to="shop">
              Shop
            </NavLink>
            <NavLink className="navbar_link" to="products">
              About
            </NavLink>
            <Link className="navbar_link">Contact</Link>
          </div>
          <div className="navbar_icons">
            <ion-icon name="person-outline"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="cart-outline"></ion-icon>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header