import { useState } from "react";

function AddAdopter(props) {
    const [home, setHome] = useState("");
    const [yardAccess, setYardAccess] = useState("");
    const [hasKids, setHasKids] = useState("");
    const [hasPets, setHasPets] = useState("");

    const handleHome = (e) => setHome(e.target.value);
    const handleYardAccess = (e) => setYardAccess(e.target.value);
    const handleHasKids = (e) => setHasKids(e.target.value);
    const handleHasPets = (e) => setHasPets(e.target.value);

    return (
        <div>
            <select 
                name="home"
                value={home}
                onChange={handleHome} 
            />
            <input 
                type="checkbox"
                name="yardAccess"
                value={yardAccess}
                onChange={handleYardAccess} 
            />
            <input 
                type="checkbox"
                name="hasKids"
                value={hasKids}
                onChange={handleHasKids} 
            />
            <select 
                name="hasPets"
                value={hasPets}
                onChange={handleHasPets} 
            />
        </div>
    )
}


export default AddAdopter;