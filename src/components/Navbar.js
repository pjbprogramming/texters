import React from 'react';
import '../customCSS/myStyles.css';

export default function Navbar(props) {
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light mx-1 my-1  " style={{backgroundColor: props.view_mode==='light'?'#e8e1bcdb':'#aa6c1f', borderRadius: 12}}>
    <div className="container-fluid  "  >
      <a className="navbar-brand" href="/" >{props.title} <img src='/favicon-32x32.png' alt=""/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/" >{props.link1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/" >{props.link2}</a>
          </li>
          
          
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
     
     
   {/*  style={{color:'#6A55FA'}} */}
      <div className={`form-check form-switch  mx-2 text-${props.view_mode==='light'?'dark':'light'}`} >
  <input className="form-check-input " type="checkbox" onClick={props.toggle_mode} role="switch" id="flexSwitchCheckDefault" style={{backgroundColor:props.swtclr, borderColor:props.swtclr}} />
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >{props.view_mode==='light'?'Enable Dark Mode':'Enable Light Mode'}</label>
</div>
    </div>
  </nav>
  
  );
}
