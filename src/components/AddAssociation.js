import { useState, useEffect } from "react";
import axios from "axios";

// const API_URL = "http://localhost:5005";

function AddAssociation(props) {
  
  const [associations, setAssociations] = useState(null);

  const handleWebsite = (e) => props.setWebsite(e.target.value);
  const handleAssociationType = (e) => props.setAssociationType(e.target.value);
  const handleImage = (e) => props.setImage(e.target.value);

  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/auth/signup/associationtype`)
        .then((response) => {
            setAssociations(response.data);
        });
    }, []);

  return (
    <div>
      <label htmlFor="website">Association website:</label>
      <input
        id="website"
        type="text"
        name="website"
        value={props.website}
        onChange={handleWebsite}
      />
      <label htmlFor="association">What kind of association are you?</label>
      <select id="association"
        onChange={handleAssociationType}
        name="associationType"
        value={props.associationType}
      >
      <option value="">--Please choose an option--</option>
        {associations !== null &&
          associations.map((item) => (
            <option key={props.associationType}>{item}</option>
          ))}
      </select>
      <label htmlFor="image">Association image:</label>
      <input
        id="image"
        type="text"
        name="image"
        value={props.image}
        onChange={handleImage}
      />
    </div>
  );
}

export default AddAssociation;
