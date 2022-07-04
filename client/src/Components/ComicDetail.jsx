import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {getComicDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "./Botones.css";
import "./MovieDetail.css";

export function ComicDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const elcomic = useSelector((state) => state.detail);

  let key=1

  useEffect(() => {
    dispatch(getComicDetail(id));
  }, []);

  return (
    <div>
  <h1>COMIC DETAIL</h1>

{elcomic.thumbnail && (
  <div key={elcomic.id}>
    <div class="cardpeli">
      <div class="cardpeli_left">
        <img src={`${elcomic?.thumbnail.path}.${elcomic?.thumbnail.extension}`} alt=""
            /* width="439" 
            height="439" *//>
      </div>
      <div class="cardpeli_right">
        <h1 className="hevent">{elcomic?.name}</h1>
       
        <div class="cardpeli_right__details">

          <div class="cardpeli_right__review">
            <h6 className="desc">{elcomic?.description}</h6>
           
          </div>
        </div>
      </div>
    </div>
  </div>
)}

<h3></h3>

<div className="eve">
      <h1>Characters:</h1>
        {elcomic.characters?.map((i) => (
          <h4 style={{ color: "white" }}>{i}</h4>
        ))}
      </div>

<Link to="/home/comics">
  <button class="botondetail">BACK</button>
</Link>


</div>
);
}

