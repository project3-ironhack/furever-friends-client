import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AddDog from "../components/AddDog";
import AddCat from "../components/AddCat";
 
const API_URL = "http://localhost:5005";
 
function AddPetPage(props) {
    const [name, setName] = useState("");
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
    const [typeOfPet, setTypeOfPet] = ("");
    const [catRace, setCatRace] = ("");
    const [dogRace, setDogRace] = ("");
    const [errorMessage, setErrorMessage] = useState(undefined);
     



  
 

  const handleSubmit = (e) => {                         
    e.preventDefault();
    const requestBody = { 
        petName: name, 
        sex,
        birthday,
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
        dogRace
     };
     
    //  console.log(requestBody.isVaccinated);
   
  
   
    // Send the token through the request "Authorization" Headers
    axios
      .post(
      `${API_URL}/api/pets`, requestBody)
      .then((response) => {
      // Reset the state
      setName("");
      setSex("");
      setBirthday("");
      setAgeType("");
      setDescription("");
      setWeight("");
      setPetFriendly("");
      setKidFriendly("");
      setFurLength("");
      setLocation("");
      setIsNeutered("");
      setIsVaccinated("");
      setImage("");
      setTypeOfPet("");
      setCatRace("");
      setDogRace("");
      props.refreshPets();
    


    })
    .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };


  return (
    <div className="AddPet">
      <h3>Add Pet</h3>

      <label>Image:</label>
        <input
          type="string"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
 
      <form onSubmit={handleSubmit}>
        <label>Pet Name*:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />


        <div id="radios">
          Choose an animal*
          <label>Cat</label>
          <input 
            type="radio" 
            name="typeOfPet"
            value={'cat'}
            onChange={(e) => setTypeOfPet('cat')}
          />
        <label>Dog</label>
          <input 
            type="radio" 
            name="typeOfPet"
            value={'dog'}
            onChange={(e) => setTypeOfPet('dog')}
          />
        </div> 

        {typeOfPet === 'cat' ? <AddCat /> : <AddDog />} 


        <label>Age group*:</label>
        <select type="string"
                name="sex"
                value={sex}
                onChange={(e) => setAgeType(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="female">female</option>
            <option value="male">Male</option>
        </select>

        <label>Birthday:</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />

        <label>Age group*:</label>
        <select type="string"
                name="ageType"
                value={ageType}
                onChange={(e) => setAgeType(e.target.value)} >
            <option value="">--Please choose an option--</option>
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
        <select type="string"
                name="petFriendly"
                value={petFriendly}
                onChange={(e) => setPetFriendly(e.target.value)} >
            <option value="unknown">Unknown</option>
            <option value="no other pets">No other pets</option>
            <option value="good with dogs">Good with dogs</option>
            <option value="good with other">Good with other animals</option>
        </select>

        <label>Kid friendly:</label>
        <select type="string"
                name="kidFriendly"
                value={kidFriendly}
                onChange={(e) => setKidFriendly(e.target.value)} >
            <option value="unknown">Unknown</option>
            <option value="good with kids">Good with kids</option>
            <option value="not good with kids">Not good with kids</option>
        </select>

        <label>Fur Length:</label>
        <select type="string"
                name="furLength"
                value={furLength}
                onChange={(e) => setFurLength(e.target.value)} >
             <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
            <option value="furless">Furless</option>
        </select>

        <div className="radios">
        <p>Neutered:</p>
        
        <label>Yes
          <input 
        type="radio" 
        name="isNeutered"
        value={true}
        onChange={(e) => setIsNeutered(true)}
        />
         </label>
        
        <label>No
          <input 
        type="radio" 
        name="isNeutered"
        value={false}
        onChange={(e) => setIsNeutered(false)}
        />
        </label>
        </div> 

        <div className="radios">
        <p>Vaccination:</p>
        
        <label>Yes
          <input 
        type="radio" 
        name="isVaccinated"
        value={true}
        onChange={(e) => setIsVaccinated(true)}
        />
         </label>
        
        <label >No
          <input 
        type="radio" 
        name="isVaccinated"
        value={false}
        onChange={(e) => setIsVaccinated(false)}
        />
        </label>
        </div> 

        
        
        <label>Location*:</label>
        <input
          type="string"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

 
        <label>My Story*:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


        <button type="submit">Submit</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}
 
export default AddPetPage;