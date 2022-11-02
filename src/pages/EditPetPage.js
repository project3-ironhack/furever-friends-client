import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import EditCat from "../components/EditCat";
import EditDog from "../components/EditDog";
 
// const API_URL = "http://localhost:5005";
 
function EditPetPage(props) {
  const [petName, setPetName] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");
  const [ageType, setAgeType] = useState("");
  const [description, setDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [petFriendly, setPetFriendly] = useState("");
  const [kidFriendly, setKidFriendly] = useState("");
  const [furLength, setFurLength] = useState("");
  const [location, setLocation] = useState("");
  const [isNeutered, setIsNeutered] = useState("");
  const [isVaccinated, setIsVaccinated] = useState("");
  const [image, setImage] = useState("");
  const [typeOfPet, setTypeOfPet] = useState("");
  const [catRace, setCatRace] = useState("");
  const [dogRace, setDogRace] = useState("");
  const [size, setSize] = useState("");

  // Get the URL parameter `:petId` 
  const { petId } = useParams(); 
  const navigate = useNavigate();  



   // This effect will run after the initial render and each time
 // the project id coming from URL parameter `projectId` changes
  
 useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/pets/${petId}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const onePet = response.data;
        setPetName(onePet.petName);
        setSex(onePet.description);
        setDescription(onePet.description);
        setBirthday(onePet.birthday);
        setAgeType(onePet.ageType);
        setWeight(onePet.weight);
        setPetFriendly(onePet.petFriendly);
        setKidFriendly(onePet.kidFriendly);
        setFurLength(onePet.furLength);
        setLocation(onePet.location);
        setIsNeutered(onePet.isNeutered);
        setIsVaccinated(onePet.isVaccinated);
        setImage(onePet.image);
        setTypeOfPet(onePet.typeOfPet);
        setCatRace(onePet.catRace);
        setDogRace(onePet.dogRace);
        setSize(onePet.size);
      })
      .catch((error) => console.log(error));
    
  }, [petId]);


  const handleFormSubmit = (e) => {                     
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = {
      petName,
      sex,
      birthday,
      ageType,
      description,
      weight,
      petFriendly,
      kidFriendly,
      furLength,
      location,
      isNeutered,
      isVaccinated,
      image,
      typeOfPet,
      catRace,
      dogRace,
      size,
    };
 
    // Make a PUT request to update the project
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/pets/${petId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/pets/${petId}`)
      });
  };
console.log(sex)

  const deletePet = () => {                    
    // Make a DELETE request to delete the project
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/pets/${petId}`)
      .then(() => {
        // Once the delete request is resolved successfully
        // navigate back to the list of projects.
        navigate("/pets");
      })
      .catch((err) => console.log(err));
  };  

  
  return (
    <div className="EditPetPage">
      <h3>Edit a pet Profile</h3>
 
      <form onSubmit={handleFormSubmit}>
        <label>Pet name:</label>
        <input
          type="text"
          name="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <label>Image:</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        <div id="radios">
          Choose an animal*
          <label>Cat</label>
            <input 
              type="radio"
              name="typeOfPet"
              value={'cat'}
              onChange={(e) => setTypeOfPet('cat')}
              checked={typeOfPet === 'cat' ? true : false}
            />
          <label>Dog</label>
            <input
              type="radio"
              name="typeOfPet"
              value={'dog'}
              onChange={(e) => setTypeOfPet('dog')}
              checked={typeOfPet === 'dog' ? true : false}
            />
        </div>

        {typeOfPet === 'cat' ?
          <EditCat catRace={catRace} setCatRace={setCatRace}
          /> :
          <EditDog
            dogRace={dogRace}
            setDogRace={setDogRace}
            size={size}
            setSize={setSize}
          />
        }

        <label>Sex:</label>
          <select
            id="sex"
            onChange={(e) => setSex(e.target.value)}
            value={sex}>
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>

        <label>Age group:</label>
          <select
            id="ageType"
            onChange={(e) => setAgeType(e.target.value)}
            value={ageType}>
              <option value="young">Young</option>
              <option value="adult">Adult</option>
              <option value="senior">Senior</option>
            </select>

        <label>Weight:</label>
          <input
            type="number"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        <label>Pet friendly:</label>
          <select
            id="petFriendly"
            onChange={(e) => setPetFriendly(e.target.value)}
            value={petFriendly}>
              <option value="unknown">Unknown</option>
              <option value="no other pets">No other pets</option>
              <option value="good with dogs">Good with dogs</option>
              <option value="good with other">Good with other animals</option>
            </select>

        <label>Kid friendly:</label>
          <select
            id="kidFriendly"
            onChange={(e) => setKidFriendly(e.target.value)}
            value={kidFriendly}>
              <option value="unknown">Unknown</option>
              <option value="good with kids">Good with kids</option>
              <option value="not good with kids">Not good with kids</option>
            </select>
        <label>Fur Length:</label>
          <select
            id="furLength"
            onChange={(e) => setFurLength(e.target.value)}
            value={furLength}>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
            <option value="long">Long</option>
            <option value="furless">Furless</option>
            </select>
        <div className="radios">
          <p>Neutered:</p>
            <label>Yes</label>
              <input
                type="radio"
                name="isNeutered"
                value={true}
                onChange={(e) => setIsNeutered(true)}
                checked={isNeutered}
              />
            <label>No</label>
              <input
                type="radio"
                name="isNeutered"
                value={false}
                onChange={(e) => setIsNeutered(false)}
                checked={!isNeutered}
              />
          </div>
          <div className="radios">
        <p>Vaccination:</p>
          <label>Yes</label>
            <input
              type="radio"
              name="isVaccinated"
              value={true}
              onChange={(e) => setIsVaccinated(true)}
              checked={isVaccinated}
            />
          <label>No</label>
            <input
              type="radio"
              name="isVaccinated"
              value={false}
              onChange={(e) => setIsVaccinated(false)}
              checked={!isVaccinated}
            />
          </div>
          <label>Location:</label>
            <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

        <label>My Story:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Update Pet</button>
        
      </form>
      <button onClick={deletePet}>Delete Pet</button>
    </div>
  );
}
 
export default EditPetPage;