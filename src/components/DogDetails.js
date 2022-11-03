import { useState, useEffect } from "react";
import axios from "axios";
import './DogDetails.css'

function DogDetails(props) {
  const [dog, setDog] = useState(null);

  const getDog = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/dogs/breeds`)
      .then((response) => {
        const oneDog = response.data;
        setDog(oneDog);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className="DogDetails">
      {dog !== null && (
        <div>
          <tr>
          <td id="info">Breed:</td>
            <td>{props.dogRace}</td>
          </tr>
          <tr>
          <td id="info">Dog size:</td>
            <td>{props.size}</td>
          </tr>
        </div>
      )}
    </div>
  );
}

export default DogDetails;
