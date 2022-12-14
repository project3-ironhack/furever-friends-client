import { useState, useEffect } from "react";
import axios from "axios";

function CatDetails(props) {
  const [cat, setCat] = useState(null);

  const getCat = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/cats/breeds`)
      .then((response) => {
        const oneCat = response.data;
        setCat(oneCat);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCat();
  }, []);

  return (
    <>
      {cat !== null && (
        <tr>
          <td id="info">Breed:</td>
          <td>{props.catRace}</td>
        </tr>
      )}
    </>
  );
}

export default CatDetails;
