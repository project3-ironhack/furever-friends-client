import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; 
 
const API_URL = "http://localhost:5005";
 
function EditPetPage(props) {
  const [petName, setPetName] = useState("");
  const [description, setDescription] = useState("");

  // Get the URL parameter `:petId` 
  const { petId } = useParams(); 
  const navigate = useNavigate();  


   // This effect will run after the initial render and each time
 // the project id coming from URL parameter `projectId` changes
  
 useEffect(() => {                                  // <== ADD
    axios
      .get(`${API_URL}/api/pets/${petId}`)
      .then((response) => {
        /* 
          We update the state with the project data coming from the response.
          This way we set inputs to show the actual title and description of the project
        */
        const onePet = response.data;
        setPetName(onePet.petName);
        setDescription(onePet.description);
      })
      .catch((error) => console.log(error));
    
  }, [petId]);


  const handleFormSubmit = (e) => {                     
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { petName, description };
 
    // Make a PUT request to update the project
    axios
      .put(`${API_URL}/api/pets/${petId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the details page
        navigate(`/pets/${petId}`)
      });
  };


  const deletePet = () => {                    
    // Make a DELETE request to delete the project
    axios
      .delete(`${API_URL}/api/pets/${petId}`)
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
        
        <label>About me:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
 
        <button type="submit">Update Project</button>
        
      </form>
      <button onClick={deletePet}>Delete Project</button>
    </div>
  );
}
 
export default EditPetPage;