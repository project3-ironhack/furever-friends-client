import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AddAdopter from "../components/AddAdopter";
import AddAssociation from "../components/AddAssociation";

// const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [city, setCity] = useState("");
  const [type, setType] = useState("");

  // lifting state up from AddAdopter
  const [home, setHome] = useState("apartment");
  const [yardAccess, setYardAccess] = useState("false");
  const [hasKids, setHasKids] = useState("false");
  const [hasPets, setHasPets] = useState("no");

  // lifting state up from AddAssociation
  const [website, setWebsite] = useState("");
  const [associationType, setAssociationType] = useState("rescue group");
  const [image, setImage] = useState("");

  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);
  const handleTelephone = (e) => setTelephone(e.target.value);
  const handleCity = (e) => setCity(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the request body
    const requestBody = {
      email,
      password,
      name,
      telephone,
      city,
      type,
      home,
      yardAccess,
      hasKids,
      hasPets,
      website,
      associationType,
      image,
    };
    
    // Make an axios request to the API
    // If POST request is successful redirect to login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignUpPage">
      <h1>Sign up</h1>
      <form onSubmit={handleSignupSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
        <label>Name:</label>
        <input 
          type="text"
          name="name"
          value={name}
          onChange={handleName} 
        />
        <label>Telephone:</label>
        <input
          type="number"
          name="telephone"
          value={telephone}
          onChange={handleTelephone}
        />
        <label>City:</label>
        <input 
          type="text"
          name="city"
          value={city}
          onChange={handleCity}
        />

        <div id="radios">
          Are you a potential adopter or an association?
          <label>Adopter</label>
          <input 
            type="radio" 
            name="type"
            value={'adopter'}
            onChange={(e) => setType('adopter')}
          />
        <label>Association</label>
          <input 
            type="radio" 
            name="type"
            value={'association'}
            onChange={(e) => setType('association')}
          />
        </div> 

        {type === 'adopter' ?
          <AddAdopter
            home={home}
            setHome={setHome}
            yardAccess={yardAccess}
            setYardAccess={setYardAccess}
            hasKids={hasKids}
            setHasKids={setHasKids}
            hasPets={hasPets}
            setHasPets={setHasPets} 
          /> :
          <AddAssociation
            website={website}
            setWebsite={setWebsite}
            associationType={associationType}
            setAssociationType={setAssociationType}
            image={image}
            setImage={setImage}
          />} 

        <button type="submit">Sign up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have an account?</p>
      <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default SignupPage;
