import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetail } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import "./MovieDetail.css";
import "./Botones.css";

export function MovieDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const lapeli = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getMovieDetail(id));
  }, []);

  let key = 1;

  console.log("ELID", lapeli);

  return (
    <div>
      
      <h1>MOVIE DETAIL</h1>

      {lapeli.image &&  (
        <div key={lapeli.id}>
          <div class="cardpeli">
            <div class="cardpeli_left">
              <img src={lapeli.image} />
            </div>
            <div class="cardpeli_right">
              <h1 className="hevent">{lapeli?.title}</h1>
              <h3>
                Rating: {""}
                {lapeli.rating}
              </h3>
              <div class="cardpeli_right__details">
                <ul>
                  <li>{lapeli.year}</li>
                  <li>{lapeli.runtime}</li>
                  <li>{lapeli.genres.join(",")}</li>
                </ul>

                <div class="cardpeli_right__review">
                  <h5>{lapeli?.plot}</h5>
                  <h5>Director:{lapeli.directors}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3></h3>

      <video src={lapeli.trailer} width="640" height="480"></video>

     
      <div className="cast">
      <h1>Cast:</h1>
        {lapeli.cast?.map((i) => (
          <h4 style={{ color: "white" }}>{i}</h4>
        ))}
      </div>
      
      {lapeli.images && 
      <div className="pics">
        <h1>Pics:</h1>
        {lapeli.images.map((i) => (
          <img src={i} key={key++} alt="" width="118" height="78" />
        ))}
      </div>}

      <Link to="/home/movies">
        <button class="botondetail">BACK</button>
      </Link>
    </div>
  );
}
