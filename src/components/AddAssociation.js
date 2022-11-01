import { useState, useEffect } from "react";
import axios from "axios";

// const API_URL = "http://localhost:5005";

function AddAssociation(props) {
  const [website, setWebsite] = useState("");
  const [associationType, setAssociationType] = useState("");
  const [image, setImage] = useState("");

  const [associations, setAssociations] = useState(null);

  const handleWebsite = (e) => setWebsite(e.target.value);
  const handleAssociationType = (e) => setAssociationType(e.target.value);
  const handleImage = (e) => setImage(e.target.value);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/auth/signup/associationtype`).then((response) => {
      setAssociations(response.data);
    });
  }, []);

  return (
    <div>
      <label for="website">Association website:</label>
      <input
        id="website"
        type="text"
        name="website"
        value={website}
        onChange={handleWebsite}
      />
      <label for="association">What kind of association are you?</label>
      <select id="association">
        {associations !== null &&
          associations.map((item) => (
            <option key={associationType}>{item}</option>
          ))}
      </select>
      <label for="image">Association image:</label>
      <input
        id="image"
        type="text"
        name="image"
        value={image}
        onChange={handleImage}
      />
    </div>
  );
}

export default AddAssociation;
