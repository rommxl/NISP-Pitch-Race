import React from "react";

function Card(props){

    return(
        <div>
            <div className="card bg-orange " style={{width: "18rem", margin: "1rem"}}>
                <div className="card-body rounded">
                    <h5 className="card-title">Team: {props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Score: {props.score}</h6>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
}

export default Card;