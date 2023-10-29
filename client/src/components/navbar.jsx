import React from "react";
import sunglass from './static/imgs/sunglasses.png'

function Navbar(){
    
    function logout(){
        localStorage.setItem("token","");
    }

    return (
    <nav className="navbar navbar-light  bg-brown" style={{display:"flex", justifyContent:"center", marginBottom:"1rem"}}>
        <a className="navbar-brand" href="#"style={{display:"flex", alignItems:"center"}}>
            <img src={sunglass} width="75" height="75" style={{padding: 5}} className="d-inline-block align-top" alt=""/>
            <p style={{color: "#cd7700"}}>Production Chashma </p>
        </a>
        <div  className="col-auto" style={{position:"absolute", right:"0",marginRight:"0.5rem"}}>
            <form onSubmit={logout} action="/">
                <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Logout</button>
            </form>
        </div>
    </nav>);
}

export default Navbar;