import axios from "axios";
import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5005";

function EditDog(props) {

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
    }, [props.petId]);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/dogs/sizes`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
        )
        .then((response) => {
            setSizes(response.data);
        })  
    }, [props.petId]);

  return (
    <div>
    <label htmlFor="dogRace">Dog breed</label>
      <select id="dogRace" value={props.dogRace} onChange={handleDogRace}>
        { dogRaces !== null && dogRaces.map((item) => 
           <option key={item}>{item}</option>
        )}
      </select>

      <label htmlFor="size">Dog size</label>
      <select value={props.size} onChange={handleSize}>
        { sizes !== null && sizes.map((item) => 
           <option key={item}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default EditDog;