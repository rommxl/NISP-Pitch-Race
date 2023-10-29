import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card";
import Navbar from "../components/navbar";

function createLeaderBoard(team){

    return <Card key={team._id} name={team.name} score={team.score} story={team.story}/>
};


function Leaderboard(){

    const [details,setDetails] = useState([]);
    useEffect(()=>{
        axios
        .get("https://nisp-dnd-server-production.up.railway.app/leaderboard")
        .then(data => {
            setDetails(data.data);}
            );
    });
    

    return(
    <div>
        <Navbar/>
        <div style={{display:"flex" ,justifyContent:"center"}}>
            <div  style={{display:"flex",flexDirection:"column"}}>
                {details.map(createLeaderBoard)}
            </div>
        </div>
    </div>
        
        
    );
}

export default Leaderboard;