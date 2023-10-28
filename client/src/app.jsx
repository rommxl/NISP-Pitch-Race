import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import LandingPage from './pages/landingpage';
import Leaderboard from './pages/leaderboard';
import Login from "./pages/login";
import Admin from "./pages/admin";

function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/leaderboard" element={<Leaderboard/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/admin" element={<Admin/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;