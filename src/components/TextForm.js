import React from 'react';
import { useState } from 'react';
export default function TextForm(props) {
  const [text, setText] = useState("");
  
  const handleChange=(event)=>{
    setText(event.target.value)
  }
  const toUpperCase=()=>
  {
 setText(text.toUpperCase());
  }

  const toLowerCase=()=>
  {
    setText(text.toLocaleLowerCase());
  }
  const clearText =()=>{
    setText("");
  }
  const copyText =()=>
  {
    let newText =document.getElementById("myBox")
    newText.select();
    navigator.clipboard.writeText(newText.value);
  }

  const removeExtaSpaces=()=>{

    let newText= text.split(/[ ]+/);
  setText(newText.join(" "));
  }
  return( <>

<div className="container">
<div className=" mb-3 my">
  <label htmlFor="exampleFormControlTextarea1" className="form-label my-3" ><strong style={{color:props.swtclr==='#fff'?'black':'#c6c3b8'}}>Enter Your Text Below</strong></label>
  <textarea className="form-control" id="myBox" value={text} onChange={handleChange} rows="9" style={{backgroundColor:props.swtclr, color:props.swtclr==='#fff'?'black':'white'}}></textarea>
</div>
<button className={`btn btn-${props.swtclr==='#fff'?'primary':'secondary'} mx-1 my-1`} type="submit " style={{color:props.swtclr==='#fff'?'white':'#c6c3b8'}} onClick={toUpperCase}>Convert To UpperCase</button>
<button className={`btn btn-${props.swtclr==='#fff'?'primary':'secondary'} mx-1 my-1`} type="submit" style={{color:props.swtclr==='#fff'?'white':'#c6c3b8'}} onClick={toLowerCase}>Convert To LowerCase</button>
<button className={`btn btn-${props.swtclr==='#fff'?'primary':'secondary'} mx-1 my-1`} type="submit" style={{color:props.swtclr==='#fff'?'white':'#c6c3b8'}} onClick={clearText}>Clear Text</button>
<button className={`btn btn-${props.swtclr==='#fff'?'primary':'secondary'} mx-1 my-1`} type="submit" style={{color:props.swtclr==='#fff'?'white':'#c6c3b8'}} onClick={copyText}>Copy Text</button>
<button className={`btn btn-${props.swtclr==='#fff'?'primary':'secondary'} mx-1 my-1`} type="submit" style={{color:props.swtclr==='#fff'?'white':'#c6c3b8'}} onClick={removeExtaSpaces}>Remove Extra Spaces</button>
</div>
  </>);
}
