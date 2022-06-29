import React from "react";
import "./Card.css"

export default function GameCard ( {image, name, genre, rating, platforms}) {
    return (
        <div >
          
            <div class= "card">
            <img class= "picture "src = {image} alt = "img not found" width="250px" height="200px"/>
            <h3 class= "card" >{name}</h3>
            <p class= "card">Genre: {genre}</p>
            <p class= "card">Platforms: {platforms}</p>
            <p class="card"> Rating: {rating}</p>
            
            
            </div>
        </div>
    );
} 