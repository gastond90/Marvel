import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {getMovieDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "./Botones.css";

export function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const lapeli = useSelector((state) => state.detail);

  console.log("DETALLE", lapeli );

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  return (
    <div>
      <div>
        <h1>MOVIE DETAIL</h1>

        <Link to="/home">
          <button class="botondetail">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
