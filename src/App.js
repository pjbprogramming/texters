
import './App.css';
import Navbar from './components/Navbar';
import { useState } from "react";
import TextForm from './components/TextForm';
import React  from 'react';
function App() {
 
  //const switchColor=document.getElementById('flexSwitchCheckDefault');
 
  const [mode,setMode] = useState("light");
  const [swtchcolor, setswtchcolor] = useState("#fff");
  
 
 const toggle_Mode=()=>{

 if (mode==='light'){
 
    setMode('dark');
    setswtchcolor('#b07c07');
    document.body.style.backgroundColor='#745309';
/* switchColor.style.backgroundColor='#b07c07';
switchColor.style.border='#b07c07'; */

}
else{
  setMode('light');
  setswtchcolor('#fff');
  document.body.style.backgroundColor='white'; //#fcb74e
  
  /* switchColor.style.backgroundColor='#fff';
  switchColor.style.border='#fff'; */
}
}
  return (
 <>
 <Navbar title="Texter" link1="Home" link2="AboutUs9"  view_mode={mode} toggle_mode={toggle_Mode} swtclr={swtchcolor}/>
<TextForm swtclr={swtchcolor}/>
 </>
  );
}

export default App;
