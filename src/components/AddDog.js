import axios from "axios";
import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5005";

function AddDog(props) {

    const handleDogRace = (e) => props.setDogRace(e.target.value);
    const handleSize = (e) => props.setSize(e.target.value);
   

    const [dogRaces, setDogRaces] = useState(null);
    const [sizes, setSizes] = useState(null);

    // Get the token from the localStorage 
    const storedToken = localStorage.getItem("authToken");


    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/dogs/breeds`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
        )
        .then((response) => {
            setDogRaces(response.data);
        })  
    }, []);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/dogs/sizes`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
        )
        .then((response) => {
            setSizes(response.data);
        })  
    }, []);

  return (
    <div>
    <p><label htmlFor="dogRace">Dog breed</label></p>
      <select id="dogRace" onChange={handleDogRace}>
        { dogRaces !== null && dogRaces.map((item) => 
           <option key={item}>{item}</option>
        )}
      </select>

      <p><label htmlFor="size">Dog size</label></p>
      <p><select required id="size" onChange={handleSize}>
      <option value="">--Please choose an option--</option>
        { sizes !== null && sizes.map((item) => 
           <option key={item}>{item}</option>
        )}
      </select></p>
    </div>
  );
}

export default AddDog;
