import React from "react";
import Navbar from "../components/navbar";
import axios from "axios";

function Register(){

    function registerTeam(event){

        const name = event.target[0].value;
        const story = parseInt(event.target[1].value,10);

        axios
        .post("http://nisp-dnd-server-production.up.railway.app/registerteam",{
            name:name,
            story:story
        });
    }


    return(
        <div>
            <Navbar/>
            <div className="styled-div" >
                <form onSubmit={registerTeam} className="row gy-2 gx-3 align-items-center" style={{display:"flex",justifyContent:"center"}}>

                    <div className="col-auto">
                        <input type="text" className="form-control" id="autoSizingInput" placeholder="Enter team name"/>
                    </div>

                    <div className="col-auto">
                        <select className="form-select" id="autoSizingSelect" defaultValue={"Challenge"}>
                        <option selected>Choose Story</option>
                        <option value={1}>Story 1 - Bootstrap</option>
                        <option value={2}>Story 2 - Loan</option>
                        <option value={3}>Story 3 - Venture Capitalist</option>
                        <option value={4}>Story 4 - Fund raising</option>
                        </select>
                    </div>

                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Register</button>
                    </div>
                    
                </form>
            </div>
            <div className="col-auto" style={{display:"flex",justifyContent:"center"}}>
                <form action="/admin">
                    <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px",marginBottom:"1rem"}}>Activity points</button>
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

export default Register;