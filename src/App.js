import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
// import Alert from './components/Alert.js';
import Footer from './components/Footer.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const ToggleMode = () => {
    if (mode === "light") {
      setmode('dark')
      document.body.style.backgroundColor = '#052a4a';
    } else {
      setmode("light")
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>

      {/* <Navbar title="TextUTILS" about="About us" mode={mode} ToggleMode={ToggleMode} />
      <Navbar />  
      <Alert alert='Be aware of the scams' />
      <About/> 
      <TextForm heading="Enter your text to analyze" mode={mode} />
    <Footer mode={mode} /> */}


      <Router>
        <Navbar title="TextUTILS" about="About us" mode={mode} ToggleMode={ToggleMode} />
        <Routes>
          <Route path="/" element={<TextForm heading="Enter your text to analyze" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>

      <Footer mode={mode}/>

    </>
  );
}
export default App;







