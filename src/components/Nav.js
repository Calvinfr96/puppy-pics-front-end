import React from 'react'
import {Link} from 'react-router-dom'

function Nav({user, logOut}) {
  const navStyle = {
    color: 'blue',
    "fontWeight": 'bold'
  }

  const navLinks = user ? (
    <ul className="nav-links">
    <Link style={navStyle} to='/'><li>Home</li></Link>
    <Link style={navStyle} to='/breeds'><li>Breeds</li></Link>
    <Link style={navStyle} to="/" onClick={logOut}><li>Log Out</li></Link>
    <Link style={navStyle} to='/profile'><li>Profile</li></Link>
    <Link style={navStyle} to='/new/dog'><li>New Dog</li></Link>
    <Link style={navStyle} to='/new/breed'><li>New Breed</li></Link>
    </ul>
  ) : (
    <ul className="nav-links">
    <Link style={navStyle} to='/'><li>Home</li></Link>
    <Link style={navStyle} to='/breeds'><li>Breeds</li></Link>
    <Link style={navStyle} to='/login'><li>Log In</li></Link>
    <Link style={navStyle} to='/new/user'><li>New User</li></Link>
  </ul>
  )

  return (
      <nav>
        {navLinks} 
      </nav>
  )
}

export default Nav