import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddPet from "../components/AddTask";
 


const API_URL = "http://localhost:5005";  
 
 
function PetDetailsPage (props) {
  const [pet, setPet] = useState(null);
   // Get the URL parameter `:petId` 
   const { petId } = useParams();

   // Helper function that makes a GET request to the API
  // and retrieves the project by id
  const getPet = () => {          //  <== ADD A NEW FUNCTION
     // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");
 
  // Send the token through the request "Authorization" Headers
  axios
    .get(
      `${API_URL}/api/projects/${petId}`,
      { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => {
      const onePet = response.data;
      setPet(onePet);
    })
    .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {                   // <== ADD AN EFFECT
    getPet();
  }, [] );
 
  
  return (
    <div className="PetDetails">
      {pet && (
        <>
          <h1>{pet.name}</h1>
          <p>{pet.description}</p>
        </>
      )}

      <Link to="/projects">
        <button>Back to pets</button>
      </Link>

      <Link to={`/pets/edit/${petId}`}>
        <button>Edit Pet</button>
      </Link>  
    </div>
  );
}
 
export default PetDetailsPage;