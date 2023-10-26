import React, {useState} from "react";
import Axios from "axios";
import axios from "axios";

function Selection(){
    const [top10,setTop10] = useState([]);

    function fetchLeaderboard(event){
        event.preventDefault();
        axios
        .get("http://localhost:3000/leaderboard")
        .then(data => console.log(data.data))
    };

    return(
    <div className="selection-body">
        <div className="row" style={{display:"flex", justifyContent:"center"}}>
            {/* <div className="col-sm-4">
                <div className="card ">
                    <div className="card-body bg-orange">
                        <h5 className="card-title ">View leaderboard</h5>
                        <a href="/leaderboard" className="btn bg-brown txt-orange">Here</a>
                    </div>
                </div>
            </div> */}
            <div className="col-sm-4 bg-orange" style={{display:"flex" ,justifyContent:"center", marginRight:50,marginLeft:50}}>
                <div className="card bg-orange" style={{display:"flex" , justifyContent:"center", borderWidth: 0}}>
                    <a href="/leaderboard" className="btn bg-brown txt-orange fontLarge" onClick={fetchLeaderboard}>Leaderboard</a>
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