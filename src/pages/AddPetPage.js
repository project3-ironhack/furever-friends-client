import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AddDog from "../components/AddDog";
import AddCat from "../components/AddCat";
 
function AddPetPage(props) {
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
    const [errorMessage, setErrorMessage] = useState(undefined);

    const navigate = useNavigate();


    const handleFileUpload = (e) => {
      e.preventDefault()
      const uploadData = new FormData();
      uploadData.append("image", e.target.files[0]);
      axios
        .post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
        .then((response) => {
          setImage(response.data.fileUrl)
        });
    };

  const handleSubmit = (e) => {                         
    e.preventDefault();
    const requestBody = { 
        petName, 
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
        dogRace,
        size,
        ageType

     };
    
    // Get the token from the localStorage 
    const storedToken = localStorage.getItem("authToken");
  
    // Send the token through the request "Authorization" Headers
    axios
      .post(
      `${process.env.REACT_APP_API_URL}/api/pets`, requestBody,
      { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        navigate("/pets");
      // Reset the state
      setPetName("");
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
      setSize("");
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

      <form onSubmit={handleSubmit}>
      <label>Image (jpg or png):</label>
        <input
          type="file"
          name="image"
          onChange={(e) => {handleFileUpload(e)}}
        />

        <label>Pet Name*:</label>
        <input
          type="text"
          name="petName"
          placeholder="please add pet name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
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

        {typeOfPet === 'cat' && <AddCat catRace={catRace} setCatRace={setCatRace} /> }

        {typeOfPet === 'dog' && <AddDog dogRace={dogRace} setDogRace={setDogRace} size={size} setSize={setSize}/>}


        <label>Sex*:</label>
        <select type="string"
                name="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="female">Female</option>
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

        <label>Weight (kg):</label>
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
            <option value="">--Please choose an option--</option>
            <option value="unknown">Unknown</option>
            <option value="no other pets">No other pets</option>
            <option value="good with cats">good with cats</option>
            <option value="good with dogs">Good with dogs</option>
            <option value="good with other">Good with other animals</option>
        </select>

        <label>Kid friendly:</label>
        <select type="string"
                name="kidFriendly"
                value={kidFriendly}
                onChange={(e) => setKidFriendly(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="unknown">Unknown</option>
            <option value="good with kids">Good with kids</option>
            <option value="not good with kids">Not good with kids</option>
        </select>

        <label>Fur Length:</label>
        <select type="string"
                name="furLength"
                value={furLength}
                onChange={(e) => setFurLength(e.target.value)} >
            <option value="">--Please choose an option--</option>
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
          placeholder="City name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

 
        <label>My Story*:</label>
        <textarea
          type="text"
          name="description"
          placeholder="please describe the pet and their story"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />


 
        <button type="submit">Submit</button>
        <p>* are required fields for the form.</p>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}
 
export default AddPetPage;