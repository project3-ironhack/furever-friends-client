import axios from "axios";
import { useState, useEffect } from "react";

function AddAdopter(props) {
    const handleHome = (e) => props.setHome(e.target.value);
    const handleYardAccess = (e) => props.setYardAccess(e.target.value);
    const handleHasKids = (e) => props.setHasKids(e.target.value);
    const handleHasPets = (e) => props.setHasPets(e.target.value);

    const [homes, setHomes] = useState(null);
    const [pets, setPets] = useState(null);

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/auth/signup/home`)
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
    <div className="row-adopter">
      <div className="column-adopter">
        <label htmlFor="home">What kind of home do you live in?</label>
      </div>
      <div className="column-adopter">
        <select id="home" onChange={handleHome}>
          <option value="">--Please choose an option--</option>
            {homes !== null && homes.map((item) => 
              <option key={props.home}>{item}</option>
            )}
          </select>
      </div>
    </div>

   

    <div className="row">
      <div className="column-adopter">
        <label htmlFor="yard">Would a pet have yard access?</label>
      </div>
      <div className="column-adopter">
          <input
            id="yard"
            type="checkbox"
            name="yardAccess"
            value={props.yardAccess}
            onChange={handleYardAccess}
          />
      </div>
    </div>

    <div className="row">
      <div className="column-adopter">
        <label htmlFor="kids">Do you have kids?</label>
      </div>
      <div className="column-adopter">
      <input
        id="kids"
        type="checkbox"
        name="hasKids"
        value={props.hasKids}
        onChange={handleHasKids}
      />
      </div>
    </div>

    <div className="row">
      <div className="column-adopter">
        <label htmlFor="pets">Do you already have any pets?</label>
      </div>
      <div className="column-adopter">
        <select id="pets" onChange={handleHasPets} value={props.hasPets}>
        <option value="">--Please choose an option--</option>
          {pets !== null && pets.map((item) => 
            <option key={props.hasPets}>{item}</option>
          )}
        </select>
      </div>
    </div> 
      
    </div>
  );
}

export default AddAdopter;
