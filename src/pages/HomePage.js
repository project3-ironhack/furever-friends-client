import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
return(
    <div className="home">
    <div className="home-container">
      <div className="home-content">
          <h1 className="home-title">Find your fur Friend</h1>
          <p className="home-p">We are dedicated to finding loving homes for our furry friends. Working closely with shelters and foster families, we offer a second chance to animals who deserve a happy life. Check below our available pets and make a difference in an animal's life by adopting today! </p>
          <Link to="/pets"><button className="home-button">Find your pet</button></Link>
      </div>
    </div>
  </div>
  )   
}

   
  export default HomePage;