import './App.css';

import Home from './pages/Home.js';
import Login from './pages/login.js';
import Logout from './pages/Logout.js';
import Myaccount from './pages/Myaccount.js';
import Profile from './pages/Profile.js';
import Register from './pages/Register.js';
import Header from './components/Header.js';
import Anagrafica from './pages/anagrafica';
import AnagraficaC from './pages/AnagraficaC';
import Azienda from './pages/Azienda';
import Attivita from './pages/Attivita';
import Operatori from './pages/Operatori'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/anagrafica/anagraficaC" element={<AnagraficaC />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/anagrafica" element={<Anagrafica />} />
          <Route path="/azienda" element={<Azienda />} />
          <Route path="/attivita" element={<Attivita />} />
          <Route path="/operatori" element={<Operatori />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;