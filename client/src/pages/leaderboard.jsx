import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/card";

// function fillData(){
//     var details = []
//     axios
//     .get("http://localhost:4000/leaderboard")
//     .then(data => {
//         setDetails(data);}
//         );

//     return details;
// };

function createLeaderBoard(team){

    return <Card key={team._id} name={team.name} score={team.score}/>
};


function Leaderboard(){

    const [details,setDetails] = useState([]);
    useEffect(()=>{
        axios
        .get("http://localhost:4000/leaderboard")
        .then(data => {
            setDetails(data.data);}
            );
    });
    
    return(
    <div>
        <div style={{display:"flex" ,justifyContent:"center"}}>
            <div className="hello" style={{display:"flex",flexDirection:"column"}}>
                {details.map(createLeaderBoard)}
            </div>
        </div>
    </div>
        
        
    )
};

export default Leaderboard;