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
        {elcomic.thumbnail && (
          <div key={elcomic.id}>
            <h1>{elcomic?.name}</h1>

            <img
              src={`${elcomic?.thumbnail.path}.${elcomic?.thumbnail.extension}`}
              alt=""
              width="450"
              height="350"
            />

<h3>Characters:</h3>

{  elcomic.characters.map(i=> <p>{i}</p>
 
)}

       {/*  {  elcomic.images.map(i=> <img
              src={`${elcomic?.images[0].path}.${elcomic?.images[0].extension}`}
              alt=""
              width="450"
              height="350"
            />)} */}
          
            <h4 class="detalle"> {elcomic?.description}</h4>
          </div>
        )}


        <Link to="/home">
          <button class="botondetail">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
