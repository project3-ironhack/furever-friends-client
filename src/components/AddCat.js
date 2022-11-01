import axios from "axios";
import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5005";

function AddCat(props) {
    
  const handleCatRace = (e) => props.setCatRace(e.target.value);

    const [catRaces, setCatRaces] = useState(null);


    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/cats/breeds`)
        .then((response) => {
            setCatRaces(response.data);
        })  
    }, []);


  return (
    <div>
    <label for="catRace">Cat breed</label>
      <select id="catRace" onChange={handleCatRace}>
        { catRaces !== null && catRaces.map((item) => 
           <option key={props.catRace}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default AddCat;