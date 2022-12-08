import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import './navBar.css'

function NavBar({user, setUser}) {
  const history = useHistory()

  //logout logic (delete request)
  function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((res) => {
        if (res.ok) {
          setUser(null)
          history.push('/login')
        }
      });
    }
    
    return (
        <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/userProfile">Profile</NavLink>
            <NavLink to="/reviews">My Reviews</NavLink>
            <span>Hello {user.username}!
            <button className='sign-out' onClick={handleLogoutClick}>Logout</button>
            </span>
        </div>

    )
}

export default NavBar