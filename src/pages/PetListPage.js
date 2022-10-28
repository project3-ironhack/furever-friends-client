import { useState, useEffect } from "react";
import axios from "axios";

import AddPet from "../components/AddPet"; 
import PetCard from "../components/PetCard";

const API_URL = "http://localhost:5005";

function PetListPage() {
  const [pets, setPets] = useState([]);

  const getAllPets = () => {
    // Get the token from the localStorage
  const storedToken = localStorage.getItem("authToken");

  axios
    .get(
    `${API_URL}/api/pets`,
    { headers: { Authorization: `Bearer ${storedToken}` } }
  )
    .then((response) => setPets(response.data))
    .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPets();
  }, [] );
 

  return (
    <div className="PetListPage">
     <h1>Pet List Page</h1>
      
      <AddPet refreshProjects={getAllPets} />

      { pets.map((pet) => (
        <PetCard key={pet._id} {...pet} />
      ))}     
          
    </div>
  );
  }
   
  export default PetListPage;