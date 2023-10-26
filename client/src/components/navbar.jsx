import React from "react";
import sunglass from './static/imgs/sunglasses.png'

function Navbar(){
    
    return (
    <nav className="navbar navbar-light bg-brown" style={{display:"flex", justifyContent:"center"}}>
        <a className="navbar-brand" href="#"style={{display:"flex", alignItems:"center"}}>
            <img src={sunglass} width="75" height="75" style={{padding: 5}} className="d-inline-block align-top" alt=""/>
            <p style={{color: "#cd7700"}}>Production Chashma </p>
        </a>
    </nav>);
}

export default Navbar;