import React,{useState} from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
// import About from './components/About';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  
  const [mode,setMode] = useState('light');
  const [btnText,setText] = useState("Enable Dark-mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);   
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#101010';
      // document.body.style.backgroundColor = '#212529';
      setText("Disable Dark-mode")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      setText("Enable Dark-mode");
    }
  }

  return (
    <>
    {/* <Router> */}
      {/* <Navbar /> */}
      <Navbar title="TextUtils" homeTitle="Home" aboutTitle="About us" mode={mode} btnText={btnText} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-2">
        <TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
        {/* <Routes> */}
          {/* <Route exact path="/" element={}/> */}
          {/* <Route exact path="/About" element = {<About mode={mode} toggleMode={toggleMode}/>}/> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
