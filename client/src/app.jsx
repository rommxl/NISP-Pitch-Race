import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import LandingPage from './pages/landingpage';
import Leaderboard from './pages/leaderboard'

function App(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/leaderboard" element={<Leaderboard/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;