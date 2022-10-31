import './App.css';
import { Routes, Route } from "react-router-dom"; 

// Components
import Navbar from "./components/Navbar"; 
// import AddPet from "./components/AddPet"; 
// import IsPrivate from "./components/IsPrivate"; 

// Pages
import HomePage from "./pages/HomePage"; 
import AboutPage from "./pages/AboutPage";
import PetListPage from "./pages/PetListPage";
import PetDetailsPage from "./pages/PetDetailsPage";
// import EditPetPage from "./pages/EditPetPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";




function App() {
  return (
    <div className="App">
    <Navbar/>

    <Routes>

      <Route path='/' element={ <HomePage />} />
      <Route path='/about' element={ <AboutPage />} />
      <Route path='/pets' element={ <PetListPage />} />
      <Route path='/pets/:petId' element={<PetDetailsPage/>}/>
      



      <Route path="/signup" element={ <SignupPage /> } />
      <Route path="/login" element={ <LoginPage /> } />

    </Routes> 

      
    </div>
  );
}

export default App;
