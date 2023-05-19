import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h1>Welcome to React Router!</h1>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="about" element={<About />}/>
      <Route path="contact" element={<Contact/>}/>
     </Routes>
    </div>
  );
}

export default App;
