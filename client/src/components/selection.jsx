import React, {useState} from "react";
import axios from "axios";

function Selection(){
    const [top10,setTop10] = useState([]);

    function fetchLeaderboard(event){
        event.preventDefault();
        axios
        .get("http://localhost:4000/leaderboard")
        .then(data => console.log(data.data))
    };

    return(
    <div className="selection-body">
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
            <div className="col-sm-4 bg-orange" style={{display:"flex" ,justifyContent:"center", marginRight:50,marginLeft:50}}>
                <div className="card bg-orange" style={{display:"flex" , justifyContent:"center", borderWidth: 0}}>
                    <a href="/leaderboard" className="btn bg-brown txt-orange fontLarge" >Leaderboard</a>
                </div>
            </div>
            <div className="col-sm-4 bg-orange" style={{display:"flex" ,justifyContent:"center", marginRight:50,marginLeft:50}}>
                <div className="card bg-orange" style={{display:"flex" , justifyContent:"center", borderWidth: 0}}>
                    <a href="#" className="btn bg-brown txt-orange fontLarge">Admin</a>
                </div>
            </div>
        </div>
    </div>

    );
}

export default Selection;