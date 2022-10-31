import { useState } from "react";

function AddAssociation(props) {
    const [website, setWebsite] = useState("");
    const [associationType, setAssociationType] = useState("");
    const [image, setImage] = useState("");

    const handleWebsite = (e) => setWebsite(e.target.value);
    const handleAssociationType = (e) => setAssociationType(e.target.value);
    const handleImage = (e) => setImage(e.target.value);

    return (
        <div>
            <input 
                type="text"
                name="website"
                value={website}
                onChange={handleWebsite} 
            />
            <select 
                name="associationType"
                value={associationType}
                onChange={handleAssociationType} 
            />
            <input 
                type="text"
                name="image"
                value={image}
                onChange={handleImage} 
            />
      </div>
    )
}

export default AddAssociation;