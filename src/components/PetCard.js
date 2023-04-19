import { Link } from "react-router-dom";
import './PetCard.css';
import CatDetails from "./CatDetails";
import DogDetails from "./DogDetails";
import Image from "../dog-cat.png";

 
// We are deconstructing props object directly in the parentheses of the function
function PetCard ( { petName,location, _id, ageType, sex, weight } ) {
  
  return (
    <div className="pet-card-container">
    <div class="profile profile-default">
      <div class="profile__image"><img src={Image} alt="Dog and cat"/></div>
      <div class="profile__info">
        <h3>{petName}</h3>
        <p class="profile__info__extra">{location}</p>
      </div>
      <div class="profile__stats">
        <p class="profile__stats__title">Age</p>
        <h5 class="profile__stats__info">{ageType}</h5>
      </div>
      <div class="profile__stats">
        <p class="profile__stats__title">Weight</p>
        <h5>{weight}kg</h5>
      </div>
      <div class="profile__stats">
        <p class="profile__stats__title">Sex</p>
        <h5 class="profile__stats__info">{sex}</h5>
      </div>
      <div class="profile__cta"><Link to={`/pets/${_id}`} class="button">Adopt {petName}</Link></div>
    </div>
    </div>
    
  
    
  );
}

 
export default PetCard;