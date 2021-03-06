import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function EventCard({
  name,
  main,
  description,
  path,
  extension,
  
}) {
  return (
    <div >
      <div>
        <div >
          <div>
          
            <span >{name}</span>
            
          </div>
          <div >
            <span >
              <img
                src={`${path}.${extension}`}
                alt=""
                height="300"
                width="300"
              />
              
            </span>
            <p>{description}</p>
          </div>
        </div>
      </div>

    </div>
  );
}

