import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
// import Alert from './components/Alert.js';
import Footer from './components/Footer.js';


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


      <Navbar title="TextUTILS" about="About us" mode={mode} ToggleMode={ToggleMode} />
      <TextForm heading="Enter your text to analyze" mode={mode} />
      {/* <About mode={mode} /> */}
      <Footer mode={mode} />

    </>
  );
}
export default App;







