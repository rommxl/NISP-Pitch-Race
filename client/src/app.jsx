import React, { useEffect, useState } from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import LandingPage from './pages/landingpage';
import Leaderboard from './pages/leaderboard';
import Login from "./pages/login";
import Admin from "./pages/admin";
import Register from "./pages/register";
import Timer from "./pages/timer";
function App(){
    var [isLogged,setLogged] = useState(false);

    useEffect(() => {
        if(localStorage.getItem("token") === "verifiedandchecked123"){
            setLogged(true);
            
        }
    })

    return(
        <div>
            {/* {console.log(isLogged)} */}
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/leaderboard" element={<Leaderboard/>}/>
                    <Route path="/login" element={<Login/>}/>
                    {isLogged ? <Route path="/admin" element={<Admin/>}/> : <Route path="/admin" element={<Login/>}/>}
                    {isLogged ? <Route path="/register" element={<Register/>}/> : <Route path="/register" element={<Login/>}/>}
                    {isLogged ? <Route path="/timer" element={<Timer/>}/> : <Route path="/timer" element={<Login/>}/>}
                </Routes>
            </Router>
        </div>
    );
}

export default App;