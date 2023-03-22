
import { useState } from 'react';
import './App.css';
import Accordian from './components/Accordian';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';




function App() {
  
  
      const[mode,setMode]=useState("light");
      const[alert,setAlert]=useState("null");


      const showAlert=(msg,type)=>{

        setAlert({
          msg:msg,
          type:type
        }
        )
      setTimeout(() => {
        setAlert(null);
      }, 15000);

        

      
        
      
       
      }
    const toggleStyle=()=>{
      if(mode==="dark"){
        setMode("light");
        document.body.style.backgroundColor="floralwhite";
        showAlert("light mode enabled","success");
      }
      else{
        setMode("dark");
        document.body.style.backgroundColor="black";
        showAlert("dark mode enabled","success");
      }
    }
    
  return (
    <div id= "myDiv">
    <Navbar  title="gungun" fashion={mode} togg={toggleStyle} />
    <Alert al={alert}/>
   
  
   
    
    </div>
    
  );
}

export default App;
