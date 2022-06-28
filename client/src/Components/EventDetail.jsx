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

  console.log("DETALLE", elevent);

  useEffect(() => {
    dispatch(getEventDetail(id));
  }, []);

  return (
    <div>
      <div>
        <h1>EVENT DETAIL</h1>

        <Link to="/home">
          <button class="botondetail">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
