import './App.css';
import Navbar from './Component/Navbar';
import TextArea from './Component/TextArea';
import React,{useState} from 'react';

function App() {


  let [mode, setMode] = useState('light')

  let toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "white"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }


  return (
    <div>
      <Navbar mode={mode} toggleMode = {toggleMode} />
      
      <div className='container'>
      <TextArea heading = "Enter text to analyze"/>
      </div>
      

    </div>
  );
}

export default App;
