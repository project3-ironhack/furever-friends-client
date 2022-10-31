  import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

 


const API_URL = "http://localhost:5005";  
 
 
function PetDetailsPage (props) {
  const [pet, setPet] = useState(null);
  
   const { petId } = useParams();

  const getPet = () => {          
     
  // const storedToken = localStorage.getItem("authToken");
 

  axios
    .get(
      `${API_URL}/api/pets/${petId}`,
      // { headers: { Authorization: `Bearer ${storedToken}` } }
    )
    .then((response) => {
      const onePet = response.data;
      setPet(onePet);
    })
    .catch((error) => console.log(error));
  };
  
  
  useEffect(()=> {                  
    getPet();
  }, [] );
 
  
  return (
         <div className="PetDetails">
         {(pet !== null) && <>

          <img src="{pet.image}" />
          <h1>{pet.petName}</h1>
          <p>Sex: {pet.sex}</p>
          <p>Birthday: {pet.birthday}</p>
          <p><span>Age Category:</span> {pet.ageType}</p>
          <p><span>Weight:</span> {pet.weight}</p>
          <p><span>Pet Friendly:</span> {pet.petFriendly}</p>
          <p><span>Kid Friendly:</span> {pet.kidFriendly}</p>
          <p><span>Fur Length:</span> {pet.furLength}</p>
          <p><span>Neutered:</span> {pet.isNeutered}</p>
          <p><span>Vaccination:</span> {pet.isVaccinated}</p>   
          <p><span>Location:</span> {pet.location}</p>
          <p><span>Adoption with:</span> {pet.adoptionWith}</p>
          <p><span>Description:</span> {pet.description}</p>
        
      

      <Link to="/pets">
        <button>Back to pets</button>
      </Link>

      <Link to={`/pets/edit/${petId}`}>
        <button>Edit Pet</button>
      </Link>  
         </>}
      
    </div>
    
  )
  
}
 
export default PetDetailsPage;