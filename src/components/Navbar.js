import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';


function Navbar() {

  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className="navbar-logo">
          Furever Friends
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/pets' className='nav-links' onClick={closeMobileMenu}>
              Pets for adoption
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/pets/add-pet' className='nav-links' onClick={closeMobileMenu}>
              Place an add
            </Link>
          </li>

           {/*    If login, button logout showing  */}
          {isLoggedIn && (
            <>      
              <button onClick={logOutUser}>Logout</button>
              <span>{user && user.name}</span>
            </>
          )}

           {/*    If logout, button login and Signup showing  */}
            {!isLoggedIn && (
              <>
              <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                Login
              </Link>
              </li>
              <li className='nav-item'>
            <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
              Sign Up
            </Link>
          </li>
              </>
            )}
        </ul>
        <Button />
      </nav>

    </>
  )
}

export default Navbar;