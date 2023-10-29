import React, { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

function Login(){

    const [auth,setAuth] = useState("");
    
    function authenticate(event){
        const pass = event.target[0].value;
        axios
        .post("https://nisp-dnd-server-production.up.railway.app/auth",{pass:pass})
        .then(data => {
            const obj = data.data;
            const status = obj.status;
            setAuth(status);
            localStorage.setItem("token",status);
            console.log(localStorage.getItem("token"));
        })

        if(localStorage.getItem("token") === ""){
            event.preventDefault();
        }
        
    }

    return (
        
        <div>
            <Navbar/>
            <div style={{display:"flex", justifyContent:"center",padding:"1rem"}}>
                <form onSubmit={authenticate} action="admin" className="form-inline bg-orange rounded" style={{display:"flex", justifyContent:"center",alignItems:"center", flexDirection:"column"}}>
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