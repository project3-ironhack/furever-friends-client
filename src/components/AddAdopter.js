import axios from "axios";
import { useState, useEffect } from "react";

const API_URL = "http://localhost:5005";

function AddAdopter(props) {
    const [home, setHome] = useState("");
    const [yardAccess, setYardAccess] = useState("");
    const [hasKids, setHasKids] = useState("");
    const [hasPets, setHasPets] = useState("");

    const handleHome = (e) => setHome(e.target.value);
    const handleYardAccess = (e) => setYardAccess(e.target.value);
    const handleHasKids = (e) => setHasKids(e.target.value);
    const handleHasPets = (e) => setHasPets(e.target.value);

    const [homes, setHomes] = useState(null);
    const [pets, setPets] = useState(null);


    useEffect(() => {
        axios
        .get(`${API_URL}/auth/signup/home`)
        .then((response) => {
            setHomes(response.data);
        })  
    }, []);

    useEffect(() => {
        axios
        .get(`${API_URL}/auth/signup/haspets`)
        .then((response) => {
            setPets(response.data);
        })  
    }, []);

  return (
    <div>
    <label for="home">What kind of home do you live in?</label>
      <select id="home">
        {homes !== null && homes.map((item) => 
           <option key={home}>{item}</option>
        )}
      </select>
      <label for="yard">Would a pet have yard access?</label>
      <input
        id="yard"
        type="checkbox"
        name="yardAccess"
        value={yardAccess}
        onChange={handleYardAccess}
      />
      <label for="kids">Do you have kids?</label>
      <input
        id="kids"
        type="checkbox"
        name="hasKids"
        value={hasKids}
        onChange={handleHasKids}
      />
      <label for="pets">Do you already have any pets?</label>
      <select id="pets">
        {pets !== null && pets.map((item) => 
           <option key={hasPets}>{item}</option>
        )}
      </select>
    </div>
  );
}

export default AddAdopter;
