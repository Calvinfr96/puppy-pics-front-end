import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <nav>
          <ul className="nav-links">
            <Link to='/'><li>Home</li></Link>
            <Link to='/new/user'><li>New User</li></Link>
            <Link to='/new/dog'><li>New Dog</li></Link>
            <Link to='/new/breed'><li>New Breed</li></Link>
          </ul>  
        </nav>
    )
}

export default Nav