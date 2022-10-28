import { Link } from "react-router-dom";
 
// We are deconstructing props object directly in the parentheses of the function
function PetCard ( { petName, description, _id } ) {
  
  return (
    <div className="PetCard card">
      <Link to={`/pets/${_id}`}>
        <h3>{petName}</h3>
      </Link>
      <p style={{ maxWidth: "400px" }}>{description} </p>
    </div>
  );
}
 
export default PetCard;