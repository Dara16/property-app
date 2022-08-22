import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Homepage from './components/HomePage';
import TenementsContainer from './components/TenementsContainer';

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
        </Routes>

        <div className='footer'>

        </div>
      </div>
    </Router>
  );
}

export default App;
