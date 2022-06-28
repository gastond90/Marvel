import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {getComicDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "./Botones.css";

export function ComicDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const elcomic = useSelector((state) => state.detail);

  console.log("DETALLE", elcomic);

  useEffect(() => {
    dispatch(getComicDetail(id));
  }, []);

  return (
    <div>
      <div>
        <h1>COMIC DETAIL</h1>

        <Link to="/home">
          <button class="botondetail">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
