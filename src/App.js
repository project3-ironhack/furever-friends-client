import './App.css';
import { Routes, Route } from "react-router-dom"; 

// Components
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer";
import IsPrivate from "./components/IsPrivate";
import IsAnon from './components/IsAnon';


// Pages
import HomePage from "./pages/HomePage"; 
import PetListPage from "./pages/PetListPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import EditPetPage from "./pages/EditPetPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AddPetPage from "./pages/AddPetPage";




function App() {
  return (
    <div className="page-container">
    <div className="content-wrap">
    <Navbar/>

    <Routes>

      <Route path='/' element={ <HomePage />} />
      <Route path='/pets' element={ <PetListPage />} />
      <Route path='/pets/:petId' element={<PetDetailsPage/>}/>

        <Route path='/pets/edit/:petId' element={<IsPrivate><EditPetPage/></IsPrivate>}/>
        <Route path='/pets/add-pet' element={<IsPrivate><AddPetPage/></IsPrivate>}/>

      <Route path="/signup" element={ <IsAnon><SignupPage /></IsAnon> } />
      <Route path="/login" element={ <IsAnon><LoginPage /></IsAnon> } />

    </Routes>
    </div>

    <Footer />
    </div>
  );
}

export default App;

