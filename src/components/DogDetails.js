import { useState, useEffect } from 'react';
import axios from "axios";
// import { useParams } from "react-router-dom";


function DogDetails (props) {
  const [dog, setDog] = useState(null);

  const getDog = () => {
 
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/api/dogs/breeds`,
    )
    .then((response) => {
      const oneDog = response.data;
      setDog(oneDog);
    })
    .catch((error) => console.log(error));
  };
  
  useEffect(()=> {                  
    getDog();
  }, [] );

  return (
         <div className="DogDetails">
         {(dog !== null) &&
        <div>
          <p>Breed: {props.dogRace}</p>
          <p>Dog size: {props.size}</p>
        </div>

         }
      
    </div>
    
  )
  
}
 
export default DogDetails;