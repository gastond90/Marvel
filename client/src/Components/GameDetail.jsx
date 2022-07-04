import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getGameDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./Detail.css";
import "./Botones.css";
import "./MovieDetail.css";

export function GameDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const aGame = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getGameDetail(id));
  }, []);

  return (
    <div>
      {aGame.image && (
        <div key={aGame.id}>
          <div class="cardpeli">
            <div class="cardpeli_left">
              <img src={aGame.image} alt="" /* width="250" height="350" */ />
            </div>
            <div class="cardpeli_right">
              <h1 className="hevent">{aGame?.name}</h1>

              <div class="cardpeli_right__details">
                <h3 className="detalle">Genres: {aGame.genres?.join(",")}</h3>
                <h3 className="detalle">
                  Platforms: {aGame.platforms?.join(",")}
                </h3>
                <h3 className="detalle">Rating: {aGame.rating}</h3>
                <h3 className="detalle">Released: {aGame.released}</h3>

                <div class="cardpeli_right__review"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3></h3>

      <h4 className="gam">{aGame?.description}</h4>

      <Link to="/home/games">
        <button class="botondetail">BACK</button>
      </Link>
    </div>
  );
}
