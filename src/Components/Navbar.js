import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const Navbar = () => {
  const auth = useAuth()

  return (
    <div>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        {!auth.User ==='admin' && <NavLink to='/admin'>Admin</NavLink>}
        <NavLink to='/user'>User</NavLink>
        <NavLink to="/Customer">Customer</NavLink>
        <NavLink to="/Ticket">Ticket</NavLink>
        <NavLink to="/Login">Login</NavLink>
        <NavLink to="/Signup">Signup</NavLink>
      </nav>
    </div>
  )
}

export default Navbar;

