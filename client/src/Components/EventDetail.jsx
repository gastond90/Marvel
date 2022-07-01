import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {getEventDetail} from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "./Botones.css";

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
    <div>
      <h1>EVENT DETAIL</h1>
      {elevent.thumbnail && (
        <div key={elevent.id}>
          <h1>{elevent?.name}</h1>

          <img
            src={`${elevent?.thumbnail.path}.${elevent?.thumbnail.extension}`}
            alt=""
            width="450"
            height="350"
          />

          <h3>Characters:</h3>

           {  elevent.characters.map(i=> <p key={key++}>{i}</p>
            
         )}

     {/*  {  elevent.images.map(i=> <img
            src={`${elevent?.images[0].path}.${elevent?.images[0].extension}`}
            alt=""
            width="450"
            height="350"
          />)} */}
        
          <h4 className="detalle"> {elevent?.description}</h4>
        </div>
      )}


      <Link to="/home/events">

        <button className="botondetail">VOLVER</button>
      </Link>
    </div>
  </div>
  );
}
