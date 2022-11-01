import axios from "axios";
import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5005";

function AddDog(props) {

    const handleDogRace = (e) => props.setDogRace(e.target.value);
    const handleSize = (e) => props.setSize(e.target.value);
   

    const [dogRaces, setDogRaces] = useState(null);
    const [sizes, setSizes] = useState(null);


    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/dogs/breeds`)
        .then((response) => {
            setDogRaces(response.data);
        })  
    }, []);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/dogs/sizes`)
        .then((response) => {
            setSizes(response.data);
        })  
    }, []);

  return (
    <div>
    <label for="dogRace">Dog breed</label>
      <select id="dogRace" onChange={handleDogRace}>
        { dogRaces !== null && dogRaces.map((item) => 
           <option key={props.dogRace}>{item}</option>
        )}
      </select>

      <label for="size">Dog size</label>
      <select id="size" onChange={handleSize}>
        { sizes !== null && sizes.map((item) => 
           <option key={props.size}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default AddDog;
