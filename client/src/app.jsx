import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import LandingPage from './pages/landingpage';
import Leaderboard from './pages/leaderboard';
import Login from "./pages/login";
import Admin from "./pages/admin";
import Register from "./pages/register";
import Timer from "./pages/timer";
function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/leaderboard" element={<Leaderboard/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/timer" element={<Timer/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;