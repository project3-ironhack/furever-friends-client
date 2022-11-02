import axios from "axios";
import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5005";

function EditCat(props) {
    
  const handleCatRace = (e) => props.setCatRace(e.target.value);

    const [catRaces, setCatRaces] = useState(null);


    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/api/cats/breeds`)
        .then((response) => {
            setCatRaces(response.data);
        })  
    }, [props.petId]);


  return (
    <div>
    <label htmlFor="catRace">Cat breed</label>
      <select
        id="props.catRace"
        value={props.catRace}
        onChange={handleCatRace}>
        { catRaces !== null && catRaces.map((item) => 
           <option key={props.catRace}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default EditCat;