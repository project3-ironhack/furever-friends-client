import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CatDetails from "../components/CatDetails";
import DogDetails from "../components/DogDetails";


// const API_URL = "http://localhost:5005";  
 
 
function PetDetailsPage (props) {
  const [pet, setPet] = useState(null);
  
   const { petId } = useParams();

  const getPet = () => {          
      
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/pets/${petId}`,)
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
         {(pet !== null) && 
          <div>

          <img src={pet.image} alt={pet.name} /> 
          <h1>My name is {pet.petName}!</h1>

          <h2>Facts about me</h2>
          <p>I'm a: {pet.typeOfPet}</p>
          {pet.typeOfPet === 'cat' ?
          <CatDetails catRace={pet.catRace}/> :
          <DogDetails dogRace={pet.dogRace} />}
         {pet.typeOfPet === 'dog' &&
            <DogDetails size={pet.size}/>}
          <p>Sex: {pet.sex}</p>
          <p>Birthday: {pet.birthday}</p>
          <p><span>Age Category:</span> {pet.ageType}</p>
          <p><span>Weight:</span> {pet.weight}</p>
          <p><span>Pet Friendly:</span> {pet.petFriendly}</p>
          <p><span>Kid Friendly:</span> {pet.kidFriendly}</p>
          <p><span>Fur Length:</span> {pet.furLength}</p>
          <p><span>Neutered:</span> 
            {pet.isNeutered === true && ' yes'}
            {pet.isNeutered === false && ' no'}</p>
          <p><span>Vaccination:</span> 
            {pet.isVaccinated === true && ' yes'}
            {pet.isVaccinated === false && ' no'}</p>   
          

          <h2>My story</h2>
          <p>{pet.description}</p>

          <h2>Location</h2> 
          <p>{pet.location}</p>
          <h2>Adoption with</h2>
          <p>{pet.adoptionWith}</p>
        
      

      <Link to="/pets">
        <button>Back to pets</button>
      </Link>

      <Link to={`/pets/edit/${petId}`}>
        <button>Edit Pet</button>
      </Link>  

      <Link to={``}>
        <button>Ask about me</button>
      </Link>  
         </div>}
      
    </div>
    
  )
  
}
 
export default PetDetailsPage;