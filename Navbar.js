import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom'
let name = "Props"
export default function Navbar(props) {
  return (
    <>
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">{props.aboutText}</a>
            </li>
            
           
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="d-flex">
            <div className="bg-warning round mx-2" onClick={()=>{props.toggleMode("warning")}} style = {{height: "30px", width : "30px", cursor:'pointer'}}></div>
            <div className="bg-success round mx-2" onClick={()=>{props.toggleMode("success")}} style = {{height: "30px", width : "30px", cursor:'pointer'}}></div>
            <div className="bg-danger round mx-2" onClick={()=>{props.toggleMode("danger")}} style = {{height: "30px", width : "30px", cursor:'pointer'}}></div>
            <div className="bg-primary round mx-2" onClick={()=>{props.toggleMode("primary")}} style = {{height: "30px", width : "30px", cursor:'pointer'}}></div>
            <div className="bg-light round mx-2" onClick={()=>{props.toggleMode("light")}} style = {{height: "30px", width : "30px", cursor:'pointer'}}></div>
            <div className="bg-dark round mx-2" onClick={()=>{props.toggleMode("dark")}} style = {{height: "30px", width : "30px", cursor:'pointer'}}></div>
            

            </div>  
          <div className={`form-check form-switch text-${props.mode==="light"? "dark": "light"}`}>
            <input className="form-check-input" type="checkbox" onClick={()=>{props.toggleMode(null)}} role="switch" id="dark1"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
        
        </div>
      </div>
   
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </nav>
  <h1 style={{ color : props.mode==='dark'? 'white': 'black'}}>Hello, {name}  </h1>
  <p style={{ color : props.mode==='dark'? 'white': 'black'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, culpa facilis itaque similique eaque temporibus odio fugiat atque soluta. Voluptatum, impedit nesciunt? Suscipit consectetur saepe cumque facilis eveniet dolore sequi, aspernatur itaque nobis hic sapiente ipsa ipsum non vel! A vel autem recusandae odit asperiores.</p>
 
</>
  )
}
Navbar.propTypes = {
  title : PropTypes.string.isRequired,
  aboutText : PropTypes.string
}
// Navbar.defaultProps = {
//      title : "Enter your name",
//      aboutText : "NOT your business"
// }