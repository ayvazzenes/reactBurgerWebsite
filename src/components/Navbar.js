import React from 'react'
import {NavLink} from "react-router-dom"
import Logo from '../img/burgerlogo.png'
import "../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav className='mainNav'>
        <div className='burger-logo'>
        <NavLink to="/">
        <img className='burger-logo-img' src={Logo} alt="burger__logo"/>
        </NavLink>
           
        </div>

        <div className='burger-navbar'>
        <NavLink to="/">Anasayfa</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/about">Hakkımızda</NavLink>
        <NavLink to="/contact">İletişim</NavLink>
        </div>
    </nav>
  )
}

export default Navbar