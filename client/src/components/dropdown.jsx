import axios from "axios";
import React, { useEffect, useState } from "react";
import Options from "./options";

function createTeamOptions(team){

    return(
        <Options key={team._id} name={team.name}/>
    );
}



function Dropdown(){
    const [teams,setTeams] = useState([]);

    useEffect(()=>{
        axios
        .get("http://nisp-dnd-server-production.up.railway.app:4000/leaderboard")
        .then((data)=>{
            setTeams(data.data);
            // console.log(data.name);
        })
    })

    function submitScore(event){
        
        const name = event.target[0].value;
        const challenge = event.target[1].value;
        if(challenge === "Choose challenge" || name === "Teams"){
            window.location.reload();
        }
        else{
            const score = parseInt(event.target[2].value,10);
        
            axios
            .post("http://nisp-dnd-server-production.up.railway.app:4000/updatescores",{
                team_name:name,
                challenge_name:challenge,
                challenge_score:score
            })
        }
        

    }
    

    return(
<div className="styled-div" >
    <form onSubmit={submitScore} className="row gy-2 gx-3 align-items-center" style={{display:"flex",justifyContent:"center"}}>
        
        <div className="col-auto">
            <select className="form-select" id="autoSizingSelect" >
            <option selected>Teams</option>
            {teams.map(createTeamOptions)}
            </select>
        </div>

        <div className="col-auto">
            <select className="form-select" id="autoSizingSelect" defaultValue={"Challenge"}>
            <option selected>Choose challenge</option>
            <option value={"Cold call"}>Cold call</option>
            <option value={"Advertisment"}>Canva</option>
            <option value={"8th floor GK"}>GK</option>
            <option value={"Elevator pitch"}>Elevator pitch</option>
            <option value={"Coding"}>Coding</option>
            <option value={"Chess"}>Chess</option>
            <option value={"Sell me the pen"}>Sell me the pen</option>
            <option value={"Promotion reel"}>Reel</option>
            <option value={"Interview"}>Interview</option>
            <option value={"Interview"}>Penalty</option>
            </select>
        </div>

        <div className="col-auto">
            <input type="number" className="form-control" id="autoSizingInput" placeholder="Enter Score"/>
        </div>

        <div className="col-auto">
            <button type="submit" className="btn btn-primary bg-orange" style={{border:"0px"}}>Submit</button>
        </div>

    </form>
</div>
    );
}

export default Dropdown;
