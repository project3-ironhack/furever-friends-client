import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";

function AddDog(props) {
    const [dogRace, setDogRace] = useState("");
    const [size, setSize] = useState("");
    

    const handleDogRace = (e) => setDogRace(e.target.value);
    const handleSize = (e) => setSize(e.target.value);
   

    const [dogRaces, setDogRaces] = useState(null);
    const [sizes, setSizes] = useState(null);


    useEffect(() => {
        axios
        .get(`${API_URL}/api/dogs/breeds`)
        .then((response) => {
            setDogRaces(response.data);
        })  
    }, []);

    useEffect(() => {
        axios
        .get(`${API_URL}/api/dogs/sizes`)
        .then((response) => {
            setSizes(response.data);
        })  
    }, []);

  return (
    <div>
    <label for="dogRace">Dog breed</label>
      <select id="dogRace">
        { dogRaces !== null && dogRaces.map((item) => 
           <option key={dogRace}>{item}</option>
        )}
      </select>

      <label for="size">Dog breed</label>
      <select id="size">
        { sizes !== null && sizes.map((item) => 
           <option key={size}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default AddDog;
