import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Options from "../components/options";

function createTeamOptions(team){

    return(
        <Options key={team._id} name={team.name}/>
    );
}

function Timer(){
    const [teams,setTeams] = useState([]);
    const [tempTeam,setTempTeam] = useState("");
    const [timeTaken,setTimeTaken] = useState(0);

    useEffect(()=>{
        axios
        .get("https://nisp-dnd-server-production.up.railway.app/leaderboard")
        .then((data)=>{
            setTeams(data.data);
            // console.log(data.name);
        })
    })

   
    function changeSelector(event){
        setTempTeam(event.target.value);
    }

    function startTime(){

        if(tempTeam === "Teams" || tempTeam === ""){
            window.location.reload(true);
        }
        axios
        .post("https://nisp-dnd-server-production.up.railway.app/starttime",{
            name:tempTeam
        })
        
    }

    function endTime(event){

        if(tempTeam === "Teams" || tempTeam === ""){
            window.location.reload(true);
        }

        axios
        .post("https://nisp-dnd-server-production.up.railway.app/endtime",{
            name:tempTeam
        })
        .then(data=>{
            const obj = data.data;
            const time = obj.time;
            setTimeTaken(time)
        })
        event.preventDefault();
    }

    return(
    <div>
        <Navbar/>
        <div style={{display:"flex" ,justifyContent:"center"}}>

            <form className="form-inline" style={{display:"flex",justifyContent:"center"}}>
                <div className="col-auto">
                    <select className="form-select" id="autoSizingSelect" onChange={changeSelector}>
                        <option selected>Teams</option>
                        {teams.map(createTeamOptions)}
                    </select>
                    <button onClick={startTime} className="btn btn-primary my-1" style={{margin:"1rem"}}>Start timer</button>
                    <button onClick={endTime} className="btn btn-primary my-1" style={{margin:"1rem"}}>End timer</button>
                </div>
            </form>
        </div>
        <h3 style={{textAlign:"center"}}>Total time taken was {Math.floor((timeTaken/1000)/60)} minutes and {Math.floor((timeTaken/1000)%60)} seconds</h3>
        
        <div className="col-auto" style={{display:"flex",justifyContent:"center",marginBottom:"1rem"}}>
            <form action="/register">
                <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Register</button>
            </form>
        </div>

        <div className="col-auto" style={{display:"flex",justifyContent:"center",marginBottom:"1rem"}}>
            <form action="/admin">
                <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Activity points</button>
            </form>
        </div>

        <div className="col-auto" style={{display:"flex",justifyContent:"center"}}>
            <form action="/leaderboard">
                <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Leaderboard</button>
            </form>
        </div>
    
    </div>
        
        
    );
}

export default Timer;