import React from "react";
import Navbar from "../components/navbar";

function Login(){

    return (
        <div>
            <Navbar/>
            <div style={{display:"flex", justifyContent:"center",padding:"1rem"}}>
                <form action="admin" className="form-inline bg-orange rounded" style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Password" style={{marginTop:"1rem"}}/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2 bg-brown txt-orange" style={{border:"0px"}}>Confirm identity</button>
                </form>
            </div>
        </div>
        
    );
}

export default Login;