import React from "react";
import {Link} from 'react-router-dom';
import "./LandingPage.css"



export default function LandingPage () {
    return (
        <div class= "land">   

            <Link to = '/home'>
                <button className="buttonStart"></button>
            </Link>
           
            
        </div>
    )
}