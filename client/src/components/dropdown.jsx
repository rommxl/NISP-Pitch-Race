import axios from "axios";
import React, { useEffect, useState } from "react";
import Options from "./options";

function createTeamOptions(team){

    return(
        <Options key={team._id} name={team.name}/>
    );
}

function createActivityOptions(activity){

    return(
        <Options key={activity} name={activity}/>
    );
}


function Dropdown(){
    const [teams,setTeams] = useState([]);
    const [activities,setActivities] = useState([]);

    useEffect(()=>{
        axios
        .get("http://localhost:4000/leaderboard")
        .then((data)=>{
            setTeams(data.data);
            // console.log(data.name);
        })
    })

    function changeActivity(event){
        event.preventDefault()
        axios
        .post("http://localhost:4000/teams",{name:event.target.value})
        .then(res => {
            setActivities(res.data);
        })
    }
    

    return(
<div className="styled-div" >
    <form className="row gy-2 gx-3 align-items-center" style={{display:"flex",justifyContent:"center"}}>
        <div className="col-auto">
            <select className="form-select" id="autoSizingSelect" onChange={changeActivity}>
            <option selected>Teams</option>
            {teams.map(createTeamOptions)}
            </select>
        </div>
        <div className="col-auto">
            <select className="form-select" id="autoSizingSelect">
            <option selected>Choose challenge</option>
            {activities.map(createActivityOptions)}
            </select>
        </div>
        <div className="col-auto">
            <input type="number" className="form-control" id="autoSizingInput" placeholder="Enter Score"/>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form>
</div>
    );
}

export default Dropdown;
