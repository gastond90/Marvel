import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
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
            <h1>{aGame?.name}</h1>

            <img
              src={`${aGame?.image.path}.${aGame?.image.extension}`}
              alt=""
              width="450"
              height="350"
            />

          
            <h4 class="detalle"> {aGame?.description}</h4>
          </div>
        )}

        <Link to="/home">
          <button class="botondetail">VOLVER</button>
        </Link>
      </div>
    </div>
  );
}
