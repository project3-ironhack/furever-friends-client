import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context"; 
 
function Navbar() {

  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header>
      <Link to="/">
        <h1 className="logo">Furever Friends</h1>
      </Link>

			<nav ref={navRef}>
      <Link to="/">
        Home
      </Link>
      <Link to="/pets">
       Pets
      </Link>
      <Link to="/pets/add-pet">
        Add pet
      </Link>

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
          <Link to="/signup"> Sign Up </Link>
          <Link to="/login"  className="login"> Login </Link>
        </>
      )}


				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}
 
export default Navbar;