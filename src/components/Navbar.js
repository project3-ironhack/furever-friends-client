import { Link } from "react-router-dom";

import { useContext } from "react";                     
import { AuthContext } from "../context/auth.context"; 
 
function Navbar() {

  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext); 

  return (
    <nav>
      <Link to="/">
        <button>Home</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>

    
      <Link to="/pets">
        <button>Pets</button>
      </Link>

      <Link to="/pets/add-pet">
        <button>Add pet</button>
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
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;