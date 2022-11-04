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
      <p><label>Image (jpg or png):</label>
        <input
          type="file"
          name="image"
          onChange={(e) => {handleFileUpload(e)}}
        /></p>

        <p><label className="required-field">Pet Name*:</label>
        <input
          type="text"
          name="petName"
          placeholder="please add pet name"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        /></p>


        <div id="radios">
        <p className="required-field">Choose an animal*:</p>
          <p><label>Cat</label>
          <input 
            type="radio" 
            name="typeOfPet"
            value={'cat'}
            onChange={(e) => setTypeOfPet('cat')}
          /></p>
        <p><label>Dog</label>
          <input 
            type="radio" 
            name="typeOfPet"
            value={'dog'}
            onChange={(e) => setTypeOfPet('dog')}
          /></p>
        </div> 

        {typeOfPet === 'cat' && <AddCat catRace={catRace} setCatRace={setCatRace} /> }

        {typeOfPet === 'dog' && <AddDog dogRace={dogRace} setDogRace={setDogRace} size={size} setSize={setSize}/>}


        <p><label className="required-field">Sex*:</label></p>
        <select type="string"
                name="sex"
                value={sex}
                onChange={(e) => setSex(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>

        <p><label>Birthday:</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        /></p>

        <p><label className="required-field">Age group*:</label></p>
        <select type="string"
                name="ageType"
                value={ageType}
                onChange={(e) => setAgeType(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="young">Young</option>
            <option value="adult">Adult</option>
            <option value="senior">Senior</option>
        </select>

        <p><label>Weight (kg):</label></p>
        <p><input
          type="number"
          name="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        /></p>

        <p><label>Pet friendly:</label></p>
        <p><select type="string"
                name="petFriendly"
                value={petFriendly}
                onChange={(e) => setPetFriendly(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="unknown">Unknown</option>
            <option value="no other pets">No other pets</option>
            <option value="good with cats">good with cats</option>
            <option value="good with dogs">Good with dogs</option>
            <option value="good with other">Good with other animals</option>
        </select></p>

        <p><label>Kid friendly:</label></p>
        <p><select type="string"
                name="kidFriendly"
                value={kidFriendly}
                onChange={(e) => setKidFriendly(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="unknown">Unknown</option>
            <option value="good with kids">Good with kids</option>
            <option value="not good with kids">Not good with kids</option>
        </select></p>

        <p><label>Fur Length:</label></p>
        <p><select type="string"
                name="furLength"
                value={furLength}
                onChange={(e) => setFurLength(e.target.value)} >
            <option value="">--Please choose an option--</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
            <option value="furless">Furless</option>
        </select></p>

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

        
        
        <label className="required-field">Location*:</label>
        <input
          type="string"
          name="location"
          placeholder="City name"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

 
        <p><label className="required-field">My Story*:</label></p>
        <p><textarea
          type="text"
          name="description"
          placeholder="please describe the pet and their story"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /></p>


 
        <p><button type="submit">Submit</button></p>
        <p className="required-field">* are required fields for the form.</p>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}
 
export default AddPetPage;