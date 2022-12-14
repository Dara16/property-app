import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import TenementsContainer from './components/TenementsContainer';
import TenementDetails from './components/TenementDetails';
import ApartmentsContainer from './components/ApartmentsContainer';
import ApartmentDetails from './components/ApartmentDetails';
import Layouts from './components/Layouts';
import OccupantsContainer from './components/OccupantsContainer';

function App() {
  return (
    <Router>
      <div className="App">

        <div className="navbar">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/tenements" element={<TenementsContainer />} exact/>
          <Route path="/tenements/:id" element={<TenementDetails />} exact/>
          <Route path="/apartments" element={<ApartmentsContainer />} exact/>
          <Route path="/apartments/:id" element={<ApartmentDetails />} exact/>
          <Route path="/layouts" element={<Layouts />} exact/>
          <Route path="/occupants" element={<OccupantsContainer />} exact />
        </Routes>

        <div className='footer'>

        </div>
      </div>
    </Router>
  );
}

export default App;
