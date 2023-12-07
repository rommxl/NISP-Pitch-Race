import React from "react";
import Navbar from "../components/navbar";
import Selection from "../components/selection";
import NavbarNolog from "../components/navbarNolog";

function LandingPage(){


    return(
        <div>
            <NavbarNolog/>
            <Selection/>
        </div> 
    );
}

export default LandingPage;