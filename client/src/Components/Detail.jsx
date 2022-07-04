import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
/* import "./Detail.css"; */
import "./MovieDetail.css";
import "./Botones.css";

export function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const aGame = useSelector((state) => state.detail);

  console.log("DETALLE", aGame);

  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  return (
    <div>
      <div>
      {aGame.image && (
  <div key={aGame.id}>
    <div class="cardpeli">
      <div class="cardpeli_left">
        <img className="fotopj" src={`${aGame?.image.path}.${aGame?.image.extension}`} alt=""
            />
      </div>
      <div class="cardpeli_right">
        <h1 className="hevent">{aGame?.name}</h1>
       
        <div class="cardpeli_right__details">

          <div class="cardpeli_right__review">
            <h6 className="desc">{aGame?.description}</h6>
           
          </div>
        </div>
      </div>
    </div>
  </div>
)}

        <Link to="/home">
          <button className="botondetail">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
