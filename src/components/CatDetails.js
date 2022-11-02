import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";


function CatDetails (props) {
  const [cat, setCat] = useState(null);

  const getCat = () => {
 
  axios
    .get(
      `${process.env.REACT_APP_API_URL}/api/cats/breeds`,
    )
    .then((response) => {
      const oneCat = response.data;
      setCat(oneCat);
    })
    .catch((error) => console.log(error));
  };
  
  useEffect(()=> {                  
    getCat();
  }, [] );

  return (
         <div className="CatDetails">
         {(cat !== null) &&

          <p>Breed: {props.cat.catRace}</p>

         }
      
    </div>
    
  )
  
}
 
export default CatDetails;