import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

// const API_URL = "http://localhost:5005";

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, requestBody)
      .then((response) => {
        // Request to the server's endpoint `/auth/login` returns a response
        // with the JWT string ->  response.data.authToken
        console.log("JWT token", response.data.authToken);

        storeToken(response.data.authToken);

        // Verify the token by sending a request 
        // to the server's JWT validation endpoint.
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (

    <div className="login-page">
    <form onSubmit={handleLoginSubmit} className="login-form">
       <p className="login-form-title">Log In</p>
        <div className="login-input-container">
          <input 
          type="email" 
          placeholder="Enter email" 
          name="email" value={email} 
          onChange={handleEmail} 
          />
          <span>
          </span>
        </div>
      <div class="login-input-container">
          <input 
          type="password" 
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handlePassword}
          />
        </div>
         <button type="submit" className="login-submit">
        Log In
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p className="login-signup-link">
        No account?
        <Link to="/signup">Sign up</Link>
      </p>
   </form>
   </div>
  );
}

export default LoginPage;