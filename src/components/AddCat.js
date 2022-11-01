import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";

function AddCat(props) {
    const [catRace, setCatRace] = useState("");
    
    

    const handleCatRace = (e) => setCatRace(e.target.value);
   

    const [catRaces, setCatRaces] = useState(null);


    useEffect(() => {
        axios
        .get(`${API_URL}/api/cats/breeds`)
        .then((response) => {
            setCatRaces(response.data);
        })  
    }, []);


  return (
    <div>
    <label for="catRace">Cat breed</label>
      <select id="catRace">
        { catRaces !== null && catRaces.map((item) => 
           <option key={catRace}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default AddCat;