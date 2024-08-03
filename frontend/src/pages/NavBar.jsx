import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="navbar flex gap-4">
        <NavLink to="/signin">singin</NavLink>
        <NavLink to="/signup">singup</NavLink>
        <NavLink to="/dashbord">dashbord</NavLink>
        <NavLink to="/payment">payment</NavLink>
    </div>
  )
}

export default NavBar
