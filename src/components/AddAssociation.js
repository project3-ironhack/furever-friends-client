import { useState, useEffect } from "react";
import axios from "axios";

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

      <div className="row-association">
        <div className="column-association">
          <label htmlFor="website">Association website*:</label>
        </div>
        <div className="column-association">
            <input
            id="website"
            type="text"
            name="website"
            placeholder="https://welovecats.org"
            value={props.website}
            onChange={handleWebsite}
             />
        </div>
      </div>

      <div className="row-association">
        <div className="column-association">
          <label htmlFor="association">What kind of association are you?</label>
        </div>
        <div className="column-association">
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
        </div>
      </div>

      <div className="row-association">
      <div className="column-association">
      <label htmlFor="image">Association image:</label>
      </div>
      <div className="column-association">
      <input
        id="image"
        type="text"
        name="image"
        placeholder="add an image if desired"
        value={props.image}
        onChange={handleImage}
      />
      </div>
      </div> 
    </div>
  );
}

export default AddAssociation;
