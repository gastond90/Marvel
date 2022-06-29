import React from "react";
import {Link} from 'react-router-dom';
import "./LandingPage.css"



export default function LandingPage () {
    return (
        <div class= "land">   

            <Link to = '/home'>
                <button class="buttonStart"></button>
            </Link>
           
            
        </div>
    )
}