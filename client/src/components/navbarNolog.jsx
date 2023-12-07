import React from "react";
import dnd from './static/imgs/dnd_nisp-removebg-preview - Copy.png'
import nisp_logo from './static/imgs/NISP Logo.png'
import iic_logo from './static/imgs/IIC.png'


function NavbarNolog(){
    
    function logout(){
        localStorage.setItem("token","");
    }

    return (
    <nav className="navbar navbar-light  bg-brown" style={{display:"flex", justifyContent:"center", marginBottom:"1rem"}}>
        <div style={{marginRight:"1rem"}}>
            <img src={iic_logo} width="100" height="100" style={{float:"right",backgroundColor:"#cd7700"}} />
        </div>
        <a className="navbar-brand" href="#"style={{display:"flex", alignItems:"center",flexWrap:"wrap",justifyContent:"center"}}>
            <img src={dnd} width="100" height="100" style={{padding: 5}} className="d-inline-block align-top" alt=""/>
            <p style={{color: "#cd7700",fontSize:"2rem"}}>Dreams and Deals</p>
        </a>
        <div>
            <img src={nisp_logo} width="100" height="100" style={{float:"right",backgroundColor:"#cd7700"}} />
        </div>
        
    </nav>);
}


export default NavbarNolog;