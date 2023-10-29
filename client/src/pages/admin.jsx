import React from "react";
import Dropdown from "../components/dropdown";
import Navbar from "../components/navbar";

function Admin(){

    
    return (
        <div>
            <Navbar/>
            <Dropdown/>
            <div className="col-auto" style={{display:"flex",justifyContent:"center",marginBottom:"1rem"}}>
                <form action="/register">
                    <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Register</button>
                </form>
            </div>

            <div className="col-auto" style={{display:"flex",justifyContent:"center"}}>
                <form action="/timer">
                    <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Timer</button>
                </form>
            </div>
        </div>
    );
}

export default Admin;