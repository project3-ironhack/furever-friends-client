import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import CatDetails from "../components/CatDetails";
import DogDetails from "../components/DogDetails";
import "./PetDetails.css";

function PetDetailsPage(props) {
  const [pet, setPet] = useState(null);

  const { petId } = useParams();

  const getPet = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/pets/${petId}`)
      .then((response) => {
        const onePet = response.data;
        setPet(onePet);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPet();
  }, []);

  return (
    <div className="PetDetails">
      {pet !== null && (
        <div>
          <img src={pet.image} alt={pet.name} />
          <h1>My name is {pet.petName}!</h1>
          <h2>Facts about me</h2>
          <table>
            <tr>
            <td id="info">I'm a:</td>
              <td>{pet.typeOfPet}</td>
            </tr>
                {pet.typeOfPet === "cat" ? (
                  <CatDetails catRace={pet.catRace} />
                ) : (
                  <DogDetails dogRace={pet.dogRace} size={pet.size} />
                )}
            <tr>
              <td id="info">Sex:</td>
              <td>{pet.sex}</td>
            </tr>
            <tr>
            <td id="info">Birthday:</td>
              <td>{pet.birthday}</td>
            </tr>
            <tr>
            <td id="info">Age Category:</td>
              <td>{pet.ageType}</td>
            </tr>
            <tr>
            <td id="info">Weight:</td>
              <td>{pet.weight}</td>
            </tr>
            <tr>
            <td id="info">Pet Friendly:</td>
              <td>{pet.petFriendly}</td>
            </tr>
            <tr>
            <td id="info">Kid Friendly:</td>
              <td>{pet.kidFriendly}</td>
            </tr>
            <tr>
            <td id="info">Fur Length:</td>
              <td>{pet.furLength}</td>
            </tr>
            <tr>
            <td id="info">Neutered:</td>
              <td>
                {pet.isNeutered === true && "yes"}
                {pet.isNeutered === false && "no"}
              </td>
            </tr>
            <tr>
            <td id="info">Vaccination:</td>
              <td>
                {pet.isVaccinated === true && " yes"}
                {pet.isVaccinated === false && " no"}
              </td>
            </tr>
          </table>

          <h2>My story</h2>
          <p>{pet.description}</p>

          <h2>Location</h2>
          <p>{pet.location}</p>

          {/*<h2>Adoption with</h2>
          <p>{pet.adoptionWith}</p>*/}

          <Link to="/pets">
            <button>Back to pets</button>
          </Link>

          <Link to={`/pets/edit/${petId}`}>
            <button>Edit Pet</button>
          </Link>

          {/*<Link to={``}>
        <button>Ask about me</button>
      </Link>  */}
        </div>
      )}
    </div>
  );
}

export default PetDetailsPage;
