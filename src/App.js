// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const[mode,setMode] = useState('light')
  const[alert,setAlert] = useState(null)

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })

    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode enabled", "success");
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
      showAlert("Light Mode enabled", "success");
    }
  }

  return (
    <>
    {/*<Router>*/}
  <Navbar title="The-Brogrammer"  mode={mode} toggleMode={toggleMode}></Navbar>
  <Alert alert={alert}/>
  <div className="container my-3">
    {/*<Switch>
      <Route path="/about">
      <About/>
      </Route>

      <Route path="/">*/}{/* this above part of react6 remeber the syntax , not needed now */}
      <TextForm showAlert={showAlert} heading="Talk to Bro" mode={mode}></TextForm> 
      {/*</Route>
    </Switch>*/}
   
  
  </div>
  {/*</Router>*/}
  </>
  );
}

export default App;
