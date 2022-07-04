import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {getEventDetail} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "./Botones.css";
import "./MovieDetail.css";

export function EventDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const elevent = useSelector((state) => state.detail);

 let key=1

  useEffect(() => {
    dispatch(getEventDetail(id));
  }, []);

  return (
    <div>

<h1>EVENT DETAIL</h1>

{elevent.thumbnail && (
  <div key={elevent.id}>
    <div class="cardpeli">
      <div class="cardpeli_left">
        <img src={`${elevent?.thumbnail.path}.${elevent?.thumbnail.extension}`} alt=""
            /* width="439" 
            height="439" *//>
      </div>
      <div class="cardpeli_right">
        <h1 className="hevent">{elevent?.name}</h1>
       
        <div class="cardpeli_right__details">

          <div class="cardpeli_right__review">
            <h6 className="desc">{elevent?.description}</h6>
           
          </div>
        </div>
      </div>
    </div>
  </div>
)}

<h3></h3>

<div className="eve">
      <h1>Characters:</h1>
        {elevent.characters?.map((i) => (
          <h4 style={{ color: "white" }}>{i}</h4>
        ))}
      </div>

<Link to="/home/events">
  <button class="botondetail">BACK</button>
</Link>


    
  </div>
  );
}
