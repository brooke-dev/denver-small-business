import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function NavBar({user, setUser}) {
    const history = useHistory()

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((res) => {
          if (res.ok) {
            setUser(null)
            history.push('/login')
          }
        });
      }

    //logout logic (delete request)

    return (
        <div className='nav'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/userProfile">Profile</NavLink>
       
            <span>Hello {user.username}!
            <button className='sign-out' onClick={handleLogoutClick}>Logout</button>
            </span>
        </div>

    )
}

export default NavBar