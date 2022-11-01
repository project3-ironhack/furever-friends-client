import axios from "axios";
import { useState, useEffect } from "react";

// const API_URL = "http://localhost:5005";

function AddAdopter(props) {
    const handleHome = (e) => props.setHome(e.target.value);
    const handleYardAccess = (e) => props.setYardAccess(e.target.value);
    const handleHasKids = (e) => props.setHasKids(e.target.value);
    const handleHasPets = (e) => props.setHasPets(e.target.value);

    const [homes, setHomes] = useState(null);
    const [pets, setPets] = useState(null);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_AOO_API_URL}/auth/signup/home`)
        .then((response) => {
            setHomes(response.data);
        })  
    }, []);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/auth/signup/haspets`)
        .then((response) => {
            setPets(response.data);
        })  
    }, []);

  return (
    <div>
    <label for="home">What kind of home do you live in?</label>
      <select id="home" onChange={handleHome}>
        {homes !== null && homes.map((item) => 
           <option key={props.home}>{item}</option>
        )}
      </select>
      <label for="yard">Would a pet have yard access?</label>
      <input
        id="yard"
        type="checkbox"
        name="yardAccess"
        value={props.yardAccess}
        onChange={handleYardAccess}
      />
      <label for="kids">Do you have kids?</label>
      <input
        id="kids"
        type="checkbox"
        name="hasKids"
        value={props.hasKids}
        onChange={handleHasKids}
      />
      <label for="pets">Do you already have any pets?</label>
      <select id="pets" onChange={handleHasPets} value={props.hasPets}>
        {pets !== null && pets.map((item) => 
           <option key={props.hasPets}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default AddAdopter;
