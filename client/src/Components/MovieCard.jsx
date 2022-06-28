import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function MovieCard({
  name,
  year,
  image
  
}) {
  return (
    <div >
      <div>
        <div >
          <div>
          
            <span >{name}</span>
            <p>{year}</p>
         
            
          </div>
          <div >
            <span >
              <img
                src={image}
                alt=""
                height="300"
                width="300"
              />
              
            </span>
           
          </div>
        </div>
      </div>

    </div>
  );
}

